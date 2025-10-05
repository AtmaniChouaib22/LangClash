import { Server } from "socket.io";
import { redis } from "../lib/redis";
import { prisma } from "../lib/prisma";
import { AuthenticatedSocket, MatchmakingData, QueuedPlayer } from "../types";
import { BotService } from "./bot";

export class MatchmakingService {
  private io: Server;
  private readonly QUEUE_KEY = "matchmaking:queue";
  private readonly TIMEOUT_MS = 15000; // 15 seconds
  private timeouts: Map<string, NodeJS.Timeout> = new Map();
  private botService: BotService;

  constructor(io: Server) {
    this.io = io;
    this.botService = new BotService(io);
  }

  async joinQueue(
    socket: AuthenticatedSocket,
    data: MatchmakingData
  ): Promise<void> {
    try {
      // Check if user is already in queue
      const existingPlayer = await this.getPlayerFromQueue(socket.userId);
      if (existingPlayer) {
        socket.emit("matchmaking_error", { message: "Already in queue" });
        return;
      }

      // Create queued player object
      const queuedPlayer: QueuedPlayer = {
        userId: socket.userId,
        socketId: socket.id,
        user: {
          id: socket.user.id,
          name: socket.user.name,
          avatar: socket.user.avatar,
        },
        joinedAt: Date.now(),
        matchmakingData: data,
      };

      // Add to Redis queue
      await redis.hset(
        this.QUEUE_KEY,
        socket.userId,
        JSON.stringify(queuedPlayer)
      );

      socket.emit("matchmaking_joined", { message: "Looking for opponent..." });

      // Try to find a match immediately
      await this.findMatch(socket);

      // Set timeout for bot fallback
      const timeout = setTimeout(async () => {
        await this.handleTimeout(socket.userId);
      }, this.TIMEOUT_MS);

      this.timeouts.set(socket.userId, timeout);
    } catch (error) {
      console.error("Error joining matchmaking queue:", error);
      socket.emit("matchmaking_error", { message: "Failed to join queue" });
    }
  }

  async leaveQueue(socket: AuthenticatedSocket): Promise<void> {
    try {
      // Clear timeout
      const timeout = this.timeouts.get(socket.userId);
      if (timeout) {
        clearTimeout(timeout);
        this.timeouts.delete(socket.userId);
      }

      // Remove from Redis queue
      await redis.hdel(this.QUEUE_KEY, socket.userId);

      socket.emit("matchmaking_left", { message: "Left matchmaking queue" });
    } catch (error) {
      console.error("Error leaving matchmaking queue:", error);
    }
  }

  private async findMatch(socket: AuthenticatedSocket): Promise<void> {
    try {
      // Get all players in queue
      const queueData = await redis.hgetall(this.QUEUE_KEY);
      const players: QueuedPlayer[] = Object.values(queueData)
        .map((data) => JSON.parse(data as string))
        .filter((player) => player.userId !== socket.userId);

      if (players.length === 0) {
        return; // No other players in queue
      }

      // Find the first available player (simple FIFO for now)
      const opponent = players[0];

      // Create game and notify both players
      await this.createGame([socket.userId, opponent.userId], "PVP");

      // Remove both players from queue
      await this.removePlayersFromQueue([socket.userId, opponent.userId]);
    } catch (error) {
      console.error("Error finding match:", error);
    }
  }

  private async handleTimeout(userId: string): Promise<void> {
    try {
      // Check if player is still in queue
      const playerData = await this.getPlayerFromQueue(userId);
      if (!playerData) {
        return; // Player already left queue
      }

      // Create game with bot
      await this.createGame([userId], "BOT");

      // Remove player from queue
      await this.removePlayersFromQueue([userId]);

      // Notify player
      const socket = this.io.sockets.sockets.get(playerData.socketId);
      if (socket) {
        socket.emit("matchmaking_bot_match", {
          message: "No opponents found. Playing against AI!",
        });
      }
    } catch (error) {
      console.error("Error handling matchmaking timeout:", error);
    }
  }

  private async createGame(
    playerIds: string[],
    gameType: "PVP" | "BOT"
  ): Promise<string> {
    try {
      // Get random questions for the game (enough for 45 seconds of continuous play)
      const questions = await prisma.question.findMany({
        take: 20,
        orderBy: { id: "asc" }, // For now, we'll use ordered selection
      });

      if (questions.length < 10) {
        throw new Error("Not enough questions in database");
      }

      // Get users by supabaseId to get their Prisma IDs
      const users = await prisma.user.findMany({
        where: {
          supabaseId: {
            in: playerIds, // playerIds are now supabaseIds
          },
        },
        select: {
          id: true,
          supabaseId: true,
        },
      });

      // Create game in database
      const game = await prisma.game.create({
        data: {
          gameType,
          status: "WAITING_FOR_PLAYERS",
          participants: {
            create: users.map((user) => ({
              userId: user.id, // Use Prisma ID for database
              isBot: false,
            })),
          },
          gameQuestions: {
            create: questions.map((question, index) => ({
              questionId: question.id,
              order: index,
            })),
          },
        },
      });

      // Add bot participant if needed
      if (gameType === "BOT") {
        await prisma.gameParticipant.create({
          data: {
            gameId: game.id,
            isBot: true,
            botName: this.botService.getRandomBotName(),
            isReady: true, // Bots are always ready
            isConnected: true, // Bots are always connected
          },
        });
      }

      // Notify players
      for (const playerId of playerIds) {
        const player = await this.getPlayerFromQueue(playerId);
        if (player) {
          const socket = this.io.sockets.sockets.get(player.socketId);
          if (socket) {
            socket.emit("game_found", {
              gameId: game.id,
              gameType,
              message:
                gameType === "PVP" ? "Opponent found!" : "Playing against AI!",
            });
          }
        }
      }

      return game.id;
    } catch (error) {
      console.error("Error creating game:", error);
      throw error;
    }
  }

  private async getPlayerFromQueue(
    userId: string
  ): Promise<QueuedPlayer | null> {
    try {
      const data = await redis.hget(this.QUEUE_KEY, userId);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Error getting player from queue:", error);
      return null;
    }
  }

  private async removePlayersFromQueue(userIds: string[]): Promise<void> {
    try {
      // Clear timeouts
      for (const userId of userIds) {
        const timeout = this.timeouts.get(userId);
        if (timeout) {
          clearTimeout(timeout);
          this.timeouts.delete(userId);
        }
      }

      // Remove from Redis
      if (userIds.length > 0) {
        await redis.hdel(this.QUEUE_KEY, ...userIds);
      }
    } catch (error) {
      console.error("Error removing players from queue:", error);
    }
  }
}

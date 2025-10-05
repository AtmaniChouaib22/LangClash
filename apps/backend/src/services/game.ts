import { Server } from "socket.io";
import { prisma } from "../lib/prisma";
import { AuthenticatedSocket, SubmitAnswerData } from "../types";
import { BotService } from "./bot";

export class GameService {
  private io: Server;
  private readonly GAME_ROOM_PREFIX = "game:";
  private gameTimers: Map<string, NodeJS.Timeout> = new Map();
  private botService: BotService;

  constructor(io: Server) {
    this.io = io;
    this.botService = new BotService(io);
  }

  async joinGame(socket: AuthenticatedSocket, gameId: string): Promise<void> {
    try {
      // Get game from database
      const game = await prisma.game.findUnique({
        where: { id: gameId },
        include: {
          participants: {
            include: { user: true },
          },
          gameQuestions: {
            include: { question: true },
            orderBy: { order: "asc" },
          },
        },
      });

      if (!game) {
        socket.emit("game_error", { message: "Game not found" });
        return;
      }

      // Check if game is cancelled or finished
      if (game.status === "CANCELLED") {
        socket.emit("game_error", {
          message: "This game has been cancelled and cannot be joined",
        });
        return;
      }

      if (game.status === "FINISHED") {
        socket.emit("game_error", {
          message: "This game has already ended",
        });
        return;
      }

      // Check if user is a participant
      const participant = game.participants.find(
        (p) => p.user?.supabaseId === socket.userId
      );
      if (!participant) {
        socket.emit("game_error", {
          message: "You are not a participant in this game",
        });
        return;
      }

      // Join the game room
      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;
      socket.join(roomName);

      // Check if this is a reconnection
      const isReconnection = !participant.isConnected;

      // Update participant connection status
      await prisma.gameParticipant.update({
        where: { id: participant.id },
        data: { isConnected: true },
      });

      // Clear any pending disconnect timeout
      const timeoutKey = `disconnect_${gameId}_${socket.userId}`;
      if (this.gameTimers.has(timeoutKey)) {
        clearTimeout(this.gameTimers.get(timeoutKey)!);
        this.gameTimers.delete(timeoutKey);
      }

      // Send game state to the player
      const gameState = await this.getGameState(gameId);
      socket.emit("game_state", gameState);

      if (isReconnection) {
        // Notify other players about reconnection
        this.io.to(roomName).emit("player_reconnected", {
          playerId: socket.userId,
          playerName: socket.user.name,
        });
        console.log(`User ${socket.userId} reconnected to game ${gameId}`);
      } else {
        // Notify other players about new join
        socket.to(roomName).emit("player_joined", {
          playerId: socket.userId,
          playerName: socket.user.name,
        });
        console.log(`User ${socket.userId} joined game ${gameId}`);
      }
    } catch (error) {
      console.error("Error joining game:", error);
      socket.emit("game_error", { message: "Failed to join game" });
    }
  }

  async setPlayerReady(
    socket: AuthenticatedSocket,
    gameId: string
  ): Promise<void> {
    try {
      // Update participant ready status
      await prisma.gameParticipant.updateMany({
        where: {
          gameId,
          userId: socket.user.id, // Use Prisma ID for database query
        },
        data: { isReady: true },
      });

      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;

      // Notify all players (including the one who clicked ready)
      this.io.to(roomName).emit("player_ready", {
        playerId: socket.userId,
        playerName: socket.user.name,
      });

      // Check if all players are ready
      const participants = await prisma.gameParticipant.findMany({
        where: { gameId },
      });

      // For bot games, only check if human players are ready (bots are always ready)
      const humanParticipants = participants.filter((p) => !p.isBot);
      const allHumansReady = humanParticipants.every((p) => p.isReady);

      if (allHumansReady) {
        await this.startGame(gameId);
      }

      console.log(`User ${socket.userId} is ready for game ${gameId}`);
    } catch (error) {
      console.error("Error setting player ready:", error);
      socket.emit("game_error", { message: "Failed to set ready status" });
    }
  }

  async submitAnswer(
    socket: AuthenticatedSocket,
    data: SubmitAnswerData
  ): Promise<void> {
    try {
      const { gameId, questionId, answerIndex, timeSpent } = data;

      // Get the participant
      const participant = await prisma.gameParticipant.findFirst({
        where: {
          gameId,
          userId: socket.user.id, // Use Prisma ID for database query
        },
      });

      if (!participant) {
        socket.emit("game_error", {
          message: "You are not a participant in this game",
        });
        return;
      }

      // Get the question to check if answer is correct
      const question = await prisma.question.findUnique({
        where: { id: questionId },
      });

      if (!question) {
        socket.emit("game_error", { message: "Question not found" });
        return;
      }

      // Calculate score (simple scoring: 100 points per correct answer)
      const isCorrect = answerIndex === question.correctAnswerIdx;
      let score = 0;

      if (isCorrect) {
        score = 100; // Fixed 100 points per correct answer
      }

      // Update participant's answers and score
      const currentAnswers = Array.isArray(participant.answers)
        ? (participant.answers as any[])
        : [];
      const newAnswer = {
        questionId,
        answerIndex,
        isCorrect,
        timeSpent,
        score,
        timestamp: Date.now(),
      };

      await prisma.gameParticipant.update({
        where: { id: participant.id },
        data: {
          answers: [...currentAnswers, newAnswer],
          score: participant.score + score,
          currentQuestion: participant.currentQuestion + 1,
        },
      });

      // Send answer result to the player
      socket.emit("answer_result", {
        isCorrect,
        score,
        correctAnswerIndex: question.correctAnswerIdx,
        explanation: question.explanation,
      });

      // Broadcast score update to all players in the game room
      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;
      this.io.to(roomName).emit("score_update", {
        playerId: socket.user.supabaseId, // Use supabaseId to match participant IDs in game_state
        score: participant.score + score,
        currentQuestion: participant.currentQuestion + 1,
        isBot: false,
      });

      // Immediately send next question to this player if available
      await this.sendNextQuestion(
        socket,
        gameId,
        participant.currentQuestion + 1
      );

      console.log(`User ${socket.userId} submitted answer for game ${gameId}`);
    } catch (error) {
      console.error("Error submitting answer:", error);
      socket.emit("game_error", { message: "Failed to submit answer" });
    }
  }

  async handleDisconnect(socket: AuthenticatedSocket): Promise<void> {
    try {
      // Find all active games where user is participating
      const activeGames = await prisma.gameParticipant.findMany({
        where: {
          userId: socket.user.id, // Use Prisma ID for database query
          isConnected: true,
          game: {
            status: {
              in: ["WAITING_FOR_PLAYERS", "IN_PROGRESS"],
            },
          },
        },
        include: {
          game: true,
        },
      });

      // Update connection status for all active games
      await prisma.gameParticipant.updateMany({
        where: {
          userId: socket.user.id, // Use Prisma ID for database query
          isConnected: true,
        },
        data: { isConnected: false },
      });

      // Notify other players in each game about the disconnection
      for (const participant of activeGames) {
        const gameId = participant.gameId;
        const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;

        this.io.to(roomName).emit("player_disconnected", {
          playerId: socket.userId,
          playerName: socket.user.name,
          gameStatus: participant.game.status,
        });

        // If game is in waiting room and player disconnects, end the game
        if (participant.game.status === "WAITING_FOR_PLAYERS") {
          await this.cancelGame(
            gameId,
            "Player disconnected before game started"
          );
        }

        // If game is in progress, give player 30 seconds to reconnect
        if (participant.game.status === "IN_PROGRESS") {
          this.scheduleDisconnectTimeout(gameId, socket.userId);
        }

        console.log(
          `User ${socket.userId} disconnected from game ${gameId} (${participant.game.status})`
        );
      }
    } catch (error) {
      console.error("Error handling disconnect:", error);
    }
  }

  private scheduleDisconnectTimeout(gameId: string, userId: string): void {
    const timeoutKey = `disconnect_${gameId}_${userId}`;

    // Clear any existing timeout for this player
    if (this.gameTimers.has(timeoutKey)) {
      clearTimeout(this.gameTimers.get(timeoutKey)!);
    }

    // Give player 30 seconds to reconnect
    const timeout = setTimeout(async () => {
      try {
        // Check if player is still disconnected
        const participant = await prisma.gameParticipant.findFirst({
          where: {
            gameId,
            user: {
              supabaseId: userId, // userId is now supabaseId
            },
          },
        });

        if (participant && !participant.isConnected) {
          // Player didn't reconnect, forfeit the game
          await this.forfeitGame(gameId, userId);
        }

        this.gameTimers.delete(timeoutKey);
      } catch (error) {
        console.error("Error in disconnect timeout:", error);
      }
    }, 30000); // 30 seconds grace period

    this.gameTimers.set(timeoutKey, timeout);
  }

  private async cancelGame(gameId: string, reason: string): Promise<void> {
    try {
      await prisma.game.update({
        where: { id: gameId },
        data: {
          status: "CANCELLED",
          endedAt: new Date(),
        },
      });

      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;
      this.io.to(roomName).emit("game_cancelled", {
        reason,
      });

      console.log(`Game ${gameId} cancelled: ${reason}`);
    } catch (error) {
      console.error("Error cancelling game:", error);
    }
  }

  private async forfeitGame(gameId: string, userId: string): Promise<void> {
    try {
      const participants = await prisma.gameParticipant.findMany({
        where: { gameId },
        include: { user: true },
      });

      // Find the opponent (who didn't disconnect)
      // userId is now supabaseId, so compare with user.supabaseId
      const opponent = participants.find(
        (p) => p.user?.supabaseId !== userId && !p.isBot
      );

      if (opponent) {
        // Update game status and set opponent as winner
        await prisma.game.update({
          where: { id: gameId },
          data: {
            status: "FINISHED",
            endedAt: new Date(),
            winnerId: opponent.userId,
          },
        });

        // Update user statistics
        for (const participant of participants) {
          if (participant.user) {
            await prisma.user.update({
              where: { id: participant.userId! },
              data: {
                gamesPlayed: { increment: 1 },
                gamesWon:
                  participant.userId === opponent.userId
                    ? { increment: 1 }
                    : undefined,
                totalScore: { increment: participant.score },
              },
            });
          }
        }

        const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;

        // Send forfeit notification
        this.io.to(roomName).emit("game_ended", {
          winner: {
            id: opponent.isBot
              ? `bot_${opponent.id}`
              : opponent.user?.supabaseId || opponent.userId,
            name: opponent.user?.name || opponent.botName,
            score: opponent.score,
          },
          isTie: false,
          results: participants.map((p) => ({
            id: p.isBot ? `bot_${p.id}` : p.user?.supabaseId || p.userId,
            name: p.user?.name || p.botName,
            score: p.score,
            isBot: p.isBot,
          })),
          reason: "Opponent disconnected",
        });

        // Clear the main game timer to prevent endGame from running
        const gameTimerKey = `game_${gameId}`;
        if (this.gameTimers.has(gameTimerKey)) {
          clearTimeout(this.gameTimers.get(gameTimerKey)!);
          this.gameTimers.delete(gameTimerKey);
        }

        // Clear any other timers for this game
        Array.from(this.gameTimers.keys())
          .filter((key) => key.startsWith(gameId) || key.includes(gameId))
          .forEach((key) => {
            clearTimeout(this.gameTimers.get(key)!);
            this.gameTimers.delete(key);
          });

        console.log(`Game ${gameId} forfeited by user ${userId}`);
      }
    } catch (error) {
      console.error("Error forfeiting game:", error);
    }
  }

  private async startGame(gameId: string): Promise<void> {
    try {
      // Update game status
      await prisma.game.update({
        where: { id: gameId },
        data: {
          status: "IN_PROGRESS",
          startedAt: new Date(),
        },
      });

      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;

      // Get first question
      const gameState = await this.getGameState(gameId);

      // Notify all players that the game is starting
      this.io.to(roomName).emit("game_started", gameState);

      // Start 45-second game timer
      this.startGameTimer(gameId);

      // Start bot auto-play if there are bots in the game
      await this.startBotAutoPlay(gameId);

      console.log(`Game ${gameId} started`);
    } catch (error) {
      console.error("Error starting game:", error);
    }
  }

  private startGameTimer(gameId: string): void {
    const timerId = `game_${gameId}`;

    const timer = setTimeout(async () => {
      try {
        // End game after 45 seconds
        await this.endGame(gameId);
        this.gameTimers.delete(timerId);
      } catch (error) {
        console.error("Error in game timer:", error);
      }
    }, 45000); // 45 seconds total game time

    this.gameTimers.set(timerId, timer);
  }

  private async startBotAutoPlay(gameId: string): Promise<void> {
    try {
      // Get bot participants in this game
      const botParticipants = await prisma.gameParticipant.findMany({
        where: {
          gameId,
          isBot: true,
        },
      });

      // Start continuous play for each bot
      for (const bot of botParticipants) {
        await this.botService.startContinuousPlay(gameId, bot.id);
      }
    } catch (error) {
      console.error("Error starting bot auto-play:", error);
    }
  }

  private async sendNextQuestion(
    socket: AuthenticatedSocket,
    gameId: string,
    questionIndex: number
  ): Promise<void> {
    try {
      // Get the next question for this game
      const gameQuestion = await prisma.gameQuestion.findFirst({
        where: {
          gameId,
          order: questionIndex,
        },
        include: { question: true },
      });

      if (gameQuestion) {
        // Send next question to this specific player
        socket.emit("next_question", {
          questionIndex,
          question: {
            id: gameQuestion.question.id,
            text: gameQuestion.question.text,
            options: gameQuestion.question.options,
            order: questionIndex,
          },
        });
      }
      // If no more questions available, player just waits for game timer to end
    } catch (error) {
      console.error("Error sending next question:", error);
    }
  }

  private async endGame(gameId: string): Promise<void> {
    try {
      // Check if game is already finished or cancelled
      const game = await prisma.game.findUnique({
        where: { id: gameId },
      });

      if (!game || game.status === "FINISHED" || game.status === "CANCELLED") {
        console.log(`Game ${gameId} already ended, skipping endGame`);
        return;
      }

      const participants = await prisma.gameParticipant.findMany({
        where: { gameId },
        include: { user: true },
        orderBy: { score: "desc" },
      });

      const highestScore = participants[0].score;
      const winners = participants.filter((p) => p.score === highestScore);
      const isTie = winners.length > 1;

      // For DB, store first winner's userId (or null if tie/bot)
      const winner = winners[0];

      console.log(`Game ${gameId} winner determination:`, {
        highestScore,
        winnerName: winner.user?.name || winner.botName,
        winnerUserId: winner.user?.id,
        winnerParticipantUserId: winner.userId,
        isBot: winner.isBot,
        isTie,
        allParticipants: participants.map((p) => ({
          name: p.user?.name || p.botName,
          score: p.score,
          userId: p.user?.id,
          participantUserId: p.userId,
          isBot: p.isBot,
        })),
      });

      // Update game status
      await prisma.game.update({
        where: { id: gameId },
        data: {
          status: "FINISHED",
          endedAt: new Date(),
          winnerId: isTie ? null : winner.userId,
        },
      });

      // Update user statistics
      for (const participant of participants) {
        if (participant.user) {
          const isWinner = isTie ? false : participant.id === winner.id;
          await prisma.user.update({
            where: { id: participant.userId! },
            data: {
              gamesPlayed: { increment: 1 },
              gamesWon: isWinner ? { increment: 1 } : undefined,
              totalScore: { increment: participant.score },
            },
          });
        }
      }

      const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;

      // Send final results with proper IDs for both users and bots
      // Use supabaseId from user relation, not the Prisma database ID
      const gameEndedPayload = {
        winner: isTie
          ? null
          : {
              id: winner.isBot
                ? `bot_${winner.id}`
                : winner.user?.supabaseId || winner.userId,
              name: winner.user?.name || winner.botName,
              score: winner.score,
            },
        isTie,
        results: participants.map((p) => ({
          id: p.isBot ? `bot_${p.id}` : p.user?.supabaseId || p.userId,
          name: p.user?.name || p.botName,
          score: p.score,
          isBot: p.isBot,
        })),
      };

      console.log(`Game ${gameId} ended. Payload details:`, {
        winner: gameEndedPayload.winner,
        isTie: gameEndedPayload.isTie,
        results: gameEndedPayload.results,
      });

      this.io.to(roomName).emit("game_ended", gameEndedPayload);

      // Clear any remaining timers
      Array.from(this.gameTimers.keys())
        .filter((key) => key.startsWith(gameId))
        .forEach((key) => {
          clearTimeout(this.gameTimers.get(key)!);
          this.gameTimers.delete(key);
        });

      console.log(`Game ${gameId} ended`);
    } catch (error) {
      console.error("Error ending game:", error);
    }
  }

  private async getGameState(gameId: string) {
    const game = await prisma.game.findUnique({
      where: { id: gameId },
      include: {
        participants: {
          include: { user: true },
        },
        gameQuestions: {
          include: { question: true },
          orderBy: { order: "asc" },
        },
      },
    });

    if (!game) return null;

    return {
      gameId: game.id,
      status: game.status,
      currentQuestion: game.currentQuestion,
      questions: game.gameQuestions.map((gq) => ({
        id: gq.question.id,
        text: gq.question.text,
        options: gq.question.options,
        order: gq.order,
      })),
      participants: game.participants.map((p) => ({
        id: p.isBot ? `bot_${p.id}` : p.user?.supabaseId || p.userId,
        name: p.user?.name || p.botName,
        score: p.score,
        currentQuestion: p.currentQuestion,
        isBot: p.isBot,
        isReady: p.isReady,
        isConnected: p.isConnected,
      })),
      timePerQuestion: game.timePerQuestion,
      startedAt: game.startedAt,
    };
  }
}

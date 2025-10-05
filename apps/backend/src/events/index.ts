import { Server, Socket } from "socket.io";
import { MatchmakingService } from "../services/matchmaking";
import { GameService } from "../services/game";
import { AuthenticatedSocket, MatchmakingData } from "../types";

export function setupSocketHandlers(io: Server) {
  const matchmakingService = new MatchmakingService(io);
  const gameService = new GameService(io);

  io.on("connection", (socket: Socket) => {
    const authSocket = socket as AuthenticatedSocket;
    console.log(
      `User ${authSocket.user.name} connected with socket ${authSocket.id}`
    );

    // Join user to their personal room for direct messages
    authSocket.join(`user:${authSocket.userId}`);

    // Matchmaking events
    authSocket.on("join_matchmaking_queue", async (data: MatchmakingData) => {
      try {
        await matchmakingService.joinQueue(authSocket, data);
      } catch (error) {
        console.error("Error joining matchmaking queue:", error);
        authSocket.emit("error", {
          message: "Failed to join matchmaking queue",
        });
      }
    });

    authSocket.on("leave_matchmaking_queue", async () => {
      try {
        await matchmakingService.leaveQueue(authSocket);
      } catch (error) {
        console.error("Error leaving matchmaking queue:", error);
        authSocket.emit("error", {
          message: "Failed to leave matchmaking queue",
        });
      }
    });

    // Game events
    authSocket.on("join_game", async (data) => {
      try {
        await gameService.joinGame(authSocket, data.gameId);
      } catch (error) {
        console.error("Error joining game:", error);
        authSocket.emit("error", { message: "Failed to join game" });
      }
    });

    authSocket.on("player_ready", async (data) => {
      try {
        await gameService.setPlayerReady(authSocket, data.gameId);
      } catch (error) {
        console.error("Error setting player ready:", error);
        authSocket.emit("error", { message: "Failed to set player ready" });
      }
    });

    authSocket.on("submit_answer", async (data) => {
      try {
        await gameService.submitAnswer(authSocket, data);
      } catch (error) {
        console.error("Error submitting answer:", error);
        authSocket.emit("error", { message: "Failed to submit answer" });
      }
    });

    authSocket.on("disconnect", async () => {
      console.log(`User ${authSocket.user.name} disconnected`);
      try {
        await matchmakingService.leaveQueue(authSocket);
        await gameService.handleDisconnect(authSocket);
      } catch (error) {
        console.error("Error handling disconnect:", error);
      }
    });
  });
}

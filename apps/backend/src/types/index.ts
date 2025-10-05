import { Socket } from "socket.io";

// Type definitions for socket server
export interface AuthenticatedSocket extends Socket {
  userId: string;
  user: {
    id: string;
    supabaseId: string;
    email: string;
    name?: string;
    avatar?: string;
  };
}

export interface MatchmakingData {
  gameType?: "PVP" | "BOT";
  difficulty?: "easy" | "medium" | "hard";
  category?: string;
}

export interface QueuedPlayer {
  userId: string;
  socketId: string;
  user: {
    id: string;
    name?: string;
    avatar?: string;
  };
  joinedAt: number;
  matchmakingData: MatchmakingData;
}

export interface GameRoom {
  id: string;
  players: string[]; // user IDs
  status: "waiting" | "starting" | "in_progress" | "finished";
  questions: string[]; // question IDs
  currentQuestion: number;
  scores: Record<string, number>;
  startedAt?: number;
}

export interface SubmitAnswerData {
  gameId: string;
  questionId: string;
  answerIndex: number;
  timeSpent: number;
}

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/lib/supabase";

interface SocketContextType {
  socket: Socket | null;
  isConnected: boolean;
  joinMatchmaking: (data?: any) => void;
  leaveMatchmaking: () => void;
  joinGame: (gameId: string) => void;
  setPlayerReady: (gameId: string) => void;
  submitAnswer: (data: any) => void;
  setCurrentGameId: (gameId: string | null) => void;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export function SocketProvider({ children }: { children: React.ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [currentGameId, setCurrentGameId] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const initSocket = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.access_token) {
          const newSocket = io(
            process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001",
            {
              auth: {
                token: session.access_token,
              },
            }
          );

          newSocket.on("connect", () => {
            console.log("Connected to server");
            setIsConnected(true);

            // Auto-rejoin current game on reconnection
            if (currentGameId) {
              console.log(`Auto-rejoining game ${currentGameId}`);
              newSocket.emit("join_game", { gameId: currentGameId });
            }
          });

          newSocket.on("disconnect", () => {
            console.log("Disconnected from server");
            setIsConnected(false);
          });

          newSocket.on("connect_error", (error) => {
            console.error("Connection error:", error);
            setIsConnected(false);
          });

          setSocket(newSocket);
        }
      };

      initSocket();
    } else {
      // Clean up socket if user logs out
      if (socket) {
        socket.close();
        setSocket(null);
        setIsConnected(false);
      }
    }

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [user]);

  const joinMatchmaking = (data = {}) => {
    if (socket) {
      socket.emit("join_matchmaking_queue", data);
    }
  };

  const leaveMatchmaking = () => {
    if (socket) {
      socket.emit("leave_matchmaking_queue");
    }
  };

  const joinGame = (gameId: string) => {
    if (socket) {
      socket.emit("join_game", { gameId });
    }
  };

  const setPlayerReady = (gameId: string) => {
    if (socket) {
      socket.emit("player_ready", { gameId });
    }
  };

  const submitAnswer = (data: any) => {
    if (socket) {
      socket.emit("submit_answer", data);
    }
  };

  const value: SocketContextType = {
    socket,
    isConnected,
    joinMatchmaking,
    leaveMatchmaking,
    joinGame,
    setPlayerReady,
    submitAnswer,
    setCurrentGameId,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
}

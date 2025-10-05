"use client";

import React, { useState, useEffect } from "react";
import { useSocket } from "./SocketProvider";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "./LoadingSpinner";

interface MatchmakingProps {
  onGameFound?: (gameId: string) => void;
}

export function MatchmakingComponent({ onGameFound }: MatchmakingProps) {
  const [isInQueue, setIsInQueue] = useState(false);
  const [queueStatus, setQueueStatus] = useState("");
  const [countdown, setCountdown] = useState(15);
  const { socket, isConnected, joinMatchmaking, leaveMatchmaking } =
    useSocket();
  const router = useRouter();

  useEffect(() => {
    if (!socket) return;

    // Listen for matchmaking events
    socket.on("matchmaking_joined", (data) => {
      setQueueStatus(data.message || "Looking for opponent...");
      setIsInQueue(true);
      startCountdown();
    });

    socket.on("matchmaking_left", (data) => {
      setQueueStatus("");
      setIsInQueue(false);
      setCountdown(15);
    });

    socket.on("game_found", (data) => {
      setQueueStatus(`${data.message} Starting game...`);
      setIsInQueue(false);
      setCountdown(15);

      // Navigate to game after a brief delay
      setTimeout(() => {
        if (onGameFound) {
          onGameFound(data.gameId);
        } else {
          router.push(`/game/${data.gameId}`);
        }
      }, 2000);
    });

    socket.on("matchmaking_bot_match", (data) => {
      setQueueStatus(data.message || "Playing against AI!");
      setIsInQueue(false);
      setCountdown(30);
    });

    socket.on("matchmaking_error", (data) => {
      setQueueStatus(`Error: ${data.message}`);
      setIsInQueue(false);
      setCountdown(30);
    });

    return () => {
      socket.off("matchmaking_joined");
      socket.off("matchmaking_left");
      socket.off("game_found");
      socket.off("matchmaking_bot_match");
      socket.off("matchmaking_error");
    };
  }, [socket, router, onGameFound]);

  const startCountdown = () => {
    let count = 15;
    const timer = setInterval(() => {
      count -= 1;
      setCountdown(count);

      if (count <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  };

  const handleJoinQueue = () => {
    if (!isConnected) {
      setQueueStatus("Not connected to server");
      return;
    }

    joinMatchmaking({
      gameType: "PVP",
      difficulty: "medium",
      category: "spanish",
    });
  };

  const handleLeaveQueue = () => {
    leaveMatchmaking();
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 w-full">
      <div className="flex items-center mb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mr-3 shadow-lg flex-shrink-0">
          <span className="text-3xl">⚔️</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Quick Battle
        </h2>
      </div>

      {!isInQueue ? (
        <div className="flex flex-col">
          <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
            Challenge another player in an exciting 5-question Spanish quiz
            battle! Test your skills and climb the ranks!
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleJoinQueue}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-xl">🚀</span>
              <span>Find Opponent</span>
            </button>
          </div>
          {queueStatus && !isInQueue && (
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <p className="text-sm text-gray-700 text-center font-medium">
                {queueStatus}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <div className="mb-6">
            <LoadingSpinner variant="dots" size="lg" />
            <p className="text-lg font-semibold text-gray-800 mb-3 mt-6">
              {queueStatus}
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">🤖</span>
                <span className="text-sm font-medium text-gray-700">
                  {countdown > 0 ? (
                    <span>
                      AI opponent in{" "}
                      <span className="text-blue-600 font-bold text-lg">
                        {countdown}s
                      </span>{" "}
                      if no player found
                    </span>
                  ) : (
                    <span className="text-blue-600">
                      Assigning AI opponent...
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Animated Progress Bar */}
            <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${((15 - countdown) / 15) * 100}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
              </div>
            </div>

            {/* Countdown Ring Visualization */}
            <div className="flex justify-center mt-4">
              <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="#e5e7eb"
                    strokeWidth="4"
                    fill="none"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (countdown / 15)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-gray-700">
                    {countdown}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleLeaveQueue}
              className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-xl hover:from-gray-600 hover:to-gray-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
            >
              Cancel Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

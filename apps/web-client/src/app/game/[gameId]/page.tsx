"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSocket } from "@/components/SocketProvider";
import { useParams, useRouter } from "next/navigation";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";
import { CircularTimer } from "@/components/Timer";
import { LoadingSpinner } from "@/components/LoadingSpinner";

interface Question {
  id: string;
  text: string;
  options: string[];
  order: number;
}

interface Participant {
  id: string;
  name: string;
  score: number;
  currentQuestion: number;
  isBot: boolean;
  isReady: boolean;
  isConnected: boolean;
}

interface GameState {
  gameId: string;
  status: string;
  currentQuestion: number;
  questions: Question[];
  participants: Participant[];
  timePerQuestion: number;
  startedAt?: string;
}

interface GameResult {
  winner: {
    id: string;
    name: string;
    score: number;
  } | null;
  isTie?: boolean;
  results: Array<{
    id: string;
    name: string;
    score: number;
    isBot: boolean;
  }>;
  reason?: string;
}

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const gameId = params.gameId as string;
  const { user } = useAuth();
  const {
    socket,
    isConnected,
    joinGame,
    setPlayerReady,
    submitAnswer,
    setCurrentGameId,
  } = useSocket();

  const [gameState, setGameState] = useState<GameState | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const [answerResult, setAnswerResult] = useState<any>(null);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [disconnectedPlayers, setDisconnectedPlayers] = useState<Set<string>>(
    new Set()
  );
  const [reconnectionMessage, setReconnectionMessage] = useState<string | null>(
    null
  );
  const [gameCancelled, setGameCancelled] = useState<{
    cancelled: boolean;
    reason: string;
  } | null>(null);

  // Ref to track if we should delay question transitions for answer feedback
  const hasAnswerFeedbackRef = useRef(false);

  // Set current user ID from auth
  useEffect(() => {
    if (user) {
      setCurrentUserId(user.id);
    }
  }, [user]);

  // Join game when component mounts
  useEffect(() => {
    if (socket && gameId && isConnected) {
      setCurrentGameId(gameId);
      joinGame(gameId);
    }

    // Cleanup: clear current game ID when leaving the page
    return () => {
      setCurrentGameId(null);
    };
  }, [socket, gameId, isConnected, joinGame, setCurrentGameId]);

  // Socket event listeners
  useEffect(() => {
    if (!socket) return;

    socket.on("game_state", (state: GameState) => {
      console.log("Game state received:", state);
      setGameState(state);
      setCurrentQuestionIndex(state.currentQuestion);
    });

    socket.on("game_started", (state: GameState) => {
      console.log("Game started:", state);
      setGameState(state);
      setCurrentQuestionIndex(0);
      setTimeLeft(45); // 45 seconds total game time
      setIsAnswered(false);
      setSelectedAnswer(null);
    });

    socket.on(
      "next_question",
      (data: { questionIndex: number; question: any }) => {
        console.log("Next question:", data);

        // If there's answer feedback showing, delay the transition to let user see feedback
        if (hasAnswerFeedbackRef.current) {
          setTimeout(() => {
            setCurrentQuestionIndex(data.questionIndex);
            // Don't reset timer - game continues with same countdown
            setIsAnswered(false);
            setSelectedAnswer(null);
            setAnswerResult(null);
            hasAnswerFeedbackRef.current = false;

            // Update current question in game state if provided
            if (data.question && gameState) {
              const updatedQuestions = [...gameState.questions];
              updatedQuestions[data.questionIndex] = data.question;
              setGameState({ ...gameState, questions: updatedQuestions });
            }
          }, 2500); // 2.5 second delay to show answer feedback
        } else {
          // No answer result, proceed immediately
          setCurrentQuestionIndex(data.questionIndex);
          // Don't reset timer - game continues with same countdown
          setIsAnswered(false);
          setSelectedAnswer(null);
          setAnswerResult(null);
          hasAnswerFeedbackRef.current = false;

          // Update current question in game state if provided
          if (data.question && gameState) {
            const updatedQuestions = [...gameState.questions];
            updatedQuestions[data.questionIndex] = data.question;
            setGameState({ ...gameState, questions: updatedQuestions });
          }
        }
      }
    );

    socket.on("answer_result", (result: any) => {
      console.log("Answer result:", result);
      setAnswerResult(result);
      hasAnswerFeedbackRef.current = true;

      // Don't update scores here - scores are updated via score_update event
      // This event is just for showing the immediate answer feedback
    });

    // Real-time score updates
    socket.on("score_update", (data: any) => {
      setGameState((prevState) => {
        if (!prevState) return prevState;

        const updatedParticipants = prevState.participants.map((p) => {
          if (p.id === data.playerId) {
            return {
              ...p,
              score: data.score,
              currentQuestion: data.currentQuestion,
            };
          }
          return p;
        });

        return {
          ...prevState,
          participants: updatedParticipants,
        };
      });
    });

    socket.on("game_ended", (result: GameResult) => {
      console.log("Game ended:", result);
      setGameResult(result);
    });

    socket.on("player_joined", (data: any) => {
      console.log("Player joined:", data);
    });

    socket.on("player_ready", (data: any) => {
      console.log("Player ready:", data);
      // Update the ready status in real-time
      setGameState((prevState) => {
        if (!prevState) return prevState;

        const updatedParticipants = prevState.participants.map((p) => {
          if (p.id === data.playerId) {
            return { ...p, isReady: true };
          }
          return p;
        });

        return {
          ...prevState,
          participants: updatedParticipants,
        };
      });
    });

    socket.on("player_disconnected", (data: any) => {
      console.log("Player disconnected:", data);
      setDisconnectedPlayers((prev) => new Set(prev).add(data.playerId));

      // Update connection status in game state
      setGameState((prevState) => {
        if (!prevState) return prevState;

        const updatedParticipants = prevState.participants.map((p) => {
          if (p.id === data.playerId) {
            return { ...p, isConnected: false };
          }
          return p;
        });

        return {
          ...prevState,
          participants: updatedParticipants,
        };
      });
    });

    socket.on("player_reconnected", (data: any) => {
      console.log("Player reconnected:", data);
      setDisconnectedPlayers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(data.playerId);
        return newSet;
      });

      // Show temporary reconnection message
      setReconnectionMessage(`${data.playerName} reconnected!`);
      setTimeout(() => setReconnectionMessage(null), 3000);

      // Update connection status in game state
      setGameState((prevState) => {
        if (!prevState) return prevState;

        const updatedParticipants = prevState.participants.map((p) => {
          if (p.id === data.playerId) {
            return { ...p, isConnected: true };
          }
          return p;
        });

        return {
          ...prevState,
          participants: updatedParticipants,
        };
      });
    });

    socket.on("game_cancelled", (data: any) => {
      console.log("Game cancelled:", data);
      setGameCancelled({ cancelled: true, reason: data.reason });
    });

    socket.on("game_error", (error: any) => {
      console.error("Game error:", error);

      // Check if it's a cancelled or finished game error
      if (
        error.message.includes("cancelled") ||
        error.message.includes("already ended")
      ) {
        setGameCancelled({ cancelled: true, reason: error.message });
      } else {
        alert(`Game error: ${error.message}`);
      }
    });

    return () => {
      socket.off("game_state");
      socket.off("game_started");
      socket.off("next_question");
      socket.off("answer_result");
      socket.off("score_update");
      socket.off("game_ended");
      socket.off("player_joined");
      socket.off("player_ready");
      socket.off("player_disconnected");
      socket.off("player_reconnected");
      socket.off("game_cancelled");
      socket.off("game_error");
    };
  }, [socket]);

  // Game timer countdown (45 seconds total)
  useEffect(() => {
    if (gameState?.status === "IN_PROGRESS" && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    // Game ends automatically on backend when timer reaches 0
  }, [timeLeft, gameState?.status]);

  const handleReady = () => {
    if (gameId) {
      setPlayerReady(gameId);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (!isAnswered) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleAnswerSubmit = useCallback(
    (answerIndex: number) => {
      if (
        isAnswered ||
        !gameState ||
        !gameState.questions[currentQuestionIndex] ||
        timeLeft <= 0
      )
        return;

      const question = gameState.questions[currentQuestionIndex];
      const gameStartTime = gameState.startedAt
        ? new Date(gameState.startedAt).getTime()
        : Date.now();
      const currentTime = Date.now();
      const timeSpent = Math.max(0, (currentTime - gameStartTime) / 1000);

      setIsAnswered(true);

      submitAnswer({
        gameId,
        questionId: question.id,
        answerIndex: answerIndex === -1 ? 0 : answerIndex,
        timeSpent,
      });
    },
    [
      isAnswered,
      gameState,
      currentQuestionIndex,
      timeLeft,
      gameId,
      submitAnswer,
    ]
  );

  const handleSubmitClick = () => {
    if (selectedAnswer !== null) {
      handleAnswerSubmit(selectedAnswer);
    }
  };

  if (!isConnected) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative p-2 sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
          <div className="text-center bg-black/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full border border-white/20">
            <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 animate-bounce">
              🔌
            </div>
            <LoadingSpinner variant="pulse" size="lg" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Reconnecting...
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Attempting to reconnect to the game server.
            </p>
            <div className="bg-yellow-900/30 border border-yellow-400/30 rounded-xl p-3 sm:p-4 mt-4 backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-yellow-400 font-medium">
                ⚠️ You have 30 seconds to reconnect before forfeiting.
              </p>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Game cancelled screen
  if (gameCancelled?.cancelled) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative p-2 sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-400/20 via-transparent to-transparent"></div>
          <div className="bg-black/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md w-full text-center border border-white/20">
            <div className="text-5xl sm:text-6xl lg:text-7xl mb-6 animate-pulse">
              ⚠️
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
              Game Cancelled
            </h1>
            <div className="bg-red-900/30 border border-red-400/30 rounded-xl p-3 sm:p-4 mb-6 backdrop-blur-sm">
              <p className="text-red-400 text-sm sm:text-base">
                {gameCancelled.reason}
              </p>
            </div>
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!gameState) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative p-2 sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
          <div className="text-center bg-black/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
            <LoadingSpinner
              variant="dots"
              size="lg"
              message="Loading game..."
            />
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Game ended screen
  if (gameResult) {
    // Determine game outcome
    let outcomeTitle = "Game Over";
    let outcomeEmoji = "🏁";
    let gradientClass = "from-gray-400 to-gray-600";

    console.log("Game Result Debug:", {
      winnerId: gameResult.winner?.id,
      currentUserId,
      isTie: gameResult.isTie,
      results: gameResult.results,
    });

    if (gameResult.isTie) {
      outcomeTitle = "It's a Tie!";
      outcomeEmoji = "🤝";
      gradientClass = "from-blue-400 to-purple-600";
    } else if (gameResult.winner) {
      const isVictory = gameResult.winner.id === currentUserId;
      console.log("Victory check:", {
        winnerId: gameResult.winner.id,
        currentUserId,
        isVictory,
        winnerIdType: typeof gameResult.winner.id,
        currentUserIdType: typeof currentUserId,
        strictEqual: gameResult.winner.id === currentUserId,
        looseEqual: gameResult.winner.id == currentUserId,
      });

      // Temporary debug alert
      if (!isVictory && gameResult.results[0]?.id === currentUserId) {
        alert(
          `DEBUG: You have the highest score but showing defeat!\nWinner ID: ${
            gameResult.winner.id
          }\nYour ID: ${currentUserId}\nAre they equal? ${
            gameResult.winner.id === currentUserId
          }`
        );
      }

      outcomeTitle = isVictory ? "Victory!" : "Defeat";
      outcomeEmoji = isVictory ? "🎉" : "😔";
      gradientClass = isVictory
        ? "from-green-400 to-emerald-600"
        : "from-red-400 to-rose-600";
    }

    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-2 sm:p-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent"></div>
          <div className="bg-black/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl max-w-md sm:max-w-lg w-full border border-white/20">
            <div className="text-center">
              <div className="text-6xl sm:text-7xl lg:text-8xl mb-4 animate-bounce">
                {outcomeEmoji}
              </div>
              <h1
                className={`text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
              >
                {outcomeTitle}
              </h1>
              {gameResult.reason && (
                <div className="mb-6 p-3 sm:p-4 bg-yellow-900/30 border border-yellow-400/30 rounded-xl text-yellow-400 text-sm backdrop-blur-sm">
                  {gameResult.reason}
                </div>
              )}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-white">
                  Final Results
                </h2>
                <div className="space-y-2 sm:space-y-3">
                  {gameResult.results.map((result, index) => (
                    <div
                      key={result.id}
                      className={`flex justify-between items-center p-3 sm:p-4 rounded-xl transition-all duration-300 backdrop-blur-sm ${
                        index === 0
                          ? "bg-gradient-to-r from-yellow-900/40 to-yellow-800/40 border-2 border-yellow-400 shadow-lg transform scale-105"
                          : "bg-white/10 border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      <span className="flex items-center font-semibold text-gray-800">
                        {index === 0 && (
                          <span className="text-2xl mr-2">👑</span>
                        )}
                        {index === 1 && (
                          <span className="text-xl mr-2">🥈</span>
                        )}
                        {index === 2 && (
                          <span className="text-xl mr-2">🥉</span>
                        )}
                        {result.name}
                        {result.isBot && " 🤖"}
                      </span>
                      <span className="text-xl font-bold text-blue-600">
                        {result.score} pts
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  Back to Dashboard
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Waiting room
  if (gameState.status === "WAITING_FOR_PLAYERS") {
    const player = gameState.participants.find((p) => p.id === currentUserId);
    const isPlayerReady = gameState.participants.find(
      (p) => p.id === currentUserId
    )?.isReady;

    return (
      <ProtectedRoute>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400/20 via-transparent to-transparent"></div>
          <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 py-4 sm:py-6 px-2 sm:px-4">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10"></div>
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-4xl mx-auto relative gap-3 sm:gap-0">
              <Link
                href="/dashboard"
                className="text-purple-400 hover:text-purple-300 font-bold transition-colors duration-200 flex items-center gap-2 bg-black/30 px-3 sm:px-4 py-2 rounded-xl border border-purple-400/30 text-sm sm:text-base"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                🎮 Game Lobby
              </h1>
            </div>
          </header>

          <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-black/20 backdrop-blur-xl p-6 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-2xl text-center border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Waiting for Players
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
                    {gameState.participants.map((participant, index) => (
                      <div
                        key={participant.id || index}
                        className={`p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 backdrop-blur-sm hover:scale-105 ${
                          participant.isReady
                            ? "border-green-400/50 bg-gradient-to-br from-green-900/40 to-emerald-900/40 shadow-2xl shadow-green-500/30 transform scale-105"
                            : "border-white/20 bg-black/20 hover:border-purple-400/50"
                        }`}
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
                          {participant.name || "Unknown"}
                          {participant.isBot && " 🤖"}
                        </div>
                        <div
                          className={`text-base sm:text-lg font-bold flex items-center justify-center gap-2 ${
                            participant.isReady
                              ? "text-green-400"
                              : "text-gray-400"
                          }`}
                        >
                          {participant.isReady ? (
                            <>
                              <span className="text-2xl animate-bounce">
                                ✅
                              </span>
                              <span>Ready!</span>
                            </>
                          ) : (
                            <>
                              <span className="text-2xl animate-pulse">⏳</span>
                              <span>Waiting...</span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!isPlayerReady && (
                    <button
                      onClick={handleReady}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl hover:from-green-600 hover:to-emerald-700 font-bold text-lg sm:text-xl lg:text-2xl shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-500 transform hover:scale-110 border border-green-400/30"
                    >
                      🚀 Ready to Play!
                    </button>
                  )}

                  {isPlayerReady && (
                    <div className="text-white">
                      <LoadingSpinner variant="pulse" size="lg" />
                      <p className="mt-4 sm:mt-6 font-bold text-lg sm:text-xl text-gray-300">
                        Waiting for all players to be ready...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  // Active game
  const currentQuestion = gameState.questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative p-2 sm:p-4">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
          <div className="text-center">
            <div className="bg-black/20 backdrop-blur-xl p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20">
              <div className="text-5xl sm:text-6xl mb-6">🎉</div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Great job!
              </h2>
              <p className="text-gray-300 mb-6 text-sm sm:text-base">
                You&apos;ve answered all available questions!
              </p>
              <LoadingSpinner
                variant="dots"
                size="md"
                message="Waiting for the game to finish..."
              />
              <div className="mt-6">
                <CircularTimer timeLeft={timeLeft} totalTime={45} size="lg" />
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        {/* Game Header */}
        <header className="bg-black/20 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 py-3 sm:py-6 px-2 sm:px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-2 sm:px-4 relative gap-3 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="bg-gradient-to-r from-purple-400 to-blue-400 p-2 sm:p-3 rounded-xl shadow-lg">
                <div className="text-sm sm:text-lg font-bold text-white">
                  Q{currentQuestionIndex + 1}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  LangClash Quiz
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium hidden sm:block">
                  Answer as many as you can in 45 seconds!
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/10">
                <CircularTimer
                  timeLeft={timeLeft}
                  totalTime={45}
                  size="sm"
                  showLabel={false}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Reconnection Message */}
        {reconnectionMessage && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-300 py-4">
            <div className="max-w-4xl mx-auto px-4 text-center text-green-800 font-semibold">
              ✅ {reconnectionMessage}
            </div>
          </div>
        )}

        {/* Real-time Scoreboard */}
        <div className="bg-black/10 backdrop-blur-sm border-b border-white/10 flex justify-center py-4 sm:py-8">
          <div className="max-w-6xl w-full px-2 sm:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {gameState.participants.map((participant) => {
                const isCurrentUser = participant.id === currentUserId;
                const isDisconnected = disconnectedPlayers.has(participant.id);
                return (
                  <div
                    key={participant.id}
                    className={`p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 relative transition-all duration-500 backdrop-blur-sm ${
                      isDisconnected
                        ? "border-red-400/50 bg-red-900/20 opacity-75"
                        : isCurrentUser
                        ? "border-blue-400/50 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 shadow-2xl shadow-blue-500/20 sm:scale-105"
                        : "border-purple-400/50 bg-gradient-to-br from-purple-900/30 to-pink-900/30 shadow-xl shadow-purple-500/20"
                    } hover:scale-105 hover:shadow-2xl`}
                  >
                    {isDisconnected && (
                      <div className="absolute top-4 right-4 flex items-center space-x-2 text-red-400 text-sm font-bold bg-black/40 backdrop-blur-sm rounded-full px-3 py-2 border border-red-400/30">
                        <span className="animate-pulse">⚠️</span>
                        <span>Disconnected</span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="font-bold text-lg sm:text-xl text-white drop-shadow-lg truncate">
                          {participant.name}
                          {participant.isBot && " 🤖"}
                        </div>
                        {isCurrentUser && (
                          <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full font-bold shadow-lg animate-pulse">
                            You
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div
                          className={`text-2xl sm:text-4xl font-extrabold drop-shadow-lg ${
                            isCurrentUser ? "text-blue-400" : "text-purple-400"
                          }`}
                        >
                          {participant.score}
                        </div>
                        <div className="text-sm sm:text-lg text-gray-300 font-medium">
                          pts
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
                      <span className="font-medium">Questions answered:</span>
                      <span className="font-bold text-white">
                        {participant.currentQuestion} /{" "}
                        {gameState.questions.length}
                      </span>
                    </div>
                    <div className="w-full bg-black/30 rounded-full h-4 overflow-hidden shadow-inner border border-white/10">
                      <div
                        className={`h-4 rounded-full transition-all duration-500 shadow-lg ${
                          isCurrentUser
                            ? "bg-gradient-to-r from-blue-400 to-indigo-500 shadow-blue-400/50"
                            : "bg-gradient-to-r from-purple-400 to-pink-500 shadow-purple-400/50"
                        }`}
                        style={{
                          width: `${
                            (participant.currentQuestion /
                              gameState.questions.length) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Question Area */}
        <div className="flex justify-center px-2 sm:px-4 py-6 sm:py-12 relative">
          <div className="max-w-5xl w-full">
            <div className="bg-black/20 backdrop-blur-xl p-6 sm:p-10 lg:p-20 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl sm:rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-16 text-center text-white leading-relaxed drop-shadow-lg px-2">
                  {currentQuestion.text}
                </h2>

                <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-8 sm:mb-10 lg:mb-14 mx-2 sm:mx-4 lg:mx-6">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={`w-full p-4 sm:p-6 lg:p-8 text-left rounded-xl sm:rounded-2xl border-2 transition-all duration-500 font-medium text-base sm:text-lg backdrop-blur-sm hover:scale-105 ${
                        selectedAnswer === index
                          ? "border-blue-400 bg-gradient-to-r from-blue-900/40 to-indigo-900/40 shadow-2xl shadow-blue-500/30 transform scale-105"
                          : "border-white/20 bg-black/20 hover:border-blue-400/50 hover:bg-blue-900/20"
                      } ${
                        isAnswered
                          ? answerResult?.correctAnswerIndex === index
                            ? "border-green-400 bg-gradient-to-r from-green-900/40 to-emerald-900/40 shadow-2xl shadow-green-500/30"
                            : selectedAnswer === index &&
                              answerResult?.correctAnswerIndex !== index
                            ? "border-red-400 bg-gradient-to-r from-red-900/40 to-rose-900/40 shadow-2xl shadow-red-500/30"
                            : "opacity-50"
                          : ""
                      }`}
                    >
                      <span className="flex items-center gap-3 sm:gap-4">
                        <span
                          className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base lg:text-lg shadow-lg flex-shrink-0 ${
                            selectedAnswer === index
                              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-blue-500/50"
                              : "bg-white/10 text-gray-300 border border-white/20"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-white font-medium break-words">
                          {option}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Answer Result */}
                {answerResult && (
                  <div
                    className={`p-8 rounded-2xl mb-8 border-2 backdrop-blur-sm ${
                      answerResult.isCorrect
                        ? "bg-gradient-to-r from-green-900/40 to-emerald-900/40 border-green-400 shadow-2xl shadow-green-500/30"
                        : "bg-gradient-to-r from-red-900/40 to-rose-900/40 border-red-400 shadow-2xl shadow-red-500/30"
                    }`}
                  >
                    <div className="font-bold text-2xl mb-4 text-white drop-shadow-lg">
                      {answerResult.isCorrect ? "✅ Correct!" : "❌ Incorrect"}
                    </div>
                    {answerResult.explanation && (
                      <div className="text-lg text-gray-200 mb-4 leading-relaxed">
                        {answerResult.explanation}
                      </div>
                    )}
                    {answerResult.score > 0 && (
                      <div className="text-lg font-bold text-green-400 flex items-center gap-2">
                        <span className="text-2xl">🎆</span>+
                        {answerResult.score} points
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Button */}
                {!isAnswered && selectedAnswer !== null && (
                  <button
                    onClick={handleSubmitClick}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl hover:from-blue-600 hover:to-indigo-700 font-bold text-lg sm:text-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 border border-blue-400/30 backdrop-blur-sm"
                  >
                    🚀 Submit Answer
                  </button>
                )}

                {/* Progress Indicator */}
                <div className="mt-6 sm:mt-8 lg:mt-10">
                  <div className="flex flex-col sm:flex-row justify-between text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 gap-2 sm:gap-0">
                    <span className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl">📊</span>
                      <span className="text-sm sm:text-base lg:text-lg">
                        Your Progress
                      </span>
                    </span>
                    <span className="text-blue-400 bg-blue-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-400/30 text-sm sm:text-base">
                      {currentQuestionIndex + 1} / {gameState.questions.length}
                    </span>
                  </div>
                  <div className="relative w-full bg-black/30 rounded-full h-3 sm:h-4 lg:h-5 overflow-hidden shadow-inner border border-white/10">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 h-3 sm:h-4 lg:h-5 rounded-full transition-all duration-1000 shadow-lg shadow-blue-500/50"
                      style={{
                        width: `${
                          ((currentQuestionIndex + 1) /
                            gameState.questions.length) *
                          100
                        }%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

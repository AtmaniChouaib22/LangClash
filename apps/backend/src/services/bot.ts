import { prisma } from "../lib/prisma";
import { Server } from "socket.io";

export class BotService {
  private io: Server;
  private readonly GAME_ROOM_PREFIX = "game:";
  private botNames = [
    "Quiz Master",
    "Study Buddy",
    "Language Expert",
    "Practice Partner",
    "Learning Companion",
  ];

  constructor(io: Server) {
    this.io = io;
  }

  async playBotTurn(
    gameId: string,
    botParticipantId: string,
    questionIndex: number
  ): Promise<void> {
    try {
      // Get the question
      const gameQuestion = await prisma.gameQuestion.findFirst({
        where: {
          gameId,
          order: questionIndex,
        },
        include: { question: true },
      });

      if (!gameQuestion) return;

      // Get bot participant
      const bot = await prisma.gameParticipant.findUnique({
        where: { id: botParticipantId },
      });

      if (!bot) return;

      // Simulate thinking time (1-8 seconds)
      const thinkingTime = Math.random() * 7 + 1;

      setTimeout(async () => {
        try {
          // Bot accuracy based on difficulty
          const question = gameQuestion.question;
          let accuracy = 0.8; // 80% base accuracy

          if (question.difficulty === "easy") accuracy = 0.9;
          if (question.difficulty === "medium") accuracy = 0.7;
          if (question.difficulty === "hard") accuracy = 0.5;

          // Determine if bot gets it right
          const isCorrect = Math.random() < accuracy;
          const answerIndex = isCorrect
            ? question.correctAnswerIdx
            : this.getRandomWrongAnswer(question.correctAnswerIdx);

          // Calculate score (simple scoring: 100 points per correct answer)
          let score = 0;
          if (isCorrect) {
            score = 100; // Fixed 100 points per correct answer
          }

          // Update bot's progress
          const currentAnswers = Array.isArray(bot.answers)
            ? (bot.answers as any[])
            : [];
          const newAnswer = {
            questionId: question.id,
            answerIndex,
            isCorrect,
            timeSpent: thinkingTime,
            score,
            timestamp: Date.now(),
          };

          await prisma.gameParticipant.update({
            where: { id: botParticipantId },
            data: {
              answers: [...currentAnswers, newAnswer],
              score: bot.score + score,
              currentQuestion: bot.currentQuestion + 1,
            },
          });

          // Broadcast bot score update to all players in the game room
          const roomName = `${this.GAME_ROOM_PREFIX}${gameId}`;
          this.io.to(roomName).emit("score_update", {
            playerId: `bot_${botParticipantId}`,
            score: bot.score + score,
            currentQuestion: bot.currentQuestion + 1,
            isBot: true,
          });

          console.log(
            `Bot answered question ${questionIndex} in game ${gameId}, score: ${score}`
          );
        } catch (error) {
          console.error("Error in bot turn:", error);
        }
      }, thinkingTime * 1000);
    } catch (error) {
      console.error("Error playing bot turn:", error);
    }
  }

  private getRandomWrongAnswer(correctIndex: number): number {
    const options = [0, 1, 2, 3].filter((i) => i !== correctIndex);
    return options[Math.floor(Math.random() * options.length)];
  }

  async startContinuousPlay(
    gameId: string,
    botParticipantId: string
  ): Promise<void> {
    // Start the bot's continuous play for 45 seconds
    let currentQuestionIndex = 0;

    const playNextQuestion = async () => {
      // Check if game is still in progress
      const game = await prisma.game.findUnique({
        where: { id: gameId },
      });

      if (!game || game.status !== "IN_PROGRESS") {
        return; // Game ended, stop playing
      }

      // Play current question
      await this.playBotTurn(gameId, botParticipantId, currentQuestionIndex);

      // Schedule next question after bot thinking time + small delay
      const nextQuestionDelay = Math.random() * 3 + 1; // 1-4 seconds
      currentQuestionIndex++;

      setTimeout(() => {
        playNextQuestion();
      }, nextQuestionDelay * 1000);
    };

    // Start playing after a short delay
    setTimeout(() => {
      playNextQuestion();
    }, 1000);
  }

  getRandomBotName(): string {
    return this.botNames[Math.floor(Math.random() * this.botNames.length)];
  }
}

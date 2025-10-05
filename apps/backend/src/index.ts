import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth";
import cors from "cors";
import { setupSocketHandlers } from "./events";
import { authenticateSocket } from "./middleware/auth";

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });
dotenv.config({ path: ".env.local" }); // Local overrides
dotenv.config(); // Default .env

console.log(`Environment: ${env}`);

const PORT = process.env.PORT || 3001;
const isDevelopment = env === "development";
const isProduction = env === "production";

const app = express();
const httpServer = createServer(app);

// Socket.IO setup with CORS
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  },
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (_req, res) => {
  res.send("LangClash Backend - Socket.IO Ready!");
});

// Socket.IO authentication middleware
io.use(authenticateSocket);

// Socket.IO event handlers
setupSocketHandlers(io);

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Socket.IO server ready for connections`);
  if (isDevelopment) {
    console.log("🔧 Development mode: Debug logs are enabled.");
  }
  if (isProduction) {
    console.log("🚀 Production mode: Ensure all optimizations are in place.");
  }
});

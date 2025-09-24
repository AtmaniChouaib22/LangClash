import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth";
import cors from "cors";

const app = express();

// Load environment variables based on NODE_ENV
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });
dotenv.config({ path: ".env.local" }); // Local overrides
dotenv.config(); // Default .env

console.log(`Environment: ${env}`);

const PORT = process.env.PORT || 3001;
const isDevelopment = env === "development";
const isProduction = env === "production";

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Your server setup here

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  if (isDevelopment) {
    console.log("🔧 Development mode: Debug logs are enabled.");
  }
  if (isProduction) {
    console.log("🚀 Production mode: Ensure all optimizations are in place.");
  }
});

import { Request, Response, NextFunction } from "express";
import { supabase } from "../lib/supabase";
import { prisma } from "../lib/prisma";
import { redis } from "../lib/redis";

// Extend Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        supabaseId: string;
        email: string;
        name?: string;
      };
    }
  }
}

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      res.status(401).json({ error: "No token provided" });
      return;
    }

    // Verify JWT token with Supabase
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    // Check if user exists in our database, if not create them
    let dbUser = await prisma.user.findUnique({
      where: { supabaseId: user.id },
    });

    if (!dbUser) {
      // Create user in our database
      dbUser = await prisma.user.create({
        data: {
          supabaseId: user.id,
          email: user.email!,
          name: user.user_metadata?.name || user.email?.split("@")[0],
          avatar: user.user_metadata?.avatar_url,
        },
      });
    }

    // Attach user to request object
    req.user = {
      id: dbUser.id,
      supabaseId: dbUser.supabaseId,
      email: dbUser.email,
      name: dbUser.name || undefined,
    };

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Socket.IO authentication middleware
export async function authenticateSocket(socket: any, next: any) {
  try {
    const token = socket.handshake.auth?.token;
    console.log("Socket auth attempt:", {
      hasToken: !!token,
      tokenLength: token?.length,
    });

    if (!token) {
      console.log("No token provided in socket auth");
      return next(new Error("No token provided"));
    }

    // Verify JWT token with Supabase
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    console.log("Supabase auth result:", {
      user: user?.id,
      error: error?.message,
    });

    if (error || !user) {
      console.log("Invalid token in socket auth:", error?.message);
      return next(new Error("Invalid token"));
    }

    // Get user from our database
    let dbUser = await prisma.user.findUnique({
      where: { supabaseId: user.id },
    });

    if (!dbUser) {
      console.log("User not found in database, creating new user:", user.id);
      // Create user in our database
      dbUser = await prisma.user.create({
        data: {
          supabaseId: user.id,
          email: user.email!,
          name: user.user_metadata?.name || user.email?.split("@")[0],
          avatar: user.user_metadata?.avatar_url,
        },
      });
      console.log("Created new user:", dbUser.id);
    }

    // Clean up any orphaned Redis keys (optional cleanup)
    // This helps remove keys for users that might have been deleted
    try {
      const playerKey = `player:${user.id}`;
      const keyExists = await redis.exists(playerKey);
      if (keyExists) {
        // Verify this is a valid user, if not clean up
        const validUser = await prisma.user.findUnique({
          where: { supabaseId: user.id },
        });
        if (!validUser) {
          await redis.del(playerKey);
          console.log(`Cleaned up orphaned Redis key: ${playerKey}`);
        }
      }
    } catch (cleanupError) {
      console.warn("Redis cleanup error (non-critical):", cleanupError);
    }

    // Attach user to socket object
    socket.userId = dbUser.supabaseId; // Use supabaseId for consistency across socket events
    socket.user = {
      id: dbUser.id,
      supabaseId: dbUser.supabaseId,
      email: dbUser.email,
      name: dbUser.name,
      avatar: dbUser.avatar,
    };

    next();
  } catch (error) {
    console.error("Socket auth error:", error);
    next(new Error("Authentication failed"));
  }
}

import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

const env = process.env.NODE_ENV || "development";

// Load environment variables
dotenv.config({ path: `.env.${env}` });
dotenv.config({ path: ".env.local" }); // Local overrides
dotenv.config(); // Default .env

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error("Missing Supabase environment variables");
}

// Admin client for backend operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

// Regular client for backend operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey);

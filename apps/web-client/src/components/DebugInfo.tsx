"use client";

import { useAuth } from "./AuthProvider";
import { useSocket } from "./SocketProvider";

export function DebugInfo() {
  const { user, loading } = useAuth();
  const { socket, isConnected } = useSocket();

  if (loading) return <div>Loading auth...</div>;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white p-4 rounded-lg text-sm">
      <div>Auth: {user ? "✅ Logged in" : "❌ Not logged in"}</div>
      <div>User: {user?.email || "None"}</div>
      <div>Socket: {socket ? "✅ Created" : "❌ Not created"}</div>
      <div>Connected: {isConnected ? "✅ Yes" : "❌ No"}</div>
    </div>
  );
}

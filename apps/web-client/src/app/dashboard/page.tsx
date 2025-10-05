"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { UserProfile } from "@/components/UserProfile";
import { MatchmakingComponent } from "@/components/MatchmakingComponent";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
        {/* Enhanced Navigation Bar */}
        <header className="w-full bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b-2 border-purple-500/50 sticky top-0 z-50">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20 max-w-full">
              {/* Logo & Brand */}
              <div className="flex-shrink-0">
                <Link
                  href="/"
                  className="text-3xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300 hover:scale-105 transform"
                >
                  🌍 LangClash
                </Link>
              </div>

              {/* Navigation Links - Centered */}
              <nav className="hidden lg:flex items-center gap-4 flex-1 justify-center">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600/30 border border-purple-400/50 text-purple-200 font-semibold hover:bg-purple-600/50 hover:text-white transition-all duration-200"
                >
                  <span>🏠</span>
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/stats"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white font-semibold transition-all duration-200"
                >
                  <span>📊</span>
                  <span>Stats</span>
                </Link>
                <Link
                  href="/leaderboard"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white font-semibold transition-all duration-200"
                >
                  <span>🏆</span>
                  <span>Leaderboard</span>
                </Link>
              </nav>

              {/* Right Section - User Info & Actions */}
              <div className="flex items-center gap-3 flex-shrink-0">
                {/* User Profile */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {(user?.email?.split("@")[0] || "P")[0].toUpperCase()}
                  </div>
                </div>

                <UserProfile />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-start justify-center pt-32 pb-12">
          <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                Ready to Battle?
              </h1>
              <p className="text-xl text-purple-200/90 max-w-xl mx-auto leading-relaxed">
                Test your language skills in epic quiz battles. Challenge
                players worldwide or face our AI!
              </p>
            </div>

            {/* Main Matchmaking Card */}
            <div className="relative group">
              {/* Animated Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/60 to-slate-900/95 backdrop-blur-2xl border-2 border-purple-400/30 rounded-3xl p-10 shadow-2xl">
                <MatchmakingComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

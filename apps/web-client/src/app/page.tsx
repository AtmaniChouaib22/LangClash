"use client";

import { useAuth } from "@/components/AuthProvider";
import { UserProfile } from "@/components/UserProfile";
import Link from "next/link";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">LangClash</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <UserProfile />
              ) : (
                <Link
                  href="/auth"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Language Learning Quiz Battle
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Challenge yourself and others in exciting language learning battles!
          </p>

          {user ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Welcome back! Ready to continue your language learning journey?
              </p>
              <Link
                href="/dashboard"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Join thousands of language learners and start your journey
                today!
              </p>
              <Link
                href="/auth"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

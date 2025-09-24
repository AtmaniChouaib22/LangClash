import { ProtectedRoute } from "@/components/ProtectedRoute";
import { UserProfile } from "@/components/UserProfile";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-900 hover:text-blue-600"
                >
                  LangClash
                </Link>
              </div>
              <UserProfile />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Quick Battle</h2>
              <p className="text-gray-600 mb-4">
                Start a random language quiz battle
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Start Battle
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">My Progress</h2>
              <p className="text-gray-600 mb-4">
                View your learning statistics
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Stats
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
              <p className="text-gray-600 mb-4">
                See how you rank against others
              </p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                View Rankings
              </button>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

"use client";

import { useAuth } from "./AuthProvider";

export const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm">
        <p className="text-gray-600">Welcome,</p>
        <p className="font-semibold">{user.email}</p>
      </div>
      <button
        onClick={signOut}
        className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Sign Out
      </button>
    </div>
  );
};

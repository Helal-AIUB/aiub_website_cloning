"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

interface DashboardProps {
  session: {
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: boolean;
      image?: string | null;
    };
  };
}

export default function DashboardClientPage({ session }: DashboardProps) {
  const router = useRouter();
  const user = session.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mb-6 border-b border-gray-100 pb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Your Dashboard, {user.name}!
                </h2>
                <p className="text-gray-600">
                  Manage your account and explore better-auth features
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-12 w-12 rounded-full border border-gray-200"
                    src={
                      user.image ||
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    }
                    alt="User Avatar"
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 font-bold">{user.name}</p>
                    <p className="text-gray-500 font-medium">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-semibold rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">
                Authentication Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-bold text-blue-700">Status:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                    Authenticated
                  </span>
                </div>
                <div>
                  <span className="font-bold text-blue-700">Provider:</span>
                  <span className="ml-2 text-blue-600 font-medium">
                    {user.image
                      ? "Social Login (Google/GitHub)"
                      : "Credentials (Email/Password)"}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-blue-700">User ID:</span>
                  <span className="ml-2 text-gray-600 font-mono text-xs">
                    {user.id}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-blue-700">
                    Email Verified:
                  </span>
                  {user.emailVerified ? (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-800">
                      Verified
                    </span>
                  ) : (
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
                      Not Verified
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 text-indigo-600 font-bold">
                  ⚙️
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Social Login
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Seamlessly authenticate with Google, GitHub, and other social
                  providers.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600 font-bold">
                  👤
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  User Management
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Manage user accounts, profiles, and authentication settings
                  easily.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600 font-bold">
                  🔒
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure Access
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Protected routes and secure server-session verification flow
                  via Better Auth.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Try These Actions
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => alert("Profile update logic runs here!")}
                  className="px-4 py-2 text-sm font-semibold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-colors shadow-sm"
                >
                  Update Profile
                </button>
                <button
                  onClick={() => alert("Settings saved!")}
                  className="px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm"
                >
                  Save Settings
                </button>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 text-sm font-semibold rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ১. Credential SignUp (Name, Email, Password)
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await authClient.signUp.email({
      email,
      password,
      name,
    });

    if (authError) {
      setError(authError.message || "Something went wrong. Try again.");
      setLoading(false);
      return; // এরর আসলে কোড এখানেই থেমে যাবে, নিচের সাকসেস কোডে যাবে না
    }

    // অ্যাকাউন্ট সফলভাবে তৈরি হলে কোড এখানে আসবে:
    setLoading(false);
    setName("");
    setEmail("");
    setPassword("");

    // ম্যানুয়ালি ড্যাশবোর্ডে পুশ করে দেওয়া হলো
    router.push("/dashboard");
  };

  // ২. Social SignUp (Google & GitHub)
  const handleSocialSignUp = async (provider: "google" | "github") => {
    await authClient.signIn.social({
      provider,
      callbackURL: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-[450px] p-8 border border-gray-200 shadow-sm flex flex-col items-center">
        {/* Top Logo Header */}
        <div className="flex items-center space-x-4 w-full justify-center border-b border-gray-100 pb-6 mb-6">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src="/aiub-logo.png"
              alt="AIUB Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[1px] h-12 bg-gray-300"></div>
          <div className="text-left">
            <h2 className="text-[#333333] text-sm font-bold tracking-wide leading-tight">
              AMERICAN INTERNATIONAL
            </h2>
            <h2 className="text-[#333333] text-sm font-bold tracking-wide leading-tight">
              UNIVERSITY-BANGLADESH
            </h2>
          </div>
        </div>

        <p className="text-gray-700 text-sm font-semibold mb-4 text-center uppercase tracking-wider text-blue-700">
          Create New Account
        </p>

        {error && (
          <p className="text-red-500 text-xs mb-4 font-medium bg-red-50 p-2 w-full text-center border border-red-200">
            {error}
          </p>
        )}

        {/* SignUp Form */}
        <form onSubmit={handleSignUp} className="w-full space-y-3.5">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 placeholder-gray-300 text-sm focus:outline-none focus:border-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 placeholder-gray-300 text-sm focus:outline-none focus:border-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 text-gray-700 placeholder-gray-300 text-sm focus:outline-none focus:border-blue-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4A82B4] hover:bg-[#3b6d9a] text-white py-2 font-semibold text-sm transition shadow-sm cursor-pointer disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* --- SOCIAL SIGN UP BUTTONS --- */}
        <div className="w-full my-5 flex items-center justify-between text-gray-400 text-xs">
          <span className="w-full h-[1px] bg-gray-200"></span>
          <span className="px-3 font-medium text-gray-400 whitespace-nowrap">
            Or Sign Up With
          </span>
          <span className="w-full h-[1px] bg-gray-200"></span>
        </div>

        <div className="grid grid-cols-2 gap-3 w-full">
          <button
            onClick={() => handleSocialSignUp("google")}
            className="flex items-center justify-center space-x-2 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold text-xs transition cursor-pointer rounded shadow-sm"
          >
            <span>Google</span>
          </button>
          <button
            onClick={() => handleSocialSignUp("github")}
            className="flex items-center justify-center space-x-2 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-600 font-semibold text-xs transition cursor-pointer rounded shadow-sm"
          >
            <span>GitHub</span>
          </button>
        </div>

        {/* Bottom Nevigation Link */}
        <div className="mt-6 text-xs font-semibold text-gray-400 flex items-center space-x-1">
          <span>Already have an account?</span>
          <Link href="/login" className="text-[#00A2E8] hover:underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

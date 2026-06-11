"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "../lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error: authError } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/dashboard", 
    });

    if (authError) {
      setError(authError.message || "Invalid Email or Password.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f4f4] flex items-center justify-center p-4 font-sans">
      <div className="bg-white w-full max-w-[450px] p-8 md:p-10 border border-gray-200 shadow-sm flex flex-col items-center">
        
        {/* Logo Header */}
        <div className="flex items-center space-x-4 w-full justify-center border-b border-gray-100 pb-6 mb-6">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image
              src="/aiub-logo.png"
              alt="AIUB Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-[1px] h-14 bg-gray-300"></div>
          <div className="text-left">
            <h2 className="text-[#333333] text-sm md:text-base font-bold tracking-wide leading-tight">
              AMERICAN INTERNATIONAL
            </h2>
            <h2 className="text-[#333333] text-sm md:text-base font-bold tracking-wide leading-tight">
              UNIVERSITY-BANGLADESH
            </h2>
            <p className="text-gray-400 text-[11px] mt-1 font-medium italic">
              — where leaders are created.
            </p>
          </div>
        </div>

        <p className="text-gray-700 text-[14px] md:text-[15px] font-medium mb-6 text-center">
          Sign in with your organizational id number.
        </p>

        {error && (
          <p className="text-red-500 text-xs mb-4 font-medium bg-red-50 p-2 w-full text-center border border-red-200">
            {error}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 placeholder-gray-300 text-sm focus:outline-none focus:border-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2.5 border border-gray-300 text-gray-700 placeholder-gray-300 text-sm focus:outline-none focus:border-blue-400 transition"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4A82B4] hover:bg-[#3b6d9a] text-white py-2.5 font-semibold text-sm transition shadow-sm mt-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        {/* Bottom Actions Panel (উপরে উঠিয়ে স্পেসিং অ্যাডজাস্ট করা হয়েছে) */}
        <div className="mt-6 flex flex-col items-center space-y-2 text-xs font-semibold text-[#00A2E8]">
          <Link href="#" className="hover:underline">
            Can’t access your account?
          </Link>
          <div className="text-gray-400 font-normal flex items-center space-x-1">
            <span>Don't have an account?</span>
            <Link
              href="/signup"
              className="text-[#00A2E8] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
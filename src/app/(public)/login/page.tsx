/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container mx-auto py-20 md:py-28 lg:py-36">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-3 text-[#101828] dark:text-white ">
            Admin Login System
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Please provide your valid admin credentials
          </p>
        </div>

        <div className="dark:bg-[#162034] rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 pb-5">
            Admin Credentials
          </h2>

          <form
            onSubmit={handleSubmit}
            className="dark:bg-[#162034] rounded-2xl shadow-xl p-6"
          >
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 border px-2 py-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 border px-2 py-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter(); // 👈 initialize
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateHandle = (handle: string) =>
    /^@[a-zA-Z0-9_-]{3,15}$/.test(handle);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateHandle(handle)) {
      alert("Handle must start with @ and be 3-15 characters.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Invalid email.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    //alert("Login submitted ✅");
    router.push("/console");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <div className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-2xl font-bold text-center mb-6">CashierBox</div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="@businesshandle"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Admin/Staff Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-between text-sm mt-4">
          <a href="/signup" className="text-blue-600 hover:underline">
            Create account
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter(); // 👈 initialize
    const [formData, setFormData] = useState({
      handle: "",
      businessName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const [handle, setHandle] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateHandle = (handle: string) =>
    /^@[a-zA-Z0-9_-]{3,15}$/.test(handle);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    //alert("Signup submitted ✅");
  
      // TODO: Call your backend API to create the account
  
      // 👇 redirect to /console
      router.push("/console");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <div className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="text-2xl font-bold text-center mb-6">CashierBox</div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Legal Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
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
            placeholder="Admin Email"
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
        <div className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
}

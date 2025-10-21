"use client";

import { useState } from "react";

export default function ConsolePage() {
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col">
        <div className="text-2xl font-bold p-4 border-b border-gray-700">
          CashierBox
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {["dashboard", "transactions", "products", "settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`block w-full text-left px-3 py-2 rounded ${
                active === item ? "bg-gray-800" : "hover:bg-gray-700"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-700 text-sm">
          Logged in as admin@cashierbox.com
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold capitalize">{active}</h1>
        <div className="mt-6 bg-white shadow rounded p-6">
          <p>
            This is the <strong>{active}</strong> section of your CashierBox
            console.
          </p>
        </div>
      </div>
    </div>
  );
}

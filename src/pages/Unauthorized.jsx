// src/pages/Unauthorized.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShieldAlert } from "lucide-react";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 text-white font-[Poppins]">
      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 text-center animate-fadeIn">
        <ShieldAlert className="mx-auto text-red-300 mb-4" size={60} />
        <h1 className="text-4xl font-extrabold mb-4">🚫 Access Denied</h1>
        <p className="text-lg mb-6">
          You are not authorized to view this page.
        </p>
        <Link
          to="/admin/login"
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-xl font-bold shadow-lg transition transform hover:scale-105"
        >
          🔑 Go to Login
        </Link>
      </div>
      <p className="mt-10 text-sm text-gray-200">
        © {new Date().getFullYear()} Secure Admin Portal
      </p>
    </div>
  );
}


import React, { useState, useEffect } from "react";
import {
  Users,
  ShoppingCart,
  Package,
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  ChevronRight,
  XCircle
} from "lucide-react";
import { motion } from "framer-motion";
import adminAPI from "../api/adminApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalProducts: 0,
    pendingPayments: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await adminAPI.getDashboardStats();
        if (res.success) {
          setStats(res.data);
        } else {
          setError(res.message || "Failed to fetch stats");
        }
      } catch (err) {
        console.error("Stats fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const statCards = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
      icon: Users,
      color: 'blue',
      trend: '+12.5%',
      isUp: true
    },
    {
      label: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingCart,
      color: 'indigo',
      trend: '+5.2%',
      isUp: true
    },
    {
      label: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'purple',
      trend: '+2',
      isUp: true
    },
    {
      label: 'Pending Payments',
      value: stats.pendingPayments,
      icon: Wallet,
      color: 'amber',
      trend: '-1.4%',
      isUp: false
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 group">
            Dashboard Overview
            <span className="block h-1 w-12 bg-blue-600 rounded-full mt-1 group-hover:w-24 transition-all duration-300"></span>
          </h1>
          <p className="text-gray-500 mt-1">Check your latest business performance.</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl shadow-sm border border-gray-100">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Clock size={16} />
          </div>
          <span className="text-sm font-medium pr-3">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <XCircle size={18} />
          </div>
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* Stats Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statCards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-xl bg-${card.color}-50 text-${card.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${card.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {card.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-gray-500 text-sm font-medium">{card.label}</h3>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {loading ? '...' : card.value}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Sections Link Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">System Activity</h2>
            <button className="text-blue-600 text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="p-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
              <TrendingUp size={32} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">System Performance is Stable</h3>
              <p className="text-gray-500 max-w-sm mt-2">All backend services are running healthy and payment gateways are active. No critical errors reported in the last 24 hours.</p>
            </div>
            <button className="mt-4 px-6 py-2 bg-[#0f172a] text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
              Health Check
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-xl shadow-blue-500/20 p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold">Quick Actions</h2>
            <p className="text-blue-100 text-sm mt-1">Common management tasks</p>
          </div>
          <div className="space-y-3 mt-8">
            {['Add New User', 'Create Product', 'Process Withdrawals'].map((action, i) => (
              <button
                key={i}
                className="w-full flex items-center justify-between bg-white/10 hover:bg-white/20 p-4 rounded-xl transition-all border border-white/10 group"
              >
                <span className="font-medium text-sm">{action}</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
          </div>
          <p className="text-xs text-blue-200 mt-8 italic text-center text-opacity-50">
            Version 2.4.0 (Fresh)
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function AdminPanel() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Mock data for the Admin overview
  const systemStats = {
    activeFaculty: 91,
    pendingInvites: 4,
    papersAwaitingApproval: 28,
    systemHealth: "Optimal"
  };

  const recentActivity = [
    { id: 1, action: "New Faculty Registered", user: "Dr. Teekaraman Y.", time: "2 hours ago", status: "Success" },
    { id: 2, action: "Scraper Engine Executed", user: "System", time: "5 hours ago", status: "Completed" },
    { id: 3, action: "NAAC Report Generated", user: "Admin", time: "1 day ago", status: "Downloaded" },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans flex flex-col md:flex-row relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* MOBILE TOP NAVIGATION (Visible only on small screens) */}
      <nav className="md:hidden relative z-50 flex justify-between items-center px-6 py-4 border-b border-slate-900 bg-[#070a13]">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
          </span>
        </a>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-40 bg-[#070a13]/95 backdrop-blur-xl border-b border-slate-800">
          <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-white transition cursor-pointer">Home</a>
            <a href="/faculty" className="hover:text-white transition cursor-pointer">Faculty Directory</a>
            <a href="/dashboard" className="hover:text-white transition cursor-pointer">Workspace</a>
            <span className="text-cyan-400 cursor-pointer">Admin Panel</span>
            <button className="text-left text-xs font-bold text-rose-500 hover:text-rose-400 mt-2 pt-4 border-t border-slate-800">
              ⏏ Secure Logout
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR (Hidden on mobile) */}
      <aside className="w-64 border-r border-slate-900 bg-[#070a13] p-6 hidden md:flex flex-col justify-between relative z-20 h-screen sticky top-0">
        <div className="space-y-8">
          <a href="/" className="block hover:opacity-80 transition">
            <span className="text-xl font-black text-white tracking-tighter">
              Vidwan<span className="text-cyan-500">Hub</span>
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-rose-500 block mt-1">Admin Access</span>
          </a>

          <nav className="space-y-2 text-sm font-medium">
            <span className="flex items-center gap-3 px-4 py-3 text-cyan-400 bg-slate-900/50 border border-slate-800/50 rounded-xl cursor-pointer">
              ⚙️ Control Panel
            </span>
            <span className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition rounded-xl cursor-pointer">
              👥 Manage Faculty
            </span>
            <span className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition rounded-xl cursor-pointer">
              📄 Accreditation Reports
            </span>
            <span className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition rounded-xl cursor-pointer">
              🎨 Portal Settings
            </span>
          </nav>
        </div>

        <button className="text-xs font-bold text-slate-500 hover:text-rose-400 transition flex items-center gap-2">
          ⏏ Secure Logout
        </button>
      </aside>

      {/* MAIN ADMIN AREA */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto space-y-8 relative z-10 w-full overflow-y-auto">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">System Overview</h1>
            <p className="text-xs text-slate-400 mt-1">Manage institutional data, user access, and system configurations.</p>
          </div>
          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
              + Invite Faculty
            </button>
            <button className="flex-1 sm:flex-none bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-[0_0_10px_rgba(8,145,178,0.2)]">
              Export NAAC Report
            </button>
          </div>
        </header>

        {/* Top Analytics Row */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0b101e]/80 border border-slate-800 p-5 rounded-xl">
            <p className="text-xs font-mono uppercase text-slate-500 mb-1">Active Faculty</p>
            <p className="text-3xl font-bold text-white">{systemStats.activeFaculty}</p>
          </div>
          <div className="bg-[#0b101e]/80 border border-slate-800 p-5 rounded-xl">
             <p className="text-xs font-mono uppercase text-slate-500 mb-1">Pending Invites</p>
             <p className="text-3xl font-bold text-white">{systemStats.pendingInvites}</p>
          </div>
          <div className="bg-[#0b101e]/80 border border-slate-800 p-5 rounded-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-rose-500"></div>
            <p className="text-xs font-mono uppercase text-slate-500 mb-1">Papers to Approve</p>
            <p className="text-3xl font-bold text-rose-400">{systemStats.papersAwaitingApproval}</p>
          </div>
          <div className="bg-[#0b101e]/80 border border-slate-800 p-5 rounded-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1 h-full bg-emerald-500"></div>
            <p className="text-xs font-mono uppercase text-slate-500 mb-1">System Engine</p>
            <p className="text-3xl font-bold text-emerald-400">{systemStats.systemHealth}</p>
          </div>
        </section>

        {/* HORIZONTAL SCROLL FIX FOR ACTIVITY LOG */}
        <section className="bg-[#0b101e]/80 border border-slate-800 rounded-xl overflow-hidden">
          <div className="p-5 border-b border-slate-800">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Recent System Activity</h2>
          </div>
          
          {/* This div enables swiping left/right on mobile! */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-sm min-w-[600px]">
              <tbody className="divide-y divide-slate-800/50">
                {recentActivity.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-900/30 transition">
                    <td className="p-4 text-slate-300 font-medium whitespace-nowrap">{log.action}</td>
                    <td className="p-4 text-slate-500 text-xs font-mono whitespace-nowrap">{log.user}</td>
                    <td className="p-4 text-slate-500 text-xs whitespace-nowrap">{log.time}</td>
                    <td className="p-4 text-right pr-6">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-950/30 border border-cyan-900 px-2 py-1 rounded whitespace-nowrap">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </section>
      </main>
    </div>
  );
}
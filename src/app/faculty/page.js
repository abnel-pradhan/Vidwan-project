"use client";
import { useState } from "react";

export default function FacultyDirectory() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const collegeName = "Alpine";

  const facultyList = [
    { id: 1, name: "Dr. Ramya K.", dept: "Computer Science", pubs: 45, citations: 890 },
    { id: 2, name: "Dr. Vigneshwar Mekha", dept: "Artificial Intelligence", pubs: 32, citations: 1205 },
    { id: 3, name: "Prof. Uganya G.", dept: "Information Technology", pubs: 28, citations: 410 },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      {/* Top Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-900">
        
        {/* CLICKABLE LOGO - Takes you back Home */}
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-white transition cursor-pointer">Home</a>
          <span className="text-cyan-400 cursor-pointer">Faculty Directory</span>
          <a href="/dashboard" className="hover:text-white transition cursor-pointer">Workspace</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none z-50"
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

      {/* Mobile Dropdown Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-40 bg-[#070a13]/95 backdrop-blur-xl border-b border-slate-800">
          <div className="flex flex-col px-8 py-6 space-y-4 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-white transition cursor-pointer">Home</a>
            <span className="text-cyan-400 cursor-pointer">Faculty Directory</span>
            <a href="/dashboard" className="hover:text-white transition cursor-pointer">Workspace</a>
            <a href="/admin" className="hover:text-white transition cursor-pointer">Admin</a>
          </div>
        </div>
      )}

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-24">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Faculty Directory</h1>
          <p className="text-slate-400">Browse verified academic profiles and publication records at {collegeName}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyList.map((faculty) => (
            <a key={faculty.id} href={`/faculty/${faculty.id}`} className="block group">
              <div className="bg-[#0b101e] border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_30px_-15px_rgba(8,145,178,0.2)]">
                <div className="w-12 h-12 rounded-full bg-cyan-950 text-cyan-400 font-bold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {faculty.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{faculty.name}</h3>
                <p className="text-xs font-mono text-slate-500 mb-6">{faculty.dept}</p>
                
                <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">Pubs</p>
                    <p className="text-sm font-bold text-white">{faculty.pubs}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500">Citations</p>
                    <p className="text-sm font-bold text-white">{faculty.citations}</p>
                  </div>
                  <div className="text-cyan-500 font-bold">→</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
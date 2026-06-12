"use client";
import { useState } from "react";

export default function FacultyDashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const collegeName = "Alpine";
  const domain = "alpine.vidyawan.in";

  // Mock data representing a logged-in professor's private panel
  const facultyUser = {
    name: "Dr. Vigneshwar Mekha",
    department: "Artificial Intelligence and Machine Learning",
    pendingScrapedPapers: [
      {
        id: 101,
        title: "Automated Crop Disease Detection Using Convolutional Neural Networks on Edge Devices",
        source: "Google Scholar Ingestion Engine",
        scrapedDate: "June 11, 2026"
      },
      {
        id: 102,
        title: "Energy-Efficient Scheduling Algorithms for Real-Time Computer Vision Systems",
        source: "Scopus API Collector",
        scrapedDate: "June 08, 2026"
      }
    ],
    confirmedPublications: [
      { id: 1, title: "Deep Learning Architectures for Edge Computer Vision", journal: "International Journal of Computer Vision", status: "Published" },
      { id: 2, title: "A Survey of Autonomous AI Agents in Smart Grids", journal: "IEEE Access", status: "Published" }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans flex flex-col md:flex-row relative overflow-hidden">
      
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
            <span className="text-cyan-400 cursor-pointer">Overview Workspace</span>
            <a href="/admin" className="hover:text-white transition cursor-pointer">Admin</a>
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
            <p className="text-[10px] text-slate-500 font-mono tracking-wider mt-1 uppercase">{domain} console</p>
          </a>

          <nav className="space-y-1 text-sm font-medium">
            <a href="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition rounded-xl cursor-pointer">
              🏠 Home
            </a>
            <span className="flex items-center gap-3 px-4 py-3 text-cyan-400 bg-slate-900/50 border border-slate-800/50 rounded-xl cursor-pointer">
              📊 Overview Workspace
            </span>
            <span className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition rounded-xl cursor-pointer">
              📚 My Publications
            </span>
          </nav>
        </div>

        <div className="pt-4 border-t border-slate-900">
          <p className="text-xs font-semibold text-white truncate">{facultyUser.name}</p>
          <p className="text-[10px] text-slate-500 truncate">{facultyUser.department}</p>
        </div>
      </aside>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-1 p-6 md:p-10 max-w-5xl mx-auto space-y-10 relative z-10 w-full overflow-y-auto">
        
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Welcome Back, Professor</h1>
            <p className="text-xs text-slate-400 mt-1">Manage your active academic profile metrics and system records for {collegeName}.</p>
          </div>
          <a href={`/faculty/2`} className="text-xs font-semibold text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 px-4 py-2 rounded-xl bg-slate-900/40 transition text-center w-full sm:w-auto">
            View Public Profile &rarr;
          </a>
        </header>

        {/* ALERT PIPELINE: The Scraper Queue */}
        {facultyUser.pendingScrapedPapers.length > 0 && (
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                Automated Scraper Queue ({facultyUser.pendingScrapedPapers.length} New)
              </h2>
            </div>

            <div className="space-y-3">
              {facultyUser.pendingScrapedPapers.map((paper) => (
                <div key={paper.id} className="bg-gradient-to-r from-slate-950 to-[#0b101e] border border-cyan-950 p-5 rounded-xl flex flex-col md:flex-row justify-between gap-4 items-start md:items-center shadow-[0_0_20px_rgba(6,182,212,0.03)]">
                  <div className="space-y-1 max-w-2xl">
                    <h3 className="text-sm font-bold text-white leading-snug">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2 md:mt-0">
                      <span>Source: <strong className="text-slate-400 font-medium">{paper.source}</strong></span>
                      <span className="text-slate-700 hidden sm:inline">•</span>
                      <span className="block sm:inline">Detected: {paper.scrapedDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                    <button className="flex-1 md:flex-initial bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-lg transition shadow-[0_0_10px_rgba(8,145,178,0.2)]">
                      Approve
                    </button>
                    <button className="flex-1 md:flex-initial bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-rose-400 text-xs font-semibold px-4 py-2 rounded-lg transition">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ACTIVE PUBLICATIONS TABLE (With Scroll Fix) */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">Confirmed Publications</h2>
          
          <div className="border border-slate-900 bg-[#090d1a]/40 rounded-xl overflow-hidden">
            {/* The horizontal scroll wrapper */}
            <div className="overflow-x-auto w-full">
              <table className="w-full text-left border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-900 bg-slate-900/20 text-slate-500 text-xs font-mono">
                    <th className="p-4 font-semibold whitespace-nowrap">Publication Title</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Journal/Conference Location</th>
                    <th className="p-4 font-semibold text-right whitespace-nowrap">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-900/60">
                  {facultyUser.confirmedPublications.map((pub) => (
                    <tr key={pub.id} className="hover:bg-slate-900/10 transition group">
                      <td className="p-4 font-medium text-slate-200 group-hover:text-cyan-400 transition min-w-[300px]">{pub.title}</td>
                      <td className="p-4 text-slate-400 font-mono text-xs whitespace-nowrap">{pub.journal}</td>
                      <td className="p-4 text-right pr-6 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-emerald-950/40 text-emerald-400 border border-emerald-900/40">
                          {pub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
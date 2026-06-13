"use client";
import { useState } from "react";

export default function FacultyDirectory() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("people"); // 'people' or 'problems'
  const collegeName = "Alpine";

  // Expanded dataset to include "Expertise" so the Problems search works!
  const facultyList = [
    { id: 1, name: "Dr. Ramya K.", dept: "Computer Science", expertise: "Waste Prediction, Machine Learning", pubs: 45, citations: 890 },
    { id: 2, name: "Dr. Vigneshwar Mekha", dept: "Artificial Intelligence", expertise: "Computer Vision, Edge Computing, Autonomous Systems", pubs: 32, citations: 1205 },
    { id: 3, name: "Prof. Uganya G.", dept: "Information Technology", expertise: "Data Science, Neural Networks, IoT", pubs: 28, citations: 410 },
    { id: 4, name: "Dr. T. Banerjee", dept: "Geography", expertise: "Geographic Information Systems, Climate Modeling", pubs: 18, citations: 215 },
  ];

  // Real-time filtering logic
  const filteredFaculty = facultyList.filter(faculty => {
    if (searchQuery === "") return true;
    
    if (searchType === "people") {
      return faculty.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      // Searches both the department and the specific expertise areas
      return faculty.expertise.toLowerCase().includes(searchQuery.toLowerCase()) || 
             faculty.dept.toLowerCase().includes(searchQuery.toLowerCase());
    }
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      {/* UNIFIED TOP NAVIGATION */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-900/50">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <span className="text-xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="/" className="hover:text-white transition cursor-pointer">Home</a>
          <span className="text-cyan-400 cursor-pointer">Faculty Directory</span>
          <a href="/dashboard" className="hover:text-white transition cursor-pointer">Workspace</a>
          <a href="/admin" className="hover:text-white transition cursor-pointer">Admin</a>
          
          <a href="/login" className="text-white hover:text-cyan-400 font-bold transition cursor-pointer flex items-center gap-2">
            Sign In <span className="text-cyan-500">→</span>
          </a>
          
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Contact Admin
          </button>
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

      {/* UNIFIED MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden relative z-40 bg-[#070a13]/95 backdrop-blur-xl border-b border-slate-800">
          <div className="flex flex-col px-8 py-6 space-y-4 text-sm font-medium text-slate-400">
            <a href="/" className="hover:text-white transition cursor-pointer">Home</a>
            <span className="text-cyan-400 cursor-pointer">Faculty Directory</span>
            <a href="/dashboard" className="hover:text-white transition cursor-pointer">Workspace</a>
            <a href="/admin" className="hover:text-white transition cursor-pointer">Admin</a>
            
            <a href="/login" className="text-white font-bold hover:text-cyan-400 transition cursor-pointer">
              Sign In →
            </a>
          </div>
        </div>
      )}

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24">
        
        {/* MASSIVE DISCOVERY SEARCH ENGINE */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Expertise Discovery Engine
          </h1>
          <p className="text-slate-400 mb-8">
            Search verified institutional records at {collegeName} by specific scholar or underlying research problems.
          </p>

          {/* Search Bar */}
          <div className="relative flex items-center w-full bg-[#0b101e] border-2 border-slate-800 focus-within:border-cyan-500 rounded-full overflow-hidden shadow-[0_0_30px_rgba(8,145,178,0.1)] transition-colors">
            <span className="pl-6 text-xl">🔍</span>
            <input
              type="text"
              placeholder={searchType === "people" ? "Search by professor name... (e.g., Vigneshwar)" : "Search algorithms, domains, or problems... (e.g., Vision)"}
              className="w-full bg-transparent border-none text-white px-4 py-4 md:py-5 focus:outline-none placeholder-slate-600 text-sm md:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="hidden md:block bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-10 py-5 transition">
              Search
            </button>
          </div>

          {/* Search Toggles (People vs Problems) */}
          <div className="flex justify-center gap-8 mt-6">
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer hover:text-white transition group">
              <input 
                type="radio" 
                name="searchType"
                checked={searchType === "people"} 
                onChange={() => {
                  setSearchType("people");
                  setSearchQuery("");
                }} 
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-slate-900 border-slate-700 cursor-pointer" 
              />
              <span className={searchType === "people" ? "text-cyan-400 font-bold" : ""}>👥 Search People</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer hover:text-white transition group">
              <input 
                type="radio" 
                name="searchType"
                checked={searchType === "problems"} 
                onChange={() => {
                  setSearchType("problems");
                  setSearchQuery("");
                }} 
                className="w-4 h-4 text-cyan-500 focus:ring-cyan-500 bg-slate-900 border-slate-700 cursor-pointer" 
              />
              <span className={searchType === "problems" ? "text-cyan-400 font-bold" : ""}>💡 Search Problems</span>
            </label>
          </div>
        </div>

        {/* RESULTS TEXT */}
        <div className="mb-6 flex justify-between items-end border-b border-slate-800 pb-4">
          <h2 className="text-lg font-bold text-white">
            {searchQuery === "" ? "All Faculty Profiles" : `Search Results (${filteredFaculty.length})`}
          </h2>
        </div>

        {/* FACULTY GRID */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredFaculty.map((faculty) => (
              <a key={faculty.id} href={`/faculty/${faculty.id}`} className="block group">
                <div className="bg-[#0b101e] border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_10px_30px_-15px_rgba(8,145,178,0.2)] h-full flex flex-col justify-between">
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-full bg-cyan-950 text-cyan-400 font-bold text-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                        {faculty.name.charAt(0)}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                        {faculty.dept}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{faculty.name}</h3>
                    
                    <div className="mb-6">
                      <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">Expertise Domains:</p>
                      <p className="text-sm text-slate-300 leading-relaxed">{faculty.expertise}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center border-t border-slate-800 pt-5 mt-4">
                    <div className="flex gap-8">
                      <div className="text-left">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Pubs</p>
                        <p className="text-base font-bold text-white">{faculty.pubs}</p>
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500">Citations</p>
                        <p className="text-base font-bold text-white">{faculty.citations}</p>
                      </div>
                    </div>
                    <div className="text-cyan-500 font-bold bg-cyan-950/30 px-4 py-2 rounded-lg group-hover:bg-cyan-600 group-hover:text-white transition">
                      View Profile →
                    </div>
                  </div>

                </div>
              </a>
            ))}
          </div>
        ) : (
          /* EMPTY STATE (If search finds nothing) */
          <div className="text-center py-20 bg-[#0b101e] border border-slate-800 rounded-2xl">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-white mb-2">No profiles found</h3>
            <p className="text-slate-500 text-sm">We couldn't find any scholars matching "{searchQuery}" in this domain.</p>
          </div>
        )}
      </main>
    </div>
  );
}
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScholarProfile({ params }) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const profileData = {
    name: "Dr VIGNESHWAR MEKHA",
    designation: "Assistant professor",
    institution: "Govt. Degree College for Women (Begumpet)",
    vidwanId: "243439",
    profileUrl: "https://vidwan.inflibnet.ac.in/profile/243439",
    score: "5.7/10",
    articles: 4,
    awards: 2,
    expertise: "Geography",
    expertiseDesc: "I AM WORKING AS AN ACADEMICIAN IN GOVERNMENT DEGREE COLLEGE FOR WOMEN, BEGUMPET, HYDERABAD",
    similarExperts: [
      { name: "J.P. Singh", domain: "Geography" },
      { name: "T. Banerjee", domain: "Geography" },
      { name: "Utpal Baruah", domain: "Geography" },
      { name: "Ratna Upadhyaya Joshi", domain: "Geography" },
      { name: "A N Balchand", domain: "Geography" }
    ]
  };

  // NEW FIX: Attach the search word to the URL!
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      router.push(`/faculty?search=${encodeURIComponent(searchQuery)}`);
    } else {
      router.push("/faculty");
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden">
      <nav className="relative z-50 flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-slate-900 bg-[#070a13] gap-4">
        <a href="/faculty" className="flex items-center gap-2 hover:opacity-80 transition text-white font-black tracking-tighter text-xl">
          Vidwan<span className="text-cyan-500">Hub</span>
        </a>
        
        <form onSubmit={handleSearch} className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search problems, topics, or people..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0b101e] border border-slate-800 rounded-full px-5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition shadow-inner"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400">
            🔍
          </button>
        </form>

        <div className="hidden md:flex gap-4 text-xs font-semibold">
          <button className="bg-slate-900 border border-slate-800 hover:border-cyan-500 text-white px-4 py-2 rounded-lg transition">Download CV</button>
          <a href="/dashboard" className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg transition">Workspace View</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0b101e] border border-slate-800 rounded-xl p-6 flex flex-col items-center shadow-lg">
              <div className="w-32 h-32 rounded-xl bg-gradient-to-tr from-cyan-900 to-slate-900 border border-slate-700 flex items-center justify-center mb-4 overflow-hidden">
                <span className="text-5xl font-black text-cyan-500">{profileData.name.charAt(3)}</span>
              </div>
              <button className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-4 py-2 rounded transition w-full">
                Change Photo
              </button>
            </div>

            <div className="bg-[#0b101e] border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <ul className="text-sm font-medium text-slate-400 divide-y divide-slate-800/50">
                <li className="bg-slate-800/50 text-cyan-400 border-l-4 border-cyan-500 px-5 py-3 cursor-pointer">Profile</li>
                <li className="px-5 py-3 hover:bg-slate-900/50 hover:text-white cursor-pointer transition">Personal Information</li>
                <li className="px-5 py-3 hover:bg-slate-900/50 hover:text-white cursor-pointer transition">Expertise Information</li>
                <li className="px-5 py-3 hover:bg-slate-900/50 hover:text-white cursor-pointer transition">Experience</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-center shadow-lg">
                <span className="text-xs text-slate-400 uppercase tracking-wider mb-1">Profile Score</span>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-black text-white">{profileData.score}</span>
                </div>
                <div className="w-full bg-slate-950 rounded-full h-1.5 mt-2">
                  <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
              
              <div className="bg-cyan-950/30 border border-cyan-900/50 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                <span className="text-3xl font-black text-cyan-400">{profileData.articles}</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">Articles</span>
              </div>

              <div className="bg-blue-950/30 border border-blue-900/50 rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                <span className="text-3xl font-black text-blue-400">{profileData.awards}</span>
                <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">Awards</span>
              </div>
            </div>

            <div className="bg-[#0b101e] border border-slate-800 rounded-xl p-6 shadow-lg relative">
              <h1 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">{profileData.name}</h1>
              <p className="text-sm text-slate-400 mb-1">{profileData.designation}</p>
              <p className="text-sm text-slate-400 mb-6">{profileData.institution}</p>
              
              <div className="bg-slate-900/80 border border-slate-800 rounded px-4 py-2 inline-flex items-center gap-2">
                <span className="text-xs font-bold text-white">Profile URL:</span>
                <a href="#" className="text-xs text-cyan-400 hover:underline truncate">{profileData.profileUrl}</a>
              </div>
            </div>

            <div className="bg-[#0b101e] border border-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-slate-900/50 border-b border-slate-800 px-6 py-4 flex justify-between items-center">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">💡 Expertise</h2>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">{profileData.expertise}</h3>
                <p className="text-xs text-slate-400 uppercase tracking-widest leading-relaxed">
                  ⚙ {profileData.expertiseDesc}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-[#0b101e] border border-slate-800 rounded-xl shadow-lg overflow-hidden">
              <div className="bg-slate-900/50 border-b border-slate-800 px-5 py-4">
                <h2 className="text-sm font-bold text-white flex items-center gap-2">👥 Similar Experts <span className="text-xs text-slate-500 font-normal">(345)</span></h2>
              </div>
              <ul className="divide-y divide-slate-800/50">
                {profileData.similarExperts.map((expert, idx) => (
                  <li key={idx} className="p-4 hover:bg-slate-900/30 transition flex items-center gap-3 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-900 group-hover:text-cyan-400 transition">
                      {expert.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200 group-hover:text-white transition">{expert.name}</p>
                      <p className="text-[10px] uppercase tracking-wider text-slate-500">{expert.domain}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
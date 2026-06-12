export default async function ScholarProfile({ params }) {
  const { facultyId } = await params; 
  const collegeName = "Alpine";

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none" />

      {/* Top Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <a href="/faculty" className="text-sm font-medium text-slate-400 hover:text-white transition flex items-center gap-2">
          ← Back to Directory
        </a>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-10 pb-24 space-y-10">
        
        {/* Profile Header */}
        <header className="flex flex-col md:flex-row gap-8 items-start md:items-center">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-cyan-900 to-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_0_30px_rgba(8,145,178,0.2)]">
            <span className="text-5xl font-black text-cyan-500">V</span>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight mb-2">Dr. Vigneshwar Mekha</h1>
            <p className="text-lg text-cyan-400 font-medium mb-1">Associate Professor</p>
            <p className="text-sm text-slate-400 font-mono">Department of Artificial Intelligence • {collegeName} University</p>
            
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1 rounded-md bg-[#0b101e] border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> ORCID Verified
              </span>
            </div>
          </div>
        </header>

        {/* Publication Timeline */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-4">Recent Publications</h2>
          
          <div className="space-y-6 border-l-2 border-slate-800 ml-4 pl-6">
            
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              <p className="text-xs font-mono text-cyan-400 mb-1">2026</p>
              <h3 className="text-lg font-bold text-white mb-2">Deep Learning Architectures for Edge Computer Vision</h3>
              <p className="text-sm text-slate-400">Published in: <span className="italic text-slate-300">International Journal of Computer Vision</span></p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-600"></div>
              <p className="text-xs font-mono text-slate-500 mb-1">2025</p>
              <h3 className="text-lg font-bold text-slate-300 mb-2">A Survey of Autonomous AI Agents in Smart Grids</h3>
              <p className="text-sm text-slate-400">Published in: <span className="italic text-slate-300">IEEE Access</span></p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
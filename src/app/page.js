export default function GlobalSaaSPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* SaaS Global Background Effects */}
      <div className="absolute top-[-20%] left-[10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      {/* Global Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
            <span className="text-xs text-cyan-400 font-mono ml-2 border border-cyan-900 bg-cyan-950/30 px-2 py-0.5 rounded">SaaS</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <span className="hover:text-white transition cursor-pointer">Platform Features</span>
          <span className="hover:text-white transition cursor-pointer">For Universities</span>
          <span className="hover:text-white transition cursor-pointer">Pricing</span>
        </div>
        <div className="flex gap-4">
          <button className="text-sm font-semibold text-white hover:text-cyan-400 transition">
            Client Login
          </button>
          <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(8,145,178,0.4)]">
            Partner With Us
          </button>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
        
        {/* Global Hero Section */}
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-cyan-900/50 bg-cyan-950/20 text-cyan-400 text-xs font-mono font-bold tracking-widest uppercase">
          The National Researcher's Network
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
          Elevate Your Institution's <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Global Research Standing</span>
        </h1>
        
        <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Deploy a dedicated, automated research portal for your college in minutes. We aggregate faculty publications, track citations, and generate instant NAAC accreditation reports.
        </p>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <button className="bg-white text-slate-950 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            Schedule a Demo
          </button>
          <button className="bg-[#0b101e] border border-slate-700 hover:border-cyan-500 text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center gap-2">
            View Sample College Portal <span className="text-cyan-500">→</span>
          </button>
        </div>

        {/* Client Logos / Trust Section */}
        <div className="mt-32 border-t border-slate-800/50 pt-12">
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-8">Trusted by leading academic institutions</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
             {/* Placeholders for College Logos */}
             <span className="text-xl font-black text-white">IIT System</span>
             <span className="text-xl font-black text-white">Alpine University</span>
             <span className="text-xl font-black text-white">Sikkim Tech</span>
             <span className="text-xl font-black text-white">National NIT</span>
          </div>
        </div>

      </main>
    </div>
  );
}
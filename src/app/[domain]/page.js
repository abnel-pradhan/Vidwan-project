export default async function CollegeDashboard({ params }) {
  const { domain } = await params;
  const collegeName = domain.charAt(0).toUpperCase() + domain.slice(1);

  // The Academic Dataset
  const data = {
    institution: `${collegeName} University`,
    metrics: {
      facultyCount: 91,
      publications: 625,
      patents: 88,
      citations: 1406,
    },
    topPapers: [
      {
        title: "A Novel Strategy for Waste Prediction Using Machine Learning",
        authors: "Dr. Ramya K., Uganya G.",
        citations: 54,
      },
      {
        title: "Deep Learning Architectures for Edge Computer Vision",
        authors: "Dr. Vigneshwar Mekha",
        citations: 42,
      }
    ],
    departments: [
      { name: "Artificial Intelligence", faculty: 8 },
      { name: "Computer Science", faculty: 23 },
      { name: "Electrical Engineering", faculty: 8 },
      { name: "Electronics & Comm.", faculty: 20 }
    ]
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambient Glowing Orbs (Replicating the reference image background) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[40%] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      {/* Glassmorphism Top Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <span className="text-cyan-400 cursor-pointer">Home</span>
          <span className="hover:text-white transition cursor-pointer">Why Research</span>
          <span className="hover:text-white transition cursor-pointer">Departments</span>
          <span className="hover:text-white transition cursor-pointer">Faculty</span>
        </div>
        <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(8,145,178,0.4)]">
          Contact Admin
        </button>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        
        {/* HERO SECTION */}
        <section className="pt-20 pb-32 text-center md:text-left max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Unleashing the Power <br />
            of <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Academic Research</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl">
            Transforming institutional knowledge with secure, verified, and transparent publication tracking.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:scale-105 transition-all">
              Explore Faculty
            </button>
            <button className="bg-slate-900/50 border border-slate-700 hover:border-cyan-500/50 text-white font-semibold px-8 py-3.5 rounded-full transition-all backdrop-blur-sm">
              Discover How It Works
            </button>
          </div>
        </section>

        {/* 4-COLUMN STATS GRID (Matching "Why Blockchain?") */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why <span className="text-cyan-400">Our Portal?</span></h2>
            <p className="text-slate-400 text-sm">Institutional metrics redefining trust in academic research. Here's our impact:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="bg-[#0b101e]/80 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-sm transition-all group hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] text-center">
              <div className="w-14 h-14 mx-auto bg-cyan-950/50 border border-cyan-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl font-black text-cyan-400">{data.metrics.facultyCount}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Total Faculty</h3>
              <p className="text-sm text-slate-500">Verified academic profiles within the system.</p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#0b101e]/80 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-sm transition-all group hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] text-center">
              <div className="w-14 h-14 mx-auto bg-blue-950/50 border border-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <span className="text-2xl font-black text-blue-400">{data.metrics.publications}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Publications</h3>
              <p className="text-sm text-slate-500">Scraped and verified scholarly resources.</p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#0b101e]/80 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-sm transition-all group hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] text-center">
              <div className="w-14 h-14 mx-auto bg-cyan-950/50 border border-cyan-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <span className="text-2xl font-black text-cyan-400">{data.metrics.citations}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Citations</h3>
              <p className="text-sm text-slate-500">Public, accountable research reach.</p>
            </div>

            {/* Box 4 */}
            <div className="bg-[#0b101e]/80 border border-slate-800 hover:border-cyan-500/50 p-8 rounded-2xl backdrop-blur-sm transition-all group hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] text-center">
              <div className="w-14 h-14 mx-auto bg-blue-950/50 border border-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                 <span className="text-2xl font-black text-blue-400">{data.metrics.patents}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Patents</h3>
              <p className="text-sm text-slate-500">Registered intellectual property output.</p>
            </div>
          </div>
        </section>

        {/* SPLIT SECTION (Matching "Why Blockchain Matters") */}
        <section className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">Why Research <span className="text-cyan-400">Matters</span></h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our institutional portal is revolutionizing how we handle academic data, tracking, and trust. By eliminating manual data entry and creating a secure, transparent system linked to Scopus and ORCID, we are laying the foundation for a more efficient and fair digital future in academia.
            </p>
            <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-2.5 rounded-full transition shadow-[0_0_15px_rgba(8,145,178,0.4)]">
              Read More
            </button>
          </div>
          
          <div className="lg:w-1/2 w-full space-y-4">
            {/* Glowing isometric-style paper cards */}
            {data.topPapers.map((paper, idx) => (
              <div key={idx} className="relative bg-gradient-to-r from-slate-900 to-[#0b101e] border border-slate-800 p-6 rounded-2xl shadow-[0_10px_40px_-10px_rgba(8,145,178,0.1)] hover:border-cyan-500/30 transition-all">
                <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-cyan-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
                <h4 className="text-lg font-bold text-white mb-1">{paper.title}</h4>
                <p className="text-sm text-cyan-400 font-medium mb-3">{paper.authors}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono border-t border-slate-800 pt-3">
                  <span className="text-white font-bold">{paper.citations}</span> Indexed Citations
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DEPARTMENTS (Replacing the Pricing Plans section) */}
        <section>
           <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Academic <span className="text-cyan-400">Departments</span></h2>
            <p className="text-slate-400 text-sm">Explore the specialized sectors driving our technological capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.departments.map((dept, idx) => (
              <div key={idx} className="bg-[#0b101e] border border-slate-800 hover:border-cyan-500 p-6 rounded-2xl group transition-all">
                <h3 className="text-sm font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{dept.name}</h3>
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500">Faculty Profiles:</span>
                  <span className="text-white font-bold bg-slate-800 px-2 py-1 rounded">{dept.faculty}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
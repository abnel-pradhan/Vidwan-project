export default async function FacultyDirectory({ params }) {
  const { domain } = await params;
  const collegeName = domain.charAt(0).toUpperCase() + domain.slice(1);

  // Mock Data for Faculty Members
  const facultyList = [
    { id: 1, name: "Dr. Ramya K", role: "Associate Professor", dept: "Computer Science", publications: 72, citations: 1045, hIndex: 18 },
    { id: 2, name: "Dr. Vigneshwar Mekha", role: "Assistant Professor", dept: "Artificial Intelligence", publications: 45, citations: 890, hIndex: 14 },
    { id: 3, name: "Dr. Smitha J. A.", role: "Professor & HOD", dept: "Electronics & Comm.", publications: 112, citations: 3200, hIndex: 32 },
    { id: 4, name: "Dr. Uganya G.", role: "Assistant Professor", dept: "Information Technology", publications: 28, citations: 410, hIndex: 8 },
    { id: 5, name: "Prof. Rajalakshmi D.", role: "Associate Professor", dept: "Computer Science", publications: 56, citations: 780, hIndex: 12 },
    { id: 6, name: "Dr. Teekaraman Y.", role: "Professor", dept: "Electrical Engineering", publications: 94, citations: 2150, hIndex: 26 },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-0 left-[20%] w-[50%] h-[30%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />
      
      {/* Navigation (Simplified for sub-pages) */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-7xl mx-auto border-b border-slate-800/50">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black text-white tracking-tighter">
            Vidwan<span className="text-cyan-500">Hub</span>
          </span>
          <span className="text-xs text-slate-500 font-mono ml-4 px-2 py-1 bg-slate-900 rounded border border-slate-800">
            {collegeName} Directory
          </span>
        </div>
        <a href={`/`} className="text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer">
          &larr; Back to Dashboard
        </a>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        
        {/* Directory Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Expert <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Directory</span>
            </h1>
            <p className="text-slate-400">Search and filter verified academic profiles across all departments.</p>
          </div>
          
          <div className="w-full md:w-96 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search by name or department..." 
              className="w-full bg-[#0b101e] border border-slate-700 text-white rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition shadow-[0_0_15px_rgba(8,145,178,0.1)] placeholder-slate-500"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyList.map((faculty) => (
            <div key={faculty.id} className="bg-[#0b101e]/60 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl backdrop-blur-sm transition-all group hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] flex flex-col justify-between h-full">
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-300">
                    {faculty.name.charAt(4)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono bg-cyan-950/30 px-2 py-1 rounded border border-cyan-900/50">
                    {faculty.dept}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{faculty.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{faculty.role}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/50">
                <div className="grid grid-cols-3 gap-2 text-center mb-6">
                  <div>
                    <span className="block text-lg font-bold text-white">{faculty.publications}</span>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Papers</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-white">{faculty.citations}</span>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider">Citations</span>
                  </div>
                  <div>
                    <span className="block text-lg font-bold text-cyan-400">{faculty.hIndex}</span>
                    <span className="block text-[10px] text-slate-500 uppercase tracking-wider">h-index</span>
                  </div>
                </div>
                
                <a href={`/faculty/${faculty.id}`} className="block w-full py-2.5 text-center text-sm font-semibold text-white bg-slate-800 hover:bg-cyan-600 rounded-xl transition-colors border border-slate-700 hover:border-cyan-500">
                  View Full Profile
                </a>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
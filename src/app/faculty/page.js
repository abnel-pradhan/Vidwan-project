'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPublicFacultyDirectory } from '@/app/actions/public';

export default function FacultyDirectoryPage() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDirectory() {
      const data = await getPublicFacultyDirectory();
      setFacultyList(data);
      setLoading(false);
    }
    loadDirectory();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8 pt-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-8">
          <Link href="/" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition flex items-center gap-2">
            <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
          </Link>
          <Link href="/auth/signin" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition">
            Admin Portal →
          </Link>
        </div>

        {/* Header */}
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Faculty Directory</h1>
          <p className="text-slate-400 mt-2 max-w-2xl">
            Explore the verified academic profiles, approved research publications, and citation metrics of our institution's faculty.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-cyan-400 animate-pulse text-sm font-semibold">Loading directory data...</div>
        ) : facultyList.length === 0 ? (
          <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-8 text-center text-slate-400">
            No faculty profiles found.
          </div>
        ) : (
          /* Faculty Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyList.map((prof) => (
              <div key={prof.id} className="relative rounded-2xl border border-slate-800 bg-[#0a0f1a] p-6 hover:border-cyan-500/50 transition-all group shadow-[0_0_20px_rgba(8,145,178,0.02)]">
                <div className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-1/3 bg-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <h3 className="text-lg font-bold text-white mb-1">{prof.name}</h3>
                <p className="text-xs text-cyan-400 font-medium mb-5">{prof.department}</p>
                
                <div className="flex items-center gap-6 border-t border-slate-800 pt-4">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Publications</div>
                    <div className="text-lg font-black text-white">{prof.totalPapers}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Citations</div>
                    <div className="text-lg font-black text-white">{prof.totalCitations}</div>
                  </div>
                </div>

                {prof.orcid && (
                  <a href={`https://orcid.org/${prof.orcid}`} target="_blank" rel="noreferrer" className="mt-4 block text-xs text-slate-400 hover:text-cyan-400 underline decoration-slate-700 underline-offset-2">
                    View ORCID Profile ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
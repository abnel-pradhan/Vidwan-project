'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { getUnmappedPapers, mapPaperToNaac } from '@/app/actions/naac';

export default function NaacMappingPage() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadPapers() {
    setLoading(true);
    const data = await getUnmappedPapers();
    setPapers(data);
    setLoading(false);
  }

  useEffect(() => {
    loadPapers();
  }, []);

  async function handleMapping(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const res = await mapPaperToNaac(formData);
    if (res.success) {
      toast.success('Paper successfully verified for NAAC!');
      loadPapers(); // Refresh the list to remove the mapped paper
    } else {
      toast.error(res.error);
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8 pt-12">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <Link href="/admin" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition">
          ← Back to Admin Dashboard
        </Link>

        <div>
          <h1 className="text-3xl font-bold text-white">IQAC / NAAC Mapping Engine</h1>
          <p className="text-slate-400 mt-2">Assign verified faculty publications to official accreditation criteria.</p>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="text-cyan-400 text-sm animate-pulse">Loading unmapped publications...</div>
          ) : papers.length === 0 ? (
            <div className="p-8 text-center border border-slate-800 rounded-xl bg-[#0a0f1a] text-slate-500">
              No pending papers. All approved publications have been mapped!
            </div>
          ) : (
            papers.map(paper => (
              <form key={paper.id} onSubmit={handleMapping} className="p-5 rounded-xl border border-slate-800 bg-[#0a0f1a] flex flex-col md:flex-row gap-4 items-center justify-between">
                
                <input type="hidden" name="publicationId" value={paper.id} />
                
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-200 text-sm">{paper.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Published: {paper.publicationYear} • Citations: {paper.citationCount}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <select name="academicYear" required className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-2.5 focus:border-cyan-500 outline-none">
                    <option value="">Select Year</option>
                    <option value="2025-2026">2025-2026</option>
                    <option value="2024-2025">2024-2025</option>
                    <option value="2023-2024">2023-2024</option>
                  </select>

                  <select name="criterionCode" required className="bg-slate-900 border border-slate-700 text-slate-300 text-xs rounded-lg px-3 py-2.5 focus:border-cyan-500 outline-none">
                    <option value="">Select Criteria</option>
                    <option value="3.4.1">3.4.1 (Ethics/Plagiarism)</option>
                    <option value="3.4.2">3.4.2 (Ph.D Guidance)</option>
                    <option value="3.4.3">3.4.3 (Research Publications)</option>
                    <option value="3.4.4">3.4.4 (Books/Chapters)</option>
                  </select>

                  <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition whitespace-nowrap">
                    Map & Approve
                  </button>
                </div>
              </form>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
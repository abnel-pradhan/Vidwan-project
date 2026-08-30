'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { getPublicFacultyDirectory } from '@/app/actions/public';
import { fetchFacultyPapers, saveIngestedPaper } from '@/app/actions/openalex';

export default function IngestPage() {
  const [faculty, setFaculty] = useState([]);
  const [selectedProf, setSelectedProf] = useState('');
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFaculty() {
      const data = await getPublicFacultyDirectory();
      setFaculty(data.filter(f => f.orcid)); // Only load faculty with ORCIDs
    }
    loadFaculty();
  }, []);

  async function handleSearch() {
    if (!selectedProf) return toast.error("Select a faculty member first.");
    setLoading(true);
    const profData = faculty.find(f => f.id === selectedProf);
    
    const results = await fetchFacultyPapers(profData.orcid);
    setPapers(results);
    setLoading(false);
    toast.success(`Found ${results.length} papers!`);
  }

  async function handleIngest(paper) {
    const res = await saveIngestedPaper(paper, selectedProf);
    if (res.success) {
      toast.success("Sent to IQAC approval queue!");
    } else {
      toast.error(res.error);
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8 pt-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <Link href="/admin" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition">
          ← Back to Dashboard
        </Link>

        <div>
          <h1 className="text-3xl font-bold text-white">OpenAlex Ingestion Engine</h1>
          <p className="text-slate-400 mt-2">Pull live publication data from the global OpenAlex database.</p>
        </div>

        <div className="flex gap-4">
          <select 
            className="flex-1 rounded-lg border border-slate-800 bg-[#0a0f1a] px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none"
            onChange={(e) => setSelectedProf(e.target.value)}
          >
            <option value="">Select a Professor (Requires ORCID)</option>
            {faculty.map(f => (
              <option key={f.id} value={f.id}>{f.name} - {f.orcid}</option>
            ))}
          </select>
          <button 
            onClick={handleSearch}
            disabled={loading}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            {loading ? 'Searching...' : 'Fetch OpenAlex'}
          </button>
        </div>

        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-slate-200">{paper.title}</h3>
                <p className="text-xs text-slate-400 mt-1">Year: {paper.publicationYear} • Citations: {paper.citationCount} • {paper.journalName}</p>
              </div>
              <button 
                onClick={() => handleIngest(paper)}
                className="rounded-md bg-slate-800 hover:bg-emerald-600 border border-slate-700 px-4 py-2 text-xs font-medium text-white transition"
              >
                Ingest to Queue
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
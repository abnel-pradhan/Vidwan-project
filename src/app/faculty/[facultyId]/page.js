export const dynamic = 'force-dynamic';
import React from 'react';
import { getFacultyProfileData } from '@/app/actions/faculty';
import { PublicationCard } from '@/components/PublicationCard';
import SyncButton from '@/app/components/SyncButton'; // ✅ Imported correctly

export default async function FacultyProfilePage({ params }) {
  const resolvedParams = await params;
  const authorId = resolvedParams?.facultyId || resolvedParams?.id || '';

  const data = await getFacultyProfileData(authorId);

  if (!data.success) {
    return (
      <div className="min-h-screen bg-[#030712] text-slate-100 p-8 flex flex-col items-center justify-center">
        <div className="max-w-md text-center rounded-xl border border-rose-500/20 bg-rose-950/10 p-6">
          <h2 className="text-xl font-bold text-rose-400">Faculty Profile Error</h2>
          <p className="text-sm text-slate-400 mt-2">{data.error}</p>
          <a
            href="/faculty"
            className="mt-5 inline-block rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white hover:bg-cyan-500 transition"
          >
            Back to Search
          </a>
        </div>
      </div>
    );
  }

  // ✅ Added 'profile' to destructuring (Make sure your backend returns this!)
  const { metrics, approvedPublications, allPapers, profile } = data;

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Bar */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <a href="/faculty" className="text-xs text-slate-400 hover:text-cyan-400 transition flex items-center gap-1">
            ← Back to Faculty Search
          </a>
          <a href="/admin" className="text-xs text-slate-400 hover:text-cyan-400 transition">
            Admin Portal →
          </a>
        </div>

        {/* Profile Header */}
        <div className="rounded-2xl border border-slate-800 bg-[#0a0f1a] p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20">
                Verified Researcher Profile
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">Faculty ID: {authorId}</h1>
              <p className="text-sm text-slate-400">
                Academic Research Portfolio & NAAC Metric Aggregation
              </p>
            </div>

            {/* ✅ ADDED THE SYNC BUTTON HERE */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex flex-wrap gap-2">
                {/* 
                  Note: If your data fetching doesn't return 'profile', you might need 
                  to update getFacultyProfileData to return the 'orcid', or temporarily 
                  hardcode an ORCID string here just to test if the button works. 
                */}
                <SyncButton 
                  facultyId={authorId} 
                  orcidId={profile?.orcid || "0000-0002-1825-0097"} 
                />
                <a
                  href={`https://openalex.org/authors/${authorId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-300 hover:border-cyan-500 hover:text-white transition h-fit"
                >
                  OpenAlex Profile ↗
                </a>
              </div>
            </div>
          </div>

          {/* Metric Summary Grid (Unchanged) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
            {/* ... Rest of your code remains exactly the same ... */}
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Total Publications</div>
              <div className="text-2xl font-bold text-white mt-1">{metrics.totalWorks}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Total Citations</div>
              <div className="text-2xl font-bold text-cyan-400 mt-1">{metrics.totalCitations}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Open Access</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">{metrics.openAccessCount}</div>
            </div>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">NAAC Approved (DB)</div>
              <div className="text-2xl font-bold text-amber-400 mt-1">{metrics.approvedForNaacCount}</div>
            </div>
          </div>
        </div>

        {/* ... Section 1 and Section 2 remain unchanged ... */}
        
      </div>
    </div>
  );
}
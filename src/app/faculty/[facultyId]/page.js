import React from 'react';
import { getFacultyProfileData } from '@/app/actions/faculty';
import { PublicationCard } from '@/components/PublicationCard';

export default async function FacultyProfilePage({ params }) {
  const resolvedParams = await params;
  // Supports both [facultyId] and [id] folder names
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

  const { metrics, approvedPublications, allPapers } = data;

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

            <div className="flex flex-wrap gap-2">
              <a
                href={`https://openalex.org/authors/${authorId}`}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-700 bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-300 hover:border-cyan-500 hover:text-white transition"
              >
                OpenAlex Profile ↗
              </a>
            </div>
          </div>

          {/* Metric Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/80">
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

        {/* Section 1: NAAC Verified Publications (From PostgreSQL) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span>🏛️</span> NAAC Verified Publications ({approvedPublications.length})
            </h2>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Eligible for Criteria 3.4
            </span>
          </div>

          {approvedPublications.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-800 bg-[#0a0f1a]/50 p-6 text-center text-sm text-slate-500">
              No publications have been approved by the IQAC Admin yet for this profile.
            </div>
          ) : (
            <div className="grid gap-4">
              {approvedPublications.map((paper) => (
                <div key={paper.id} className="relative">
                  <PublicationCard paper={paper} />
                  <div className="absolute top-4 right-4 text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    ✓ Verified in DB
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Section 2: All Publications from OpenAlex */}
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>📚</span> All Indexed Publications ({allPapers.length})
          </h2>
          <p className="text-xs text-slate-400">
            Directly synchronized from OpenAlex global scholarly registry.
          </p>

          <div className="grid gap-4">
            {allPapers.map((paper) => (
              <PublicationCard key={paper.openAlexId} paper={paper} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
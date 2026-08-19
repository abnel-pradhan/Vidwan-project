'use client';

import React, { useState } from 'react';
import { searchOpenAlexAuthor, fetchFacultyPapers } from '@/app/actions/openalex';
import { savePublicationToDatabase } from '@/app/actions/publications';
import { PublicationCard } from '@/components/PublicationCard';

export default function FacultySearchPage() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [papers, setPapers] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  // 1. Search OpenAlex for Authors
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setPapers([]);
    setSelectedAuthor(null);
    setStatusMessage('');

    const res = await searchOpenAlexAuthor(query);
    if (res.success) {
      setAuthors(res.authors);
      if (res.authors.length === 0) setStatusMessage('No authors found.');
    } else {
      setStatusMessage('Error searching author: ' + res.error);
    }
    setLoading(false);
  }

  // 2. Fetch Works for Selected Author
  async function handleSelectAuthor(author) {
    setSelectedAuthor(author);
    setLoading(true);
    setStatusMessage('');

    const res = await fetchFacultyPapers(author.id);
    if (res.success) {
      setPapers(res.papers);
    } else {
      setStatusMessage('Error loading papers: ' + res.error);
    }
    setLoading(false);
  }

  // 3. Save Paper to Database
  async function handleApprove(paper) {
    const res = await savePublicationToDatabase(paper);
    if (res.success) {
      alert(`Saved "${paper.title}" to PostgreSQL database!`);
    } else {
      alert('Failed to save paper: ' + res.error);
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <header className="mb-8 flex justify-between items-center border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Faculty Publication Ingestion</h1>
            <p className="text-slate-400 text-sm mt-1">Search faculty profiles via OpenAlex and import verified research papers.</p>
          </div>
          <a
            href="/admin"
            className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2 text-xs font-semibold text-slate-300 hover:border-cyan-500 hover:text-white transition"
          >
            Admin Portal →
          </a>
        </header>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-3 mb-8">
          <input
            type="text"
            placeholder="Search author name (e.g. Stephen Hawking, Andrew Ng) or ORCID..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-lg border border-slate-800 bg-[#0a0f1a] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-cyan-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-cyan-500 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {statusMessage && <p className="text-sm text-amber-400 mb-4">{statusMessage}</p>}

        {/* Author Disambiguation Results */}
        {authors.length > 0 && !selectedAuthor && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3 text-slate-200">Select Matching Author Profile:</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {authors.map((author) => (
                <div
                  key={author.id}
                  onClick={() => handleSelectAuthor(author)}
                  className="cursor-pointer rounded-lg border border-slate-800 bg-[#0a0f1a] p-4 transition hover:border-cyan-500"
                >
                  <div className="font-semibold text-cyan-400">{author.displayName}</div>
                  <div className="text-xs text-slate-400 mt-1">{author.lastKnownInstitution}</div>
                  <div className="text-xs text-slate-500 mt-2">
                    {author.worksCount} works · {author.citedByCount} citations
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Author Banner (Protected with selectedAuthor check) */}
        {selectedAuthor && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4 mb-6">
            <div>
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Selected Author</span>
              <h3 className="text-lg font-bold text-white">{selectedAuthor.displayName}</h3>
              <p className="text-xs text-slate-400">{selectedAuthor.lastKnownInstitution}</p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`/faculty/${selectedAuthor.id.replace('https://openalex.org/', '')}`}
                className="rounded-lg bg-cyan-600/20 border border-cyan-500/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-600 hover:text-white transition"
              >
                View Full Portfolio Page →
              </a>
              <button
                onClick={() => setSelectedAuthor(null)}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                Change Author
              </button>
            </div>
          </div>
        )}

        {/* Papers List */}
        {papers.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-200">
              Fetched Publications ({papers.length})
            </h2>
            <div className="grid gap-4">
              {papers.map((paper) => (
                <PublicationCard
                  key={paper.openAlexId}
                  paper={paper}
                  onApprove={handleApprove}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
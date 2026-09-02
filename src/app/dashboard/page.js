'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { getFacultyDashboardData, updatePaperStatus } from '@/app/actions/facultyDashboard';

export default function FacultyDashboardPage() {
  const [data, setData] = useState({ profile: null, pending: [], confirmed: [] });
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);
    const res = await getFacultyDashboardData();
    if (res) setData(res);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleAction(id, status) {
    const res = await updatePaperStatus(id, status);
    if (res.success) {
      toast.success(`Paper ${status.toLowerCase()} successfully!`);
      loadData(); // Refresh lists
    } else {
      toast.error(res.error);
    }
  }

  return (
    <div className="flex min-h-screen bg-[#030712] text-slate-100">
      
      {/* Sidebar */}
      <div className="w-64 border-r border-slate-800 bg-[#070a13] flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-white">Vidwan<span className="text-cyan-500">Hub</span></h1>
          <p className="text-[10px] text-slate-500 tracking-widest mt-1 uppercase">Alpine.Vidyawan.in Console</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            🏠 Home
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 transition">
            📊 Overview Workspace
          </Link>
          <Link href="/faculty" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition">
            👤 Public Profile
          </Link>
        </nav>
        {data.profile && (
          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-cyan-400">
                {data.profile.fullName.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{data.profile.fullName}</p>
                <p className="text-[10px] text-slate-500">{data.profile.designation}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Welcome Back, {data.profile?.fullName ? data.profile.fullName.split(' ')[0] : 'Professor'}</h2>
              <p className="text-sm text-slate-400 mt-1">Manage your active academic profile metrics and system records for Alpine.</p>
            </div>
            <Link href="/faculty" className="text-xs font-medium text-slate-300 border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 transition">
              View Public Profile →
            </Link>
          </div>

          {loading ? (
            <div className="text-cyan-400 text-sm animate-pulse">Syncing workspace...</div>
          ) : (
            <>
              {/* Pending Queue */}
              <div>
                <h3 className="text-xs font-bold text-cyan-400 tracking-wider mb-4 uppercase">
                  ● Automated Scraper Queue ({data.pending.length} New)
                </h3>
                <div className="space-y-3">
                  {data.pending.length === 0 ? (
                    <p className="text-sm text-slate-500">No new publications await your review.</p>
                  ) : (
                    data.pending.map((paper) => (
                      <div key={paper.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-slate-800 bg-[#0a0f1a]">
                        <div>
                          <h4 className="text-sm font-bold text-slate-100">{paper.title}</h4>
                          <p className="text-xs text-slate-500 mt-1">Source: OpenAlex API • Detected: {new Date(paper.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button onClick={() => handleAction(paper.id, 'APPROVED')} className="bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition">
                            Approve
                          </button>
                          <button onClick={() => handleAction(paper.id, 'REJECTED')} className="bg-transparent border border-slate-700 text-slate-300 hover:bg-rose-900/30 hover:text-rose-400 hover:border-rose-800 text-xs font-semibold px-4 py-2 rounded-lg transition">
                            Reject
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Confirmed Publications */}
              <div>
                <h3 className="text-xs font-bold text-slate-500 tracking-wider mb-4 uppercase">
                  Confirmed Publications ({data.confirmed.length})
                </h3>
                <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] overflow-hidden">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-900/50 text-xs text-slate-500 border-b border-slate-800">
                      <tr>
                        <th className="px-6 py-4 font-medium">Publication Title</th>
                        <th className="px-6 py-4 font-medium">Journal/Conference Location</th>
                        <th className="px-6 py-4 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {data.confirmed.length === 0 ? (
                        <tr><td colSpan="3" className="px-6 py-8 text-center text-slate-500">No confirmed publications found.</td></tr>
                      ) : (
                        data.confirmed.map((paper) => (
                          <tr key={paper.id} className="hover:bg-slate-800/20 transition">
                            <td className="px-6 py-4 text-slate-200 font-medium max-w-md truncate">{paper.title}</td>
                            <td className="px-6 py-4 text-slate-400 text-xs">{paper.journalName || 'N/A'}</td>
                            <td className="px-6 py-4 text-right">
                              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/30 border border-emerald-900 px-2 py-1 rounded">PUBLISHED</span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
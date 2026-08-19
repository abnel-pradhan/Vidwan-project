'use client';

import React, { useEffect, useState } from 'react';
import { getAdminDashboardData, updatePublicationStatus } from '@/app/actions/admin';

export default function AdminDashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function loadData() {
    setLoading(true);
    const res = await getAdminDashboardData();
    if (res.success) {
      setData(res);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleStatusChange(id, newStatus) {
    const res = await updatePublicationStatus(id, newStatus);
    if (res.success) {
      loadData();
    } else {
      alert('Action failed: ' + res.error);
    }
  }

  if (loading && !data) {
    return (
      <div className="min-h-screen bg-[#030712] text-slate-100 p-8 flex items-center justify-center">
        <p className="text-cyan-400 animate-pulse">Loading Admin Dashboard...</p>
      </div>
    );
  }

  const { metrics, pendingList, recentLogs } = data || {};

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-5">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Vidyawan Admin & IQAC Portal</h1>
            <p className="text-slate-400 text-sm mt-1">Monitor ingestion pipelines, pending approvals, and system audit trails.</p>
          </div>
          <a
            href="/faculty"
            className="rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white hover:bg-cyan-500 transition"
          >
            + Ingest New Papers
          </a>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-5">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Ingested</div>
            <div className="text-2xl font-bold text-white mt-2">{metrics?.totalPapers || 0}</div>
          </div>
          <div className="rounded-xl border border-amber-500/20 bg-amber-950/10 p-5">
            <div className="text-xs font-medium text-amber-400 uppercase tracking-wider">Awaiting Approval</div>
            <div className="text-2xl font-bold text-amber-300 mt-2">{metrics?.pendingPapersCount || 0}</div>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-5">
            <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider">NAAC Approved</div>
            <div className="text-2xl font-bold text-emerald-300 mt-2">{metrics?.approvedPapersCount || 0}</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-5">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">System Health</div>
            <div className="text-2xl font-bold text-cyan-400 mt-2">● {metrics?.systemHealth || 'Optimal'}</div>
          </div>
        </div>

        {/* Papers Awaiting Approval Section */}
        <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">Papers Awaiting IQAC / NAAC Approval</h2>
            <span className="text-xs text-slate-400">{pendingList?.length || 0} pending</span>
          </div>

          {pendingList?.length === 0 ? (
            <p className="text-sm text-slate-500 py-4">No publications currently awaiting approval.</p>
          ) : (
            <div className="divide-y divide-slate-800/80">
              {pendingList?.map((paper) => (
                <div key={paper.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-3xl">
                    <h3 className="text-sm font-semibold text-slate-200">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span>Year: {paper.publicationYear}</span>
                      {paper.journalName && <span>Journal: {paper.journalName}</span>}
                      <span>Citations: {paper.citationCount}</span>
                      {paper.doi && (
                        <a href={paper.doi} target="_blank" rel="noreferrer" className="text-cyan-500 hover:underline">
                          DOI ↗
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleStatusChange(paper.id, 'APPROVED')}
                      className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-500 transition"
                    >
                      Approve (NAAC 3.4)
                    </button>
                    <button
                      onClick={() => handleStatusChange(paper.id, 'REJECTED')}
                      className="rounded-md bg-rose-600/20 text-rose-300 border border-rose-500/30 px-3 py-1.5 text-xs font-medium hover:bg-rose-600 hover:text-white transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Real-Time System Activity Log */}
        <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-6 space-y-4">
          <h2 className="text-lg font-semibold text-white">Recent System Activity Log</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-400">
              <thead className="border-b border-slate-800 text-slate-300 uppercase font-medium">
                <tr>
                  <th className="py-3 px-4">Action</th>
                  <th className="py-3 px-4">Details</th>
                  <th className="py-3 px-4 text-right">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {recentLogs?.length === 0 ? (
                  <tr>
                    <td colSpan="3" className="py-4 px-4 text-center text-slate-500">No activity logged yet.</td>
                  </tr>
                ) : (
                  recentLogs?.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-900/50">
                      <td className="py-3 px-4 font-mono font-semibold text-cyan-400">{log.action}</td>
                      <td className="py-3 px-4 text-slate-300 truncate max-w-md">
                        {log.details?.title || JSON.stringify(log.details) || '—'}
                      </td>
                      <td className="py-3 px-4 text-right text-slate-500">
                        {new Date(log.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminDashboardData, updatePublicationStatus } from '@/app/actions/admin';
import { NAACExportButton } from '@/components/admin/NAACExportDropdown';
import { Filter, RefreshCw } from 'lucide-react';
import { logoutAdmin } from '@/app/actions/auth';

export default function AdminDashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedAcademicYear, setSelectedAcademicYear] = useState('all');

  const academicYears = [
    { label: 'All Academic Years', value: 'all' },
    { label: '2026', value: '2026' },
    { label: '2025', value: '2025' },
    { label: '2024', value: '2024' },
    { label: '2023', value: '2023' },
    { label: '2022', value: '2022' },
  ];

  async function loadData(dept = selectedDepartment, year = selectedAcademicYear) {
    setLoading(true);
    const res = await getAdminDashboardData({ departmentId: dept, academicYear: year });
    if (res.success) {
      setData(res);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData(selectedDepartment, selectedAcademicYear);
  }, [selectedDepartment, selectedAcademicYear]);

  async function handleStatusChange(id, newStatus) {
    const res = await updatePublicationStatus(id, newStatus);
    if (res.success) {
      loadData(selectedDepartment, selectedAcademicYear);
    } else {
      alert('Action failed: ' + res.error);
    }
  }

  const { metrics, pendingList, recentLogs, departments = [] } = data || {};

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8 pt-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Navigation Row with Sign Out */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
          <Link 
            href="/" 
            className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition flex items-center gap-2"
          >
            <span className="text-lg leading-none mb-[2px]">←</span> Back to Home
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/faculty" 
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition"
            >
              Faculty Directory →
            </Link>
            
            {/* Sign Out Button Form */}
            <form action={logoutAdmin}>
              <button 
                type="submit" 
                className="rounded-lg bg-red-900/20 border border-red-500/30 px-4 py-2 text-xs font-semibold text-red-400 hover:bg-red-600 hover:text-white transition shadow-[0_0_10px_rgba(220,38,38,0.2)]"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Vidyawan Admin & IQAC Portal</h1>
            <p className="text-slate-400 text-sm mt-1">Monitor ingestion pipelines, pending approvals, and system audit trails.</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <NAACExportButton 
              departmentId={selectedDepartment} 
              academicYear={selectedAcademicYear} 
            />
            
            {/* NEW: Register Faculty Button */}
            <Link
              href="/admin/add-faculty"
              className="rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition inline-flex items-center"
            >
              + Register Faculty
            </Link>

            {/* UPDATED: Points to the secure ingest route */}
            <Link
              href="/admin/ingest"
              className="rounded-lg bg-cyan-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-cyan-500 transition inline-flex items-center shadow-[0_0_15px_rgba(8,145,178,0.3)]"
            >
              + Ingest Papers
            </Link>
            <Link 
            href="/admin/naac" 
            className="rounded-lg bg-blue-600/20 border border-blue-500/30 px-4 py-2.5 text-xs font-semibold text-blue-400 hover:bg-blue-600 hover:text-white transition inline-flex items-center gap-2 shadow-[0_0_10px_rgba(59,130,246,0.1)]"
             >
              Map NAAC Criteria
             </Link>
          </div>
        </div>

        {/* Dynamic Filters Bar */}
        <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Filter className="w-4 h-4 text-cyan-400" />
              <span>Filters:</span>
            </div>

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
            >
              <option value="all">All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>

            <select
              value={selectedAcademicYear}
              onChange={(e) => setSelectedAcademicYear(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 cursor-pointer"
            >
              {academicYears.map((yr) => (
                <option key={yr.value} value={yr.value}>
                  {yr.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            {(selectedDepartment !== 'all' || selectedAcademicYear !== 'all') && (
              <button
                onClick={() => {
                  setSelectedDepartment('all');
                  setSelectedAcademicYear('all');
                }}
                className="text-xs text-rose-400 hover:text-rose-300 transition"
              >
                Reset Filters
              </button>
            )}
            <button
              onClick={() => loadData(selectedDepartment, selectedAcademicYear)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white transition"
              title="Refresh Data"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
            </button>
          </div>
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
            <p className="text-sm text-slate-500 py-4">No publications currently awaiting approval for this filter criteria.</p>
          ) : (
            <div className="divide-y divide-slate-800/80">
              {pendingList?.map((paper) => (
                <div key={paper.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1 max-w-3xl">
                    <h3 className="text-sm font-semibold text-slate-200">{paper.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span>Author: {paper.faculty?.name || 'Unknown'}</span>
                      {paper.faculty?.department?.name && <span>Dept: {paper.faculty.department.name}</span>}
                      <span>Year: {paper.publicationYear}</span>
                      {paper.journalName && <span>Journal: {paper.journalName}</span>}
                      <span>Citations: {paper.citationCount || 0}</span>
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
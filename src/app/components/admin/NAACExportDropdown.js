'use client';

import { Download } from 'lucide-react';

export function NAACExportButton({ departmentId, academicYear }) {
  
  const handleExport = () => {
    // Passes the active admin filters directly to our new API route
    const url = `/api/export-naac?departmentId=${departmentId || 'all'}&year=${academicYear || 'all'}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleExport}
      className="rounded-lg bg-emerald-600/20 border border-emerald-500/30 px-4 py-2.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-600 hover:text-white transition inline-flex items-center gap-2 shadow-[0_0_10px_rgba(16,185,129,0.1)]"
    >
      <Download className="w-4 h-4" />
      Export NAAC Criteria 3.4
    </button>
  );
}
// components/admin/NAACExportDropdown.tsx
'use client';

import React, { useState } from 'react';
import { Download, FileSpreadsheet, FileText, Loader2 } from 'lucide-react';

interface NAACExportProps {
  departmentId?: string;
  academicYear?: string;
}

export const NAACExportButton: React.FC<NAACExportProps> = ({
  departmentId = 'all',
  academicYear = 'all',
}) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = async (format: 'xlsx' | 'csv') => {
    try {
      setLoading(true);
      setIsOpen(false);

      const params = new URLSearchParams({
        departmentId,
        academicYear,
        format,
      });

      
      const response = await fetch(`/admin/export/naac-3-4?${params.toString()}`);
      if (!response.ok) throw new Error('Export request failed');

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `NAAC_Criteria_3.4_${new Date().toISOString().split('T')[0]}.${format}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      console.error('Download error:', err);
      alert('Failed to download NAAC Report. Please check the server logs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed border border-emerald-500/30"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin text-white" />
          ) : (
            <Download className="w-4 h-4 text-emerald-100" />
          )}
          <span>Export NAAC Criteria 3.4</span>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-xl z-50 p-1.5 backdrop-blur-md">
          <div className="px-3 py-1.5 text-xs font-medium text-slate-400 uppercase tracking-wider">
            Select Export Format
          </div>
          <button
            onClick={() => handleDownload('xlsx')}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors text-left"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <div>
              <div className="font-medium">Excel Spreadsheet (.xlsx)</div>
              <div className="text-xs text-slate-400">Official NAAC SSR / AQAR Layout</div>
            </div>
          </button>
          <button
            onClick={() => handleDownload('csv')}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors text-left"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <div>
              <div className="font-medium">CSV Data File (.csv)</div>
              <div className="text-xs text-slate-400">Raw Comma-Separated Values</div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
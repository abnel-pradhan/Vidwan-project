'use client';

import React from 'react';

export interface FormattedPublication {
  openAlexId: string;
  title: string;
  publicationYear: number;
  doi: string | null;
  journalName: string | null;
  publisher: string | null;
  citationCount: number;
  isOpenAccess: boolean;
  openAccessUrl: string | null;
  landingPageUrl: string | null;
}

interface Props {
  paper: FormattedPublication;
  onApprove?: (paper: FormattedPublication) => void;
}

export function PublicationCard({ paper, onApprove }: Props) {
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0a0f1a] p-5 text-slate-100 shadow-md transition-all hover:border-cyan-500/40">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug text-slate-100 hover:text-cyan-400">
          {paper.landingPageUrl ? (
            <a href={paper.landingPageUrl} target="_blank" rel="noopener noreferrer">
              {paper.title}
            </a>
          ) : (
            paper.title
          )}
        </h3>

        {paper.isOpenAccess ? (
          <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            Open Access
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-medium text-slate-400">
            Closed
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
        <span>📅 {paper.publicationYear}</span>
        {paper.journalName && <span>📖 {paper.journalName}</span>}
        <span>⭐ {paper.citationCount} Citations</span>
      </div>

      {paper.doi && (
        <div className="mt-2 text-xs text-slate-500 truncate">
          DOI:{' '}
          <a
            href={paper.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:underline"
          >
            {paper.doi}
          </a>
        </div>
      )}

      {onApprove && (
        <div className="mt-4 flex justify-end gap-2 border-t border-slate-800/80 pt-3">
          <button
            onClick={() => onApprove(paper)}
            className="rounded-lg bg-cyan-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-cyan-500"
          >
            Approve for NAAC
          </button>
        </div>
      )}
    </div>
  );
}
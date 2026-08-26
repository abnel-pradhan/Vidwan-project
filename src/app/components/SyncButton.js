'use client'

import { useState, useTransition } from 'react';
import { triggerOpenAlexSync } from '@/app/actions/syncActions';

export default function SyncButton({ facultyId, orcidId }) {
    const [isPending, startTransition] = useTransition();
    const [statusMessage, setStatusMessage] = useState('');

    const handleSync = () => {
        startTransition(async () => {
            setStatusMessage('Connecting to Sync Engine...');
            
            const result = await triggerOpenAlexSync(facultyId, orcidId);
            
            if (result.success) {
                setStatusMessage('✅ Sync started in background! Data will appear shortly.');
            } else {
                setStatusMessage(`❌ Error: ${result.message}`);
            }
        });
    };

    return (
        <div className="flex flex-col gap-3 max-w-sm mt-4">
            <button 
                onClick={handleSync}
                disabled={isPending || !orcidId}
                className={`px-4 py-2 font-medium text-white rounded-md transition-colors 
                    ${isPending || !orcidId 
                        ? 'bg-slate-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 shadow-sm'}`}
            >
                {isPending ? 'Sending to Microservice...' : 'Sync OpenAlex Publications'}
            </button>
            
            {statusMessage && (
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {statusMessage}
                </p>
            )}
            
            {!orcidId && (
                <p className="text-xs text-red-500">
                    *An ORCID is required to sync publications.
                </p>
            )}
        </div>
    );
}
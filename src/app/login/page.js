'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { loginFaculty } from '@/app/actions/authFaculty';

export default function FacultyLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const res = await loginFaculty(formData);

    if (res.success) {
      toast.success('Welcome back!');
      router.push('/dashboard');
    } else {
      toast.error(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 rounded-2xl border border-slate-800 bg-[#0a0f1a] shadow-[0_0_40px_rgba(8,145,178,0.05)]">
        
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">Vidwan<span className="text-cyan-500">Hub</span> Access</h1>
          <p className="text-sm text-slate-400">Sign in to manage your institutional profile.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Registered Email</label>
            <input 
              name="email" 
              type="email" 
              required 
              placeholder="professor@university.edu"
              className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition shadow-[0_0_15px_rgba(8,145,178,0.3)] disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-slate-500 hover:text-cyan-400 transition">
            ← Return to Public Directory
          </Link>
        </div>

      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignIn(e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    
    // Simulating authentication (you can plug in NextAuth.js or your backend API here later)
    setTimeout(() => {
      setLoading(false);
      toast.success('Successfully signed in!');
      router.push('/admin'); // Redirects to admin or dashboard upon success
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative flex items-center justify-center px-6 overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[40%] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md bg-[#0b101e]/80 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl shadow-[0_0_40px_rgba(8,145,178,0.1)]">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-black text-white tracking-tighter inline-block mb-2">
            Vidwan<span className="text-cyan-500">Hub</span>
          </Link>
          <h1 className="text-xl font-bold text-white">Welcome Back</h1>
          <p className="text-xs text-slate-400 mt-1">Sign in to access your administrative workspace</p>
        </div>

        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="admin@vidwanhub.edu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 focus:border-cyan-500 focus:outline-none transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-lg transition shadow-[0_0_20px_rgba(8,145,178,0.4)] disabled:opacity-50 text-sm"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center border-t border-slate-800/80 pt-4">
          <Link href="/" className="text-xs text-slate-500 hover:text-cyan-400 transition">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}
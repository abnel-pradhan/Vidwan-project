"use client";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  // Fake authentication function for the prototype
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    setIsLoading(true);
    
    // Simulate a 1-second delay for the API check, then go to Dashboard
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden selection:bg-cyan-500/30">
      
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      {/* Back to Home Button */}
      <a href="/" className="absolute top-8 left-8 text-slate-500 hover:text-white flex items-center gap-2 transition text-sm font-medium z-50">
        ← Back to Portal
      </a>

      {/* Glassmorphism Login Card */}
      <div className="w-full max-w-md p-6 relative z-10">
        <div className="bg-[#0b101e]/80 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl shadow-[0_0_40px_rgba(8,145,178,0.1)]">
          
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-3xl font-black text-white tracking-tighter block mb-2">
              Vidwan<span className="text-cyan-500">Hub</span>
            </span>
            <p className="text-slate-400 text-sm">Secure Institutional Access Gateway</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 ml-1">
                Institutional Email
              </label>
              <input 
                type="email" 
                required 
                className="w-full bg-[#030712] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition shadow-inner" 
                placeholder="dr.name@alpine.edu" 
              />
            </div>
            
            {/* Password Field */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 ml-1">
                Password
              </label>
              <input 
                type="password" 
                required 
                className="w-full bg-[#030712] border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition shadow-inner" 
                placeholder="••••••••" 
              />
            </div>

            {/* Utility Row (Remember Me & Forgot Password) */}
            <div className="flex justify-between items-center text-xs">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer hover:text-slate-300 transition">
                <input type="checkbox" className="rounded border-slate-800 bg-[#030712] text-cyan-500 focus:ring-cyan-500 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-cyan-500 hover:text-cyan-400 transition font-medium">
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isLoading} 
              className="w-full mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition shadow-[0_0_20px_rgba(8,145,178,0.3)] disabled:opacity-70 disabled:cursor-wait flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  {/* Small loading spinner SVG */}
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Authenticating...
                </>
              ) : (
                "Sign In to Portal →"
              )}
            </button>
          </form>

          {/* Registration Notice */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 text-center">
            <p className="text-xs text-slate-500 leading-relaxed">
              No account? Registration is invite-only. <br/>
              <span className="text-slate-400 font-medium cursor-help">Contact your IT Administrator for access.</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
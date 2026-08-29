'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { getDepartments, createFacultyProfile } from '@/app/actions/faculty';

export default function AddFacultyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [departments, setDepartments] = useState([]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    departmentId: '',
    orcid: ''
  });

  useEffect(() => {
    async function loadDepts() {
      const depts = await getDepartments();
      setDepartments(depts);
      if (depts.length > 0) {
        setFormData(prev => ({ ...prev, departmentId: depts[0].id }));
      }
    }
    loadDepts();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await createFacultyProfile(formData);
    
    if (res.success) {
      toast.success('Faculty profile created successfully!');
      router.push('/admin');
    } else {
      toast.error(res.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 p-8 pt-12">
      <div className="max-w-2xl mx-auto">
        
        <Link href="/admin" className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition mb-6 inline-block">
          ← Back to Dashboard
        </Link>

        <div className="rounded-2xl border border-slate-800 bg-[#0a0f1a] p-8 shadow-[0_0_40px_rgba(8,145,178,0.05)]">
          <h1 className="text-2xl font-bold text-white mb-2">Register New Faculty</h1>
          <p className="text-sm text-slate-400 mb-8">Create an official profile so ingested OpenAlex papers have an author to attach to.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name *</label>
              <input required type="text" placeholder="Dr. Jane Doe"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address *</label>
              <input required type="email" placeholder="jane.doe@university.edu"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Department *</label>
              <select required
                value={formData.departmentId} onChange={e => setFormData({...formData, departmentId: e.target.value})}
                className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none cursor-pointer">
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">ORCID (Optional, helps ingestion)</label>
              <input type="text" placeholder="0000-0002-1825-0097"
                value={formData.orcid} onChange={e => setFormData({...formData, orcid: e.target.value})}
                className="w-full rounded-lg border border-slate-800 bg-[#070a13] px-4 py-2.5 text-sm text-white focus:border-cyan-500 focus:outline-none" />
            </div>

            <button type="submit" disabled={loading}
              className="w-full mt-4 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 rounded-lg transition shadow-[0_0_15px_rgba(8,145,178,0.3)] disabled:opacity-50">
              {loading ? 'Saving Profile...' : 'Create Faculty Profile'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
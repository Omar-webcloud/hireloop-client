// /hireloop-client/src/app/dashboard/recruiter/company/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { Building2, Edit, Plus } from 'lucide-react';
import { recruiterAPI } from '@/lib/api-client';

export default function RecruiterCompanyPage() {
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    location: '',
    employees: '1-10',
    description: '',
    logo: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCompany();
  }, []);

  async function fetchCompany() {
    try {
      const data = await recruiterAPI.getMyCompany();
      setCompany(data);
      setFormData(data);
    } catch (err) {
      // Company not registered yet
      setCompany(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaving(true);
      setError('');

      if (company) {
        // Update existing
        await recruiterAPI.updateCompany(formData);
      } else {
        // Register new
        await recruiterAPI.registerCompany(formData);
      }

      alert('Company profile saved successfully!');
      setShowForm(false);
      fetchCompany();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          <Building2 className="h-8 w-8 text-violet-400" />
          Company Profile
        </h1>
        <p className="text-gray-400">Manage your company information</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading company profile...</p>
        </div>
      ) : !company || showForm ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
            <h2 className="text-lg font-medium text-white mb-6 border-b border-white/5 pb-4">
              {company ? 'Edit Company' : 'Register Your Company'}
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="TechCorp Inc."
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none"
                >
                  <option value="">Select Industry</option>
                  <option value="Fintech">Fintech</option>
                  <option value="AI">AI</option>
                  <option value="Developer Tools">Developer Tools</option>
                  <option value="E-Commerce">E-Commerce</option>
                  <option value="Healthtech">Healthtech</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Employee Count</label>
                <select
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none"
                >
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="200+">200+</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="San Francisco, USA"
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us about your company..."
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50"
            >
              {saving ? 'Saving...' : (company ? 'Update Company' : 'Register Company')}
            </button>
            {company && (
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-8 py-3 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">{company.name}</h2>
              <p className="text-gray-400">{company.description}</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition"
            >
              <Edit className="h-4 w-4" />
              Edit
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-1">Industry</p>
              <p className="text-white font-semibold">{company.industry}</p>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-white font-semibold">{company.location}</p>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-1">Employees</p>
              <p className="text-white font-semibold">{company.employees}</p>
            </div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-gray-400 mb-1">Status</p>
              <p className={`font-semibold ${
                company.status === 'approved' ? 'text-emerald-400' :
                company.status === 'rejected' ? 'text-red-400' :
                'text-amber-400'
              }`}>
                {company.status?.charAt(0).toUpperCase() + company.status?.slice(1) || 'Pending'}
              </p>
            </div>
          </div>

          {company.status !== 'approved' && (
            <div className="mt-6 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm">
              ⚠️ Your company is pending approval. Once approved, you'll be able to post jobs and your company will appear in our listings.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
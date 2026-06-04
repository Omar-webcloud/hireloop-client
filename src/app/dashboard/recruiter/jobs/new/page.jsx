// /hireloop-client/src/app/dashboard/recruiter/jobs/new/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { recruiterAPI } from '@/lib/api-client';

export default function PostJobPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: 'engineering',
    type: 'full-time',
    location: '',
    isRemote: false,
    minSalary: '',
    maxSalary: '',
    deadline: '',
    description: '',
    responsibilities: '',
    requirements: ''
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      await recruiterAPI.postJob({
        title: formData.title,
        category: formData.category,
        type: formData.type,
        location: formData.isRemote ? 'Remote' : formData.location,
        salaryRange: `$${formData.minSalary}-$${formData.maxSalary}`,
        deadline: formData.deadline,
        description: formData.description,
        responsibilities: formData.responsibilities,
        requirements: formData.requirements
      });

      setSuccess('Job posted successfully!');
      setTimeout(() => {
        window.location.href = '/dashboard/recruiter/jobs';
      }, 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <Link href="/dashboard/recruiter/jobs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Post a New Job</h1>
        <p className="text-gray-400">Fill out the details below to create a new job listing.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Job Info */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h2 className="text-lg font-medium text-white mb-6 border-b border-white/5 pb-4">Job Information</h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Senior Frontend Engineer"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Category *</label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none"
              >
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="product">Product</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Job Type *</label>
              <select
                required
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none"
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="hybrid">Hybrid</option>
                <option value="remote">Remote</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
              <div className="flex gap-4 items-center">
                <input
                  type="text"
                  placeholder="City, Country"
                  disabled={formData.isRemote}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm disabled:opacity-50"
                />
                <label className="flex items-center gap-2 whitespace-nowrap shrink-0">
                  <input
                    type="checkbox"
                    checked={formData.isRemote}
                    onChange={(e) => setFormData({ ...formData, isRemote: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-violet-600"
                  />
                  <span className="text-sm text-gray-300">Fully Remote</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Min Salary ($) *</label>
              <input
                type="number"
                required
                placeholder="90000"
                value={formData.minSalary}
                onChange={(e) => setFormData({ ...formData, minSalary: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Max Salary ($) *</label>
              <input
                type="number"
                required
                placeholder="130000"
                value={formData.maxSalary}
                onChange={(e) => setFormData({ ...formData, maxSalary: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>
            
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-400 mb-2">Application Deadline *</label>
              <input
                type="date"
                required
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          </div>
        </div>

        {/* Job Description */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h2 className="text-lg font-medium text-white mb-6 border-b border-white/5 pb-4">Job Description</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">About the Role *</label>
              <textarea
                rows={4}
                required
                placeholder="Describe the role..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Responsibilities *</label>
              <textarea
                rows={4}
                required
                placeholder="List key responsibilities..."
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Requirements *</label>
              <textarea
                rows={4}
                required
                placeholder="List requirements..."
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4 pt-4">
          <Link
            href="/dashboard/recruiter/jobs"
            className="px-6 py-3 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50"
          >
            {saving ? 'Posting...' : 'Post Job'}
          </button>
        </div>
      </form>
    </div>
  );
}
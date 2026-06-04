// /hireloop-client/src/app/dashboard/seeker/settings/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { User, Save } from 'lucide-react';
import { seekerAPI } from '@/lib/api-client';

export default function SeekerSettingsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    contact: '',
    resumeUrl: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const profile = await seekerAPI.getProfile();
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        skills: profile.profile?.skills?.join(', ') || '',
        contact: profile.profile?.contact || '',
        resumeUrl: profile.profile?.resumeUrl || ''
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSaving(true);
      setError('');
      setSuccess('');

      await seekerAPI.updateProfile({
        skills: formData.skills,
        contact: formData.contact,
        resumeUrl: formData.resumeUrl
      });

      setSuccess('Profile updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          <User className="h-8 w-8 text-violet-400" />
          Profile Settings
        </h1>
        <p className="text-gray-400">Update your profile information</p>
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

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading profile...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
            {/* Name & Email (Read-only) */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  disabled
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-gray-500 ring-1 ring-inset ring-white/10 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  disabled
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-gray-500 ring-1 ring-inset ring-white/10 sm:text-sm"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Skills</label>
              <input
                type="text"
                placeholder="React, Node.js, TypeScript (comma-separated)"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>

            {/* Contact */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Contact Information</label>
              <input
                type="text"
                placeholder="Your contact details"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
            </div>

            {/* Resume URL */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-400 mb-2">Resume URL</label>
              <input
                type="url"
                placeholder="https://example.com/resume.pdf"
                value={formData.resumeUrl}
                onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                className="block w-full rounded-xl border-0 bg-white/[0.02] py-3 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
              />
              <p className="text-xs text-gray-500 mt-2">Upload your resume to a cloud service and paste the link here</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
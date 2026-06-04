// /hireloop-client/src/app/dashboard/seeker/saved/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { Bookmark, Trash2, Send } from 'lucide-react';
import { seekerAPI } from '@/lib/api-client';

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [applyingTo, setApplyingTo] = useState(null);

  useEffect(() => {
    fetchSavedJobs();
  }, []);

  async function fetchSavedJobs() {
    try {
      setLoading(true);
      const jobs = await seekerAPI.getSavedJobs();
      setSavedJobs(jobs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(jobId) {
    try {
      await seekerAPI.unsaveJob(jobId);
      setSavedJobs(savedJobs.filter(j => j.id !== jobId));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleApply(jobId) {
    try {
      setApplyingTo(jobId);
      await seekerAPI.applyJob(jobId);
      alert('Application submitted successfully!');
      setSavedJobs(savedJobs.filter(j => j.id !== jobId));
    } catch (err) {
      setError(err.message);
    } finally {
      setApplyingTo(null);
    }
  }

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          <Bookmark className="h-8 w-8 text-violet-400" />
          Saved Jobs
        </h1>
        <p className="text-gray-400">Jobs you've bookmarked for later</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading your saved jobs...</p>
        </div>
      ) : savedJobs.length === 0 ? (
        <div className="text-center py-12 rounded-lg border border-white/10 bg-white/5">
          <Bookmark className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No saved jobs yet</p>
          <a href="/jobs" className="text-violet-400 hover:text-violet-300 mt-2 inline-block">
            Browse jobs →
          </a>
        </div>
      ) : (
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
                <tr>
                  <th className="px-6 py-4 font-medium">Job Title</th>
                  <th className="px-6 py-4 font-medium">Company</th>
                  <th className="px-6 py-4 font-medium">Location</th>
                  <th className="px-6 py-4 font-medium">Salary</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {savedJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{job.title}</td>
                    <td className="px-6 py-4">{job.company}</td>
                    <td className="px-6 py-4">{job.location}</td>
                    <td className="px-6 py-4">{job.salaryRange}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleApply(job.id)}
                          disabled={applyingTo === job.id}
                          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition disabled:opacity-50"
                        >
                          <Send className="h-3 w-3" />
                          Apply
                        </button>
                        <button
                          onClick={() => handleRemove(job.id)}
                          className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-red-600/20 hover:bg-red-600/40 text-red-400 rounded-lg transition"
                        >
                          <Trash2 className="h-3 w-3" />
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
// /hireloop-client/src/app/(public)/jobs/[jobId]/page.jsx
'use client';

import { useState } from 'react';
import { seekerAPI } from '@/lib/api-client';
import { X } from 'lucide-react';

export default function JobDetailsPage({ params }) {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applying, setApplying] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [error, setError] = useState('');

  async function handleApply() {
    try {
      setApplying(true);
      setError('');
      
      await seekerAPI.applyJob(params.jobId, coverLetter);
      alert('Application submitted successfully!');
      setShowApplyModal(false);
      setCoverLetter('');
    } catch (err) {
      setError(err.message);
    } finally {
      setApplying(false);
    }
  }

  return (
    <>
      {/* ... rest of job details ... */}
      
      <button
        onClick={() => setShowApplyModal(true)}
        className="w-full rounded-xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 transition duration-300 mb-4"
      >
        Apply for this job
      </button>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0d0d0f] border border-white/[0.06] rounded-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Apply for this Job</h2>
              <button
                onClick={() => setShowApplyModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Cover Letter</label>
                <textarea
                  rows={5}
                  placeholder="Tell them why you're a great fit..."
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="block w-full rounded-xl border-0 bg-white/[0.02] py-2 px-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 text-sm"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowApplyModal(false)}
                  className="flex-1 px-4 py-2 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
                  disabled={applying}
                  className="flex-1 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-lg transition disabled:opacity-50"
                >
                  {applying ? 'Applying...' : 'Submit Application'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
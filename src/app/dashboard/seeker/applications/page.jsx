// /hireloop-client/src/app/dashboard/seeker/applications/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { FileText, Send } from 'lucide-react';
import { seekerAPI } from '@/lib/api-client';
import Link from 'next/link';

export default function SeekerApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  async function fetchApplications() {
    try {
      setLoading(true);
      const apps = await seekerAPI.getApplications();
      setApplications(apps);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const getStatusBadge = (status) => {
    const statusMap = {
      'applied': { bg: 'bg-blue-400/10', text: 'text-blue-400', label: 'Applied' },
      'reviewing': { bg: 'bg-violet-400/10', text: 'text-violet-400', label: 'Under Review' },
      'accepted': { bg: 'bg-emerald-400/10', text: 'text-emerald-400', label: 'Accepted' },
      'rejected': { bg: 'bg-red-400/10', text: 'text-red-400', label: 'Rejected' }
    };
    const s = statusMap[status] || statusMap['applied'];
    return <span className={`inline-flex items-center rounded-full ${s.bg} px-2.5 py-1 text-xs font-medium ${s.text}`}>
      {s.label}
    </span>;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    if (days < 7) return `${days} days ago`;
    if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
    return `${Math.floor(days / 30)} months ago`;
  };

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2 flex items-center gap-2">
          <Send className="h-8 w-8 text-violet-400" />
          My Applications
        </h1>
        <p className="text-gray-400">Track the status of your job applications</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading your applications...</p>
        </div>
      ) : applications.length === 0 ? (
        <div className="text-center py-12 rounded-lg border border-white/10 bg-white/5">
          <FileText className="h-12 w-12 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No applications yet</p>
          <a href="/jobs" className="text-violet-400 hover:text-violet-300 mt-2 inline-block">
            Find and apply for jobs →
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
                  <th className="px-6 py-4 font-medium">Applied</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06]">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{app.jobTitle}</td>
                    <td className="px-6 py-4">{app.companyName}</td>
                    <td className="px-6 py-4 text-xs text-gray-500">{formatDate(app.appliedAt)}</td>
                    <td className="px-6 py-4">{getStatusBadge(app.status)}</td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        href={`/jobs/${app.jobId}`}
                        className="text-violet-400 hover:text-violet-300 text-xs font-medium transition"
                      >
                        View Job →
                      </Link>
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
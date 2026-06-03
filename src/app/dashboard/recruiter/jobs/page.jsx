import Link from "next/link";
import { Edit2, Eye, Trash2, Plus, Users } from "lucide-react";

export default function RecruiterJobsPage() {
  const jobs = [
    { id: 1, title: "Frontend Engineer", status: "Active", applicants: 45, date: "May 10, 2026" },
    { id: 2, title: "Product Manager", status: "Active", applicants: 28, date: "May 5, 2026" },
    { id: 3, title: "UX Designer", status: "Active", applicants: 34, date: "Apr 28, 2026" },
    { id: 4, title: "Data Analyst", status: "Closed", applicants: 15, date: "Apr 15, 2026" },
  ];

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Manage Jobs</h1>
          <p className="text-gray-400">View and manage your company's job postings.</p>
        </div>
        <Link 
          href="/dashboard/recruiter/jobs/new"
          className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-5 py-2.5 rounded-xl font-medium transition text-sm"
        >
          <Plus className="h-4 w-4" />
          Post New Job
        </Link>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Job Title</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium">Applicants</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Posted</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{job.title}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      job.status === "Active" ? "bg-emerald-400/10 text-emerald-400" : "bg-gray-500/10 text-gray-400"
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/dashboard/recruiter/jobs/${job.id}/applicants`} className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition">
                      <Users className="h-4 w-4" />
                      {job.applicants} Applicants
                    </Link>
                  </td>
                  <td className="px-6 py-4">{job.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5" title="Edit">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-fuchsia-400 transition-colors rounded-lg hover:bg-white/5" title="Toggle Status">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

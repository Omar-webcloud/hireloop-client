import Link from "next/link";
import { Search, Eye, Trash2 } from "lucide-react";
import { getAllJobsAdmin } from "@/lib/data";
import { deleteJobAdmin } from "@/app/actions/admin";

export default async function AdminJobsPage() {
  const jobs = await getAllJobsAdmin();

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Manage Jobs</h1>
        <p className="text-gray-400">Monitor and moderate all job listings across the platform.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by title or company..."
            className="block w-full rounded-xl border-0 bg-white/[0.04] py-2.5 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Job Title</th>
                <th scope="col" className="px-6 py-4 font-medium">Company</th>
                <th scope="col" className="px-6 py-4 font-medium">Category</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Posted</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{job.title}</td>
                  <td className="px-6 py-4">{job.company}</td>
                  <td className="px-6 py-4">{job.category}</td>
                  <td className="px-6 py-4">{new Date(job.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      job.status !== "Closed" ? "bg-emerald-400/10 text-emerald-400" : "bg-gray-500/10 text-gray-400"
                    }`}>
                      {job.status || "Active"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/jobs/${job.id}`} className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5" title="View Job">
                        <Eye className="h-4 w-4" />
                      </Link>
                      <form action={deleteJobAdmin.bind(null, job.id)}>
                        <button className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5" title="Delete Job">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {jobs.length === 0 && (
                <tr>
                   <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                     No jobs found.
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

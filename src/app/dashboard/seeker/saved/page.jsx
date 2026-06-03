import Link from "next/link";
import { getJobs } from "@/lib/data";
import { Trash2, ExternalLink } from "lucide-react";

export default async function SeekerSavedJobsPage() {
  // Mock saved jobs (just take first two)
  const allJobs = await getJobs();
  const savedJobs = allJobs.slice(0, 2).map(job => ({
    ...job,
    savedAt: new Date().toISOString()
  }));

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Saved Jobs</h1>
        <p className="text-gray-400">Jobs you've bookmarked for later.</p>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Job Title</th>
                <th scope="col" className="px-6 py-4 font-medium">Company</th>
                <th scope="col" className="px-6 py-4 font-medium">Location</th>
                <th scope="col" className="px-6 py-4 font-medium">Salary</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Saved</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {savedJobs.map((job) => (
                <tr key={job.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    <Link href={`/jobs/${job.id}`} className="hover:text-violet-400 transition-colors">
                      {job.title}
                    </Link>
                  </td>
                  <td className="px-6 py-4">{job.company}</td>
                  <td className="px-6 py-4">{job.location}</td>
                  <td className="px-6 py-4 text-fuchsia-400">{job.salaryRange}</td>
                  <td className="px-6 py-4">2 days ago</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5" title="Remove">
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-1.5 text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors">
                        Apply
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {savedJobs.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    No saved jobs found.
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

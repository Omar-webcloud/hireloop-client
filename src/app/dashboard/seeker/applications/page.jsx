import Link from "next/link";
import { getJobs } from "@/lib/data";

export default async function SeekerApplicationsPage() {
  const allJobs = await getJobs();
  
  // Mock applications
  const applications = [
    { id: 1, job: allJobs[0], status: "Under Review", date: "3 days ago" },
    { id: 2, job: allJobs[1], status: "Applied", date: "1 week ago" },
    { id: 3, job: allJobs[2], status: "Shortlisted", date: "2 weeks ago" },
    { id: 4, job: allJobs[3], status: "Rejected", date: "1 month ago" },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case "Applied": return <span className="inline-flex items-center rounded-full bg-blue-400/10 px-2.5 py-1 text-xs font-medium text-blue-400">Applied</span>;
      case "Under Review": return <span className="inline-flex items-center rounded-full bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-400">Under Review</span>;
      case "Shortlisted": return <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-400">Shortlisted</span>;
      case "Rejected": return <span className="inline-flex items-center rounded-full bg-red-400/10 px-2.5 py-1 text-xs font-medium text-red-400">Rejected</span>;
      case "Offered": return <span className="inline-flex items-center rounded-full bg-fuchsia-400/10 px-2.5 py-1 text-xs font-medium text-fuchsia-400">Offered</span>;
      default: return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">My Applications</h1>
        <p className="text-gray-400">Track the status of your submitted applications.</p>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Job Title</th>
                <th scope="col" className="px-6 py-4 font-medium">Company</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Applied</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">
                    {app.job.title}
                  </td>
                  <td className="px-6 py-4">{app.job.company}</td>
                  <td className="px-6 py-4">{app.date}</td>
                  <td className="px-6 py-4">
                    {getStatusBadge(app.status)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/jobs/${app.job.id}`} className="text-violet-400 hover:text-violet-300 font-medium text-xs">
                      View Job
                    </Link>
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

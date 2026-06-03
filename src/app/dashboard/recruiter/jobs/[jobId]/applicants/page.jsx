import Link from "next/link";
import { ArrowLeft, Download, Mail } from "lucide-react";

export default async function ViewApplicantsPage({ params }) {
  const { jobId } = await params;
  
  const applicants = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", date: "May 10, 2026", status: "Applied" },
    { id: 2, name: "David Smith", email: "david@example.com", date: "May 9, 2026", status: "Under Review" },
    { id: 3, name: "Maria Garcia", email: "maria@example.com", date: "May 8, 2026", status: "Shortlisted" },
    { id: 4, name: "James Wilson", email: "james@example.com", date: "May 7, 2026", status: "Rejected" },
  ];

  return (
    <div className="max-w-5xl mx-auto text-white pb-12">
      <Link href="/dashboard/recruiter/jobs" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Jobs
      </Link>
      
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Applicants</h1>
        <p className="text-gray-400">Manage candidates for Frontend Engineer (Job ID: {jobId})</p>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Applicant Name</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Applied</th>
                <th scope="col" className="px-6 py-4 font-medium">Resume</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {applicants.map((app) => (
                <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white mb-1">{app.name}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1"><Mail className="h-3 w-3" /> {app.email}</div>
                  </td>
                  <td className="px-6 py-4">{app.date}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium">
                      <Download className="h-3.5 w-3.5" /> Resume.pdf
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      defaultValue={app.status}
                      className="block w-full max-w-[140px] rounded-lg border-0 bg-white/[0.04] py-1.5 px-3 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-xs appearance-none"
                    >
                      <option value="Applied">Applied</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Offered">Offered</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-4 py-1.5 text-xs font-medium bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-white rounded-lg transition-colors">
                      View Profile
                    </button>
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

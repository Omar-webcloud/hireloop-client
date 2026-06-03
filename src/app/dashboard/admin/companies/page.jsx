import { Check, X } from "lucide-react";
import { getAllCompaniesAdmin } from "@/lib/data";
import { updateCompanyStatus } from "@/app/actions/admin";

export default async function AdminCompaniesPage() {
  const companies = await getAllCompaniesAdmin();

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Manage Companies</h1>
        <p className="text-gray-400">Review and approve company registrations.</p>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">Company</th>
                <th scope="col" className="px-6 py-4 font-medium">Industry</th>
                <th scope="col" className="px-6 py-4 font-medium">Date Submitted</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {companies.map((company) => (
                <tr key={company.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white mb-0.5">{company.name}</div>
                    <div className="text-xs text-gray-500">{company.email || 'No email provided'}</div>
                  </td>
                  <td className="px-6 py-4">{company.industry}</td>
                  <td className="px-6 py-4">{new Date(company.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                      company.status === "Approved" ? "bg-emerald-400/10 text-emerald-400" :
                      company.status === "Pending" ? "bg-amber-400/10 text-amber-400" : "bg-red-400/10 text-red-400"
                    }`}>
                      {company.status || 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {company.status !== "Approved" && (
                        <form action={updateCompanyStatus.bind(null, company.id, "Approved")}>
                          <button className="px-3 py-1.5 text-xs font-medium bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-400 border border-emerald-600/20 rounded-lg transition-colors flex items-center gap-1">
                            <Check className="h-3.5 w-3.5" /> Approve
                          </button>
                        </form>
                      )}
                      {company.status !== "Rejected" && (
                        <form action={updateCompanyStatus.bind(null, company.id, "Rejected")}>
                          <button className="px-3 py-1.5 text-xs font-medium bg-red-600/20 hover:bg-red-600/40 text-red-400 border border-red-600/20 rounded-lg transition-colors flex items-center gap-1">
                            <X className="h-3.5 w-3.5" /> Reject
                          </button>
                        </form>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {companies.length === 0 && (
                <tr>
                   <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                     No companies found.
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

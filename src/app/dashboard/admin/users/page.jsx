import { Search, UserCog, UserX, UserCheck } from "lucide-react";
import { getAllUsers } from "@/lib/data";
import { changeUserRole, toggleUserStatus } from "@/app/actions/admin";

export const dynamic = "force-dynamic";

export default async function AdminUsersPage() {
  const users = await getAllUsers();

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Manage Users</h1>
        <p className="text-gray-400">View and manage all registered platform users.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search by email..."
            className="block w-full rounded-xl border-0 bg-white/[0.04] py-2.5 pl-11 pr-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm"
          />
        </div>
        <select className="block w-full sm:w-48 rounded-xl border-0 bg-white/[0.04] py-2.5 px-4 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm appearance-none">
          <option value="All">All Roles</option>
          <option value="seeker">Seeker</option>
          <option value="recruiter">Recruiter</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">User</th>
                <th scope="col" className="px-6 py-4 font-medium">Role</th>
                <th scope="col" className="px-6 py-4 font-medium">Join Date</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white mb-0.5">{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                      user.role === "recruiter" ? "bg-fuchsia-400/10 text-fuchsia-400" :
                      user.role === "admin" ? "bg-violet-400/10 text-violet-400" : "bg-blue-400/10 text-blue-400"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      !user.suspended ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                    }`}>
                      {!user.suspended ? "Active" : "Suspended"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <form action={changeUserRole.bind(null, user.id, user.role === 'seeker' ? 'recruiter' : 'seeker')}>
                        <button className="p-2 text-gray-500 hover:text-white transition-colors rounded-lg hover:bg-white/5" title={user.role === 'seeker' ? "Make Recruiter" : "Make Seeker"}>
                          <UserCog className="h-4 w-4" />
                        </button>
                      </form>
                      
                      <form action={toggleUserStatus.bind(null, user.id, !user.suspended)}>
                        {!user.suspended ? (
                          <button className="p-2 text-gray-500 hover:text-red-400 transition-colors rounded-lg hover:bg-white/5" title="Suspend User">
                            <UserX className="h-4 w-4" />
                          </button>
                        ) : (
                          <button className="p-2 text-gray-500 hover:text-emerald-400 transition-colors rounded-lg hover:bg-white/5" title="Activate User">
                            <UserCheck className="h-4 w-4" />
                          </button>
                        )}
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                 <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No users found.
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

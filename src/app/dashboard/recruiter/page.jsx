import { BriefcaseBusiness, Users, Zap, CheckCircle2, Building2, Bell } from "lucide-react";
import RecruiterChart from "./RecruiterChart";
import Link from "next/link";

export default function RecruiterDashboardPage() {
  const stats = [
    { label: "Total Job Posts", value: "4", icon: BriefcaseBusiness, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Total Applicants", value: "122", icon: Users, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
    { label: "Active Jobs", value: "3", icon: Zap, color: "text-violet-400", bg: "bg-violet-400/10" },
    { label: "Jobs Closed", value: "1", icon: CheckCircle2, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  const recentApps = [
    { id: 1, name: "Alice Johnson", role: "Frontend Eng", time: "2 hours ago", status: "New" },
    { id: 2, name: "David Smith", role: "UX Designer", time: "5 hours ago", status: "New" },
    { id: 3, name: "Maria Garcia", role: "Product Mgr", time: "1 day ago", status: "Under Review" },
  ];

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Recruiter Dashboard</h1>
        <p className="text-gray-400">Manage your company profile and job postings.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6 flex items-center gap-4">
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${stat.bg}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-10">
        {/* Company Card */}
        <div className="lg:col-span-1 rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-20 w-20 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
              <Building2 className="h-10 w-10 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">TechNova Inc.</h2>
            <p className="text-sm text-gray-400 mb-6">Fintech • San Francisco, CA</p>
            
            <div className="w-full space-y-3 mb-8 text-left">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Status</span>
                <span className="text-emerald-400 font-medium bg-emerald-400/10 px-2 py-0.5 rounded-full">Approved</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Employees</span>
                <span className="text-white">50-200</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Active Jobs</span>
                <span className="text-white">3</span>
              </div>
            </div>

            <Link href="/dashboard/recruiter/company" className="w-full block py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-semibold transition text-center">
              Edit Company Profile
            </Link>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8 flex flex-col">
          <h3 className="text-lg font-medium mb-6">Applicants per Job (Last 30 days)</h3>
          <div className="flex-1 flex items-center justify-center min-h-[250px]">
            <RecruiterChart />
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
        <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-400" />
          Recent Applicants
        </h3>
        <div className="space-y-4">
          {recentApps.map((app) => (
            <div key={app.id} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-violet-600/20 text-violet-400 flex items-center justify-center font-semibold text-sm">
                  {app.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">{app.name}</h4>
                  <p className="text-xs text-gray-400">Applied for: <span className="text-violet-400">{app.role}</span></p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-xs text-gray-500">{app.time}</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400">{app.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

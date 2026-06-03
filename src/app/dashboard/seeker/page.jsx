import { Bookmark, Send, Calendar, Trophy, Bell, FileText, CheckCircle2 } from "lucide-react";
import SeekerChart from "./SeekerChart";
import Link from "next/link";

export default function SeekerDashboardPage() {
  const stats = [
    { label: "Saved Jobs", value: "24", icon: Bookmark, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Applications", value: "23", icon: Send, color: "text-violet-400", bg: "bg-violet-400/10" },
    { label: "Interviews", value: "3", icon: Calendar, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
    { label: "Offers", value: "1", icon: Trophy, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  const recentActivity = [
    { id: 1, title: "Application Viewed", desc: "TechNova Inc. viewed your application for Frontend Developer.", time: "2 hours ago", icon: FileText, color: "text-blue-400", bg: "bg-blue-400/10" },
    { id: 2, title: "Shortlisted", desc: "You were shortlisted for Senior React Engineer at BuildSoft.", time: "1 day ago", icon: Trophy, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { id: 3, title: "New Job Alert", desc: "5 new remote jobs match your preferences.", time: "2 days ago", icon: Bell, color: "text-violet-400", bg: "bg-violet-400/10" },
  ];

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Welcome back, Omar!</h1>
        <p className="text-gray-400">Here's an overview of your job search progress.</p>
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
        {/* Profile Card */}
        <div className="lg:col-span-1 rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <div className="flex flex-col items-center text-center">
            <div className="h-24 w-24 rounded-full bg-violet-600/20 flex items-center justify-center mb-4 border border-violet-500/20">
              <span className="text-3xl font-semibold text-violet-400">OW</span>
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">Omar Weber</h2>
            <p className="text-sm text-gray-400 mb-6">Senior Frontend Engineer</p>
            
            <div className="w-full space-y-3 mb-8 text-left">
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Location</span>
                <span className="text-white">New York, USA</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">6 Years</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                <span className="text-gray-400">Plan</span>
                <span className="text-fuchsia-400 font-medium bg-fuchsia-400/10 px-2 py-0.5 rounded-full">Pro Member</span>
              </div>
            </div>

            <Link href="/dashboard/seeker/settings" className="w-full block py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-semibold transition">
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8 flex flex-col">
          <h3 className="text-lg font-medium mb-6">Application Status Overview</h3>
          <div className="flex-1 flex items-center justify-center min-h-[250px]">
            <SeekerChart />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
        <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-400" />
          Recent Activity
        </h3>
        <div className="space-y-6">
          {recentActivity.map((act) => {
            const Icon = act.icon;
            return (
              <div key={act.id} className="flex gap-4">
                <div className={`mt-1 shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${act.bg}`}>
                  <Icon className={`h-5 w-5 ${act.color}`} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">{act.title}</h4>
                  <p className="text-sm text-gray-400 mb-1">{act.desc}</p>
                  <span className="text-xs text-gray-500 font-medium">{act.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

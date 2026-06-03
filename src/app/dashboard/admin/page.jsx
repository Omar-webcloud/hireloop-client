import { Users, Building2, BriefcaseBusiness, DollarSign, Activity, CreditCard } from "lucide-react";
import { JobsBarChart, UsersLineChart } from "./AdminChart";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Total Users", value: "24,500", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Total Recruiters", value: "3,200", icon: Activity, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
    { label: "Total Companies", value: "1,850", icon: Building2, color: "text-violet-400", bg: "bg-violet-400/10" },
    { label: "Jobs Posted", value: "12,400", icon: BriefcaseBusiness, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Platform Revenue", value: "$450K", icon: DollarSign, color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  const recentPayments = [
    { id: 1, email: "user@example.com", plan: "Pro", amount: "$29.00", time: "10 mins ago" },
    { id: 2, email: "hr@technova.com", plan: "Enterprise", amount: "$99.00", time: "1 hour ago" },
    { id: 3, email: "john.doe@gmail.com", plan: "Pro", amount: "$29.00", time: "3 hours ago" },
  ];

  return (
    <div className="max-w-7xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Platform overview and management.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        {/* Jobs Chart */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h3 className="text-lg font-medium mb-6">Jobs by Category</h3>
          <JobsBarChart />
        </div>

        {/* Users Chart */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
          <h3 className="text-lg font-medium mb-6">User Registrations (30 Days)</h3>
          <UsersLineChart />
        </div>
      </div>

      {/* Recent Payments */}
      <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
        <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-gray-400" />
          Recent Subscriptions
        </h3>
        <div className="space-y-4">
          {recentPayments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium text-white">{payment.email}</h4>
                <p className="text-xs text-gray-400">Subscribed to <span className="text-violet-400 font-medium">{payment.plan}</span> plan</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-bold text-white">{payment.amount}</span>
                <span className="text-xs text-gray-500">{payment.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

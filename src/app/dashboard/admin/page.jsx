import { Users, Building2, BriefcaseBusiness, DollarSign, Activity, CreditCard } from "lucide-react";
import { JobsBarChart, UsersLineChart } from "./AdminChart";
import { getAdminAnalytics, getAdminPayments } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const analytics = await getAdminAnalytics();
  const payments = await getAdminPayments();

  const stats = [
    { label: "Total Users", value: analytics.totalUsers?.toString() || "0", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10" },
    { label: "Total Seekers", value: analytics.totalSeekers?.toString() || "0", icon: Users, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { label: "Total Recruiters", value: analytics.totalRecruiters?.toString() || "0", icon: Activity, color: "text-fuchsia-400", bg: "bg-fuchsia-400/10" },
    { label: "Total Companies", value: analytics.totalCompanies?.toString() || "0", icon: Building2, color: "text-violet-400", bg: "bg-violet-400/10" },
    { label: "Jobs Posted", value: analytics.totalJobs?.toString() || "0", icon: BriefcaseBusiness, color: "text-emerald-400", bg: "bg-emerald-400/10" },
    { label: "Platform Revenue", value: analytics.totalRevenue || "$0", icon: DollarSign, color: "text-amber-400", bg: "bg-amber-400/10" },
  ];

  return (
    <div className="max-w-7xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Platform overview and management.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-10">
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
          {payments.map((payment) => (
            <div key={payment.id} className="flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] transition">
              <div className="flex flex-col gap-1">
                <h4 className="text-sm font-medium text-white">{payment.email}</h4>
                <p className="text-xs text-gray-400">Subscribed to <span className="text-violet-400 font-medium">{payment.plan}</span> plan</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-bold text-white">{payment.amount}</span>
                <span className="text-xs text-gray-500">{new Date(payment.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
          {payments.length === 0 && (
            <p className="text-gray-500 text-sm py-4">No recent subscription payments recorded.</p>
          )}
        </div>
      </div>
    </div>
  );
}

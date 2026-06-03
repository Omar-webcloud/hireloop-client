import { Download } from "lucide-react";

export default function AdminPaymentsPage() {
  const transactions = [
    { id: "tx_12345", email: "user@example.com", plan: "Pro", amount: "$29.00", date: "May 10, 2026", time: "10:30 AM", status: "Successful" },
    { id: "tx_12346", email: "hr@technova.com", plan: "Enterprise", amount: "$99.00", date: "May 10, 2026", time: "9:15 AM", status: "Successful" },
    { id: "tx_12347", email: "john.doe@gmail.com", plan: "Pro", amount: "$29.00", date: "May 9, 2026", time: "2:45 PM", status: "Successful" },
    { id: "tx_12348", email: "failed@example.com", plan: "Pro", amount: "$29.00", date: "May 9, 2026", time: "11:20 AM", status: "Failed" },
  ];

  return (
    <div className="max-w-6xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Payments & Subscriptions</h1>
        <p className="text-gray-400">View all subscription transactions across the platform.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6">
          <p className="text-sm font-medium text-gray-400 mb-1">Total Revenue</p>
          <p className="text-3xl font-semibold text-white">$450,200</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6">
          <p className="text-sm font-medium text-gray-400 mb-1">Monthly Recurring</p>
          <p className="text-3xl font-semibold text-white">$45,000</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6">
          <p className="text-sm font-medium text-gray-400 mb-1">Active Pro Users</p>
          <p className="text-3xl font-semibold text-white">850</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] p-6">
          <p className="text-sm font-medium text-gray-400 mb-1">Active Enterprise</p>
          <p className="text-3xl font-semibold text-white">125</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0f] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium">User Email</th>
                <th scope="col" className="px-6 py-4 font-medium">Plan</th>
                <th scope="col" className="px-6 py-4 font-medium">Amount</th>
                <th scope="col" className="px-6 py-4 font-medium">Date</th>
                <th scope="col" className="px-6 py-4 font-medium">Transaction ID</th>
                <th scope="col" className="px-6 py-4 font-medium">Status</th>
                <th scope="col" className="px-6 py-4 font-medium text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{tx.email}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      tx.plan === "Enterprise" ? "bg-fuchsia-400/10 text-fuchsia-400" : "bg-violet-400/10 text-violet-400"
                    }`}>
                      {tx.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <div className="whitespace-nowrap">{tx.date}</div>
                    <div className="text-xs text-gray-500">{tx.time}</div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{tx.id}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      tx.status === "Successful" ? "bg-emerald-400/10 text-emerald-400" : "bg-red-400/10 text-red-400"
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-white transition p-2 rounded-lg hover:bg-white/5" title="Download Receipt">
                      <Download className="h-4 w-4" />
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

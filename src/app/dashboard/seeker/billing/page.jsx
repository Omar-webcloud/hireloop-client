// /hireloop-client/src/app/dashboard/seeker/billing/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { Download, CreditCard } from 'lucide-react';
import { seekerAPI } from '@/lib/api-client';
import Link from 'next/link';

export default function SeekerBillingPage() {
  const [currentPlan, setCurrentPlan] = useState('free');
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [upgrading, setUpgrading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const profile = await seekerAPI.getProfile();
      setCurrentPlan(profile.subscriptionPlan || 'free');
      // Mock transactions - in production, fetch from API
      setTransactions([
        { id: 'tx_1', date: 'May 10, 2026', plan: 'Pro', amount: '$29.00', status: 'Paid' },
        { id: 'tx_2', date: 'Apr 10, 2026', plan: 'Pro', amount: '$29.00', status: 'Paid' }
      ]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpgrade(plan) {
    try {
      setUpgrading(true);
      setError('');

      // Call upgrade API
      const result = await seekerAPI.upgradeSubscription(plan);
      
      // In production, integrate Stripe here
      // For now, just show success
      alert(`Successfully upgraded to ${plan} plan!`);
      setCurrentPlan(plan);
      
      // Refresh transactions
      fetchProfile();
    } catch (err) {
      setError(err.message);
    } finally {
      setUpgrading(false);
    }
  }

  const planDetails = {
    free: { name: 'Free', price: '$0', features: ['Browse jobs', 'Save jobs', 'View salary insights'] },
    pro: { name: 'Pro', price: '$29/mo', features: ['Unlimited applications', 'Priority review', 'Application tracking', 'Salary insights'] },
    enterprise: { name: 'Enterprise', price: '$99/mo', features: ['Everything in Pro', 'Dedicated support', 'Custom domain', 'Advanced analytics'] }
  };

  return (
    <div className="max-w-4xl mx-auto text-white pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">Subscription & Billing</h1>
        <p className="text-gray-400">Manage your subscription plan and billing history</p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Loading billing information...</p>
        </div>
      ) : (
        <>
          {/* Current Plan */}
          <div className="rounded-3xl border border-violet-500/30 bg-[#0d0d0f] p-8 mb-10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.15)]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h2 className="text-lg font-medium text-gray-400 mb-1">Current Plan</h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-white">{planDetails[currentPlan].name}</span>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded-md ${
                    currentPlan === 'free' ? 'bg-gray-500/10 text-gray-400' :
                    currentPlan === 'pro' ? 'bg-violet-400/10 text-violet-400' :
                    'bg-amber-400/10 text-amber-400'
                  }`}>
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-400">Your next billing date is June 10, 2026</p>
              </div>
              
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <Link 
                  href="/pricing"
                  className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition text-center"
                >
                  Upgrade Plan
                </Link>
                <button className="px-6 py-3 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] text-white text-sm font-semibold rounded-xl transition">
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="rounded-3xl border border-white/[0.06] bg-[#0d0d0f] p-8">
            <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-gray-400" />
              Payment History
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="bg-white/[0.02] text-xs uppercase text-gray-500 border-b border-white/[0.06]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Date</th>
                    <th className="px-4 py-3 font-medium">Plan</th>
                    <th className="px-4 py-3 font-medium">Amount</th>
                    <th className="px-4 py-3 font-medium">Status</th>
                    <th className="px-4 py-3 font-medium text-right">Invoice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06]">
                  {transactions.map((tx) => (
                    <tr key={tx.id}>
                      <td className="px-4 py-4 text-white">{tx.date}</td>
                      <td className="px-4 py-4">{tx.plan}</td>
                      <td className="px-4 py-4">{tx.amount}</td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button className="text-gray-400 hover:text-white transition">
                          <Download className="h-4 w-4 inline-block" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, BriefcaseBusiness, Sparkles } from "lucide-react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      icon: <BriefcaseBusiness className="h-6 w-6 text-fuchsia-400" />,
      price: { monthly: 0, yearly: 0 },
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: false,
    },
    {
      name: "Growth",
      icon: <BarChart3 className="h-6 w-6 text-fuchsia-400" />,
      price: { monthly: 17, yearly: 13 },
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isPopular: true,
    },
    {
      name: "Premium",
      icon: <Sparkles className="h-6 w-6 text-fuchsia-400" />,
      price: { monthly: 99, yearly: 74 },
      description: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="absolute top-10 left-10 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[300px] w-[300px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Pricing
          </span>
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
        </div>

        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-10 max-w-2xl mx-auto leading-tight">
          Pay for the leverage, <br /> not the listings
        </h2>

        <div className="flex justify-center mb-16">
          <div className="relative flex items-center bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08]">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`relative z-10 rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                billingPeriod === "monthly" ? "text-black bg-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition duration-300 ${
                billingPeriod === "yearly" ? "text-black bg-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  billingPeriod === "yearly" ? "bg-fuchsia-600 text-white" : "bg-fuchsia-600/20 text-fuchsia-400"
                }`}
              >
                25%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                plan.isPopular
                  ? "border-violet-500 bg-[#0c0c0f] shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10"
                  : "border-white/[0.06] bg-[#0c0c0e]/80 hover:border-white/[0.15]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06]">
                      {plan.icon}
                    </div>
                    <span className="text-xl font-semibold">{plan.name}</span>
                  </div>

                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">
                      ${billingPeriod === "monthly" ? plan.price.monthly : plan.price.yearly}
                    </span>
                    <span className="text-sm text-gray-500 font-medium ml-1">/month</span>
                  </div>
                </div>

                <p className="text-sm font-semibold text-gray-300 mb-6">{plan.description}</p>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-white/[0.06] text-gray-300 font-bold font-mono text-xs">
                        +
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full flex items-center justify-between rounded-xl px-5 py-4 text-sm font-semibold transition duration-300 ${
                  plan.isPopular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/[0.04] border border-white/[0.06] text-white hover:bg-white/[0.08]"
                }`}
              >
                Choose This Plan
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

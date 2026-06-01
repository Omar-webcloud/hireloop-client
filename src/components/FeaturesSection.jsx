"use client";

import { motion } from "motion/react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25m-18.75 3h.008v.008H2.25V10.5" />
        </svg>
      ),
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 18.375v-5.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125v-9.75zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      ),
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152c.582.448 1.148.89 1.676 1.345m-1.676-1.345L12 6.75M15.042 9.152H21.75M16.718 10.497l-3.326 3.327m3.326-3.327V16.5m-3.326-2.676l-1.65 1.65m1.65-1.65H6.75" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 9.152L9 15.192M6.002 18.002L4 20" />
        </svg>
      ),
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm-1.2 6.477a7.5 7.5 0 00-5.1 0v.87c0 .414.336.75.75.75h3.6a.75.75 0 00.75-.75v-.87z" />
        </svg>
      ),
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5v9l9 5.25 9-5.25v-9z" />
        </svg>
      ),
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: (
        <svg className="h-6 w-6 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5 8.25-8.25M21 12v3.75m0 0H17.25m3.75 0L15 15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-24 text-white">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Features Job
          </span>
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-20 max-w-2xl mx-auto leading-tight">
          Everything you need <br className="hidden sm:inline" /> to succeed
        </h2>

        {/* Features Grid */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 group"
            >
              {/* Icon Container */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#141416] to-[#0c0c0e] shadow-xl group-hover:border-violet-500/30 transition-all duration-300">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-violet-500/0 opacity-0 group-hover:bg-violet-500/10 group-hover:opacity-100 blur-[8px] transition-all duration-300" />
                <div className="relative z-10">{feature.icon}</div>
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white group-hover:text-violet-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

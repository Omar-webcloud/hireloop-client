"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  BarChart3,
  Bookmark,
  Building2,
  FileText,
  Search,
  Send,
  TrendingUp,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      icon: <Search className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      icon: <BarChart3 className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      icon: <Building2 className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      icon: <Bookmark className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      icon: <Send className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      icon: <FileText className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      icon: <BadgeCheck className="h-6 w-6 text-fuchsia-400" />,
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      icon: <TrendingUp className="h-6 w-6 text-fuchsia-400" />,
    },
  ];

  return (
    <section className="relative bg-[#0d0d0d] py-24 text-white">
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Features Job
          </span>
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
        </div>

        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-20 max-w-2xl mx-auto leading-tight">
          Everything you need <br className="hidden sm:inline" /> to succeed
        </h2>

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
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#141416] to-[#0c0c0e] shadow-xl group-hover:border-violet-500/30 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl bg-violet-500/0 opacity-0 group-hover:bg-violet-500/10 group-hover:opacity-100 blur-[8px] transition-all duration-300" />
                <div className="relative z-10">{feature.icon}</div>
              </div>

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

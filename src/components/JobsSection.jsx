"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, DollarSign, MapPin } from "lucide-react";

export default function JobsSection() {
  const jobs = Array(6).fill({
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "$25-$40/hour",
  });

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Smart Job Discovery
          </span>
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
        </div>

        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-20 max-w-3xl mx-auto leading-tight">
          The roles you&apos;d never <br /> find by searching
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0d0d0f]/90 p-8 hover:border-violet-500/20 group hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.15)] transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/0 opacity-0 blur-2xl group-hover:bg-violet-500/10 group-hover:opacity-100 transition-all duration-500" />

              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300">
                {job.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                  <MapPin className="h-3.5 w-3.5 text-fuchsia-400" />
                  {job.location}
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                  <BriefcaseBusiness className="h-3.5 w-3.5 text-fuchsia-400" />
                  {job.type}
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium w-fit">
                  <DollarSign className="h-3.5 w-3.5 text-fuchsia-400" />
                  {job.salary}
                </div>
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-violet-400 transition-colors duration-300"
              >
                Apply Now
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/jobs"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black hover:bg-gray-200 transition duration-300"
          >
            View all jobs
          </Link>
        </div>
      </div>
    </section>
  );
}

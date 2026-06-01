"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function JobsSection() {
  const jobs = Array(6).fill({
    title: "Frontend Developer",
    description: "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  });

  return (
    <section className="relative bg-black py-24 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 font-mono">
            Smart Job Discovery
          </span>
          <span className="h-1.5 w-1.5 bg-violet-500 rounded-none transform rotate-45" />
        </div>

        {/* Section Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-20 max-w-3xl mx-auto leading-tight">
          The roles you'd never <br /> find by searching
        </h2>

        {/* Jobs Grid */}
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
              {/* Card Glow */}
              <div className="absolute top-0 right-0 -mr-6 -mt-6 h-24 w-24 rounded-full bg-violet-500/0 opacity-0 blur-2xl group-hover:bg-violet-500/10 group-hover:opacity-100 transition-all duration-500" />

              {/* Title */}
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-violet-400 transition-colors duration-300">
                {job.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                {job.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {/* Location */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                  <svg className="h-3.5 w-3.5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {job.location}
                </div>

                {/* Job Type */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                  <svg className="h-3.5 w-3.5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.45.258-.717.258H3.44c-.266 0-.523-.093-.717-.257a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.114 48.114 0 013.413-.387m11.12 0L16.5 9.75M16.5 9.75L12 5.25m4.5 4.5H12m-3.75 4.5L7.5 9.75M7.5 9.75L12 5.25m-4.5 4.5H12m0 0V5.25" />
                  </svg>
                  {job.type}
                </div>

                {/* Salary */}
                <div className="flex items-center gap-1.5 rounded-full bg-white/[0.04] border border-white/[0.04] px-3.5 py-1.5 text-xs text-gray-300 font-medium w-fit">
                  <svg className="h-3.5 w-3.5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.salary}
                </div>
              </div>

              {/* Apply Now */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-violet-400 transition-colors duration-300"
              >
                Apply Now
                <svg className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link
            href="/jobs"
            className="inline-block rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-black hover:bg-gray-200 transition duration-300"
          >
            View all job open
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import { BriefcaseBusiness, Building2, MapPin, Search, Star, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <BriefcaseBusiness className="h-6 w-6 text-zinc-400" />,
      value: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Building2 className="h-6 w-6 text-zinc-400" />,
      value: "12K",
      label: "Companies",
    },
    {
      id: 3,
      icon: <Users className="h-6 w-6 text-zinc-400" />,
      value: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <Star className="h-6 w-6 text-zinc-400" />,
      value: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black pt-32 pb-24 text-white min-h-[90vh] flex flex-col justify-between">
      <div
        className="absolute top-[45vh] inset-x-0 bottom-0 bg-contain bg-bottom bg-no-repeat opacity-90 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/images/globe.png')",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-zinc-800" />
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#0e0e12]/80 px-4 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              <span className="font-bold text-[#fff]">50,000+</span>
              <span className="font-mono text-[12px] tracking-wider text-zinc-500 uppercase">NEW JOBS THIS MONTH</span>
            </div>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-zinc-800" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Find Your Dream Job Today
          </h1>

          <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10">
            HireLoop connects top talent with world-class companies. Browse thousands of
            curated opportunities and land your next role faster.
          </p>

          <div className="mx-auto max-w-3xl mb-8">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 rounded-2xl md:rounded-full border border-zinc-800/80 bg-[#0a0a0f]/90 p-2 md:pl-6 backdrop-blur-xl shadow-2xl shadow-black/80">
              <div className="flex flex-1 items-center gap-3 w-full px-2 py-2">
                <Search className="h-5 w-5 text-zinc-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Job title, skill or company"
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              <div className="hidden md:block h-6 w-[1px] bg-zinc-800/80 mx-4" />

              <div className="flex flex-1 items-center gap-3 w-full px-2 py-2 border-t border-zinc-800/50 md:border-t-0">
                <MapPin className="h-5 w-5 text-zinc-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Location or Remote"
                  className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                />
              </div>

              <button className="w-full md:w-auto flex items-center justify-center rounded-xl bg-[#5253ff] hover:bg-[#4243e0] text-white p-3 px-5 transition duration-200 shadow-lg shadow-indigo-600/25">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-16 text-xs text-zinc-500">
            <span className="mr-1">Trending Position</span>
            <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">
              Product Designer
            </span>
            <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">
              AI Engineering
            </span>
            <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">
              Dev-ops Engineer
            </span>
          </div>
        </div>

        <div className="my-auto py-16 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light text-zinc-300 text-center leading-normal tracking-tight max-w-2xl">
            Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f]/80 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/20"
            >
              <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/5 blur-3xl transition duration-300 group-hover:bg-violet-500/10 pointer-events-none" />

              <div className="relative z-10 mb-8 inline-flex p-2 rounded-lg bg-white/[0.02] border border-white/5">
                {stat.icon}
              </div>

              <h3 className="relative z-10 text-5xl font-bold tracking-tight text-white mb-3">
                {stat.value}
              </h3>

              <p className="relative z-10 text-sm text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

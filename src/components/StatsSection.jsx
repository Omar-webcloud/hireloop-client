"use client";

import { motion } from "motion/react";

export default function StatsSection() {
    const stats = [
        {
            id: 1,
            icon: (
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {/* Briefcase with a small magnifying glass detail */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.286-.733-2.425-1.89-3.005l-4.162-2.08a1.875 1.875 0 00-1.676 0L8.86 11.145A3.75 3.75 0 016.996 11.53c-1.328 0-2.483-.873-2.82-2.158m16.074 4.778c-.203.023-.406.035-.61.035H4.536c-.204 0-.407-.012-.61-.035m16.074 0a3.75 3.75 0 00-16.074 0M12 3v2.25" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
                </svg>
            ),
            value: "50K",
            label: "Active Jobs",
        },
        {
            id: 2,
            icon: (
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {/* Companies / Building outline */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 21V8.25A2.25 2.25 0 0017.25 6h-10.5A2.25 2.25 0 004.5 8.25V21m15 0h-15M9 21v-4.5A2.25 2.25 0 0111.25 14.25h1.5A2.25 2.25 0 0115 16.5V21m-7.5-12h.008v.008H7.5V9zm0 3h.008v.008H7.5v-.008zm0 3h.008v.008H7.5v-.008zm6.75-6h.008v.008h-.008V9zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
            ),
            value: "12K",
            label: "Companies",
        },
        {
            id: 3,
            icon: (
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {/* User profile / magnifying lens indicator */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            ),
            value: "2M",
            label: "Job Seekers",
        },
        {
            id: 4,
            icon: (
                <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {/* Star icon */}
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.15-.427.77-.427.92 0l1.562 4.453a1.5 1.5 0 001.378 1.03h4.72c.451 0 .637.58.277.82l-3.82 2.775a1.5 1.5 0 00-.54 1.659l1.562 4.453c.15.427-.402.829-.768.562l-3.82-2.775a1.5 1.5 0 00-1.76 0l-3.82 2.775c-.366.267-.918-.135-.768-.562l1.562-4.453a1.5 1.5 0 00-.54-1.659l-3.82-2.775c-.36-.24-.174-.82.277-.82h4.72a1.5 1.5 0 001.378-1.03l1.562-4.453z" />
                </svg>
            ),
            value: "97%",
            label: "Satisfaction Rate",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-black pt-32 pb-24 text-white min-h-[90vh] flex flex-col justify-between">
            {/* Background Globe */}
            <div
                className="absolute top-[45vh] inset-x-0 bottom-0 bg-contain bg-bottom bg-no-repeat opacity-90 z-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/globe.png')",
                }}
            />

            {/* Main Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-center flex-1 flex flex-col justify-between">
                <div>
                    {/* Top Badge */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-zinc-800" />
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#0e0e12]/80 px-4 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
                            <span>💼</span>
                            <span className="font-bold text-[#fff]">50,000+</span>
                            <span className="font-mono text-[12px] tracking-wider text-zinc-500 uppercase">NEW JOBS THIS MONTH</span>
                        </div>
                        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-zinc-800" />
                    </div>

                    {/* Hero Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Find Your Dream Job Today
                    </h1>

                    {/* Description */}
                    <p className="mx-auto max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mb-10">
                        HireLoop connects top talent with world-class companies. Browse thousands of
                        curated opportunities and land your next role — faster.
                    </p>

                    {/* Dual-input Search Container */}
                    <div className="mx-auto max-w-3xl mb-8">
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 rounded-2xl md:rounded-full border border-zinc-800/80 bg-[#0a0a0f]/90 p-2 md:pl-6 backdrop-blur-xl shadow-2xl shadow-black/80">
                            {/* Keyword Search */}
                            <div className="flex flex-1 items-center gap-3 w-full px-2 py-2">
                                <svg className="h-5 w-5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Job title, skill or company"
                                    className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                                />
                            </div>

                            {/* Divider Line */}
                            <div className="hidden md:block h-6 w-[1px] bg-zinc-800/80 mx-4" />

                            {/* Location Search */}
                            <div className="flex flex-1 items-center gap-3 w-full px-2 py-2 border-t border-zinc-800/50 md:border-t-0">
                                <svg className="h-5 w-5 text-zinc-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Location or Remote"
                                    className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
                                />
                            </div>

                            {/* Action Search Button */}
                            <button className="w-full md:w-auto flex items-center justify-center rounded-xl bg-[#5253ff] hover:bg-[#4243e0] text-white p-3 px-5 transition duration-200 shadow-lg shadow-indigo-600/25">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Trending Positions */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-16 text-xs text-zinc-500">
                        <span className="mr-1">Trending Position</span>
                        <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">Product Designer</span>
                        <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">AI Engineering</span>
                        <span className="rounded-full border border-zinc-800 bg-[#0e0e12]/60 px-3 py-1 text-zinc-300 hover:border-zinc-700 hover:text-white transition duration-200 cursor-pointer">Dev-ops Engineer</span>
                    </div>
                </div>

                {/* Overlaid Assisting Text (Centering on the background Globe) */}
                <div className="my-auto py-16 flex items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl md:text-[38px] font-light text-zinc-300 text-center leading-normal tracking-tight max-w-2xl">
                        Assisting over <span className="font-semibold text-white">15,000 job seekers</span>
                        <br />
                        find their dream positions.
                    </h2>
                </div>

                {/* High-Fidelity Glassmorphic Stats Cards */}
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-left">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0f]/80 p-8 backdrop-blur-xl transition duration-300 hover:border-violet-500/20"
                        >
                            {/* Accent Glow on Hover */}
                            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-white/5 blur-3xl transition duration-300 group-hover:bg-violet-500/10 pointer-events-none" />

                            {/* Top Left Icon Container */}
                            <div className="relative z-10 mb-8 inline-flex p-2 rounded-lg bg-white/[0.02] border border-white/5">
                                {stat.icon}
                            </div>

                            {/* Large Value */}
                            <h3 className="relative z-10 text-5xl font-bold tracking-tight text-white mb-3">
                                {stat.value}
                            </h3>

                            {/* Card Label */}
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

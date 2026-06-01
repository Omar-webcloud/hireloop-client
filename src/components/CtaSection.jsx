"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-16">
      {/* Background glow and dome grid */}
      <div className="pointer-events-none absolute inset-x-0 top-5 h-[560px]">
        {/* The dome grid PNG — this defines the shape */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/cta-bg.png')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        {/* Gradient overlay image to match the design */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Gradient.png')",
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            opacity: 1,
          }}
        />
      </div>

      {/* CTA Box Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center mb-36">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Your next role is <br /> already looking for you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-gray-400 mb-12 leading-relaxed"
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/auth/signup"
            className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-gray-200 transition duration-300 shadow-lg"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="rounded-xl border border-white/20 bg-white/[0.02] px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition duration-300"
          >
            View pricing
          </Link>
        </motion.div>
      </div>

      {/* Custom Integrated Footer */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 border-t border-white/[0.08] pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Intro column */}
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="hireloop"
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm text-gray-400 leading-8">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 border border-violet-500 text-white hover:bg-violet-500 transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.68 7.9 6.47 9.39-.09-.8-.17-2.02.03-2.9l1.17-4.96s-.3-.6-.3-1.48c0-1.39.8-2.43 1.8-2.43.85 0 1.26.64 1.26 1.4 0 .86-.55 2.14-.83 3.33-.23.99.5 1.8 1.48 1.8 1.78 0 3.15-1.88 3.15-4.59 0-2.4-1.72-4.08-4.19-4.08-2.85 0-4.53 2.14-4.53 4.35 0 .86.33 1.78.74 2.28a.33.33 0 01.08.31l-.27 1.13c-.04.18-.15.22-.35.13-1.3-.61-2.12-2.52-2.12-4.05 0-3.3 2.4-6.33 6.92-6.33 3.63 0 6.45 2.59 6.45 6.05 0 3.61-2.27 6.51-5.43 6.51-1.06 0-2.06-.55-2.4-1.2l-.65 2.5a10.4 10.4 0 01-1.26 2.62C9.43 21.73 10.68 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-violet-500 uppercase">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/jobs" className="transition hover:text-white">
                  Job discovery
                </Link>
              </li>
              <li>
                <Link href="/worker-ai" className="transition hover:text-white">
                  Worker AI
                </Link>
              </li>
              <li>
                <Link href="/companies" className="transition hover:text-white">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/salary" className="transition hover:text-white">
                  Salary data
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-violet-500 uppercase">
              Navigations
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/help-center" className="transition hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/career-library" className="transition hover:text-white">
                  Career library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-violet-500 uppercase">
              Resources
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="/brand-guideline" className="transition hover:text-white">
                  Brand Guideline
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="transition hover:text-white">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal section */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-gray-500 sm:flex-row">
          <p>Copyright 2026 — HireLoop</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Policy
            </Link>
            <span className="text-gray-700">-</span>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
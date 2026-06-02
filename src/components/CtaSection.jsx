"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Globe, MessageCircle, Rss } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white pt-32 pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-5 h-[560px]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/cta-bg.png')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/Gradient.png')",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            opacity: 1,
          }}
        />
      </div>

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 border-t border-white/[0.08] pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="hireloop"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm text-gray-400 leading-8">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 border border-violet-500 text-white hover:bg-violet-500 transition duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <Rss className="h-5 w-5" />
              </Link>
            </div>
          </div>

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

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-gray-500 sm:flex-row">
          <p>Copyright 2026 - HireLoop</p>
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

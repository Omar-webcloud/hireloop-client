"use client";

import Link from "next/link";
import { motion } from "motion/react";




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

      
    </section>
  );
}

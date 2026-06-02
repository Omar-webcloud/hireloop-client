"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";

function LogoPinterest(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.85 9.52-.1-.81-.19-2.06.04-2.95l1.18-5s-.3-.61-.3-1.5c0-1.4.81-2.46 1.82-2.46.86 0 1.28.64 1.28 1.41 0 .86-.55 2.15-.84 3.35-.24 1.01.51 1.83 1.51 1.83 1.81 0 3.2-1.9 3.2-4.64 0-2.43-1.75-4.13-4.25-4.13-2.89 0-4.58 2.17-4.58 4.41 0 .87.33 1.8.74 2.31.08.11.1.26.06.39l-.28 1.16c-.04.19-.16.23-.37.14-1.34-.63-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.12-6.49 3.73 0 6.62 2.66 6.62 6.21 0 3.72-2.34 6.7-5.6 6.7-1.1 0-2.14-.57-2.5-1.24l-.68 2.57a10.77 10.77 0 0 1-1.3 2.73c.51.16 1.04.24 1.6.24 5.65 0 10.23-4.58 10.23-10.23C22.23 6.58 17.65 2 12 2Z" />
    </svg>
  );
}

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

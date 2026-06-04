"use client";

import Link from "next/link";
import Image from "next/image";

import { LogoFacebook, LogoLinkedin } from "@gravity-ui/icons";

function LogoPinterest(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.18 6.85 9.52-.1-.81-.19-2.06.04-2.95l1.18-5s-.3-.61-.3-1.5c0-1.4.81-2.46 1.82-2.46.86 0 1.28.64 1.28 1.41 0 .86-.55 2.15-.84 3.35-.24 1.01.51 1.83 1.51 1.83 1.81 0 3.2-1.9 3.2-4.64 0-2.43-1.75-4.13-4.25-4.13-2.89 0-4.58 2.17-4.58 4.41 0 .87.33 1.8.74 2.31.08.11.1.26.06.39l-.28 1.16c-.04.19-.16.23-.37.14-1.34-.63-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.12-6.49 3.73 0 6.62 2.66 6.62 6.21 0 3.72-2.34 6.7-5.6 6.7-1.1 0-2.14-.57-2.5-1.24l-.68 2.57a10.77 10.77 0 0 1-1.3 2.73c.51.16 1.04.24 1.6.24 5.65 0 10.23-4.58 10.23-10.23C22.23 6.58 17.65 2 12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-black text-white pb-16">
<div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 border-t border-white/[0.08] pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
  src="/images/logo.png"
  alt="hireloop"
  width={160}            
  height={40}              
/>
            </Link>
            <p className="max-w-xs text-sm text-gray-100 leading-8">
              The AI-native career platform. Built for people who take their work seriously.
            </p>

            <div className="flex items-center gap-3 pt-4">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="Pinterest"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 border border-violet-500 text-white hover:bg-violet-900 transition duration-300"
              >
                <LogoPinterest className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:bg-violet-600 hover:text-white transition duration-300"
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-violet-500 uppercase">
              Product
            </h4>
            <ul className="space-y-4 text-sm text-gray-200">
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
                  Salary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-sm font-semibold tracking-wider text-violet-500 uppercase">
              Navigations
            </h4>
            <ul className="space-y-4 text-sm text-gray-200">
              <li>
                <Link href="/help-center" className="transition hover:text-white">
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/career-library" className="transition hover:text-white">
                  Career
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
            <ul className="space-y-4 text-sm text-gray-200">
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

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 text-xs text-gray-300 sm:flex-row">
          <p>Copyright 2026 - HireLoop</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="transition hover:text-white">
              Terms & Policy
            </Link>
            <span className="text-gray-400">-</span>
            <Link href="/privacy" className="transition hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
</section>
  );
}
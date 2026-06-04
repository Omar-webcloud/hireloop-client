"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { signOut } from "@/lib/auth-client";
import { useAuth } from "@/app/context/AuthContext";
import { roleDashboard } from "@/config/navigation";
import Image from "next/image";
import { LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser, loading: isPending } = useAuth();
  const dashboardPath = user?.role ? roleDashboard[user.role] : null;

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
  };

  const navLinks = [
    { label: "Browse Jobs", href: "/#jobs" },
    { label: "Company", href: "/#company" },
    { label: "Pricing", href: "/#pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0F]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="HireLoop" width={144} height={36} className="h-9 w-auto" />
        </Link>

        {/* RIGHT SIDE — desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Nav Links */}
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/20" />

          {/* Auth area */}
          <div className="flex items-center gap-3">
            {isPending ? (
              <div className="h-8 w-24 rounded-lg bg-white/10 animate-pulse" />
            ) : user ? (
              <>
                {dashboardPath && (
                  <Link
                    href={dashboardPath}
                    className="flex items-center gap-1.5 text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                  >
                    <LayoutDashboard size={15} />
                    Dashboard
                  </Link>
                )}
                <span className="text-sm text-zinc-400">Hi, {user.name}!</span>
                <Button onClick={handleSignOut} variant="ghost" size="sm">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Sign In
                </Link>
                <Link href="/auth/signup">
                  <Button
                    radius="lg"
                    className="h-10 bg-white px-5 text-sm font-semibold text-black hover:bg-gray-200"
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B0B0F] md:hidden">
          <div className="space-y-3 px-4 py-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/10 pt-4">
              <div className="flex flex-col gap-3">
                {user ? (
                  <>
                    {dashboardPath && (
                      <Link
                        href={dashboardPath}
                        className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-violet-400 hover:bg-white/5 transition"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <LayoutDashboard size={16} />
                        Go to Dashboard
                      </Link>
                    )}
                    <button
                      onClick={() => { handleSignOut(); setIsMenuOpen(false); }}
                      className="rounded-xl px-4 py-3 text-left text-base font-medium text-red-400 hover:bg-white/5 transition"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      className="rounded-xl px-4 py-3 text-base font-medium text-violet-400 transition hover:bg-white/5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)} className="w-full">
                      <Button className="w-full bg-white font-semibold text-black" radius="lg">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
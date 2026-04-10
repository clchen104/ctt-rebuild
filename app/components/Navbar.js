"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/scores", label: "Scores" },
  { href: "/coaches", label: "Coaches" },
  { href: "/classes", label: "Classes" },
  { href: "/league", label: "League" },
  { href: "/membership", label: "Membership" },
  { href: "/more", label: "More" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#CC0000] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 text-sm font-semibold tracking-widest sm:px-6 lg:px-8">
          <span>CALL TODAY - 626-765-7772</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#D4D4D4] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo-color.png"
              alt="California Table Tennis"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[16px] font-medium text-[#1B2A4A] transition-colors hover:text-[#CC0000]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="rounded-[4px] border border-[#1B2A4A] px-4 py-2 text-sm font-semibold text-[#1B2A4A] transition-colors hover:bg-[#1B2A4A] hover:text-white"
            >
              Student Login
            </Link>
            <Link
              href="/membership"
              className="rounded-[4px] bg-[#CC0000] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#A30000]"
            >
              Club Membership
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-[4px] p-2 text-[#1B2A4A] hover:bg-[#F5F5F5] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <nav className="border-t border-[#D4D4D4] bg-white px-4 pb-4 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#1B2A4A] hover:bg-[#F5F5F5] hover:text-[#CC0000]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-[#D4D4D4] pt-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] border border-[#1B2A4A] px-4 py-2 text-center text-sm font-semibold text-[#1B2A4A]"
              >
                Student Login
              </Link>
              <Link
                href="/membership"
                onClick={() => setMobileOpen(false)}
                className="rounded-[4px] bg-[#CC0000] px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Club Membership
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}

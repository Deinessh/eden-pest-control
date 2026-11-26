"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Clock, MapPin, Menu, X, ShieldCheck } from "lucide-react";
import { EdenLogo } from "./EdenLogo";
import { NAV_ITEMS, SITE } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#0D4F21] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-100">
              <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>{SITE.hours}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-100">
              <MapPin className="h-3.5 w-3.5 text-amber-400 shrink-0" />
              <span>Thirumullaivoyal, Chennai – 600062</span>
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300 border border-amber-400/30">
              <ShieldCheck className="h-3 w-3" />
              5+ Years Termite Guarantee
            </span>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-bold text-white hover:text-amber-300 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar with Larger Logo */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="shrink-0 focus:outline-none py-1"
            onClick={() => setMobileOpen(false)}
          >
            {/* Increased logo size in header as requested */}
            <EdenLogo variant="header" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-[#0D4F21] font-bold"
                      : "text-gray-700 hover:text-[#0D4F21] hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#B91C1C] px-5 py-2.5 text-sm font-bold text-white shadow hover:bg-[#991B1B] transition-transform hover:scale-[1.02]"
            >
              Book Inspection
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white shadow-lg">
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-emerald-50 text-[#0D4F21]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#B91C1C] px-3 py-2.5 text-sm font-bold text-white"
              >
                Book Inspection
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0D4F21] px-3 py-2.5 text-sm font-bold text-white"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

import React from "react";
import Link from "next/link";
import { MapPin, Clock, ShieldCheck, Award } from "lucide-react";
import { EdenLogo } from "./EdenLogo";
import { NAV_ITEMS, SERVICES, SITE } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#082E13] text-emerald-50 py-10 pb-5 border-t border-emerald-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand Column: 4-cols with ample clearance to prevent overlap */}
          <div className="lg:col-span-4 space-y-3">
            <EdenLogo variant="footer" />
            <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed pt-1 max-w-sm">
              {SITE.tamilMotto} — Trusted specialist termite &amp; complete pest
              control solutions for homes and commercial spaces across Chennai.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/80 border border-emerald-700 px-2.5 py-0.5 text-[11px] font-semibold text-amber-300">
                <Award className="h-3 w-3" />
                15+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-900/80 border border-emerald-700 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-200">
                <ShieldCheck className="h-3 w-3" />
                5+ Years Guarantee
              </span>
            </div>
          </div>

          {/* Quick Links Column: 2-cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-emerald-100/85 hover:text-white hover:underline transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column: 3-cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services`}
                    className="text-emerald-100/85 hover:text-white hover:underline transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address & Working Hours: 3-cols */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Head Office &amp; Hours
            </h3>
            <div className="space-y-2.5 text-xs text-emerald-100/90">
              <a
                href={SITE.mapDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
                title="Open location in Google Maps"
              >
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="leading-relaxed">{SITE.address}</p>
              </a>

              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-amber-400 shrink-0" />
                <span>{SITE.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-emerald-800/70 space-y-3 text-xs text-emerald-200/75">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>© 2026 {SITE.name}. All rights reserved.</p>
            <p>Specialist Termite Control • Chennai, Tamil Nadu 600062</p>
          </div>

          <p className="text-center text-xs text-emerald-200/80 pt-1">
            Developed by{" "}
            <a
              href="https://thunderfoxweb.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-amber-300 hover:text-amber-200 hover:underline transition-colors tracking-wide"
            >
              ThunderFoxWeb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

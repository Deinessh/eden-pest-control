"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE } from "@/data/site";

const SLIDES = [
  {
    image: "/images/hero-technician.jpg",
    title: "Specialist Termite Control",
    sub: "Drill-Fill-Seal Chemical Barrier with 5+ Years Written Guarantee",
    badge: "5+ Years Guarantee",
  },
  {
    image: "/images/commercial-warehouse.jpg",
    title: "Commercial & Structural Shield",
    sub: "Industrial Grade Barrier Protecting Warehouses, Factories & Commercial Facilities",
    badge: "Government Approved",
  },
  {
    image: "/images/cockroach-service.jpg",
    title: "Odorless Kitchen Gel Treatment",
    sub: "100% Eradication of Cockroaches & Ants with Zero Utensil Vacating",
    badge: "Kids & Pet Safe",
  },
  {
    image: "/images/commercial-restaurant.jpg",
    title: "Food Hygiene & Restaurant Protection",
    sub: "Strict Audit-Ready Preventive Pest Control for Commercial Kitchens & Hotels",
    badge: "Food Safe Certified",
  },
];

function AnimatedCounter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-[#06260F] text-white py-14 sm:py-20 lg:py-24">
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, #22C55E 0%, transparent 45%), radial-gradient(circle at 90% 70%, #F59E0B 0%, transparent 40%)",
        }}
      />

      {/* Increased Size & Increased Count: Animated Crawling Insects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-40 select-none">
        {/* Cockroach 1 (Top track, larger size: w-20 h-10) */}
        <div className="bug-cockroach absolute top-6 left-0 flex items-center">
          <svg viewBox="0 0 100 50" className="w-20 h-10 fill-amber-200 drop-shadow-md">
            <ellipse cx="48" cy="25" rx="22" ry="9" />
            <ellipse cx="26" cy="25" rx="7" ry="6" />
            <path d="M 22 23 Q 6 10 2 4" stroke="#FDE68A" strokeWidth="2.2" fill="none" />
            <path d="M 22 27 Q 6 38 2 46" stroke="#FDE68A" strokeWidth="2.2" fill="none" />
            <path d="M 40 18 L 32 4 M 50 18 L 48 4 M 60 19 L 66 5" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 40 32 L 32 46 M 50 32 L 48 46 M 60 31 L 66 45" stroke="#FDE68A" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Cockroach 2 (Mid track, delayed crawl) */}
        <div className="bug-cockroach-2 absolute top-2/3 left-0 flex items-center">
          <svg viewBox="0 0 100 50" className="w-16 h-8 fill-amber-300 drop-shadow-md">
            <ellipse cx="48" cy="25" rx="22" ry="9" />
            <ellipse cx="26" cy="25" rx="7" ry="6" />
            <path d="M 22 23 Q 6 10 2 4" stroke="#FDE68A" strokeWidth="2" fill="none" />
            <path d="M 22 27 Q 6 38 2 46" stroke="#FDE68A" strokeWidth="2" fill="none" />
            <path d="M 40 18 L 32 4 M 50 18 L 48 4 M 60 19 L 66 5" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
            <path d="M 40 32 L 32 46 M 50 32 L 48 46 M 60 31 L 66 45" stroke="#FDE68A" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Trail of 4 Ants (Marching diagonally) */}
        <div className="bug-ant-trail absolute top-1/3 left-0 flex items-center gap-6">
          {[0, 1, 2, 3].map((antIdx) => (
            <svg key={antIdx} viewBox="0 0 80 40" className="w-12 h-6 fill-emerald-300 drop-shadow">
              <circle cx="20" cy="20" r="6" />
              <ellipse cx="36" cy="20" rx="5" ry="4" />
              <ellipse cx="54" cy="20" rx="10" ry="7" />
              <path d="M 32 17 L 26 7 M 36 17 L 36 6 M 42 17 L 48 7" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
              <path d="M 32 23 L 26 33 M 36 23 L 36 34 M 42 23 L 48 33" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
              <path d="M 16 18 Q 8 13 4 8 M 16 22 Q 8 27 4 32" stroke="#A7F3D0" strokeWidth="1.8" fill="none" />
            </svg>
          ))}
        </div>

        {/* Beetles & Bugs (Bottom track and lower reverse crawl) */}
        <div className="bug-beetle absolute bottom-12 left-0 flex items-center">
          <svg viewBox="0 0 70 45" className="w-16 h-10 fill-amber-300 drop-shadow">
            <ellipse cx="38" cy="22" rx="16" ry="11" />
            <circle cx="20" cy="22" r="6" />
            <path d="M 32 12 L 26 3 M 40 12 L 42 2 M 48 13 L 56 4" stroke="#FDE047" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 32 32 L 26 41 M 40 32 L 42 42 M 48 31 L 56 40" stroke="#FDE047" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 16 20 Q 8 15 4 10 M 16 24 Q 8 29 4 34" stroke="#FDE047" strokeWidth="1.8" fill="none" />
          </svg>
        </div>

        <div className="bug-beetle-2 absolute bottom-28 left-0 flex items-center">
          <svg viewBox="0 0 70 45" className="w-14 h-9 fill-red-300 drop-shadow">
            <ellipse cx="38" cy="22" rx="16" ry="11" />
            <circle cx="20" cy="22" r="6" />
            <path d="M 32 12 L 26 3 M 40 12 L 42 2 M 48 13 L 56 4" stroke="#FCA5A5" strokeWidth="2" strokeLinecap="round" />
            <path d="M 32 32 L 26 41 M 40 32 L 42 42 M 48 31 L 56 40" stroke="#FCA5A5" strokeWidth="2" strokeLinecap="round" />
            <path d="M 16 20 Q 8 15 4 10 M 16 24 Q 8 29 4 34" stroke="#FCA5A5" strokeWidth="1.6" fill="none" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 px-4 py-1 text-xs font-black tracking-wider uppercase text-amber-300 shadow-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                5+ Years Termite Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/20 border border-emerald-400/40 px-4 py-1 text-xs font-black tracking-wider uppercase text-emerald-200 shadow-sm backdrop-blur">
                <Award className="h-4 w-4" />
                15+ Years Field Experience
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-base sm:text-lg font-black tracking-widest uppercase text-amber-400">
                {SITE.tamilMotto}{" "}
                <span className="text-xs font-medium text-emerald-200/80 lowercase">
                  ({SITE.tamilMottoEn})
                </span>
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] uppercase">
                Complete Pest &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400">
                  Specialist Termite
                </span>{" "}
                Control Services
              </h1>
              <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl font-normal leading-relaxed">
                Protecting homes, modular kitchens, wooden fixtures, and commercial premises across Chennai with odorless, child- and pet-safe certified treatments.
              </p>
            </div>

            {/* Stats Counter Animation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-3.5 text-center transition-all hover:bg-white/15">
                <span className="block text-2xl sm:text-3xl font-black text-amber-300">
                  <AnimatedCounter end={15} suffix="+" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                  Years Exp
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-3.5 text-center transition-all hover:bg-white/15">
                <span className="block text-2xl sm:text-3xl font-black text-white">
                  <AnimatedCounter end={5000} suffix="+" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                  Protected
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-3.5 text-center transition-all hover:bg-white/15">
                <span className="block text-2xl sm:text-3xl font-black text-amber-300">
                  <AnimatedCounter end={100} suffix="%" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                  Safe &amp; Odorless
                </span>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 p-3.5 text-center transition-all hover:bg-white/15">
                <span className="block text-2xl sm:text-3xl font-black text-white">
                  <AnimatedCounter end={5} suffix="+ Yrs" />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-100">
                  Guarantee
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-6 py-3.5 text-sm sm:text-base font-black uppercase tracking-wide text-white shadow-xl shadow-red-950/40 hover:bg-[#991B1B] transition-transform hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>

              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm sm:text-base font-black uppercase tracking-wide text-white shadow-xl shadow-emerald-950/40 hover:bg-[#20ba5a] transition-transform hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5 text-white" />
                WhatsApp Book
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-400/40 bg-white/10 backdrop-blur px-5 py-3.5 text-sm sm:text-base font-bold text-white hover:bg-white/20 transition-colors"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Hero Visual: 4 Sliding Images Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-emerald-950 h-[340px] sm:h-[420px] lg:h-[460px]">
              {SLIDES.map((slide, idx) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-amber-400 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-gray-950 shadow-md">
                      {slide.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight">
                      {slide.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-emerald-100 leading-snug">
                      {slide.sub}
                    </p>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/75 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/75 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div className="absolute bottom-3 right-5 z-20 flex items-center gap-1.5">
                {SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => setCurrent(dotIdx)}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === current ? "w-6 bg-amber-400" : "w-2 bg-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

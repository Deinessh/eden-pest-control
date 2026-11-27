"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE } from "@/data/site";

// Hero Slider with User-Provided Images hero-1 through hero-7
const SLIDES = [
  {
    image: "/images/hero-1.png",
    title: "Mosquito Control",
    sub: "Outdoor Thermal Fogging & Larvicidal Breeding Barrier for Grounds",
    badge: "Dengue & Malaria Shield",
  },
  {
    image: "/images/hero-2.png",
    title: "Termite Control (ATT)",
    sub: "Pre- & Post-Construction Drill-Fill-Seal Barrier with 5+ Years Guarantee",
    badge: "5+ Years Guarantee",
  },
  {
    image: "/images/hero-3.png",
    title: "Ant Control",
    sub: "Colony-Transfer Food Baits & Long-Lasting Indoor-Outdoor Barrier",
    badge: "Colony Source Kill",
  },
  {
    image: "/images/hero-4.png",
    title: "Cockroach Control",
    sub: "Targeted Odorless Herbal Gel Baiting & Crevice Pipeline Flushing",
    badge: "100% Odorless & Safe",
  },
  {
    image: "/images/hero-5.png",
    title: "Rodent & Rat Control",
    sub: "Tamper-Proof Lockable Bait Stations & Structural Perimeter Proofing",
    badge: "Tamper-Proof",
  },
  {
    image: "/images/hero-6.png",
    title: "Bed Bug Treatment",
    sub: "Deep Upholstery & Mattress Eradication Destroying Adults, Nymphs & Eggs",
    badge: "Deep Eradication",
  },
  {
    image: "/images/hero-7.png",
    title: "Lizard & Spider Control",
    sub: "Eco-Friendly Safe Repellents & Cobweb Clearance for Ceilings and Lights",
    badge: "Safe Repellent",
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
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative overflow-hidden bg-[#072B12] text-white py-14 sm:py-20 lg:py-24">
      {/* All-in-One Panoramic Pest Protection Background Image with High Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-all-in-one-bg.jpg"
          alt="Eden Pest Control All-in-One Protection Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-75"
        />
        {/* Subtle, rich gradient overlay allowing the panoramic imagery to shine through */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#072B12]/80 via-[#0A3D1A]/60 to-[#072B12]/80" />
      </div>

      {/* Realistic Real Moving Insects with Forward-Facing Zigzag Crawl */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 select-none">
        {/* Cockroach 1 (Fast forward-head zigzag darting across upper track) */}
        <div className="real-bug-cockroach-1 absolute top-6 -left-64">
          <Image
            src="/images/cockroach.png"
            alt=""
            width={120}
            height={80}
            className="w-20 sm:w-24 lg:w-28 h-auto drop-shadow-2xl opacity-90"
          />
        </div>

        {/* Cockroach 2 (Reversed track: moving right-to-left with head leading forward) */}
        <div className="real-bug-cockroach-2 absolute top-2/3 -right-64">
          <Image
            src="/images/cockroach.png"
            alt=""
            width={130}
            height={90}
            className="w-22 sm:w-26 lg:w-30 h-auto drop-shadow-2xl opacity-95"
          />
        </div>

        {/* Cockroach 3 (Diagonal zigzag scurry across middle-lower track) */}
        <div className="real-bug-cockroach-3 absolute bottom-8 -left-64">
          <Image
            src="/images/cockroach.png"
            alt=""
            width={110}
            height={75}
            className="w-18 sm:w-22 lg:w-26 h-auto drop-shadow-xl opacity-85"
          />
        </div>

        {/* Cockroach 4 (Mid-altitude erratic scouting crawl) */}
        <div className="real-bug-cockroach-4 absolute top-40 -left-64">
          <Image
            src="/images/cockroach.png"
            alt=""
            width={115}
            height={78}
            className="w-18 sm:w-22 lg:w-24 h-auto drop-shadow-xl opacity-85"
          />
        </div>

        {/* Ant 1 (Rapid zigzag trail along top edge, head forward) */}
        <div className="real-bug-ant-1 absolute top-14 -left-64">
          <Image
            src="/images/ant.png"
            alt=""
            width={85}
            height={60}
            className="w-14 sm:w-16 lg:w-20 h-auto drop-shadow-lg opacity-90"
          />
        </div>

        {/* Ant 2 (Quick scurry across mid-screen) */}
        <div className="real-bug-ant-2 absolute top-1/2 -left-64">
          <Image
            src="/images/ant.png"
            alt=""
            width={80}
            height={55}
            className="w-13 sm:w-15 lg:w-18 h-auto drop-shadow-lg opacity-85"
          />
        </div>

        {/* Ant 3 (Returning scout marching right-to-left) */}
        <div className="real-bug-ant-3 absolute top-32 -right-64">
          <Image
            src="/images/ant.png"
            alt=""
            width={75}
            height={50}
            className="w-12 sm:w-14 lg:w-16 h-auto drop-shadow-lg opacity-85"
          />
        </div>

        {/* Ant 4 (Trailing foraging ant) */}
        <div className="real-bug-ant-4 absolute bottom-20 -left-64">
          <Image
            src="/images/ant.png"
            alt=""
            width={80}
            height={55}
            className="w-13 sm:w-15 lg:w-18 h-auto drop-shadow-lg opacity-90"
          />
        </div>

        {/* Bed Bug 1 (Pacing crawl along bottom perimeter, head forward) */}
        <div className="real-bug-bedbug-1 absolute bottom-4 -left-64">
          <Image
            src="/images/bedbug.png"
            alt=""
            width={85}
            height={65}
            className="w-14 sm:w-16 lg:w-18 h-auto drop-shadow-xl opacity-90"
          />
        </div>

        {/* Bed Bug 2 (Crevice wanderer near top-left) */}
        <div className="real-bug-bedbug-2 absolute top-28 -left-64">
          <Image
            src="/images/bedbug.png"
            alt=""
            width={80}
            height={60}
            className="w-13 sm:w-15 lg:w-17 h-auto drop-shadow-xl opacity-85"
          />
        </div>

        {/* Bed Bug 3 (Crevice crawl right-to-left near lower-right) */}
        <div className="real-bug-bedbug-3 absolute bottom-32 -right-64">
          <Image
            src="/images/bedbug.png"
            alt=""
            width={85}
            height={65}
            className="w-14 sm:w-16 lg:w-18 h-auto drop-shadow-xl opacity-90"
          />
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

            {/* Styled Action Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-6 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-white shadow-xl shadow-red-950/40 hover:bg-[#991B1B] transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay}
              </a>

              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-white shadow-xl shadow-emerald-950/40 hover:bg-[#20ba5a] transition-all hover:scale-105 active:scale-95"
              >
                <WhatsAppIcon className="h-4 w-4 text-white" />
                WhatsApp Book
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-400/50 bg-white/10 backdrop-blur px-5 py-3.5 text-xs sm:text-sm font-sans font-bold tracking-widest uppercase text-white hover:bg-white/20 transition-all hover:scale-105"
              >
                View Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Hero Visual: User Provided hero-1 through hero-7 Slider */}
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Phone,
  ShieldCheck,
  ChevronRight,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ServiceIcon } from "./ServiceIcon";
import { SERVICES, SITE } from "@/data/site";

export function ServicesWidgetView() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);

  const activeService =
    SERVICES.find((s) => s.slug === activeSlug) || SERVICES[0];

  const waText = encodeURIComponent(
    `Hello ${SITE.name}, I would like to book ${activeService.name} (${activeService.tamilName}).`
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Sidebar Widgets (Inspired by Curator Pest Control) */}
      <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
        {/* Widget 1: Services List Navigation */}
        <div className="rounded-2xl border border-emerald-200 bg-white shadow-sm overflow-hidden">
          <div className="bg-[#0D4F21] px-5 py-4 text-white">
            <h3 className="font-serif text-lg font-bold tracking-wide">
              Our Pest Control Services
            </h3>
            <p className="text-xs text-emerald-100/90 mt-0.5">
              Select a service to view specialized treatment details
            </p>
          </div>

          <nav className="p-2 space-y-1" aria-label="Services List">
            {SERVICES.map((service) => {
              const isActive = service.slug === activeSlug;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveSlug(service.slug)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0D4F21] text-white shadow-md"
                      : "text-gray-700 hover:bg-emerald-50 hover:text-[#0D4F21]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        isActive
                          ? "bg-amber-400 text-gray-950"
                          : "bg-emerald-100 text-[#0D4F21]"
                      }`}
                    >
                      <ServiceIcon id={service.id} className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block leading-tight">{service.name}</span>
                      <span
                        className={`text-[11px] font-medium ${
                          isActive ? "text-emerald-200" : "text-[#16A34A]"
                        }`}
                      >
                        {service.tamilName}
                      </span>
                    </div>
                  </div>

                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                      isActive ? "text-amber-300 translate-x-1" : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Widget 2: Fast Helpline & WhatsApp */}
        <div className="rounded-2xl border border-emerald-200 bg-[#F4F9F5] p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0D4F21] text-amber-300">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Need Fast Inspection?
              </p>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-lg font-extrabold text-[#B91C1C] hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            Direct helpline open {SITE.hours}. Our technicians provide prompt same-day inspections across Chennai.
          </p>

          <a
            href={`https://wa.me/${SITE.whatsappNumber}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#20ba5a] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-4 w-4 text-white" />
            Quick WhatsApp Booking
          </a>
        </div>

        {/* Widget 3: Quality Guarantee Badge */}
        <div className="rounded-2xl bg-[#082E13] text-white p-5 border border-emerald-800 space-y-3">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <ShieldCheck className="h-5 w-5" />
            <span>5+ Years Termite Guarantee</span>
          </div>
          <p className="text-xs text-emerald-100/90 leading-relaxed">
            Every anti-termite treatment comes with an official warranty certificate for total peace of mind.
          </p>
        </div>
      </aside>

      {/* Right Main Content Area: Active Service Detail */}
      <main className="lg:col-span-8 space-y-8">
        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
          {/* Main Treatment Banner Photo */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-gray-100">
            <Image
              src={activeService.image}
              alt={`${activeService.name} treatment by Eden Pest Control`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {activeService.badge && (
                <span className="rounded-full bg-amber-400 px-3.5 py-1 text-xs font-extrabold text-gray-950 shadow-md">
                  {activeService.badge}
                </span>
              )}
              <span className="rounded-full bg-[#0D4F21]/90 backdrop-blur px-3.5 py-1 text-xs font-bold text-white shadow-md border border-white/20">
                {activeService.category}
              </span>
            </div>

            <div className="absolute bottom-5 inset-x-6 text-white">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold drop-shadow">
                {activeService.name}
              </h2>
              <p className="text-sm sm:text-base font-semibold text-amber-300 mt-1">
                {activeService.tamilName}
              </p>
            </div>
          </div>

          {/* Treatment Content Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-[#0D4F21] mb-2">
                Overview &amp; Eradication Procedure
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {activeService.fullDesc}
              </p>
            </div>

            {/* Methodology Steps Grid */}
            <div className="rounded-2xl bg-[#F4F9F5] border border-emerald-100 p-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D4F21]">
                <Sparkles className="h-4 w-4 text-[#16A34A]" />
                <span>Standard Treatment Methodology</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.methods.map((method, idx) => (
                  <div
                    key={method}
                    className="flex items-start gap-2.5 rounded-xl bg-white p-3.5 border border-emerald-100 text-xs sm:text-sm text-gray-800"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-[#0D4F21] font-bold text-[11px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Eden for this Service */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-gray-200 p-4">
                <Shield className="h-5 w-5 text-[#0D4F21] mb-2" />
                <h4 className="font-bold text-sm text-gray-900">Warranty</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {activeService.warranty}
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <CheckCircle2 className="h-5 w-5 text-[#16A34A] mb-2" />
                <h4 className="font-bold text-sm text-gray-900">Safety First</h4>
                <p className="text-xs text-gray-600 mt-1">
                  Child, elder &amp; pet friendly odorless formulation
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <Clock className="h-5 w-5 text-amber-600 mb-2" />
                <h4 className="font-bold text-sm text-gray-900">Target Spaces</h4>
                <p className="text-xs text-gray-600 mt-1">
                  {activeService.safeFor}
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-600">
                <span className="font-bold text-gray-900">Have questions?</span> Call us at{" "}
                <a href={`tel:${SITE.phoneRaw}`} className="font-bold text-[#B91C1C] hover:underline">
                  {SITE.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#20ba5a] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4 text-white" />
                  Book via WhatsApp
                </a>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0D4F21] px-5 py-3 text-sm font-bold text-white shadow hover:bg-[#082E13] transition-colors"
                >
                  <Phone className="h-4 w-4 text-amber-300" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

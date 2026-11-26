"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { SERVICES, SITE } from "@/data/site";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesCatalog() {
  const [filter, setFilter] = useState<
    "All" | "Specialized" | "Residential & Commercial"
  >("All");

  const filtered =
    filter === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === filter);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {(["All", "Specialized", "Residential & Commercial"] as const).map(
          (tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                filter === tab
                  ? "bg-[#0D4F21] text-white shadow-md scale-105"
                  : "bg-emerald-50 text-[#0D4F21] hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              {tab === "All" ? "All Services (7)" : tab}
            </button>
          )
        )}
      </div>

      {/* Service Detail Cards with Rich Imagery */}
      <div className="space-y-8">
        {filtered.map((service) => {
          const waText = encodeURIComponent(
            `Hello ${SITE.name}, I would like to book ${service.name} (${service.tamilName}).`
          );
          return (
            <article
              key={service.id}
              id={service.slug}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Service Image Section */}
                <div className="lg:col-span-5 relative min-h-[240px] sm:min-h-[280px] lg:min-h-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={`${service.name} treatment by Eden Pest Control`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                  {service.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-extrabold text-gray-950 shadow-md">
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 lg:hidden text-white font-serif font-bold text-xl drop-shadow">
                    {service.name}
                  </div>
                </div>

                {/* Service Content Section */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-11 w-11 rounded-xl bg-emerald-50 text-[#0D4F21] flex items-center justify-center shrink-0 border border-emerald-100 group-hover:bg-[#0D4F21] group-hover:text-white transition-colors">
                          <ServiceIcon id={service.id} className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-[#0D4F21] transition-colors">
                            {service.name}
                          </h2>
                          <p className="text-xs sm:text-sm font-semibold text-[#16A34A]">
                            {service.tamilName}
                          </p>
                        </div>
                      </div>

                      {service.badge && (
                        <span className="hidden lg:inline-block rounded-full bg-amber-100 border border-amber-300 px-3 py-0.5 text-xs font-bold text-amber-900">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="rounded-xl bg-[#F4F9F5] border border-emerald-100 p-4 space-y-2.5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D4F21]">
                        Treatment Methodology &amp; Highlights:
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700">
                        {service.methods.map((method) => (
                          <li key={method} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                            <span>{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Warranty */}
                  <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0D4F21]">
                      <ShieldCheck className="h-4 w-4 text-[#16A34A]" />
                      <span>{service.warranty}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600 font-medium truncate">
                        {service.safeFor}
                      </span>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <a
                        href={`https://wa.me/${SITE.whatsappNumber}?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#20ba5a] transition-transform hover:scale-105"
                      >
                        <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white">
                          <path d="M16 2a13.9 13.9 0 0 0-12 21L2 30l7.2-1.9A13.9 13.9 0 1 0 16 2zm0 25.5c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-4.9 1.3 1.3-4.7-.3-.5A11.6 11.6 0 1 1 27.6 16c0 6.4-5.2 11.5-11.6 11.5zm6.4-8.6c-.3-.2-2.1-1-2.4-1.1-.3-.1-.6-.2-.8.2s-1 1.1-1.2 1.3-.4.2-.7.1a9.2 9.2 0 0 1-5.1-4.5c-.2-.4 0-.6.1-.8.2-.2.3-.4.5-.6s.2-.3.3-.5a.8.8 0 0 0 0-.7c-.1-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.6 7.6 0 0 0 1.6 4 17.5 17.5 0 0 0 6.7 5.9c3.9 1.7 3.9 1.1 4.6 1.1.7 0 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.7-.4z" />
                        </svg>
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${SITE.phoneRaw}`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#0D4F21] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#082E13] transition-colors"
                      >
                        <Phone className="h-4 w-4 text-amber-300" />
                        Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ServiceIcon } from "./ServiceIcon";
import { SERVICES, SITE } from "@/data/site";

export function CuratorServicesGrid() {
  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* Section Header on White Background */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1 text-xs font-black uppercase tracking-wider text-[#0D4F21]">
            Professional Pest Treatments
          </span>
          <h2 className="mt-3 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
            Specialized Pest Management
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
            Targeted eradication and long-lasting barrier solutions for homes,
            apartments, and commercial spaces in Chennai.
          </p>
        </div>

        {/* 3-Column Card Grid matching user uploaded Image 3 on White Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const waText = encodeURIComponent(
              `Hello ${SITE.name}, I would like to book ${service.name} (${service.tamilName}).`
            );
            return (
              <div
                key={service.id}
                data-widget-box="true"
                className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl border border-gray-200 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-gray-50">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {service.badge && (
                      <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-black text-gray-950 shadow-md">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Centered Overlapping Circular Emblem Badge (As in Image 3) */}
                  <div className="-mt-8 relative z-10 flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D4F21] p-1 text-white shadow-xl ring-4 ring-white group-hover:scale-110 transition-transform">
                      <div className="flex h-full w-full items-center justify-center rounded-full border border-emerald-400/40 bg-[#082E13] text-amber-300">
                        <ServiceIcon id={service.id} className="h-7 w-7" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="pt-3 pb-5 px-6 text-center space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0D4F21] group-hover:text-[#16A34A] transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs font-bold text-[#16A34A]">
                      {service.tamilName}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="px-6 pb-6 pt-2">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-gray-500">
                      {service.warranty}
                    </span>
                    <a
                      href={`https://wa.me/${SITE.whatsappNumber}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2 text-xs font-bold text-white shadow hover:bg-[#20ba5a] transition-transform hover:scale-105"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-white" />
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

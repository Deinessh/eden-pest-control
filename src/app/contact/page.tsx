import React from "react";
import type { Metadata } from "next";
import { Phone, MapPin, Clock, Navigation, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";
import { MapEmbed } from "@/components/MapEmbed";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Location Map",
  description:
    "Contact Eden Pest Control Services at 11, Flat No. 4, Thirumalai Appan Street, Cholambedu Salai, Netaji Nagar, Thirumullaivoyal, Chennai 600062.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Contact & Map"
        title="Contact Eden Pest Control Services"
        tamilSubtitle="WhatsApp மூலம் எளிதாக முன்பதிவு செய்யுங்கள்"
      />

      <section className="py-14 sm:py-16 bg-[#F4F9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-red-50 text-[#B91C1C] flex items-center justify-center mb-3">
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Helpline &amp; Direct Phone
              </h2>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="mt-1 block text-lg font-extrabold text-[#B91C1C] hover:underline"
              >
                {SITE.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-gray-600">
                Direct assistance for immediate inspections
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 text-[#0D4F21] flex items-center justify-center mb-3">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Working Hours
              </h2>
              <p className="mt-1 text-base font-extrabold text-gray-900">
                {SITE.hoursShort}
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Open all 7 days including weekends &amp; holidays
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Service Guarantee
              </h2>
              <p className="mt-1 text-base font-extrabold text-gray-900">
                5+ Years Written Warranty
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Anti-Termite Treatment (ATT) guarantee certificate
              </p>
            </div>
          </div>

          {/* Office Address Bar */}
          <div className="rounded-2xl bg-white p-6 border border-emerald-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-[#0D4F21] flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Office Location</h3>
                <p className="text-sm text-gray-600 mt-0.5">{SITE.address}</p>
              </div>
            </div>
            <a
              href={SITE.mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0D4F21] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#082E13] transition-colors shrink-0"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Booking Form & Interactive Pinned Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6">
              <QuoteForm />
            </div>
            <div className="lg:col-span-6 space-y-4">
              <MapEmbed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

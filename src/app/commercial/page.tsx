import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Commercial Pest Control",
  description:
    "Commercial & Industrial Pest Control AMC in Chennai for offices, restaurants, hotels, warehouses, factories, and retail shops.",
};

const SECTORS = [
  {
    title: "Corporate Offices & IT Parks",
    image: "/images/commercial-office.jpg",
    desc: "Discreet after-hours cockroach, rodent, and termite protection keeping workstations, server rooms, and pantries spotless.",
  },
  {
    title: "Restaurants, Hotels & Bakeries",
    image: "/images/commercial-restaurant.jpg",
    desc: "Food-safe gel baiting, drain flushing, and fly/rodent control supporting strict kitchen hygiene and FSSAI audits.",
  },
  {
    title: "Warehouses & Factories",
    image: "/images/commercial-warehouse.jpg",
    desc: "Heavy-duty rodent bait stations, perimeter misting, and structural anti-termite barriers for raw material storage & logistics.",
  },
  {
    title: "Retail Shops & Showrooms",
    image: "/images/commercial-retail.jpg",
    desc: "Keep display shelves, false ceilings, and stockrooms clean from rats, ants, lizards, and crawling insects.",
  },
  {
    title: "Clinics & Hospitals",
    image: "/images/commercial-clinic.jpg",
    desc: "Low-odor, hospital-safe pest management protocols scheduled around patient care hours and hygiene mandates.",
  },
  {
    title: "Schools, Hostels & Institutions",
    image: "/images/commercial-institution.jpg",
    desc: "Campus-wide mosquito fogging, bed bug eradication for hostels, and non-toxic classroom treatments.",
  },
];

export default function CommercialPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Commercial"
        title="Commercial & Industrial Pest Control"
        tamilSubtitle="அலுவலகம் • கடை • உணவகம் • தொழிற்சாலை — Annual Maintenance Contracts (AMC)"
        description="Protect your brand reputation, inventory, and workplace hygiene with scheduled commercial pest control across Chennai."
      />

      <section className="py-14 sm:py-16 bg-[#F4F9F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-extrabold text-gray-900">
              Industries We Protect Across Chennai
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Customized Monthly, Quarterly, and Annual Maintenance Contracts
              (AMC) with flexible scheduling between 10:00 AM and 10:00 PM.
            </p>
          </div>

          {/* Replaced icons with real photographs for each commercial sector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
            {SECTORS.map((sector) => (
              <div
                key={sector.title}
                data-widget-box="true"
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#0D4F21] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {sector.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#0D4F21]">AMC Available</span>
                    <a
                      href={`https://wa.me/${SITE.whatsappNumber}?text=Hello%20Eden%20Pest%20Control%2C%20I%20would%20like%20a%20commercial%20AMC%20quote%20for%20${encodeURIComponent(
                        sector.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#16A34A] hover:underline"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Inquire AMC
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#0D4F21] text-white p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block rounded-full bg-amber-400/20 border border-amber-400/40 px-3 py-1 text-xs font-bold text-amber-300">
                Commercial AMC Benefits
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Why Businesses Trust Eden Pest Control Services
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-emerald-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300 shrink-0" />
                  Scheduled preventive inspections
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300 shrink-0" />
                  Odorless &amp; non-disruptive application
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300 shrink-0" />
                  Emergency call-out support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300 shrink-0" />
                  Audit &amp; hygiene compliance records
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#991B1B] transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                Call {SITE.phoneDisplay} for AMC Quote
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-gray-950 hover:bg-amber-300 transition-transform hover:scale-105"
              >
                Book Inspection &amp; Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

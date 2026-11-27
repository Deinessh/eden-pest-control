import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Phone,
  Sparkles,
  Zap,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Residential Pest Control",
  description:
    "Safe, odorless residential pest control for apartments, villas, and individual homes in Chennai. Specialist Termite Control with 5+ Years Guarantee.",
};

const RESIDENTIAL_PLANS = [
  {
    title: "Post-Construction Anti-Termite (ATT)",
    badge: "5+ Years Guarantee",
    image: "/images/termite-inspection.jpg",
    desc: "Protects existing homes, wooden door frames, modular kitchens, and wardrobes via precision Drill-Fill-Seal perimeter barrier.",
    points: [
      "Floor-wall junction drilling & chemical injection",
      "Woodwork & cabinet protective infusion",
      "Resealed neatly with matching white/colored cement",
      "Written 5+ Years Guarantee Certificate",
    ],
  },
  {
    title: "Pre-Construction Soil Termite Barrier",
    badge: "New Homes & Villas",
    image: "/images/commercial-warehouse.jpg",
    desc: "Stops subterranean termites before your house is built by treating foundation trenches, plinth beams, and soil beds.",
    points: [
      "Stage-by-stage site coordination with builders",
      "IS-standard termiticide barrier coverage",
      "Prevents future structural & wood damage",
      "Long-term peace of mind for new homeowners",
    ],
  },
  {
    title: "Home General Pest Shield",
    badge: "Family & Pet Safe",
    image: "/images/cockroach-service.jpg",
    desc: "Complete treatment for cockroaches, ants, lizards, and spiders across kitchens, bathrooms, balconies, and utility areas.",
    points: [
      "Odorless herbal gel baiting in kitchen cabinets",
      "No need to empty utensils or leave home",
      "Drain & sink pipeline flushing",
      "Safe around infants, elders, and pets",
    ],
  },
];

export default function ResidentialPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="Residential"
        title="Residential Pest Control"
        tamilSubtitle={`${SITE.tamilMotto} — Safe Protection for Apartments, Villas & Homes`}
        description="Keep your family safe and your wooden interiors termite-free with odorless, child- and pet-friendly residential treatments."
      />

      <section className="py-14 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-[#0D4F21] border border-emerald-200">
                <Home className="h-3.5 w-3.5" />
                For Homes, Flats &amp; Villas
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-gray-900 leading-tight">
                Clean, Odorless &amp; Guaranteed Home Protection
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Your home should be a sanctuary — free from destructive
                termites, kitchen cockroaches, disease-carrying mosquitoes, and
                bed bugs. Our residential specialists arrive on time, use
                low-odor approved formulations, and leave your home spotless.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 rounded-xl bg-[#F4F9F5] p-3.5 border border-emerald-100">
                  <HeartHandshake className="h-5 w-5 text-[#16A34A] shrink-0" />
                  <span className="text-sm font-bold text-gray-800">
                    Safe for Kids &amp; Pets
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-[#F4F9F5] p-3.5 border border-emerald-100">
                  <ShieldCheck className="h-5 w-5 text-[#B91C1C] shrink-0" />
                  <span className="text-sm font-bold text-gray-800">
                    5+ Years Termite Warranty
                  </span>
                </div>
              </div>
            </div>

            {/* Clean, Odorless & Guaranteed Home Protection Image (User Image 2) */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-100">
                <Image
                  src="/images/residential-hero.jpg"
                  alt="Professional technician consulting homeowner for residential pest protection"
                  width={900}
                  height={560}
                  priority
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESIDENTIAL_PLANS.map((plan) => (
              <div
                key={plan.title}
                data-widget-box="true"
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={plan.image}
                      alt={plan.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-gray-950 shadow">
                      {plan.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#0D4F21] transition-colors">
                      {plan.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {plan.desc}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {plan.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                        >
                          <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-gray-100 flex gap-2">
                    <a
                      href={SITE.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-3.5 py-2.5 text-xs font-bold text-white hover:bg-[#20ba5a] transition-transform hover:scale-105 shadow-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4 text-white" />
                      Book on WhatsApp
                    </a>
                    <a
                      href={`tel:${SITE.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0D4F21] px-3.5 py-2.5 text-xs font-bold text-white hover:bg-[#082E13] transition-colors"
                    >
                      <Phone className="h-4 w-4 text-amber-300" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="h-6 w-6 text-[#0D4F21] shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  1 BHK, 2 BHK, 3 BHK &amp; Independent Villa Packages
                </h3>
                <p className="text-sm text-gray-600">
                  Call {SITE.phoneDisplay} or WhatsApp us for an instant custom
                  quote based on your property layout.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-[#B91C1C] px-5 py-3 text-sm font-bold text-white hover:bg-[#991B1B] shrink-0 shadow-md transition-transform hover:scale-105"
            >
              <Zap className="h-4 w-4" />
              Get Free Home Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

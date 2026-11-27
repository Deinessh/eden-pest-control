import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { HeroSlider } from "@/components/HeroSlider";
import { SERVICES, SERVICE_AREAS, TRUST_PILLARS } from "@/data/site";
import { ServiceIcon } from "@/components/ServiceIcon";
import { MapEmbed } from "@/components/MapEmbed";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Dynamic Hero Section with 4 Sliding Images & Animated Bugs */}
      <HeroSlider />

      {/* Services Section with Distinct Treatment Photos */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4F21] border border-emerald-200">
                Complete Pest Protection
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-extrabold text-gray-900">
                Specialized Treatments for Every Pest
              </h2>
              <p className="mt-2 text-gray-600 max-w-2xl text-sm sm:text-base">
                Targeted, government-approved solutions for termites, crawling
                insects, rodents, and flying pests across Chennai.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#B91C1C] hover:text-[#991B1B] shrink-0"
            >
              Explore Full Treatment Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Service Cards Grid with Rich Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {service.badge && (
                      <span className="absolute top-3 left-3 rounded-full bg-amber-400 px-3 py-0.5 text-[11px] font-extrabold text-gray-950 shadow">
                        {service.badge}
                      </span>
                    )}
                    <div className="absolute bottom-3 right-3 h-9 w-9 rounded-xl bg-white/95 text-[#0D4F21] flex items-center justify-center shadow">
                      <ServiceIcon id={service.id} className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 group-hover:text-[#0D4F21] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#16A34A]">
                        {service.tamilName}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold">
                    <span className="text-[#0D4F21]">{service.warranty}</span>
                    <Link
                      href={`/services`}
                      className="inline-flex items-center gap-1 text-[#B91C1C] hover:text-[#991B1B] font-bold"
                    >
                      Book Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential & Commercial Sectors */}
      <section className="py-16 bg-[#F4F9F5] border-y border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900">
              Tailored Protection for Every Property
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Dedicated service teams for residential homes and audit-ready
              commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-2xl bg-white border border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-emerald-950">
                  <Image
                    src="/images/home-residential-pest-control.jpg"
                    alt="Residential Pest Control - Safe for Homes, Flats & Villas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-emerald-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                    Homes, Flats &amp; Villas
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow">
                      Residential Pest Control
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Protecting flats, apartments, independent villas, and new home
                    constructions. Odorless kitchen gel baiting, bed bug deep
                    steaming/spray, and 5+ Year anti-termite barriers.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Child, elder, and pet-friendly formulations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Zero utensil shifting or kitchen vacating needed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Written 5+ Years Termite Guarantee Certificate
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <Link
                  href="/residential"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0D4F21] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#082E13] transition-colors"
                >
                  Explore Residential Plans
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white border border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-emerald-950">
                  <Image
                    src="/images/home-commercial-pest-control.jpg"
                    alt="Commercial & Industrial Pest Control AMC in Chennai"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-red-700 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                    Audit-Ready AMC Protection
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-2xl font-bold text-white drop-shadow">
                      Commercial &amp; Industrial Pest Control
                    </h3>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Scheduled Annual Maintenance Contracts (AMC) for corporate
                    offices, restaurants, bakeries, warehouses, retail shops, and
                    factories throughout Chennai.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Flexible after-hours &amp; weekend service (10AM – 10PM)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Discreet baiting &amp; hygiene compliance reports
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                      Priority emergency call-out support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="px-6 sm:px-7 pb-6 sm:pb-7">
                <Link
                  href="/commercial"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#B91C1C] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#991B1B] transition-colors"
                >
                  Explore Commercial AMC
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Eden Trust Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                <Sparkles className="h-3.5 w-3.5" />
                Why Choose Eden
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                Don&apos;t Wait For Termite Damage — Protect Your Property Today
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Termites silently destroy wooden doors, modular kitchens, and
                foundations from the inside out. With 15+ years of specialized
                experience, Eden Pest Control Services delivers total colony
                eradication backed by our 5+ Years Written Guarantee.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TRUST_PILLARS.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-gray-200 bg-gray-50/70 p-4 transition-colors hover:border-emerald-300"
                  >
                    <h3 className="font-bold text-sm text-[#0D4F21]">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-[#16A34A] mt-0.5">
                      {pillar.tamil}
                    </p>
                    <p className="mt-1.5 text-xs text-gray-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#0D4F21] px-5 py-3 text-sm font-bold text-white hover:bg-[#082E13] transition-colors"
                >
                  Schedule Site Inspection
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-5 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  About Our Team
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-emerald-100">
                <Image
                  src="/images/why-choose-eden.jpg"
                  alt="Eden Pest Control certified inspection in modern living room"
                  width={900}
                  height={540}
                  className="w-full h-64 sm:h-80 object-cover"
                />
              </div>

              <div className="rounded-2xl bg-[#0D4F21] p-6 text-white">
                <h3 className="font-bold text-base text-amber-300 mb-3">
                  Service Coverage Across Chennai &amp; Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-emerald-900/80 border border-emerald-700 px-3 py-1 text-xs font-medium text-emerald-100"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Pinned Map Section (Renamed to Our Location in Thirumullaivoyal as requested) */}
      <section className="py-14 sm:py-18 bg-[#F4F9F5] border-t border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center max-w-xl mx-auto">
            <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-[#0D4F21]">
              Location &amp; Service Radius
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-extrabold text-gray-900">
              Our Location in Thirumullaivoyal
            </h2>
          </div>

          <div className="w-full">
            <MapEmbed />
          </div>
        </div>
      </section>
    </div>
  );
}

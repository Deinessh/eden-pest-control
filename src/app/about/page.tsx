import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { SITE, TRUST_PILLARS } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Eden Pest Control Services in Thirumullaivoyal, Chennai — 15+ years of experience, 5+ years termite guarantee, and eco-safe pest management.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Detailed Site Inspection",
    desc: "Our trained pest specialists inspect wooden fixtures, moisture zones, kitchen crevices, drains, and entry points to identify the exact species and nesting harborage.",
  },
  {
    step: "02",
    title: "Eco-Safe Targeted Treatment",
    desc: "We apply government-approved, odorless formulations using precision sprayers, herbal gels, or Drill-Fill-Seal termite chemical barriers.",
  },
  {
    step: "03",
    title: "Colony-Level Eradication",
    desc: "Rather than temporary surface spraying, our treatments destroy the underground queen and hidden colonies to permanently break breeding cycles.",
  },
  {
    step: "04",
    title: "Written Warranty & Support",
    desc: "Backed by our 5+ Years Written Termite Guarantee and 7-day customer support open from 10:00 AM to 10:00 PM.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        breadcrumb="About Us"
        title="About Eden Pest Control Services"
        tamilSubtitle={`${SITE.tamilMotto} — 15+ Years of Trusted Protection`}
        description="We deliver specialist termite control and complete residential & commercial pest management across Chennai with government-approved safe chemicals."
      />

      {/* Story & Heritage */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0D4F21] border border-emerald-200">
                Who We Are
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-gray-900 leading-tight">
                Chennai&apos;s Specialist Termite &amp; Complete Pest Protection
                Team
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Headquartered in Thirumullaivoyal, Chennai,{" "}
                <strong className="text-gray-900">{SITE.name}</strong> has
                earned the trust of thousands of homeowners and businesses
                through meticulous inspections, certified pest management, and
                uncompromising safety.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                With over{" "}
                <strong className="text-[#0D4F21]">
                  15+ years of hands-on expertise
                </strong>
                , our specialists are equipped to address the specific pest
                dynamics of Chennai&apos;s tropical coastal climate. Every
                treatment plan is customized to be ruthlessly effective on
                termites, cockroaches, rodents, mosquitoes, and bed bugs while
                remaining 100% gentle and safe for children, seniors, and
                household pets.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-[#F4F9F5] p-4 border border-emerald-100">
                  <span className="block font-serif text-2xl font-extrabold text-[#0D4F21]">
                    15+
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    Years of Field Experience
                  </span>
                </div>
                <div className="rounded-xl bg-[#F4F9F5] p-4 border border-emerald-100">
                  <span className="block font-serif text-2xl font-extrabold text-[#B91C1C]">
                    5+ Years
                  </span>
                  <span className="text-xs font-semibold text-gray-700">
                    Termite Protection Guarantee
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-emerald-100">
                <Image
                  src="/images/hero-technician.jpg"
                  alt="Eden Pest Control Services team in Chennai"
                  width={900}
                  height={620}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-14 bg-[#F4F9F5] border-y border-emerald-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 border border-emerald-100 shadow-sm"
              >
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-[#0D4F21] flex items-center justify-center mb-4">
                  {idx === 0 && <ShieldCheck className="h-5 w-5" />}
                  {idx === 1 && <Award className="h-5 w-5" />}
                  {idx === 2 && <HeartHandshake className="h-5 w-5" />}
                  {idx === 3 && <Clock className="h-5 w-5" />}
                </div>
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs font-semibold text-[#16A34A] mt-0.5">
                  {item.tamil}
                </p>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl font-extrabold text-gray-900">
              Our 4-Step Scientific Treatment Process
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">
              Clean, transparent execution from initial inspection to final
              warranty certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-gray-200 p-6 bg-white relative hover:border-emerald-300 transition-colors"
              >
                <span className="inline-block font-serif text-3xl font-extrabold text-[#B91C1C]/25 mb-2">
                  {item.step}
                </span>
                <h3 className="font-bold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Consultation Banner */}
          <div className="mt-12 rounded-2xl bg-[#0D4F21] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold">
                Book a Site Inspection Today
              </h3>
              <p className="mt-1 text-sm text-emerald-100">
                Open {SITE.hours}. Serving Thirumullaivoyal, Ambattur, Avadi
                &amp; all of Chennai.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#B91C1C] px-5 py-3 text-sm font-bold text-white hover:bg-[#991B1B] transition-transform hover:scale-105"
              >
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-gray-950 hover:bg-amber-300 transition-transform hover:scale-105"
              >
                <CheckCircle2 className="h-4 w-4" />
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

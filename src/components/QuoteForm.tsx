"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SERVICES, SITE } from "@/data/site";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyType, setPropertyType] = useState("Residential Home / Flat");
  const [service, setService] = useState(SERVICES[0].name);
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      `Hello ${SITE.name},`,
      `I would like to book a free pest inspection / quote:`,
      `• Name: ${name}`,
      `• Phone: ${phone}`,
      `• Property: ${propertyType}`,
      `• Service Needed: ${service}`,
      location ? `• Area/Address: ${location}` : "",
      notes ? `• Details: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-2xl bg-white border border-emerald-100 shadow-xl p-6 sm:p-8">
      <div className="mb-6">
        <span className="inline-block rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-bold text-[#0D4F21] border border-emerald-200">
          Free Site Inspection
        </span>
        <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">
          Book Your Pest Control Service
        </h3>
      </div>

      {submitted && (
        <div className="mb-5 flex items-start gap-2.5 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-900">
          <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">WhatsApp Booking Prepared!</p>
            <p className="text-xs text-emerald-800 mt-0.5">
              If WhatsApp didn&apos;t open automatically, please tap &ldquo;Send
              Booking via WhatsApp&rdquo; below.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eden-name"
              className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
            >
              Your Name *
            </label>
            <input
              id="eden-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rajesh Kumar"
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label
              htmlFor="eden-phone"
              className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
            >
              Mobile / WhatsApp *
            </label>
            <input
              id="eden-phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98XXX XXXXX"
              className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="eden-property"
              className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
            >
              Property Type
            </label>
            <select
              id="eden-property"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <option>Residential Home / Flat</option>
              <option>Independent Villa / Bungalow</option>
              <option>Commercial Office / Shop</option>
              <option>Restaurant / Hotel / Kitchen</option>
              <option>Warehouse / Factory</option>
              <option>New Construction (Pre-Termite)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="eden-service"
              className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
            >
              Pest Service Needed
            </label>
            <select
              id="eden-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Complete General Pest Control">
                Complete General Pest Control
              </option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="eden-location"
            className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
          >
            Area / Address in Chennai
          </label>
          <input
            id="eden-location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Thirumullaivoyal, Ambattur, Anna Nagar..."
            className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        <div>
          <label
            htmlFor="eden-notes"
            className="block text-xs font-bold uppercase tracking-wide text-gray-700 mb-1.5"
          >
            Pest Problem Details (Optional)
          </label>
          <textarea
            id="eden-notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Tell us about affected areas, square footage, or preferred inspection time..."
            className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-sm text-gray-900 focus:border-[#16A34A] focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </div>

        {/* Pure single WhatsApp booking button (no arrow icon, no Call button) */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm sm:text-base font-bold text-white shadow-md hover:bg-[#20ba5a] transition-all hover:scale-[1.01] cursor-pointer"
          >
            <WhatsAppIcon className="h-5 w-5 text-white" />
            Send Booking via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}

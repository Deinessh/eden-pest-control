"use client";

import React from "react";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE } from "@/data/site";

export function FloatingActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
      aria-label="Quick Contact Floating Buttons"
    >
      {/* Real WhatsApp Icon Floating Button */}
      <a
        href={SITE.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-950/25 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl"
      >
        <WhatsAppIcon className="h-8 w-8 text-white drop-shadow-sm" />
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10 opacity-75" />
      </a>

      {/* Floating Call Button */}
      <a
        href={`tel:${SITE.phoneRaw}`}
        aria-label={`Call Eden Pest Control ${SITE.phoneDisplay}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#B91C1C] text-white shadow-xl shadow-red-950/25 transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl"
      >
        <Phone className="h-6 w-6 stroke-[2.4] text-white" />
        <span className="absolute -inset-1 rounded-full bg-[#B91C1C]/40 animate-pulse -z-10" />
      </a>
    </div>
  );
}

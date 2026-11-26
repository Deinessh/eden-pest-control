import React from "react";
import { SITE } from "@/data/site";

interface MapEmbedProps {
  compact?: boolean;
  className?: string;
}

export function MapEmbed({ compact = false, className = "" }: MapEmbedProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-emerald-200 bg-white shadow-lg transition-shadow hover:shadow-xl w-full ${
        compact ? "h-[360px]" : "h-[460px] sm:h-[520px]"
      } ${className}`}
    >
      {/* Pure, expansive Map without headers or footers as requested */}
      <iframe
        title="Eden Pest Control Services Pinned Location"
        src={SITE.mapEmbedUrl}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

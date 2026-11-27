import React from "react";
import { SITE } from "@/data/site";
import { MapPin, ExternalLink } from "lucide-react";

interface MapEmbedProps {
  compact?: boolean;
  className?: string;
  showLink?: boolean;
}

export function MapEmbed({ compact = false, className = "", showLink = true }: MapEmbedProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-emerald-200 bg-white shadow-lg transition-shadow hover:shadow-xl w-full group ${className}`}
    >
      <div
        className={`w-full ${
          compact ? "h-[360px]" : "h-[460px] sm:h-[520px]"
        }`}
      >
        <iframe
          title="Eden Pest Control Services Pinned Location"
          src={SITE.mapEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>

      {showLink && (
        <div className="absolute bottom-3 right-3 z-10">
          <a
            href={SITE.mapDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-[#0D4F21] text-xs font-semibold rounded-lg shadow-md border border-emerald-200 transition-all hover:shadow-lg backdrop-blur-sm"
          >
            <MapPin className="h-3.5 w-3.5 text-emerald-600" />
            <span>Open in Google Maps</span>
            <ExternalLink className="h-3 w-3 text-gray-400" />
          </a>
        </div>
      )}
    </div>
  );
}

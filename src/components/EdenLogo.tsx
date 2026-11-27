import React from "react";
import Image from "next/image";

interface EdenLogoProps {
  compact?: boolean;
  variant?: "header" | "footer" | "default";
  className?: string;
}

export function EdenLogo({
  compact = false,
  variant = "default",
  className = "",
}: EdenLogoProps) {
  if (variant === "header") {
    return (
      <div
        className={`relative h-16 sm:h-20 w-64 sm:w-80 transition-transform duration-200 hover:scale-[1.02] ${className}`}
      >
        <Image
          src="/images/eden-logo.png"
          alt="EDEN PEST CONTROL SERVICES - Specialist Termite Control"
          fill
          priority
          sizes="(max-width: 768px) 256px, 320px"
          className="object-contain object-left"
        />
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div
        className={`relative h-14 sm:h-16 w-full max-w-[260px] transition-transform duration-200 hover:scale-[1.02] ${className}`}
      >
        <Image
          src="/images/eden-logo-footer.png"
          alt="EDEN PEST CONTROL SERVICES - Specialist Termite Control"
          fill
          priority
          sizes="(max-width: 768px) 220px, 260px"
          className="object-contain object-left drop-shadow-md"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${
        compact ? "h-11 w-36 sm:h-12 sm:w-40" : "h-14 w-48 sm:h-16 sm:w-56"
      } ${className}`}
    >
      <Image
        src="/images/eden-logo.png"
        alt="EDEN PEST CONTROL SERVICES - Specialist Termite Control"
        fill
        priority
        sizes="(max-width: 768px) 160px, 220px"
        className="object-contain object-left"
      />
    </div>
  );
}

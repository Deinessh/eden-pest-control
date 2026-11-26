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
        className={`relative h-12 sm:h-14 w-52 sm:w-60 overflow-hidden ${className}`}
      >
        <Image
          src="/images/eden-logo.png"
          alt="EDEN PEST CONTROL SERVICES"
          fill
          sizes="240px"
          className="object-contain object-left"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${
        compact ? "h-11 w-44 sm:h-12 sm:w-48" : "h-14 w-56 sm:h-16 sm:w-64"
      } ${className}`}
    >
      <Image
        src="/images/eden-logo.png"
        alt="EDEN PEST CONTROL SERVICES - Specialist Termite Control"
        fill
        priority
        sizes="(max-width: 768px) 180px, 260px"
        className="object-contain object-left"
      />
    </div>
  );
}

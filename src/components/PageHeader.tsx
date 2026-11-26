import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  tamilSubtitle?: string;
  description?: string;
  breadcrumb: string;
}

export function PageHeader({
  title,
  tamilSubtitle,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#082E13] text-white min-h-[220px] sm:min-h-[250px] flex flex-col justify-center py-10 sm:py-14">
      {/* Background Architectural Photo with High Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/header-banner.jpg"
          alt="Eden Pest Control Protection Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        {/* Balanced gradient overlay maintaining text contrast while showcasing the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#082E13]/85 via-[#0D4F21]/75 to-[#082E13]/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-semibold text-emerald-200 mb-2"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-emerald-400" />
          <span className="text-amber-300">{breadcrumb}</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
          {title}
        </h1>
        {tamilSubtitle && (
          <p className="mt-1.5 text-base sm:text-lg font-semibold text-amber-300 drop-shadow">
            {tamilSubtitle}
          </p>
        )}
        {description && (
          <p className="mt-2.5 max-w-2xl text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

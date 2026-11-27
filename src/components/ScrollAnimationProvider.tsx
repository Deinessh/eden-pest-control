"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // Only execute on client and after hydration is 100% complete
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    // Delay initialization past the hydration cycle so React never flags a DOM mismatch
    const timer = setTimeout(() => {
      // Observe all content sections below the hero fold
      const targets = document.querySelectorAll(
        "section:not(.no-scroll-reveal), .scroll-reveal-item"
      );

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute("data-scroll-reveal", "visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.05,
        }
      );

      targets.forEach((el, index) => {
        // Skip hero top section to keep the initial fold instantly visible
        if (index === 0 && el.tagName.toLowerCase() === "section") {
          return;
        }

        const rect = el.getBoundingClientRect();
        // If already in initial viewport, mark visible without hiding
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.setAttribute("data-scroll-reveal", "visible");
        } else {
          el.setAttribute("data-scroll-reveal", "hidden");
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 120);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

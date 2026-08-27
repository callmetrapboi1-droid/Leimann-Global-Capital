"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
      );

      reveals.forEach((el) => observer.observe(el));

      return () => {
        reveals.forEach((el) => observer.unobserve(el));
      };
    } else {
      // Fallback for older browsers
      reveals.forEach((el) => el.classList.add("active"));
    }
  }, [pathname]);

  return null;
}

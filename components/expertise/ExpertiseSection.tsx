"use client";

import { useEffect } from "react";
import { expertiseData } from "@/data/expertise";
import ExpertiseCard from "./ExpertiseCard";
import { Shield } from "lucide-react";

export default function ExpertiseSection() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".interactive-glass-card");
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="expertise" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-surface">
      <div className="grid grid-cols-12 gap-gutter items-end mb-16">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-xs font-label-sm uppercase tracking-[0.25em] text-neutral-500">
              Core Disciplines & Fiduciary Mandates
            </span>
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 font-normal">
            Expertise in Multi-Generational Wealth & Real Estate.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl text-sm sm:text-base leading-relaxed font-light">
            We navigate complex global markets with an unwavering focus on absolute returns and risk mitigation, ensuring the longevity of private family estates through disciplined Swiss banking principles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item) => (
          <ExpertiseCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

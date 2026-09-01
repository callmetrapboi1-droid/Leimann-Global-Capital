"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function HomeHeritageSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section id="heritage-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto border-t border-secondary-container bg-surface overflow-hidden scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Alpine Visual with Zoom Effect */}
        <div className="md:col-span-6 reveal img-zoom-container">
          <div className="aspect-[4/3] overflow-hidden relative border border-secondary-container bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5R_bk1aHwmv7qdI6JX3gy6xlasDAqiRX1uSm1yXObOTpHXk1SL9zQX63qjNulpo-jHdgDDurUMNCQtuejUBaVUR_dihAexLP7t9xYGW7mrZfpbziD5Ioh6I9Jy6JAUPDqWFYTMPXLlThPcyrLNWblcCgWN-Zo1plIgpAkDM-AjxLXxABY5jzTZ4_Fy8aRRWYznaaFD_HjVSjdRfqWJEwlluPfqrWgxqE5f7EANn6-Ijob1pjzA"
              alt="Swiss Alpine Heritage & Generational Legacy"
              className="w-full h-full object-cover img-zoom opacity-70 contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Right Column: Heritage Narrative */}
        <div className="md:col-span-6 space-y-6 reveal">
          <div>
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              {t.heritage.badge}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
              {t.heritage.heading}
            </h2>
            <div className="w-12 h-px bg-gold/40"></div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {t.heritage.intro}
          </p>

          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {isTH
              ? "ความสัมพันธ์อันแน่นแฟ้นกับ ActivaSwiss AG Family Office เป็นเสาหลักที่ผสานความต่อเนื่องและการบริหารจัดการสินทรัพย์อย่างมีเสถียรภาพ เพื่อเปิดรับโอกาสใหม่ ๆ สำหรับคนรุ่นต่อไป"
              : isDE
              ? "Unsere Verbindung mit dem ActivaSwiss AG Family Office bildet das Fundament für Governance, Stabilität und generationenübergreifende Verantwortung beim Erschliessen neuer globaler Horizonte."
              : "Our foundational connection with ActivaSwiss AG provides governance, stability, and enduring stewardship as we expand opportunities across global markets."}
          </p>

          {/* CTA Link to Heritage Page */}
          <div className="pt-2">
            <Link
              href="/heritage"
              className="inline-flex items-center space-x-2 text-gold hover:text-gold-light font-label-md text-sm font-semibold group"
            >
              <span>{isTH ? "ค้นพบเรื่องราวของเรา (Discover Our Heritage →)" : isDE ? "Unsere Herkunft entdecken →" : "Discover Our Heritage →"}</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

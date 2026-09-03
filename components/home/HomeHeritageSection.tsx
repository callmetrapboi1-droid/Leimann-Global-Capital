"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HomeHeritageSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section
      id="heritage-summary"
      className="relative isolate w-full min-h-[580px] md:min-h-[680px] flex items-center justify-center overflow-hidden border-t border-secondary-container bg-[#08090b] py-24 px-6 sm:px-9 lg:px-12 scroll-mt-20"
    >
      {/* Full-bleed Swiss Heritage Arches Canvas */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/swiss-heritage-arches.jpg"
          alt="Swiss Classical Arches Architecture & Heritage"
          className="h-full w-full object-cover object-center saturate-[0.85] contrast-[1.08] brightness-[0.68] transition-transform duration-1000 ease-out hover:scale-[1.02]"
        />
        {/* Deep Contrast Vignette & Soft Gradient for Crisp Text Readability */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,13,0.72)_0%,rgba(8,10,13,0.38)_40%,rgba(8,10,13,0.6)_70%,rgba(8,10,13,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(5,7,9,0.7)_100%)]" />
      </div>

      {/* Floating Content in Front of the Image (Without Button) */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center py-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
          <span className="font-label-md text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-gold-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            {t.heritage.badge}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
        </div>

        {/* Heading */}
        <h2 className="font-display-lg text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.85)]">
          {t.heritage.heading}
        </h2>

        <div className="mx-auto my-6 h-px w-20 bg-gold/75" />

        {/* Intro Narrative */}
        <p className="font-body-lg text-base sm:text-xl text-white/95 leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] font-light">
          {t.heritage.intro}
        </p>

        {/* Subholding Context */}
        <p className="mt-4 font-body-md text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]">
          {isTH
            ? "ความสัมพันธ์อันแน่นแฟ้นกับ ActivaSwiss AG Family Office เป็นเสาหลักที่ผสานความต่อเนื่องและการบริหารจัดการสินทรัพย์อย่างมีเสถียรภาพ เพื่อเปิดรับโอกาสใหม่ ๆ สำหรับคนรุ่นต่อไป"
            : isDE
            ? "Unsere Verbindung mit dem ActivaSwiss AG Family Office bildet das Fundament für Governance, Stabilität und generationenübergreifende Verantwortung beim Erschliessen neuer globaler Horizonte."
            : "Our foundational connection with ActivaSwiss AG Family Office provides governance, stability, and enduring stewardship as we expand opportunities across global markets."}
        </p>
      </div>
    </section>
  );
}

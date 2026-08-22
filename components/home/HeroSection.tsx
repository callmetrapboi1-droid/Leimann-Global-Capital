"use client";

import HeroBackgroundSlider from "./HeroBackgroundSlider";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
  onOpenSideConcierge?: () => void;
}

export default function HeroSection({ onOpenPortal }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-10 overflow-hidden bg-charcoal">
      {/* Sharp, High-Res Cross-fading Architectural Background Slider */}
      <HeroBackgroundSlider />

      {/* Center Hero Content */}
      <div className="flex-1 flex items-center justify-center relative z-10 my-auto">
        <div className="text-center max-w-5xl px-6 sm:px-12 mx-auto">
          {/* Main Title */}
          <h1 className="font-display-lg text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight font-normal leading-[1.08] drop-shadow-md">
            {t.hero.titleLine1} <br className="hidden sm:block" />
            <span className="italic font-light text-sand-100">{t.hero.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-neutral-200 max-w-3xl mx-auto mb-10 text-base sm:text-xl leading-relaxed font-light drop-shadow-sm">
            {t.hero.subtitle}
          </p>

          {/* Action CTAs: 2 clean buttons (without Private Advisory) */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#services"
              className="w-full sm:w-auto bg-burgundy text-white px-10 py-4 font-label-sm text-xs tracking-widest uppercase hover:bg-burgundy-light transition-all shadow-xl active:scale-95 text-center font-semibold"
            >
              {t.hero.ctaServices}
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto border border-white/40 bg-white/15 backdrop-blur-md text-white px-10 py-4 font-label-sm text-xs tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all active:scale-95 text-center shadow-lg"
            >
              {t.hero.ctaPortfolio}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator only (Uncluttered) */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-4 pb-2 opacity-80 select-none">
        <span className="font-label-sm text-[10px] uppercase tracking-[0.3em] text-white">
          {t.hero.scroll}
        </span>
        <div className="w-[1px] h-7 bg-white/80 animate-bounce"></div>
      </div>
    </section>
  );
}

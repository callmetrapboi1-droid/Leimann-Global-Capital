"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function HeroSection({ onOpenPortal }: HeroSectionProps) {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section id="scene-hero" className="relative w-full min-h-screen h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Background Ultra-Sharp Crystal Clear Swiss Architecture Visual - Full Bleed 100% Height */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3200&q=100"
          alt="Swiss Modern Financial Architecture"
          className="w-full h-full object-cover object-center md:object-[80%_center] opacity-80 contrast-[1.08] brightness-[0.95]"
          loading="eager"
        />
        {/* Soft, Precision Left-Side Gradient to ensure 100% Text Legibility while keeping the rest of the image full and open */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 md:via-background/70 to-transparent w-full md:w-3/5"></div>
        {/* Very subtle top & bottom edge blend */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </div>

      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile flex flex-col justify-center h-full py-12">
        {/* Direct Text on Canvas - NO Card Container, 100% Sharp High-End Contrast */}
        <div className="max-w-2xl animate-fadeIn">
          {/* Main Display Headline */}
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary mb-stack-md leading-tight font-bold tracking-tight">
            {t.hero.titleLine1}<br />
            <span className="text-gold">{t.hero.titleLine2}</span>
          </h1>

          {/* Subtitle */}
          {isTH && (
            <p className="font-display-md text-xl sm:text-2xl text-gold mb-stack-md font-medium">
              มุมมองระดับโลก วิสัยทัศน์ระยะยาว
            </p>
          )}

          {isDE && (
            <p className="font-display-md text-xl sm:text-2xl text-gold mb-stack-md font-medium">
              Schweizer Investment- &amp; Geschäftsplattform
            </p>
          )}

          {/* Core Short Description */}
          <p className="font-body-lg text-body-lg max-md:text-body-md text-on-surface font-normal mb-stack-sm max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          <p className="font-body-md text-body-md text-secondary mb-stack-lg max-w-xl leading-relaxed">
            {isTH
              ? "ในฐานะส่วนหนึ่งของโครงสร้างการลงทุนของตระกูล Leimann และ Subholding ของ ActivaSwiss AG Family Office เราขับเคลื่อนการลงทุนในเทคโนโลยีการเงิน โครงการเชิงกลยุทธ์ และธุรกิจข้ามพรมแดน"
              : isDE
              ? "Als Teil der Anlagestruktur der Familie Leimann und Subholding des ActivaSwiss AG Family Office verfolgen wir gezielte Technologie-, Finanz- und grenzüberschreitende Initiativen."
              : "As part of the Leimann family investment structure and a subholding of the ActivaSwiss AG Family Office, we pursue selected fintech, technology, and strategic international initiatives."}
          </p>

          {/* CTA: Explore Our World */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#scene-about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-black px-7 py-3.5 rounded font-label-md text-label-md transition-all hover:brightness-110 shadow-lg active:scale-95 group font-semibold"
            >
              <span>{t.hero.ctaExplore}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/investments"
              className="inline-flex items-center space-x-2 border border-secondary-container bg-surface-container-lowest/80 backdrop-blur-sm px-6 py-3.5 rounded font-label-md text-label-md text-primary transition-all hover:border-gold/40 hover:bg-surface-container active:scale-95 shadow-xs"
            >
              <span>{t.nav.investments}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sleek Bottom Scroll Down Indicator */}
      <a
        href="#scene-about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-secondary/60 hover:text-gold transition-colors group cursor-pointer"
        aria-label="Scroll to content"
      >
        <span className="font-label-md text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-gold" />
      </a>
    </section>
  );
}

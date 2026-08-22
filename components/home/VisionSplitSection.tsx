"use client";

import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

interface VisionSplitSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
}

export default function VisionSplitSection({ onOpenPortal }: VisionSplitSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="vision" className="w-full bg-[#FAF8F5]">
      {/* 50/50 Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px] w-full border-y border-[#E5E4E2]">
        {/* Left Column: Dark Slate Editorial Content */}
        <div className="bg-[#1A1C1C] text-white p-8 sm:p-14 lg:p-20 flex flex-col justify-center relative overflow-hidden">
          {/* Subtle architectural background watermark */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <Reveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 mb-6 text-neutral-400">
                <Compass className="w-4 h-4 text-white" />
                <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-300 font-semibold">
                  {t.vision.tag}
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={200}>
              <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] mb-6 text-white">
                {t.vision.headlineLine1} <br />
                <span className="italic font-light text-neutral-300">{t.vision.headlineLine2}</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <p className="font-body-lg text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {t.vision.desc1}
              </p>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <p className="font-body-lg text-neutral-400 text-xs sm:text-sm leading-relaxed mb-10 font-light">
                {t.vision.desc2}
              </p>
            </Reveal>

            <Reveal direction="up" delay={500}>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/80 text-white font-label-sm text-xs uppercase tracking-widest hover:bg-white hover:text-[#1A1C1C] transition-all duration-300 active:scale-95"
                >
                  <span>{t.vision.ctaServices}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenPortal("consultation")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1A1C1C] font-label-sm text-xs uppercase tracking-widest hover:bg-neutral-200 transition-all duration-300 shadow-md font-semibold active:scale-95"
                >
                  <span>{t.vision.ctaConsultation}</span>
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right Column: Full-Bleed High-Res Imagery */}
        <div className="relative min-h-[420px] lg:min-h-full overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt="Swiss architectural residence overlooking lake"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden"></div>

          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 bg-white/95 backdrop-blur-md p-4 sm:p-6 border border-[#E5E4E2] max-w-md shadow-xl transition-all duration-500 group-hover:-translate-y-1">
            <div className="flex items-center gap-2 text-primary font-label-sm text-[11px] uppercase tracking-wider mb-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1A1C1C]" />
              <span>{t.vision.imageTag}</span>
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed font-light">
              {t.vision.imageDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Signature Swiss Quote Section */}
      <Reveal direction="up" delay={200} className="py-20 px-6 sm:px-12 max-w-4xl mx-auto text-center">
        <div className="text-neutral-400 font-headline-sm text-5xl mb-4 select-none opacity-60">
          &ldquo;
        </div>
        <blockquote className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-[#1A1C1C] font-normal leading-snug italic mb-6">
          {t.vision.quote}
        </blockquote>
        <div className="w-12 h-[1px] bg-[#1A1C1C] mx-auto mb-4"></div>
        <p className="font-label-sm text-xs uppercase tracking-[0.2em] text-[#1A1C1C] font-semibold">
          {t.vision.author}
        </p>
        <p className="text-[11px] text-neutral-500 font-label-sm uppercase tracking-wider mt-1">
          {t.vision.location}
        </p>
      </Reveal>
    </section>
  );
}

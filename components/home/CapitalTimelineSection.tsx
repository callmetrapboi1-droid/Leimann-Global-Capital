"use client";

import { Calendar, Globe2, Rocket, Building2, TrendingUp, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

interface CapitalTimelineSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
}

export default function CapitalTimelineSection({ onOpenPortal }: CapitalTimelineSectionProps) {
  const { t } = useLanguage();

  const iconList = [TrendingUp, Building2, Rocket, Globe2];

  return (
    <section id="capital-investment" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-[#FAF8F5]">
      {/* Header */}
      <Reveal direction="up" delay={100} className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 mb-3 text-neutral-500">
          <Calendar className="w-4 h-4 text-[#1A1C1C]" />
          <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-600 font-semibold">
            {t.timeline.tag}
          </span>
        </div>
        <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-[#1A1C1C] mb-4 font-normal">
          {t.timeline.headline}
        </h2>
        <p className="font-body-lg text-on-surface-variant text-sm sm:text-base leading-relaxed font-light">
          {t.timeline.subtitle}
        </p>
      </Reveal>

      {/* Timeline Grid with Staggered Cascading Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.timeline.events.map((item, idx) => {
          const IconComp = iconList[idx] || TrendingUp;
          return (
            <Reveal key={idx} direction="up" delay={150 + idx * 120}>
              <div className="bg-white border border-[#E5E4E2] p-8 flex flex-col justify-between relative hover:border-[#1A1C1C] transition-all duration-500 shadow-xs hover:shadow-xl hover:-translate-y-1 group h-full">
                {/* Year Stamp */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-headline-sm text-2xl font-semibold text-[#1A1C1C] group-hover:text-black transition-colors">
                      {item.year}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-[#1A1C1C] group-hover:bg-[#1A1C1C] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="inline-block bg-neutral-100 text-[#1A1C1C] font-label-sm text-[10px] uppercase tracking-wider px-2.5 py-1 mb-3 font-semibold">
                    {item.tag}
                  </span>

                  <h3 className="font-body-md text-base font-semibold text-[#1A1C1C] mb-1 leading-snug">
                    {item.title}
                  </h3>

                  <p className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-4 font-medium">
                    {item.partner}
                  </p>

                  <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-neutral-400 group-hover:text-[#1A1C1C] transition-colors">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-label-sm uppercase tracking-wider">
                    {t.timeline.syndicateBadge}
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

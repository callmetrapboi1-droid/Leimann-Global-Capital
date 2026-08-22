"use client";

import { CheckCircle2, Shield, Award, UserCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

export default function HeritageSection() {
  const { t } = useLanguage();

  const boardImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section id="heritage" className="bg-[#FAF8F5] py-24 border-t border-[#E5E4E2]">
      <div className="max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop">
        {/* Section Header */}
        <Reveal direction="up" delay={100} className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-neutral-500">
            <Shield className="w-4 h-4 text-[#1A1C1C]" />
            <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-600 font-semibold">
              {t.heritage.tag}
            </span>
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-[#1A1C1C] font-normal">
            {t.heritage.headline}
          </h2>
          <p className="font-body-lg text-on-surface-variant text-sm sm:text-base leading-relaxed mt-4 font-light">
            {t.heritage.subtitle}
          </p>
        </Reveal>

        {/* Board of Directors Cards */}
        <div className="mb-20">
          <Reveal direction="up" delay={150} className="flex items-center justify-between mb-8 pb-3 border-b border-[#E5E4E2]">
            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#1A1C1C] font-medium">
              {t.heritage.boardTitle}
            </h3>
            <span className="text-xs font-label-sm text-neutral-500 uppercase tracking-wider hidden sm:block">
              {t.heritage.boardSub}
            </span>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.heritage.board.map((member, idx) => (
              <Reveal key={idx} direction="up" delay={200 + idx * 150}>
                <div className="bg-white border border-[#E5E4E2] p-6 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group h-full">
                  <div>
                    <div className="aspect-[4/3] w-full bg-neutral-100 overflow-hidden mb-6 border border-neutral-200">
                      <img
                        src={boardImages[idx]}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    <h4 className="font-headline-sm text-xl text-[#1A1C1C] font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-xs font-label-sm text-[#1A1C1C] font-medium uppercase tracking-wider mb-1">
                      {member.title}
                    </p>
                    <p className="text-[11px] font-label-sm text-neutral-500 uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-neutral-400 group-hover:text-[#1A1C1C] transition-colors">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-label-sm uppercase tracking-wider">
                      Küsnacht Executive Desk
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Heritage Pillars & Trust Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-8 border-t border-[#E5E4E2]">
          <Reveal direction="left" delay={200}>
            <h3 className="font-headline-md text-2xl sm:text-3xl text-[#1A1C1C] mb-6 font-normal">
              {t.heritage.pillarsTitle}
            </h3>
            <p className="font-body-lg text-on-surface-variant text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t.heritage.pillarsSubtitle}
            </p>

            <div className="space-y-5">
              {t.heritage.pillars.map((pillar, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-1 w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 border border-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1C1C]" />
                  </div>
                  <div>
                    <h5 className="font-body-md text-sm sm:text-base font-semibold text-[#1A1C1C] mb-0.5">
                      {pillar.title}
                    </h5>
                    <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Swiss Safe & Headquarters Photo with 40+ Years Badge */}
          <Reveal direction="right" delay={300} className="relative">
            <div className="aspect-[4/3] border border-[#E5E4E2] p-4 sm:p-6 bg-white shadow-sm">
              <img
                className="w-full h-full object-cover"
                alt="Swiss architecture and precision vault"
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
              />
            </div>

            {/* Floating 40+ Years Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-40 sm:w-48 h-40 sm:h-48 glass-card border border-white/80 flex items-center justify-center text-center p-4 shadow-xl">
              <div>
                <Award className="w-6 h-6 text-[#1A1C1C] mx-auto mb-1.5 opacity-90" />
                <span className="block font-headline-md text-3xl sm:text-4xl text-[#1A1C1C] font-normal">
                  {t.heritage.badgeYears}
                </span>
                <span className="block font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest mt-1 font-medium">
                  {t.heritage.badgeLabel}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

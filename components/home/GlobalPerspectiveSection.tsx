"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Globe, ArrowRight, Landmark } from "lucide-react";

export default function GlobalPerspectiveSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-noir-950 border-t border-outline-gold text-on-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: A Global Perspective narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-noir-900 border border-outline-gold rounded-full">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="font-label-sm text-xs text-gold-300 uppercase tracking-[0.25em] font-medium">
              {t.globalPerspective.badge}
            </span>
          </div>

          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-on-surface font-normal leading-tight">
            {t.globalPerspective.heading}
          </h2>

          <div className="space-y-4 text-on-surface-variant text-base sm:text-lg leading-relaxed font-light font-body-lg">
            <p>{t.globalPerspective.paragraph1}</p>
            <p>{t.globalPerspective.paragraph2}</p>
          </div>

          {/* 3 Core Triad Tags with Gold-Brown Accents */}
          <div className="pt-2">
            <div className="text-xs font-label-sm uppercase tracking-wider text-gold-400 font-semibold mb-3">
              Independent. Entrepreneurial. International.
              {isTH && <span className="block font-normal text-on-surface-variant mt-0.5 normal-case font-body-md">เป็นอิสระ มีความเป็นผู้ประกอบการ และมุ่งสู่ระดับนานาชาติ</span>}
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-noir-900 border border-outline-gold font-label-sm text-xs uppercase tracking-wider text-gold-300 font-medium shadow-xs rounded-xs">
                {t.globalPerspective.pillars.independent}
              </span>
              <span className="px-4 py-2 bg-noir-900 border border-outline-gold font-label-sm text-xs uppercase tracking-wider text-gold-300 font-medium shadow-xs rounded-xs">
                {t.globalPerspective.pillars.entrepreneurial}
              </span>
              <span className="px-4 py-2 bg-noir-900 border border-outline-gold font-label-sm text-xs uppercase tracking-wider text-gold-300 font-medium shadow-xs rounded-xs">
                {t.globalPerspective.pillars.international}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Part of a Family Enterprise Card */}
        <div className="lg:col-span-5">
          <div className="glass-card-gold overflow-hidden rounded-xs border border-outline-gold shadow-2xl relative">
            <div className="relative h-48 w-full overflow-hidden bg-noir-900">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85"
                alt="Swiss Financial Architecture & Family Office"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/60 to-transparent flex items-end p-5">
                <span className="font-label-sm text-[10px] uppercase tracking-widest text-gold-300 bg-noir-900/80 border border-outline-gold px-3 py-1 rounded-xs backdrop-blur-xs">
                  ActivaSwiss AG Family Office Subholding
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="w-10 h-10 rounded-full bg-noir-900 border border-outline-gold text-gold-400 flex items-center justify-center mb-4">
                <Landmark className="w-5 h-5 stroke-1" />
              </div>

              <h3 className="font-headline-sm text-2xl text-on-surface font-normal mb-3">
                {t.globalPerspective.familyEnterprise.title}
              </h3>

              <div className="space-y-3 font-body-md text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                <p>{t.globalPerspective.familyEnterprise.desc1}</p>
                <p className="font-normal text-gold-200">{t.globalPerspective.familyEnterprise.desc2}</p>
              </div>

              <Link
                href="/heritage"
                className="inline-flex items-center gap-2 text-xs font-label-sm uppercase tracking-widest text-gold-400 hover:text-gold-300 font-semibold group hover:gap-3 transition-all"
              >
                <span>{t.globalPerspective.familyEnterprise.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

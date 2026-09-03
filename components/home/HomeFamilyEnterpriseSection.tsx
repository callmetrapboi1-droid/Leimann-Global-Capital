"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, ArrowRight } from "lucide-react";

export default function HomeFamilyEnterpriseSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section id="family-enterprise-summary" className="section-light py-section-gap px-margin-desktop max-md:px-margin-mobile border-t border-secondary-container overflow-hidden scroll-mt-20">
      <div className="max-w-container-max mx-auto">
        <div className="border-y border-secondary-container py-10 sm:py-14 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
                {t.globalPerspective.familyEnterprise.title}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="text-gold font-label-md text-[10px] uppercase tracking-[0.14em] font-semibold">
                  {t.aboutUs.familyOffice.subholdingBadge}
                </span>
              </div>

              <h2 className="font-display-md text-2xl sm:text-4xl text-primary font-normal leading-tight">
                {t.globalPerspective.familyEnterprise.title}
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
                {t.globalPerspective.familyEnterprise.desc1}
              </p>

              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {t.globalPerspective.familyEnterprise.desc2}
              </p>

              <div className="pt-2">
                <Link
                  href="/heritage"
                  className="inline-flex items-center space-x-2 border border-primary/35 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] px-5 py-3 hover:border-gold hover:text-gold transition-colors font-semibold group"
                >
                  <span>{t.globalPerspective.familyEnterprise.cta}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="border-l border-secondary-container px-8 py-2 w-full text-left space-y-3">
                <Landmark className="w-7 h-7 text-gold stroke-1" />
                <span className="font-display-md text-2xl text-primary block font-bold">
                  ActivaSwiss AG
                </span>
                <span className="text-[10px] font-label-md uppercase tracking-[0.14em] text-secondary block font-semibold">
                  Family Office Switzerland
                </span>
                <p className="font-body-md text-xs text-secondary leading-relaxed pt-1">
                  {isTH
                    ? "โครงสร้าง Family Office ที่ผสานความต่อเนื่องทางธุรกิจและการกำกับดูแลสินทรัพย์อย่างมั่นคง"
                    : isDE
                    ? "Schweizer Family Office Struktur mit Fokus auf Generationensicherung und Vermögensverwaltung."
                    : "Multi-generational Swiss family office structure and long-term asset stewardship."}
                </p>
                <div className="pt-3 border-t border-secondary-container">
                  <span className="text-[11px] text-secondary font-caption">
                    Unterdorfstrasse 12, 8808 Freienbach SZ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

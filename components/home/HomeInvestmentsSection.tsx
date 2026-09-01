"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function HomeInvestmentsSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const cards = [
    {
      title: t.investments.focusAreas.privateInvestments.title,
      desc: t.investments.focusAreas.privateInvestments.desc,
      tag: "Direct Equity",
    },
    {
      title: t.investments.focusAreas.techInnovation.title,
      desc: t.investments.focusAreas.techInnovation.desc,
      tag: "Aerospace & Tech",
    },
    {
      title: t.investments.focusAreas.intlBusiness.title,
      desc: t.investments.focusAreas.intlBusiness.desc,
      tag: "Cross-Border Ventures",
    },
    {
      title: t.investments.focusAreas.strategicCollab.title,
      desc: t.investments.focusAreas.strategicCollab.desc,
      tag: "Global Network",
    },
  ];

  return (
    <section id="investments-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-surface border-t border-secondary-container overflow-hidden scroll-mt-20">
      <div className="max-w-container-max mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              {t.investments.badge}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-2">
              {t.investments.heading}
            </h2>
            <div className="w-12 h-px bg-gold/40"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl mt-4">
              {t.investments.intro}
            </p>
          </div>

          <Link
            href="/investments"
            className="inline-flex items-center space-x-2 border border-primary/35 px-5 py-3 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] transition-colors hover:border-gold hover:text-gold self-start md:self-end font-semibold group"
          >
            <span>{isTH ? "ดูรายละเอียดการลงทุนทั้งหมด" : isDE ? "Alle Investitionen ansehen" : "View All Investments"}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Focus Areas */}
        <div className="grid grid-cols-1 border-y border-secondary-container sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="min-h-64 border-b border-secondary-container px-0 py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r reveal"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <span className="font-label-md text-[11px] text-gold font-semibold">0{idx + 1}</span>
                  <h3 className="mt-5 font-headline-lg text-xl text-primary mb-3 font-medium">
                    {card.title}
                  </h3>
                  <p className="font-body-md text-sm text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <span className="text-[10px] font-label-md uppercase tracking-[0.12em] text-secondary font-semibold mt-8 pt-4 border-t border-secondary-container block">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Collaboration: ANAVIA AG Highlight Box */}
        <div className="border-y border-secondary-container py-7 sm:py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 reveal">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-label-md text-[11px] uppercase tracking-widest text-gold font-semibold">
                {t.investments.selectedCollab.badge}
              </span>
            </div>
            <h3 className="font-display-md text-xl sm:text-2xl text-primary font-bold">
              {t.investments.selectedCollab.company} — {t.investments.selectedCollab.industry}
            </h3>
            <p className="font-body-md text-sm text-secondary max-w-2xl">
              {t.investments.selectedCollab.description}
            </p>
          </div>

          <Link
            href="/investments"
            className="inline-flex items-center space-x-1 text-gold hover:text-gold-light font-label-md text-sm font-semibold shrink-0 group"
          >
            <span>{t.investments.selectedCollab.learnMore}</span>
            <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

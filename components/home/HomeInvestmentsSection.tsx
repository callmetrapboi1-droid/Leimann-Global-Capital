"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Building, Cpu, Globe, Handshake, ArrowRight, Zap, Shield } from "lucide-react";

export default function HomeInvestmentsSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const cards = [
    {
      icon: <Building className="w-6 h-6 text-gold mb-3 stroke-1" />,
      title: t.investments.focusAreas.privateInvestments.title,
      desc: t.investments.focusAreas.privateInvestments.desc,
      tag: "Direct Equity",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Cpu className="w-6 h-6 text-gold mb-3 stroke-1" />,
      title: t.investments.focusAreas.techInnovation.title,
      desc: t.investments.focusAreas.techInnovation.desc,
      tag: "Aerospace & Tech",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Globe className="w-6 h-6 text-gold mb-3 stroke-1" />,
      title: t.investments.focusAreas.intlBusiness.title,
      desc: t.investments.focusAreas.intlBusiness.desc,
      tag: "Cross-Border Ventures",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Handshake className="w-6 h-6 text-gold mb-3 stroke-1" />,
      title: t.investments.focusAreas.strategicCollab.title,
      desc: t.investments.focusAreas.strategicCollab.desc,
      tag: "Global Network",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <section id="investments-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-surface border-t border-secondary-container overflow-hidden scroll-mt-20">
      <div className="max-w-container-max mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold to-gold-light text-black font-label-md text-label-md px-6 py-2.5 rounded transition-all hover:brightness-110 self-start md:self-end shadow-sm active:scale-95 font-semibold group"
          >
            <span>{isTH ? "ดูรายละเอียดการลงทุนทั้งหมด" : isDE ? "Alle Investitionen ansehen" : "View All Investments"}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Focus Area Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-secondary-container rounded bg-surface-container overflow-hidden flex flex-col justify-between luxury-card reveal img-zoom-container"
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              <div className="relative h-36 w-full overflow-hidden bg-surface-container-high">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover img-zoom opacity-60 contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {card.icon}
                    <span className="font-label-md text-[10px] uppercase text-gold bg-gold/10 px-2 py-0.5 rounded border border-gold/20 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-lg text-primary mb-2 font-medium">
                    {card.title}
                  </h3>

                  <p className="font-body-md text-xs text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <span className="text-[11px] font-label-md text-gold font-semibold mt-4 pt-3 border-t border-secondary-container block">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Collaboration: ANAVIA AG Highlight Box */}
        <div className="p-6 sm:p-8 border border-gold/25 rounded bg-surface-container/90 backdrop-blur-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xl luxury-card reveal">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
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

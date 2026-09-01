"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function HeritageSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const chapters = [
    {
      chapter: "Chapter I",
      title: t.heritage.foundation.title,
      desc: t.heritage.foundation.desc,
      footer: isTH ? "ตระกูล Leimann • สวิตเซอร์แลนด์" : isDE ? "Familie Leimann • Schweiz" : "Leimann Family • Switzerland",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    },
    {
      chapter: "Chapter II",
      title: t.heritage.activaStory.title,
      desc: t.heritage.activaStory.desc,
      footer: isTH ? "ActivaSwiss AG • Family Office" : isDE ? "ActivaSwiss AG • Family Office" : "ActivaSwiss AG Family Office",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    },
    {
      chapter: "Chapter III",
      title: t.heritage.nextChapter.title,
      desc: t.heritage.nextChapter.desc,
      footer: isTH ? "Leimann Global Capital • นานาชาติ" : isDE ? "Leimann Global Capital • International" : "Leimann Global Capital • International",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=85",
    },
  ];

  const valuesList = [
    {
      number: "01",
      title: t.heritage.values.independence.title,
      desc: t.heritage.values.independence.desc,
      tag: "Autonomous Mindset",
    },
    {
      number: "02",
      title: t.heritage.values.entrepreneurship.title,
      desc: t.heritage.values.entrepreneurship.desc,
      tag: "Initiative & Creation",
    },
    {
      number: "03",
      title: t.heritage.values.trust.title,
      desc: t.heritage.values.trust.desc,
      tag: "Enduring Integrity",
    },
    {
      number: "04",
      title: t.heritage.values.continuity.title,
      desc: t.heritage.values.continuity.desc,
      tag: "Multi-Generational",
    },
    {
      number: "05",
      title: t.heritage.values.international.title,
      desc: t.heritage.values.international.desc,
      tag: "Global Horizon",
    },
  ];

  return (
    <div className="w-full bg-background text-on-surface">
      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* SECTION 1: Overview */}
        <section id="heritage-hero" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left Side: Alpine Visual */}
            <div className="md:col-span-6 reveal img-zoom-container">
              <div className="aspect-[4/3] overflow-hidden relative border border-secondary-container bg-surface">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5R_bk1aHwmv7qdI6JX3gy6xlasDAqiRX1uSm1yXObOTpHXk1SL9zQX63qjNulpo-jHdgDDurUMNCQtuejUBaVUR_dihAexLP7t9xYGW7mrZfpbziD5Ioh6I9Jy6JAUPDqWFYTMPXLlThPcyrLNWblcCgWN-Zo1plIgpAkDM-AjxLXxABY5jzTZ4_Fy8aRRWYznaaFD_HjVSjdRfqWJEwlluPfqrWgxqE5f7EANn6-Ijob1pjzA"
                  alt="Swiss Alpine Heritage & Generational Roots"
                  className="w-full h-full object-cover img-zoom opacity-80"
                />
              </div>
            </div>

            {/* Right Side: Narrative */}
            <div className="md:col-span-6 space-y-6 reveal">
              <div>
                <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
                  {t.heritage.badge}
                </span>
                <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary mt-1 mb-3 leading-tight">
                  {t.heritage.heading}
                </h2>
                <div className="w-12 h-px bg-gold/40 mb-6"></div>
              </div>

              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                {t.heritage.intro}
              </p>

              <div className="p-5 border-l-2 border-gold bg-surface">
                <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.14em]">
                  Swiss Fiduciary Principles
                </span>
                <span className="text-xs text-secondary font-body-md block mt-1">
                  {isTH
                    ? "อิสระ ความรับผิดชอบ และการสร้างสิ่งที่มีคุณค่าอย่างยั่งยืน"
                    : isDE
                    ? "Unabhängigkeit, langfristige Verantwortung und nachhaltige Wertschöpfung."
                    : "Independence, long-term responsibility, and sustainable stewardship."}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Family Enterprise Journey (3 Chapters) */}
        <section id="family-evolution" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              FAMILY ENTERPRISE JOURNEY
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {isTH ? "เส้นทางจากรากฐานสู่เวทีสากล" : isDE ? "Von Schweizer Wurzeln zu globalen Korridoren" : "From Strong Swiss Roots to Global Corridors"}
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-4"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              {isTH
                ? "3 ขั้นตอนสำคัญของประวัติศาสตร์ตระกูล Leimann และการเติบโตขององค์กรธุรกิจครอบครัว"
                : isDE
                ? "Drei zentrale Kapitel, die unser unternehmerisches Fundament, Governance und internationale Zukunft prägen."
                : "The three definitive chapters shaping our foundation, governance, and international future."}
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-secondary-container md:grid-cols-3">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                className="min-h-72 border-b border-secondary-container py-8 md:border-b-0 md:px-7 md:first:pl-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(3)]:border-l reveal"
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-gold font-semibold block mb-3">
                      {ch.chapter}
                    </span>

                    <h3 className="font-headline-lg text-xl text-primary mb-3 font-medium">
                      {ch.title}
                    </h3>

                    <p className="font-body-md text-sm text-secondary leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-secondary-container text-xs font-label-md text-secondary">
                    {ch.footer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Core Values (5 Columns) */}
        <section id="our-values" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              CORE PRINCIPLES
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.heritage.valuesTitle}
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-4"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              {isTH
                ? "5 คุณค่าสำคัญที่ยังคงชี้นำและเป็นหลักยึดในการลงทุน การสร้างพันธมิตร และการแสวงหาโอกาสใหม่ ๆ ของเรา"
                : isDE
                ? "Fünf Grundwerte, die unsere Kapitalallokation und Partnerschaften leiten."
                : "The five core values guiding our capital allocation, partnership selection, and multi-generational stewardship."}
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-secondary-container sm:grid-cols-2 lg:grid-cols-5">
            {valuesList.map((val, idx) => (
              <div
                key={idx}
                className="min-h-56 border-b border-secondary-container py-7 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:px-5 lg:first:pl-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r lg:[&:nth-child(4)]:border-r reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="font-label-md text-[11px] text-gold font-semibold">{val.number}</span>
                    <h3 className="mt-4 font-headline-lg text-base text-primary mb-2 font-medium">
                      {val.title}
                    </h3>
                    <p className="font-body-md text-xs text-secondary leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-label-md uppercase tracking-[0.12em] text-secondary font-semibold mt-6 pt-3 border-t border-secondary-container block">
                    {val.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Looking Forward (Institutional Quote Block) */}
        <section id="looking-forward" className="border-t border-secondary-container pt-12 scroll-mt-24">
          <div className="border-y border-secondary-container py-14 text-center max-w-4xl mx-auto reveal">
            <p className="font-display-md text-xl sm:text-2xl font-normal mb-2 text-primary leading-snug">
              {t.heritage.quote.foundation}
            </p>

            <p className="font-display-md text-xl sm:text-2xl font-normal mb-4 text-primary leading-snug">
              {t.heritage.quote.opportunity}
            </p>

            <p className="font-body-lg text-base sm:text-lg mb-8 text-secondary font-normal max-w-2xl mx-auto leading-relaxed">
              {t.heritage.quote.connection}
            </p>

            <div className="w-12 h-px bg-gold/40 mx-auto mb-4"></div>

            <span className="font-label-md text-[11px] uppercase tracking-[0.2em] text-gold font-semibold block">
              {t.heritage.quote.built}
            </span>

            <div className="pt-8 flex justify-center gap-4 flex-wrap">
              <Link
                href="/investments"
                className="inline-flex items-center space-x-2 border border-primary/35 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] px-5 py-3 hover:border-gold hover:text-gold transition-colors font-semibold group"
              >
                <span>{isTH ? "ดูการลงทุนและความร่วมมือ" : isDE ? "Investitionen ansehen" : "Explore Investments"}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-secondary-container text-secondary font-label-md text-[11px] uppercase tracking-[0.12em] px-5 py-3 hover:text-primary hover:border-primary/40 transition-colors"
              >
                <span>{isTH ? "ติดต่อเรา" : isDE ? "Kontakt aufnehmen" : "Contact Us"}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

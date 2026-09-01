"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function HomeGlobalPerspectiveSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section id="global-perspective-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-background border-t border-secondary-container overflow-hidden scroll-mt-20">
      <div className="max-w-container-max mx-auto">
        <div className="max-w-3xl mb-12 reveal">
          <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
            {t.globalPerspective.badge}
          </span>
          <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
            {t.globalPerspective.heading}
          </h2>
          <div className="w-12 h-px bg-gold/40 mb-4"></div>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {t.globalPerspective.paragraph1}
          </p>
          <p className="font-body-md text-body-md text-secondary mt-2">
            {t.globalPerspective.paragraph2}
          </p>
        </div>

        {/* 3 Intersections: Industries, Markets, Relationships */}
        <div className="grid grid-cols-1 border-y border-secondary-container md:grid-cols-3 mb-12">
          {/* Intersection 1: Industries */}
          <div className="border-b border-secondary-container py-7 md:border-b-0 md:pr-8 reveal">
            <div>
              <span className="font-label-md text-[11px] font-semibold text-gold">01</span>
              <h3 className="mt-5 font-headline-lg text-xl text-primary mb-3 font-medium">
                {isTH ? "Industries (อุตสาหกรรม)" : isDE ? "Branchen (Industries)" : "Industries"}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                {isTH
                  ? "มองข้ามขอบเขตอุตสาหกรรมดั้งเดิม เพื่อผสานเทคโนโลยีการเงิน วิศวกรรมขั้นสูง และโอกาสทางธุรกิจใหม่"
                  : isDE
                  ? "Branchenübergreifende Synergien zwischen Finanztechnologie, Präzisionsingenieurwesen und zukunftsträchtigen Sektoren."
                  : "Bridging financial technology, high-precision engineering, and innovative venture sectors."}
              </p>
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-[0.12em] text-secondary font-semibold mt-7 pt-4 border-t border-secondary-container block">
              Cross-Industry Synergy
            </span>
          </div>

          {/* Intersection 2: Markets */}
          <div className="border-b border-secondary-container py-7 md:border-b-0 md:border-l md:px-8 reveal" style={{ transitionDelay: "100ms" }}>
            <div>
              <span className="font-label-md text-[11px] font-semibold text-gold">02</span>
              <h3 className="mt-5 font-headline-lg text-xl text-primary mb-3 font-medium">
                {isTH ? "Markets (ตลาด)" : isDE ? "Märkte (Markets)" : "Markets"}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                {isTH
                  ? "เชื่อมโยงศูนย์กลางการเงินของสวิตเซอร์แลนด์ ยุโรป เอเชีย และตลาดเกิดใหม่ทั่วโลกอย่างไร้พรมแดน"
                  : isDE
                  ? "Verbindung der Finanzzentren in der Schweiz, Europa, Asien und globalen Wachstumsmärkten."
                  : "Connecting financial hubs across Switzerland, Europe, Asia, and high-growth global corridors."}
              </p>
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-[0.12em] text-secondary font-semibold mt-7 pt-4 border-t border-secondary-container block">
              Global Corridor Access
            </span>
          </div>

          {/* Intersection 3: Relationships */}
          <div className="py-7 md:border-l md:pl-8 reveal" style={{ transitionDelay: "200ms" }}>
            <div>
              <span className="font-label-md text-[11px] font-semibold text-gold">03</span>
              <h3 className="mt-5 font-headline-lg text-xl text-primary mb-3 font-medium">
                {isTH ? "Relationships (ความสัมพันธ์)" : isDE ? "Beziehungen (Relationships)" : "Relationships"}
              </h3>
              <p className="font-body-md text-sm text-secondary leading-relaxed">
                {isTH
                  ? "สร้างความไว้วางใจระยะยาวกับผู้ประกอบการ สถาบัน และครอบครัวนักลงทุนที่มีวิสัยทัศน์สอดคล้องกัน"
                  : isDE
                  ? "Aufbau von dauerhaftem Vertrauen mit Unternehmern, Institutionen und Familienunternehmen."
                  : "Cultivating enduring trust with exceptional entrepreneurs, institutions, and family enterprises."}
              </p>
            </div>
            <span className="font-label-md text-[10px] uppercase tracking-[0.12em] text-secondary font-semibold mt-7 pt-4 border-t border-secondary-container block">
              Enduring Fiduciary Trust
            </span>
          </div>
        </div>

        {/* 3 Core Triad Tags */}
        <div className="border-y border-secondary-container py-6 flex flex-col sm:flex-row justify-between items-center gap-4 reveal">
          <span className="font-label-md text-[11px] uppercase tracking-[0.14em] text-primary font-semibold">
            {t.globalPerspective.pillars.combinedLine}
          </span>
          <span className="font-body-md text-xs text-secondary">
            {isTH
              ? "เป็นอิสระ · มีความเป็นผู้ประกอบการ · มุ่งสู่ระดับนานาชาติ"
              : isDE
              ? "Schweizer Unabhängigkeit · Unternehmerischer Geist · Internationaler Horizont"
              : "Swiss Independence · Entrepreneurial Agility · Global Outlook"}
          </span>
        </div>
      </div>
    </section>
  );
}

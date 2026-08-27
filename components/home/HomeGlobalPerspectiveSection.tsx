"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe, Layers, TrendingUp, Users } from "lucide-react";

export default function HomeGlobalPerspectiveSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-surface-container-lowest border-t border-secondary-container overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="max-w-3xl mb-12 reveal">
          <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
            04 • {isTH ? "มุมมองระดับโลก" : "A GLOBAL PERSPECTIVE"}
          </span>
          <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
            {isTH ? "โอกาสเกิดขึ้นตรงจุดตัดของตลาดและเครือข่าย" : "Where Meaningful Opportunities Emerge"}
          </h2>
          <div className="w-12 h-px bg-platinum mb-4"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {isTH
              ? "เราเชื่อว่าโอกาสที่มีความหมายมักเกิดขึ้นตรงจุดตัดระหว่างอุตสาหกรรม (Industries) ตลาด (Markets) และความสัมพันธ์ (Relationships)"
              : "We believe that meaningful opportunities often emerge at the intersection of industries, markets, and relationships."}
          </p>
          <p className="font-body-md text-body-md text-secondary mt-2">
            {isTH
              ? "Leimann Global Capital ดำเนินงานด้วยแนวทางที่ยืดหยุ่นและมีความเป็นผู้ประกอบการ โดยสำรวจโอกาสที่ได้รับการคัดเลือกในตลาดและอุตสาหกรรมต่าง ๆ ทั่วโลก"
              : "Leimann Global Capital operates with a flexible and entrepreneurial approach, exploring selected opportunities across international markets and industries."}
          </p>
        </div>

        {/* 3 Intersections: Industries, Markets, Relationships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
          {/* Intersection 1: Industries */}
          <div className="p-8 border border-secondary-container rounded bg-surface shadow-xs flex flex-col justify-between luxury-card reveal">
            <div>
              <Layers className="w-8 h-8 text-primary mb-4 stroke-1" />
              <h3 className="font-headline-lg text-xl text-tertiary mb-2 font-medium">
                {isTH ? "Industries (อุตสาหกรรม)" : "Industries"}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {isTH
                  ? "มองข้ามขอบเขตอุตสาหกรรมดั้งเดิม เพื่อผสานเทคโนโลยีการเงิน วิศวกรรมขั้นสูง และโอกาสทางธุรกิจใหม่"
                  : "Bridging financial technology, high-precision engineering, and innovative venture sectors."}
              </p>
            </div>
            <span className="font-label-md text-xs text-primary font-semibold mt-6 pt-3 border-t border-secondary-container/50 block">
              Cross-Industry Synergy
            </span>
          </div>

          {/* Intersection 2: Markets */}
          <div className="p-8 border border-secondary-container rounded bg-surface shadow-xs flex flex-col justify-between luxury-card reveal" style={{ transitionDelay: "100ms" }}>
            <div>
              <TrendingUp className="w-8 h-8 text-primary mb-4 stroke-1" />
              <h3 className="font-headline-lg text-xl text-tertiary mb-2 font-medium">
                {isTH ? "Markets (ตลาด)" : "Markets"}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {isTH
                  ? "เชื่อมโยงศูนย์กลางการเงินของสวิตเซอร์แลนด์ ยุโรป เอเชีย และตลาดเกิดใหม่ทั่วโลกอย่างไร้พรมแดน"
                  : "Connecting financial hubs across Switzerland, Europe, Asia, and high-growth global corridors."}
              </p>
            </div>
            <span className="font-label-md text-xs text-primary font-semibold mt-6 pt-3 border-t border-secondary-container/50 block">
              Global Corridor Access
            </span>
          </div>

          {/* Intersection 3: Relationships */}
          <div className="p-8 border border-secondary-container rounded bg-surface shadow-xs flex flex-col justify-between luxury-card reveal" style={{ transitionDelay: "200ms" }}>
            <div>
              <Users className="w-8 h-8 text-primary mb-4 stroke-1" />
              <h3 className="font-headline-lg text-xl text-tertiary mb-2 font-medium">
                {isTH ? "Relationships (ความสัมพันธ์)" : "Relationships"}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {isTH
                  ? "สร้างความไว้วางใจระยะยาวกับผู้ประกอบการ สถาบัน และครอบครัวนักลงทุนที่มีวิสัยทัศน์สอดคล้องกัน"
                  : "Cultivating enduring trust with exceptional entrepreneurs, institutions, and family enterprises."}
              </p>
            </div>
            <span className="font-label-md text-xs text-primary font-semibold mt-6 pt-3 border-t border-secondary-container/50 block">
              Enduring Fiduciary Trust
            </span>
          </div>
        </div>

        {/* 3 Core Triad Tags */}
        <div className="p-6 border border-secondary-container rounded bg-surface-container-low flex flex-col sm:flex-row justify-between items-center gap-4 reveal">
          <span className="font-label-md text-xs uppercase tracking-widest text-primary font-bold">
            Independent. Entrepreneurial. International.
          </span>
          <span className="font-body-md text-xs text-secondary">
            {isTH ? "เป็นอิสระ · มีความเป็นผู้ประกอบการ · มุ่งสู่ระดับนานาชาติ" : "Swiss Independence · Entrepreneurial Agility · Global Outlook"}
          </span>
        </div>
      </div>
    </section>
  );
}

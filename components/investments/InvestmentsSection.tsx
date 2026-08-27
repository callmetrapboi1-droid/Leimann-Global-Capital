"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Building2,
  Cpu,
  Globe,
  Handshake,
  ArrowRight,
  Zap,
  Sparkles,
  Shield,
  Layers,
} from "lucide-react";

interface InvestmentsSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function InvestmentsSection({ onOpenPortal }: InvestmentsSectionProps) {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  const focusAreas = [
    {
      icon: <Building2 className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: isTH ? "Private Investments" : "Private Investments",
      subTitle: isTH ? "การลงทุนในภาคเอกชน" : "Investments in Companies",
      desc: isTH
        ? "การลงทุนที่ได้รับการคัดเลือกในบริษัทและโอกาสทางธุรกิจของผู้ประกอบการ"
        : "Selected investments in entrepreneurial companies and private growth opportunities.",
      points: [
        isTH ? "การลงทุนในบริษัท (Investments in companies)" : "Investments in companies",
        isTH ? "โอกาสของผู้ประกอบการ (Entrepreneurial opportunities)" : "Entrepreneurial opportunities",
      ],
      tag: "Direct Equity",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    },
    {
      icon: <Cpu className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: isTH ? "Technology & Innovation" : "Technology & Innovation",
      subTitle: isTH ? "เทคโนโลยีและนวัตกรรม" : "Emerging Technologies",
      desc: isTH
        ? "เทคโนโลยีเกิดใหม่ วิศวกรรมความแม่นยำสูง และธุรกิจที่สร้างคุณค่าระยะยาว"
        : "Emerging technologies and high-precision engineering delivering sustainable, long-term value.",
      points: [
        isTH ? "เทคโนโลยีเกิดใหม่ (Emerging technologies)" : "Emerging technologies",
        isTH ? "คุณค่าระยะยาว (Long-term value)" : "Long-term value",
      ],
      tag: "High-Tech & Precision",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=700&q=85",
    },
    {
      icon: <Globe className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: isTH ? "International Business" : "International Business",
      subTitle: isTH ? "ธุรกิจระหว่างประเทศ" : "Cross-Border Opportunities",
      desc: isTH
        ? "โอกาสข้ามพรมแดนและการพัฒนาตลาดเพื่อขยายธุรกิจสู่เวทีสากล"
        : "Cross-border market development, international expansion, and global trade initiatives.",
      points: [
        isTH ? "โอกาสข้ามพรมแดน (Cross-border opportunities)" : "Cross-border opportunities",
        isTH ? "การพัฒนาตลาด (Market development)" : "Market development",
      ],
      tag: "Global Expansion",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=85",
    },
    {
      icon: <Handshake className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: isTH ? "Strategic Collaborations" : "Strategic Collaborations",
      subTitle: isTH ? "ความร่วมมือเชิงกลยุทธ์" : "Selected Partnerships",
      desc: isTH
        ? "พันธมิตรที่ใช้เครือข่าย ประสบการณ์ และมรดกทางธุรกิจขับเคลื่อนเป้าหมายร่วมกัน"
        : "Selected partnerships where relationships, strategic expertise, and Swiss heritage accelerate mutual growth.",
      points: [
        isTH ? "พันธมิตรที่คัดสรร (Selected partnerships)" : "Selected partnerships",
        isTH ? "การเชื่อมโยงระหว่างประเทศ (International connectivity)" : "International connectivity",
      ],
      tag: "Network Synergy",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <div className="w-full bg-surface text-on-surface overflow-hidden">
      {/* Top Banner / Breadcrumb */}
      <div className="py-12 border-b border-secondary-container bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <div className="flex items-center gap-2 text-xs font-label-md text-secondary uppercase tracking-widest mb-2 animate-fadeIn">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-bold">Investments &amp; Collaborations</span>
          </div>
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary font-normal animate-fadeIn">
            {isTH ? "การลงทุนและความร่วมมือ" : "Investments & Collaborations"}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 animate-fadeIn">
            {isTH
              ? "ขอบเขตการลงทุน พันธมิตรเชิงกลยุทธ์ และโครงการธุรกิจระหว่างประเทศของ Leimann Global Capital"
              : "Discover our investment focus areas, strategic collaborations, and high-impact international business initiatives."}
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* ① SECTION 1: Intro */}
        <section id="investments-intro" className="scroll-mt-24">
          <div className="max-w-3xl space-y-6 reveal">
            <div>
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
                01 • {isTH ? "บทนำ" : "INTRODUCTION"}
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-3">
                {t.investments.heading}
              </h2>
              <div className="w-12 h-px bg-platinum mb-6"></div>
            </div>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t.investments.intro}
            </p>

            {/* 3 Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
                <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                  Selected Investments
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "การลงทุนที่คัดเลือกอย่างเหมาะสม" : "Targeted long-term capital deployment"}
                </span>
              </div>

              <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
                <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                  Strategic Collaborations
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "ความร่วมมือเชิงกลยุทธ์ข้ามพรมแดน" : "Bespoke bilateral partnerships"}
                </span>
              </div>

              <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
                <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                  International Initiatives
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "โครงการธุรกิจระดับสากล" : "Cross-border venture expansion"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ② SECTION 2: Focus Areas (4 Cards) */}
        <section id="focus-areas" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              02 • {isTH ? "ขอบเขตที่ให้ความสำคัญ" : "FOCUS AREAS"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.investments.focusTitle}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {isTH
                ? "เรามุ่งเน้น 4 ขอบเขตหลักที่การคิดระยะยาว ความเชี่ยวชาญ และเครือข่ายระหว่างประเทศสามารถสร้างคุณค่าได้สูงสุด"
                : "Our capital, network, and operational focus are concentrated across four high-potential domains."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {focusAreas.map((card, idx) => (
              <div
                key={idx}
                className="border border-secondary-container rounded bg-surface-container-lowest overflow-hidden flex flex-col justify-between shadow-xs luxury-card reveal img-zoom-container"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-32 w-full overflow-hidden bg-surface-container-low">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover img-zoom opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      {card.icon}
                      <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary bg-surface-container-low px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-headline-lg text-lg text-tertiary mb-1 font-medium">
                      {card.title}
                    </h3>

                    <p className="font-label-md text-xs text-secondary uppercase tracking-wider mb-3">
                      {card.subTitle}
                    </p>

                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed mb-4">
                      {card.desc}
                    </p>

                    <ul className="space-y-1.5 pt-2 border-t border-secondary-container/50 text-xs font-body-md text-secondary">
                      {card.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-secondary-container/60">
                    <span className="text-[11px] font-label-md text-primary uppercase tracking-wider font-semibold">
                      {card.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ③ SECTION 3: Portfolio / Collaboration (ANAVIA AG) */}
        <section id="portfolio-anavia" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-10 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              03 • {isTH ? "พอร์ตโฟลิโอและความร่วมมือ" : "PORTFOLIO / SELECTED COLLABORATION"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {isTH ? "ความร่วมมือที่ได้รับการคัดเลือก" : "Selected Strategic Collaboration"}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {isTH
                ? "ตัวอย่างความร่วมมือเชิงกลยุทธ์ในภาคเทคโนโลยีและความแม่นยำสูงระดับสากล"
                : "A premier example of our strategic collaboration in high-precision technology and global market development."}
            </p>
          </div>

          {/* Minimal, High-End Portfolio Card for ANAVIA AG with image visual */}
          <div className="border border-secondary-container rounded bg-surface-container-low shadow-sm max-w-5xl overflow-hidden reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image side */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] bg-surface-container-high overflow-hidden img-zoom-container">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85"
                  alt="ANAVIA Swiss Aerospace & Defence Technology"
                  className="w-full h-full object-cover img-zoom opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-secondary-container">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="font-label-md text-[11px] uppercase tracking-widest text-secondary font-semibold">
                          Switzerland • Strategic Mandate
                        </span>
                      </div>
                      <h3 className="font-display-md text-2xl sm:text-3xl text-primary font-bold">
                        ANAVIA AG
                      </h3>
                      <p className="font-label-md text-xs uppercase tracking-wider text-secondary mt-0.5 font-medium">
                        Swiss Aerospace &amp; Defence Technology
                      </p>
                    </div>

                    <span className="bg-primary text-on-primary font-label-md text-xs px-3.5 py-1.5 rounded uppercase tracking-wider font-semibold">
                      Strategic Collaboration
                    </span>
                  </div>

                  <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                    {isTH
                      ? "ความร่วมมือเชิงกลยุทธ์ที่มุ่งเน้นการพัฒนาธุรกิจระหว่างประเทศ การสร้างพันธมิตรระดับสากล และการเปิดประตูสู่ตลาดใหม่"
                      : "Strategic collaboration focused on international business development, high-impact partnerships, and cross-border commercial acceleration."}
                  </p>

                  {/* 3 Core Focus Tags */}
                  <div>
                    <span className="font-label-md text-xs uppercase tracking-widest text-tertiary block font-semibold mb-2.5">
                      {isTH ? "ขอบเขตความร่วมมือหลัก (Core Focus):" : "Core Strategic Focus:"}
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="p-3 bg-surface-container-lowest border border-secondary-container rounded text-center luxury-card">
                        <Globe className="w-4 h-4 text-primary mx-auto mb-1 stroke-1" />
                        <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                          International Markets
                        </span>
                      </div>

                      <div className="p-3 bg-surface-container-lowest border border-secondary-container rounded text-center luxury-card">
                        <Handshake className="w-4 h-4 text-primary mx-auto mb-1 stroke-1" />
                        <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                          Strategic Partnerships
                        </span>
                      </div>

                      <div className="p-3 bg-surface-container-lowest border border-secondary-container rounded text-center luxury-card">
                        <Zap className="w-4 h-4 text-primary mx-auto mb-1 stroke-1" />
                        <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                          Business Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action CTA & Attribution */}
                <div className="pt-4 border-t border-secondary-container flex flex-col sm:flex-row justify-between items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-primary text-on-primary font-label-md text-sm px-6 py-2.5 rounded hover:bg-on-primary-fixed-variant transition-colors active:scale-95 shadow-sm group"
                  >
                    <span>{isTH ? "ติดต่อสอบถามข้อมูล (Learn More)" : "Learn More"}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-xs text-secondary font-body-md">
                    Freienbach SZ • Switzerland
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ④ SECTION 4: Future Opportunities */}
        <section id="future-opportunities" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="p-8 sm:p-12 border border-secondary-container rounded bg-surface-container-lowest shadow-sm max-w-4xl text-center mx-auto space-y-4 reveal luxury-card">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              04 • {isTH ? "โอกาสในอนาคต" : "FUTURE OPPORTUNITIES"}
            </span>

            <h2 className="font-display-md text-2xl sm:text-3xl text-primary font-normal">
              {isTH ? "การพัฒนาพอร์ตโฟลิโอในอนาคต" : "Future Opportunities & Portfolio Evolution"}
            </h2>

            <div className="w-12 h-px bg-platinum mx-auto"></div>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              {isTH
                ? "พอร์ตโฟลิโอของเราจะพัฒนาและขยายตัวเพิ่มขึ้นอย่างต่อเนื่องในอนาคต เราเปิดรับการศึกษาโอกาสใหม่ ๆ (New Opportunities) และการสร้างความสัมพันธ์เชิงกลยุทธ์ (Strategic Relationships) ร่วมกับผู้ประกอบการและนักลงทุนทั่วโลก"
                : "Our portfolio will continue to evolve and expand over time as we identify exceptional opportunities, unique assets, and strategic relationships across global markets."}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-primary text-on-primary font-label-md text-sm px-7 py-3.5 rounded hover:bg-on-primary-fixed-variant transition-colors active:scale-95 shadow-sm group"
              >
                <span>{isTH ? "ติดต่อเพื่อหารือโอกาสใหม่ ๆ (Connect With Us)" : "Connect Regarding New Opportunities"}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

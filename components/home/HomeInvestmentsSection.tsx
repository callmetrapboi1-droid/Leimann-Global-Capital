"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Building, Cpu, Globe, Handshake, ArrowRight, Zap, Shield } from "lucide-react";

export default function HomeInvestmentsSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  const cards = [
    {
      icon: <Building className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: "Private Investments",
      desc: isTH
        ? "การลงทุนที่ได้รับการคัดเลือกในบริษัทและโอกาสทางธุรกิจของผู้ประกอบการ"
        : "Selected direct investments in entrepreneurial companies and global fintech ventures.",
      tag: "Fintech & Private Capital",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Cpu className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: "Technology & Innovation",
      desc: isTH
        ? "เทคโนโลยีเกิดใหม่ วิศวกรรมความแม่นยำสูง และธุรกิจที่สร้างคุณค่าระยะยาว"
        : "Emerging technologies and high-precision Swiss engineering with long-term value.",
      tag: "Aerospace & Tech",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: "International Business",
      desc: isTH
        ? "โอกาสข้ามพรมแดนและความร่วมมือเพื่อขยายตลาดสู่เวทีนานาชาติ"
        : "Cross-border market development and strategic international trade expansion.",
      tag: "Cross-Border Ventures",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=85",
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: "Strategic Collaborations",
      desc: isTH
        ? "พันธมิตรที่ใช้เครือข่าย ประสบการณ์ และความเชี่ยวชาญขับเคลื่อนเป้าหมายร่วมกัน"
        : "Selected partnerships where relationships and Swiss heritage support mutual growth.",
      tag: "Global Network",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=85",
    },
  ];

  return (
    <section className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-surface-container-lowest border-t border-secondary-container overflow-hidden">
      <div className="max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              02 • {isTH ? "การลงทุนและความร่วมมือ" : "INVESTMENTS & COLLABORATIONS"}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-2">
              {isTH ? "การลงทุนและพันธมิตรเชิงกลยุทธ์" : "Investments & Strategic Collaborations"}
            </h2>
            <div className="w-12 h-px bg-platinum"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4">
              {isTH
                ? "เรามีส่วนร่วมในการลงทุนที่ได้รับการคัดเลือกและโครงการธุรกิจระหว่างประเทศ โดยมุ่งเน้นธุรกิจที่มีศักยภาพระยะยาวและมีมุมมองในระดับสากล"
                : "We engage in selective investments and strategic cross-border initiatives across high-potential sectors and international markets."}
            </p>
          </div>

          <Link
            href="/investments"
            className="inline-flex items-center space-x-2 bg-primary text-on-primary font-label-md text-label-md px-5 py-2.5 rounded transition-all hover:bg-on-primary-fixed-variant self-start md:self-end shadow-sm active:scale-95 group"
          >
            <span>{isTH ? "ดูรายละเอียดการลงทุนทั้งหมด" : "View All Investments"}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Focus Area Cards with Images & Micro-Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-secondary-container rounded bg-surface overflow-hidden flex flex-col justify-between luxury-card reveal img-zoom-container"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-36 w-full overflow-hidden bg-surface-container-low">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover img-zoom opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    {card.icon}
                    <span className="font-label-md text-[10px] uppercase text-secondary bg-surface-container-low px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-lg text-tertiary mb-2 font-medium">
                    {card.title}
                  </h3>

                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <span className="text-[11px] font-label-md text-primary font-semibold mt-4 pt-3 border-t border-secondary-container/50 block">
                  {card.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Collaboration: ANAVIA AG Highlight Box */}
        <div className="p-6 sm:p-8 border border-secondary-container rounded bg-surface flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 shadow-xs reveal">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-md text-[11px] uppercase tracking-widest text-secondary font-semibold">
                SELECTED COLLABORATION
              </span>
            </div>
            <h3 className="font-display-md text-xl sm:text-2xl text-primary font-bold">
              ANAVIA AG — Swiss Aerospace &amp; Defence Technology
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant max-w-2xl">
              {isTH
                ? "ความร่วมมือเชิงกลยุทธ์ที่มุ่งเน้นการพัฒนาธุรกิจระหว่างประเทศ (International Markets · Strategic Partnerships · Business Development)"
                : "Strategic collaboration focused on international business development and strategic partnerships."}
            </p>
          </div>

          <Link
            href="/investments"
            className="inline-flex items-center space-x-1 text-primary font-label-md text-sm font-semibold hover:underline shrink-0 group"
          >
            <span>{isTH ? "ดูรายละเอียด →" : "Learn More →"}</span>
            <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

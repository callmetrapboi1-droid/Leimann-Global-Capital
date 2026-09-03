"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

interface InvestmentsSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function InvestmentsSection({ onOpenPortal }: InvestmentsSectionProps) {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const focusAreas = [
    {
      number: "01",
      title: isTH ? "Private Investments" : isDE ? "Private Investitionen" : "Private Investments",
      subTitle: isTH ? "การลงทุนในภาคเอกชน" : isDE ? "Direktbeteiligungen" : "Investments in Companies",
      desc: isTH
        ? "การลงทุนที่ได้รับการคัดเลือกในบริษัทและโอกาสทางธุรกิจของผู้ประกอบการ"
        : isDE
        ? "Ausgewählte Direktbeteiligungen an unternehmerischen Gesellschaften und Wachstumsvorhaben."
        : "Selected investments in entrepreneurial companies and private growth opportunities.",
      tag: "Direct Equity",
    },
    {
      number: "02",
      title: isTH ? "Technology & Innovation" : isDE ? "Technologie & Innovation" : "Technology & Innovation",
      subTitle: isTH ? "เทคโนโลยีและนวัตกรรม" : isDE ? "Zukunftstechnologien" : "Emerging Technologies",
      desc: isTH
        ? "เทคโนโลยีเกิดใหม่ วิศวกรรมความแม่นยำสูง และธุรกิจที่สร้างคุณค่าระยะยาว"
        : isDE
        ? "Zukunftstechnologien und hochpräzise Schweizer Ingenieurskunst mit nachhaltigem Wertpotenzial."
        : "Emerging technologies and high-precision engineering delivering sustainable, long-term value.",
      tag: "High-Tech & Precision",
    },
    {
      number: "03",
      title: isTH ? "International Business" : isDE ? "Internationales Geschäft" : "International Business",
      subTitle: isTH ? "ธุรกิจระหว่างประเทศ" : isDE ? "Globale Marktentwicklung" : "Cross-Border Opportunities",
      desc: isTH
        ? "โอกาสข้ามพรมแดนและการพัฒนาตลาดเพื่อขยายธุรกิจสู่เวทีสากล"
        : isDE
        ? "Grenzüberschreitende Marktentwicklung, Handelsinitiativen und internationale Expansion."
        : "Cross-border market development, international expansion, and global trade initiatives.",
      tag: "Global Expansion",
    },
    {
      number: "04",
      title: isTH ? "Strategic Collaborations" : isDE ? "Strategische Kooperationen" : "Strategic Collaborations",
      subTitle: isTH ? "ความร่วมมือเชิงกลยุทธ์" : isDE ? "Selektive Partnerschaften" : "Selected Partnerships",
      desc: isTH
        ? "พันธมิตรที่ใช้เครือข่าย ประสบการณ์ และมรดกทางธุรกิจขับเคลื่อนเป้าหมายร่วมกัน"
        : isDE
        ? "Selektive Partnerschaften, bei denen Erfahrung und Netzwerke gemeinsame Ziele beschleunigen."
        : "Selected partnerships where relationships, strategic expertise, and Swiss heritage accelerate mutual growth.",
      tag: "Network Synergy",
    },
  ];

  return (
    <div className="section-light w-full text-on-surface">
      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* SECTION 1: Intro */}
        <section id="investments-intro" className="scroll-mt-24">
          <div className="max-w-3xl space-y-6 reveal">
            <div>
              <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
                {t.investments.badge}
              </span>
              <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-3">
                {t.investments.heading}
              </h2>
              <div className="w-12 h-px bg-gold/40 mb-6"></div>
            </div>

            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              {t.investments.intro}
            </p>

            {/* 3 Tenets Summary */}
            <div className="grid grid-cols-1 border-y border-secondary-container sm:grid-cols-3 pt-4">
              <div className="py-4 sm:pr-6">
                <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.12em]">
                  Selected Investments
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "การลงทุนที่คัดเลือกอย่างเหมาะสม" : isDE ? "Gezielter Kapitaleinsatz" : "Targeted long-term capital deployment"}
                </span>
              </div>

              <div className="border-t border-secondary-container py-4 sm:border-t-0 sm:border-l sm:px-6">
                <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.12em]">
                  Strategic Collaborations
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "ความร่วมมือเชิงกลยุทธ์ข้ามพรมแดน" : isDE ? "Bilaterale Partnerschaften" : "Bespoke bilateral partnerships"}
                </span>
              </div>

              <div className="border-t border-secondary-container py-4 sm:border-t-0 sm:border-l sm:pl-6">
                <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.12em]">
                  International Initiatives
                </span>
                <span className="text-xs text-secondary font-body-md mt-1 block">
                  {isTH ? "โครงการธุรกิจระดับสากล" : isDE ? "Grenzüberschreitende Vorhaben" : "Cross-border venture expansion"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Focus Areas (4 Columns) */}
        <section id="focus-areas" className="section-dark editorial-dark-band scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              {t.investments.badge}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.investments.focusTitle}
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-4"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              {isTH
                ? "เรามุ่งเน้น 4 ขอบเขตหลักที่การคิดระยะยาว ความเชี่ยวชาญ และเครือข่ายระหว่างประเทศสามารถสร้างคุณค่าได้สูงสุด"
                : isDE
                ? "Unsere Aktivitäten konzentrieren sich auf vier strategische Handlungsfelder mit signifikantem Wertschöpfungspotenzial."
                : "Our capital, network, and operational focus are concentrated across four high-potential domains."}
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-secondary-container sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((card, idx) => (
              <div
                key={idx}
                className="min-h-64 border-b border-secondary-container py-8 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="font-label-md text-[11px] text-gold font-semibold">{card.number}</span>
                    <h3 className="mt-5 font-headline-lg text-xl text-primary mb-1 font-medium">
                      {card.title}
                    </h3>
                    <p className="font-label-md text-[10px] text-secondary uppercase tracking-[0.12em] mb-3">
                      {card.subTitle}
                    </p>
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
        </section>

        {/* SECTION 3: Portfolio / Collaboration (ANAVIA AG) */}
        <section id="portfolio-anavia" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-10 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              SELECTED COLLABORATION
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {isTH ? "ความร่วมมือที่ได้รับการคัดเลือก" : isDE ? "Ausgewählte strategische Kooperation" : "Selected Strategic Collaboration"}
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-4"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              {isTH
                ? "ตัวอย่างความร่วมมือเชิงกลยุทธ์ในภาคเทคโนโลยีและความแม่นยำสูงระดับสากล"
                : isDE
                ? "Strategische Kooperation im Bereich Schweizer Hochpräzisionstechnologie und internationaler Geschäftsentwicklung."
                : "A premier example of our strategic collaboration in high-precision technology and global market development."}
            </p>
          </div>

          {/* Minimalist ANAVIA AG Showcase */}
          <div className="border border-secondary-container bg-surface max-w-5xl overflow-hidden reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Image side */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[380px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=85"
                  alt="ANAVIA Swiss Aerospace & Defence Technology"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>

              {/* Content side */}
              <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-4 border-b border-secondary-container">
                    <div>
                      <span className="font-label-md text-[10px] uppercase tracking-[0.16em] text-gold font-semibold block mb-1">
                        Switzerland • Strategic Mandate
                      </span>
                      <h3 className="font-display-md text-2xl sm:text-3xl text-primary font-bold">
                        ANAVIA AG
                      </h3>
                      <p className="font-label-md text-xs uppercase tracking-wider text-secondary mt-0.5 font-medium">
                        Swiss Aerospace &amp; Defence Technology
                      </p>
                    </div>

                    <span className="text-secondary border border-secondary-container font-label-md text-[10px] px-3 py-1 uppercase tracking-wider font-semibold">
                      Strategic Collaboration
                    </span>
                  </div>

                  <p className="font-body-md text-sm sm:text-base text-secondary leading-relaxed mb-6">
                    {isTH
                      ? "ความร่วมมือเชิงกลยุทธ์ที่มุ่งเน้นการพัฒนาธุรกิจระหว่างประเทศ การสร้างพันธมิตรระดับสากล และการเปิดประตูสู่ตลาดใหม่"
                      : isDE
                      ? "Strategische Kooperation mit Fokus auf internationale Markterschliessung, Partnerschaften und bilaterale Geschäftsentwicklung."
                      : "Strategic collaboration focused on international business development, high-impact partnerships, and cross-border commercial acceleration."}
                  </p>

                  {/* 3 Core Focus Tags */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-secondary-container py-4 gap-4">
                    <div>
                      <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-wider">
                        International Markets
                      </span>
                    </div>
                    <div className="sm:border-l sm:border-secondary-container sm:pl-4">
                      <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-wider">
                        Strategic Partnerships
                      </span>
                    </div>
                    <div className="sm:border-l sm:border-secondary-container sm:pl-4">
                      <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-wider">
                        Business Development
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-secondary-container flex flex-col sm:flex-row justify-between items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 border border-primary/35 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] px-5 py-3 hover:border-gold hover:text-gold transition-colors font-semibold group"
                  >
                    <span>{isTH ? "ติดต่อสอบถามข้อมูล" : isDE ? "Kontakt aufnehmen" : "Inquire Regarding Collaboration"}</span>
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

        {/* SECTION 4: Future Opportunities */}
        <section id="future-opportunities" className="section-dark editorial-dark-band scroll-mt-24">
          <div className="border-y border-secondary-container py-12 text-center max-w-4xl mx-auto space-y-4 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block">
              FUTURE OPPORTUNITIES
            </span>

            <h2 className="font-display-md text-2xl sm:text-3xl text-primary font-normal">
              {isTH ? "การพัฒนาพอร์ตโฟลิโอในอนาคต" : isDE ? "Zukünftige Opportunitäten & Portfolioentwicklung" : "Future Opportunities & Portfolio Evolution"}
            </h2>

            <div className="w-12 h-px bg-gold/40 mx-auto"></div>

            <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto leading-relaxed">
              {isTH
                ? "พอร์ตโฟลิโอของเราจะพัฒนาและขยายตัวเพิ่มขึ้นอย่างต่อเนื่องในอนาคต เราเปิดรับการศึกษาโอกาสใหม่ ๆ และการสร้างความสัมพันธ์เชิงกลยุทธ์ร่วมกับผู้ประกอบการและนักลงทุนทั่วโลก"
                : isDE
                ? "Unser Portfolio entwickelt sich kontinuierlich weiter. Wir evaluieren ausgewählte Opportunitäten und strategische Partnerschaften mit globalem Weitblick."
                : "Our portfolio will continue to evolve and expand over time as we identify exceptional opportunities, unique assets, and strategic relationships across global markets."}
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-primary/35 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] px-6 py-3.5 hover:border-gold hover:text-gold transition-colors font-semibold group"
              >
                <span>{isTH ? "ติดต่อเพื่อหารือโอกาสใหม่ ๆ" : isDE ? "Austausch initiieren" : "Connect Regarding New Opportunities"}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

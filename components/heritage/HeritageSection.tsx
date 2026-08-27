"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShieldCheck,
  Landmark,
  Compass,
  Lightbulb,
  Handshake,
  Clock,
  Globe,
  Quote,
  ArrowRight,
  Award,
} from "lucide-react";

export default function HeritageSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  const chapters = [
    {
      chapter: "Chapter I",
      title: t.heritage.foundation.title,
      desc: t.heritage.foundation.desc,
      footer: isTH ? "ตระกูล Leimann • สวิตเซอร์แลนด์" : "Leimann Family • Switzerland",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
    },
    {
      chapter: "Chapter II",
      title: t.heritage.activaStory.title,
      desc: t.heritage.activaStory.desc,
      footer: isTH ? "ActivaSwiss AG • Family Office" : "ActivaSwiss AG Family Office",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=85",
    },
    {
      chapter: "Chapter III • Present & Future",
      title: t.heritage.nextChapter.title,
      desc: t.heritage.nextChapter.desc,
      footer: isTH ? "Leimann Global Capital • นานาชาติ" : "Leimann Global Capital • International",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=85",
      isHighlight: true,
    },
  ];

  const valuesList = [
    {
      icon: <Compass className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: t.heritage.values.independence.title,
      desc: t.heritage.values.independence.desc,
      tag: "Autonomous Mindset",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: t.heritage.values.entrepreneurship.title,
      desc: t.heritage.values.entrepreneurship.desc,
      tag: "Initiative & Creation",
    },
    {
      icon: <Handshake className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: t.heritage.values.trust.title,
      desc: t.heritage.values.trust.desc,
      tag: "Enduring Integrity",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: t.heritage.values.continuity.title,
      desc: t.heritage.values.continuity.desc,
      tag: "Multi-Generational",
    },
    {
      icon: <Globe className="w-6 h-6 text-primary mb-3 stroke-1" />,
      title: t.heritage.values.international.title,
      desc: t.heritage.values.international.desc,
      tag: "Global Horizon",
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
            <span className="text-primary font-bold">Heritage</span>
          </div>
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary font-normal animate-fadeIn">
            {isTH ? "มรดกและประวัติความเป็นมา (Heritage)" : "Heritage"}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 animate-fadeIn">
            {isTH
              ? "เรื่องราวของตระกูล Leimann ความเป็นมาของ ActivaSwiss AG และรากฐานแห่งการสืบทอดที่มุ่งสู่อนาคต"
              : "The story of the Leimann family, the evolution of ActivaSwiss AG, and our enduring values shaping the future."}
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* ① SECTION 1: Hero & Overview */}
        <section id="heritage-hero" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left Side: Alpine Visual with Zoom Effect */}
            <div className="md:col-span-6 reveal img-zoom-container">
              <div className="aspect-[4/3] rounded overflow-hidden relative border border-secondary-container bg-surface-container-low shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5R_bk1aHwmv7qdI6JX3gy6xlasDAqiRX1uSm1yXObOTpHXk1SL9zQX63qjNulpo-jHdgDDurUMNCQtuejUBaVUR_dihAexLP7t9xYGW7mrZfpbziD5Ioh6I9Jy6JAUPDqWFYTMPXLlThPcyrLNWblcCgWN-Zo1plIgpAkDM-AjxLXxABY5jzTZ4_Fy8aRRWYznaaFD_HjVSjdRfqWJEwlluPfqrWgxqE5f7EANn6-Ijob1pjzA"
                  alt="Swiss Alpine Heritage & Generational Roots"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>

            {/* Right Side: Hero Narrative */}
            <div className="md:col-span-6 space-y-6 reveal">
              <div>
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
                  01 • {isTH ? "วิสัยทัศน์มรดก" : "OVERVIEW"}
                </span>
                <h2 className="font-display-lg text-3xl sm:text-4xl lg:text-5xl text-primary mt-1 mb-3 leading-tight">
                  {t.heritage.heading}
                </h2>
                <div className="w-12 h-px bg-platinum mb-6"></div>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {t.heritage.intro}
              </p>

              <div className="p-4 bg-surface-container-low border border-secondary-container rounded flex items-center gap-3 luxury-card">
                <Award className="w-7 h-7 text-primary shrink-0 stroke-1" />
                <div>
                  <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                    Swiss Fiduciary Principles
                  </span>
                  <span className="text-xs text-secondary font-body-md block">
                    {isTH ? "อิสระ ความรับผิดชอบ และการสร้างสิ่งที่มีคุณค่าอย่างยั่งยืน" : "Independence, long-term responsibility, and sustainable stewardship"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ② SECTION 2: Entrepreneurial Foundation & ③ ActivaSwiss AG & ④ The Next Chapter */}
        <section id="family-evolution" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              02 • {isTH ? "วิวัฒนาการของครอบครัว" : "FAMILY ENTERPRISE JOURNEY"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {isTH ? "เส้นทางจากรากฐานสู่เวทีสากล" : "From Strong Swiss Roots to Global Corridors"}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {isTH
                ? "3 ขั้นตอนสำคัญของประวัติศาสตร์ตระกูล Leimann และการเติบโตขององค์กรธุรกิจครอบครัว"
                : "The three definitive chapters shaping our foundation, governance, and international future."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {chapters.map((ch, idx) => (
              <div
                key={idx}
                className={`border rounded overflow-hidden flex flex-col justify-between shadow-xs luxury-card reveal img-zoom-container ${
                  ch.isHighlight ? "border-primary/50 bg-surface-container-low" : "border-secondary-container bg-surface-container-lowest"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="relative h-36 w-full overflow-hidden bg-surface-container-high">
                  <img src={ch.image} alt={ch.title} className="w-full h-full object-cover img-zoom opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`font-label-md text-[11px] uppercase tracking-widest px-2.5 py-1 rounded inline-block mb-3 ${
                      ch.isHighlight ? "bg-primary text-on-primary font-bold" : "bg-surface-container-low text-secondary"
                    }`}>
                      {ch.chapter}
                    </span>

                    <h3 className={`font-headline-lg text-xl mb-3 font-medium ${ch.isHighlight ? "text-primary font-bold" : "text-primary"}`}>
                      {ch.title}
                    </h3>

                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-secondary-container/50 text-xs font-label-md text-secondary font-medium">
                    {ch.footer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑤ SECTION 5: Our Values (5 Values) */}
        <section id="our-values" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              03 • {isTH ? "คุณค่าหลักของเรา" : "CORE PRINCIPLES"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.heritage.valuesTitle}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {isTH
                ? "5 คุณค่าสำคัญที่ยังคงชี้นำและเป็นหลักยึดในการลงทุน การสร้างพันธมิตร และการแสวงหาโอกาสใหม่ ๆ ของเรา"
                : "The five core values guiding our capital allocation, partnership selection, and multi-generational stewardship."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-gutter">
            {valuesList.map((val, idx) => (
              <div
                key={idx}
                className="p-6 border border-secondary-container rounded bg-surface-container-lowest hover:border-primary-fixed-dim transition-all duration-300 flex flex-col justify-between shadow-xs luxury-card reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {val.icon}
                    <span className="font-label-md text-xs font-bold text-primary">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-headline-lg text-base text-tertiary mb-2 font-medium">
                    {val.title}
                  </h3>

                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-secondary-container/50">
                  <span className="text-[10px] font-label-md text-primary uppercase tracking-wider font-semibold">
                    {val.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ⑥ SECTION 6: Looking Forward (Quote Block) */}
        <section id="looking-forward" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="p-10 sm:p-14 bg-primary text-on-primary rounded text-center max-w-4xl mx-auto shadow-md reveal luxury-card">
            <Quote className="w-10 h-10 text-on-primary/60 mx-auto mb-6" />

            <p className="font-display-md text-xl sm:text-2xl font-normal mb-2 text-primary-fixed leading-snug">
              {t.heritage.quote.foundation}
            </p>

            <p className="font-display-md text-xl sm:text-2xl font-normal mb-4 text-primary-fixed leading-snug">
              {t.heritage.quote.opportunity}
            </p>

            <p className="font-body-lg text-base sm:text-lg mb-8 text-on-primary font-light max-w-2xl mx-auto leading-relaxed">
              {t.heritage.quote.connection}
            </p>

            <div className="w-16 h-px bg-on-primary/30 mx-auto mb-4"></div>

            <span className="font-label-md text-xs uppercase tracking-[0.2em] text-primary-fixed font-bold block">
              {t.heritage.quote.built}
            </span>

            <div className="pt-8 flex justify-center gap-4 flex-wrap">
              <Link
                href="/investments"
                className="inline-flex items-center space-x-2 bg-surface text-primary font-label-md text-sm px-6 py-3 rounded hover:bg-surface-container transition-colors active:scale-95 shadow-sm font-semibold group"
              >
                <span>{isTH ? "ดูการลงทุนและความร่วมมือ" : "Explore Investments"}</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 border border-on-primary/40 text-on-primary font-label-md text-sm px-6 py-3 rounded hover:bg-on-primary/10 transition-colors active:scale-95"
              >
                <span>{isTH ? "ติดต่อเรา" : "Contact Us"}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

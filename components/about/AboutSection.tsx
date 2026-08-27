"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Compass,
  Lightbulb,
  Globe,
  Handshake,
  ArrowRight,
  Landmark,
  ShieldCheck,
  Building2,
} from "lucide-react";

export default function AboutSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  const approachItems = [
    {
      icon: <Compass className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: t.aboutUs.approaches.longTerm.title,
      desc: t.aboutUs.approaches.longTerm.desc,
      tag: "Long-Term Value",
      image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: t.aboutUs.approaches.entrepreneurial.title,
      desc: t.aboutUs.approaches.entrepreneurial.desc,
      tag: "Agility & Initiative",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Globe className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: t.aboutUs.approaches.international.title,
      desc: t.aboutUs.approaches.international.desc,
      tag: "Cross-Border Scope",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    },
    {
      icon: <Handshake className="w-7 h-7 text-primary mb-4 stroke-1" />,
      title: t.aboutUs.approaches.partnerships.title,
      desc: t.aboutUs.approaches.partnerships.desc,
      tag: "Strategic Alignment",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="w-full bg-surface text-on-surface overflow-hidden">
      {/* Top Banner / Breadcrumb on Dedicated Page */}
      <div className="py-12 border-b border-secondary-container bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <div className="flex items-center gap-2 text-xs font-label-md text-secondary uppercase tracking-widest mb-2 animate-fadeIn">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-bold">About Us</span>
          </div>
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary font-normal animate-fadeIn">
            {isTH ? "เกี่ยวกับเรา (About Us)" : "About Us"}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 animate-fadeIn">
            {isTH
              ? "ทำความรู้จักกับ Leimann Global Capital — แพลตฟอร์มการลงทุนและธุรกิจเอกชนของครอบครัวสวิส"
              : "Discover Leimann Global Capital — who we are, our philosophy, and how we operate as a Swiss family investment platform."}
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* ① SECTION 1: About Leimann Global Capital */}
        <section id="about-intro" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left Narrative */}
            <div className="md:col-span-6 space-y-6 reveal">
              <div>
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
                  01 • {isTH ? "ข้อมูลเบื้องต้น" : "ABOUT LEIMANN GLOBAL CAPITAL"}
                </span>
                <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-3">
                  {t.aboutUs.heading}
                </h2>
                <div className="w-12 h-px bg-platinum mb-6"></div>
              </div>

              <div className="space-y-4 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                <p className="font-medium text-on-surface">
                  {t.aboutUs.p1}
                </p>
                <p>
                  {t.aboutUs.p2}
                </p>

                {/* Intentional Flexibility Callout */}
                <div className="p-5 bg-surface-container-low border-l-4 border-primary rounded-r shadow-xs my-4">
                  <p className="font-display-md text-lg sm:text-xl text-primary font-normal">
                    {t.aboutUs.flexibleHighlight}
                  </p>
                  <p className="font-body-md text-sm text-secondary mt-1">
                    {t.aboutUs.p3}
                  </p>
                </div>
              </div>

              {/* Quick Key Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
                  <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                    {isTH ? "การลงทุนที่คัดสรร" : "Selected Investments"}
                  </span>
                  <span className="text-xs text-secondary font-body-md mt-0.5 block">
                    {isTH ? "ประเมินคุณค่าเป็นรายกรณี" : "Bespoke Case-by-Case Evaluation"}
                  </span>
                </div>
                <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
                  <span className="font-label-md text-xs font-bold text-primary block uppercase tracking-wider">
                    {isTH ? "พันธมิตรเชิงกลยุทธ์" : "Strategic Collaborations"}
                  </span>
                  <span className="text-xs text-secondary font-body-md mt-0.5 block">
                    {isTH ? "เครือข่ายระดับสากล" : "Cross-Border Synergy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Architectural Visual with Zoom Effect */}
            <div className="md:col-span-6 reveal img-zoom-container">
              <div className="aspect-[4/3] rounded overflow-hidden relative border border-secondary-container bg-surface-container-low shadow-sm">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4kTocFZVyf-UPTtgFC2jBK7SEvnGgTotwDG8-DRRGx_FNbEsaGSM_QSLySCV1986SJpZ5oaPuMk6PQL02zvoJCo2OiNHQfRZzL2nVLkzVDfE1evRb0IfT_QI-FBELHCl6ff-g0mJb5829hdA28NjE61UvvzqNNcK1lRzaamFwQERf5nqMVGE1QTQr61gaVm_sQPthTtWil5UKMpxALQ1mes3UZwmlKKaA0GclKLiPvejGddS5Q"
                  alt="Swiss Architecture & Fiduciary Precision"
                  className="w-full h-full object-cover img-zoom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ② SECTION 2: Our Approach (4 Cards) */}
        <section id="our-approach" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              02 • {isTH ? "แนวทางการดำเนินงาน" : "OUR PHILOSOPHY"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.aboutUs.approachTitle}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {isTH
                ? "หลักการ 4 ประการที่กำหนดกรอบการทำงาน การประเมินโอกาส และการสร้างความสัมพันธ์ทางธุรกิจของเรา"
                : "The four core pillars that guide our evaluation of opportunities, operational discipline, and enduring partnerships."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {approachItems.map((item, idx) => (
              <div
                key={idx}
                className="border border-secondary-container rounded bg-surface-container-lowest overflow-hidden flex flex-col justify-between shadow-xs luxury-card reveal img-zoom-container"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="relative h-28 w-full overflow-hidden bg-surface-container-low">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover img-zoom opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      {item.icon}
                      <span className="font-label-md text-[11px] uppercase tracking-wider text-secondary bg-surface-container-low px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-headline-lg text-lg text-tertiary mb-2 font-medium">
                      {item.title}
                    </h3>

                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-secondary-container/60">
                    <span className="text-[11px] font-label-md text-primary uppercase tracking-wider font-semibold">
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ③ SECTION 3: Part of the ActivaSwiss Family Office */}
        <section id="activaswiss-family-office" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="p-8 sm:p-12 border border-secondary-container rounded bg-surface-container-low shadow-sm reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-8 space-y-5">
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  03 • {isTH ? "โครงสร้างองค์กรครอบครัว" : "FAMILY ENTERPRISE STRUCTURE"}
                </span>

                <div className="inline-block bg-primary text-on-primary font-label-md text-xs px-3.5 py-1.5 rounded uppercase tracking-wider font-semibold">
                  {t.aboutUs.familyOffice.subholdingBadge}
                </div>

                <h2 className="font-display-md text-2xl sm:text-4xl text-primary font-normal leading-tight">
                  {t.aboutUs.familyOffice.title}
                </h2>

                <div className="space-y-3 font-body-md text-on-surface-variant text-base sm:text-lg leading-relaxed">
                  <p className="font-medium text-on-surface">
                    {t.aboutUs.familyOffice.desc1}
                  </p>
                  <p>
                    {t.aboutUs.familyOffice.desc2}
                  </p>
                  <p className="italic text-secondary">
                    {t.aboutUs.familyOffice.desc3}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    href="/heritage"
                    className="inline-flex items-center space-x-2 bg-primary text-on-primary font-label-md text-sm px-6 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors active:scale-95 shadow-sm group"
                  >
                    <span>{isTH ? "ค้นพบเรื่องราวของเรา (Discover Our Heritage)" : "Discover Our Heritage"}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/investments"
                    className="inline-flex items-center space-x-2 border border-secondary-container bg-surface px-6 py-3 rounded font-label-md text-sm text-primary hover:bg-surface-container transition-colors active:scale-95 shadow-xs"
                  >
                    <span>{isTH ? "ดูการลงทุนและความร่วมมือ" : "View Investments & Collaborations"}</span>
                  </Link>
                </div>
              </div>

              {/* Right Side Institution Card */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                <div className="p-8 bg-surface-container-lowest border border-secondary-container w-full text-center space-y-3 rounded shadow-xs luxury-card">
                  <Landmark className="w-9 h-9 text-primary mx-auto stroke-1" />
                  <span className="font-display-md text-2xl text-primary block font-bold">
                    ActivaSwiss AG
                  </span>
                  <span className="text-xs font-label-md uppercase tracking-wider text-secondary block font-semibold">
                    Family Office Switzerland
                  </span>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed pt-1">
                    {isTH
                      ? "การบริหารจัดการสินทรัพย์อย่างมั่นคง การกำกับดูแลกิจการ และความต่อเนื่องที่สืบทอดหลายรุ่น"
                      : "Multi-generational Swiss family office structure, governance, and generational stewardship."}
                  </p>
                  <div className="pt-3 border-t border-secondary-container text-[11px] text-secondary">
                    Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

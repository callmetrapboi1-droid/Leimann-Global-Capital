"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const approachItems = [
    {
      number: "01",
      title: t.aboutUs.approaches.longTerm.title,
      desc: t.aboutUs.approaches.longTerm.desc,
      tag: "Long-Term Value",
    },
    {
      number: "02",
      title: t.aboutUs.approaches.entrepreneurial.title,
      desc: t.aboutUs.approaches.entrepreneurial.desc,
      tag: "Agility & Initiative",
    },
    {
      number: "03",
      title: t.aboutUs.approaches.international.title,
      desc: t.aboutUs.approaches.international.desc,
      tag: "Cross-Border Scope",
    },
    {
      number: "04",
      title: t.aboutUs.approaches.partnerships.title,
      desc: t.aboutUs.approaches.partnerships.desc,
      tag: "Strategic Alignment",
    },
  ];

  const teamMembers = [
    {
      name: "Matheus Leimann",
      role: "Founder & CEO",
      titleTH: "ผู้ก่อตั้งและประธานเจ้าหน้าที่บริหาร",
      titleDE: "Gründer & Chief Executive Officer",
      tagline: "Connecting Swiss Private Equity with Asia-Pacific Growth Corridors",
      taglineTH: "เชื่อมโยงการลงทุนนอกตลาดสวิสสู่ศูนย์กลางการเติบโตในเอเชียแปซิฟิก",
      taglineDE: "Brückenschlag zwischen Schweizer Private Equity und asiatischen Wachstumsmärkten",
      image: "https://activaswiss.vercel.app/assets/aboutus/aboutus_matheus_cropped.png",
      bio: [
        "Born in 2001 in Rio de Janeiro, Brazil, Matheus is the youngest son of Urs Leimann. He completed a commercial apprenticeship with a professional baccalaureate in Business Hospitality Management and furthered his studies at EHL (École Hôtelière de Lausanne), Singapore campus.",
        "Alongside his academic path, he built a career in Asia—working as a fashion model for various luxury brands in Thailand and Taiwan and later beginning an acting career with WeTV (Tencent Group), one of Asia's leading media companies. At ActivaSwiss AG, Matheus focuses on strengthening networks between the Asia-Pacific and Swiss markets, with a particular emphasis on identifying and supporting new private equity opportunities.",
      ],
      languages: ["German", "English", "French", "Portuguese", "Spanish", "Thai", "Mandarin"],
      hobbies: "Golf, Tennis, Fencing, Traveling, Cooking, Fashion & Entertainment",
      phones: ["+41 79 138 83 29", "+66 93 448 66 48 (TH)"],
      email: "matheus.leimann@leimannglobalcapital.ch",
      fiduciarySeal: "Swiss Fiduciary Governance",
    },
    {
      name: "Lindalva Rodrigues da Silva",
      role: "Executive Assistant",
      titleTH: "ผู้ช่วยฝ่ายบริหาร",
      titleDE: "Executive Assistant & Koordination",
      tagline: "Senior Executive Coordination & Multi-Jurisdictional Administration",
      taglineTH: "การประสานงานระดับบริหารและการจัดการข้ามพรมแดน",
      taglineDE: "Strategische Geschäftsführungskoordination und administrative Integrität",
      image: "https://activaswiss.vercel.app/assets/aboutus/aboutus_lindalva.png",
      bio: [
        "Born in Fortaleza, Brazil, Lindalva supports the executive management team of ActivaSwiss AG on a part-time basis. She began her career in Rio de Janeiro, Brazil, working as an executive assistant at an international trade company, where she gained valuable professional experience at senior organizational levels.",
        "As the partner of Urs Leimann and mother of Matheus, she now contributes to the smooth coordination of administrative and organizational tasks within the Family Office.",
      ],
      languages: ["German", "Portuguese", "Italian", "Spanish"],
      hobbies: "Golf, Traveling, Horse Riding, Fashion",
      phones: ["+41 79 501 62 67"],
      email: "lindalva.rodriguesdasilva@leimannglobalcapital.ch",
      fiduciarySeal: "Family Office Administration",
    },
  ];

  return (
    <div className="section-light w-full text-on-surface">
      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-24">
        {/* SECTION 1: Narrative & Identity */}
        <section id="about-intro" className="scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Left Narrative */}
            <div className="md:col-span-6 space-y-6 reveal">
              <div>
                <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
                  {t.aboutUs.badge}
                </span>
                <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-3">
                  {t.aboutUs.heading}
                </h2>
                <div className="w-12 h-px bg-gold/40 mb-6"></div>
              </div>

              <div className="space-y-4 font-body-lg text-body-lg text-secondary leading-relaxed">
                <p className="font-normal text-on-surface">
                  {t.aboutUs.p1}
                </p>
                <p>
                  {t.aboutUs.p2}
                </p>

                {/* Intentional Flexibility Callout - Clean Hairline Border */}
                <div className="p-6 border-l-2 border-gold bg-surface my-6">
                  <p className="font-display-md text-lg sm:text-xl text-primary font-normal">
                    {t.aboutUs.flexibleHighlight}
                  </p>
                  <p className="font-body-md text-sm text-secondary mt-2 leading-relaxed">
                    {t.aboutUs.p3}
                  </p>
                </div>
              </div>

              {/* 2 Core Tenets */}
              <div className="grid grid-cols-2 border-t border-secondary-container pt-6 gap-6">
                <div>
                  <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.12em]">
                    {isTH ? "การลงทุนที่คัดสรร" : isDE ? "Ausgewählte Investitionen" : "Selected Investments"}
                  </span>
                  <span className="text-xs text-secondary font-body-md mt-1 block">
                    {isTH ? "ประเมินคุณค่าเป็นรายกรณี" : isDE ? "Bespoke Einzelfallanalyse" : "Bespoke Case-by-Case Evaluation"}
                  </span>
                </div>
                <div className="border-l border-secondary-container pl-6">
                  <span className="font-label-md text-[11px] font-semibold text-primary block uppercase tracking-[0.12em]">
                    {isTH ? "พันธมิตรเชิงกลยุทธ์" : isDE ? "Strategische Kooperationen" : "Strategic Collaborations"}
                  </span>
                  <span className="text-xs text-secondary font-body-md mt-1 block">
                    {isTH ? "เครือข่ายระดับสากล" : isDE ? "Grenzüberschreitende Synergien" : "Cross-Border Synergy"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Architectural Visual */}
            <div className="md:col-span-6 reveal img-zoom-container">
              <div className="aspect-[4/3] overflow-hidden relative border border-secondary-container bg-surface">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4kTocFZVyf-UPTtgFC2jBK7SEvnGgTotwDG8-DRRGx_FNbEsaGSM_QSLySCV1986SJpZ5oaPuMk6PQL02zvoJCo2OiNHQfRZzL2nVLkzVDfE1evRb0IfT_QI-FBELHCl6ff-g0mJb5829hdA28NjE61UvvzqNNcK1lRzaamFwQERf5nqMVGE1QTQr61gaVm_sQPthTtWil5UKMpxALQ1mes3UZwmlKKaA0GclKLiPvejGddS5Q"
                  alt="Swiss Architecture & Fiduciary Precision"
                  className="w-full h-full object-cover img-zoom opacity-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Philosophy (4 Clean Columns) */}
        <section id="our-approach" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="mb-12 reveal">
            <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-3">
              {t.aboutUs.badge}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary mt-1 mb-2">
              {t.aboutUs.approachTitle}
            </h2>
            <div className="w-12 h-px bg-gold/40 mb-4"></div>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">
              {isTH
                ? "หลักการ 4 ประการที่กำหนดกรอบการทำงาน การประเมินโอกาส และการสร้างความสัมพันธ์ทางธุรกิจของเรา"
                : isDE
                ? "Die vier Grundpfeiler unserer strategischen Opportunitätsbewertung und Partnerschaften."
                : "The four core pillars that guide our evaluation of opportunities, operational discipline, and enduring partnerships."}
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-secondary-container sm:grid-cols-2 lg:grid-cols-4">
            {approachItems.map((item, idx) => (
              <div
                key={idx}
                className="min-h-64 border-b border-secondary-container py-8 sm:px-6 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(3)]:border-r reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <span className="font-label-md text-[11px] text-gold font-semibold">{item.number}</span>
                    <h3 className="mt-5 font-headline-lg text-xl text-primary mb-3 font-medium">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-sm text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-[10px] font-label-md uppercase tracking-[0.12em] text-secondary font-semibold mt-8 pt-4 border-t border-secondary-container block">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Executive Leadership — Both Leaders Visible Side-by-Side */}
        <section id="leadership" className="border-t border-secondary-container pt-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
            <div>
              <span className="font-label-md text-[11px] font-semibold uppercase tracking-[0.18em] text-gold block mb-3">
                LEIMANN GLOBAL CAPITAL • LEADERSHIP
              </span>
              <h2 className="font-display-lg text-4xl sm:text-5xl text-primary font-normal">
                {isTH ? "คณะผู้บริหาร" : isDE ? "Führung & Team" : "Our Team"}
              </h2>
              <div className="mt-3 h-px w-16 bg-gold/50" />
            </div>

            <p className="max-w-xl font-body-md text-sm text-secondary leading-relaxed md:text-right">
              {isTH
                ? "วิสัยทัศน์ระดับสากลผสานความต่อเนื่องแห่งมรดกสวิส ขับเคลื่อนการลงทุนข้ามพรมแดนอย่างมีวินัย"
                : isDE
                ? "Schweizer Fiduciary-Tradition verbindet sich mit globalen Wachstumskorridoren."
                : "Bridging generational Swiss fiduciary stewardship with high-agility Asia-Pacific growth corridors."}
            </p>
          </div>

          <div className="space-y-10">
            {teamMembers.map((member, mIdx) => (
              <article
                key={member.name}
                className="grid grid-cols-1 overflow-hidden border border-secondary-container bg-surface reveal shadow-sm lg:grid-cols-12"
                style={{ transitionDelay: `${mIdx * 120}ms` }}
              >
                <div className="relative h-96 w-full overflow-hidden bg-black sm:h-[480px] lg:col-span-5 lg:h-auto lg:min-h-[560px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top opacity-95 transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                  {/* Footprint badge on portrait */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[10px] font-label-md uppercase tracking-[0.16em] text-gold/90 border-t border-white/15 pt-2">
                    <span>Freienbach SZ • Switzerland</span>
                    <span>{member.fiduciarySeal}</span>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-6 p-8 sm:p-10 lg:col-span-7 lg:p-12">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-label-md text-[10px] font-semibold text-gold">
                        0{mIdx + 1}
                      </span>
                      <span className="font-label-md text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
                        {isTH ? member.titleTH : isDE ? member.titleDE : member.role}
                      </span>
                    </div>
                    <h3 className="font-display-lg text-3xl text-primary font-normal">
                      {member.name}
                    </h3>
                    <div className="h-px w-12 bg-gold/40 my-4" />

                    <p className="font-display-md text-sm text-secondary italic mb-4">
                      "{isTH ? member.taglineTH : isDE ? member.taglineDE : member.tagline}"
                    </p>

                    <div className="space-y-3 font-body-md text-sm leading-relaxed text-secondary">
                      {member.bio.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-6 pt-4 border-t border-secondary-container space-y-2 text-xs font-body-md">
                      <div>
                        <span className="font-semibold text-primary">Languages: </span>
                        <span className="text-secondary">{member.languages.join(" • ")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-primary">Interests: </span>
                        <span className="text-secondary">{member.hobbies}</span>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Links */}
                  <div className="pt-6 border-t border-secondary-container flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex flex-col gap-1.5">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 font-label-md text-xs text-primary hover:text-gold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{member.email}</span>
                      </a>
                      {member.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                          className="flex items-center gap-2 font-label-md text-xs text-secondary hover:text-gold transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span>{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION 4: Family History Bridge */}
        <section id="our-history" className="section-dark relative left-1/2 w-screen -translate-x-1/2 overflow-hidden scroll-mt-24">
          <div className="mx-auto grid max-w-container-max grid-cols-1 gap-8 px-7 py-12 sm:px-12 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-margin-desktop lg:py-16">
            <div className="lg:col-span-4">
              <h2 className="font-display-lg text-5xl leading-none text-primary sm:text-6xl">
                Our History
              </h2>
            </div>

            <div className="space-y-4 font-body-md text-sm leading-relaxed text-primary sm:text-base lg:col-span-8 lg:max-w-3xl">
              <p className="font-semibold">
                From generation to generation, the name endures, the values remain.
              </p>
              <p>
                The <strong>Leimann Family</strong> has stood as a symbol of resilience and vision since the dawn of the industrial revolution in Switzerland.
              </p>
              <p>
                From the early 19th century onward, generations of Leimanns have embodied the spirit of entrepreneurship - building, leading, and preserving with integrity and foresight. Remaining steadfast in their values and united as a family, they have never lost their true identity.
              </p>
              <p>
                Their legacy continues to thrive today - not merely honoring the past, but always thinking toward tomorrow.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden bg-black">
            <img
              src="https://activaswiss.vercel.app/assets/aboutus/aboutus_ourhistory.png"
              alt="Leimann family history"
              className="block h-auto w-full grayscale opacity-95"
              loading="eager"
            />
          </div>
        </section>

        {/* SECTION 5: Part of the ActivaSwiss Family Office */}
        <section id="activaswiss-family-office" className="pt-8 border-t border-secondary-container scroll-mt-24">
          <div className="border-y border-secondary-container py-10 sm:py-14 reveal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              <div className="lg:col-span-8 space-y-5">
                <span className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary font-semibold block">
                  FAMILY ENTERPRISE STRUCTURE
                </span>

                <div className="inline-block text-gold font-label-md text-[10px] uppercase tracking-[0.14em] font-semibold">
                  {t.aboutUs.familyOffice.subholdingBadge}
                </div>

                <h2 className="font-display-md text-2xl sm:text-4xl text-primary font-normal leading-tight">
                  {t.aboutUs.familyOffice.title}
                </h2>

                <div className="space-y-3 font-body-md text-secondary text-base leading-relaxed">
                  <p className="font-normal text-on-surface">
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
                    className="inline-flex items-center space-x-2 border border-primary/35 text-primary font-label-md text-[11px] uppercase tracking-[0.12em] px-5 py-3 hover:border-gold hover:text-gold transition-colors font-semibold group"
                  >
                    <span>{isTH ? "ค้นพบเรื่องราวของเรา" : isDE ? "Unsere Herkunft entdecken" : "Discover Our Heritage"}</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/investments"
                    className="inline-flex items-center space-x-2 border border-secondary-container text-secondary px-5 py-3 font-label-md text-[11px] uppercase tracking-[0.12em] hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <span>{isTH ? "ดูการลงทุนและความร่วมมือ" : isDE ? "Investitionen ansehen" : "View Investments & Collaborations"}</span>
                  </Link>
                </div>
              </div>

              {/* Right Side Institution Card */}
              <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                <div className="border-l border-secondary-container px-8 py-2 w-full text-left space-y-3">
                  <span className="font-display-md text-2xl text-primary block font-bold">
                    ActivaSwiss AG
                  </span>
                  <span className="text-[10px] font-label-md uppercase tracking-[0.14em] text-secondary block font-semibold">
                    Family Office Switzerland
                  </span>
                  <p className="font-body-md text-xs text-secondary leading-relaxed pt-1">
                    {isTH
                      ? "การบริหารจัดการสินทรัพย์อย่างมั่นคง การกำกับดูแลกิจการ และความต่อเนื่องที่สืบทอดหลายรุ่น"
                      : isDE
                      ? "Schweizer Family Office Struktur mit Fokus auf Generationensicherung und Vermögensverwaltung."
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

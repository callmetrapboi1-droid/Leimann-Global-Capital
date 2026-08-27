"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Globe, Compass, Lightbulb } from "lucide-react";

export default function HomeAboutSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section id="about-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto border-t border-secondary-container bg-surface overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Short Company Intro */}
        <div className="md:col-span-6 space-y-6 reveal">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              01 • {isTH ? "เกี่ยวกับเรา" : "ABOUT US"}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
              {isTH ? "เกี่ยวกับ Leimann Global Capital" : "About Leimann Global Capital"}
            </h2>
            <div className="w-12 h-px bg-platinum"></div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {isTH
              ? "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่มีฐานอยู่ในประเทศสวิตเซอร์แลนด์ พร้อมมุมมองและเครือข่ายในระดับนานาชาติ"
              : "Leimann Global Capital is a Swiss-based investment and business platform operating with an agile entrepreneurial mindset and an international perspective."}
          </p>

          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {isTH
              ? "เรามุ่งเน้นการประเมินโอกาสการลงทุนแบบยืดหยุ่นโดยตั้งใจ (Deliberately Flexible) เพื่อสร้างคุณค่าที่ยั่งยืนในระยะยาวร่วมกับพันธมิตรระดับสากล"
              : "We evaluate investment opportunities on an individual basis, focusing on areas where our experience, global network, and long-term perspective create lasting enduring value."}
          </p>

          {/* 3 Key Traits: Swiss-based, International perspective, Entrepreneurial */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
              <Compass className="w-5 h-5 text-primary mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">Swiss-Based</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "ฐานที่ตั้งมั่นคงในสวิตเซอร์แลนด์" : "Rooted in Swiss fiduciary standards"}
              </p>
            </div>

            <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
              <Globe className="w-5 h-5 text-primary mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">International</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "มุมมองและเครือข่ายระดับโลก" : "Global outlook across borders"}
              </p>
            </div>

            <div className="p-4 border border-secondary-container rounded bg-surface-container-lowest luxury-card">
              <Lightbulb className="w-5 h-5 text-primary mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">Entrepreneurial</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "คิดแบบผู้ประกอบการที่คล่องตัว" : "Agility & independent thinking"}
              </p>
            </div>
          </div>

          {/* CTA Link to About Page */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-primary font-label-md text-sm font-semibold hover:underline group"
            >
              <span>{isTH ? "อ่านเพิ่มเติมเกี่ยวกับเรา →" : "Read More About Us →"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Minimalist Swiss Architecture Image */}
        <div className="md:col-span-6 reveal img-zoom-container">
          <div className="aspect-[4/3] rounded overflow-hidden relative border border-secondary-container bg-surface-container-low shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4kTocFZVyf-UPTtgFC2jBK7SEvnGgTotwDG8-DRRGx_FNbEsaGSM_QSLySCV1986SJpZ5oaPuMk6PQL02zvoJCo2OiNHQfRZzL2nVLkzVDfE1evRb0IfT_QI-FBELHCl6ff-g0mJb5829hdA28NjE61UvvzqNNcK1lRzaamFwQERf5nqMVGE1QTQr61gaVm_sQPthTtWil5UKMpxALQ1mes3UZwmlKKaA0GclKLiPvejGddS5Q"
              alt="Swiss Architecture & Fiduciary Stability"
              className="w-full h-full object-cover img-zoom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

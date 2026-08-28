"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Globe, Compass, Lightbulb } from "lucide-react";

export default function HomeAboutSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section id="about-summary" className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto border-t border-secondary-container bg-background overflow-hidden scroll-mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Narrative */}
        <div className="md:col-span-6 space-y-6 reveal">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-gold font-semibold block mb-2">
              {t.aboutUs.badge}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
              {t.aboutUs.heading}
            </h2>
            <div className="w-12 h-px bg-gold/40"></div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
            {t.aboutUs.p1}
          </p>

          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {t.aboutUs.p2}
          </p>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 border border-secondary-container rounded bg-surface-container luxury-card">
              <Compass className="w-5 h-5 text-gold mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">Swiss-Based</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "ฐานที่ตั้งมั่นคงในสวิตเซอร์แลนด์" : isDE ? "In Schweizer Werten verwurzelt" : "Rooted in Swiss standards"}
              </p>
            </div>

            <div className="p-4 border border-secondary-container rounded bg-surface-container luxury-card">
              <Globe className="w-5 h-5 text-gold mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">International</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "มุมมองและเครือข่ายระดับโลก" : isDE ? "Globaler Weitblick" : "Global outlook across borders"}
              </p>
            </div>

            <div className="p-4 border border-secondary-container rounded bg-surface-container luxury-card">
              <Lightbulb className="w-5 h-5 text-gold mb-2 stroke-1" />
              <h4 className="font-label-md text-xs font-bold text-primary uppercase tracking-wider">Entrepreneurial</h4>
              <p className="font-caption text-xs text-secondary mt-0.5">
                {isTH ? "คิดแบบผู้ประกอบการที่คล่องตัว" : isDE ? "Unternehmerische Agilität" : "Agility & independent mindset"}
              </p>
            </div>
          </div>

          {/* CTA Link to About Page */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-gold font-label-md text-sm font-semibold hover:text-gold-light group"
            >
              <span>{isTH ? "อ่านเพิ่มเติมเกี่ยวกับเรา →" : isDE ? "Mehr über uns erfahren →" : "Read More About Us →"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Architectural Visual */}
        <div className="md:col-span-6 reveal img-zoom-container">
          <div className="aspect-[4/3] rounded overflow-hidden relative border border-secondary-container bg-surface-container shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs4kTocFZVyf-UPTtgFC2jBK7SEvnGgTotwDG8-DRRGx_FNbEsaGSM_QSLySCV1986SJpZ5oaPuMk6PQL02zvoJCo2OiNHQfRZzL2nVLkzVDfE1evRb0IfT_QI-FBELHCl6ff-g0mJb5829hdA28NjE61UvvzqNNcK1lRzaamFwQERf5nqMVGE1QTQr61gaVm_sQPthTtWil5UKMpxALQ1mes3UZwmlKKaA0GclKLiPvejGddS5Q"
              alt="Swiss Architecture & Fiduciary Stability"
              className="w-full h-full object-cover img-zoom opacity-80 contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

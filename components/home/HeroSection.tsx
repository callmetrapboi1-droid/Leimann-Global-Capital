"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function HeroSection({ onOpenPortal }: HeroSectionProps) {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] h-[92vh] flex items-center overflow-hidden bg-surface">
      {/* Background Ultra-Sharp Crystal Clear Swiss Architecture Visual */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3200&q=100"
          alt="Swiss Modern Financial Architecture"
          className="w-full h-full object-cover object-right md:object-[80%_center] opacity-100 contrast-[1.05] brightness-[1.02]"
          loading="eager"
        />
        {/* Soft, Precision Left-Side Gradient to ensure 100% Text Legibility while keeping Image Crystal Sharp on Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 md:via-surface/80 to-transparent w-full md:w-3/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-surface/20 md:hidden"></div>
      </div>

      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile flex flex-col justify-center h-full py-12">
        {/* Direct Text on Canvas - NO Card Container, 100% Sharp High-End Contrast */}
        <div className="max-w-2xl animate-fadeIn">
          {/* Main Display Headline */}
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary mb-stack-md leading-tight font-bold tracking-tight">
            Global Perspective.<br />Long-Term Vision.
          </h1>

          {/* Thai Subtitle */}
          {isTH && (
            <p className="font-display-md text-xl sm:text-2xl text-primary mb-stack-md font-medium">
              มุมมองระดับโลก วิสัยทัศน์ระยะยาว
            </p>
          )}

          {/* Core Short Description - High Contrast Deep Slate */}
          <p className="font-body-lg text-body-lg max-md:text-body-md text-on-surface font-normal mb-stack-sm max-w-xl leading-relaxed">
            {isTH
              ? "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่ถือครองโดยเอกชน มีฐานอยู่ในประเทศสวิตเซอร์แลนด์ และมุ่งเน้นการลงทุนเชิงกลยุทธ์ระดับโลก"
              : "Leimann Global Capital is a privately held investment and business platform based in Switzerland, dedicated to strategic global investments and long-term capital stewardship."}
          </p>

          <p className="font-body-md text-body-md text-slate-700 mb-stack-lg max-w-xl leading-relaxed">
            {isTH
              ? "ในฐานะส่วนหนึ่งของโครงสร้างการลงทุนของตระกูล Leimann และ Subholding ของ ActivaSwiss AG Family Office เราขับเคลื่อนการลงทุนในเทคโนโลยีการเงิน โครงการเชิงกลยุทธ์ และธุรกิจข้ามพรมแดน"
              : "As part of the Leimann family investment structure and a subholding of the ActivaSwiss AG Family Office, we pursue selected fintech, technology, and strategic international initiatives."}
          </p>

          {/* CTA: Explore Our World */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#about-summary"
              className="inline-flex items-center space-x-2 bg-primary text-on-primary px-7 py-3.5 rounded font-label-md text-label-md transition-all hover:bg-on-primary-fixed-variant shadow-sm active:scale-95 group"
            >
              <span>{isTH ? "สำรวจโลกของเรา (Explore Our World)" : "Explore Our World"}</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              href="/investments"
              className="inline-flex items-center space-x-2 border border-secondary-container bg-surface-container-lowest px-6 py-3.5 rounded font-label-md text-label-md text-primary transition-all hover:bg-surface-container active:scale-95 shadow-xs"
            >
              <span>{isTH ? "พอร์ตการลงทุน" : "Investments"}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

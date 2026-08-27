"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, Landmark, Award } from "lucide-react";

export default function HomeHeritageSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto border-t border-secondary-container bg-surface overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Left Column: Alpine Visual with Zoom Effect */}
        <div className="md:col-span-6 reveal img-zoom-container">
          <div className="aspect-[4/3] rounded overflow-hidden relative border border-secondary-container bg-surface-container-low shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe5R_bk1aHwmv7qdI6JX3gy6xlasDAqiRX1uSm1yXObOTpHXk1SL9zQX63qjNulpo-jHdgDDurUMNCQtuejUBaVUR_dihAexLP7t9xYGW7mrZfpbziD5Ioh6I9Jy6JAUPDqWFYTMPXLlThPcyrLNWblcCgWN-Zo1plIgpAkDM-AjxLXxABY5jzTZ4_Fy8aRRWYznaaFD_HjVSjdRfqWJEwlluPfqrWgxqE5f7EANn6-Ijob1pjzA"
              alt="Swiss Alpine Heritage & Generational Legacy"
              className="w-full h-full object-cover img-zoom"
            />
          </div>
        </div>

        {/* Right Column: Heritage Narrative & ActivaSwiss AG Link */}
        <div className="md:col-span-6 space-y-6 reveal">
          <div>
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              03 • {isTH ? "มรดกและประวัติความเป็นมา" : "HERITAGE"}
            </span>
            <h2 className="font-display-md text-display-md max-md:text-headline-lg-mobile text-primary mt-1 mb-stack-sm">
              {isTH ? "สร้างบนมรดก มุ่งสู่อนาคต" : "Built on Heritage. Focused on the Future."}
            </h2>
            <div className="w-12 h-px bg-platinum"></div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {isTH
              ? "Leimann Global Capital ต่อยอดจากรากฐานด้านการเป็นผู้ประกอบการของตระกูล Leimann ในประเทศสวิตเซอร์แลนด์ ซึ่งสั่งสมวัฒนธรรมแห่งการสร้างสรรค์ ความเป็นอิสระ และความรับผิดชอบระยะยาว"
              : "Leimann Global Capital builds on an entrepreneurial foundation shaped by independent thinking, business development, and a multi-generational sense of long-term responsibility."}
          </p>

          <p className="font-body-md text-body-md text-secondary leading-relaxed">
            {isTH
              ? "ความสัมพันธ์อันแน่นแฟ้นกับ ActivaSwiss AG Family Office เป็นเสาหลักที่ผสานความต่อเนื่องและการบริหารจัดการสินทรัพย์อย่างมีเสถียรภาพ เพื่อเปิดรับโอกาสใหม่ ๆ สำหรับคนรุ่นต่อไป"
              : "Our foundational connection with ActivaSwiss AG provides governance, stability, and enduring stewardship as we expand opportunities across global markets."}
          </p>

          {/* CTA Link to Heritage Page */}
          <div className="pt-2">
            <Link
              href="/heritage"
              className="inline-flex items-center space-x-2 text-primary font-label-md text-sm font-semibold hover:underline group"
            >
              <span>{isTH ? "ค้นพบเรื่องราวของเรา (Discover Our Heritage →)" : "Discover Our Heritage →"}</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

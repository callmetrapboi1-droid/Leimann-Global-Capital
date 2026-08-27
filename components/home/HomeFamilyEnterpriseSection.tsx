"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Landmark, ArrowRight } from "lucide-react";

export default function HomeFamilyEnterpriseSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  return (
    <section className="py-section-gap px-margin-desktop max-md:px-margin-mobile bg-surface border-t border-secondary-container overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="p-8 sm:p-12 border border-secondary-container rounded bg-surface-container-low shadow-sm reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
                05 • {isTH ? "องค์กรครอบครัว" : "FAMILY ENTERPRISE"}
              </span>
              
              <div className="flex items-center gap-2">
                <span className="bg-primary text-on-primary font-label-md text-xs px-3 py-1 rounded uppercase tracking-wider font-semibold">
                  ActivaSwiss AG Subholding
                </span>
              </div>

              <h2 className="font-display-md text-2xl sm:text-4xl text-primary font-normal leading-tight">
                {isTH ? "ส่วนหนึ่งขององค์กรธุรกิจครอบครัว" : "Part of a Family Enterprise"}
              </h2>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {isTH
                  ? "Leimann Global Capital เป็นส่วนหนึ่งของโครงสร้างการลงทุนโดยรวมของตระกูล Leimann"
                  : "Leimann Global Capital forms part of the broader investment structure of the Leimann family."}
              </p>

              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {isTH
                  ? "ในฐานะ Subholding ของ ActivaSwiss AG ซึ่งเป็น Family Office ของครอบครัวในสวิตเซอร์แลนด์ เราต่อยอดจากรากฐานด้านการเป็นผู้ประกอบการ พร้อมทั้งพัฒนาโอกาสใหม่ ๆ สำหรับอนาคต"
                  : "As a subholding of ActivaSwiss AG, the family’s Swiss-based Family Office, we build on an entrepreneurial foundation while developing new opportunities for the future."}
              </p>

              <div className="pt-2">
                <Link
                  href="/heritage"
                  className="inline-flex items-center space-x-2 bg-primary text-on-primary font-label-md text-sm px-6 py-3 rounded hover:bg-on-primary-fixed-variant transition-colors active:scale-95 shadow-sm group"
                >
                  <span>{isTH ? "ค้นพบเรื่องราวของเรา (Discover Our Heritage →)" : "Discover Our Heritage →"}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
              <div className="p-8 bg-surface border border-secondary-container w-full text-center space-y-3 rounded shadow-xs luxury-card">
                <Landmark className="w-9 h-9 text-primary mx-auto stroke-1" />
                <span className="font-display-md text-2xl text-primary block font-bold">
                  ActivaSwiss AG
                </span>
                <span className="text-xs font-label-md uppercase tracking-wider text-secondary block font-semibold">
                  Family Office Switzerland
                </span>
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed pt-1">
                  {isTH
                    ? "โครงสร้าง Family Office ที่ผสานความต่อเนื่องทางธุรกิจและการกำกับดูแลสินทรัพย์อย่างมั่นคง"
                    : "Multi-generational Swiss family office structure and long-term asset stewardship."}
                </p>
                <div className="pt-3 border-t border-secondary-container">
                  <span className="text-[11px] text-secondary font-caption">
                    Unterdorfstrasse 12, 8808 Freienbach SZ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

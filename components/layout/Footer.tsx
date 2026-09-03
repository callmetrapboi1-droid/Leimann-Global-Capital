"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, ArrowRight } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

interface FooterProps {
  onOpenLegal?: (type: "legal" | "privacy") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const { language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-secondary-container text-on-surface w-full pt-16 pb-12">
      <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-secondary-container">
          {/* Col 1: Brand & Purpose (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex text-primary transition-colors hover:text-gold">
              <BrandLogo size="footer" />
            </Link>

            <p className="font-body-md text-sm text-secondary leading-relaxed max-w-md">
              {isTH
                ? "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่ถือครองโดยเอกชน มีฐานอยู่ในประเทศสวิตเซอร์แลนด์ และเป็น Subholding ของ ActivaSwiss AG Family Office"
                : isDE
                ? "Leimann Global Capital ist eine privat gehaltene Schweizer Investment- und Geschäftsplattform und Subholding des ActivaSwiss AG Family Office."
                : "Leimann Global Capital is a privately held investment and business platform based in Switzerland, operating as a subholding of the ActivaSwiss AG Family Office."}
            </p>

            <div className="pt-2 text-xs font-label-md text-secondary">
              <span>Subholding of ActivaSwiss AG • Freienbach SZ</span>
            </div>
          </div>

          {/* Col 2: Main Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-md text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              {isTH ? "เมนูหลัก" : isDE ? "Navigation" : "Navigation"}
            </h4>
            <ul className="space-y-2.5 font-label-md text-[11px] uppercase tracking-[0.1em] text-secondary">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  {isTH ? "หน้าหลัก" : isDE ? "Home" : "Home"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  {isTH ? "เกี่ยวกับเรา" : isDE ? "Über uns" : "About Us"}
                </Link>
              </li>
              <li>
                <Link href="/investments" className="hover:text-gold transition-colors">
                  {isTH ? "การลงทุนและความร่วมมือ" : isDE ? "Investitionen" : "Investments"}
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="hover:text-gold transition-colors">
                  {isTH ? "มรดกและประวัติ" : isDE ? "Herkunft & Werte" : "Heritage"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  {isTH ? "ติดต่อเรา" : isDE ? "Kontakt" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus & Mandates (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-md text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              {isTH ? "ขอบเขตหลัก" : isDE ? "Fokusbereiche" : "Focus Areas"}
            </h4>
            <ul className="space-y-2.5 font-body-md text-xs text-secondary">
              <li>Private Investments</li>
              <li>Technology &amp; Innovation</li>
              <li>International Business</li>
              <li>Strategic Collaborations</li>
              <li className="text-gold font-medium">ANAVIA AG Mandate</li>
            </ul>
          </div>

          {/* Col 4: Domicile & Direct Line (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-label-md text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              {isTH ? "สำนักงานจดทะเบียน" : isDE ? "Hauptsitz" : "Registered Office"}
            </h4>

            <div className="space-y-2 font-body-md text-xs text-secondary">
              <p className="text-on-surface">
                Unterdorfstrasse 12, 8808 Freienbach SZ, Switzerland
              </p>
              <p>
                <a
                  href="mailto:info@leimannglobalcapital.ch"
                  className="text-primary hover:text-gold transition-colors font-medium"
                >
                  info@leimannglobalcapital.ch
                </a>
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-[11px] font-label-md uppercase tracking-[0.12em] text-gold hover:text-gold-light transition-colors font-semibold"
              >
                <span>{isTH ? "ส่งข้อความติดต่อโดยตรง" : isDE ? "Kontakt aufnehmen" : "Direct Inquiry"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body-md text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Leimann Global Capital GmbH. All rights reserved.</p>
            <span className="hidden sm:inline text-secondary-container">•</span>
            <p className="font-caption text-secondary">Subholding of ActivaSwiss AG</p>
          </div>

          <div className="flex items-center gap-6">
            {onOpenLegal && (
              <div className="flex items-center gap-4 font-label-md text-[11px] uppercase tracking-[0.1em]">
                <button
                  onClick={() => onOpenLegal("legal")}
                  className="hover:text-primary transition-colors"
                >
                  Legal Notice
                </button>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </div>
            )}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 border border-secondary-container text-secondary hover:border-primary/40 hover:text-primary transition-colors"
              title="Return to Top"
              aria-label="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

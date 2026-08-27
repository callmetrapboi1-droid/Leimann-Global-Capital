"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Mail, ArrowUp, ShieldCheck, ArrowRight, Landmark } from "lucide-react";

interface FooterProps {
  onOpenLegal?: (type: "legal" | "privacy") => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  const { language } = useLanguage();
  const isTH = language === "TH";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-secondary-container text-on-surface w-full pt-16 pb-12 transition-all">
      <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-secondary-container">
          {/* Col 1: Brand, Crest & Purpose (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-9 h-9 rounded bg-primary text-on-primary flex items-center justify-center font-display-md text-lg font-bold shadow-xs group-hover:bg-on-primary-fixed-variant transition-colors">
                L
              </div>
              <div className="flex flex-col">
                <span className="font-display-md text-2xl text-primary font-bold tracking-tight">
                  Leimann Global Capital
                </span>
                <span className="font-label-md text-[10px] text-secondary uppercase tracking-widest -mt-0.5">
                  Swiss Family Investment Platform
                </span>
              </div>
            </Link>

            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed max-w-md">
              {isTH
                ? "Leimann Global Capital เป็นแพลตฟอร์มด้านการลงทุนและธุรกิจที่ถือครองโดยเอกชน มีฐานอยู่ในประเทศสวิตเซอร์แลนด์ และเป็น Subholding ของ ActivaSwiss AG Family Office"
                : "Leimann Global Capital is a privately held investment and business platform based in Switzerland, operating as a subholding of the ActivaSwiss AG Family Office."}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-label-md text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-semibold">Subholding of ActivaSwiss AG • Freienbach SZ</span>
            </div>
          </div>

          {/* Col 2: Main Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold mb-4">
              {isTH ? "เมนูหลัก" : "NAVIGATION"}
            </h4>
            <ul className="space-y-2.5 font-body-md text-sm">
              <li>
                <Link href="/" className="text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">{isTH ? "หน้าหลัก (Home)" : "Home"}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">{isTH ? "เกี่ยวกับเรา" : "About Us"}</span>
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">{isTH ? "การลงทุนและความร่วมมือ" : "Investments"}</span>
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">{isTH ? "มรดกและประวัติ" : "Heritage"}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                  <span className="group-hover:translate-x-0.5 transition-transform">{isTH ? "ติดต่อเรา" : "Contact"}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Focus & Mandates (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold mb-4">
              {isTH ? "ขอบเขตหลัก" : "FOCUS AREAS"}
            </h4>
            <ul className="space-y-2.5 font-body-md text-xs text-secondary">
              <li className="hover:text-primary transition-colors">Private Investments</li>
              <li className="hover:text-primary transition-colors">Technology &amp; Innovation</li>
              <li className="hover:text-primary transition-colors">International Business</li>
              <li className="hover:text-primary transition-colors">Strategic Collaborations</li>
              <li className="hover:text-primary transition-colors font-medium text-primary">ANAVIA AG Mandate</li>
            </ul>
          </div>

          {/* Col 4: Domicile & Direct Line (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-label-md text-xs uppercase tracking-widest text-primary font-bold mb-4">
              {isTH ? "สำนักงานจดทะเบียน" : "REGISTERED OFFICE"}
            </h4>

            <div className="space-y-2.5 font-body-md text-xs text-on-surface-variant">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Unterdorfstrasse 12, 8808 Freienbach SZ, Switzerland</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:leimannglobalcapital@info.ch"
                  className="text-primary font-semibold hover:underline"
                >
                  leimannglobalcapital@info.ch
                </a>
              </p>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-1.5 text-xs font-label-md uppercase tracking-wider text-primary font-bold hover:underline group"
              >
                <span>{isTH ? "ส่งข้อความติดต่อโดยตรง" : "Send Confidential Message"}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal Links & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-body-md text-secondary">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} Leimann Global Capital GmbH. All rights reserved.</p>
            <span className="hidden sm:inline text-secondary-container">•</span>
            <p className="font-caption text-secondary font-medium">A Subholding of ActivaSwiss AG</p>
          </div>

          <div className="flex items-center gap-6">
            {onOpenLegal && (
              <div className="flex items-center gap-4 font-label-md text-xs">
                <button
                  onClick={() => onOpenLegal("legal")}
                  className="hover:text-primary transition-colors hover:underline"
                >
                  Legal Notice
                </button>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-primary transition-colors hover:underline"
                >
                  Privacy Policy
                </button>
              </div>
            )}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2 border border-secondary-container rounded bg-surface hover:bg-surface-container hover:text-primary transition-all active:scale-95 shadow-xs"
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

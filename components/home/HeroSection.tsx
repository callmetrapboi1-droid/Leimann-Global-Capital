"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function HeroSection({ onOpenPortal }: HeroSectionProps) {
  const { t, language } = useLanguage();
  const isTH = language === "TH";
  const isDE = language === "DE";

  return (
    <section
      id="scene-hero"
      className="relative isolate flex min-h-[760px] h-[100svh] w-full items-center overflow-hidden bg-background pt-20"
    >
      {/* Full-bleed architectural canvas */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=3200&q=100"
          alt="Swiss modern financial architecture"
          className="h-full w-full object-cover object-[62%_center] saturate-[.72] contrast-[1.06] brightness-[.78] md:object-[58%_center]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,14,.58)_0%,rgba(4,8,14,.18)_31%,rgba(4,8,14,.38)_72%,rgba(4,8,14,.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(3,7,12,.18)_49%,rgba(3,7,12,.58)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-container-max items-center justify-center px-margin-mobile pb-24 pt-10 md:px-margin-desktop md:pb-20">
        <div className="max-w-5xl text-center animate-fadeIn">
          <h1 className="font-display-lg text-[clamp(3.25rem,7vw,6.65rem)] font-medium leading-[.92] tracking-[-0.04em] text-tertiary drop-shadow-[0_3px_20px_rgba(0,0,0,.38)]">
            {t.hero.titleLine1}
            <span className="mt-2 block font-normal italic md:mt-3">{t.hero.titleLine2}</span>
          </h1>

          {isTH && (
            <p className="mt-5 font-display-md text-xl font-medium text-gold-light sm:text-2xl">
              มุมมองระดับโลก วิสัยทัศน์ระยะยาว
            </p>
          )}

          {isDE && (
            <p className="mt-5 font-display-md text-xl font-medium text-gold-light sm:text-2xl">
              Schweizer Investment- &amp; Geschäftsplattform
            </p>
          )}

          <div className="mx-auto mt-7 max-w-3xl space-y-3 md:mt-8">
            <p className="font-body-lg text-base leading-relaxed text-primary/95 sm:text-lg">
              {t.hero.description}
            </p>

            <p className="font-body-md text-sm leading-relaxed text-primary/70 sm:text-base">
              {isTH
                ? "ในฐานะส่วนหนึ่งของโครงสร้างการลงทุนของตระกูล Leimann และ Subholding ของ ActivaSwiss AG Family Office เราขับเคลื่อนการลงทุนในเทคโนโลยีการเงิน โครงการเชิงกลยุทธ์ และธุรกิจข้ามพรมแดน"
                : isDE
                  ? "Als Teil der Anlagestruktur der Familie Leimann und Subholding des ActivaSwiss AG Family Office verfolgen wir gezielte Technologie-, Finanz- und grenzüberschreitende Initiativen."
                  : "As part of the Leimann family investment structure and a subholding of the ActivaSwiss AG Family Office, we pursue selected fintech, technology, and strategic international initiatives."}
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-5">
            <a
              href="#about-summary"
              className="inline-flex min-w-56 items-center justify-center border border-[#f4f1eb] bg-[#f4f1eb] px-7 py-4 font-label-md text-[11px] font-semibold uppercase tracking-[.12em] text-[#172023] shadow-[0_14px_30px_rgba(0,0,0,.18)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-light hover:bg-white active:translate-y-0"
            >
              {t.hero.ctaExplore}
            </a>

            <Link
              href="/investments"
              className="inline-flex min-w-56 items-center justify-center border border-white/35 bg-white/10 px-7 py-4 font-label-md text-[11px] font-semibold uppercase tracking-[.12em] text-primary backdrop-blur-md shadow-[0_14px_30px_rgba(0,0,0,.16)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/18 active:translate-y-0"
            >
              {t.nav.investments}
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#about-summary"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-primary/75 transition-colors hover:text-gold"
        aria-label="Scroll to content"
      >
        <span className="font-label-md text-[9px] font-semibold uppercase tracking-[.32em]">Scroll</span>
        <span className="h-7 w-px bg-current" />
      </a>
    </section>
  );
}

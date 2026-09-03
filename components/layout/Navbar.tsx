"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/common/BrandLogo";

interface NavbarProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier") => void;
  onOpenSideConcierge?: () => void;
}

export default function Navbar({ onOpenPortal }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [onLightBackground, setOnLightBackground] = useState(pathname !== "/");

  useEffect(() => {
    const updateNavbarContrast = () => {
      const sampleY = window.scrollY + 32;
      const darkSections = document.querySelectorAll<HTMLElement>("section.section-dark");
      const isOverDarkSection = Array.from(darkSections).some(
        (section) =>
          sampleY >= section.offsetTop &&
          sampleY < section.offsetTop + section.offsetHeight,
      );

      if (isOverDarkSection) {
        setOnLightBackground(false);
        return;
      }

      if (pathname !== "/") {
        setOnLightBackground(true);
        return;
      }

      const lightSections = document.querySelectorAll<HTMLElement>(".section-light");
      const isOverLightSection = Array.from(lightSections).some(
        (section) =>
          sampleY >= section.offsetTop &&
          sampleY < section.offsetTop + section.offsetHeight,
      );

      setOnLightBackground(isOverLightSection);
    };

    updateNavbarContrast();
    window.addEventListener("scroll", updateNavbarContrast, { passive: true });
    window.addEventListener("resize", updateNavbarContrast);

    return () => {
      window.removeEventListener("scroll", updateNavbarContrast);
      window.removeEventListener("resize", updateNavbarContrast);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutUs, href: "/about" },
    { name: t.nav.investments, href: "/investments" },
    { name: t.nav.heritage, href: "/heritage" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-b py-3 transition-all duration-300 ${
        mobileMenuOpen
          ? "border-white/20 bg-transparent text-white shadow-none"
          : "border-transparent bg-transparent text-white shadow-none"
      }`}
    >
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] items-center px-6 sm:px-9 lg:px-10">
        <Link
          href="/"
          className={`group flex shrink-0 items-center transition-colors ${
            mobileMenuOpen
              ? "text-white hover:text-gold-light"
              : onLightBackground
                ? "text-[#172023] hover:text-gold-dark"
                : "text-white hover:text-gold-light"
          }`}
          aria-label="Leimann Global Capital home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <BrandLogo size="nav" />
        </Link>

        <span
          className={`ml-5 h-7 w-px sm:ml-6 ${
            mobileMenuOpen
              ? "bg-white/30"
              : onLightBackground
                ? "bg-[#172023]/25"
                : "bg-white/35"
          }`}
          aria-hidden="true"
        />

        <button
          onClick={() => {
            setMobileMenuOpen((open) => !open);
            setLangDropdown(false);
          }}
          className={`ml-4 flex items-center gap-2 font-label-md text-[10px] font-semibold uppercase tracking-[.14em] transition-colors sm:ml-5 ${
            mobileMenuOpen
              ? "text-white hover:text-gold-light"
              : onLightBackground
                ? "text-[#172023] hover:text-gold-dark"
                : "text-white hover:text-gold-light"
          }`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-4 w-4" />}
          <span className={mobileMenuOpen ? "sr-only" : "hidden sm:inline"}>Menu</span>
        </button>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangDropdown((open) => !open)}
              className={`flex items-center gap-1.5 border-0 border-b bg-transparent px-0 py-1 font-label-md text-[10px] font-semibold uppercase tracking-[.12em] backdrop-blur-sm transition-colors ${
                mobileMenuOpen
                  ? "border-white/55 text-white hover:border-white"
                  : onLightBackground
                    ? "border-[#172023]/40 text-[#172023] hover:border-gold-dark"
                    : "border-white/55 text-white hover:border-white"
              }`}
              aria-expanded={langDropdown}
              aria-label="Choose language"
            >
              <span>{language}</span>
              <ChevronDown className="h-3.5 w-3.5 text-current opacity-70" />
            </button>

            {langDropdown && (
              <div className="absolute right-0 top-full mt-2 min-w-[72px] border border-[#172023]/15 bg-[#f4f1eb]/95 py-1 text-[#172023] shadow-2xl backdrop-blur-2xl animate-fadeIn">
                {(["EN", "DE", "TH"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdown(false);
                    }}
                    className={`w-full px-3 py-2 text-center font-label-md text-[10px] font-semibold uppercase tracking-[.12em] transition-colors hover:bg-white/10 ${
                      language === lang ? "bg-[#172023]/5 text-gold-dark" : "text-[#172023]/70"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden bg-[#101416]/55 px-6 pb-10 pt-24 text-white backdrop-blur-[12px] animate-fadeIn sm:px-9">
          <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center sm:gap-8 lg:gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-body-md text-2xl font-light uppercase tracking-[.04em] transition-colors duration-300 sm:text-4xl ${
                  pathname === link.href ? "text-white" : "text-white/78 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

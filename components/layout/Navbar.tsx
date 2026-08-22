"use client";

import { useState, useEffect } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const menuItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.realEstate, href: "#portfolio" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.capitalInvestment, href: "#capital-investment" },
    { label: t.nav.aboutUs, href: "#heritage" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <>
      {/* Main Transparent Top Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/90 backdrop-blur-xl border-b border-white/10 shadow-lg py-3.5 text-white"
            : "bg-transparent border-b border-transparent py-5 sm:py-6 text-white"
        }`}
      >
        <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-12 lg:px-margin-desktop">
          {/* Left: Brand Logo & Menu Trigger Button */}
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="#hero" className="group flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-primary border border-white/30 flex items-center justify-center text-white font-headline-sm text-sm sm:text-base font-semibold group-hover:scale-105 transition-all duration-300 shadow-md shrink-0">
                L
              </div>
              <div className="max-w-[190px] sm:max-w-none">
                <span className="font-headline-sm text-base sm:text-2xl text-white tracking-tight font-medium block drop-shadow-sm truncate sm:overflow-visible">
                  Leimann Global Capital <span className="text-xs sm:text-sm font-normal text-neutral-300 font-sans">GmbH</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-300 block font-label-sm drop-shadow-2xs">
                  {t.nav.brandTag}
                </span>
              </div>
            </a>

            {/* Separator Divider */}
            <div className="hidden sm:block w-[1px] h-6 bg-white/30"></div>

            {/* Transparent Hamburger Trigger Button next to logo */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-1.5 sm:gap-2 text-white/90 hover:text-white hover:scale-105 transition-all p-1"
              aria-label="Open Navigation Menu"
              title="Open Menu"
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              <span className="font-label-sm text-xs uppercase tracking-widest hidden md:inline font-semibold text-white drop-shadow-2xs">
                {t.nav.menu}
              </span>
            </button>
          </div>

          {/* Right Controls: Translucent Language Dropdown on Far Right */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/15 hover:bg-white/25 border border-white/30 text-white text-xs font-label-sm uppercase tracking-wider transition-all backdrop-blur-md shadow-sm"
              >
                <span className="font-semibold">{language}</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/80" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-28 bg-charcoal border border-white/20 shadow-2xl py-1 z-50 animate-fadeIn text-white">
                  {(["EN", "DE", "TH"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-label-sm uppercase tracking-wider transition-colors ${
                        language === lang
                          ? "bg-burgundy text-white font-bold"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {lang === "EN" && "EN - English"}
                      {lang === "DE" && "DE - Deutsch"}
                      {lang === "TH" && "TH - ภาษาไทย"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ActivaSwiss Style Full-Screen Blurred Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-2xl animate-fadeIn flex flex-col justify-between p-6 sm:p-12 text-white">
          {/* Top Bar of Overlay */}
          <div className="flex justify-between items-center max-w-container-max mx-auto w-full">
            {/* Left: Brand Logo & Close 'X' Button */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-burgundy border border-white/30 flex items-center justify-center text-white font-headline-sm text-sm sm:text-base font-semibold">
                  L
                </div>
                <div>
                  <span className="font-headline-sm text-lg sm:text-2xl text-white tracking-tight font-medium block">
                    Leimann Global Capital <span className="text-xs sm:text-sm font-normal text-neutral-300 font-sans">GmbH</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-300 block font-label-sm">
                    {t.nav.brandTag}
                  </span>
                </div>
              </div>

              {/* Vertical line and close button matching the screenshot */}
              <div className="w-[1px] h-6 bg-white/40"></div>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 text-white/80 hover:text-white transition-colors hover:scale-110"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Right: Language selector in overlay */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs font-label-sm uppercase tracking-wider transition-all"
              >
                <span className="font-semibold">{language}</span>
                <ChevronDown className="w-3.5 h-3.5 text-white/70" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-28 bg-charcoal border border-white/20 shadow-2xl py-1 z-50 animate-fadeIn">
                  {(["EN", "DE", "TH"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs font-label-sm uppercase tracking-wider transition-colors ${
                        language === lang
                          ? "bg-burgundy text-white font-bold"
                          : "text-neutral-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {lang === "EN" && "EN - English"}
                      {lang === "DE" && "DE - Deutsch"}
                      {lang === "TH" && "TH - ภาษาไทย"}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Centered Large Menu Items (Matching user screenshot) */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-7 sm:space-y-9 my-auto">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-body-md text-2xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.18em] text-white/85 hover:text-white hover:font-normal transition-all duration-300 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Bottom Bar: Küsnacht Desk Footer */}
          <div className="max-w-container-max mx-auto w-full text-center text-xs text-neutral-300/80 font-light font-label-sm uppercase tracking-widest border-t border-white/10 pt-4">
            <span>{t.nav.addressShort} • (+41) 79 400 54 16</span>
          </div>
        </div>
      )}
    </>
  );
}

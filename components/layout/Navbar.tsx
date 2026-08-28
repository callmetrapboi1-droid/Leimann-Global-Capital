"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier") => void;
  onOpenSideConcierge?: () => void;
}

export default function Navbar({ onOpenPortal }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutUs, href: "/about" },
    { name: t.nav.investments, href: "/investments" },
    { name: t.nav.heritage, href: "/heritage" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#08090b]/85 backdrop-blur-xl border-b border-[#c5a880]/20 shadow-[0_8px_32px_rgba(0,0,0,0.7)] py-3"
          : "bg-[#08090b]/60 backdrop-blur-lg border-b border-[#c5a880]/10 py-4"
      }`}
    >
      <div className="flex justify-between items-center w-full px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-body-lg font-display-md font-bold text-primary tracking-tight hover:text-gold transition-colors flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-gold-dark text-black flex items-center justify-center font-display-md text-base font-bold shadow-xs">
            L
          </div>
          <span className="text-primary hover:text-gold transition-colors">Leimann Global Capital</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-gutter">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-md text-label-md transition-all duration-300 scale-100 active:scale-95 ${
                  isActive
                    ? "text-gold border-b-2 border-gold pb-1 font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side: Language Switcher & Contact Button */}
        <div className="flex items-center gap-3">
          {/* Language Switcher - Clean EN / DE / TH */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1.5 font-label-md text-xs uppercase tracking-wider text-primary border border-secondary-container/80 bg-[#12151c]/60 backdrop-blur-md px-3 py-1.5 rounded hover:border-gold/40 hover:bg-surface-container transition-colors font-semibold"
            >
              <span>{language}</span>
              <ChevronDown className="w-3.5 h-3.5 text-secondary" />
            </button>

            {langDropdown && (
              <div className="absolute right-0 top-full mt-1.5 bg-[#0e1117]/95 backdrop-blur-2xl border border-secondary-container shadow-2xl rounded py-1 min-w-[70px] z-50 animate-fadeIn">
                {(["EN", "DE", "TH"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdown(false);
                    }}
                    className={`w-full text-center px-3 py-1.5 text-xs font-label-md uppercase tracking-wider hover:bg-surface-container-high transition-colors ${
                      language === lang ? "font-bold text-gold bg-surface-container-low" : "text-secondary"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact Button with Gold Glass Shimmer */}
          <Link
            href="/contact"
            className="bg-gradient-to-r from-gold to-gold-light text-black font-label-md text-label-md px-5 py-2 rounded scale-100 active:scale-95 transition-transform hover:brightness-110 duration-300 font-semibold hidden md:block shadow-md"
          >
            {t.nav.contact}
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090b]/95 backdrop-blur-2xl border-b border-secondary-container px-margin-mobile py-6 space-y-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-md text-base py-2 border-b border-secondary-container/40 ${
                  pathname === link.href ? "text-gold font-bold" : "text-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center bg-gradient-to-r from-gold to-gold-light text-black font-label-md py-3 rounded font-semibold shadow-md"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

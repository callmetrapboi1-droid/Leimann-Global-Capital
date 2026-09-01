"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, Menu, X } from "lucide-react";

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
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.aboutUs, href: "/about" },
    { name: t.nav.investments, href: "/investments" },
    { name: t.nav.heritage, href: "/heritage" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-[#080b11]/75 py-3 shadow-[0_8px_32px_rgba(0,0,0,.34)] backdrop-blur-xl"
          : "border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center px-6 sm:px-9 lg:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-3 text-primary transition-colors hover:text-gold"
          aria-label="Leimann Global Capital home"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-white/30 bg-black/85 font-display-md text-[17px] font-medium text-primary shadow-[0_6px_18px_rgba(0,0,0,.25)]">
            L
          </span>
          <span className="hidden flex-col sm:flex">
            <span className="font-display-md text-[18px] font-medium leading-none tracking-[-0.025em]">
              Leimann Global Capital
            </span>
            <span className="mt-1 font-label-md text-[8px] font-semibold uppercase tracking-[.22em] text-primary/65">
              Swiss Private Investment Platform
            </span>
          </span>
        </Link>

        <span className="ml-6 hidden h-6 w-px bg-white/30 lg:block" aria-hidden="true" />

        {/* The complete desktop navigation stays visible instead of being hidden in a menu. */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label-md text-[10px] font-semibold uppercase tracking-[.12em] transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-primary/65 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangDropdown((open) => !open)}
              className="flex items-center gap-1.5 border border-white/30 bg-[#1c2731]/55 px-3 py-1.5 font-label-md text-[10px] font-semibold uppercase tracking-[.12em] text-primary backdrop-blur-sm transition-colors hover:border-gold/70 hover:bg-[#1c2731]/80"
              aria-expanded={langDropdown}
              aria-label="Choose language"
            >
              <span>{language}</span>
              <ChevronDown className="h-3.5 w-3.5 text-primary/70" />
            </button>

            {langDropdown && (
              <div className="absolute right-0 top-full mt-2 min-w-[72px] border border-white/15 bg-[#0d1118]/95 py-1 shadow-2xl backdrop-blur-2xl animate-fadeIn">
                {(["EN", "DE", "TH"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setLangDropdown(false);
                    }}
                    className={`w-full px-3 py-2 text-center font-label-md text-[10px] font-semibold uppercase tracking-[.12em] transition-colors hover:bg-white/10 ${
                      language === lang ? "bg-white/5 text-gold" : "text-primary/70"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-1 text-primary transition-colors hover:text-gold lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#080b11]/95 px-6 py-5 shadow-2xl backdrop-blur-2xl animate-fadeIn sm:px-9 lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`border-b border-white/10 py-3 font-label-md text-xs font-semibold uppercase tracking-[.13em] ${
                  pathname === link.href ? "text-gold" : "text-primary/80"
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

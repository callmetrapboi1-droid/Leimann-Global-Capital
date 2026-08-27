"use client";

import { useState } from "react";
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

  const navLinks = [
    { name: language === "TH" ? "หน้าหลัก" : "Home", href: "/" },
    { name: language === "TH" ? "เกี่ยวกับเรา" : "About Us", href: "/about" },
    { name: language === "TH" ? "การลงทุนและความร่วมมือ" : "Investments & Collaborations", href: "/investments" },
    { name: language === "TH" ? "มรดกและประวัติความเป็นมา" : "Heritage", href: "/heritage" },
  ];

  return (
    <nav className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-secondary-container w-full transition-all">
      <div className="flex justify-between items-center w-full px-margin-desktop max-md:px-margin-mobile py-4 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="text-body-lg font-display-md font-bold text-primary tracking-tight hover:opacity-90 transition-opacity"
        >
          Leimann Global Capital
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
                    ? "text-primary border-b-2 border-primary pb-1 font-semibold"
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
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangDropdown(!langDropdown)}
              className="flex items-center gap-1 font-label-md text-xs uppercase tracking-wider text-primary border border-secondary-container px-2.5 py-1.5 rounded hover:bg-surface-container transition-colors"
            >
              <span>{language}</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {langDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-secondary-container shadow-lg rounded py-1 min-w-[80px] z-50 animate-fadeIn">
                <button
                  onClick={() => {
                    setLanguage("EN");
                    setLangDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-label-md uppercase tracking-wider hover:bg-surface-container-low ${
                    language === "EN" ? "font-bold text-primary bg-surface-container-low" : "text-secondary"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLanguage("TH");
                    setLangDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-label-md uppercase tracking-wider hover:bg-surface-container-low ${
                    language === "TH" ? "font-bold text-primary bg-surface-container-low" : "text-secondary"
                  }`}
                >
                  TH
                </button>
              </div>
            )}
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded scale-100 active:scale-95 transition-transform hover:bg-on-primary-fixed-variant duration-300 hidden md:block"
          >
            {language === "TH" ? "ติดต่อเรา" : "Contact"}
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-secondary-container px-margin-mobile py-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-label-md text-base py-2 border-b border-secondary-container/50 ${
                  pathname === link.href ? "text-primary font-bold" : "text-secondary"
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
              className="w-full block text-center bg-primary text-on-primary font-label-md py-3 rounded"
            >
              {language === "TH" ? "ติดต่อเรา" : "Contact"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

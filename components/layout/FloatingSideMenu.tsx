"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  SlidersHorizontal,
  ArrowUp,
  Mail,
  Lock,
} from "lucide-react";

interface FloatingSideMenuProps {
  onOpenConcierge: () => void;
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function FloatingSideMenu({
  onOpenConcierge,
  onOpenPortal,
}: FloatingSideMenuProps) {
  const { language, setLanguage } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "TH" : "EN");
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 bg-noir-900/90 backdrop-blur-xl border border-outline-gold p-2 shadow-2xl rounded-xs">
      {/* Swiss Desk & Clocks */}
      <button
        onClick={onOpenConcierge}
        className="group relative p-3 text-on-surface-variant hover:text-gold-400 hover:bg-noir-800 transition-all rounded-xs"
        title="Open Swiss Desk & World Clocks"
        aria-label="Swiss Desk"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-noir-950 text-gold-300 text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-outline-gold rounded-xs">
          Swiss Desk & World Clocks
        </span>
      </button>

      {/* Language Switcher Button */}
      <button
        onClick={toggleLanguage}
        className="group relative p-3 text-gold-400 hover:text-gold-300 hover:bg-noir-800 transition-all rounded-xs font-label-sm text-xs font-bold"
        title="Toggle EN / TH"
        aria-label="Toggle Language"
      >
        <span>{language}</span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-noir-950 text-gold-300 text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-outline-gold rounded-xs">
          Language: {language === "EN" ? "Switch to Thai (TH)" : "Switch to English (EN)"}
        </span>
      </button>

      {/* Quick Connect */}
      <Link
        href="/contact"
        className="group relative p-3 text-on-surface-variant hover:text-gold-400 hover:bg-noir-800 transition-all rounded-xs"
        title="Connect With Us"
        aria-label="Contact"
      >
        <Mail className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-noir-950 text-gold-300 text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-outline-gold rounded-xs">
          Connect With Us
        </span>
      </Link>

      {/* Principal Portal Login */}
      <button
        onClick={() => onOpenPortal("login")}
        className="group relative p-3 text-on-surface-variant hover:text-gold-400 hover:bg-noir-800 transition-all rounded-xs"
        title="Principal Portal Access"
        aria-label="Principal Vault"
      >
        <Lock className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-noir-950 text-gold-300 text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md border border-outline-gold rounded-xs">
          Principal Portal
        </span>
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 text-on-surface-variant hover:text-gold-400 hover:bg-noir-800 transition-all border-t border-outline-gold mt-1 rounded-xs"
          title="Return to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

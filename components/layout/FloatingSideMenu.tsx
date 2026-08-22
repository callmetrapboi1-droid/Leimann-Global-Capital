"use client";

import { useState, useEffect } from "react";
import {
  SlidersHorizontal,
  PhoneCall,
  ArrowUp,
  Layers,
  Globe,
  Lock,
} from "lucide-react";

interface FloatingSideMenuProps {
  onOpenConcierge: () => void;
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
  compareCount: number;
  currency: string;
  onToggleCurrency: () => void;
}

export default function FloatingSideMenu({
  onOpenConcierge,
  onOpenPortal,
  compareCount,
  currency,
  onToggleCurrency,
}: FloatingSideMenuProps) {
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

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2 bg-white/80 backdrop-blur-xl border border-outline-variant/60 p-2 shadow-xl rounded-sm">
      {/* Concierge & Clocks */}
      <button
        onClick={onOpenConcierge}
        className="group relative p-3 text-neutral-600 hover:text-primary hover:bg-surface-container-low transition-all rounded-xs"
        title="Open Swiss Concierge & Market Rates"
        aria-label="Concierge Desk"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Swiss Desk & Markets
        </span>
      </button>

      {/* Compare Badge */}
      <button
        onClick={onOpenConcierge}
        className="group relative p-3 text-neutral-600 hover:text-primary hover:bg-surface-container-low transition-all rounded-xs"
        title="Compare Real Estate Assets"
        aria-label="Asset Comparator"
      >
        <Layers className="w-4 h-4" />
        {compareCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
            {compareCount}
          </span>
        )}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Asset Comparator ({compareCount})
        </span>
      </button>

      {/* Currency Switcher shortcut */}
      <button
        onClick={onToggleCurrency}
        className="group relative p-3 text-neutral-600 hover:text-primary hover:bg-surface-container-low transition-all rounded-xs"
        title="Toggle Currency"
        aria-label="Currency"
      >
        <span className="text-[10px] font-bold font-label-sm">{currency}</span>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Switch Currency ({currency})
        </span>
      </button>

      {/* Quick Consultation */}
      <button
        onClick={() => onOpenPortal("consultation")}
        className="group relative p-3 text-neutral-600 hover:text-primary hover:bg-surface-container-low transition-all rounded-xs"
        title="Schedule Private Advisory"
        aria-label="Private Advisory"
      >
        <PhoneCall className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Private Advisory
        </span>
      </button>

      {/* Vault Login */}
      <button
        onClick={() => onOpenPortal("login")}
        className="group relative p-3 text-neutral-600 hover:text-primary hover:bg-surface-container-low transition-all rounded-xs"
        title="Principal Vault Access"
        aria-label="Principal Vault"
      >
        <Lock className="w-4 h-4" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-label-sm uppercase tracking-wider px-2.5 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Principal Portal
        </span>
      </button>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 text-neutral-400 hover:text-primary hover:bg-surface-container-low transition-all border-t border-neutral-200 mt-1"
          title="Return to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

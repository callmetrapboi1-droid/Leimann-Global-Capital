"use client";

import HeroShader from "./HeroShader";
import { ArrowDown, Shield, TrendingUp, Building2 } from "lucide-react";

interface HeroSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function HeroSection({ onOpenPortal }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      {/* WebGL Shader Background */}
      <HeroShader />

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl px-6 sm:px-12 mx-auto my-auto">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 border border-outline-variant/60 bg-white/40 px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-[0.25em]">
              Swiss Wealth Management & Prime Real Estate • Est. 1984
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary mb-8 tracking-tight font-normal leading-[1.15]">
            Architects of <br className="hidden sm:block" />
            <span className="italic font-normal">Capital Preservation & Prime Real Estate.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed font-light">
            We engineer bespoke investment structures and curate landmark real estate acquisitions across Zurich, London, Geneva, and Asia for discerning multi-generational estates.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 font-label-sm text-xs tracking-widest uppercase hover:opacity-85 transition-all shadow-md active:scale-95 text-center"
            >
              Explore Property Portfolio
            </a>
            <button
              onClick={() => onOpenPortal("consultation")}
              className="w-full sm:w-auto border border-primary/60 bg-white/60 backdrop-blur-md text-primary px-10 py-4 font-label-sm text-xs tracking-widest uppercase hover:bg-surface-container-low transition-all active:scale-95 text-center"
            >
              Private Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="relative z-10 max-w-container-max mx-auto px-6 sm:px-12 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 glass-card border border-outline-variant/40 shadow-sm">
          <div className="border-r border-outline-variant/30 pr-4 last:border-r-0">
            <div className="flex items-center gap-2 text-neutral-500 mb-1">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-[10px] uppercase tracking-wider">AUM Protected</span>
            </div>
            <p className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">CHF 4.8B+</p>
            <p className="text-[11px] text-neutral-500">Tier-1 Swiss Custodians</p>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 last:border-r-0">
            <div className="flex items-center gap-2 text-neutral-500 mb-1">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-[10px] uppercase tracking-wider">Trophy Real Estate</span>
            </div>
            <p className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">62 Prime Assets</p>
            <p className="text-[11px] text-neutral-500">Zurich, London, Tokyo, Bangkok</p>
          </div>

          <div className="border-r border-outline-variant/30 pr-4 last:border-r-0">
            <div className="flex items-center gap-2 text-neutral-500 mb-1">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="font-label-sm text-[10px] uppercase tracking-wider">Historical Return</span>
            </div>
            <p className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">9.4% Net IRR</p>
            <p className="text-[11px] text-neutral-500">40-Year Annualized Track</p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-neutral-500 mb-1">
              <span className="font-headline-sm text-xs text-primary font-serif italic">§</span>
              <span className="font-label-sm text-[10px] uppercase tracking-wider">Discretion</span>
            </div>
            <p className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">100% Private</p>
            <p className="text-[11px] text-neutral-500">Fiduciary Family Office</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 pt-6 opacity-40">
          <span className="font-label-sm text-[10px] uppercase tracking-widest">Scroll Down</span>
          <div className="w-[1px] h-8 bg-primary animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

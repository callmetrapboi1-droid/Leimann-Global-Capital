"use client";

import { useState } from "react";
import { Check, Layers, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServicesTabSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
}

export default function ServicesTabSection({ onOpenPortal }: ServicesTabSectionProps) {
  const [activeTabKey, setActiveTabKey] = useState<"acquire" | "build" | "sellRent" | "capital">("acquire");
  const { t } = useLanguage();

  const tabKeys: ("acquire" | "build" | "sellRent" | "capital")[] = ["acquire", "build", "sellRent", "capital"];
  const activeService = t.services.tabs[activeTabKey];

  const imagesMap = {
    acquire: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    build: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    sellRent: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    capital: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
  };

  return (
    <section id="services" className="w-full bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[720px] border-b border-[#E5E4E2]">
        {/* Left Column: Deep Charcoal Editorial & Interactive Tabs (7 cols) */}
        <div className="lg:col-span-7 bg-[#1A1C1C] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            {/* Header Tag */}
            <div className="flex items-center gap-2 text-neutral-400 mb-4">
              <Layers className="w-4 h-4 text-white" />
              <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-300 font-semibold">
                {t.services.tag}
              </span>
            </div>

            {/* Active Service Partner Badge */}
            {activeService.partner && (
              <div className="inline-block bg-white/10 text-white text-[10px] font-label-sm uppercase tracking-widest px-3.5 py-1 mb-4 border border-white/20">
                {activeService.partner}
              </div>
            )}

            <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-3 text-white">
              {activeService.title}
            </h2>

            <p className="font-headline-sm text-lg sm:text-xl text-neutral-300 italic font-normal mb-6">
              {activeService.subtitle}
            </p>

            <p className="font-body-lg text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 font-light max-w-2xl">
              {activeService.desc}
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {activeService.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0 mt-0.5 border border-white/25">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm text-neutral-200 leading-snug font-light">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <button
                onClick={() => onOpenPortal("consultation")}
                className="px-8 py-3.5 bg-white text-[#1A1C1C] hover:bg-neutral-200 font-label-sm text-xs uppercase tracking-widest transition-all font-semibold shadow-md active:scale-95 flex items-center gap-2"
              >
                <span>{t.services.inquireBtn}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Bottom Interactive Tab Switcher Navigation */}
          <div className="mt-12 pt-8 border-t border-white/15">
            <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-label-sm mb-3 font-semibold">
              {t.services.selectLabel}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {tabKeys.map((key) => {
                const serviceTab = t.services.tabs[key];
                const isActive = key === activeTabKey;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTabKey(key)}
                    className={`py-3.5 px-4 text-left border transition-all text-xs font-label-sm uppercase tracking-wider ${
                      isActive
                        ? "bg-white text-[#1A1C1C] border-white font-bold shadow-lg"
                        : "bg-white/10 text-neutral-300 border-white/15 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <span className="font-semibold block">{serviceTab.tabLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase for Active Service (5 cols) */}
        <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-full overflow-hidden group">
          <img
            key={activeTabKey}
            src={imagesMap[activeTabKey]}
            alt={activeService.title}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#1A1C1C]/90 backdrop-blur-md border border-white/15 text-white">
            <p className="text-xs font-label-sm uppercase tracking-wider text-neutral-400 mb-1 font-semibold">
              {t.services.activeFocus}
            </p>
            <p className="text-xs font-body-md text-neutral-200 leading-relaxed">
              {activeService.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

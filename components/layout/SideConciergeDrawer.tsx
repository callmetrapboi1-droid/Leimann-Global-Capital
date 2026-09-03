"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  X,
  Clock,
  ShieldCheck,
  Mail,
  Lock,
  Globe,
} from "lucide-react";
import { marketTickers } from "@/data/markets";
import BrandLogo from "@/components/common/BrandLogo";

interface SideConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", topic?: string) => void;
}

export default function SideConciergeDrawer({
  isOpen,
  onClose,
  onOpenPortal,
}: SideConciergeDrawerProps) {
  const { language, setLanguage, t } = useLanguage();
  const [swissTime, setSwissTime] = useState("");
  const [singaporeTime, setSingaporeTime] = useState("");
  const [londonTime, setLondonTime] = useState("");
  const [bangkokTime, setBangkokTime] = useState("");
  const [activeTab, setActiveTab] = useState<"concierge" | "markets">("concierge");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setSwissTime(
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/Zurich", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
      setSingaporeTime(
        now.toLocaleTimeString("en-GB", { timeZone: "Asia/Singapore", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
      setLondonTime(
        now.toLocaleTimeString("en-GB", { timeZone: "Europe/London", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
      setBangkokTime(
        now.toLocaleTimeString("en-GB", { timeZone: "Asia/Bangkok", hour: "2-digit", minute: "2-digit", second: "2-digit" })
      );
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[105] flex justify-end bg-noir-950/80 backdrop-blur-sm transition-all duration-300">
      {/* Backdrop click */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Drawer Container */}
      <aside className="w-full max-w-md md:max-w-lg bg-noir-900 text-on-surface h-full shadow-2xl flex flex-col border-l border-outline-gold animate-fadeIn relative z-10">
        {/* Top Header */}
        <div className="p-6 bg-noir-950 text-on-surface flex items-center justify-between border-b border-outline-gold">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-gold-300">
                {t.concierge.title}
              </span>
            </div>
            <BrandLogo size="compact" className="text-on-surface" />
            <p className="text-[10px] text-gold-400 uppercase tracking-widest">
              Subholding of ActivaSwiss AG
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-on-surface-variant hover:text-gold-400 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="flex border-b border-outline-gold bg-noir-950 text-xs font-label-sm uppercase">
          <button
            onClick={() => setActiveTab("concierge")}
            className={`flex-1 py-3 px-2 text-center transition-all ${
              activeTab === "concierge"
                ? "bg-noir-900 text-gold-400 font-semibold border-b-2 border-gold-400"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {t.concierge.clocksTitle}
          </button>
          <button
            onClick={() => setActiveTab("markets")}
            className={`flex-1 py-3 px-2 text-center transition-all ${
              activeTab === "markets"
                ? "bg-noir-900 text-gold-400 font-semibold border-b-2 border-gold-400"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {t.concierge.marketsTitle}
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "concierge" && (
            <>
              {/* World Clocks */}
              <div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-gold-400 mb-3 flex items-center gap-1.5 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>{t.concierge.clocksTitle}</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-noir-950 border border-outline-gold rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-on-surface-variant">
                      <span>Freienbach SZ / Zurich</span>
                      <span className="text-emerald-400 font-semibold">Active</span>
                    </div>
                    <p className="font-headline-sm text-xl text-on-surface font-medium mt-1">
                      {swissTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-noir-950 border border-outline-gold rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-on-surface-variant">
                      <span>London Desk</span>
                      <span className="text-emerald-400 font-semibold">Open</span>
                    </div>
                    <p className="font-headline-sm text-xl text-on-surface font-medium mt-1">
                      {londonTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-noir-950 border border-outline-gold rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-on-surface-variant">
                      <span>Singapore Hub</span>
                      <span className="text-on-surface-variant">After Hours</span>
                    </div>
                    <p className="font-headline-sm text-xl text-on-surface font-medium mt-1">
                      {singaporeTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-noir-950 border border-outline-gold rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-on-surface-variant">
                      <span>Bangkok Desk</span>
                      <span className="text-on-surface-variant">After Hours</span>
                    </div>
                    <p className="font-headline-sm text-xl text-on-surface font-medium mt-1">
                      {bangkokTime || "--:--:--"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Language Selection */}
              <div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-gold-400 mb-3 flex items-center gap-1.5 font-semibold">
                  <Globe className="w-3.5 h-3.5 text-gold-400" />
                  <span>Platform Language / ภาษาของเว็บไซต์</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLanguage("EN")}
                    className={`py-2.5 text-xs font-label-sm uppercase tracking-wider border transition-all ${
                      language === "EN"
                        ? "bg-primary text-on-primary border-gold-400 font-semibold"
                        : "bg-noir-950 text-on-surface-variant border-outline-gold hover:border-gold-400"
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => setLanguage("TH")}
                    className={`py-2.5 text-xs font-label-sm uppercase tracking-wider border transition-all ${
                      language === "TH"
                        ? "bg-primary text-on-primary border-gold-400 font-semibold"
                        : "bg-noir-950 text-on-surface-variant border-outline-gold hover:border-gold-400"
                    }`}
                  >
                    ภาษาไทย (TH)
                  </button>
                </div>
              </div>

              {/* Direct Confidential Line */}
              <div className="p-5 bg-noir-950 border border-outline-gold text-on-surface space-y-3">
                <div className="flex items-center gap-2 text-gold-300">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span className="font-label-sm text-xs uppercase tracking-widest font-semibold">
                    {t.concierge.directLine}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-body-md font-light">
                  {t.concierge.partnerDesc}
                </p>
                <div className="pt-2 space-y-2">
                  <a
                    href="mailto:info@leimannglobalcapital.ch"
                    className="w-full bg-primary hover:bg-primary-hover text-on-primary py-2.5 font-label-sm text-xs uppercase tracking-widest transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@leimannglobalcapital.ch</span>
                  </a>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPortal("login");
                    }}
                    className="w-full border border-outline-gold text-gold-300 hover:text-white hover:border-gold-400 py-2.5 font-label-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>{t.concierge.vaultBtn}</span>
                  </button>
                </div>
              </div>

              {/* Office Address Info */}
              <div className="p-4 bg-noir-950 border border-outline-gold text-xs text-on-surface-variant space-y-1 font-light">
                <span className="font-label-sm text-[10px] uppercase tracking-wider text-gold-400 block font-semibold">
                  Leimann Global Capital GmbH
                </span>
                <p>Unterdorfstrasse 12, 8808 Freienbach SZ Switzerland</p>
                <p className="text-[11px] text-on-surface-variant">Subholding of ActivaSwiss AG Family Office</p>
              </div>
            </>
          )}

          {activeTab === "markets" && (
            <div className="space-y-3">
              <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-gold-400 mb-2 font-semibold">
                Live Liquidity & Global Yield Indicators
              </h4>
              {marketTickers.map((ticker, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 bg-noir-950 border border-outline-gold rounded-xs text-xs"
                >
                  <div>
                    <span className="font-semibold text-on-surface block">{ticker.symbol}</span>
                    <span className="text-[11px] text-on-surface-variant">{ticker.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-gold-300 block">{ticker.value}</span>
                    <span
                      className={`text-[11px] font-semibold ${
                        ticker.isPositive ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {ticker.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

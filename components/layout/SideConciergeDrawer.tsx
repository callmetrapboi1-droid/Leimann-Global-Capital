"use client";

import { useState, useEffect } from "react";
import {
  X,
  Clock,
  ShieldCheck,
  Building2,
  TrendingUp,
  PhoneCall,
  Send,
  Lock,
  ArrowRight,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { PropertyItem, propertiesData } from "@/data/properties";
import { marketTickers } from "@/data/markets";

interface SideConciergeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
  currency: "CHF" | "USD" | "EUR" | "THB";
  setCurrency: (c: "CHF" | "USD" | "EUR" | "THB") => void;
  compareList: string[];
  onRemoveFromCompare: (id: string) => void;
}

export default function SideConciergeDrawer({
  isOpen,
  onClose,
  onOpenPortal,
  currency,
  setCurrency,
  compareList,
  onRemoveFromCompare,
}: SideConciergeDrawerProps) {
  const [zurichTime, setZurichTime] = useState("");
  const [singaporeTime, setSingaporeTime] = useState("");
  const [londonTime, setLondonTime] = useState("");
  const [bangkokTime, setBangkokTime] = useState("");
  const [activeTab, setActiveTab] = useState<"concierge" | "markets" | "compare">("concierge");

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setZurichTime(
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

  const comparedProperties = propertiesData.filter((p) => compareList.includes(p.id));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[95] flex justify-end bg-black/60 backdrop-blur-sm transition-all duration-300">
      {/* Backdrop click */}
      <div className="flex-1" onClick={onClose}></div>

      {/* Drawer Container */}
      <aside className="w-full max-w-md md:max-w-lg bg-white h-full shadow-2xl flex flex-col border-l border-outline-variant/40 animate-fadeIn relative z-10">
        {/* Top Header */}
        <div className="p-6 bg-primary text-white flex items-center justify-between border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-label-sm text-[10px] uppercase tracking-widest text-neutral-300">
                Swiss Desk Live Concierge
              </span>
            </div>
            <h3 className="font-headline-sm text-xl text-white font-normal">
              Private Client Side Panel
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="flex border-b border-neutral-200 bg-surface-container-low text-xs font-label-sm uppercase">
          <button
            onClick={() => setActiveTab("concierge")}
            className={`flex-1 py-3 px-2 text-center transition-all ${
              activeTab === "concierge"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-neutral-500 hover:text-primary"
            }`}
          >
            Desk & Clocks
          </button>
          <button
            onClick={() => setActiveTab("markets")}
            className={`flex-1 py-3 px-2 text-center transition-all ${
              activeTab === "markets"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-neutral-500 hover:text-primary"
            }`}
          >
            Market Tickers
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`flex-1 py-3 px-2 text-center transition-all relative ${
              activeTab === "compare"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-neutral-500 hover:text-primary"
            }`}
          >
            <span>Compare</span>
            {compareList.length > 0 && (
              <span className="ml-1.5 bg-primary text-white text-[9px] px-1.5 py-0.2 rounded-full">
                {compareList.length}
              </span>
            )}
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "concierge" && (
            <>
              {/* World Clocks */}
              <div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>Global Financial Desks (Live)</span>
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-neutral-500">
                      <span>Zurich (HQ)</span>
                      <span className="text-emerald-700 font-bold">Trading</span>
                    </div>
                    <p className="font-headline-sm text-xl text-primary font-medium mt-1">
                      {zurichTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-neutral-500">
                      <span>London Desk</span>
                      <span className="text-emerald-700 font-bold">Open</span>
                    </div>
                    <p className="font-headline-sm text-xl text-primary font-medium mt-1">
                      {londonTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-neutral-500">
                      <span>Singapore Hub</span>
                      <span className="text-neutral-500">After Hours</span>
                    </div>
                    <p className="font-headline-sm text-xl text-primary font-medium mt-1">
                      {singaporeTime || "--:--:--"}
                    </p>
                  </div>

                  <div className="p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs">
                    <div className="flex justify-between items-center text-[10px] uppercase font-label-sm text-neutral-500">
                      <span>Bangkok Desk</span>
                      <span className="text-neutral-500">After Hours</span>
                    </div>
                    <p className="font-headline-sm text-xl text-primary font-medium mt-1">
                      {bangkokTime || "--:--:--"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Base Currency Selection */}
              <div>
                <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-primary" />
                  <span>Display Currency Baseline</span>
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {(["CHF", "USD", "EUR", "THB"] as const).map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`py-2 text-xs font-label-sm uppercase tracking-wider border transition-all ${
                        currency === c
                          ? "bg-primary text-white border-primary font-semibold"
                          : "bg-surface-container-low text-neutral-700 border-outline-variant/40 hover:border-primary"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Direct Confidential Dispatch */}
              <div className="p-5 bg-neutral-900 text-white space-y-3">
                <div className="flex items-center gap-2 text-platinum">
                  <ShieldCheck className="w-5 h-5 text-platinum" />
                  <span className="font-label-sm text-xs uppercase tracking-widest">
                    Direct Partner Line
                  </span>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-body-md">
                  Connect securely with our Zurich Senior Partner for off-market acquisitions and sovereign portfolio structuring.
                </p>
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPortal("consultation");
                    }}
                    className="w-full bg-white text-primary py-2.5 font-label-sm text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Initiate Private Call</span>
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenPortal("login");
                    }}
                    className="w-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 py-2.5 font-label-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Access Principal Vault</span>
                  </button>
                </div>
              </div>
            </>
          )}

          {activeTab === "markets" && (
            <div className="space-y-3">
              <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                Live Liquidity & Real Estate Yield Benchmarks
              </h4>
              {marketTickers.map((ticker, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs text-xs"
                >
                  <div>
                    <span className="font-bold text-primary block">{ticker.symbol}</span>
                    <span className="text-[11px] text-neutral-500">{ticker.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-medium text-primary block">{ticker.value}</span>
                    <span
                      className={`text-[11px] font-semibold ${
                        ticker.isPositive ? "text-emerald-700" : "text-rose-600"
                      }`}
                    >
                      {ticker.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "compare" && (
            <div className="space-y-4">
              <h4 className="font-label-sm text-[11px] uppercase tracking-widest text-neutral-500 mb-2">
                Selected Assets for Comparison ({compareList.length})
              </h4>
              {comparedProperties.length === 0 ? (
                <div className="py-12 text-center text-neutral-400 text-xs">
                  <Building2 className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p>No properties added to comparison yet.</p>
                  <p className="text-[10px] text-neutral-400 mt-1">
                    Click &ldquo;Compare&rdquo; on any property card to benchmark yields and metrics.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {comparedProperties.map((prop) => (
                    <div
                      key={prop.id}
                      className="p-3 border border-outline-variant/40 bg-white flex items-center justify-between gap-3 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={prop.image}
                          alt={prop.title}
                          className="w-14 h-14 object-cover shrink-0"
                        />
                        <div>
                          <h5 className="font-headline-sm text-sm text-primary line-clamp-1">
                            {prop.title}
                          </h5>
                          <span className="text-[11px] text-neutral-500 block">
                            {prop.city} • {prop.yieldRate}
                          </span>
                          <span className="text-xs font-semibold text-primary">
                            CHF {prop.priceCHF.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCompare(prop.id)}
                        className="text-neutral-400 hover:text-rose-600 p-1 text-xs"
                        title="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => {
                      onClose();
                      onOpenPortal("dossier", comparedProperties.map((p) => p.title).join(" vs "));
                    }}
                    className="w-full bg-primary text-white py-3 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4"
                  >
                    <span>Request Comparative Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

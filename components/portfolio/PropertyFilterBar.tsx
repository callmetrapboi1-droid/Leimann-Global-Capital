"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PropertyFilterBarProps {
  activeFilter: "all" | "switzerland" | "uk" | "asia" | "buy" | "rent";
  onFilterChange: (filter: "all" | "switzerland" | "uk" | "asia" | "buy" | "rent") => void;
  currency: "CHF" | "USD" | "EUR" | "THB";
  onCurrencyChange: (currency: "CHF" | "USD" | "EUR" | "THB") => void;
  onOpenSideConcierge?: () => void;
  totalAssetsCount: number;
}

export default function PropertyFilterBar({
  activeFilter,
  onFilterChange,
  currency,
  onCurrencyChange,
  totalAssetsCount,
}: PropertyFilterBarProps) {
  const { language } = useLanguage();
  const isTH = language === "TH";

  const filterTabs = [
    { id: "all", label: isTH ? "สินทรัพย์ทั้งหมด" : "All Trophy Assets" },
    { id: "switzerland", label: isTH ? "สวิตเซอร์แลนด์" : "Switzerland (Zurich & Geneva)" },
    { id: "uk", label: isTH ? "สหราชอาณาจักร" : "United Kingdom (London)" },
    { id: "asia", label: isTH ? "เอเชีย" : "Asia Hubs (Singapore & Bangkok)" },
  ] as const;

  return (
    <div className="flex flex-col gap-6 mb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onFilterChange(tab.id as any)}
              className={`px-5 py-2.5 font-label-sm text-xs tracking-wider uppercase transition-all border ${
                activeFilter === tab.id
                  ? "bg-primary text-white border-primary shadow-xs font-semibold"
                  : "bg-white text-on-surface-variant border-outline-variant/60 hover:bg-neutral-100 hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right side controls (Currency Switcher) */}
        <div className="flex items-center gap-3 self-start lg:self-auto">
          <div className="flex items-center bg-white border border-outline-variant/60 p-1 rounded-xs shadow-xs">
            <span className="text-[10px] font-label-sm uppercase text-neutral-400 px-2 flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <span>FX:</span>
            </span>
            {(["CHF", "USD", "EUR", "THB"] as const).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-3 py-1 font-label-sm text-xs transition-all ${
                  currency === c
                    ? "bg-primary text-white font-medium shadow-xs"
                    : "text-neutral-600 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-neutral-500 border-b border-outline-variant/40 pb-3">
        <span>{isTH ? `แสดง ${totalAssetsCount} สินทรัพย์ที่ได้รับการคัดเลือก` : `Displaying ${totalAssetsCount} selected trophy acquisitions`}</span>
        <span className="font-label-sm text-[10px] uppercase tracking-wider text-primary font-medium">
          {isTH ? "การบริหารจัดการสินทรัพย์ส่วนบุคคล" : "Off-Market Private Portfolio Management"}
        </span>
      </div>
    </div>
  );
}

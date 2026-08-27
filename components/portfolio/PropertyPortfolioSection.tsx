"use client";

import { useState } from "react";
import { propertiesData, PropertyItem } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import PropertyFilterBar from "./PropertyFilterBar";
import PropertyDetailModal from "./PropertyDetailModal";
import { Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PropertyPortfolioSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
  currency: "CHF" | "USD" | "EUR" | "THB";
  setCurrency: (c: "CHF" | "USD" | "EUR" | "THB") => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  onOpenSideConcierge?: () => void;
}

export default function PropertyPortfolioSection({
  onOpenPortal,
  currency,
  setCurrency,
  compareList,
  onToggleCompare,
}: PropertyPortfolioSectionProps) {
  const [filter, setFilter] = useState<"all" | "switzerland" | "uk" | "asia" | "buy" | "rent">("all");
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const { language } = useLanguage();
  const isTH = language === "TH";

  const filteredProperties = propertiesData.filter((p) => {
    if (filter === "all") return true;
    return p.country === filter;
  });

  const formatPrice = (priceCHF: number) => {
    switch (currency) {
      case "USD":
        return `$ ${(priceCHF * 1.15).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      case "EUR":
        return `€ ${(priceCHF * 1.06).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      case "THB":
        return `฿ ${(priceCHF * 41.2).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
      case "CHF":
      default:
        return `CHF ${priceCHF.toLocaleString()}`;
    }
  };

  return (
    <section id="portfolio" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-surface">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3 text-neutral-500">
            <Building className="w-4 h-4 text-primary" />
            <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-600 font-semibold">
              {isTH ? "การลงทุนสินทรัพย์คัดเลือก" : "Curated Trophy Acquisitions"}
            </span>
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-primary font-normal">
            {isTH ? "คอลเลกชันสินทรัพย์ระดับ Super-Prime" : "Global Prime Real Estate Collection"}
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mt-4 text-sm sm:text-base font-light leading-relaxed">
            {isTH
              ? "การปกป้องมูลค่าเงินทุนผ่านสถาปัตยกรรมและอสังหาริมทรัพย์ระดับแลนด์มาร์กในเขตอำนาจศาลที่มั่นคงที่สุดในโลก"
              : "Tangible capital preservation through premier architectural landmarks in the world's most stable jurisdictions."}
          </p>
        </div>
      </div>

      {/* Filter and Currency Bar */}
      <PropertyFilterBar
        activeFilter={filter}
        onFilterChange={setFilter}
        currency={currency}
        onCurrencyChange={setCurrency}
        totalAssetsCount={filteredProperties.length}
      />

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((prop) => (
          <PropertyCard
            key={prop.id}
            property={prop}
            formattedPrice={formatPrice(prop.priceCHF)}
            onSelectProperty={setSelectedProperty}
            onRequestDossier={(title) => onOpenPortal("dossier", title)}
            isCompared={compareList.includes(prop.id)}
            onToggleCompare={onToggleCompare}
          />
        ))}
      </div>

      {/* Property Detail Lightbox Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        formattedPrice={selectedProperty ? formatPrice(selectedProperty.priceCHF) : ""}
        onRequestDossier={(title) => onOpenPortal("dossier", title)}
        onScheduleViewing={(title) => onOpenPortal("consultation", title)}
      />
    </section>
  );
}

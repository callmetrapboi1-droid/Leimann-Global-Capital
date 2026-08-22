"use client";

import { useState } from "react";
import { propertiesData, PropertyItem } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import PropertyFilterBar from "./PropertyFilterBar";
import PropertyDetailModal from "./PropertyDetailModal";
import { Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

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
  const { t } = useLanguage();

  const filteredProperties = propertiesData.filter((p) => {
    if (filter === "all") return true;
    if (filter === "buy") return p.offerType === "BUY";
    if (filter === "rent") return p.offerType === "RENT";
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
    <section id="portfolio" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-[#FAF8F5]">
      {/* Section Header */}
      <Reveal direction="up" delay={100} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3 text-neutral-500">
            <Building className="w-4 h-4 text-[#1A1C1C]" />
            <span className="font-label-sm text-xs uppercase tracking-[0.25em] text-neutral-600 font-semibold">
              {t.portfolio.tag}
            </span>
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-[#1A1C1C] font-normal">
            {t.portfolio.headline}
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mt-4 text-sm sm:text-base font-light leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>
      </Reveal>

      {/* Filter and Currency Bar */}
      <Reveal direction="up" delay={200}>
        <PropertyFilterBar
          activeFilter={filter}
          onFilterChange={setFilter}
          currency={currency}
          onCurrencyChange={setCurrency}
          totalAssetsCount={filteredProperties.length}
        />
      </Reveal>

      {/* Properties Grid with Staggered Cascade */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((prop, index) => (
          <Reveal key={prop.id} direction="up" delay={100 + (index % 3) * 150}>
            <PropertyCard
              property={prop}
              formattedPrice={formatPrice(prop.priceCHF)}
              onSelectProperty={setSelectedProperty}
              onRequestDossier={(title) => onOpenPortal("dossier", title)}
              isCompared={compareList.includes(prop.id)}
              onToggleCompare={onToggleCompare}
            />
          </Reveal>
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

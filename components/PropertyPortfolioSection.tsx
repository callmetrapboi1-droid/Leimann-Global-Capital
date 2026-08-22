"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Building,
  MapPin,
  Maximize2,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Filter,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export interface PropertyItem {
  id: string;
  title: string;
  location: string;
  country: "switzerland" | "uk" | "asia" | "europe";
  countryLabel: string;
  type: string;
  priceCHF: number;
  priceFormatted: string;
  areaSqM: number;
  areaSqFt: number;
  bedrooms: number;
  yieldRate: string;
  appreciationRate: string;
  status: "Available" | "Private Treaty" | "Acquired";
  image: string;
  description: string;
  highlights: string[];
}

const properties: PropertyItem[] = [
  {
    id: "zurich-penthouse",
    title: "The Belvedere Goldcoast Penthouse",
    location: "Lake Zurich, Küsnacht, Switzerland",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Super-Prime Penthouse",
    priceCHF: 18500000,
    priceFormatted: "CHF 18,500,000",
    areaSqM: 620,
    areaSqFt: 6673,
    bedrooms: 5,
    yieldRate: "4.2% Net",
    appreciationRate: "+7.8% YoY",
    status: "Private Treaty",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Perched on Zurich's prestigious Goldcoast, this triplex penthouse offers unobstructed views of Lake Zurich and the Swiss Alps, featuring custom Italian stone, private spa, and 6-car subterranean vault.",
    highlights: [
      "Direct private high-speed elevator",
      "Thermal wellness spa & 18m indoor lap pool",
      "Swiss cantonal tax optimization suitability",
      "Full biometric security architecture",
    ],
  },
  {
    id: "geneva-lakefront",
    title: "Villa L'Étoile du Lac",
    location: "Cologny, Geneva, Switzerland",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Private Waterfront Estate",
    priceCHF: 32000000,
    priceFormatted: "CHF 32,000,000",
    areaSqM: 1200,
    areaSqFt: 12916,
    bedrooms: 7,
    yieldRate: "3.5% Net",
    appreciationRate: "+6.4% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    description:
      "A monumental private estate situated in Geneva's most exclusive enclave of Cologny. Features expansive landscaped grounds rolling down to private lake moorings with panoramic views of the Jet d'Eau and Mont Blanc.",
    highlights: [
      "Private deep-water yacht jetty and boathouse",
      "Independent staff quarters and security lodge",
      "Wine cellar with 3,000-bottle capacity",
      "Subterranean 8-car gallery garage",
    ],
  },
  {
    id: "london-belgravia",
    title: "The Eaton Square Belgravia Residence",
    location: "Belgravia, London SW1, United Kingdom",
    country: "uk",
    countryLabel: "United Kingdom",
    type: "Grade II* Listed Townhouse",
    priceCHF: 27500000,
    priceFormatted: "£ 24,000,000",
    areaSqM: 850,
    areaSqFt: 9150,
    bedrooms: 6,
    yieldRate: "3.8% Net",
    appreciationRate: "+5.9% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "A masterclass in Georgian architectural grandeur, meticulously restored to blend historic cornicing and soaring ceilings with state-of-the-art climate control, cinema room, and private landscaped mews.",
    highlights: [
      "Direct access to private Belgravia garden square",
      "Private passenger lift to all 6 storeys",
      "Integrated Crestron smart home automation",
      "Separate mews house with private garage",
    ],
  },
  {
    id: "st-moritz-chalet",
    title: "The Suvretta Alpine Sanctuary",
    location: "Suvretta Hill, St. Moritz, Switzerland",
    country: "switzerland",
    countryLabel: "Switzerland",
    type: "Ski-In / Ski-Out Luxury Chalet",
    priceCHF: 28000000,
    priceFormatted: "CHF 28,000,000",
    areaSqM: 980,
    areaSqFt: 10548,
    bedrooms: 6,
    yieldRate: "5.6% Seasonal",
    appreciationRate: "+8.2% YoY",
    status: "Private Treaty",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    description:
      "Nestled atop Suvretta Hill in the Engadin valley, this alpine estate marries ancient Austrian pine craftsmanship with monumental quartz stone, complete with outdoor heated infinity pool facing the peaks.",
    highlights: [
      "Direct ski-in / ski-out access to Corviglia slopes",
      "Outdoor heated onsen pool overlooking Engadin valley",
      "Private cinema room and ski equipment lounge",
      "Helipad access protocol within 5 minutes",
    ],
  },
  {
    id: "bangkok-chao-phraya",
    title: "The Chao Phraya Waterfront Pavilion",
    location: "Charoen Nakhon, Bangkok, Thailand",
    country: "asia",
    countryLabel: "Asia Hub (Thailand)",
    type: "Ultra-Luxury Riverfront Villa",
    priceCHF: 11800000,
    priceFormatted: "฿ 450,000,000",
    areaSqM: 1450,
    areaSqFt: 15607,
    bedrooms: 5,
    yieldRate: "6.4% Net",
    appreciationRate: "+11.2% YoY",
    status: "Available",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "An architectural trophy on the River of Kings in Bangkok, offering unprecedented 60-meter private river frontage, serene tropical gardens, double-height pavilion living spaces, and bespoke Thai-silk finishing.",
    highlights: [
      "Private river dock accommodating luxury motor yacht",
      "Infinity pool cantilevered over the Chao Phraya River",
      "Close proximity to Iconsiam & luxury private healthcare",
      "Freehold title held under secure corporate structure",
    ],
  },
  {
    id: "singapore-nassim",
    title: "The Nassim Hill Botanical Residence",
    location: "Nassim Road, District 10, Singapore",
    country: "asia",
    countryLabel: "Asia Hub (Singapore)",
    type: "Good Class Bungalow",
    priceCHF: 31000000,
    priceFormatted: "S$ 42,000,000",
    areaSqM: 1100,
    areaSqFt: 11840,
    bedrooms: 6,
    yieldRate: "3.9% Net",
    appreciationRate: "+9.1% YoY",
    status: "Private Treaty",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Situated along Singapore's most celebrated embassy row, this biophilic masterpiece integrates lush rainforest courtyards with minimalist concrete and titanium glass structures.",
    highlights: [
      "Exclusive Good Class Bungalow (GCB) zoning",
      "50-meter cantilevered lap pool through tropical foliage",
      "Sovereign wealth stability and multi-currency hedge",
      "Comprehensive green building Platinum certificate",
    ],
  },
];

interface PropertyPortfolioSectionProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
}

export default function PropertyPortfolioSection({ onOpenPortal }: PropertyPortfolioSectionProps) {
  const [filter, setFilter] = useState<"all" | "switzerland" | "uk" | "asia">("all");
  const [currency, setCurrency] = useState<"CHF" | "USD" | "EUR" | "THB">("CHF");
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  const filteredProperties = properties.filter((p) => {
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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Building className="w-4 h-4 text-primary" />
            <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-[0.25em]">
              Curated Trophy Assets
            </span>
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl text-primary font-normal">
            Global Prime Real Estate Collection
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-4 text-sm sm:text-base">
            Tangible capital preservation through premier architectural landmarks in the world&apos;s most stable legal and economic jurisdictions.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-2 self-start md:self-end bg-white border border-outline-variant/50 p-1.5 rounded-sm">
          <span className="text-[11px] font-label-sm uppercase text-neutral-400 px-2">Currency:</span>
          {(["CHF", "USD", "EUR", "THB"] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
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

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 border-b border-outline-variant/30 pb-4">
        {[
          { id: "all", label: "All Trophy Assets" },
          { id: "switzerland", label: "Switzerland (Zurich & Geneva)" },
          { id: "uk", label: "United Kingdom (London)" },
          { id: "asia", label: "Asia Hubs (Singapore & Bangkok)" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`px-5 py-2.5 font-label-sm text-xs tracking-wider uppercase transition-all ${
              filter === tab.id
                ? "bg-primary text-white"
                : "bg-surface-container-low text-on-surface-variant hover:bg-neutral-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((prop) => (
          <div
            key={prop.id}
            className="glass-card border border-outline-variant/40 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-500 shadow-sm hover:shadow-xl bg-white"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white px-3 py-1 text-[10px] font-label-sm uppercase tracking-wider">
                {prop.countryLabel}
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-primary font-label-sm text-[10px] uppercase px-3 py-1 font-semibold">
                {prop.status}
              </div>
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent p-2 text-white">
                <span className="font-headline-sm text-lg font-normal drop-shadow-md">
                  {formatPrice(prop.priceCHF)}
                </span>
                <span className="text-xs text-emerald-300 font-medium flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {prop.yieldRate}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{prop.location}</span>
                </div>
                <h3 className="font-headline-sm text-xl text-primary mb-3 group-hover:text-neutral-700 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-on-surface-variant text-xs line-clamp-2 mb-4 leading-relaxed">
                  {prop.description}
                </p>

                {/* Metric Badges */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-surface-container-low border border-outline-variant/30 rounded-xs mb-4 text-xs">
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase">Internal Area</span>
                    <span className="font-medium text-primary">
                      {prop.areaSqM} m² / {prop.areaSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase">Appreciation</span>
                    <span className="font-medium text-emerald-700">{prop.appreciationRate}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProperty(prop)}
                  className="flex-1 py-2.5 text-xs font-label-sm uppercase tracking-wider border border-primary text-primary hover:bg-primary hover:text-white transition-all text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenPortal("dossier", prop.title)}
                  className="px-4 py-2.5 bg-neutral-900 text-white hover:bg-primary text-xs font-label-sm uppercase tracking-wider transition-all flex items-center justify-center"
                  title="Request Private Dossier"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Property Detail Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fadeIn">
          <div className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-outline-variant/40 shadow-2xl relative">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 transition-colors rounded-full"
            >
              ✕
            </button>

            <div className="relative aspect-[16/9] w-full">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-xs uppercase font-label-sm tracking-widest text-neutral-300">
                  {selectedProperty.countryLabel} • {selectedProperty.type}
                </span>
                <h3 className="font-headline-md text-3xl sm:text-4xl text-white font-light mt-1">
                  {selectedProperty.title}
                </h3>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div>
                  <span className="text-xs text-neutral-500 uppercase tracking-wider block font-label-sm">
                    Acquisition Price
                  </span>
                  <span className="font-headline-sm text-2xl sm:text-3xl text-primary font-medium">
                    {formatPrice(selectedProperty.priceCHF)}
                  </span>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block font-label-sm">
                      Gross Yield
                    </span>
                    <span className="font-headline-sm text-xl text-emerald-700 font-medium">
                      {selectedProperty.yieldRate}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider block font-label-sm">
                      Living Area
                    </span>
                    <span className="font-headline-sm text-xl text-primary font-medium">
                      {selectedProperty.areaSqM} m²
                    </span>
                  </div>
                </div>
              </div>

              <div className="py-6">
                <h4 className="font-label-sm text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  Architectural & Investment Profile
                </h4>
                <p className="text-on-surface text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProperty.description}
                </p>

                <h4 className="font-label-sm text-xs uppercase tracking-widest text-neutral-500 mb-3">
                  Key Specifications & Strategic Advantages
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedProperty.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-on-surface">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-200">
                  <button
                    onClick={() => {
                      const title = selectedProperty.title;
                      setSelectedProperty(null);
                      onOpenPortal("dossier", title);
                    }}
                    className="flex-1 bg-primary text-white py-3.5 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Confidential Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const title = selectedProperty.title;
                      setSelectedProperty(null);
                      onOpenPortal("consultation", title);
                    }}
                    className="flex-1 border border-primary text-primary py-3.5 font-label-sm text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all text-center"
                  >
                    Schedule Private Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

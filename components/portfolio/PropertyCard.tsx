"use client";

import { PropertyItem } from "@/data/properties";
import {
  MapPin,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Layers,
  Check,
  Calendar,
  Building,
} from "lucide-react";

interface PropertyCardProps {
  property: PropertyItem;
  formattedPrice: string;
  onSelectProperty: (property: PropertyItem) => void;
  onRequestDossier: (title: string) => void;
  isCompared: boolean;
  onToggleCompare: (id: string) => void;
}

export default function PropertyCard({
  property,
  formattedPrice,
  onSelectProperty,
  onRequestDossier,
  isCompared,
  onToggleCompare,
}: PropertyCardProps) {
  const isRent = property.offerType === "RENT";

  return (
    <article className="glass-card border border-outline-variant/60 overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all duration-500 shadow-xs hover:shadow-xl bg-white relative">
      {/* Image Container */}
      <div
        className="relative aspect-[16/10] overflow-hidden bg-neutral-100 cursor-pointer"
        onClick={() => onSelectProperty(property)}
      >
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Status Badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 text-[11px] font-label-sm uppercase tracking-widest font-bold ${
            isRent
              ? "bg-sand-100 text-charcoal border border-outline-variant/60"
              : "bg-burgundy text-white shadow-sm"
          }`}
        >
          {property.offerType}
        </div>

        {/* Status / Location Badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-charcoal font-label-sm text-[10px] uppercase px-3 py-1 font-medium border border-outline-variant/40">
          {property.city}, {property.countryLabel}
        </div>

        {/* Bottom Price Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white flex justify-between items-end">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-neutral-300 font-label-sm block">
              {isRent ? "Investment / Lease Value" : "Acquisition Volume"}
            </span>
            <span className="font-headline-sm text-xl font-normal drop-shadow-md">
              {formattedPrice}
            </span>
          </div>
          <span className="text-xs text-emerald-300 font-medium flex items-center gap-1 bg-black/40 px-2 py-1 backdrop-blur-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            {property.yieldRate}
          </span>
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-burgundy" />
              <span>{property.location}</span>
            </div>
            {property.completionYear && (
              <span className="text-[10px] font-label-sm uppercase text-neutral-400">
                {property.completionYear}
              </span>
            )}
          </div>

          <h3
            onClick={() => onSelectProperty(property)}
            className="font-headline-sm text-2xl text-charcoal mb-2.5 group-hover:text-burgundy transition-colors cursor-pointer leading-tight font-medium"
          >
            {property.title}
          </h3>

          <p className="text-on-surface-variant text-xs line-clamp-2 mb-4 leading-relaxed font-light">
            {property.description}
          </p>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 gap-2 p-3 bg-sand-100/70 border border-outline-variant/40 rounded-xs mb-4 text-xs">
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-label-sm">
                Living Area
              </span>
              <span className="font-medium text-charcoal">
                {property.areaSqM} m² / {property.areaSqFt.toLocaleString()} sq.ft
              </span>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase font-label-sm">
                {property.units ? "Units / Config" : "YoY Growth"}
              </span>
              <span className="font-medium text-charcoal">
                {property.units || property.appreciationRate}
              </span>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-4 border-t border-outline-variant/30 flex items-center gap-2">
          <button
            onClick={() => onSelectProperty(property)}
            className="flex-1 py-2.5 text-xs font-label-sm uppercase tracking-wider border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all text-center"
          >
            More Details
          </button>

          <button
            onClick={() => onToggleCompare(property.id)}
            className={`px-3 py-2.5 text-xs font-label-sm uppercase tracking-wider border transition-all flex items-center gap-1 ${
              isCompared
                ? "bg-burgundy text-white border-burgundy"
                : "border-outline-variant text-neutral-600 hover:border-charcoal hover:text-charcoal"
            }`}
            title={isCompared ? "Remove from comparison" : "Add to side comparison"}
          >
            {isCompared ? <Check className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline text-[10px]">Compare</span>
          </button>

          <button
            onClick={() => onRequestDossier(property.title)}
            className="px-3.5 py-2.5 bg-burgundy text-white hover:bg-burgundy-light text-xs font-label-sm uppercase tracking-wider transition-all flex items-center justify-center"
            title="Request Encrypted Dossier"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

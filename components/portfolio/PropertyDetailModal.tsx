"use client";

import { useState } from "react";
import { PropertyItem } from "@/data/properties";
import {
  X,
  MapPin,
  Maximize2,
  TrendingUp,
  ShieldCheck,
  Building,
  ArrowUpRight,
  Landmark,
  Bed,
  Bath,
} from "lucide-react";

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  formattedPrice: string;
  onRequestDossier: (title: string) => void;
  onScheduleViewing: (title: string) => void;
}

export default function PropertyDetailModal({
  property,
  onClose,
  formattedPrice,
  onRequestDossier,
  onScheduleViewing,
}: PropertyDetailModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!property) return null;

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="bg-white max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-outline-variant/40 shadow-2xl relative rounded-xs">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black text-white p-2.5 transition-colors rounded-full shadow-lg"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
          <img
            src={images[activeImageIdx]}
            alt={property.title}
            className="w-full h-full object-cover transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] uppercase font-label-sm tracking-widest bg-white/20 px-3 py-0.5 backdrop-blur-xs">
                {property.countryLabel}
              </span>
              <span className="text-[11px] uppercase font-label-sm tracking-widest text-neutral-300">
                {property.type}
              </span>
            </div>
            <h3 className="font-headline-md text-2xl sm:text-4xl text-white font-normal leading-tight">
              {property.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-neutral-300 mt-2">
              <MapPin className="w-4 h-4 text-platinum" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector if multiple images */}
        {images.length > 1 && (
          <div className="flex gap-2 p-4 bg-surface-container-low border-b border-outline-variant/30 overflow-x-auto">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIdx(i)}
                className={`w-20 h-14 shrink-0 overflow-hidden border-2 transition-all ${
                  activeImageIdx === i ? "border-primary scale-105" : "border-transparent opacity-60"
                }`}
              >
                <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Information Grid */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-surface-container-low border border-outline-variant/40 rounded-xs">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-label-sm">
                Acquisition Value
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">
                {formattedPrice}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-label-sm">
                Gross Net Yield
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-emerald-700 font-medium">
                {property.yieldRate}
              </span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-label-sm">
                Internal Gross Area
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">
                {property.areaSqM} m²
              </span>
            </div>

            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-label-sm">
                Bedrooms / Suites
              </span>
              <span className="font-headline-sm text-xl sm:text-2xl text-primary font-medium">
                {property.bedrooms} Beds / {property.bathrooms} Baths
              </span>
            </div>
          </div>

          {/* Narrative description */}
          <div>
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-neutral-500 mb-3">
              Architectural & Sovereign Asset Summary
            </h4>
            <p className="text-on-surface text-sm sm:text-base leading-relaxed font-body-md font-light">
              {property.description}
            </p>
          </div>

          {/* Strategic Tax & Governance Shield */}
          <div className="p-4 bg-neutral-900 text-white flex items-start gap-3 rounded-xs">
            <Landmark className="w-5 h-5 text-platinum shrink-0 mt-0.5" />
            <div>
              <h5 className="font-label-sm text-xs uppercase tracking-wider text-platinum font-semibold">
                Sovereign Tax & Fiduciary Structuring:
              </h5>
              <p className="text-xs text-neutral-300 mt-1">
                {property.taxAdvantage}
              </p>
            </div>
          </div>

          {/* Highlights & Security Architecture */}
          <div>
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-neutral-500 mb-4">
              Key Specifications & Security Architecture
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-neutral-200">
            <button
              onClick={() => {
                const t = property.title;
                onClose();
                onRequestDossier(t);
              }}
              className="flex-1 bg-primary text-white py-4 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Request Encrypted Dossier & Floorplans</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const t = property.title;
                onClose();
                onScheduleViewing(t);
              }}
              className="flex-1 border border-primary text-primary py-4 font-label-sm text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all text-center"
            >
              Schedule Private On-Site Inspection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

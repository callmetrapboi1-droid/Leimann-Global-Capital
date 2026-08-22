"use client";

import { ExpertiseItem } from "@/data/expertise";
import {
  Wallet,
  Scroll,
  TrendingUp,
  Landmark,
  ShieldAlert,
  Globe2,
} from "lucide-react";

interface ExpertiseCardProps {
  item: ExpertiseItem;
}

export default function ExpertiseCard({ item }: ExpertiseCardProps) {
  const renderIcon = (name: string) => {
    switch (name) {
      case "wallet":
        return <Wallet className="w-8 h-8 text-primary mb-6 stroke-1" />;
      case "scroll":
        return <Scroll className="w-8 h-8 text-primary mb-6 stroke-1" />;
      case "trending":
        return <TrendingUp className="w-8 h-8 text-primary mb-6 stroke-1" />;
      case "landmark":
        return <Landmark className="w-8 h-8 text-primary mb-6 stroke-1" />;
      case "shield":
        return <ShieldAlert className="w-8 h-8 text-primary mb-6 stroke-1" />;
      case "globe":
      default:
        return <Globe2 className="w-8 h-8 text-primary mb-6 stroke-1" />;
    }
  };

  return (
    <div className="interactive-glass-card glass-card p-10 flex flex-col min-h-[380px] justify-between group hover:-translate-y-1.5 transition-all duration-500 border border-outline-variant/40 bg-white/80 relative shadow-sm hover:shadow-xl">
      <div>
        <span className="text-[10px] font-label-sm uppercase tracking-widest text-neutral-400 block mb-4">
          {item.subtitle}
        </span>
        {renderIcon(item.iconName)}
        <h3 className="font-headline-sm text-2xl text-primary mb-4 font-normal leading-tight">
          {item.title}
        </h3>
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed font-light">
          {item.description}
        </p>
      </div>
      <div className="w-full h-[1.5px] bg-outline-variant/30 mt-8 group-hover:bg-primary transition-colors duration-500"></div>
    </div>
  );
}

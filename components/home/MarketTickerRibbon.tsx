"use client";

import { marketTickers } from "@/data/markets";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function MarketTickerRibbon() {
  return (
    <div className="w-full bg-primary text-white border-y border-neutral-800 overflow-hidden py-2.5">
      <div className="flex whitespace-nowrap animate-scroll space-x-12 select-none">
        {[...marketTickers, ...marketTickers].map((item, idx) => (
          <div key={idx} className="inline-flex items-center space-x-2 text-xs font-label-sm uppercase">
            <span className="text-neutral-400 font-normal">{item.symbol}:</span>
            <span className="font-semibold text-white">{item.value}</span>
            <span
              className={`flex items-center text-[10px] ${
                item.isPositive ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {item.isPositive ? (
                <TrendingUp className="w-3 h-3 mr-0.5 inline" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-0.5 inline" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

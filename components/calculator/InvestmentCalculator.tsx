"use client";

import { useState } from "react";
import { Calculator, ArrowRight, TrendingUp, DollarSign, Shield, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface InvestmentCalculatorProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function InvestmentCalculator({ onOpenPortal }: InvestmentCalculatorProps) {
  const { language } = useLanguage();
  const [initialCapital, setInitialCapital] = useState<number>(10000000); // 10M CHF
  const [realEstateShare, setRealEstateShare] = useState<number>(60); // 60% Real Estate, 40% Liquid/Fixed
  const [years, setYears] = useState<number>(15);
  const [propertyGrowthRate] = useState<number>(6.5); // 6.5% p.a.
  const [rentalYieldRate, setRentalYieldRate] = useState<number>(4.2); // 4.2% p.a.
  const [liquidGrowthRate] = useState<number>(5.5); // 5.5% p.a.

  // Calculations
  const realEstateCapital = (initialCapital * realEstateShare) / 100;
  const liquidCapital = initialCapital - realEstateCapital;

  // Real estate appreciation compound
  const projectedRealEstateValue = realEstateCapital * Math.pow(1 + propertyGrowthRate / 100, years);
  
  // Total cumulative rental income estimate
  const cumulativeRentalIncome = realEstateCapital * (rentalYieldRate / 100) * years * 1.25;

  // Liquid capital compound
  const projectedLiquidValue = liquidCapital * Math.pow(1 + liquidGrowthRate / 100, years);

  // Total Portfolio Value
  const totalProjectedWealth = projectedRealEstateValue + projectedLiquidValue + cumulativeRentalIncome;
  const netGain = totalProjectedWealth - initialCapital;

  const isTH = language === "TH";

  return (
    <section id="calculator" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <Calculator className="w-4 h-4 text-primary" />
          <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-[0.25em]">
            {isTH ? "เครื่องมือจำลองการเติบโตของทุน" : "Capital Preservation Simulator"}
          </span>
        </div>
        <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-primary font-normal">
          {isTH ? "การประมาณการพอร์ตลงทุนระยะยาว" : "Multi-Generational Wealth Projection"}
        </h2>
        <p className="font-body-md text-on-surface-variant mt-4 text-sm sm:text-base font-light">
          {isTH
            ? "จำลองการเติบโตของเงินทุนภายใต้ยุทธศาสตร์ Family Office สวิตเซอร์แลนด์"
            : "Simulate portfolio trajectory under Swiss wealth preservation structures across 5 to 30 year horizons."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Card */}
        <div className="lg:col-span-6 glass-card p-8 sm:p-10 bg-white border border-outline-variant/50 shadow-sm space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase font-label-sm tracking-wider text-neutral-600">
                {isTH ? "เงินทุนเริ่มต้น" : "Initial Capital"} (CHF)
              </label>
              <span className="font-headline-sm text-xl text-primary font-medium">
                CHF {initialCapital.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="2000000"
              max="50000000"
              step="1000000"
              value={initialCapital}
              onChange={(e) => setInitialCapital(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 accent-primary cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
              <span>CHF 2M</span>
              <span>CHF 25M</span>
              <span>CHF 50M+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs uppercase font-label-sm tracking-wider text-neutral-600">
                {isTH ? "สัดส่วนสินทรัพย์เชิงกลยุทธ์ (%)" : "Strategic Asset Share (%)"}
              </label>
              <span className="font-headline-sm text-xl text-primary font-medium">
                {realEstateShare}% Strategic / {100 - realEstateShare}% Liquid
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              step="5"
              value={realEstateShare}
              onChange={(e) => setRealEstateShare(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-200 accent-primary cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs uppercase font-label-sm tracking-wider text-neutral-600 mb-2">
                {isTH ? "ระยะเวลาลงทุน" : "Investment Horizon"}
              </label>
              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full bg-surface border border-outline-variant p-3 text-sm text-primary focus:outline-none"
              >
                <option value={5}>5 Years</option>
                <option value={10}>10 Years</option>
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase font-label-sm tracking-wider text-neutral-600 mb-2">
                {isTH ? "ผลตอบแทนเป้าหมาย" : "Target Yield (p.a.)"}
              </label>
              <select
                value={rentalYieldRate}
                onChange={(e) => setRentalYieldRate(Number(e.target.value))}
                className="w-full bg-surface border border-outline-variant p-3 text-sm text-primary focus:outline-none"
              >
                <option value={3.5}>3.5% (Trophy / Safe Haven)</option>
                <option value={4.2}>4.2% (Balanced Portfolio)</option>
                <option value={5.5}>5.5% (Strategic Growth)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 bg-primary text-white p-8 sm:p-12 shadow-2xl border border-neutral-800 flex flex-col justify-between min-h-[480px]">
          <div>
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-neutral-700">
              <span className="font-label-sm text-xs uppercase tracking-widest text-neutral-400">
                {isTH ? "ผลลัพธ์จำลอง" : "Projected Outcome"} ({years} Years)
              </span>
              <span className="text-xs bg-white/10 px-3 py-1 text-platinum font-label-sm">
                Compound Simulation
              </span>
            </div>

            <div className="mb-8">
              <span className="text-xs text-neutral-400 uppercase tracking-widest block font-label-sm mb-1">
                {isTH ? "มูลค่าสินทรัพย์สุทธิประมาณการ" : "Estimated Total Net Worth"}
              </span>
              <div className="font-headline-md text-3xl sm:text-5xl text-white font-normal">
                CHF {Math.round(totalProjectedWealth).toLocaleString()}
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm mt-2 font-medium">
                <TrendingUp className="w-4 h-4" />
                <span>
                  +CHF {Math.round(netGain).toLocaleString()} (+{Math.round((netGain / initialCapital) * 100)}% Total Growth)
                </span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-3.5 mb-8">
              <div className="flex justify-between items-center text-xs sm:text-sm pb-2 border-b border-neutral-800">
                <span className="text-neutral-300 flex items-center gap-2">
                  <Building className="w-4 h-4 text-platinum" />
                  Strategic Asset Value
                </span>
                <span className="font-medium text-white">
                  CHF {Math.round(projectedRealEstateValue).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm pb-2 border-b border-neutral-800">
                <span className="text-neutral-300 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-platinum" />
                  Cumulative Yield Distributions
                </span>
                <span className="font-medium text-white">
                  CHF {Math.round(cumulativeRentalIncome).toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs sm:text-sm pb-2 border-b border-neutral-800">
                <span className="text-neutral-300 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-platinum" />
                  Liquid Reserves &amp; Treasury
                </span>
                <span className="font-medium text-white">
                  CHF {Math.round(projectedLiquidValue).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenPortal("consultation")}
            className="w-full bg-white text-primary hover:bg-neutral-100 py-4 font-label-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 font-semibold shadow-md"
          >
            <span>{isTH ? "ขอรับรายงานวิเคราะห์จัดสรรสินทรัพย์" : "Request Bespoke Allocation Report"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export interface MarketTicker {
  symbol: string;
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export const marketTickers: MarketTicker[] = [
  { symbol: "CHF/USD", name: "Swiss Franc / US Dollar", value: "1.1524", change: "+0.32%", isPositive: true },
  { symbol: "CHF/EUR", name: "Swiss Franc / Euro", value: "1.0618", change: "+0.15%", isPositive: true },
  { symbol: "XAU/CHF", name: "Gold (oz) in CHF", value: "2,420.80", change: "+1.14%", isPositive: true },
  { symbol: "ZUR-RES", name: "Zurich Prime Index", value: "+7.8% YoY", change: "+0.45%", isPositive: true },
  { symbol: "LON-BEL", name: "Belgravia Super-Prime", value: "£3,850/sq.ft", change: "+0.22%", isPositive: true },
  { symbol: "GEN-COL", name: "Geneva Lakefront Yield", value: "3.55%", change: "+0.10%", isPositive: true },
  { symbol: "SG-GCB", name: "Singapore GCB Avg", value: "S$4,100/sq.ft", change: "+0.85%", isPositive: true },
  { symbol: "BKK-RIV", name: "Bangkok Luxury Yield", value: "6.40% Net", change: "+0.60%", isPositive: true },
  { symbol: "SWISS-10Y", name: "Swiss Confederation 10Y", value: "0.68%", change: "-0.04%", isPositive: false },
];

export interface ExpertiseItem {
  id: string;
  iconName: "wallet" | "scroll" | "trending" | "landmark" | "shield" | "globe";
  title: string;
  subtitle: string;
  description: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "allocation",
    iconName: "wallet",
    title: "Strategic Asset Allocation",
    subtitle: "Capital Preservation First",
    description:
      "Sophisticated mathematical modeling designed to protect principal while identifying asymmetric growth opportunities in global equities, private debt, and inflation-hedged commodities.",
  },
  {
    id: "legacy",
    iconName: "scroll",
    title: "Multi-Generational Legacy",
    subtitle: "Dynasty Governance",
    description:
      "Bespoke structures for family governance, cross-border trust services, succession blueprints, and philanthropic foundations established across sovereign jurisdictions.",
  },
  {
    id: "macro",
    iconName: "trending",
    title: "Macro Intelligence & Research",
    subtitle: "Zurich Research Desk",
    description:
      "Proprietary real-time analysis of geopolitical shifts, central bank monetary policy, currency liquidity, and fiscal migration from our research desks in Zurich and Singapore.",
  },
  {
    id: "syndication",
    iconName: "landmark",
    title: "Prime Real Estate Syndication",
    subtitle: "Off-Market Trophy Portfolios",
    description:
      "Discreet acquisition, structuring, and ongoing asset management of ultra-prime residential and commercial trophy properties across Switzerland, London, and Asia.",
  },
  {
    id: "hedging",
    iconName: "shield",
    title: "Risk Arbitrage & Hedging",
    subtitle: "Downside Protection",
    description:
      "Customized currency and interest rate derivative overlays ensuring multi-currency holdings remain insulated from systemic shocks and global currency devaluations.",
  },
  {
    id: "structuring",
    iconName: "globe",
    title: "Global Jurisdictional Structuring",
    subtitle: "International Tax & Treaty",
    description:
      "Advising family offices on double-taxation treaties, golden visas, residency optimization, and secure asset domicile adhering strictly to international regulatory frameworks.",
  },
];

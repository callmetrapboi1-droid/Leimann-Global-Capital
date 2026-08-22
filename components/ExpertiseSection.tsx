"use client";

import { useEffect } from "react";
import {
  Wallet,
  Scroll,
  TrendingUp,
  Landmark,
  ShieldAlert,
  Globe2,
} from "lucide-react";

export default function ExpertiseSection() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".interactive-glass-card");
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const expertiseItems = [
    {
      icon: <Wallet className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Strategic Asset Allocation",
      description:
        "Sophisticated mathematical modeling designed to protect principal while identifying asymmetric growth opportunities in global equities, private debt, and inflation-hedged commodities.",
      subtitle: "Capital Preservation First",
    },
    {
      icon: <Scroll className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Multi-Generational Legacy",
      description:
        "Bespoke structures for family governance, cross-border trust services, succession blueprints, and philanthropic foundations established across sovereign jurisdictions.",
      subtitle: "Dynasty Governance",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Macro Intelligence & Research",
      description:
        "Proprietary real-time analysis of geopolitical shifts, central bank monetary policy, currency liquidity, and fiscal migration from our research desks in Zurich and Singapore.",
      subtitle: "Zurich Research Desk",
    },
    {
      icon: <Landmark className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Prime Real Estate Syndication",
      description:
        "Discreet acquisition, structuring, and ongoing asset management of ultra-prime residential and commercial trophy properties across Switzerland, London, and Asia.",
      subtitle: "Off-Market Trophy Portfolios",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Risk Arbitrage & Hedging",
      description:
        "Customized currency and interest rate derivative overlays ensuring multi-currency holdings remain insulated from systemic shocks and global currency devaluations.",
      subtitle: "Downside Protection",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-primary mb-6 stroke-1" />,
      title: "Global Jurisdictional Structuring",
      description:
        "Advising family offices on double-taxation treaties, golden visas, residency optimization, and secure asset domicile adhering strictly to international regulatory frameworks.",
      subtitle: "International Tax & Treaty",
    },
  ];

  return (
    <section id="expertise" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-surface">
      <div className="grid grid-cols-12 gap-gutter items-end mb-16">
        <div className="col-span-12 lg:col-span-8">
          <div className="inline-block text-xs font-label-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">
            Core Disciplines
          </div>
          <h2 className="font-headline-md text-3xl sm:text-4xl text-primary mb-4 font-normal">
            Expertise in Multi-Generational Wealth & Real Estate.
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl text-sm sm:text-base leading-relaxed">
            We navigate complex global markets with an unwavering focus on absolute returns and risk mitigation, ensuring the longevity of private family estates through disciplined Swiss banking principles.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseItems.map((item, idx) => (
          <div
            key={idx}
            className="interactive-glass-card glass-card p-10 flex flex-col min-h-[380px] justify-between group hover:-translate-y-1 transition-all duration-500 border border-outline-variant/40 bg-white/80 relative"
          >
            <div>
              <span className="text-[10px] font-label-sm uppercase tracking-widest text-neutral-400 block mb-4">
                {item.subtitle}
              </span>
              {item.icon}
              <h3 className="font-headline-sm text-2xl text-primary mb-4 font-normal">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="w-full h-[1.5px] bg-outline-variant/30 mt-8 group-hover:bg-primary transition-colors duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

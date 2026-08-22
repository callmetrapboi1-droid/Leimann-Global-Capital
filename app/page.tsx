"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import HeroSection from "@/components/home/HeroSection";
import MetricsBarSection from "@/components/home/MetricsBarSection";
import VisionSplitSection from "@/components/home/VisionSplitSection";
import ServicesTabSection from "@/components/home/ServicesTabSection";
import PropertyPortfolioSection from "@/components/portfolio/PropertyPortfolioSection";
import CapitalTimelineSection from "@/components/home/CapitalTimelineSection";
import HeritageSection from "@/components/HeritageSection";
import BoardroomSection from "@/components/BoardroomSection";
import ContactSection from "@/components/home/ContactSection";
import InvestorPortalModal from "@/components/InvestorPortalModal";

export default function Home() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<"login" | "consultation" | "dossier">("consultation");
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);

  // Currency & Property State
  const [currency, setCurrency] = useState<"CHF" | "USD" | "EUR" | "THB">("CHF");
  const [compareList, setCompareList] = useState<string[]>(["funny-haus-binz", "kuesnacht-goldcoast"]);

  const handleOpenPortal = (
    tab: "login" | "consultation" | "dossier" = "consultation",
    propertyName?: string
  ) => {
    setPortalTab(tab);
    setSelectedProperty(propertyName || null);
    setPortalOpen(true);
  };

  const handleClosePortal = () => {
    setPortalOpen(false);
    setSelectedProperty(null);
  };

  const handleToggleCompare = (id: string) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background text-on-surface relative">
        {/* Top Fixed Header with Logo, Full-Screen Menu & Language Dropdown */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="flex-1 w-full">
          {/* 1. Clean Hero Section: Full background imagery without in-banner clutter */}
          <HeroSection onOpenPortal={handleOpenPortal} />

          {/* 2. Standalone Swiss Fiduciary Metrics Bar (Visible upon scrolling) */}
          <MetricsBarSection />

          {/* 3. Our Vision: 50/50 Split & Signature Quote Section */}
          <VisionSplitSection onOpenPortal={handleOpenPortal} />

          {/* 4. Core Services & Disciplines Tab System (Acquire / Build / Sell & Rent / Capital Investment) */}
          <ServicesTabSection onOpenPortal={handleOpenPortal} />

          {/* 5. Real Estate Portfolio Showcase (Buy & Rent Filter + Dossier Access) */}
          <PropertyPortfolioSection
            onOpenPortal={handleOpenPortal}
            currency={currency}
            setCurrency={setCurrency}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
          />

          {/* 6. Capital Investment & Strategic Growth Timeline (2024 - 2026) */}
          <CapitalTimelineSection onOpenPortal={handleOpenPortal} />

          {/* 7. About Us, Board of Directors & Swiss Heritage Governance */}
          <HeritageSection />

          {/* 8. Boardroom & Founder Quote */}
          <BoardroomSection />

          {/* 9. Direct Swiss Contact Desk in Küsnacht */}
          <ContactSection onOpenPortal={handleOpenPortal} />
        </main>

        {/* 10. Warm Taupe Swiss Footer & Imprint */}
        <Footer onOpenPortal={handleOpenPortal} />

        {/* Secure Investor Advisory Modal */}
        <InvestorPortalModal
          isOpen={portalOpen}
          onClose={handleClosePortal}
          initialTab={portalTab}
          selectedProperty={selectedProperty}
        />
      </div>
    </LanguageProvider>
  );
}

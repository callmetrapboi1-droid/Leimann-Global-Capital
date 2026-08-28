"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// The 6 Scenes of the Home Presentation:
// Scene 01: Hero (Vision) → Scene 02: About (Identity) → Scene 03: Investments (Focus Areas) → Scene 04: Global Perspective → Scene 05: Heritage → Scene 06: Family Office
import HeroSection from "@/components/home/HeroSection";
import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeInvestmentsSection from "@/components/home/HomeInvestmentsSection";
import HomeGlobalPerspectiveSection from "@/components/home/HomeGlobalPerspectiveSection";
import HomeHeritageSection from "@/components/home/HomeHeritageSection";
import HomeFamilyEnterpriseSection from "@/components/home/HomeFamilyEnterpriseSection";

import InvestorPortalModal from "@/components/InvestorPortalModal";
import LegalModal from "@/components/modals/LegalModal";

function HomePageContent() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<"login" | "consultation" | "dossier">("login");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<"legal" | "privacy">("legal");

  const handleOpenPortal = (
    tab: "login" | "consultation" | "dossier" = "login",
    topic?: string
  ) => {
    setPortalTab(tab);
    setSelectedTopic(topic || null);
    setPortalOpen(true);
  };

  const handleOpenLegal = (type: "legal" | "privacy") => {
    setLegalType(type);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-gold selection:text-black relative">
      {/* Top Floating Glass Navbar */}
      <Navbar onOpenPortal={handleOpenPortal} />

      {/* Main Presentation Content: 6 Seamless Scenes */}
      <main className="w-full bg-background">
        {/* Scene 01: Vision & Stance */}
        <HeroSection onOpenPortal={handleOpenPortal} />

        {/* Scene 02: Identity & Approach */}
        <HomeAboutSection />

        {/* Scene 03: Focus Areas & Strategic Mandate */}
        <HomeInvestmentsSection />

        {/* Scene 04: Global Perspective & Intersections */}
        <HomeGlobalPerspectiveSection />

        {/* Scene 05: Swiss Heritage & Legacy */}
        <HomeHeritageSection />

        {/* Scene 06: Family Enterprise & Institutional Structure */}
        <HomeFamilyEnterpriseSection />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Investor Portal Modal */}
      <InvestorPortalModal
        isOpen={portalOpen}
        onClose={() => setPortalOpen(false)}
        initialTab={portalTab}
        selectedProperty={selectedTopic}
      />

      {/* Legal Notice & Privacy Policy Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        type={legalType}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}

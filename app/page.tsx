"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// The 6 Sections required for HOME in exact flow:
// Hero → About → Investment → Global Perspective → Heritage → Family Office
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
    <div className="min-h-screen flex flex-col bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navbar */}
      <Navbar onOpenPortal={handleOpenPortal} />

      {/* Main Content: Flow: Hero → About → Investment → Global Perspective → Heritage → Family Office */}
      <main className="w-full bg-surface">
        {/* ① Hero */}
        <HeroSection onOpenPortal={handleOpenPortal} />

        {/* ② About Us */}
        <HomeAboutSection />

        {/* ③ Investments & Collaborations */}
        <HomeInvestmentsSection />

        {/* ④ Global Perspective */}
        <HomeGlobalPerspectiveSection />

        {/* ⑤ Heritage */}
        <HomeHeritageSection />

        {/* ⑥ Family Enterprise / Family Office */}
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

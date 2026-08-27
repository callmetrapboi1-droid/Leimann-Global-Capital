"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeritageSection from "@/components/heritage/HeritageSection";
import InvestorPortalModal from "@/components/InvestorPortalModal";
import LegalModal from "@/components/modals/LegalModal";

function HeritagePageContent() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [portalTab, setPortalTab] = useState<"login" | "consultation" | "dossier">("login");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalType, setLegalType] = useState<"legal" | "privacy">("legal");

  const handleOpenPortal = (tab: "login" | "consultation" | "dossier" = "login", topic?: string) => {
    setPortalTab(tab);
    setSelectedTopic(topic || null);
    setPortalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface relative">
      <Navbar onOpenPortal={handleOpenPortal} />

      <main className="flex-1 w-full pt-8">
        <HeritageSection />
      </main>

      <Footer onOpenLegal={(type) => { setLegalType(type); setLegalModalOpen(true); }} />
      <InvestorPortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} initialTab={portalTab} selectedProperty={selectedTopic} />
      <LegalModal isOpen={legalModalOpen} type={legalType} onClose={() => setLegalModalOpen(false)} />
    </div>
  );
}

export default function HeritagePage() {
  return (
    <LanguageProvider>
      <HeritagePageContent />
    </LanguageProvider>
  );
}

"use client";

import { useState } from "react";
import { X, Lock, ShieldCheck, CheckCircle2, Building, Mail, User, ArrowRight } from "lucide-react";

interface InvestorPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "login" | "consultation" | "dossier";
  selectedProperty?: string | null;
}

export default function InvestorPortalModal({
  isOpen,
  onClose,
  initialTab = "login",
  selectedProperty = null,
}: InvestorPortalModalProps) {
  const [tab, setTab] = useState<"login" | "consultation" | "dossier">(initialTab);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    portfolioSize: "$5M - $25M",
    interest: "Strategic Collaborations",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[105] flex items-center justify-center bg-noir-950/85 backdrop-blur-md p-4 transition-all duration-300">
      <div className="relative w-full max-w-2xl bg-noir-900 text-on-surface border border-outline-gold shadow-2xl overflow-hidden rounded-xs animate-fadeIn">
        {/* Header */}
        <div className="bg-noir-950 text-on-surface p-6 flex justify-between items-center border-b border-outline-gold">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-noir-900 border border-outline-gold flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <h3 className="font-headline-sm text-xl tracking-tight text-on-surface">Leimann Private Office</h3>
              <p className="text-xs text-gold-400 font-label-sm uppercase tracking-wider">
                Freienbach SZ • ActivaSwiss AG Subholding
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-gold-400 p-1 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-outline-gold bg-noir-950/50">
          <button
            onClick={() => { setTab("login"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "login"
                ? "bg-noir-900 text-gold-400 font-bold border-b-2 border-gold-400"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Lock className="w-3.5 h-3.5 text-gold-400" /> Client Portal
          </button>
          <button
            onClick={() => { setTab("consultation"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "consultation"
                ? "bg-noir-900 text-gold-400 font-bold border-b-2 border-gold-400"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <User className="w-3.5 h-3.5 text-gold-400" /> Strategic Advisory
          </button>
          <button
            onClick={() => { setTab("dossier"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "dossier"
                ? "bg-noir-900 text-gold-400 font-bold border-b-2 border-gold-400"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Building className="w-3.5 h-3.5 text-gold-400" /> Project Dossier
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-noir-950 border border-gold-400 text-gold-400 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline-md text-2xl text-on-surface mb-3">
                Request Authenticated
              </h4>
              <p className="text-on-surface-variant max-w-md text-sm leading-relaxed mb-8 font-light">
                Your credentials and request have been securely routed to our Managing Partner desk in Freienbach SZ. You will receive an encrypted brief within 2 business hours.
              </p>
              <button
                onClick={handleReset}
                className="bg-primary hover:bg-primary-hover text-on-primary px-8 py-3 font-label-sm text-xs uppercase tracking-widest transition-all rounded-xs shadow-gold-glow font-medium"
              >
                Return to Overview
              </button>
            </div>
          ) : tab === "login" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-4 bg-noir-950 border border-outline-gold rounded-xs mb-4">
                <p className="text-xs text-gold-300 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>256-bit encrypted authentication for verified partners and family office trustees.</span>
                </p>
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-gold-300 mb-2 font-semibold">
                  Principal Account ID / Encrypted Token
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. LGC-8849-CH"
                  className="w-full bg-noir-950 border border-outline-gold px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-gold-400 transition-colors rounded-xs"
                />
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-gold-300 mb-2 font-semibold">
                  Secure Passkey
                </label>
                <input
                  required
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full bg-noir-950 border border-outline-gold px-4 py-3 text-on-surface text-sm focus:outline-none focus:border-gold-400 transition-colors rounded-xs"
                />
              </div>

              <div className="flex justify-between items-center text-xs text-on-surface-variant pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded-xs border-outline-gold text-gold-400 focus:ring-0 bg-noir-950" />
                  <span>Remember verified terminal</span>
                </label>
                <a href="/contact" onClick={onClose} className="hover:text-gold-400 underline underline-offset-4">
                  Request Access Key
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-on-primary py-4 font-label-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 mt-6 rounded-xs shadow-gold-glow font-medium"
              >
                <span>Authorize & Enter Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedProperty && (
                <div className="p-3 bg-noir-950 border border-outline-gold text-xs text-gold-300 font-medium flex items-center justify-between rounded-xs">
                  <span>Selected Focus: <strong>{selectedProperty}</strong></span>
                  <span className="font-label-sm text-[10px] uppercase bg-gold-400 text-noir-950 px-2 py-0.5 rounded-xs font-semibold">Confidential</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-gold-300 mb-1 font-semibold">
                    Full Name / Title
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Alexander Weber"
                      className="w-full bg-noir-950 border border-outline-gold pl-10 pr-4 py-2.5 text-on-surface text-sm focus:outline-none focus:border-gold-400 rounded-xs"
                    />
                    <User className="w-4 h-4 text-gold-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-gold-300 mb-1 font-semibold">
                    Institutional / Direct Email
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="principal@institution.ch"
                      className="w-full bg-noir-950 border border-outline-gold pl-10 pr-4 py-2.5 text-on-surface text-sm focus:outline-none focus:border-gold-400 rounded-xs"
                    />
                    <Mail className="w-4 h-4 text-gold-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-gold-300 mb-1 font-semibold">
                  Confidential Brief
                </label>
                <textarea
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Specify strategic scope, investment opportunities, or cross-border venture..."
                  className="w-full bg-noir-950 border border-outline-gold p-3 text-on-surface text-sm focus:outline-none focus:border-gold-400 rounded-xs"
                ></textarea>
              </div>

              <div className="text-[11px] text-on-surface-variant flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Non-Disclosure Agreement (NDA) automatically initiated upon dispatch.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-hover text-on-primary py-3.5 font-label-sm text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 rounded-xs shadow-gold-glow font-medium"
              >
                <span>Dispatch Confidential Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

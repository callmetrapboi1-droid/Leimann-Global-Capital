"use client";

import { useState } from "react";
import { X, Lock, ShieldCheck, CheckCircle2, Building, Mail, User, Phone, ArrowRight } from "lucide-react";

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
    interest: "Prime Real Estate",
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all duration-300">
      <div className="relative w-full max-w-2xl bg-white border border-outline-variant/40 shadow-2xl overflow-hidden rounded-sm animate-fadeIn">
        {/* Header */}
        <div className="bg-primary text-white p-6 flex justify-between items-center border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-platinum" />
            </div>
            <div>
              <h3 className="font-headline-sm text-xl tracking-tight text-white">Leimann Private Office</h3>
              <p className="text-xs text-neutral-400 font-label-sm uppercase tracking-wider">
                Zurich • London • Singapore • New York
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white p-1 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-outline-variant/30 bg-surface-container-low">
          <button
            onClick={() => { setTab("login"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "login"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <Lock className="w-3.5 h-3.5" /> Client Portal
          </button>
          <button
            onClick={() => { setTab("consultation"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "consultation"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <User className="w-3.5 h-3.5" /> Private Advisory
          </button>
          <button
            onClick={() => { setTab("dossier"); setSubmitted(false); }}
            className={`flex-1 py-3.5 px-4 font-label-sm text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 ${
              tab === "dossier"
                ? "bg-white text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            <Building className="w-3.5 h-3.5" /> Property Dossier
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-50 text-green-700 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-headline-md text-2xl text-primary mb-3">
                Request Authenticated
              </h4>
              <p className="text-on-surface-variant max-w-md text-sm leading-relaxed mb-8">
                Your credentials and request have been securely routed to our Managing Partner desk in Zurich. You will receive an encrypted dossier within 2 business hours.
              </p>
              <button
                onClick={handleReset}
                className="bg-primary text-white px-8 py-3 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all"
              >
                Return to Overview
              </button>
            </div>
          ) : tab === "login" ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-4 bg-surface-container-low border border-outline-variant/30 rounded-sm mb-4">
                <p className="text-xs text-on-surface-variant flex items-center gap-2">
                  <Lock className="w-4 h-4 text-primary shrink-0" />
                  <span>256-bit encrypted authentication for verified principals and trustees.</span>
                </p>
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Principal Account ID / Encrypted Token
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. LGC-8849-CH"
                  className="w-full bg-surface border border-outline-variant px-4 py-3 text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-2">
                  Secure Passkey
                </label>
                <input
                  required
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full bg-surface border border-outline-variant px-4 py-3 text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex justify-between items-center text-xs text-on-surface-variant pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded-none border-outline-variant text-primary focus:ring-0" />
                  <span>Remember verified biometric terminal</span>
                </label>
                <a href="#contact" onClick={onClose} className="hover:text-primary underline underline-offset-4">
                  Request Access Key
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-6"
              >
                <span>Authorize & Enter Portal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {selectedProperty && (
                <div className="p-3 bg-neutral-100 border border-outline-variant/40 text-xs text-primary font-medium flex items-center justify-between">
                  <span>Selected Asset: <strong>{selectedProperty}</strong></span>
                  <span className="font-label-sm text-[10px] uppercase bg-primary text-white px-2 py-0.5">Confidential</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Full Name / Title
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Lord Alexander Wright"
                      className="w-full bg-surface border border-outline-variant pl-10 pr-4 py-2.5 text-primary text-sm focus:outline-none focus:border-primary"
                    />
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Institutional / Family Office Email
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="principal@estate.com"
                      className="w-full bg-surface border border-outline-variant pl-10 pr-4 py-2.5 text-primary text-sm focus:outline-none focus:border-primary"
                    />
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Direct Contact / Telephone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+41 44 211 00 00"
                      className="w-full bg-surface border border-outline-variant pl-10 pr-4 py-2.5 text-primary text-sm focus:outline-none focus:border-primary"
                    />
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                  </div>
                </div>

                <div>
                  <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Target Allocation Scope
                  </label>
                  <select
                    value={formState.portfolioSize}
                    onChange={(e) => setFormState({ ...formState, portfolioSize: e.target.value })}
                    className="w-full bg-surface border border-outline-variant px-3 py-2.5 text-primary text-sm focus:outline-none focus:border-primary"
                  >
                    <option value="$2M - $5M">$2M – $5M (Single Asset)</option>
                    <option value="$5M - $25M">$5M – $25M (Prime Portfolio)</option>
                    <option value="$25M - $100M+">$25M – $100M+ (Institutional / Trophy Asset)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                  Confidential Brief / Specific Requirements
                </label>
                <textarea
                  rows={3}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Specify jurisdiction, target yield, off-market trophy assets, or tax governance structure..."
                  className="w-full bg-surface border border-outline-variant p-3 text-primary text-sm focus:outline-none focus:border-primary"
                ></textarea>
              </div>

              <div className="text-[11px] text-neutral-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                <span>Non-Disclosure Agreement (NDA) automatically initiated upon dispatch.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-3.5 font-label-sm text-xs uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-2"
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

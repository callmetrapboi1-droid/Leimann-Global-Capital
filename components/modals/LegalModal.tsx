"use client";

import { X, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface LegalModalProps {
  isOpen: boolean;
  type: "legal" | "privacy";
  onClose: () => void;
}

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-noir-950/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="bg-noir-900 text-on-surface max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-outline-gold shadow-2xl relative p-8 sm:p-10 rounded-xs">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-on-surface-variant hover:text-gold-400 p-1.5 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-gold">
          <div className="w-9 h-9 bg-noir-950 border border-outline-gold flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <h3 className="font-headline-sm text-2xl text-on-surface font-normal">
              {type === "legal" ? "Legal Notice" : "Privacy Policy"}
            </h3>
            <span className="font-label-sm text-[10px] uppercase tracking-widest text-gold-400">
              Leimann Global Capital GmbH • ActivaSwiss AG Subholding
            </span>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-on-surface-variant font-body-md font-light leading-relaxed">
          {type === "legal" ? (
            <>
              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Entity Identification & Corporate Structure</h4>
                <p>
                  Leimann Global Capital GmbH is a privately held investment entity registered in Freienbach, Canton of Schwyz, Switzerland. It operates as a subholding within the ActivaSwiss AG Family Office investment structure.
                  <br />
                  Registered Office: Unterdorfstrasse 12, 8808 Freienbach SZ, Switzerland.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Nature of Activities</h4>
                <p>
                  Leimann Global Capital operates as a private investment and business development platform focusing on global fintech, technology & innovation, private equity, and generational wealth stewardship. This website is intended exclusively for informational purposes and does not constitute a public solicitation or offer of securities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Intellectual Property</h4>
                <p>
                  All content, trademarks, and corporate identifiers displayed on this platform are the property of Leimann Global Capital GmbH, ActivaSwiss AG, and their respective strategic partners.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Swiss Federal Data Protection Compliance</h4>
                <p>
                  Leimann Global Capital GmbH complies strictly with the Swiss Federal Act on Data Protection (FADP / DSG) and applicable international privacy frameworks.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Confidential Communication Handling</h4>
                <p>
                  Information, briefs, or inquiries submitted via this platform are treated with the utmost fiduciary confidentiality and are used exclusively for direct bilateral discussions between principals.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gold-300 mb-1">Contact for Privacy Matters</h4>
                <p>
                  Data Protection Officer, Leimann Global Capital GmbH, Unterdorfstrasse 12, 8808 Freienbach SZ, Switzerland. Email: leimannglobalcapital@info.ch
                </p>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-outline-gold flex justify-end">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary-hover text-on-primary px-6 py-2.5 font-label-sm text-xs uppercase tracking-widest transition-all rounded-xs font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

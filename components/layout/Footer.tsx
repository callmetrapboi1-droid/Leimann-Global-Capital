"use client";

import { Phone, Mail, MapPin, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function Footer({ onOpenPortal }: FooterProps) {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-white text-on-surface pt-20 pb-12 border-t border-outline-variant/50">
      <div className="max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-primary flex items-center justify-center text-white font-headline-sm text-base font-semibold shadow-xs">
                L
              </div>
              <div>
                <span className="font-headline-md text-2xl text-primary font-normal tracking-tight block">
                  Leimann Global Capital GmbH
                </span>
                <span className="text-[10px] text-secondary font-label-sm uppercase tracking-[0.25em] block">
                  Swiss Private Wealth &amp; Prime Real Estate
                </span>
              </div>
            </div>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
              {t.footer.brandDesc}
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] text-secondary">
              <Shield className="w-4 h-4 text-primary shrink-0" />
              <span>{t.footer.compliance}</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-5">
              {t.footer.disciplinesNav}
            </h4>
            <ul className="space-y-2.5 font-body-md text-xs sm:text-sm text-on-surface-variant font-light">
              <li>
                <a href="#hero" className="hover:text-primary transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  {t.nav.realEstate}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-primary transition-colors">
                  {t.nav.vision}
                </a>
              </li>
              <li>
                <a href="#capital-investment" className="hover:text-primary transition-colors">
                  {t.nav.capitalInvestment}
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-primary transition-colors">
                  {t.nav.aboutUs}
                </a>
              </li>
            </ul>
          </div>

          {/* Swiss & Global Desks (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-5">
              {t.footer.executiveDesks}
            </h4>
            <ul className="space-y-2.5 font-body-md text-xs sm:text-sm text-on-surface-variant font-light">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span><strong>Küsnacht (ZH)</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span><strong>Zurich City</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span><strong>Geneva</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span><strong>London</strong></span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                <span><strong>Singapore</strong></span>
              </li>
            </ul>
          </div>

          {/* Contact Direct (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-5">
              {t.footer.contactDesk}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-on-surface-variant font-body-md font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+41794005416" className="text-primary font-medium hover:underline transition-colors">
                  (+41) 79 400 54 16
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:concierge@leimannglobal.com" className="hover:text-primary transition-colors">
                  concierge@leimannglobal.com
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1 text-secondary">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Boglerenstrasse 67, CH-8700 Küsnacht, Switzerland</span>
              </p>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 border-t border-outline-variant/40 flex flex-col sm:flex-row justify-between items-center text-xs text-secondary font-light">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <div className="flex flex-wrap gap-6 font-label-sm text-[11px] uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.cookies}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t.footer.imprint}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

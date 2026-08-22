"use client";

import { Building2, Phone, Mail, MapPin, Globe, Shield } from "lucide-react";

interface FooterProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function Footer({ onOpenPortal }: FooterProps) {
  return (
    <footer id="contact" className="bg-surface-container-lowest border-t border-outline-variant/30 pt-24 pb-12">
      <div className="max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-primary flex items-center justify-center text-primary font-headline-sm text-base">
                L
              </div>
              <span className="font-headline-md text-2xl text-primary font-normal tracking-tight">
                Leimann Global Capital
              </span>
            </div>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed max-w-sm">
              Swiss wealth management, multi-generational capital preservation, and discreet trophy real estate syndication since 1984.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-neutral-500">
              <Shield className="w-4 h-4 text-primary" />
              <span>Regulated under Swiss Financial Market Supervisory Authority (FINMA) framework.</span>
            </div>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-6">
              Global Desks
            </h4>
            <ul className="space-y-3 font-body-md text-xs sm:text-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span><strong>Zurich:</strong> Bahnhofstrasse 45</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span><strong>Geneva:</strong> Rue du Rhône 14</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span><strong>London:</strong> Berkeley Square, Mayfair</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span><strong>Singapore:</strong> Marina Bay Financial Tower</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span>
                <span><strong>Bangkok:</strong> Wireless Road, Lumphini</span>
              </li>
            </ul>
          </div>

          {/* Navigation & Portal */}
          <div>
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-body-md text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-on-surface-variant hover:text-primary transition-colors">
                  Overview
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-on-surface-variant hover:text-primary transition-colors">
                  Trophy Real Estate
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-on-surface-variant hover:text-primary transition-colors">
                  Multi-Generational Wealth
                </a>
              </li>
              <li>
                <a href="#heritage" className="text-on-surface-variant hover:text-primary transition-colors">
                  Swiss Heritage & Trust
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-on-surface-variant hover:text-primary transition-colors">
                  Wealth Simulator
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenPortal("login")}
                  className="text-primary font-medium hover:underline underline-offset-4"
                >
                  Investor Portal Login →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold mb-6">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-on-surface-variant font-body-md">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-primary font-medium">+41 44 211 00 00</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>office@leimanncapital.ch</span>
              </p>
              <p className="flex items-start gap-2 pt-1 text-neutral-500">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Bahnhofstrasse 45, CH-8001 Zurich, Switzerland</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-outline-variant/20 text-xs text-on-surface-variant">
          <p className="mb-4 sm:mb-0">
            © {new Date().getFullYear()} Leimann Global Capital AG. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 font-label-sm text-[11px] uppercase tracking-wider">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Swiss Banking Compliance
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Fiduciary Engagement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

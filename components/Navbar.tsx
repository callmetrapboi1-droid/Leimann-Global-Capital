"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shield, Lock } from "lucide-react";

interface NavbarProps {
  onOpenPortal: (tab?: "login" | "consultation" | "dossier") => void;
}

export default function Navbar({ onOpenPortal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Expertise", href: "#expertise" },
    { name: "Heritage", href: "#heritage" },
    { name: "Calculator", href: "#calculator" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-outline-variant/40 shadow-sm py-3"
          : "bg-white/60 backdrop-blur-md border-b border-outline-variant/20 py-5"
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop">
        {/* Brand Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="w-8 h-8 border border-primary flex items-center justify-center text-primary font-headline-sm text-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
            L
          </div>
          <div>
            <span className="font-headline-sm text-xl sm:text-2xl text-primary tracking-tight font-medium block">
              Leimann Global Capital
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-neutral-500 block -mt-1 font-label-sm">
              Zurich • Geneva • London • Singapore
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-body-md text-[14px] transition-colors relative py-1 ${
                idx === 0
                  ? "text-primary font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Portal Access */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={() => onOpenPortal("login")}
            className="bg-primary text-on-primary px-6 py-2.5 font-label-sm text-xs uppercase tracking-widest transition-transform active:scale-95 hover:opacity-90 flex items-center gap-2 border border-primary"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Investor Portal</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenPortal("login")}
            className="bg-primary text-white p-2 text-xs font-label-sm uppercase sm:hidden"
            aria-label="Login"
          >
            <Lock className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-outline-variant px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body-md text-base text-primary py-2 border-b border-neutral-100"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPortal("login");
              }}
              className="w-full bg-primary text-on-primary py-3 font-label-sm text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Investor Portal Access</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

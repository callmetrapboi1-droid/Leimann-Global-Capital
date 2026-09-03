"use client";

import { useEffect, useState } from "react";
import BrandLogo from "@/components/common/BrandLogo";

export default function IntroShutter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    // Check if user already saw intro in current session
    const hasSeen = sessionStorage.getItem("lgc_shutter_seen");
    if (hasSeen) {
      setIsRemoved(true);
      return;
    }

    // Trigger shutter open after 600ms
    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("lgc_shutter_seen", "true");
    }, 700);

    // Remove from DOM after transition completes
    const removeTimer = setTimeout(() => {
      setIsRemoved(true);
    }, 1900);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (isRemoved) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none flex">
      {/* Left Shutter */}
      <div
        className={`w-1/2 h-full bg-[#050608] border-r border-[#c5a880]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Right Shutter */}
      <div
        className={`w-1/2 h-full bg-[#050608] border-l border-[#c5a880]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Center Crest Emblem during initial moment */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 flex flex-col items-center gap-5 ${
          isOpen ? "opacity-0 scale-125" : "opacity-100 scale-100"
        }`}
      >
        <BrandLogo size="intro" className="text-[#f3ede2]" />
        <span className="text-[10px] font-label-md text-[#c5a880] tracking-[0.3em] uppercase font-semibold">
          SWITZERLAND
        </span>
      </div>
    </div>
  );
}

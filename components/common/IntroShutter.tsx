"use client";

import { useEffect, useState } from "react";

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
        className={`w-1/2 h-full bg-[#050608] border-r border-[#c5a880]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-end pr-6 ${
          isOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={`transition-opacity duration-500 text-right ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="font-display-md text-xl sm:text-2xl text-[#f3ede2] font-bold tracking-tight">
            LEIMANN
          </span>
        </div>
      </div>

      {/* Right Shutter */}
      <div
        className={`w-1/2 h-full bg-[#050608] border-l border-[#c5a880]/20 transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] flex items-center justify-start pl-6 ${
          isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={`transition-opacity duration-500 text-left ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="font-display-md text-xl sm:text-2xl text-[#c5a880] font-bold tracking-tight">
            GLOBAL CAPITAL
          </span>
        </div>
      </div>

      {/* Center Crest Emblem during initial moment */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 flex flex-col items-center gap-2 ${
          isOpen ? "opacity-0 scale-125" : "opacity-100 scale-100"
        }`}
      >
        <div className="w-12 h-12 rounded bg-gradient-to-br from-[#c5a880] to-[#9e825b] text-black flex items-center justify-center font-display-md text-2xl font-bold shadow-2xl">
          L
        </div>
        <span className="text-[10px] font-label-md text-[#c5a880] tracking-[0.3em] uppercase font-semibold">
          SWITZERLAND
        </span>
      </div>
    </div>
  );
}

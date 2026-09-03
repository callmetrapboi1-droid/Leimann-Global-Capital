"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const scenes = [
  { id: "scene-hero", labelEN: "01 Vision", labelTH: "01 วิสัยทัศน์", labelDE: "01 Vision" },
  { id: "scene-about", labelEN: "02 Identity", labelTH: "02 ข้อมูลองค์กร", labelDE: "02 Identität" },
  { id: "scene-investments", labelEN: "03 Focus Areas", labelTH: "03 การลงทุน", labelDE: "03 Fokusbereiche" },
  { id: "scene-global", labelEN: "04 Perspective", labelTH: "04 มิติโลก", labelDE: "04 Perspektive" },
  { id: "scene-heritage", labelEN: "05 Heritage", labelTH: "05 มรดกสวิส", labelDE: "05 Herkunft" },
  { id: "scene-family", labelEN: "06 Governance", labelTH: "06 โครงสร้าง", labelDE: "06 Struktur" },
];

export default function PresentationNav() {
  const { language } = useLanguage();
  const [activeScene, setActiveScene] = useState("scene-hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sectionElements = scenes.map((s) => document.getElementById(s.id));
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveScene(scenes[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToScene = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Presentation Navigation"
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3.5 pointer-events-auto"
    >
      {/* Subtle Slide Track Indicator */}
      <div className="bg-[#f7f5f0]/92 backdrop-blur-xl border border-[#172023]/15 rounded-full p-2.5 shadow-2xl flex flex-col items-center gap-3">
        {scenes.map((scene, idx) => {
          const isActive = activeScene === scene.id;
          const label =
            language === "TH"
              ? scene.labelTH
              : language === "DE"
              ? scene.labelDE
              : scene.labelEN;

          return (
            <button
              key={scene.id}
              onClick={() => scrollToScene(scene.id)}
              className="group relative flex items-center justify-end focus:outline-none"
              aria-label={`Go to ${label}`}
            >
              {/* Tooltip on Hover */}
              <span className="absolute right-7 px-2.5 py-1 rounded bg-[#f7f5f0]/95 border border-[#172023]/20 text-[11px] font-label-md uppercase tracking-wider text-[#172023] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-xl">
                {label}
              </span>

              {/* Dot / Pill Indicator */}
              <div
                className={`transition-all duration-500 rounded-full ${
                  isActive
                    ? "w-2.5 h-6 bg-gold-dark"
                    : "w-2 h-2 bg-[#172023]/25 group-hover:bg-gold-dark/80"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Progress Telemetry Indicator */}
      <div className="text-[10px] font-label-md uppercase tracking-widest text-[#172023]/60 bg-[#f7f5f0]/90 backdrop-blur-md px-2 py-0.5 rounded border border-[#172023]/15">
        {Math.round(progress)}%
      </div>
    </aside>
  );
}

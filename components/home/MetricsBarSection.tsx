"use client";

import { useState, useEffect, useRef } from "react";
import { Shield, TrendingUp, Building2, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MetricsBarSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animated counters state
  const [countVolume, setCountVolume] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countYears, setCountYears] = useState(0);
  const [countPrivacy, setCountPrivacy] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Smooth count-up animation when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800; // 1.8s
    const steps = 40;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // Ease out cubic progress
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountVolume(Number((4.8 * ease).toFixed(1)));
      setCountProjects(Math.round(62 * ease));
      setCountYears(Math.round(40 * ease));
      setCountPrivacy(Math.round(100 * ease));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountVolume(4.8);
        setCountProjects(62);
        setCountYears(40);
        setCountPrivacy(100);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 bg-sand-50 py-14 sm:py-20 border-b border-outline-variant/60 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-64 bg-bronze-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Card 1: Asset & Project Volume */}
          <div
            className={`group bg-white border border-outline-variant/80 hover:border-bronze-gold p-8 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700`}
            style={{ transitionDelay: "100ms" }}
          >
            {/* Top golden indicator line on hover */}
            <div className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-burgundy to-bronze-gold w-0 group-hover:w-full transition-all duration-700"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-burgundy transition-colors">
                  <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-semibold">
                    {t.hero.statVolumeLabel}
                  </span>
                </div>
              </div>

              {/* Counter Display */}
              <div className="my-2">
                <p className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium tracking-tight group-hover:text-burgundy transition-colors">
                  CHF {countVolume}B+
                </p>
              </div>

              <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                {t.hero.statVolumeSub}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-[11px] font-label-sm text-bronze-gold uppercase tracking-wider">
              <span>Tier-1 Swiss Banks</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
            </div>
          </div>

          {/* Card 2: Swiss & Global Assets */}
          <div
            className={`group bg-white border border-outline-variant/80 hover:border-bronze-gold p-8 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-burgundy to-bronze-gold w-0 group-hover:w-full transition-all duration-700"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-burgundy transition-colors">
                  <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-semibold">
                    {t.hero.statAssetsLabel}
                  </span>
                </div>
              </div>

              {/* Counter Display */}
              <div className="my-2">
                <p className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium tracking-tight group-hover:text-burgundy transition-colors">
                  {countProjects} Projects
                </p>
              </div>

              <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                {t.hero.statAssetsSub}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-[11px] font-label-sm text-bronze-gold uppercase tracking-wider">
              <span>Prime Locations</span>
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-gold"></span>
            </div>
          </div>

          {/* Card 3: Swiss Track Record */}
          <div
            className={`group bg-white border border-outline-variant/80 hover:border-bronze-gold p-8 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-burgundy to-bronze-gold w-0 group-hover:w-full transition-all duration-700"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-burgundy transition-colors">
                  <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-semibold">
                    {t.hero.statTrackLabel}
                  </span>
                </div>
              </div>

              {/* Counter Display */}
              <div className="my-2">
                <p className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium tracking-tight group-hover:text-burgundy transition-colors">
                  {countYears}+ Years
                </p>
              </div>

              <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                {t.hero.statTrackSub}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-[11px] font-label-sm text-bronze-gold uppercase tracking-wider">
              <span>Since 1984</span>
              <Award className="w-3.5 h-3.5 text-bronze-gold" />
            </div>
          </div>

          {/* Card 4: Swiss Discretion */}
          <div
            className={`group bg-white border border-outline-variant/80 hover:border-bronze-gold p-8 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden flex flex-col justify-between ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-700`}
            style={{ transitionDelay: "550ms" }}
          >
            <div className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-burgundy to-bronze-gold w-0 group-hover:w-full transition-all duration-700"></div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-neutral-500 group-hover:text-burgundy transition-colors">
                  <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-all duration-300">
                    <span className="font-headline-sm text-base text-burgundy group-hover:text-white font-serif italic">
                      §
                    </span>
                  </div>
                  <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-semibold">
                    {t.hero.statDiscretionLabel}
                  </span>
                </div>
              </div>

              {/* Counter Display */}
              <div className="my-2">
                <p className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-charcoal font-medium tracking-tight group-hover:text-burgundy transition-colors">
                  {countPrivacy}% Private
                </p>
              </div>

              <p className="text-xs text-neutral-500 font-light mt-2 leading-relaxed">
                {t.hero.statDiscretionSub}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-sand-100 flex items-center justify-between text-[11px] font-label-sm text-bronze-gold uppercase tracking-wider">
              <span>Banking Act Art. 47</span>
              <span className="w-1.5 h-1.5 rounded-full bg-burgundy"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

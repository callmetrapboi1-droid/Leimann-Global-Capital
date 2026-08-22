"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2560&q=90",
  "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=2560&q=90",
];

export default function HeroBackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000); // changes every 6s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none">
      {heroImages.map((imgUrl, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={imgUrl}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1500 ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={imgUrl}
              alt=""
              role="presentation"
              className={`w-full h-full object-cover object-center transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />
          </div>
        );
      })}

      {/* Crystal Clear Contrast Gradients (Keeps photos sharp & vivid while making white/sand text 100% readable) */}
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
    </div>
  );
}

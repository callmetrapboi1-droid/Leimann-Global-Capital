"use client";

import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function BoardroomSection() {
  return (
    <section className="max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop mb-24">
      <Reveal direction="scale" delay={100} className="relative min-h-[500px] md:h-[600px] overflow-hidden platinum-border border bg-neutral-900 shadow-xl group">
        <div className="absolute inset-0 bg-black/25 mix-blend-multiply z-10"></div>
        <img
          className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-[3s] ease-out"
          alt="Zurich financial district and boardroom overlooking the Limmat river"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEP2dm--m9p30qzbApanNt6iJyP2OuJdIBErvZLbc-bu2xxyfGgZsaE_N-wAAVMmNyYw1aB6to8Wm5A3y90R5BoPtpfxZULfZdaUVHn37qL7vanEAWpBdwzhu5PrM6099BrT6go0CgCAso16cVcV_gAqwrmNyw2VL0Ixoa6Cua21SUQ5zNsICI5oCh6pe10c9Ck6w-OZSwM3Nv2r1N_w_18oPvDgXDAoQ33EVRSxAlToEVQO3tb5hd-pr4eg158gfL9zxudYU7"
        />

        {/* Floating Quote Card */}
        <Reveal direction="up" delay={300} className="relative z-20 m-6 sm:m-12 md:absolute md:bottom-16 md:left-16 max-w-lg glass-card p-8 sm:p-12 border border-white/50 shadow-2xl backdrop-blur-xl">
          <Quote className="w-8 h-8 text-neutral-400 mb-4 stroke-1 opacity-70" />
          <p className="font-body-lg text-base sm:text-lg italic mb-6 text-[#1A1C1C] font-normal leading-relaxed">
            &ldquo;Preservation is not merely holding onto the past; it is the active engineering of the future.&rdquo;
          </p>
          <div className="w-12 h-[1.5px] bg-[#1A1C1C] mb-2.5"></div>
          <p className="font-label-sm text-xs uppercase tracking-widest text-[#1A1C1C] font-semibold">
            Friedrich Leimann, Founder
          </p>
          <p className="text-[11px] text-neutral-500 font-label-sm uppercase tracking-wider mt-0.5">
            Zurich, Switzerland
          </p>
        </Reveal>
      </Reveal>
    </section>
  );
}

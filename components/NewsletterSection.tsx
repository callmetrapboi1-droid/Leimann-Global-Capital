"use client";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, FileText } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="insights" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop text-center">
      <div className="max-w-3xl mx-auto glass-card p-10 sm:p-16 border border-outline-variant/50 bg-white/90 shadow-sm relative overflow-hidden">
        <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-surface-container flex items-center justify-center">
          <FileText className="w-5 h-5 text-primary" />
        </div>

        <span className="font-label-sm text-xs text-on-surface-variant uppercase tracking-[0.3em] mb-3 block">
          Quarterly Macro Intelligence
        </span>

        <h2 className="font-headline-md text-3xl sm:text-4xl text-primary mb-6 font-normal">
          Access the Swiss Capital & Real Estate Review.
        </h2>

        <p className="font-body-md text-on-surface-variant mb-10 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Receive our curated institutional research on global liquidity cycles, prime real estate yield benchmarks, and multi-currency capital migration, delivered directly from our Zurich research desk.
        </p>

        {subscribed ? (
          <div className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col items-center justify-center animate-fadeIn">
            <CheckCircle2 className="w-8 h-8 text-emerald-700 mb-2" />
            <h4 className="font-headline-sm text-lg text-primary font-medium">
              Subscription Registered
            </h4>
            <p className="text-xs text-on-surface-variant mt-1">
              The Q3 2026 Executive Capital Brief has been dispatched to <strong>{email}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-grow">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Institutional Email Address"
                className="w-full bg-transparent border-0 border-b border-outline text-primary px-0 py-3.5 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 font-body-md text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-on-primary px-10 py-3.5 font-label-sm text-xs tracking-widest uppercase hover:opacity-85 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        )}

        <div className="mt-8 text-[11px] text-neutral-400 font-label-sm uppercase tracking-wider">
          Zero Spam • Pure Fiduciary Research • Unsubscribe Anytime
        </div>
      </div>
    </section>
  );
}

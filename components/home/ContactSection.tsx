"use client";

import { useState } from "react";
import { ArrowRight, Check, MapPin, Phone, Mail, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/ui/Reveal";

interface ContactSectionProps {
  onOpenPortal?: (tab?: "login" | "consultation" | "dossier", propertyName?: string) => void;
}

export default function ContactSection({ onOpenPortal }: ContactSectionProps) {
  const { t, language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    entity: "",
    email: "",
    inquiryType: "Real Estate & Land Mandate",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 max-w-container-max mx-auto px-6 sm:px-12 lg:px-margin-desktop bg-[#FAF8F5] border-t border-[#E5E4E2]">
      {/* 1. Header Section */}
      <Reveal direction="up" delay={100} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-6 border-b border-[#E5E4E2]">
        <div className="lg:col-span-7">
          <span className="font-label-sm text-xs text-neutral-500 block mb-3 uppercase tracking-[0.25em] font-semibold">
            {language === "TH" ? "ส่วนบุคคลและรักษาความลับสูงสุด" : language === "DE" ? "Streng Vertraulich" : "Private & Confidential"}
          </span>
          <h2 className="font-headline-md text-3xl sm:text-4xl lg:text-5xl text-[#1A1C1C] font-normal max-w-2xl leading-tight">
            {language === "TH" ? "ติดต่อสำนักงานใหญ่ ณ นครซูริก สวิตเซอร์แลนด์" : language === "DE" ? "Verbinden Sie sich mit unserem Hauptsitz in Zürich" : "Connect with our Zurich Headquarters."}
          </h2>
        </div>
        <div className="lg:col-span-5 pb-1">
          <p className="font-body-md text-on-surface-variant text-sm sm:text-base leading-relaxed font-light">
            {language === "TH"
              ? "ทีมที่ปรึกษาด้านการลงทุนและอสังหาริมทรัพย์ของเราดำเนินงานด้วยการรักษาความลับระดับสูงสุด พร้อมให้คำปรึกษาแบบส่วนบุคคลสำหรับพอร์ตโฟลิโอระดับสากลของคุณ"
              : language === "DE"
              ? "Unser Capital Advisory Team arbeitet mit höchster Diskretion. Vereinbaren Sie ein vertrauliches Gespräch für Ihre weltweiten Anlage- und Immobilienmandate."
              : "Our capital advisory team operates with the highest discretion. Reach out to arrange a private consultation or to inquire about our global investment portfolios."}
          </p>
        </div>
      </Reveal>

      {/* 2. Main Content Grid (7 cols form + 5 cols offices) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Glassmorphism Inquiry Form (7 cols) */}
        <Reveal direction="up" delay={200} className="lg:col-span-7">
          <div className="bg-white/95 backdrop-blur-xl border border-[#E5E4E2] p-8 sm:p-12 lg:p-14 shadow-sm relative">
            <h3 className="font-headline-sm text-2xl sm:text-3xl text-[#1A1C1C] font-medium mb-10 pb-4 border-b border-[#E5E4E2]">
              {language === "TH" ? "แบบฟอร์มส่งข้อมูลปรึกษาพิเศษ" : language === "DE" ? "Vertrauliche Mandatsanfrage" : "Professional Inquiry"}
            </h3>

            {submitted ? (
              <div className="p-8 bg-[#F3F3F4] border border-emerald-300 animate-fadeIn text-center sm:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-700 text-white mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-headline-sm text-2xl text-[#1A1C1C] font-semibold mb-2">
                  {language === "TH" ? "ส่งข้อมูลสำเร็จเรียบร้อย" : language === "DE" ? "Anfrage erfolgreich übermittelt" : "Inquiry Sent Successfully"}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                  {language === "TH"
                    ? "ขอบพระคุณเป็นอย่างยิ่ง ข้อมูลของคุณถูกส่งตรงไปยังคณะกรรมการบริหารและที่ปรึกษาของเราที่สำนักงานใหญ่คูสนัคท์/ซูริกเรียบร้อยแล้ว"
                    : language === "DE"
                    ? "Vielen Dank. Ihre vertrauliche Mitteilung wurde direkt an unseren Vorstand und die Geschäftsleitung in Küsnacht/Zürich weitergeleitet."
                    : "Thank you. Your confidential inquiry has been forwarded directly to the executive desk of Adrian Leimann and our Swiss advisory board."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1A1C1C] text-white text-xs font-label-sm uppercase tracking-wider hover:bg-neutral-800 transition-all"
                >
                  {language === "TH" ? "ส่งข้อความอื่นเพิ่มเติม" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Row 1: Name & Entity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                      {language === "TH" ? "ชื่อ-นามสกุล *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jonathan Doe"
                      className="border-b border-[#cfc4c5] focus:border-[#1A1C1C] bg-transparent py-2.5 text-sm text-[#1A1C1C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                      {language === "TH" ? "ชื่อนิติบุคคล / สำนักงานครอบครัว" : "Entity Name"}
                    </label>
                    <input
                      type="text"
                      value={formData.entity}
                      onChange={(e) => setFormData({ ...formData, entity: e.target.value })}
                      placeholder="Family Office / Institution"
                      className="border-b border-[#cfc4c5] focus:border-[#1A1C1C] bg-transparent py-2.5 text-sm text-[#1A1C1C] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Inquiry Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col">
                    <label className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                      {language === "TH" ? "อีเมลติดต่อ *" : "Email Address *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="office@example.com"
                      className="border-b border-[#cfc4c5] focus:border-[#1A1C1C] bg-transparent py-2.5 text-sm text-[#1A1C1C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                      {language === "TH" ? "ประเภทหัวข้อ *" : "Inquiry Type *"}
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="border-b border-[#cfc4c5] focus:border-[#1A1C1C] bg-transparent py-2.5 text-sm text-[#1A1C1C] focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="Real Estate & Land Mandate">Real Estate &amp; Building Land Mandate</option>
                      <option value="Portfolio Acquisitions (Buy / Rent)">Portfolio Acquisitions (Buy / Rent)</option>
                      <option value="Private Equity & Venture Syndicate">Private Equity &amp; Venture Syndicate</option>
                      <option value="Swiss Fiduciary & Family Office">Swiss Fiduciary &amp; Family Office Governance</option>
                      <option value="Media & Institutional Inquiries">Media &amp; Institutional Inquiries</option>
                    </select>
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col">
                  <label className="font-label-sm text-[11px] text-neutral-500 uppercase tracking-wider mb-2 font-semibold">
                    {language === "TH" ? "รายละเอียดความต้องการ *" : "Message *"}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Brief outline of your inquiry or property parameters..."
                    className="border-b border-[#cfc4c5] focus:border-[#1A1C1C] bg-transparent py-2.5 text-sm text-[#1A1C1C] focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Action & Privacy */}
                <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <p className="text-xs text-neutral-500 max-w-sm font-light leading-relaxed">
                    By submitting, you acknowledge our sovereign Swiss privacy standards regarding the handling of sensitive financial data (Banking Act Art. 47).
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1A1C1C] text-white hover:bg-neutral-800 px-10 py-4 font-label-sm text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shrink-0 shadow-md font-semibold active:scale-95"
                  >
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>

        {/* Right Column: Global Offices Sidebar (5 cols) */}
        <Reveal direction="up" delay={300} className="lg:col-span-5 space-y-8">
          {/* Headquarters Photographic Feature Card */}
          <div className="relative w-full h-[360px] overflow-hidden border border-[#E5E4E2] group shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
              alt="Zurich Switzerland Architecture"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="font-label-sm text-[10px] uppercase tracking-[0.25em] text-neutral-300 block mb-1 font-semibold">
                Global Headquarters
              </span>
              <h4 className="font-headline-sm text-2xl text-white font-medium">
                Küsnacht / Zurich, Switzerland
              </h4>
              <p className="text-xs text-neutral-300 font-light mt-1">
                Boglerenstrasse 67, CH-8700 Küsnacht
              </p>
            </div>
          </div>

          {/* Office Directory List */}
          <div className="bg-white border border-[#E5E4E2] p-6 sm:p-8 space-y-6 shadow-xs">
            {/* Zurich / Küsnacht */}
            <div className="flex justify-between items-start border-b border-[#E5E4E2] pb-5">
              <div>
                <span className="font-label-sm text-[10px] text-neutral-500 uppercase tracking-wider block mb-1 font-semibold">
                  Headquarters
                </span>
                <h5 className="font-headline-sm text-base text-[#1A1C1C] font-semibold">
                  Küsnacht (Zurich Goldcoast)
                </h5>
                <p className="text-xs text-on-surface-variant font-light mt-0.5">
                  Boglerenstrasse 67, CH-8700 Küsnacht, Switzerland
                </p>
                <a href="tel:+41794005416" className="text-xs text-[#1A1C1C] font-semibold hover:underline mt-1 block">
                  (+41) 79 400 54 16
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Boglerenstrasse+67+Kusnacht+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-label-sm text-[#1A1C1C] hover:text-neutral-600 uppercase tracking-wider font-semibold underline underline-offset-4"
              >
                MAP
              </a>
            </div>

            {/* London */}
            <div className="flex justify-between items-start border-b border-[#E5E4E2] pb-5">
              <div>
                <span className="font-label-sm text-[10px] text-neutral-500 uppercase tracking-wider block mb-1">
                  United Kingdom
                </span>
                <h5 className="font-headline-sm text-base text-[#1A1C1C] font-semibold">
                  London Office
                </h5>
                <p className="text-xs text-on-surface-variant font-light mt-0.5">
                  Berkeley Square, Mayfair, London W1J 6EB
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Berkeley+Square+London"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-label-sm text-[#1A1C1C] hover:text-neutral-600 uppercase tracking-wider font-semibold underline underline-offset-4"
              >
                MAP
              </a>
            </div>

            {/* Geneva */}
            <div className="flex justify-between items-start border-b border-[#E5E4E2] pb-5">
              <div>
                <span className="font-label-sm text-[10px] text-neutral-500 uppercase tracking-wider block mb-1">
                  Romandie Desk
                </span>
                <h5 className="font-headline-sm text-base text-[#1A1C1C] font-semibold">
                  Geneva Office
                </h5>
                <p className="text-xs text-on-surface-variant font-light mt-0.5">
                  Rue du Rhône, 1204 Geneva, Switzerland
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Rue+du+Rhone+Geneva"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-label-sm text-[#1A1C1C] hover:text-neutral-600 uppercase tracking-wider font-semibold underline underline-offset-4"
              >
                MAP
              </a>
            </div>

            {/* Singapore */}
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label-sm text-[10px] text-neutral-500 uppercase tracking-wider block mb-1">
                  Asia-Pacific
                </span>
                <h5 className="font-headline-sm text-base text-[#1A1C1C] font-semibold">
                  Singapore Office
                </h5>
                <p className="text-xs text-on-surface-variant font-light mt-0.5">
                  Marina Bay Financial Centre, Singapore 018983
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Marina+Bay+Financial+Centre+Singapore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-label-sm text-[#1A1C1C] hover:text-neutral-600 uppercase tracking-wider font-semibold underline underline-offset-4"
              >
                MAP
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

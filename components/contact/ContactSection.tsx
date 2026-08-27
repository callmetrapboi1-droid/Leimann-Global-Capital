"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, ShieldCheck, MapPin, Mail, Map } from "lucide-react";

export default function ContactSection() {
  const { language } = useLanguage();
  const isTH = language === "TH";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "strategic",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    {
      id: "investment",
      label: isTH ? "Investment Opportunities (โอกาสด้านการลงทุน)" : "Investment Opportunities",
    },
    {
      id: "strategic",
      label: isTH ? "Strategic Collaborations (ความร่วมมือเชิงกลยุทธ์)" : "Strategic Collaborations",
    },
    {
      id: "international",
      label: isTH
        ? "International Business Development (การพัฒนาธุรกิจระหว่างประเทศ)"
        : "International Business Development",
    },
    {
      id: "tech",
      label: isTH ? "Technology & Innovation (เทคโนโลยีและนวัตกรรม)" : "Technology & Innovation",
    },
    {
      id: "crossborder",
      label: isTH ? "Cross-Border Partnerships (พันธมิตรข้ามพรมแดน)" : "Cross-Border Partnerships",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-surface text-on-surface">
      {/* Top Banner / Breadcrumb */}
      <div className="py-8 border-b border-secondary-container bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex items-center gap-2 text-xs font-label-md text-secondary uppercase tracking-widest mb-1 animate-fadeIn">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-bold">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-12">
        {/* Header Section */}
        <section className="max-w-3xl animate-fadeIn">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-stack-md leading-tight">
            {isTH ? "Let's Connect — มาร่วมเชื่อมต่อกัน" : "Let's Connect"}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {isTH
              ? "เรายินดีพูดคุยกับผู้ที่ได้รับการคัดเลือกเกี่ยวกับการลงทุน ความร่วมมือเชิงกลยุทธ์ และโอกาสทางธุรกิจระหว่างประเทศ"
              : "We welcome selected conversations regarding investments, strategic collaborations and international business opportunities."}
          </p>
        </section>

        {/* Bento Grid Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Contact Form (Spans 8 cols) */}
          <div className="md:col-span-8 p-8 md:p-12 rounded border border-secondary-container bg-surface-container-lowest shadow-sm reveal">
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center animate-fadeIn">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display-md text-3xl text-primary mb-2">
                  {isTH ? "ส่งข้อความเรียบร้อยแล้ว" : "Inquiry Dispatched"}
                </h3>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mb-8 leading-relaxed">
                  {isTH
                    ? "ขอบคุณสำหรับการติดต่อ ข้อความและข้อมูลของท่านถูกส่งต่อไปยังสำนักงานใหญ่ที่ Freienbach SZ ประเทศสวิตเซอร์แลนด์ เรียบร้อยแล้ว เราจะตอบกลับอย่างเป็นส่วนตัวโดยเร็วที่สุด"
                    : "Thank you for reaching out. Your inquiry has been securely routed to our desk in Freienbach SZ. We will respond confidentially shortly."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded scale-100 active:scale-95 transition-transform"
                >
                  {isTH ? "ส่งข้อความใหม่" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-stack-lg">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="flex flex-col gap-stack-sm">
                    <label className="font-label-md text-label-md text-secondary">
                      {isTH ? "ชื่อ (First Name) *" : "First Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-on-surface font-body-md placeholder:text-secondary/50"
                    />
                  </div>
                  <div className="flex flex-col gap-stack-sm">
                    <label className="font-label-md text-label-md text-secondary">
                      {isTH ? "นามสกุล / องค์กร (Last Name / Entity) *" : "Last Name *"}
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-on-surface font-body-md placeholder:text-secondary/50"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-secondary">
                    {isTH ? "อีเมลติดต่อ (Email Address) *" : "Email Address *"}
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john.doe@example.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-on-surface font-body-md placeholder:text-secondary/50"
                  />
                </div>

                {/* Area of Interest with Pill Radios */}
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-secondary mb-2">
                    {isTH ? "ขอบเขตที่สนใจ (Area of Interest)" : "Area of Interest"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interestOptions.map((opt) => (
                      <label key={opt.id} className="cursor-pointer">
                        <input
                          type="radio"
                          name="interest"
                          value={opt.id}
                          checked={formData.interest === opt.id}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="peer sr-only"
                        />
                        <div className="px-4 py-2 rounded-full border border-outline-variant text-secondary font-label-md text-xs sm:text-label-md peer-checked:bg-primary peer-checked:text-on-primary peer-checked:border-primary transition-colors duration-200">
                          {opt.label}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-stack-sm">
                  <label className="font-label-md text-label-md text-secondary">
                    {isTH ? "ข้อความ / รายละเอียด (Message) *" : "Message *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isTH
                        ? "ระบุรายละเอียดเกี่ยวกับการลงทุน ความร่วมมือ หรือโครงการที่ท่านสนใจ..."
                        : "Briefly describe the nature of your inquiry..."
                    }
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-on-surface font-body-md resize-none h-32 placeholder:text-secondary/50"
                  ></textarea>
                </div>

                {/* Swiss Privacy Note & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex items-center gap-2 text-xs text-secondary font-body-md">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>
                      {isTH
                        ? "ข้อมูลทั้งหมดได้รับการเก็บรักษาเป็นความลับตามมาตรฐาน Swiss Fiduciary"
                        : "All communications are treated with strict Swiss fiduciary confidentiality."}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-on-primary font-label-md text-label-md px-8 py-3 rounded scale-100 active:scale-95 transition-transform hover:bg-on-primary-fixed-variant shadow-sm"
                  >
                    {isTH ? "ส่งข้อความ (Submit Inquiry)" : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info (Spans 4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-gutter reveal">
            {/* Headquarters */}
            <div className="p-8 rounded border border-secondary-container bg-surface-container-lowest shadow-sm flex flex-col gap-stack-md luxury-card">
              <h3 className="font-display-md text-headline-lg-mobile md:text-headline-lg text-primary">
                {isTH ? "สำนักงานใหญ่ (Headquarters)" : "Headquarters"}
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Unterdorfstrasse 12,<br />
                  8808 Freienbach SZ<br />
                  Switzerland
                </p>
              </div>
              <div className="pt-2 border-t border-secondary-container text-xs text-secondary font-label-md">
                Subholding of ActivaSwiss AG
              </div>
            </div>

            {/* Direct Inquiry */}
            <div className="p-8 rounded border border-secondary-container bg-surface-container-lowest shadow-sm flex flex-col gap-stack-md luxury-card">
              <h3 className="font-display-md text-headline-lg-mobile md:text-headline-lg text-primary">
                {isTH ? "ติดต่อโดยตรง (Direct Inquiry)" : "Direct Inquiry"}
              </h3>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors font-medium break-all"
                  href="mailto:leimannglobalcapital@info.ch"
                >
                  leimannglobalcapital@info.ch
                </a>
              </div>
            </div>

            {/* Map visual representation */}
            <div className="rounded overflow-hidden h-48 relative border border-secondary-container bg-surface-container-low shadow-sm img-zoom-container">
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85"
                alt="Freienbach SZ Switzerland Map and Surroundings"
                className="w-full h-full object-cover img-zoom opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/90 via-surface-container-low/40 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 text-primary font-label-md text-xs font-semibold">
                  <Map className="w-4 h-4" />
                  <span>Freienbach SZ • Canton of Schwyz, Switzerland</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

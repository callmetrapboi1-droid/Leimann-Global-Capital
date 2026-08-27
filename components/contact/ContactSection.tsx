"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Building,
  Send,
  Globe,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactSection() {
  const { t, language } = useLanguage();
  const isTH = language === "TH";

  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    subject: "Strategic Collaborations",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const areasOfInterest = [
    { title: "Investment Opportunities", th: "โอกาสด้านการลงทุน" },
    { title: "Strategic Collaborations", th: "ความร่วมมือเชิงกลยุทธ์" },
    { title: "International Business Development", th: "การพัฒนาธุรกิจระหว่างประเทศ" },
    { title: "Technology & Innovation", th: "เทคโนโลยีและนวัตกรรม" },
    { title: "Cross-Border Partnerships", th: "พันธมิตรข้ามพรมแดน" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-surface text-on-surface overflow-hidden">
      {/* Top Banner / Breadcrumb */}
      <div className="py-12 border-b border-secondary-container bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-desktop max-md:px-margin-mobile">
          <div className="flex items-center gap-2 text-xs font-label-md text-secondary uppercase tracking-widest mb-2 animate-fadeIn">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-primary font-bold">Contact</span>
          </div>
          <h1 className="font-display-lg text-display-lg max-md:text-headline-lg-mobile text-primary font-normal animate-fadeIn">
            {isTH ? "ติดต่อเรา (Contact)" : "Let's Connect"}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-2 animate-fadeIn">
            {isTH
              ? "ยินดีต้อนรับการติดต่อสำหรับการลงทุน ความร่วมมือเชิงกลยุทธ์ และโอกาสทางธุรกิจระหว่างประเทศ"
              : "We welcome conversations with select parties regarding investments, strategic collaborations, and international business opportunities."}
          </p>
        </div>
      </div>

      <div className="py-section-gap px-margin-desktop max-md:px-margin-mobile max-w-container-max mx-auto space-y-16">
        {/* ① SECTION 1: Hero & Purpose Intro */}
        <section id="contact-intro" className="scroll-mt-24">
          <div className="max-w-3xl space-y-4 reveal">
            <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold">
              01 • {isTH ? "การเริ่มต้นการสื่อสาร" : "DIRECT BILATERAL DIALOGUE"}
            </span>
            <h2 className="font-display-md text-3xl sm:text-4xl text-primary">
              {isTH ? "มาร่วมเชื่อมต่อกัน — Let's Connect" : "Let's Connect"}
            </h2>
            <div className="w-12 h-px bg-platinum mb-4"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {isTH
                ? "เรายินดีพูดคุยกับผู้ที่ได้รับการคัดเลือกเกี่ยวกับการลงทุน (Investments) ความร่วมมือเชิงกลยุทธ์ (Strategic Collaborations) และโอกาสทางธุรกิจระหว่างประเทศ (International Business Opportunities)"
                : "We welcome conversations with select parties regarding investments, strategic collaborations, and international business initiatives. For general, institutional, and strategic inquiries, please connect with us."}
            </p>
          </div>
        </section>

        {/* Main Grid: Company Info, Email, Areas of Interest & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left Column: ② Company Information + ③ Business & Strategic Opportunities + ④ Areas of Interest */}
          <div className="lg:col-span-5 space-y-6 reveal">
            {/* ② Company Information Card with Swiss Freienbach visual header */}
            <div className="border border-secondary-container rounded bg-surface-container-lowest shadow-xs overflow-hidden luxury-card img-zoom-container">
              <div className="relative h-28 w-full overflow-hidden bg-surface-container-low">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=85"
                  alt="Freienbach SZ Switzerland Financial Center"
                  className="w-full h-full object-cover img-zoom opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
              </div>

              <div className="p-8 space-y-4">
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  02 • {isTH ? "ข้อมูลบริษัท" : "COMPANY INFORMATION"}
                </span>

                <h3 className="font-display-md text-2xl text-primary font-bold">
                  Leimann Global Capital GmbH
                </h3>

                <div className="space-y-3 font-body-md text-sm text-on-surface-variant pt-2">
                  <div>
                    <span className="font-label-md text-xs uppercase tracking-wider text-secondary block mb-1 font-semibold">
                      Jurisdiction &amp; Domicile:
                    </span>
                    <p className="font-medium text-on-surface">Switzerland (สวิตเซอร์แลนด์)</p>
                  </div>

                  <div>
                    <span className="font-label-md text-xs uppercase tracking-wider text-secondary block mb-1 font-semibold">
                      Registered Office Address:
                    </span>
                    <p className="flex items-start gap-2.5 text-on-surface leading-relaxed">
                      <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>Unterdorfstrasse 12, 8808 Freienbach SZ, Switzerland</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-secondary-container text-xs text-secondary">
                    A subholding of ActivaSwiss AG Family Office
                  </div>
                </div>
              </div>
            </div>

            {/* ③ Business & Strategic Opportunities Email */}
            <div className="p-8 border border-secondary-container rounded bg-surface-container-low shadow-xs space-y-3 luxury-card">
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                03 • {isTH ? "โอกาสทางธุรกิจและเชิงกลยุทธ์" : "BUSINESS & STRATEGIC OPPORTUNITIES"}
              </span>

              <p className="font-body-md text-xs sm:text-sm text-secondary">
                {isTH ? "อีเมลติดต่อโดยตรง:" : "Direct institutional inquiries:"}
              </p>

              <a
                href="mailto:leimannglobalcapital@info.ch"
                className="flex items-center gap-2.5 text-primary font-label-md text-base sm:text-lg font-bold hover:underline transition-colors break-all"
              >
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>leimannglobalcapital@info.ch</span>
              </a>
            </div>

            {/* ④ Areas of Interest */}
            <div className="p-8 border border-secondary-container rounded bg-surface-container-lowest shadow-xs space-y-4 luxury-card">
              <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                04 • {isTH ? "ขอบเขตที่เราสนใจ" : "AREAS OF INTEREST"}
              </span>

              <ul className="space-y-2.5 font-body-md text-sm text-on-surface-variant">
                {areasOfInterest.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span className="font-medium text-on-surface">{item.title}</span>
                    {isTH && <span className="text-xs text-secondary">({item.th})</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: ⑤ Contact Form */}
          <div className="lg:col-span-7 reveal">
            <div className="p-8 sm:p-12 border border-secondary-container rounded bg-surface-container-lowest shadow-sm space-y-6 luxury-card">
              <div>
                <span className="font-label-md text-xs uppercase tracking-widest text-secondary font-semibold block">
                  05 • {isTH ? "แบบฟอร์มติดต่อ" : "CONFIDENTIAL CONTACT FORM"}
                </span>
                <h3 className="font-display-md text-2xl sm:text-3xl text-primary mt-1">
                  {isTH ? "ส่งข้อความถึงเรา" : "Send Us a Message"}
                </h3>
                <div className="w-12 h-px bg-platinum mt-2"></div>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-fadeIn">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-display-md text-2xl text-primary mb-2">
                    {isTH ? "ส่งข้อความเรียบร้อยแล้ว" : "Inquiry Dispatched"}
                  </h4>
                  <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                    {isTH
                      ? "ขอบคุณสำหรับการติดต่อ ข้อความและข้อมูลของท่านถูกส่งต่อไปยังทีมงานของ Leimann Global Capital เรียบร้อยแล้ว เราจะตอบกลับอย่างเป็นส่วนตัวโดยเร็วที่สุด"
                      : "Thank you for reaching out. Your inquiry has been securely routed to our desk in Freienbach SZ. We will respond confidentially shortly."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary text-on-primary font-label-md px-6 py-3 rounded text-xs uppercase tracking-wider hover:bg-on-primary-fixed-variant transition-colors"
                  >
                    {isTH ? "ส่งข้อความใหม่" : "Send Another Message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-xs uppercase tracking-wider text-tertiary mb-1.5 font-semibold">
                        Name (ชื่อ-นามสกุล) *
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Dr. Alexander Weber"
                        className="w-full bg-surface border border-secondary-container px-3.5 py-3 text-sm rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-label-md text-xs uppercase tracking-wider text-tertiary mb-1.5 font-semibold">
                        Company (บริษัท / สถาบัน) *
                      </label>
                      <input
                        required
                        type="text"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder="e.g. Weber Family Office / Institution"
                        className="w-full bg-surface border border-secondary-container px-3.5 py-3 text-sm rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-xs uppercase tracking-wider text-tertiary mb-1.5 font-semibold">
                        Email (อีเมลติดต่อ) *
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="principal@institution.ch"
                        className="w-full bg-surface border border-secondary-container px-3.5 py-3 text-sm rounded focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-label-md text-xs uppercase tracking-wider text-tertiary mb-1.5 font-semibold">
                        Subject / Area of Interest (หัวข้อ)
                      </label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full bg-surface border border-secondary-container px-3.5 py-3 text-sm rounded focus:outline-none focus:border-primary transition-colors"
                      >
                        {areasOfInterest.map((item, idx) => (
                          <option key={idx} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-label-md text-xs uppercase tracking-wider text-tertiary mb-1.5 font-semibold">
                      Message (ข้อความ) *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Please specify strategic context, investment focus, or cross-border venture details..."
                      className="w-full bg-surface border border-secondary-container p-3.5 text-sm rounded focus:outline-none focus:border-primary transition-colors"
                    ></textarea>
                  </div>

                  {/* NDA / Privacy assurance */}
                  <div className="text-xs text-secondary flex items-center gap-2 pt-1">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span>
                      {isTH
                        ? "ข้อมูลและการสื่อสารทั้งหมดจะได้รับการเก็บรักษาเป็นความลับตามมาตรฐานการรักษาความลับสวิส"
                        : "All communications are treated with strict fiduciary confidentiality and Swiss privacy standards."}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-on-primary-fixed-variant text-on-primary py-3.5 rounded font-label-md text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 font-semibold group"
                    >
                      <span>{isTH ? "ส่งข้อความติดต่อ (Submit Message)" : "Submit Message"}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import AuditForm from "./AuditForm";

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("audit-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-6 sm:pt-10 pb-12 lg:pb-16">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy, and Button */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Performance Marketing That <br />
              <span className="text-[#1541e0]">Agency.</span>
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Stop wasting ad budget on clicks that don't convert. Ayatiworks builds high-converting, ROI-focused performance marketing campaigns engineered to scale.
            </p>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              From hyper-targeted ad creative to full-funnel tracking and landing page optimization, we turn every marketing rupee into profitable, predictable growth.
            </p>

            <div className="pt-1">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 bg-[#1541e0] hover:bg-[#0f33b8] text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 sm:px-7 rounded-xl transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 cursor-pointer group active:scale-[0.98]"
              >
                <span>SCHEDULE ACCOUNT GROWTH AUDIT</span>
                <span className="w-5 h-5 rounded bg-[#ea580c] text-white flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Royal Blue Form Box */}
          <div className="lg:col-span-6">
            <AuditForm id="audit-form" />
          </div>
        </div>
      </div>
    </section>
  );
}

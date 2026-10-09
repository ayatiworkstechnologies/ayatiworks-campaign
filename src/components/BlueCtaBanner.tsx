"use client";

import React from "react";

export default function BlueCtaBanner() {
  const scrollToForm = () => {
    const el = document.getElementById("audit-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#1541e0] py-14 sm:py-18 text-white relative overflow-hidden">
      {/* Decorative radial glows with breathing animation */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/40 rounded-full blur-3xl pointer-events-none animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-blue-200 block">
              READY TO GET BETTER RESULTS FROM YOUR ADS?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-white">
              Stop Wasting Budget. <br className="hidden sm:inline" />
              Start Unlocking Better Results.
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xl font-normal">
              Partner with a performance marketing team focused on maximizing your return on ad spend and scaling qualified revenue growth.
            </p>
          </div>

          {/* Right Action Button with Magnetic Hover Animation */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end space-y-2">
            <button
              type="button"
              onClick={scrollToForm}
              className="bg-white hover:bg-slate-50 text-[#1541e0] font-black text-xs sm:text-sm tracking-wider uppercase py-3.5 px-6 sm:px-7 rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02] flex items-center gap-2.5 group cursor-pointer active:scale-[0.99]"
            >
              <span className="text-left sm:text-center">GET YOUR FREE 30-MIN AD ACCOUNT GROWTH AUDIT</span>
              <span className="w-5 h-5 rounded bg-[#ea580c] text-white flex items-center justify-center text-xs font-bold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shrink-0 shadow-xs">
                ↗
              </span>
            </button>
            <span className="text-[11px] text-blue-200/80 font-normal">
              No commitment required. 100% free audit.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

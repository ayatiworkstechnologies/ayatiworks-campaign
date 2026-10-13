"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function DashboardShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Heading reveals upward
      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
        );
      }

      // Description fades into position
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.45"
        );
      }

      // 3 Center Pills staggered fade-up
      if (chipsRef.current) {
        const chips = chipsRef.current.children;
        tl.fromTo(
          chips,
          { y: 16, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 },
          "-=0.4"
        );
      }

      // Dashboard cards entrance
      if (leftCardRef.current && rightCardRef.current) {
        tl.fromTo(
          [leftCardRef.current, rightCardRef.current],
          { scale: 0.94, y: 24, opacity: 0 },
          { scale: 1, y: 0, opacity: 1, duration: 0.85, stagger: 0.15, ease: "power2.out" },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-14 lg:py-20 border-b border-slate-100"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-100/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Decorative Dotted Arc connecting left and right */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-35">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M 220 340 C 440 450, 980 450, 1220 320"
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* ============================================================== */}
          {/* LEFT: Performance Trend Dashboard Card                         */}
          {/* ============================================================== */}
          <div
            ref={leftCardRef}
            className="w-full lg:w-[300px] xl:w-[350px] 2xl:w-[380px] shrink-0 flex justify-center lg:justify-start relative will-change-transform will-change-opacity order-2 lg:order-1"
          >
            {/* Background vertical bar chart behind card */}
            <div className="absolute -top-5 left-4 flex items-end gap-1.5 opacity-30 pointer-events-none -z-10">
              <div className="w-2.5 h-10 bg-blue-300 rounded-t-sm" />
              <div className="w-2.5 h-16 bg-blue-400 rounded-t-sm" />
              <div className="w-2.5 h-12 bg-blue-300 rounded-t-sm" />
              <div className="w-2.5 h-20 bg-blue-500 rounded-t-sm" />
            </div>

            {/* Angled Card (Flat on mobile, 3D angled on desktop) */}
            <div
              className="w-full max-w-sm bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-500/10 text-left transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/15 lg:[transform:perspective(1200px)_rotateY(6deg)_rotateX(2deg)] lg:[transform-style:preserve-3d]"
            >
              {/* Top Stats Row (3 Metrics) */}
              <div className="grid grid-cols-3 gap-2 pb-3.5 border-b border-slate-100">
                {/* Metric 1: Total Spend */}
                <div className="space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium block">
                    Total Spend
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    12,430
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-600 block">
                    +14%
                  </span>
                </div>

                {/* Metric 2: Conversions */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[9px]">
                      👥
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      Conversions
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    1,284
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-0.5">
                    <span>↑</span>
                    <span>+22%</span>
                  </span>
                </div>

                {/* Metric 3: CPA */}
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-[#1541e0] flex items-center justify-center text-[9px]">
                      🎯
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                      CPA
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 block">
                    ₹933
                  </span>
                  <span className="text-[9px] font-semibold text-emerald-600 flex items-center gap-0.5">
                    <span>↓</span>
                    <span>-18%</span>
                  </span>
                </div>
              </div>

              {/* Chart Header */}
              <div className="flex items-center justify-between pt-3 pb-1">
                <span className="text-[11px] font-semibold text-slate-700">
                  Performance Trend
                </span>
                <span className="text-[9px] text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200 cursor-pointer shadow-xs">
                  Last 30 days ▾
                </span>
              </div>

              {/* Double Wave SVG Chart (Blue & Mint Curves) */}
              <div className="h-24 w-full pt-1.5 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 240 70" fill="none">
                  <defs>
                    <linearGradient id="waveBlueGradExact" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1541e0" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#1541e0" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="waveMintGradExact" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Mint Wave Area & Line (Bottom) */}
                  <path
                    d="M 0 54 Q 35 48, 70 52 T 140 38 T 195 30 T 240 18 L 240 70 L 0 70 Z"
                    fill="url(#waveMintGradExact)"
                  />
                  <path
                    d="M 0 54 Q 35 48, 70 52 T 140 38 T 195 30 T 240 18"
                    stroke="#10b981"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />

                  {/* Blue Wave Area & Line (Top) */}
                  <path
                    d="M 0 46 Q 30 32, 60 40 T 130 20 T 185 14 T 240 4 L 240 70 L 0 70 Z"
                    fill="url(#waveBlueGradExact)"
                  />
                  <path
                    d="M 0 46 Q 30 32, 60 40 T 130 20 T 185 14 T 240 4"
                    stroke="#1541e0"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />

                  {/* Peak Data Nodes */}
                  <circle cx="60" cy="40" r="3.5" fill="#1541e0" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="130" cy="20" r="3.5" fill="#1541e0" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="185" cy="14" r="3.5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="240" cy="4" r="4" fill="#1541e0" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* CENTER: Headline, Subtitle, and 3 Pills                        */}
          {/* ============================================================== */}
          <div className="flex-1 max-w-2xl xl:max-w-3xl text-center px-2 py-4 order-1 lg:order-2">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
            >
              Performance Marketing That <br />
              <span className="text-[#1541e0] font-black">Pays for Itself.</span>
            </h2>

            <p
              ref={descRef}
              className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
            >
              Google, Meta and programmatic advertising campaigns optimised to lower acquisition costs, improve return on ad spend and generate qualified leads that contribute to real business revenue.
            </p>

            {/* The 3 Horizontal Pills from Reference */}
            <div
              ref={chipsRef}
              className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 will-change-transform will-change-opacity"
            >
              {/* Pill 1: Data-Driven Campaigns */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-[11px] sm:text-xs md:text-[13px] font-semibold border border-blue-200/70 shadow-xs transition-all duration-200 hover:bg-[#d0dcff] hover:scale-[1.02] cursor-default whitespace-normal sm:whitespace-nowrap">
                {/* 3 Stacked Layers Icon */}
                <svg className="w-4 h-4 text-[#1541e0] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
                <span>Data-Driven Campaigns</span>
              </div>

              {/* Pill 2: Measurable Business Outcomes */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-[11px] sm:text-xs md:text-[13px] font-semibold border border-blue-200/70 shadow-xs transition-all duration-200 hover:bg-[#d0dcff] hover:scale-[1.02] cursor-default whitespace-normal sm:whitespace-nowrap">
                {/* Concentric Bullseye Target Icon */}
                <svg className="w-4 h-4 text-[#1541e0] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
                <span>Measurable Business Outcomes</span>
              </div>

              {/* Pill 3: Google Ads Certified Agency */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-[11px] sm:text-xs md:text-[13px] font-semibold border border-blue-200/70 shadow-xs transition-all duration-200 hover:bg-[#d0dcff] hover:scale-[1.02] cursor-default whitespace-normal sm:whitespace-nowrap">
                {/* Badge Checkmark Icon */}
                <svg className="w-4 h-4 text-[#1541e0] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span>Google Ads Certified Agency</span>
              </div>
            </div>
          </div>

          {/* ============================================================== */}
          {/* RIGHT: Audit Coverage Card                                     */}
          {/* ============================================================== */}
          <div
            ref={rightCardRef}
            className="w-full lg:w-[260px] xl:w-[300px] 2xl:w-[320px] shrink-0 flex justify-center lg:justify-end relative will-change-transform will-change-opacity order-3"
          >
            {/* Background Donut Chart */}
            <div className="absolute -top-8 -left-5 w-20 h-20 pointer-events-none -z-10 opacity-70">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-45">
                <circle cx="50" cy="50" r="38" stroke="#dbeafe" strokeWidth="14" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="#a7f3d0" strokeWidth="14" strokeDasharray="60 180" fill="none" />
                <circle cx="50" cy="50" r="38" stroke="#60a5fa" strokeWidth="14" strokeDasharray="40 200" strokeDashoffset="-70" fill="none" />
              </svg>
            </div>

            {/* Background Checklist preview card */}
            <div className="absolute -bottom-3 -left-6 w-18 bg-white/80 border border-slate-100 rounded-lg p-1.5 shadow-sm space-y-1.5 -z-10 opacity-60">
              <div className="flex items-center gap-1">
                <span className="text-[8px] text-emerald-500 font-bold">✓</span>
                <div className="h-1 bg-slate-200 rounded-full w-8" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[8px] text-emerald-500 font-bold">✓</span>
                <div className="h-1 bg-slate-200 rounded-full w-6" />
              </div>
            </div>

            {/* Audit Coverage Card */}
            <div
              className="w-full max-w-xs bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-500/10 text-left transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/15"
              style={{
                transform: "perspective(1200px) rotateY(-6deg) rotateX(2deg)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Header: "Audit Coverage" + Green Pill Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <span className="text-xs sm:text-[13px] font-extrabold text-slate-900 tracking-tight">
                  Audit Coverage
                </span>
                <span className="h-2 w-12 rounded-full bg-[#10b981] inline-block" />
              </div>

              {/* 5 Audit Coverage Items */}
              <div className="pt-3 space-y-2.5 sm:space-y-3">
                {/* Item 1: Campaign Structure */}
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1541e0] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="3" width="6" height="4" rx="1" />
                      <rect x="3" y="17" width="6" height="4" rx="1" />
                      <rect x="15" y="17" width="6" height="4" rx="1" />
                      <path d="M12 7v4m0 0H6v6m6-6h6v6" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-800 block leading-tight">
                      Campaign Structure
                    </span>
                    <div className="h-1.5 w-14 bg-slate-100 rounded-full mt-1" />
                  </div>
                </div>

                {/* Item 2: Targeting & Audiences */}
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-800 block leading-tight">
                      Targeting & Audiences
                    </span>
                    <div className="h-1.5 w-14 bg-slate-100 rounded-full mt-1" />
                  </div>
                </div>

                {/* Item 3: Creatives & Ad Copy */}
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1541e0] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-800 block leading-tight">
                      Creatives & Ad Copy
                    </span>
                    <div className="h-1.5 w-14 bg-slate-100 rounded-full mt-1" />
                  </div>
                </div>

                {/* Item 4: Tracking & Attribution */}
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100/60 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-800 block leading-tight">
                      Tracking & Attribution
                    </span>
                    <div className="h-1.5 w-14 bg-slate-100 rounded-full mt-1" />
                  </div>
                </div>

                {/* Item 5: Landing Pages */}
                <div className="flex items-center gap-2.5 group cursor-default">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1541e0] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-800 block leading-tight">
                      Landing Pages
                    </span>
                    <div className="h-1.5 w-14 bg-slate-100 rounded-full mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

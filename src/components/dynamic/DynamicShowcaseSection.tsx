"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiTrendingUp, FiCheckCircle, FiShoppingBag, FiLayers, FiTarget, FiAward } from "react-icons/fi";
import { CampaignConfig } from "@/data/campaigns";

interface DynamicShowcaseSectionProps {
  campaign: CampaignConfig;
}

export default function DynamicShowcaseSection({ campaign }: DynamicShowcaseSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const showcaseWrapRef = useRef<HTMLDivElement>(null);

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

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.45"
        );
      }

      if (chipsRef.current) {
        const chips = chipsRef.current.children;
        tl.fromTo(
          chips,
          { y: 16, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.1 },
          "-=0.4"
        );
      }

      if (showcaseWrapRef.current) {
        tl.fromTo(
          showcaseWrapRef.current,
          { y: 35, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderIcon = (type: string) => {
    switch (type) {
      case "bolt":
        return <HiOutlineLightningBolt className="w-4 h-4 text-[#1541e0] shrink-0" />;
      case "trending":
        return <FiTrendingUp className="w-4 h-4 text-[#1541e0] shrink-0" />;
      case "check":
        return <FiCheckCircle className="w-4 h-4 text-[#1541e0] shrink-0" />;
      default:
        return <FiLayers className="w-4 h-4 text-[#1541e0] shrink-0" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white py-14 lg:py-20 border-b border-slate-100"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle arc dotted line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" preserveAspectRatio="none">
          <path
            d="M 160 380 C 440 480, 980 480, 1280 340"
            stroke="#93c5fd"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
        >
          {campaign.showcase.badgeTitle} <br />
          <span className="text-[#1541e0]">{campaign.showcase.badgeHighlight || "Agency."}</span>
        </h2>

        {/* Subtitle */}
        <p
          ref={descRef}
          className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
        >
          {campaign.showcase.description}
        </p>

        {/* Dynamic Pills */}
        <div
          ref={chipsRef}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 will-change-transform will-change-opacity"
        >
          {campaign.showcase.pills.map((pill, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70 shadow-2xs hover:bg-[#d0dcff] hover:scale-[1.02] transition-all cursor-default"
            >
              {renderIcon(pill.icon)}
              <span>{pill.label}</span>
            </div>
          ))}
        </div>

        {/* Visual Showcase Card */}
        <div
          ref={showcaseWrapRef}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto relative will-change-transform will-change-opacity"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md p-2 sm:p-4 border border-slate-200/80 shadow-2xl shadow-blue-500/10">
            
            {/* Top Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pb-3 px-2 text-left">
              {campaign.showcase.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                  <span className="text-[10px] text-slate-400 block font-medium">{metric.label}</span>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">{metric.value}</span>
                  <span className="text-[9px] font-semibold text-emerald-600">{metric.sub}</span>
                </div>
              ))}
            </div>

            {/* Showcase Visual Area */}
            {campaign.showcase.imageSrc ? (
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full border border-slate-100 shadow-inner group">
                <Image
                  src={campaign.showcase.imageSrc}
                  alt={campaign.showcase.imageAlt || campaign.metaTitle || "Campaign Showcase"}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />

                {campaign.showcase.floatingBadgeTop && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 animate-float-slow">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-bold text-slate-800">
                      {campaign.showcase.floatingBadgeTop}
                    </span>
                  </div>
                )}

                {campaign.showcase.floatingBadgeBottom && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2.5 animate-float-reverse">
                    <div className="w-7 h-7 rounded-lg bg-[#1541e0] text-white flex items-center justify-center">
                      <FiShoppingBag className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[9px] text-slate-400 block leading-tight font-medium">
                        {campaign.showcase.floatingBadgeBottom.title}
                      </span>
                      <span className="text-xs font-black text-slate-900 block leading-tight">
                        {campaign.showcase.floatingBadgeBottom.subtitle}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Performance Interactive Graphic View */
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-10 text-white min-h-[300px] flex flex-col justify-between">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Live Multi-Channel Attribution Engine
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-300 bg-blue-900/40 px-3 py-1 rounded-full border border-blue-700/50">
                    Google &amp; Meta Verified
                  </span>
                </div>

                <div className="py-6">
                  {/* Wave Chart */}
                  <svg className="w-full h-32 overflow-visible" viewBox="0 0 600 120" fill="none">
                    <defs>
                      <linearGradient id="dynWaveGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#1541e0" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 90 Q 75 70, 150 78 T 300 45 T 450 30 T 600 12 L 600 120 L 0 120 Z"
                      fill="url(#dynWaveGrad)"
                    />
                    <path
                      d="M 0 90 Q 75 70, 150 78 T 300 45 T 450 30 T 600 12"
                      stroke="#60a5fa"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="150" cy="78" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="300" cy="45" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="450" cy="30" r="4" fill="#10b981" stroke="#ffffff" strokeWidth="2" />
                    <circle cx="600" cy="12" r="5" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800">
                  <span>Audit Coverage: 100% Verified</span>
                  <span className="text-emerald-400 font-bold">ROAS Outperformance: +32.4% Average</span>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

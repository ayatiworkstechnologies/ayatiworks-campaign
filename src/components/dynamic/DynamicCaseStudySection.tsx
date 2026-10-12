"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimatedCounter from "../animations/AnimatedCounter";
import { CampaignConfig } from "@/data/campaigns";

interface DynamicCaseStudySectionProps {
  campaign: CampaignConfig;
}

export default function DynamicCaseStudySection({ campaign }: DynamicCaseStudySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const mainDividerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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

      if (tagRef.current) {
        tl.fromTo(tagRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
      }
      if (headlineRef.current) {
        tl.fromTo(headlineRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.35");
      }
      if (descRef.current) {
        tl.fromTo(descRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.4");
      }
      if (mainDividerRef.current) {
        tl.fromTo(
          mainDividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.8, transformOrigin: "left center", ease: "power2.out" },
          "-=0.3"
        );
      }
      if (leftColRef.current && rightColRef.current) {
        tl.fromTo(
          [leftColRef.current, rightColRef.current],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            {campaign.caseStudy.tag}
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
          >
            {campaign.caseStudy.headlinePrimary} <br />
            <span className="text-[#1541e0]">{campaign.caseStudy.headlineHighlight}</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
          >
            {campaign.caseStudy.subtitle}
          </p>
        </div>

        {/* Divider */}
        <div
          ref={mainDividerRef}
          className="w-full h-px bg-slate-200/80 my-10 sm:my-14 will-change-transform"
        />

        {/* Two-Column Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Details & Badges */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 space-y-4 will-change-transform will-change-opacity"
          >
            <span className="text-xs sm:text-[13px] font-bold text-[#ea580c] uppercase tracking-wider block">
              {campaign.caseStudy.industryBadge}
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-1">
              {campaign.caseStudy.clientName}
            </h3>

            <h4 className="text-lg sm:text-xl font-bold text-[#1541e0] leading-snug">
              {campaign.caseStudy.caseTitle}
            </h4>

            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal pt-1">
              {campaign.caseStudy.caseDescription}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              {campaign.caseStudy.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Performance Metric Rows */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col justify-between will-change-transform will-change-opacity"
          >
            <div className="divide-y divide-slate-200/80 border-b border-slate-200/80">
              {campaign.caseStudy.stats.map((stat, idx) => (
                <div key={idx} className="py-6 sm:py-7 flex items-center justify-between group">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight flex items-baseline">
                      {stat.prefix && (
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 mr-1">
                          {stat.prefix}
                        </span>
                      )}
                      <AnimatedCounter
                        value={stat.value}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                        duration={1.5}
                        className="font-black"
                      />
                      {stat.suffix && (
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#1541e0] ml-1">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">
                      {stat.label}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#1541e0] group-hover:text-[#1541e0] transition-colors">
                    <HiArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <p className="pt-4 text-[11px] sm:text-xs text-slate-400 italic font-normal">
              {campaign.caseStudy.footnote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

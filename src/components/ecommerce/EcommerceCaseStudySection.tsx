"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimatedCounter from "../animations/AnimatedCounter";

export default function EcommerceCaseStudySection() {
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
            04 &nbsp;|&nbsp; CLIENT RESULTS &amp; IMPACT
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
          >
            Real Brands. Real Campaigns. <br />
            <span className="text-[#1541e0]">Measurable Results.</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
          >
            Explore how we help leading e-commerce brands accelerate revenue, slash acquisition costs, and unlock profitable scale through full-funnel digital execution.
          </p>
        </div>

        {/* Divider */}
        <div
          ref={mainDividerRef}
          className="w-full h-px bg-slate-200/80 my-10 sm:my-14 will-change-transform"
        />

        {/* Two-Column Case Study: Jeep India */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Details & Tags */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 space-y-4 will-change-transform will-change-opacity"
          >
            <span className="text-xs sm:text-[13px] font-bold text-[#ea580c] uppercase tracking-wider block">
              AUTOMOTIVE D2C / MERCHANDISE
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-1">
              Jeep India
            </h3>

            <h4 className="text-lg sm:text-xl font-bold text-[#1541e0] leading-snug">
              Turning Highest Engagement into Merchandise Sales
            </h4>

            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal pt-1">
              Jeep India needed an e-commerce strategy to convert passionate automotive enthusiasts into merchandise buyers. We launched full-funnel campaigns leveraging high-intent search and visually compelling dynamic social ads.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Performance Marketing
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Social Commerce
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Creative
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Conversion Optimization
              </span>
            </div>
          </div>

          {/* Right Column: Performance Metric Rows */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col justify-between will-change-transform will-change-opacity"
          >
            <div className="divide-y divide-slate-200/80 border-b border-slate-200/80">
              
              {/* Stat 1: Revenue / Conversion Value */}
              <div className="py-6 sm:py-7 flex items-center justify-between group">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 mr-1">₹</span>
                    <AnimatedCounter
                      value={240375}
                      duration={1.5}
                      className="font-black"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">
                    Conversion Value / Merchandise Sales
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#1541e0] group-hover:text-[#1541e0] transition-colors">
                  <HiArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Stat 2: Orders Placed */}
              <div className="py-6 sm:py-7 flex items-center justify-between group">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter
                      value={123}
                      duration={1.4}
                      className="font-black"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">
                    Orders Placed
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#1541e0] group-hover:text-[#1541e0] transition-colors">
                  <HiArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Stat 3: Link Clicks */}
              <div className="py-6 sm:py-7 flex items-center justify-between group">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter
                      value={16666}
                      duration={1.6}
                      className="font-black"
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-600 font-medium block mt-1">
                    Link Clicks
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-[#1541e0] group-hover:text-[#1541e0] transition-colors">
                  <HiArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </div>

            {/* Disclaimer Footnote */}
            <p className="pt-4 text-[11px] sm:text-xs text-slate-400 italic font-normal">
              Results achieved within 45 days of campaign launch. Full case study data and attribution verified in client dashboard.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

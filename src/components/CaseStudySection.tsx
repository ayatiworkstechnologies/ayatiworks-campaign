"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimatedCounter from "./animations/AnimatedCounter";

export default function CaseStudySection() {
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
        {/* Section Tag */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            04 &nbsp;|&nbsp; PERFORMANCE IN PRACTICE
          </span>
        </div>

        {/* Heading */}
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
            Performance marketing should be measured by meaningful business results. Explore how Ayatiworks has helped brands strengthen campaign efficiency, visibility and conversion performance.
          </p>
        </div>

        {/* Full-width Divider */}
        <div
          ref={mainDividerRef}
          className="w-full h-px bg-slate-200/80 my-10 sm:my-14 will-change-transform"
        />

        {/* Case Study Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Details & Tags */}
          <div
            ref={leftColRef}
            className="lg:col-span-6 space-y-4 will-change-transform will-change-opacity"
          >
            <span className="text-xs sm:text-[13px] font-bold text-[#ea580c] uppercase tracking-wider block">
              FEATURED CASE STUDY · AUTOMOTIVE
            </span>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight pt-1">
              Volvo Cars India
            </h3>

            <h4 className="text-lg sm:text-xl font-bold text-[#1541e0] leading-snug">
              Driving Greater Efficiency Through Performance Marketing
            </h4>

            <p className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal pt-1">
              Ayatiworks combined Google Ads, Meta advertising, audience targeting and data-led optimisation to strengthen Volvo&apos;s digital performance and lead-generation efforts.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-3">
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Google Ads
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Meta Ads
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white text-slate-700 text-xs font-medium border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors">
                Data-led optimisation
              </span>
            </div>
          </div>

          {/* Right Column: Performance Metric Rows */}
          <div
            ref={rightColRef}
            className="lg:col-span-6 flex flex-col justify-between will-change-transform will-change-opacity"
          >
            <div className="divide-y divide-slate-200/80 border-b border-slate-200/80">
              {/* Stat 1 */}
              <div className="group flex items-center justify-between py-6 transition-colors cursor-default">
                <div className="w-28 sm:w-36 shrink-0">
                  <AnimatedCounter
                    value={7.9}
                    decimals={1}
                    suffix="%"
                    duration={1.2}
                    className="text-4xl sm:text-5xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block"
                  />
                </div>
                <span className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium flex-1 pl-4 sm:pl-6 group-hover:text-slate-900 transition-colors">
                  Google Ads CTR
                </span>
                <span className="text-[#ea580c] pl-4 flex items-center justify-center shrink-0">
                  <HiArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </span>
              </div>

              {/* Stat 2 */}
              <div className="group flex items-center justify-between py-6 transition-colors cursor-default">
                <div className="w-28 sm:w-36 shrink-0">
                  <AnimatedCounter
                    value={23}
                    decimals={0}
                    suffix="%"
                    duration={1.3}
                    className="text-4xl sm:text-5xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block"
                  />
                </div>
                <span className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium flex-1 pl-4 sm:pl-6 group-hover:text-slate-900 transition-colors">
                  Search CPA improvement MoM
                </span>
                <span className="text-[#ea580c] pl-4 flex items-center justify-center shrink-0">
                  <HiArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </span>
              </div>

              {/* Stat 3 */}
              <div className="group flex items-center justify-between py-6 transition-colors cursor-default">
                <div className="w-28 sm:w-36 shrink-0">
                  <AnimatedCounter
                    value={40}
                    decimals={0}
                    suffix="%"
                    duration={1.4}
                    className="text-4xl sm:text-5xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block"
                  />
                </div>
                <span className="text-xs sm:text-sm md:text-[15px] text-slate-600 font-medium flex-1 pl-4 sm:pl-6 group-hover:text-slate-900 transition-colors">
                  Search CPA improvement QoQ
                </span>
                <span className="text-[#ea580c] pl-4 flex items-center justify-center shrink-0">
                  <HiArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </span>
              </div>
            </div>

            {/* Footnote */}
            <p className="mt-8 text-xs text-slate-500 leading-relaxed font-normal">
              Source-reported results. Verification and client approval required before publication. Results are not a guarantee of future performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ThreeStepProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const auditCardRef = useRef<HTMLDivElement>(null);
  const optimizeWrapRef = useRef<HTMLDivElement>(null);
  const scaleWrapRef = useRef<HTMLDivElement>(null);

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

      // Section tag and header
      if (tagRef.current) {
        tl.fromTo(tagRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
      }
      if (headlineRef.current) {
        tl.fromTo(headlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.35");
      }
      if (descRef.current) {
        tl.fromTo(descRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.55 }, "-=0.4");
      }

      // Step 1: AUDIT card fades in from the left
      if (auditCardRef.current) {
        tl.fromTo(
          auditCardRef.current,
          { opacity: 0, x: -35 },
          { opacity: 1, x: 0, duration: 0.75, ease: "power2.out" },
          "-=0.25"
        );
      }

      // Step 2: OPTIMIZE circular image fades and scales into view, label below
      if (optimizeWrapRef.current) {
        tl.fromTo(
          optimizeWrapRef.current,
          { opacity: 0, scale: 0.88, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "back.out(1.2)" },
          "-=0.5"
        );
      }

      // Step 3: SCALE image reveals with short delay, label fades upward
      if (scaleWrapRef.current) {
        tl.fromTo(
          scaleWrapRef.current,
          { opacity: 0, scale: 0.88, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "back.out(1.2)" },
          "-=0.55"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            02 &nbsp;|&nbsp; OUR THREE-STEP PROCESS
          </span>
        </div>

        {/* Section Header Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7">
            <h2
              ref={headlineRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight will-change-transform will-change-opacity"
            >
              From Wasted Spend to Smarter <br className="hidden sm:inline" />
              Growth. <span className="text-[#1541e0]">In Three Steps.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
            >
              Our structured process helps identify inefficiencies, optimize your campaigns, and scale what works for predictable, repeatable ROI.
            </p>
          </div>
        </div>

        {/* The 3 Steps Layout */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Step 1: Detailed White Audit Card (Left) */}
          <div
            ref={auditCardRef}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-blue-500/5 relative overflow-hidden group hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 cursor-default will-change-transform will-change-opacity"
          >
            {/* Top Avatar / Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#1541e0] shadow-sm shrink-0 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/step-audit.jpg"
                  alt="Growth Strategy Auditor"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <span className="text-xs font-black tracking-widest text-[#1541e0] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100/90 shadow-xs">
                AUDIT
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-3 group-hover:text-[#1541e0] transition-colors duration-200">
              Uncover the Opportunities You&apos;re Missing!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-normal">
              We conduct an in-depth audit of your current ad accounts, tracking setup, landing pages, and competitors.
            </p>

            <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-100 group-hover:bg-blue-50/40 transition-colors duration-200">
              <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed flex items-start gap-2">
                <span className="text-[#1541e0] font-bold text-sm shrink-0">✓</span>
                <span>Identify hidden budget waste and actionable improvements to drive higher conversion rates and immediate ROAS.</span>
              </p>
            </div>
          </div>

          {/* Steps 2 & 3: Circular Icons / Characters (Right) */}
          <div className="lg:col-span-6 flex flex-row items-center justify-center gap-8 sm:gap-14">
            {/* Step 2: OPTIMIZE */}
            <div
              ref={optimizeWrapRef}
              className="flex flex-col items-center text-center group cursor-pointer will-change-transform will-change-opacity"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-blue-600/10 group-hover:scale-108 group-hover:border-[#1541e0] group-hover:ring-4 group-hover:ring-blue-400/20 group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/step-optimize.jpg"
                  alt="Campaign Optimization & Conversion Tuning"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <span className="text-sm sm:text-base font-extrabold tracking-wider text-[#1541e0] uppercase block group-hover:scale-105 transition-transform">
                  OPTIMIZE
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-1 max-w-[140px] block leading-tight font-normal">
                  Refine audiences, creative A/B testing & CRO
                </span>
              </div>
            </div>

            {/* Step 3: SCALE */}
            <div
              ref={scaleWrapRef}
              className="flex flex-col items-center text-center group cursor-pointer will-change-transform will-change-opacity"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-blue-600/10 group-hover:scale-108 group-hover:border-[#1541e0] group-hover:ring-4 group-hover:ring-blue-400/20 group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/step-scale.jpg"
                  alt="Campaign Scaling & Exponential Growth"
                  fill
                  sizes="(max-width: 640px) 112px, (max-width: 768px) 144px, 160px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <span className="text-sm sm:text-base font-extrabold tracking-wider text-[#1541e0] uppercase block group-hover:scale-105 transition-transform">
                  SCALE
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 mt-1 max-w-[140px] block leading-tight font-normal">
                  Ramp winning ads while maintaining high ROAS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

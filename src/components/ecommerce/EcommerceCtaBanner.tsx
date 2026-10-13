"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowRight } from "react-icons/hi2";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

export default function EcommerceCtaBanner() {
  const { scrollTo } = useSmoothScroll();
  const bannerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const btnWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      if (contentRef.current) {
        tl.fromTo(
          contentRef.current,
          { opacity: 0, x: -28 },
          { opacity: 1, x: 0, duration: 0.75 }
        );
      }

      if (btnWrapRef.current) {
        tl.fromTo(
          btnWrapRef.current,
          { opacity: 0, scale: 0.92, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.65 },
          "-=0.4"
        );
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    scrollTo("#ecommerce-audit-form", { offset: -30 });
  };

  return (
    <section
      ref={bannerRef}
      className="bg-[#1541e0] text-white py-14 sm:py-20 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Subtext */}
          <div
            ref={contentRef}
            className="lg:col-span-7 space-y-4 text-left will-change-transform will-change-opacity"
          >
            <span className="text-xs sm:text-[13px] font-bold text-blue-200 tracking-wider uppercase block">
              READY TO SCALE YOUR STORE?
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Stop Wasting Budget. <br />
              Start Unlocking Better Results.
            </h2>

            <p className="text-blue-100 text-xs sm:text-sm md:text-base leading-relaxed max-w-xl font-normal pt-1">
              Book a complimentary 30-minute growth audit to identify where your store is leaking revenue and how to scale profitably.
            </p>
          </div>

          {/* Right Column: CTA Button */}
          <div
            ref={btnWrapRef}
            className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center will-change-transform will-change-opacity"
          >
            <button
              type="button"
              onClick={handleClick}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 sm:gap-4 bg-white hover:bg-blue-50 text-[#1541e0] font-black text-xs sm:text-[13px] tracking-wider uppercase pl-4 sm:pl-6 pr-2.5 py-3 sm:py-2.5 rounded-none sm:rounded-xs transition-all duration-200 shadow-xl shadow-blue-900/30 hover:scale-[1.02] cursor-pointer group active:scale-[0.99]"
            >
              <span className="text-left leading-tight">GET YOUR FREE E-COMMERCE AUDIT</span>
              <span className="w-8 h-8 rounded-xs bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
                <HiArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

            <span className="text-[11px] sm:text-xs text-blue-200 font-medium pt-3 block text-left lg:text-right">
              No sales pitches. Just pure data &amp; actionable insights.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiArrowRight } from "react-icons/hi2";
import EcommerceAuditForm from "./EcommerceAuditForm";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

export default function EcommerceHeroSection() {
  const { scrollTo } = useSmoothScroll();
  const heroRef = useRef<HTMLElement>(null);
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);
  const formWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (headlineLine1Ref.current && headlineLine2Ref.current) {
        tl.fromTo(
          [headlineLine1Ref.current, headlineLine2Ref.current],
          { y: "115%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.85, stagger: 0.12 }
        );
      }

      if (paragraph1Ref.current && paragraph2Ref.current) {
        tl.fromTo(
          [paragraph1Ref.current, paragraph2Ref.current],
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.1 },
          "-=0.45"
        );
      }

      if (ctaBtnRef.current) {
        tl.fromTo(
          ctaBtnRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.35"
        );
      }

      if (formWrapRef.current) {
        tl.fromTo(
          formWrapRef.current,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.85, ease: "power2.out" },
          "-=0.65"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    scrollTo("#ecommerce-audit-form", { offset: -30 });
  };

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-white pt-6 sm:pt-10 pb-12 lg:pb-16"
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Copy, and CTA */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              <div className="overflow-hidden">
                <div ref={headlineLine1Ref} className="will-change-transform will-change-opacity">
                  We Scale E-commerce Brands on Revenue,
                </div>
              </div>
              <div className="overflow-hidden">
                <div ref={headlineLine2Ref} className="will-change-transform will-change-opacity text-[#1541e0]">
                  Not Reach.
                </div>
              </div>
            </h1>

            <p
              ref={paragraph1Ref}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed will-change-transform will-change-opacity"
            >
              At Ayatiworks, we eliminate vanity metrics and concentrate on bottom-line results like CAC, ROAS, and repeat purchase rates to unlock sustainable growth for your e-commerce brand.
            </p>

            <p
              ref={paragraph2Ref}
              className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed will-change-transform will-change-opacity"
            >
              Full-funnel execution across paid search, paid social, marketplace optimization, conversion rate optimization, and customer retention.
            </p>

            <div ref={ctaBtnRef} className="pt-2 will-change-transform will-change-opacity">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-between gap-3 sm:gap-4 bg-[#1541e0] hover:bg-[#0f33b8] text-white font-black text-xs sm:text-[13px] tracking-wider uppercase pl-4 sm:pl-6 pr-2.5 py-3 sm:py-2.5 rounded-none sm:rounded-xs transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-2xl hover:scale-[1.01] cursor-pointer group active:scale-[0.99]"
              >
                <span className="text-left leading-tight">GET YOUR FREE E-COMMERCE AUDIT</span>
                <span className="w-8 h-8 rounded-xs bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
                  <HiArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Royal Blue Form Box */}
          <div ref={formWrapRef} className="lg:col-span-6 will-change-transform will-change-opacity">
            <EcommerceAuditForm id="ecommerce-audit-form" />
          </div>
        </div>
      </div>
    </section>
  );
}

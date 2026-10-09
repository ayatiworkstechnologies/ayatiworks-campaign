"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowRight, HiOutlineShieldCheck } from "react-icons/hi2";
import { useSmoothScroll } from "./animations/SmoothScrollProvider";

export default function BlueCtaBanner() {
  const { scrollTo } = useSmoothScroll();
  const bannerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 82%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
        );
      }
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.4",
        );
      }
      if (ctaBtnRef.current) {
        tl.fromTo(
          ctaBtnRef.current,
          { opacity: 0, scale: 0.94, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            ease: "back.out(1.15)",
          },
          "-=0.35",
        );
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  const handleCtaClick = () => {
    scrollTo("#audit-form", { offset: -30 });
  };

  return (
    <section
      ref={bannerRef}
      className="w-full bg-[#1541e0] py-14 sm:py-20 text-white relative overflow-hidden"
    >
      {/* Decorative ambient radial glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/35 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-blue-200 block">
              YOUR NEXT MOVE STARTS HERE.
            </span>
            <h2
              ref={headlineRef}
              className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight leading-[1.18] text-white will-change-transform will-change-opacity"
            >
              Stop Wasting Budget. <br className="hidden sm:inline" />
              Start Unlocking Better Results.
            </h2>
            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-[15px] text-blue-100/90 leading-relaxed max-w-xl font-normal will-change-transform will-change-opacity pt-1"
            >
              Find out what&apos;s limiting your advertising performance and
              where your next growth opportunities could come from.
            </p>
          </div>

          {/* Right Action Button matching reference screenshot with react-icons */}
          <div
            ref={ctaBtnRef}
            className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full will-change-transform will-change-opacity"
          >
            <div className="w-full sm:w-auto flex flex-col items-start">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#1541e0] font-black text-[11px] sm:text-xs md:text-[13px] tracking-wider uppercase pl-4 sm:pl-6 pr-2 sm:pr-3 py-3 rounded-none sm:rounded-xs transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.01] flex items-center justify-between gap-3 sm:gap-4 group cursor-pointer active:scale-[0.99]"
              >
                <span className="text-left whitespace-normal sm:whitespace-nowrap leading-tight">
                  GET YOUR FREE 30-MIN AD ACCOUNT GROWTH AUDIT
                </span>
                <span className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xs bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
                  <HiArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </span>
              </button>

              {/* Shield and Subtext aligned to left of button */}
              <div className="flex items-center gap-1.5 mt-3 text-[11px] sm:text-xs text-blue-100/90 font-normal">
                <HiOutlineShieldCheck className="w-4 h-4 text-blue-100 shrink-0" />
                <span>A fresh perspective. No obligation.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

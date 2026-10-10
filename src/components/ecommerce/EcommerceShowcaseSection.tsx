"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiTrendingUp, FiShoppingBag, FiCreditCard, FiPackage, FiCheckCircle } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

export default function EcommerceShowcaseSection() {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white py-14 lg:py-22 border-b border-slate-100"
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
          E-commerce / D2C Growth <br />
          <span className="text-[#1541e0]">Agency.</span>
        </h2>

        {/* Subtitle */}
        <p
          ref={descRef}
          className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
        >
          We build scalable growth engines for modern D2C &amp; e-commerce brands - combining performance marketing, creative strategy, CRO, and lifecycle retention to turn clicks into profitable, repeatable orders.
        </p>

        {/* 3 Pills */}
        <div
          ref={chipsRef}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 will-change-transform will-change-opacity"
        >
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70 shadow-2xs hover:bg-[#d0dcff] hover:scale-[1.02] transition-all cursor-default">
            <HiOutlineLightningBolt className="w-4 h-4 text-[#1541e0] shrink-0" />
            <span>Performance Marketing</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70 shadow-2xs hover:bg-[#d0dcff] hover:scale-[1.02] transition-all cursor-default">
            <FiTrendingUp className="w-4 h-4 text-[#1541e0] shrink-0" />
            <span>Conversion - Funnel - Retention</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70 shadow-2xs hover:bg-[#d0dcff] hover:scale-[1.02] transition-all cursor-default">
            <FiCheckCircle className="w-4 h-4 text-[#1541e0] shrink-0" />
            <span>Google Ads &amp; Meta Specialists</span>
          </div>
        </div>

        {/* Showcase Composition: Laptop Storefront + Floating Parcel & Card + Mobile App */}
        <div
          ref={showcaseWrapRef}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto relative will-change-transform will-change-opacity"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Laptop Screen Mockup with Storefront & Dashboard (7 Cols) */}
            <div className="lg:col-span-8 relative">
              {/* Laptop Shell */}
              <div className="bg-slate-900 rounded-2xl p-2.5 sm:p-3.5 shadow-2xl shadow-blue-900/20 border border-slate-800 text-left">
                {/* Laptop Camera dot */}
                <div className="flex items-center justify-between pb-2 px-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 mx-auto" />
                  <span className="text-[10px] text-slate-400 font-mono">ayatiworks-store.preview</span>
                </div>

                {/* Laptop Inner Screen */}
                <div className="bg-white rounded-xl p-3.5 sm:p-4 text-slate-900 overflow-hidden border border-slate-100">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-[#1541e0] text-white flex items-center justify-center font-black text-xs">
                        A
                      </span>
                      <span className="text-xs font-bold tracking-tight text-slate-900">
                        VELOCITY <span className="text-[#1541e0]">D2C</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold text-[10px]">
                        ● Live Store • ROAS 4.8x
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-slate-700">
                        <FiShoppingBag className="w-3.5 h-3.5 text-[#1541e0]" /> Cart (3)
                      </span>
                    </div>
                  </div>

                  {/* Top Metric Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-b border-slate-100 text-left">
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Monthly Revenue</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">₹24,85,920</span>
                      <span className="text-[9px] font-semibold text-emerald-600">↑ +38.4% MoM</span>
                    </div>
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Blended ROAS</span>
                      <span className="text-xs sm:text-sm font-extrabold text-[#1541e0]">4.82x</span>
                      <span className="text-[9px] font-semibold text-emerald-600">↑ 1.4x Target</span>
                    </div>
                    <div className="bg-slate-50/80 p-2 rounded-lg border border-slate-100">
                      <span className="text-[10px] text-slate-400 block font-medium">Repeat Orders</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">32.6%</span>
                      <span className="text-[9px] font-semibold text-emerald-600">↑ +9.1% Retention</span>
                    </div>
                  </div>

                  {/* Store Product Grid Mockup */}
                  <div className="pt-3">
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-xs font-bold text-slate-800">Best Performing SKUs</span>
                      <span className="text-[10px] text-blue-600 font-semibold">Real-Time Attribution ➔</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {/* Product 1 */}
                      <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="h-14 bg-gradient-to-tr from-blue-100 via-indigo-50 to-white rounded flex items-center justify-center text-xl">
                          🎧
                        </div>
                        <p className="text-[11px] font-bold text-slate-800 truncate pt-1.5">Pro Noise-Cancelling</p>
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[10px] font-extrabold text-slate-900">₹3,499</span>
                          <span className="text-[9px] text-emerald-600 font-bold">ROAS 5.2x</span>
                        </div>
                      </div>

                      {/* Product 2 */}
                      <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="h-14 bg-gradient-to-tr from-emerald-100 via-teal-50 to-white rounded flex items-center justify-center text-xl">
                          🧴
                        </div>
                        <p className="text-[11px] font-bold text-slate-800 truncate pt-1.5">Glow Hydration Serum</p>
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[10px] font-extrabold text-slate-900">₹1,299</span>
                          <span className="text-[9px] text-emerald-600 font-bold">ROAS 4.6x</span>
                        </div>
                      </div>

                      {/* Product 3 */}
                      <div className="bg-slate-50 rounded-lg p-2 border border-slate-100 hover:border-blue-200 transition-colors">
                        <div className="h-14 bg-gradient-to-tr from-orange-100 via-amber-50 to-white rounded flex items-center justify-center text-xl">
                          👟
                        </div>
                        <p className="text-[11px] font-bold text-slate-800 truncate pt-1.5">Air Kinetic Sneaker</p>
                        <div className="flex items-center justify-between pt-0.5">
                          <span className="text-[10px] font-extrabold text-slate-900">₹4,999</span>
                          <span className="text-[9px] text-emerald-600 font-bold">ROAS 4.9x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base Stand */}
              <div className="w-1/2 h-2.5 bg-slate-300 rounded-b-xl mx-auto shadow-md" />

              {/* Floating 3D Package Badge on bottom left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white border border-slate-200 rounded-xl p-2.5 shadow-xl flex items-center gap-2.5 animate-float-slow">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-lg border border-amber-200">
                  <FiPackage className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] text-slate-400 font-medium block">Fulfilled Orders</span>
                  <span className="text-xs font-black text-slate-900 block">4,280 Orders</span>
                </div>
              </div>
            </div>

            {/* Right: Floating Credit Card + Mobile D2C Store Mockup (4 Cols) */}
            <div className="lg:col-span-4 relative flex flex-col items-center">
              
              {/* Floating Premium Card (Top Right) */}
              <div className="w-full max-w-[240px] bg-gradient-to-tr from-[#1541e0] via-[#2563eb] to-[#3b82f6] text-white p-3.5 rounded-2xl shadow-xl shadow-blue-500/20 text-left border border-blue-400/30 transform -rotate-3 hover:rotate-0 transition-transform duration-300 mb-3 animate-float-reverse">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-[10px] font-bold tracking-wider text-blue-200">AYATI COMMERCE</span>
                  <FiCreditCard className="w-4 h-4 text-white" />
                </div>
                <div className="w-6 h-4 rounded bg-amber-300/80 mb-2 border border-amber-200" />
                <span className="font-mono text-xs tracking-widest text-white/90 block">•••• •••• •••• 8842</span>
                <div className="flex items-center justify-between pt-2 text-[9px] text-blue-100">
                  <span>FAST CHECKOUT</span>
                  <span className="font-bold text-white">ACTIVE</span>
                </div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className="w-full max-w-[260px] bg-slate-900 p-2.5 rounded-[36px] shadow-2xl border-4 border-slate-800 text-left">
                {/* Dynamic Island / Notch */}
                <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto mb-2" />

                {/* Mobile Screen */}
                <div className="bg-white rounded-[26px] p-3 text-slate-900 overflow-hidden border border-slate-100">
                  {/* Sneaker Image Preview */}
                  <div className="h-32 bg-gradient-to-b from-blue-50 via-slate-50 to-white rounded-xl relative flex items-center justify-center overflow-hidden border border-slate-100">
                    <span className="text-5xl transform -rotate-12 filter drop-shadow-md">👟</span>
                    <span className="absolute top-2 left-2 bg-[#ea580c] text-white font-black text-[9px] px-1.5 py-0.5 rounded-md">
                      BESTSELLER
                    </span>
                    <span className="absolute top-2 right-2 bg-white/90 text-slate-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-2xs flex items-center gap-0.5">
                      <BsStars className="w-3 h-3 text-amber-500" /> 4.9
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="pt-2.5">
                    <h3 className="text-xs font-black text-slate-900 leading-tight">
                      HyperPulse Speed Sneaker
                    </h3>
                    <p className="text-[10px] text-slate-500 pt-0.5">Full-stack D2C acquisition offer</p>

                    <div className="flex items-baseline gap-1.5 pt-1">
                      <span className="text-sm font-black text-[#1541e0]">₹2,499</span>
                      <span className="text-[10px] text-slate-400 line-through">₹4,999</span>
                      <span className="text-[9px] text-emerald-600 font-bold bg-emerald-50 px-1 rounded">
                        50% OFF
                      </span>
                    </div>

                    {/* Size Picker */}
                    <div className="flex items-center gap-1 pt-2">
                      <span className="w-6 h-6 rounded bg-[#1541e0] text-white text-[10px] font-bold flex items-center justify-center">
                        7
                      </span>
                      <span className="w-6 h-6 rounded bg-slate-100 text-slate-700 text-[10px] font-medium flex items-center justify-center">
                        8
                      </span>
                      <span className="w-6 h-6 rounded bg-slate-100 text-slate-700 text-[10px] font-medium flex items-center justify-center">
                        9
                      </span>
                      <span className="w-6 h-6 rounded bg-slate-100 text-slate-700 text-[10px] font-medium flex items-center justify-center">
                        10
                      </span>
                    </div>

                    {/* Buy Button */}
                    <button
                      type="button"
                      className="mt-2.5 w-full bg-[#1541e0] text-white py-2 rounded-xl font-black text-[11px] uppercase tracking-wide flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/25 cursor-pointer hover:bg-[#0f33b8]"
                    >
                      <FiShoppingBag className="w-3.5 h-3.5" />
                      <span>Instant 1-Click Buy</span>
                    </button>
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

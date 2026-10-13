"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FiTrendingUp, FiCheckCircle, FiShoppingBag, FiTruck, FiCreditCard } from "react-icons/fi";

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

        {/* Showcase Composition with High-Res 3D E-Commerce Visual matching reference */}
        <div
          ref={showcaseWrapRef}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto relative will-change-transform will-change-opacity"
        >
          {/* Main Visual Display Card */}
          <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md p-2 sm:p-4 border border-slate-200/80 shadow-2xl shadow-blue-500/10">
            
            {/* Top Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pb-3 px-2 text-left">
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Monthly D2C Revenue</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">₹24,85,920</span>
                <span className="text-[9px] font-semibold text-emerald-600">↑ +38.4% MoM</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Blended ROAS</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#1541e0]">4.82x</span>
                <span className="text-[9px] font-semibold text-emerald-600">↑ High Scalability</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Delivered Orders</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">4,280 Orders</span>
                <span className="text-[9px] font-semibold text-emerald-600">↑ 98.6% Fulfillment</span>
              </div>
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] text-slate-400 block font-medium">Repeat Purchase Rate</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900">32.6%</span>
                <span className="text-[9px] font-semibold text-emerald-600">↑ High LTV Cohort</span>
              </div>
            </div>

            {/* Generated High-Resolution 3D Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] w-full border border-slate-100 shadow-inner group">
              <Image
                src="/ecom-showcase-3d.jpg"
                alt="E-commerce and D2C Growth Agency Engine - Ayatiworks"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Badge 1: Top Left */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-800">Omnichannel Scale Engine</span>
              </div>

              {/* Floating Badge 2: Bottom Right */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2.5 animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-[#1541e0] text-white flex items-center justify-center">
                  <FiShoppingBag className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="text-[9px] text-slate-400 block leading-tight font-medium">Order Velocity</span>
                  <span className="text-xs font-black text-slate-900 block leading-tight">143+ Daily Orders</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

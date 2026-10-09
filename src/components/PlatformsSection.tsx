"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";

export default function PlatformsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.fromTo(
          cards,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const platforms = [
    {
      category: "Google Ads",
      title: "Capture Demand When Intent Is Highest",
      description:
        "Reach potential customers actively searching for your products or services through targeted search, display and conversion-focused advertising.",
      renderVisual: () => (
        <div className="relative w-full h-44 sm:h-48 bg-gradient-to-b from-[#eef4ff] to-[#f8faff] border-b border-slate-100 p-5 flex flex-col items-center justify-center gap-3">
          {/* Floating Search Bar */}
          <div className="w-full max-w-[270px] bg-white rounded-xl py-2.5 px-3.5 shadow-sm border border-blue-100 flex items-center justify-between transition-all duration-300 group-hover:shadow-md group-hover:border-blue-300">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs font-semibold text-slate-700 tracking-tight">Find your next customer</span>
            </div>
            <span className="text-[#1541e0] font-bold text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
          </div>

          {/* Faux Result Lines */}
          <div className="w-full max-w-[250px] space-y-1.5 opacity-40">
            <div className="h-1.5 bg-slate-300 rounded-full w-full" />
            <div className="h-1.5 bg-slate-300 rounded-full w-4/5" />
          </div>

          {/* High-Intent Audiences Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-blue-200/90 shadow-xs text-[11px] font-bold text-slate-800 transition-all duration-200 group-hover:scale-105">
            <span className="w-3.5 h-3.5 rounded-full border border-[#1541e0] flex items-center justify-center text-[9px] text-[#1541e0] font-black">✦</span>
            <span>High-intent audiences</span>
          </div>
        </div>
      ),
    },
    {
      category: "Meta Ads",
      title: "Turn Audience Interest Into Action",
      description:
        "Build awareness, connect with relevant audiences and drive enquiries or purchases through Facebook and Instagram advertising.",
      renderVisual: () => (
        <div className="relative w-full h-44 sm:h-48 bg-gradient-to-b from-[#eef4ff] to-[#f8faff] border-b border-slate-100 p-5 flex flex-col items-center justify-center gap-4">
          {/* Audience Flow Diagram */}
          <div className="flex items-center justify-center gap-4 w-full max-w-[260px]">
            {/* Left Audience Node */}
            <div className="w-10 h-10 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>

            {/* Dotted Connection */}
            <div className="flex-1 border-t-2 border-dotted border-blue-300" />

            {/* Center Bullseye Target */}
            <div className="relative w-14 h-14 rounded-full bg-[#1541e0] text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/30">
              <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1541e0]" />
                </div>
              </div>
            </div>

            {/* Dotted Connection */}
            <div className="flex-1 border-t-2 border-dotted border-blue-300" />

            {/* Right Audience Node */}
            <div className="w-10 h-10 rounded-full bg-white border border-blue-100 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* Interest -> Action Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-blue-200/90 shadow-xs text-[11px] font-bold text-slate-800 transition-all duration-200 group-hover:scale-105">
            <span>Interest → Action</span>
          </div>
        </div>
      ),
    },
    {
      category: "Programmatic Advertising",
      title: "Reach Beyond Traditional Channels",
      description:
        "Use automated media buying, audience targeting and performance insights to connect with potential customers across digital environments.",
      renderVisual: () => (
        <div className="relative w-full h-44 sm:h-48 bg-gradient-to-b from-[#ecfdf5] to-[#f4fcf7] border-b border-emerald-100 p-5 flex flex-col items-center justify-center gap-3">
          {/* Connected Network Emblem */}
          <div className="w-14 h-14 rounded-full border-2 border-[#059669] flex items-center justify-center bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-emerald-500/20 group-hover:border-[#047857]">
            <svg className="w-8 h-8 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <path strokeWidth="2" strokeLinecap="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>

          {/* Connected digital reach Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-emerald-200 shadow-xs text-[11px] font-bold text-slate-800 transition-all duration-200 group-hover:scale-105">
            <svg className="w-3.5 h-3.5 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>Connected digital reach</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            03 &nbsp;|&nbsp; THE RIGHT CHANNEL MIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl">
          <h2
            ref={headlineRef}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight will-change-transform will-change-opacity"
          >
            Reach the Right Audience. <br />
            On <span className="text-[#0040ff]">the Right Platform.</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-4xl will-change-transform will-change-opacity"
          >
            Different platforms create different opportunities. We bring them together through one performance-focused strategy designed around your business goals.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 will-change-transform will-change-opacity"
        >
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/80 transition-all duration-300 hover:-translate-y-1 group cursor-default"
            >
              {/* Crisp Vector Visual Mockup */}
              {platform.renderVisual()}

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0040ff] tracking-tight">
                      {platform.category}
                    </span>
                    <span className="text-[#0040ff] flex items-center justify-center shrink-0">
                      <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-3 group-hover:text-[#0040ff] transition-colors duration-200">
                    {platform.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {platform.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

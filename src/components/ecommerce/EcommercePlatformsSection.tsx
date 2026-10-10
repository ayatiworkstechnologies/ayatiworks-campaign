"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import { FiSearch, FiPercent } from "react-icons/fi";
import { FaAmazon } from "react-icons/fa";

export default function EcommercePlatformsSection() {
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
      title: "Every Growth Lever, Working Toward More Sales.",
      description:
        "Scale your revenue with high-intent Search, Google Shopping, Performance Max, and YouTube campaigns designed to capture ready-to-buy shoppers.",
      renderVisual: () => (
        <div className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 flex flex-col items-center justify-center gap-2 group-hover:border-blue-200 transition-colors">
          <div className="w-full bg-white rounded-lg px-3 py-1.5 border border-slate-200 shadow-2xs flex items-center gap-2 text-slate-400">
            <FiSearch className="w-3.5 h-3.5 text-[#1541e0]" />
            <span className="text-[11px] font-normal text-slate-500 truncate">
              Buy wireless noise-cancelling headphones
            </span>
          </div>
          <div className="flex items-center gap-1.5 self-start pt-0.5">
            <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
              Google Shopping
            </span>
            <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">
              PMax
            </span>
          </div>
        </div>
      ),
    },
    {
      category: "Meta Ads",
      title: "Turn Product Discovery into Buying Intent.",
      description:
        "Stop the scroll with high-performing creative formats, dynamic product ads, catalog sales, and lookalike targeting on Instagram & Facebook.",
      renderVisual: () => (
        <div className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 flex flex-col items-center justify-center gap-2 group-hover:border-blue-200 transition-colors">
          <div className="flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs">
              <span className="text-xs font-black">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1541e0] text-white flex items-center justify-center shadow-md">
              <FiPercent className="w-5 h-5 text-white" />
            </div>
            <div className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-xs">
              <span className="text-xs font-black">f</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-[9px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-2xs">
              Dynamic Ads (DPA)
            </span>
            <span className="text-[9px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
              Advantage+
            </span>
          </div>
        </div>
      ),
    },
    {
      category: "Amazon Advertising",
      title: "Reach Customers When They're Ready to Shop.",
      description:
        "Maximize marketplace dominance with Sponsored Products, Sponsored Brands, and Brand Store optimization on Amazon and top platforms.",
      renderVisual: () => (
        <div className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 flex flex-col items-center justify-center gap-2 group-hover:border-blue-200 transition-colors">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center shadow-md text-xl">
            <FaAmazon className="w-5 h-5 text-amber-400" />
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <span className="text-[9px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Sponsored Products
            </span>
            <span className="text-[9px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
              Brand Store CRO
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            03 &nbsp;|&nbsp; PLATFORMS &amp; CHANNELS
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="max-w-3xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
          >
            Reach the Right Audience. <br />
            On <span className="text-[#1541e0]">the Right Platform.</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
          >
            We build omnichannel growth engines tailored to where your customers discover, evaluate, and purchase products online.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 will-change-transform will-change-opacity"
        >
          {platforms.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-md shadow-slate-100 flex flex-col justify-between hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group cursor-default"
            >
              <div>
                {/* Header Graphic Preview */}
                <div className="mb-4">
                  {item.renderVisual()}
                </div>

                {/* Category & Title */}
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-[#1541e0] uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <HiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#1541e0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-snug pt-1">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-500">
                  Full-Funnel Execution
                </span>
                <span className="text-[11px] font-bold text-[#1541e0] group-hover:underline">
                  Explore Channel →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

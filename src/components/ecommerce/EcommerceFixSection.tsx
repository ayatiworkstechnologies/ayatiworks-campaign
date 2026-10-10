"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTarget, FiPercent, FiShoppingBag } from "react-icons/fi";

export default function EcommerceFixSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const calloutRef = useRef<HTMLDivElement>(null);

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
        tl.fromTo(headlineRef.current, { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }, "-=0.3");
      }

      if (descRef.current) {
        tl.fromTo(descRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.fromTo(
          cards,
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (calloutRef.current) {
        tl.fromTo(
          calloutRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const challengeCards = [
    {
      title: "Higher Acquisition Costs",
      description:
        "Ad costs keep surging while ROAS drops. We optimize audience targeting, creatives, and bids to drive down customer acquisition costs.",
      icon: <FiTarget className="w-5 h-5 text-[#1541e0]" />,
    },
    {
      title: "Low Product Visibility",
      description:
        "Shoppers browse but don't buy. We restructure product catalogues, intent-based keywords, and dynamic retargeting to display the right products.",
      icon: <FiPercent className="w-5 h-5 text-[#1541e0]" />,
    },
    {
      title: "Checkout Drop-Off",
      description:
        "High cart abandonment kills margins. We streamline conversion funnels, reduce friction points, and re-engage high-intent visitors before they bounce.",
      icon: <FiShoppingBag className="w-5 h-5 text-[#1541e0]" />,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            01 &nbsp;|&nbsp; WHAT WE FIX FOR E-COMMERCE
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
          >
            More Traffic Doesn&apos;t Always <br />
            <span className="text-[#1541e0]">Mean More Sales.</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
          >
            Traffic without conversion is just vanity spend. Most e-commerce stores fail to convert high-intent shoppers because the ad creative, landing page, and post-click experience don&apos;t align. We fix the leaks across your entire customer funnel to make every rupee work harder.
          </p>
        </div>

        {/* 3 Royal Blue Cards matching screenshot */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 will-change-transform will-change-opacity"
        >
          {challengeCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1541e0] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-between shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1.5 group border border-blue-400/20"
            >
              {/* White Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white text-[#1541e0] flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-blue-100 text-xs sm:text-[13px] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Paragraph */}
        <div
          ref={calloutRef}
          className="mt-12 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-100/80 text-center max-w-4xl mx-auto shadow-2xs will-change-transform will-change-opacity"
        >
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            From paid search to retention remarketing, Ayatiworks connects every stage of the buyer journey. We combine creative strategy, performance marketing, and conversion design to turn browsing visitors into repeat brand advocates.
          </p>
        </div>

      </div>
    </section>
  );
}

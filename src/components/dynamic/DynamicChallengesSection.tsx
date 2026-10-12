"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiTarget, FiPercent, FiShoppingBag, FiDollarSign, FiUsers, FiTrendingDown } from "react-icons/fi";
import { CampaignConfig } from "@/data/campaigns";

interface DynamicChallengesSectionProps {
  campaign: CampaignConfig;
}

export default function DynamicChallengesSection({ campaign }: DynamicChallengesSectionProps) {
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

  const getCardIcon = (iconType?: string, index: number = 0) => {
    switch (iconType) {
      case "cost":
        return <FiTarget className="w-5 h-5 text-[#1541e0]" />;
      case "visibility":
        return <FiPercent className="w-5 h-5 text-[#1541e0]" />;
      case "cart":
        return <FiShoppingBag className="w-5 h-5 text-[#1541e0]" />;
      case "leads":
        return <FiUsers className="w-5 h-5 text-[#1541e0]" />;
      case "roi":
        return <FiDollarSign className="w-5 h-5 text-[#1541e0]" />;
      default:
        return index === 0 ? (
          <FiTarget className="w-5 h-5 text-[#1541e0]" />
        ) : index === 1 ? (
          <FiPercent className="w-5 h-5 text-[#1541e0]" />
        ) : (
          <FiShoppingBag className="w-5 h-5 text-[#1541e0]" />
        );
    }
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            {campaign.challenges.tag}
          </span>
        </div>

        {/* Headline */}
        <div className="max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
          >
            {campaign.challenges.headlinePrimary} <br />
            <span className="text-[#1541e0]">{campaign.challenges.headlineHighlight}</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
          >
            {campaign.challenges.subtitle}
          </p>
        </div>

        {/* 3 Royal Blue Cards */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 will-change-transform will-change-opacity"
        >
          {campaign.challenges.cards.map((item, index) => (
            <div
              key={index}
              className="bg-[#1541e0] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-between shadow-xl shadow-blue-600/20 hover:shadow-2xl hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1.5 group border border-blue-400/20"
            >
              {/* White Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-white text-[#1541e0] flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300">
                {getCardIcon(item.iconType, index)}
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

        {/* Bottom Callout Banner */}
        {campaign.challenges.calloutText && (
          <div
            ref={calloutRef}
            className="mt-12 sm:mt-14 p-5 sm:p-6 rounded-2xl bg-blue-50/60 border border-blue-100/80 text-center max-w-4xl mx-auto shadow-2xs will-change-transform will-change-opacity"
          >
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {campaign.challenges.calloutText}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

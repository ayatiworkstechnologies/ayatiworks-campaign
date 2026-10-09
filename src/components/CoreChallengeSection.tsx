"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CoreChallengeSection() {
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
          start: "top 82%",
          once: true,
        },
        defaults: { ease: "power2.out" },
      });

      // Section label fades in
      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }

      // Headline reveals line by line
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" },
          "-=0.3"
        );
      }

      // Supporting content fades upward
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }

      // Cards appear sequentially from bottom to top with icon scale
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        tl.fromTo(
          cards,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "Rising Advertising Costs",
      description:
        "Your budget keeps increasing, but the cost of acquiring customers continues to rise.",
      icon: (
        // Currency / Cost Icon
        <svg
          className="w-5 h-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M14.5 9h-4a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 1 0 3h-4.5" />
          <path d="M12 7v2m0 6v2" />
        </svg>
      ),
    },
    {
      title: "Leads That Don't Convert",
      description:
        "Your campaigns generate enquiries, but too few turn into meaningful sales opportunities.",
      icon: (
        // 2-Person Audience / Leads Icon
        <svg
          className="w-5 h-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Unclear Return on Ad Spend",
      description:
        "You're investing in advertising without a reliable picture of what drives conversions and revenue.",
      icon: (
        // Column Bar Chart Icon
        <svg
          className="w-5 h-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="18" y="4" width="4" height="16" rx="1" />
          <rect x="10" y="10" width="4" height="10" rx="1" />
          <rect x="2" y="14" width="4" height="6" rx="1" />
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            01 &nbsp;|&nbsp; THE REAL CHALLENGE
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl">
          <h2
            ref={headlineRef}
            className="text-2xl sm:text-3xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.2] will-change-transform will-change-opacity"
          >
            Your Ads Are Getting Clicks. But <br className="hidden sm:inline" />
            Are <span className="text-[#1541e0]">They Delivering Results?</span>
          </h2>
          <p
            ref={descRef}
            className="mt-4 text-xs sm:text-sm md:text-[14px] text-slate-600 leading-relaxed max-w-4xl font-normal will-change-transform will-change-opacity"
          >
            Running ads is easy. Generating profitable business outcomes is where the real challenge begins. High ad spend, rising acquisition costs and poor-quality leads can hold your business back — even when campaign dashboards appear successful. Without a clear strategy connecting advertising to conversions, every wasted click becomes a missed opportunity.
          </p>
        </div>

        {/* 3 Stadium-Pill Problem Cards with Dividers */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-16 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 will-change-transform will-change-opacity"
        >
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              {/* Stadium Capsule Card */}
              <div className="flex-1 w-full flex flex-col rounded-[36px] overflow-hidden border border-slate-100 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1.5 group cursor-default">
                {/* Top Stadium Dome in Blue */}
                <div className="bg-[#1541e0] pt-8 pb-6 px-6 flex items-center justify-center rounded-t-[36px] transition-colors duration-300 group-hover:bg-[#0f35be]">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110">
                    {card.icon}
                  </div>
                </div>

                {/* Middle Title Container */}
                <div className="bg-white py-6 px-6 text-center flex items-center justify-center min-h-[76px]">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-[#1541e0] transition-colors duration-200">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Stadium Base in Blue */}
                <div className="bg-[#1541e0] py-7 px-7 text-center rounded-b-[36px] transition-colors duration-300 group-hover:bg-[#0f35be] min-h-[105px] flex items-center justify-center">
                  <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Vertical Divider Line between cards on desktop */}
              {index < cards.length - 1 && (
                <div className="hidden md:block w-px h-28 bg-slate-200 shrink-0 self-center" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Centered Takeaway Text */}
        <div className="mt-14 sm:mt-18 text-center max-w-4xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            <span className="font-semibold text-slate-800">
              We turn advertising data into decisions that drive business growth.
            </span>{" "}
            Ayatiworks connects audience intelligence, strategic media buying, creative optimisation and performance tracking to help campaigns attract the right customers and deliver measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

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
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

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
        tl.fromTo(
          tagRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.35"
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55 },
          "-=0.4"
        );
      }

      if (cardsRef.current) {
        tl.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const platforms = [
    {
      category: "B2B BUSINESSES",
      title: "Turn Marketing Demand Into Sales Opportunities",
      description:
        "Connect targeting, demand generation, lead qualification and nurturing to build a stronger pipeline. Qualified leads, sales opportunities and pipeline contribution.",
      renderVisual: () => (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden border-b border-slate-100 bg-[#eaf4ff] sm:h-48">
          <div className="absolute left-1/2 top-1/2 h-[140px] w-[240px] -translate-x-1/2 -translate-y-1/2">
            {/* dotted network */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 240 140"
              fill="none"
            >
              <path
                d="M28 35C58 19 86 20 118 44C151 68 180 42 210 29"
                stroke="#8ec5ff"
                strokeWidth="1.6"
                strokeDasharray="4 4"
              />
              <path
                d="M35 100C75 88 120 95 190 91"
                stroke="#a7d7ff"
                strokeWidth="1.4"
                strokeDasharray="4 4"
              />
            </svg>

            {/* top nodes */}
            <div className="absolute left-4 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
              <svg
                className="h-4 w-4 text-[#4da4ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M4 20V10h6v10M14 20V4h6v16" />
              </svg>
            </div>

            <div className="absolute left-1/2 top-[-4px] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#1541e0] shadow-md">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <rect x="5" y="4" width="14" height="16" rx="2" />
                <path d="M9 8h6M9 12h6M9 16h4" />
              </svg>
            </div>

            <div className="absolute right-4 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm">
              <svg
                className="h-4 w-4 text-[#4da4ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M7 7h10v10H7z" />
                <path d="M4 4h4M16 4h4M4 16h4M16 16h4" />
              </svg>
            </div>

            {/* search bar */}
            <div className="absolute left-1/2 top-[58px] flex w-[190px] -translate-x-1/2 items-center gap-2 rounded-lg bg-white px-4 py-3 shadow">
              <svg
                className="h-4 w-4 text-[#1541e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>

              <div className="h-1.5 flex-1 rounded-full bg-[#dce5ef]" />

              <span className="text-[#1541e0]">→</span>
            </div>

            {/* lower tag */}
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-md bg-white px-4 py-2 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#41c69c]" />
              <span className="h-1.5 w-20 rounded-full bg-[#dce7ef]" />
            </div>
          </div>
        </div>
      ),
    },

    {
      category: "SAAS COMPANIES",
      title: "Connect Acquisition With Customer Growth",
      description:
        "Bring acquisition, activation, conversion and lifecycle marketing together. Customer acquisition, activation, retention and recurring revenue.",
      renderVisual: () => (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden border-b border-slate-100 bg-[#edf6ff] sm:h-48">
          <div className="relative h-[150px] w-[245px]">
            {/* cloud */}
            <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-sm">
              <svg
                className="h-5 w-5 text-[#1541e0]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 18H6a4 4 0 0 1-.3-8 6 6 0 0 1 11.5-1.4A4.5 4.5 0 0 1 19 18Z" />
              </svg>
            </div>

            {/* center dashboard */}
            <div className="absolute left-1/2 top-[42px] w-[128px] -translate-x-1/2 rounded-lg border border-blue-100 bg-white p-3 shadow-lg">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ffb64d]" />
                <span className="h-2 w-2 rounded-full bg-[#70d5c2]" />
                <span className="h-2 w-2 rounded-full bg-[#8ec5ff]" />
              </div>

              <div className="mb-2 flex h-[52px] items-end gap-2">
                <span className="h-4 w-3 rounded-t bg-[#b9ddff]" />
                <span className="h-7 w-3 rounded-t bg-[#90caff]" />
                <span className="h-10 w-3 rounded-t bg-[#6bb5ff]" />
                <span className="h-12 w-3 rounded-t bg-[#1541e0]" />
              </div>

              <div className="h-1.5 w-full rounded-full bg-[#e7eef6]" />
            </div>

            {/* left chart */}
            <div className="absolute left-0 top-[52px] flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
              <svg
                className="h-5 w-5 text-[#1541e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M5 18V10M10 18V6M15 18v-5M20 18V3" />
              </svg>
            </div>

            {/* right database */}
            <div className="absolute right-0 top-[52px] flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm">
              <svg
                className="h-5 w-5 text-[#13a782]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <ellipse cx="12" cy="5" rx="7" ry="3" />
                <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
                <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
              </svg>
            </div>

            {/* bottom settings */}
            <div className="absolute bottom-1 left-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
              <svg
                className="h-4 w-4 text-[#1541e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5Z" />
                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1A1.7 1.7 0 0 0 4.6 15 1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.3 7l2.8-2.8.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z" />
              </svg>
            </div>

            {/* bottom grid */}
            <div className="absolute bottom-1 right-5 flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
              <svg
                className="h-4 w-4 text-[#1541e0]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <rect x="4" y="4" width="6" height="6" />
                <rect x="14" y="4" width="6" height="6" />
                <rect x="4" y="14" width="6" height="6" />
                <rect x="14" y="14" width="6" height="6" />
              </svg>
            </div>
          </div>
        </div>
      ),
    },

    {
      category: "SCALING BUSINESSES",
      title: "Build a Marketing Engine for Your Next Stage",
      description:
        "Strengthen marketing strategy, prioritise high-impact channels and establish consistent acquisition and conversion processes. Growth efficiency and revenue opportunities.",
      renderVisual: () => (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden border-b border-emerald-100 bg-[#effcf7] sm:h-48">
          <div className="relative h-[150px] w-[245px]">
            {/* left mini card */}
            <div className="absolute left-2 top-7 rounded-lg bg-white px-4 py-3 shadow-sm">
              <div className="flex items-end gap-1">
                <span className="h-3 w-2 rounded-t bg-[#8ddfc8]" />
                <span className="h-5 w-2 rounded-t bg-[#55ceb0]" />
                <span className="h-7 w-2 rounded-t bg-[#29b99a]" />
              </div>
            </div>

            {/* main bars */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-end gap-3">
              <span className="h-7 w-5 rounded-t bg-[#d9efff]" />
              <span className="h-11 w-5 rounded-t bg-[#9dd5ff]" />
              <span className="h-16 w-5 rounded-t bg-[#5faef7]" />
              <span className="h-24 w-5 rounded-t bg-[#1541e0]" />
            </div>

            {/* rising arrow */}
            <svg
              className="absolute left-[58px] top-[18px] h-[80px] w-[125px]"
              viewBox="0 0 125 80"
              fill="none"
            >
              <path
                d="M5 69C30 62 46 55 59 46C75 35 86 28 112 10"
                stroke="#1541e0"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M99 10h13v13"
                stroke="#1541e0"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* right mini card */}
            <div className="absolute right-0 top-11 rounded-lg bg-white px-4 py-3 shadow-sm">
              <div className="mb-1 h-1.5 w-10 rounded-full bg-[#dbe8f2]" />
              <div className="h-1.5 w-6 rounded-full bg-[#73d7bd]" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* Section tag */}
        <div
          ref={tagRef}
          className="mb-4 flex items-center gap-2 will-change-transform will-change-opacity"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f26b21] sm:text-[11px]">
            03
          </span>

          <span className="h-[12px] w-px bg-[#f26b21]/70" />

          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#f26b21] sm:text-[11px]">
            WHO WE WORK WITH
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-[1050px]">
          <h2
            ref={headlineRef}
            className="
              text-[28px]
              font-black
              leading-[1.12]
              tracking-[-0.035em]
              text-[#171c27]
              will-change-transform
              will-change-opacity
              sm:text-[34px]
              lg:text-[40px]
              xl:text-[42px]
            "
          >
            Different Business Models, One Goal-
            <br className="hidden sm:block" />
            <span className="text-[#1541e0]">
              Meaningful Growth.
            </span>
          </h2>

          <p
            ref={descRef}
            className="
              mt-5
              max-w-[1120px]
              text-[11px]
              leading-[1.85]
              text-[#667080]
              will-change-transform
              will-change-opacity
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            Every business has a different growth journey. Our approach
            connects marketing priorities with the customers you want to reach
            and outcomes you want to achieve.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="
            mt-10
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
            lg:mt-12
            lg:gap-8
          "
        >
          {platforms.map((platform) => (
            <div
              key={platform.category}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[14px]
                border
                border-[#dde3ea]
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#c8d8ff]
                hover:shadow-[0_10px_30px_rgba(21,65,224,0.08)]
              "
            >
              {platform.renderVisual()}

              <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
                {/* Category row */}
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.02em] text-[#1541e0] sm:text-[11px]">
                    {platform.category}
                  </span>

                  <HiArrowUpRight
                    className="
                      h-4 w-4
                      shrink-0
                      text-[#1541e0]
                      transition-transform
                      duration-200
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-4
                    text-[18px]
                    font-extrabold
                    leading-[1.35]
                    tracking-[-0.025em]
                    text-[#1d222d]
                    transition-colors
                    duration-200
                    group-hover:text-[#1541e0]
                    sm:text-[19px]
                  "
                >
                  {platform.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] leading-[1.85] text-[#6d7685] sm:text-[12px]">
                  {platform.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
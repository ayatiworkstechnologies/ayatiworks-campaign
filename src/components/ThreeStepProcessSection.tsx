"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const stepsData = [
  {
    id: "audit",
    number: "01",
    label: "AUDIT",
    title: "Uncover the Opportunities You're Missing",
    description:
      "We analyze existing advertising accounts to identify performance gaps, budget inefficiencies and conversion barriers.",
    focusPrefix: "Focus: ",
    focusText:
      "campaign structure, audience targeting, creatives, tracking and landing pages.",
    // avatar = small icon in left card, image = square version for right circles
    avatar: "/audit-sq.png",
    image: "/audit-sq.png",
  },
  {
    id: "optimise",
    number: "02",
    label: "OPTIMISE",
    title: "Make Every Campaign Work Harder",
    description:
      "We improve targeting, ad messaging, bidding strategies and conversion journeys to help reduce wasted spend and strengthen campaign results.",
    focusPrefix: "Focus: ",
    focusText: "CPA, lead quality, ad relevance and ROAS.",
    avatar: "/optimise-sq.png",
    image: "/optimise-sq.png",
  },
  {
    id: "scale",
    number: "03",
    label: "SCALE",
    title: "Grow What Delivers Results",
    description:
      "We identify the strongest-performing campaigns, audiences and creatives, then allocate budgets strategically to support sustainable growth.",
    focusPrefix: "Focus: ",
    focusText:
      "qualified conversions, budget allocation and revenue performance.",
    avatar: "/scale-sq.png",
    image: "/scale-sq.png",
  },
];

export default function ThreeStepProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const circlesWrapRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (idx: number) => {
    if (idx === activeStep) return;
    setActiveStep(idx);

    if (cardContentRef.current) {
      gsap.fromTo(
        cardContentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
      );
    }
    if (circlesWrapRef.current) {
      gsap.fromTo(
        circlesWrapRef.current.children,
        { opacity: 0.5, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.08,
          ease: "power2.out",
        },
      );
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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

      // Section tag and header
      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5 },
        );
      }
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.35",
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

      // Step card entrance (left)
      if (cardRef.current) {
        tl.fromTo(
          cardRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.75, ease: "power2.out" },
          "-=0.25",
        );
      }

      // Step circles entrance (right)
      if (circlesWrapRef.current) {
        tl.fromTo(
          circlesWrapRef.current.children,
          { opacity: 0, scale: 0.88, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.2)",
          },
          "-=0.5",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentStep = stepsData[activeStep];

  // Exactly 2 other steps shown on the right side
  const otherSteps = stepsData
    .map((step, index) => ({ ...step, index }))
    .filter((step) => step.index !== activeStep);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div
          ref={tagRef}
          className="flex items-center gap-2 mb-3 will-change-transform will-change-opacity"
        >
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            02 &nbsp;|&nbsp; A CLEAR PATH FORWARD
          </span>
        </div>

        {/* Section Header Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-12 sm:mb-16">
          <div className="md:col-span-7">
            <h2
              ref={headlineRef}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight will-change-transform will-change-opacity"
            >
              From Wasted Spend to Smarter <br className="hidden sm:inline" />
              Growth. <span className="text-[#1541e0]">In Three Steps.</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
            >
              Every successful campaign starts with understanding what works,
              improving what doesn&apos;t and scaling what delivers value.
            </p>
          </div>
        </div>

        {/* The 3 Steps Layout: 1 Detailed Card on Left, 2 Circular Triggers on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: 1 Clean Card matching Figma design */}
          <div
            ref={cardRef}
            className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl shadow-slate-100/80 relative overflow-hidden transition-all duration-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/5 will-change-transform will-change-opacity"
          >
            <div
              ref={cardContentRef}
              className="flex flex-col justify-center min-h-[260px] sm:min-h-[290px]"
            >
              {/* Top Avatar with Blue Step Name */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-slate-900 shadow-sm shrink-0 bg-[#f0f5ff]">
                  <Image
                    src={currentStep.avatar}
                    alt={currentStep.label}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm font-extrabold tracking-wider text-[#1541e0] uppercase">
                  {currentStep.label}
                </span>
              </div>

              {/* Headline */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                {currentStep.title}
              </h3>

              {/* Body Paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                {currentStep.description}
              </p>

              {/* Focus text */}
              <p className="text-xs sm:text-[13px] text-slate-700 font-normal leading-relaxed">
                <span className="font-semibold text-slate-900">
                  {currentStep.focusPrefix}
                </span>
                <span>{currentStep.focusText}</span>
              </p>
            </div>
          </div>

          {/* Right Side: Exactly 2 Circular Triggers matching Figma design */}
          <div
            ref={circlesWrapRef}
            className="lg:col-span-6 flex flex-row items-center justify-center gap-8 sm:gap-14 md:gap-16"
          >
            {otherSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => handleStepChange(step.index)}
                className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 will-change-transform will-change-opacity"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleStepChange(step.index);
                  }
                }}
                aria-label={`Switch to ${step.label}`}
              >
                {/* Large Circular Container – illustration image fills full circle */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-slate-900/90 shadow-xl shadow-slate-900/10 bg-[#f0f5ff] group-hover:scale-105 group-hover:border-[#1541e0] group-hover:shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                  <Image
                    src={step.image}
                    alt={step.label}
                    fill
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="mt-3.5 sm:mt-4">
                  <span className="text-sm sm:text-base font-extrabold tracking-wider text-[#1541e0] uppercase block group-hover:scale-105 transition-transform duration-200">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

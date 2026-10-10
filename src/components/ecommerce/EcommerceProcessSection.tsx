"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck, FiArrowRight } from "react-icons/fi";

const ecomSteps = [
  {
    id: "acquire",
    stepNumber: "STEP ONE",
    label: "ACQUIRE",
    title: "Attract Shoppers Who Are Ready to Buy",
    description:
      "Precision-targeted paid campaigns across Google Shopping, Meta, and Performance Max to acquire high-value customers with maximum ROAS.",
    focusPoints: [
      "Lower Customer Acquisition Cost (CAC)",
      "High-intent audience & dynamic catalog targeting",
      "Real-time budget efficiency and bid optimization",
    ],
    avatar: "/audit-sq.png",
  },
  {
    id: "convert",
    stepNumber: "STEP TWO",
    label: "CONVERT",
    title: "Turn Browsers Into High-Value Buyers",
    description:
      "High-converting product landing pages, dynamic catalog optimization, friction-free checkout, and seamless CRO journeys that eliminate drop-offs.",
    focusPoints: [
      "Higher Store Conversion Rates",
      "Optimized Average Order Value (AOV)",
      "Zero-friction mobile checkout experience",
    ],
    avatar: "/optimise-sq.png",
  },
  {
    id: "retain",
    stepNumber: "STEP THREE",
    label: "RETAIN",
    title: "Maximize Lifetime Value & Repeat Purchases",
    description:
      "Automated retention email flows, SMS remarketing, and loyalty triggers that turn one-time shoppers into brand advocates and recurring buyers.",
    focusPoints: [
      "Predictable Repeat Purchase Rates",
      "Accelerated Customer Lifetime Value (LTV)",
      "Automated win-back & VIP customer cohorts",
    ],
    avatar: "/scale-sq.png",
  },
];

export default function EcommerceProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const circlesWrapRef = useRef<HTMLDivElement>(null);

  const handleStepChange = (idx: number) => {
    if (idx === activeStep) return;
    setActiveStep(idx);

    if (cardContentRef.current) {
      gsap.fromTo(
        cardContentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
  };

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
      if (circlesWrapRef.current) {
        tl.fromTo(
          circlesWrapRef.current.children,
          { opacity: 0, scale: 0.85, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "back.out(1.4)" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = ecomSteps[activeStep];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Label */}
        <div ref={tagRef} className="flex items-center gap-2 mb-3.5 will-change-transform will-change-opacity">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            02 &nbsp;|&nbsp; HOW IT WORKS
          </span>
        </div>

        {/* Header Grid: Title Left, Subtitle Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 sm:pb-16 border-b border-slate-200/80">
          <div className="lg:col-span-7">
            <h2
              ref={headlineRef}
              className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15] will-change-transform will-change-opacity"
            >
              From First Click to Repeat Purchase. <br />
              <span className="text-[#1541e0]">We Optimise Every Step.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p
              ref={descRef}
              className="text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal will-change-transform will-change-opacity"
            >
              Full-funnel e-commerce strategies crafted to scale brands with predictable, profitable acquisition, higher AOV, and customer retention that lasts.
            </p>
          </div>
        </div>

        {/* Content Section: Left Active Card, Right 3 Clickable Circle Steps */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Active Step Detail Card */}
          <div className="lg:col-span-7">
            <div
              ref={cardContentRef}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-blue-500/5 text-left relative overflow-hidden"
            >
              <div className="flex items-center justify-between pb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100/70 text-[#1541e0] font-black text-xs tracking-wider uppercase">
                  {current.stepNumber}
                </span>
                <span className="text-xs font-bold text-slate-400">
                  {activeStep + 1} of {ecomSteps.length}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight pt-1">
                {current.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
                {current.description}
              </p>

              {/* Bullet / Focus checklist */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  Key Growth Focus:
                </span>
                {current.focusPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <FiCheck className="w-3 h-3" />
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-slate-700">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress step navigation */}
              <div className="mt-6 pt-4 flex items-center gap-2">
                {ecomSteps.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleStepChange(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeStep === idx ? "w-8 bg-[#1541e0]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Jump to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3 Process Circles matching design */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-6 sm:gap-8">
            <div ref={circlesWrapRef} className="flex items-center justify-center gap-4 sm:gap-6">
              {ecomSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => handleStepChange(idx)}
                    className="flex flex-col items-center group cursor-pointer text-center focus:outline-none"
                  >
                    {/* Circle Image Wrapper */}
                    <div
                      className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1.5 transition-all duration-300 flex items-center justify-center shadow-lg relative ${
                        isActive
                          ? "ring-4 ring-[#1541e0] ring-offset-2 scale-105 shadow-blue-500/30 bg-blue-50"
                          : "ring-1 ring-slate-200 hover:ring-slate-300 hover:scale-102 bg-white"
                      }`}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 relative flex items-center justify-center">
                        <Image
                          src={step.avatar}
                          alt={step.label}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Small badge number on top */}
                      <span
                        className={`absolute -top-1 -right-1 w-6 h-6 rounded-full text-[11px] font-black flex items-center justify-center shadow-sm ${
                          isActive
                            ? "bg-[#ea580c] text-white"
                            : "bg-slate-700 text-white"
                        }`}
                      >
                        {idx + 1}
                      </span>
                    </div>

                    {/* Step label text below circle */}
                    <span
                      className={`mt-3 text-xs sm:text-[13px] font-black tracking-wider uppercase transition-colors duration-200 ${
                        isActive ? "text-[#1541e0]" : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

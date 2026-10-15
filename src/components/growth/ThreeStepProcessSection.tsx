"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiCheck } from "react-icons/hi2";

const stepsData = [
  {
    id: "diagnose",
    number: "01",
    label: "DIAGNOSE",
    title: "Discover What’s Holding Growth Back",
    description:
      "Analyse marketing channels, target audience, competitive positioning, sales funnel and conversion performance.",
    focusItems: [
      "Review existing marketing performance",
      "Identify funnel challenges and conversion gaps",
      "Define KPIs and growth opportunities",
    ],
    image: "/diagnose.png",
  },
  {
    id: "activate",
    number: "02",
    label: "ACTIVATE",
    title: "Turn Strategy Into Action",
    description:
      "Prioritise marketing initiatives, connect audience acquisition, messaging, conversion experiences and lead nurturing.",
    focusItems: [
      "Launch prioritised campaigns",
      "Improve landing pages and messaging",
      "Connect lead nurturing and CRM",
    ],
    image: "/activate.png",
  },
  {
    id: "optimise",
    number: "03",
    label: "OPTIMISE",
    title: "Build on What Works",
    description:
      "Evaluate early signals, refine activities and direct resources toward initiatives showing the strongest business contribution.",
    focusItems: [
      "Improve lead quality",
      "Increase marketing efficiency",
      "Measure pipeline contribution",
    ],
    image: "/optimize.png",
  },
];

const AUTO_ADVANCE_MS = 4500;

export default function ThreeStepProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % stepsData.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, isPaused, activeStep]);

  useEffect(() => {
    if (reduceMotion || !cardContentRef.current) return;
    const animation = gsap.fromTo(
      cardContentRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
    return () => { animation.kill(); };
  }, [activeStep, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [headingRef.current, circlesRef.current].filter(Boolean),
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [reduceMotion]);

  const currentStep = stepsData[activeStep];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 sm:py-20"
      aria-labelledby="growth-steps-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div ref={headingRef} className="mb-10 grid gap-4 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f26b21]">
              02 &nbsp;|&nbsp; 90-DAY GROWTH PLAN
            </p>
            <h2 id="growth-steps-heading" className="text-3xl font-black leading-tight tracking-tight text-[#171c27] sm:text-4xl">
              90 Days.    Clear Priorities.
              <span className="block text-[#1541e0]">  Measurable Progress.</span>
            </h2>
          </div>
          <p className="max-w-[540px] text-sm leading-7 text-[#677080] md:justify-self-end">
            Business growth requires direction, prioritisation and continuous improvement.
            Our 90-day framework connects marketing activities with a structured plan.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-14">
          {/* Left: active step details */}
          <div className="min-w-0 rounded-[24px] border border-[#dce5f3] bg-white p-6 shadow-[0_8px_22px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-[#e8f1ff] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[#1541e0]">
                Step {activeStep === 0 ? "One" : activeStep === 1 ? "Two" : "Three"}
              </span>
              <span className="text-xs font-bold text-[#8ba0c3]">
                {activeStep + 1} of {stepsData.length}
              </span>
            </div>

            <div ref={cardContentRef} key={currentStep.id}>
              <div className="flex items-start gap-4">
                <div className="relative h-[86px] w-[86px] shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm sm:h-[100px] sm:w-[100px]">
                  <Image
                    src={currentStep.image}
                    alt={`${currentStep.label} illustration`}
                    fill
                    sizes="100px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#10192e] sm:text-2xl">
                    {currentStep.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#516584] sm:text-[15px]">
                    {currentStep.description}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-[#e6edf5]" />
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-[#10203e]">
                Key Growth Focus:
              </p>
              <ul className="space-y-3">
                {currentStep.focusItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#314768]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ccf7e6] text-[#13966f]">
                      <HiCheck className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-9 flex items-center gap-2" aria-label="Step navigation">
              {stepsData.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`Show step ${index + 1}: ${step.label}`}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1541e0] ${
                    activeStep === index ? "w-8 bg-[#1541e0]" : "w-2.5 bg-[#dfe5ef] hover:bg-[#aab8d3]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: all 3 stages remain visible */}
          <div ref={circlesRef} className="flex flex-wrap items-start justify-center gap-3 sm:gap-6 lg:justify-end">
            {stepsData.map((step, index) => {
              const selected = index === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-label={`View ${step.label} step`}
                  aria-pressed={selected}
                  className="group flex w-[92px] flex-col items-center gap-3 text-center outline-none sm:w-[125px]"
                >
                  <span
                    className={`relative block h-[90px] w-[90px] rounded-full p-[5px] transition-all duration-300 sm:h-[120px] sm:w-[120px] ${
                      selected
                        ? "border-[4px] border-[#1541e0] bg-[#eaf1ff] shadow-[0_8px_20px_rgba(21,65,224,0.14)]"
                        : "border border-[#dce4ef] bg-white shadow-[0_7px_16px_rgba(15,23,42,0.08)] group-hover:-translate-y-1 group-hover:border-[#1541e0]/50"
                    }`}
                  >
                    <span className="relative block h-full w-full overflow-hidden rounded-full bg-[#f7fbff]">
                      <Image
                        src={step.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 90px, 120px"
                        className="object-contain p-1"
                      />
                    </span>
                    <span
                      className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white ${
                        selected ? "bg-[#f26b21]" : "bg-[#2c405c]"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </span>
                  <span className={`text-xs font-extrabold uppercase tracking-wide sm:text-sm ${selected ? "text-[#1541e0]" : "text-[#344966]"}`}>
                    {step.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

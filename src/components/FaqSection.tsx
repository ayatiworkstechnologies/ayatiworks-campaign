"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowRight } from "react-icons/hi2";
import { useSmoothScroll } from "./animations/SmoothScrollProvider";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useRef<HTMLElement>(null);
  const accordionListRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

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

      if (accordionListRef.current) {
        const items = accordionListRef.current.children;
        tl.fromTo(
          items,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: "power2.out" }
        );
      }

      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What is included in the free ad account growth audit?",
      answer:
        "We review campaign structure, audience targeting, ad creatives, tracking accuracy, budget allocation and landing-page performance to identify improvement opportunities.",
    },
    {
      question: "Which platforms does Ayatiworks manage?",
      answer:
        "We manage performance campaigns across Google Ads (Search, PMax, YouTube), Meta Ads (Facebook & Instagram), LinkedIn Ads, Amazon Advertising, and Programmatic DSPs.",
    },
    {
      question: "How do you measure advertising success?",
      answer:
        "We track bottom-line revenue metrics: Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), Cost Per Qualified Lead (CPL), and verified attribution.",
    },
    {
      question: "Can you improve my existing advertising campaigns?",
      answer:
        "Yes. We frequently audit and turn around underperforming accounts by fixing tracking errors, pruning wasteful spend, and introducing high-converting creatives.",
    },
    {
      question: "How long does it take to improve campaign performance?",
      answer:
        "Initial optimizations and waste reduction typically produce noticeable CPA drops within 14–30 days, with scaling momentum achieved over 60–90 days.",
    },
  ];

  const handleRequestClick = () => {
    scrollTo("#audit-form", { offset: -30 });
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Dotted Boxed Accordion Items with Smooth Collapse/Expand */}
          <div ref={accordionListRef} className="lg:col-span-7 space-y-3.5 sm:space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-btn-${index}`;

              return (
                <div
                  key={index}
                  className={`border border-dotted border-slate-300/90 transition-all duration-200 ${
                    isOpen
                      ? "bg-[#fafafa] shadow-xs border-slate-400"
                      : "bg-white hover:bg-slate-50/60 hover:border-slate-400"
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none group"
                  >
                    <span className="text-sm sm:text-[15px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#0040ff] transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span
                      className={`text-lg sm:text-xl font-bold shrink-0 leading-none select-none transition-transform duration-200 ${
                        isOpen
                          ? "text-[#0040ff] rotate-180"
                          : "text-slate-800 group-hover:scale-110"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Smooth height transition via CSS grid */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="accordion-wrapper"
                    data-open={isOpen ? "true" : "false"}
                  >
                    <div className="accordion-inner">
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-0 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal max-w-xl">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dotted Help Box & Tag */}
          <div ref={rightCardRef} className="lg:col-span-5 space-y-4 will-change-transform will-change-opacity">
            {/* Tag */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-[#ea580c] uppercase">
                05 &nbsp;|&nbsp; FREQUENTLY ASKED QUESTIONS.
              </span>
            </div>

            {/* Help / Contact Card with Dotted Border */}
            <div className="border border-dotted border-slate-300/90 bg-white p-8 sm:p-12 flex flex-col items-center justify-center text-center hover:border-slate-400 transition-colors duration-200 group">
              {/* Chat Bubble Icon with subtle hover bounce */}
              <div className="w-10 h-10 flex items-center justify-center text-slate-900 group-hover:-translate-y-1 transition-transform duration-200">
                <svg
                  className="w-9 h-9 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mt-5">
                A little clarity <br />
                <span className="text-[#0040ff]">before we start.</span>
              </h3>

              {/* REQUEST NOW Button with Matching Button Design */}
              <button
                type="button"
                onClick={handleRequestClick}
                className="mt-6 w-full max-w-[260px] bg-[#0040ff] hover:bg-[#0033cc] text-white font-black text-xs sm:text-[13px] tracking-wider uppercase pl-6 pr-2.5 py-2.5 rounded-none sm:rounded-xs transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.01] cursor-pointer group active:scale-[0.99] flex items-center justify-between gap-3"
              >
                <span>REQUEST NOW</span>
                <span className="w-8 h-8 rounded-xs bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-xs">
                  <HiArrowRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

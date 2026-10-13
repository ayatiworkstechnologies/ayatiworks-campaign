
"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowRight } from "react-icons/hi2";
import { useSmoothScroll } from "./animations/SmoothScrollProvider";

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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { scrollTo } = useSmoothScroll();

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const accordionListRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 }
        );
      }

      if (accordionListRef.current) {
        tl.fromTo(
          Array.from(accordionListRef.current.children),
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
          },
          "-=0.35"
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRequestClick = () => {
    scrollTo("#audit-form", { offset: -30 });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white"
      aria-labelledby="faq-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Heading - Center Aligned */}
        <div
          ref={headingRef}
          className="text-center flex flex-col items-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-bold tracking-wider text-[#ea580c] uppercase">
            05 &nbsp;|&nbsp; FREQUENTLY ASKED QUESTIONS
          </span>

          {/* Chat Icon */}
          

          <h2
            id="faq-section-heading"
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            A little clarity
            <span className="text-[#0040ff]"> before we start.</span>
          </h2>
        </div>

        {/* FAQ Accordion - Below Heading */}
        <div
          ref={accordionListRef}
          className="max-w-4xl mx-auto space-y-3.5 sm:space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-btn-${index}`;

            return (
              <div
                key={faq.question}
                className={`border border-dotted border-slate-300/90 transition-all duration-200 ${
                  isOpen
                    ? "bg-[#fafafa] shadow-sm border-slate-400"
                    : "bg-white hover:bg-slate-50/60 hover:border-slate-400"
                }`}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer select-none group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0040ff]"
                >
                  <span className="text-sm sm:text-[15px] font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-[#0040ff] transition-colors duration-200">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`text-lg sm:text-xl font-bold shrink-0 leading-none select-none transition-transform duration-200 ${
                      isOpen
                        ? "text-[#0040ff] rotate-180"
                        : "text-slate-800 group-hover:scale-110"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Smooth Accordion Transition */}
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

        {/* Bottom Center CTA */}
        <div
          ref={ctaRef}
          className="mt-10 sm:mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={handleRequestClick}
            className="bg-[#0040ff] hover:bg-[#0033cc] text-white font-black text-xs sm:text-[13px] tracking-wider uppercase pl-6 pr-2.5 py-2.5 rounded-none sm:rounded-sm transition-all duration-200 shadow-md hover:shadow-xl hover:scale-[1.01] cursor-pointer group active:scale-[0.99] flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0040ff]"
          >
            <span>Get My Free Growth Audit</span>
            <span className="w-8 h-8 rounded-sm bg-[#ea580c] text-white flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform duration-200 shadow-sm">
              <HiArrowRight className="w-4 h-4 text-white" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

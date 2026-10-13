
"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiPlus, HiMinus } from "react-icons/hi2";
import { FiHelpCircle } from "react-icons/fi";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

const ecomFaqs = [
  {
    question: "What does the free D2C Growth Audit include?",
    answer:
      "We conduct a deep dive into your ad accounts, store conversion funnel, audience targeting, and creative assets to identify immediate leakages and revenue opportunities for scaling your brand.",
  },
  {
    question: "Which e-commerce platforms do you work with?",
    answer:
      "We work seamlessly across Shopify, WooCommerce, Magento, Amazon, Flipkart, and custom headless e-commerce stacks, integrating server-side tracking (CAPI) and analytics APIs.",
  },
  {
    question: "Can you help improve sales without increasing ads budget?",
    answer:
      "Yes. By fixing funnel friction, improving landing page CRO, restructuring ad spend towards high-ROAS segments, and setting up retention email/SMS flows, we frequently scale revenue while keeping current spend constant.",
  },
  {
    question: "How do you measure e-commerce growth?",
    answer:
      "We look at blended ROAS, Marketing Efficiency Ratio (MER), Customer Acquisition Cost (CAC), Average Order Value (AOV), and 60-day Customer Lifetime Value (LTV), backed by server-side tracking (CAPI) and GA4.",
  },
  {
    question: "Do you work on customer retention as well as acquisition?",
    answer:
      "Absolutely. Sustainable e-commerce growth requires both acquisition and retention. We optimize post-purchase flows, win-back campaigns, repeat purchase triggers, and VIP loyalty segments.",
  },
];

export default function EcommerceFaqSection() {
  const { scrollTo } = useSmoothScroll();

  // First FAQ open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const faqListRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((previousIndex) =>
      previousIndex === index ? null : index
    );
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const elements = [
        headingRef.current,
        faqListRef.current,
        ctaRef.current,
      ].filter(Boolean);

      gsap.fromTo(
        elements,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
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
  }, []);

  const handleRequestClick = () => {
    scrollTo("#ecommerce-audit-form", { offset: -30 });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-white border-t border-slate-100"
      aria-labelledby="ecommerce-faq-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================
            FAQ HEADING - TOP CENTER
        ====================================== */}
        <div
          ref={headingRef}
          className="text-center mb-10 sm:mb-20"
        >
          {/* Section Label */}
          <span className="inline-block text-xs sm:text-[13px] font-bold text-[#ea580c] tracking-wider uppercase mb-5">
            05 &nbsp;|&nbsp; FREQUENTLY ASKED QUESTIONS
          </span>

          {/* Question Icon */}
          

          {/* Main Heading */}
          
<h2
  id="ecommerce-faq-heading"
  className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight lg:whitespace-nowrap"
>
  A little clarity before we start.
</h2>


          {/* Description */}
          
<p className="mt-5 text-sm sm:text-base text-slate-800 max-w-none mx-auto leading-relaxed font-normal lg:whitespace-nowrap">
  Have specific requirements or custom brand targets? Talk with our growth leads.
</p>

        </div>

        {/* ======================================
            FAQ ACCORDION - BELOW HEADING
        ====================================== */}
        <div
          ref={faqListRef}
          className="space-y-3.5"
        >
          {ecomFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border overflow-hidden bg-white transition-all duration-200 ${
                  isOpen
                    ? "border-[#1541e0]/30 shadow-md shadow-blue-900/5"
                    : "border-slate-200/90 shadow-sm hover:border-slate-300"
                }`}
              >
                {/* Question Button */}
                <button
                  type="button"
                  id={`ecommerce-faq-button-${index}`}
                  onClick={() => toggleFaq(index)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1541e0]"
                  aria-expanded={isOpen}
                  aria-controls={`ecommerce-faq-answer-${index}`}
                >
                  <span
                    className={`text-sm sm:text-base font-bold tracking-tight leading-snug ${
                      isOpen
                        ? "text-[#1541e0]"
                        : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus Icon */}
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-blue-50 text-[#1541e0]"
                        : "bg-slate-50 text-slate-700"
                    }`}
                  >
                    {isOpen ? (
                      <HiMinus className="w-4 h-4" />
                    ) : (
                      <HiPlus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`ecommerce-faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`ecommerce-faq-button-${index}`}
                  hidden={!isOpen}
                  className="px-5 sm:px-6 pb-5"
                >
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ======================================
            BOTTOM CTA SECTION
        ====================================== */}
        <div
          ref={ctaRef}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-slate-50/70 rounded-3xl p-7 sm:p-10 border border-slate-200/80 text-center flex flex-col items-center justify-center shadow-sm">

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Still have questions?
            </h3>

            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-lg leading-relaxed">
              Talk with our growth experts and discover
              opportunities to scale your e-commerce revenue.
            </p>

            <button
              type="button"
              onClick={handleRequestClick}
              className="mt-7 px-6 sm:px-8 py-3.5 bg-[#1541e0] hover:bg-[#0f33b8] text-white font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-[1.02] cursor-pointer active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1541e0]"
            >
              Get My Free E-commerce Audit
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

      if (leftColRef.current && rightColRef.current) {
        tl.fromTo(
          [leftColRef.current, rightColRef.current],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.15 }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRequestClick = () => {
    scrollTo("#ecommerce-audit-form", { offset: -30 });
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Accordions */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-3.5 will-change-transform will-change-opacity">
            {ecomFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-colors duration-200 bg-white shadow-2xs hover:border-slate-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-700 transition-colors duration-200">
                      {isOpen ? (
                        <HiMinus className="w-4 h-4 text-[#1541e0]" />
                      ) : (
                        <HiPlus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Information Card */}
          <div ref={rightColRef} className="lg:col-span-5 will-change-transform will-change-opacity">
            <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-10 border border-slate-200/80 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-sm">
              <span className="text-xs sm:text-[13px] font-bold text-[#ea580c] tracking-wider uppercase mb-6 block">
                05 &nbsp;|&nbsp; FREQUENTLY ASKED QUESTIONS
              </span>

              {/* Question Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 text-[#1541e0] flex items-center justify-center mb-6 shadow-sm">
                <FiHelpCircle className="w-8 h-8 text-[#1541e0]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight max-w-xs leading-snug">
                A little clarity before we start.
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xs leading-relaxed font-normal">
                Have specific requirements or custom brand targets? Talk with our growth leads.
              </p>

              <button
                type="button"
                onClick={handleRequestClick}
                className="mt-8 px-8 py-3 rounded-none sm:rounded-xs bg-[#1541e0] hover:bg-[#0f33b8] text-white font-black text-xs sm:text-[13px] tracking-wider uppercase transition-all duration-200 shadow-lg shadow-blue-600/20 hover:scale-102 cursor-pointer active:scale-98"
              >
                REQUEST NOW
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

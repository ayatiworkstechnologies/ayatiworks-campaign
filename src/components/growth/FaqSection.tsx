"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

const faqs = [
  {
    question: "What is included in the free 90-day growth roadmap call?",
    answer:
      "We discuss business objectives, current performance, channel opportunities, funnel gaps and priorities that could shape your next 90 days.",
  },
  {
    question: "How is growth marketing different from performance marketing?",
    answer:
      "Performance marketing usually focuses on measurable campaign outcomes such as leads, sales and return on ad spend. Growth marketing takes a broader view, connecting acquisition, conversion, retention, customer journeys and business objectives into one growth system.",
  },
  {
    question: "Is growth marketing suitable for B2B and SaaS businesses?",
    answer:
      "Yes. Growth marketing can support B2B and SaaS businesses by connecting demand generation, customer acquisition, activation, conversion, retention and revenue-focused marketing activities.",
  },
  {
    question: "How do you measure growth marketing success?",
    answer:
      "Success is measured against meaningful business outcomes such as qualified leads, pipeline contribution, conversion performance, customer acquisition efficiency, retention and revenue growth.",
  },
  {
    question: "What happens after the 90-day roadmap call?",
    answer:
      "After the discussion, the next step depends on your priorities. We can identify the most important opportunities, recommend areas to focus on and discuss whether Ayatiworks is the right partner to help execute the growth plan.",
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const elements = [
        headingRef.current,
        accordionListRef.current,
        ctaRef.current,
      ].filter((element): element is HTMLDivElement => element !== null);

      gsap.fromTo(
        elements,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleRequestClick = () => {
    scrollTo("#audit-form", { offset: -30 });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="growth-faq-heading"
      className="relative bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CENTERED HEADING */}
        <div ref={headingRef} className="mb-10 text-center sm:mb-14">
          <span className="block text-[11px] font-bold uppercase tracking-[0.11em] text-[#f26b21] sm:text-xs">
            05 &nbsp;|&nbsp; FREQUENTLY ASKED QUESTIONS
          </span>

          <h2
            id="growth-faq-heading"
            className="mt-5 text-[28px] font-extrabold leading-tight tracking-[-0.035em] text-[#171c27] sm:text-[36px] lg:text-[42px]"
          >
            A little clarity before we start.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#677080] sm:text-base">
            Have specific requirements or custom brand targets? Talk with our growth leads.
          </p>
        </div>

        {/* FAQ CARDS BELOW HEADING */}
        <div ref={accordionListRef} className="mx-auto max-w-4xl space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `growth-faq-content-${index}`;
            const buttonId = `growth-faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                  isOpen
                    ? "border-[#1541e0]/35 shadow-[0_4px_15px_rgba(21,65,224,0.08)]"
                    : "border-slate-200 shadow-[0_2px_5px_rgba(15,23,42,0.06)] hover:border-slate-300"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1541e0] sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-bold leading-snug tracking-tight text-slate-900 transition-colors group-hover:text-[#1541e0] sm:text-base">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${
                      isOpen
                        ? "bg-blue-50 text-[#1541e0]"
                        : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 border-t border-slate-100 pt-4 pb-5 sm:mx-6">
                      <p className="max-w-3xl text-sm leading-[1.8] text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA UNDER FAQ */}
        <div ref={ctaRef} className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={handleRequestClick}
            className="bg-[#1541e0] px-7 py-3.5 text-center text-xs font-bold uppercase tracking-wide text-white shadow-[0_5px_12px_rgba(21,65,224,0.22)] transition-all duration-200 hover:bg-[#1035c1] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1541e0] active:scale-[0.98] sm:text-sm"
          >
            GET MY FREE GROWTH ROADMAP
          </button>
        </div>
      </div>
    </section>
  );
}

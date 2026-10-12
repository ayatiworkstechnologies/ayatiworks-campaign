"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const { scrollTo } = useSmoothScroll();

  const sectionRef = useRef<HTMLElement>(null);
  const accordionListRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

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
          start: "top 82%",
          once: true,
        },
        defaults: {
          ease: "power2.out",
        },
      });

      if (accordionListRef.current) {
        tl.fromTo(
          accordionListRef.current.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
          }
        );
      }

      if (rightCardRef.current) {
        tl.fromTo(
          rightCardRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
          },
          "-=0.35"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question:
        "What is included in the free 90-day growth roadmap call?",
      answer:
        "We discuss business objectives, current performance, channel opportunities, funnel gaps and priorities that could shape your next 90 days.",
    },
    {
      question:
        "How is growth marketing different from performance marketing?",
      answer:
        "Performance marketing usually focuses on measurable campaign outcomes such as leads, sales and return on ad spend. Growth marketing takes a broader view, connecting acquisition, conversion, retention, customer journeys and business objectives into one growth system.",
    },
    {
      question:
        "Is growth marketing suitable for B2B and SaaS businesses?",
      answer:
        "Yes. Growth marketing can support B2B and SaaS businesses by connecting demand generation, customer acquisition, activation, conversion, retention and revenue-focused marketing activities.",
    },
    {
      question:
        "How do you measure growth marketing success?",
      answer:
        "Success is measured against meaningful business outcomes such as qualified leads, pipeline contribution, conversion performance, customer acquisition efficiency, retention and revenue growth.",
    },
    {
      question:
        "What happens after the 90-day roadmap call?",
      answer:
        "After the discussion, the next step depends on your priorities. We can identify the most important opportunities, recommend areas to focus on and discuss whether Ayatiworks is the right partner to help execute the growth plan.",
    },
  ];

  const handleRequestClick = () => {
    scrollTo("#audit-form", {
      offset: -30,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
        py-12
        sm:py-14
        lg:py-16
      "
    >
      <div
        className="
          mx-auto
          max-w-[1450px]
          px-5
          sm:px-8
          lg:px-10
          xl:px-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10
            lg:grid-cols-12
            lg:gap-16
          "
        >
          {/* =====================================================
              LEFT FAQ ACCORDION
          ====================================================== */}

          <div
            ref={accordionListRef}
            className="
              space-y-2
              will-change-transform
              will-change-opacity
              lg:col-span-7
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const contentId = `faq-content-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    border
                    border-dashed
                    border-[#e0e4e8]
                    bg-white
                  "
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="
                      group
                      flex
                      w-full
                      items-start
                      justify-between
                      gap-4
                      px-5
                      py-4
                      text-left
                      sm:px-6
                    "
                  >
                    <span
                      className="
                        max-w-[540px]
                        text-[13px]
                        font-extrabold
                        leading-[1.35]
                        tracking-[-0.01em]
                        text-[#1b2029]
                        transition-colors
                        duration-200
                        group-hover:text-[#1541e0]
                        sm:text-[14px]
                        lg:text-[15px]
                      "
                    >
                      {faq.question}
                    </span>

                    <span
                      className="
                        mt-[1px]
                        shrink-0
                        text-[18px]
                        font-medium
                        leading-none
                        text-[#1f2937]
                        transition-transform
                        duration-200
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-300
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <p
                        className="
                          max-w-[590px]
                          px-5
                          pb-5
                          text-[10px]
                          leading-[1.75]
                          text-[#6c7480]
                          sm:px-6
                          sm:text-[11px]
                          lg:text-[12px]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}

          <div
            ref={rightCardRef}
            className="
              will-change-transform
              will-change-opacity
              lg:col-span-5
            "
          >
            {/* FAQ LABEL */}

            <div className="mb-8 flex items-center gap-2">
              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#f26b21]
                  sm:text-[11px]
                "
              >
                05
              </span>

              <span className="h-[12px] w-px bg-[#f26b21]/70" />

              <span
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.08em]
                  text-[#f26b21]
                  sm:text-[11px]
                "
              >
                FREQUENTLY ASKED QUESTIONS.
              </span>
            </div>

            {/* =================================================
                CTA CARD
            ================================================= */}

            <div
              className="
                flex
                min-h-[250px]
                flex-col
                items-center
                justify-center
                border
                border-dashed
                border-[#e3e6ea]
                bg-white
                px-6
                py-8
                text-center
                sm:min-h-[275px]
              "
            >
              {/* CHAT ICON */}

              <div
                className="
                  mb-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  text-[#1d232d]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>

              {/* TITLE */}

              <h3
                className="
                  text-[26px]
                  font-black
                  leading-[1.18]
                  tracking-[-0.035em]
                  text-[#171c27]
                  sm:text-[30px]
                  lg:text-[32px]
                "
              >
                A little clarity
                <br />

                <span className="text-[#1541e0]">
                  before we start.
                </span>
              </h3>

              {/* BUTTON */}

              <button
                type="button"
                onClick={handleRequestClick}
                className="
                  mt-7
                  flex
                  min-h-[42px]
                  w-full
                  max-w-[310px]
                  items-center
                  justify-center
                  bg-[#1541e0]
                  px-6
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.03em]
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#1035c1]
                  hover:shadow-lg
                  active:scale-[0.99]
                  sm:text-[11px]
                "
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
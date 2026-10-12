"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CoreChallengeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const takeawayRef = useRef<HTMLDivElement>(null);

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

      if (tagRef.current) {
        tl.fromTo(
          tagRef.current,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          }
        );
      }

      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          {
            opacity: 0,
            y: 14,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
          },
          "-=0.35"
        );
      }

      if (cardsRef.current) {
        tl.fromTo(
          cardsRef.current.children,
          {
            opacity: 0,
            y: 32,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.25"
        );
      }

      if (takeawayRef.current) {
        tl.fromTo(
          takeawayRef.current,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.2"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      title: "ATTRACT",
      description:
        "Reach relevant audiences through targeted marketing and demand generation.",
      icon: (
        <svg
          className="h-5 w-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="8" r="3.5" />
          <path d="M6.5 19c.4-3.2 2.5-5 5.5-5s5.1 1.8 5.5 5" />
          <circle cx="12" cy="12" r="9" />
          <path d="M4 12H2" />
          <path d="M22 12h-2" />
          <path d="M12 4V2" />
        </svg>
      ),
    },
    {
      title: "ENGAGE",
      description:
        "Build interest and trust through valuable content and meaningful experiences.",
      icon: (
        <svg
          className="h-5 w-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3v8" />
          <path d="M8.5 5.5A7 7 0 1 0 15.5 5.5" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      title: "CONVERT",
      description:
        "Turn interested prospects into qualified leads, enquiries and customers.",
      icon: (
        <svg
          className="h-5 w-5 text-[#1541e0]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5a2 2 0 0 1 2-2h4l2 3h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-4" />
          <path d="M8 14l3 3-3 3" />
          <path d="M11 17H3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* ======================================================
            SECTION LABEL
        ====================================================== */}

        <div
          ref={tagRef}
          className="mb-4 flex items-center gap-2 will-change-transform will-change-opacity"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#f26b21] sm:text-[11px]">
            01
          </span>

          <span className="h-[12px] w-px bg-[#f26b21]/60" />

          <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#f26b21] sm:text-[11px]">
            GROWTH MODEL
          </span>
        </div>

        {/* ======================================================
            HEADING
        ====================================================== */}

        <div className="max-w-[1000px]">
          <h2
            ref={headlineRef}
            className="
              text-[28px]
              font-black
              leading-[1.14]
              tracking-[-0.035em]
              text-[#171c27]
              will-change-transform
              will-change-opacity
              sm:text-[34px]
              lg:text-[40px]
              xl:text-[42px]
            "
          >
            More Marketing Activity Doesn’t
            <br className="hidden sm:block" />
            Always Create{" "}
            <span className="text-[#1541e0]">
              More Business Growth.
            </span>
          </h2>

          <p
            ref={descRef}
            className="
              mt-5
              max-w-[1180px]
              text-[11px]
              leading-[1.9]
              text-[#6b7280]
              will-change-transform
              will-change-opacity
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            Your SEO brings visitors. Your advertising generates leads. Your
            content builds interest. Your sales team works to close
            opportunities. But when these activities operate independently,
            valuable prospects can get lost between marketing and sales. True
            growth comes from connecting every stage of the customer journey —
            from the first interaction to long-term customer relationships.
          </p>
        </div>

        {/* ======================================================
            ATTRACT / ENGAGE / CONVERT
        ====================================================== */}

        <div
          ref={cardsRef}
          className="
            mt-10
            grid
            grid-cols-1
            gap-7
            md:grid-cols-3
            md:gap-5
            lg:mt-12
            lg:gap-7
          "
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="
                relative
                flex
                w-full
                flex-col
                items-stretch
                will-change-transform
                will-change-opacity
              "
            >
              {/* TOP BLUE DOME */}

              <div
                className="
                  flex
                  min-h-[112px]
                  items-center
                  justify-center
                  rounded-t-[52px]
                  bg-[#1541e0]
                  px-5
                  py-6
                  sm:min-h-[120px]
                  lg:min-h-[122px]
                "
              >
                <div
                  className="
                    flex
                    h-[47px]
                    w-[47px]
                    items-center
                    justify-center
                    rounded-[8px]
                    bg-white
                    shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                  "
                >
                  {card.icon}
                </div>
              </div>

              {/* TITLE BAND */}

              <div
                className="
                  relative
                  flex
                  min-h-[60px]
                  items-center
                  justify-center
                  bg-white
                  px-5
                  py-4
                "
              >
                {/* divider left/right like reference */}
                {index !== 0 && (
                  <span
                    className="
                      absolute
                      -left-[11px]
                      top-1/2
                      hidden
                      h-[54px]
                      w-px
                      -translate-y-1/2
                      bg-[#d9dde4]
                      md:block
                    "
                  />
                )}

                <h3
                  className="
                    text-center
                    text-[17px]
                    font-extrabold
                    tracking-[-0.02em]
                    text-[#171c27]
                    sm:text-[18px]
                  "
                >
                  {card.title}
                </h3>
              </div>

              {/* BOTTOM BLUE */}

              <div
                className="
                  flex
                  min-h-[108px]
                  items-center
                  justify-center
                  rounded-b-[52px]
                  bg-[#1541e0]
                  px-7
                  py-6
                  text-center
                  sm:min-h-[112px]
                "
              >
                <p
                  className="
                    max-w-[270px]
                    text-[11px]
                    leading-[1.75]
                    text-white/95
                    sm:text-[12px]
                  "
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================
            BOTTOM TAKEAWAY
        ====================================================== */}

        <div
          ref={takeawayRef}
          className="
            mx-auto
            mt-10
            max-w-[1080px]
            px-2
            text-center
            will-change-transform
            will-change-opacity
            sm:mt-11
          "
        >
          <p
            className="
              text-[11px]
              leading-[1.8]
              text-[#5f6673]
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            We connect marketing channels, customer journeys and business goals
            to create a clearer path to revenue. One connected strategy. One
            measurable customer journey. A stronger foundation for sustainable
            growth.
          </p>
        </div>
      </div>
    </section>
  );
}
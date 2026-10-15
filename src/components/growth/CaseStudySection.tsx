"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiArrowUpRight } from "react-icons/hi2";
import AnimatedCounter from "../animations/AnimatedCounter";

export default function CaseStudySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const mainDividerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

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
          "-=0.3"
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
          "-=0.4"
        );
      }

      if (mainDividerRef.current) {
        tl.fromTo(
          mainDividerRef.current,
          {
            scaleX: 0,
            opacity: 0,
          },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.75,
            transformOrigin: "left center",
          },
          "-=0.25"
        );
      }

      if (leftColRef.current && rightColRef.current) {
        tl.fromTo(
          [leftColRef.current, rightColRef.current],
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.14,
          },
          "-=0.35"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      value: 10,
      suffix: "X",
      label: "Reported business growth",
    },
    {
      value: 120,
      suffix: "K+",
      label: "Retargetable Audience",
    },
    {
      value: 1.2,
      suffix: "M",
      label: "Campaign Impressions",
      decimals: 1,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
        py-14
        sm:py-16
        lg:py-20
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
        {/* =====================================================
            SECTION LABEL
        ====================================================== */}

        <div
          ref={tagRef}
          className="
            mb-4
            flex
            items-center
            gap-2
            will-change-transform
            will-change-opacity
          "
        >
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
            04
          </span>

          <span className="h-[12px] w-px bg-[#f26b21]/70" />

          <span
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.1em]
              text-[#f26b21]
              sm:text-[11px]
            "
          >
            CASE STUDY &amp; PROOF
          </span>
        </div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <div className="max-w-[1100px]">
          <h2
            ref={headlineRef}
            className="
              text-[28px]
              font-black
              leading-[1.12]
              tracking-[-0.035em]
              text-[#171c27]
              will-change-transform
              will-change-opacity
              sm:text-[34px]
              lg:text-[40px]
              xl:text-[42px]
            "
          >
            Growth Becomes More Powerful When
            <br className="hidden sm:block" />

            <span className="text-[#1541e0]">
              Everything Works Together.
            </span>
          </h2>

          <p
            ref={descRef}
            className="
              mt-5
              max-w-[1180px]
              text-[11px]
              leading-[1.85]
              text-[#667080]
              will-change-transform
              will-change-opacity
              sm:text-[12px]
              lg:text-[13px]
            "
          >
            Successful business growth is rarely the result of one campaign.
            It comes from aligning brand strategy, digital presence, customer
            communication and measurable execution.
          </p>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div
          ref={mainDividerRef}
          className="
            my-10
            h-px
            w-full
            bg-[#e2e7ec]
            will-change-transform
            sm:my-12
            lg:my-14
          "
        />

        {/* =====================================================
            CASE STUDY GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-10
            lg:grid-cols-12
            lg:gap-14
            xl:gap-20
          "
        >
          {/* ===================================================
              LEFT CONTENT
          =================================================== */}

          <div
            ref={leftColRef}
            className="
              will-change-transform
              will-change-opacity
              lg:col-span-6
            "
          >
            <span
              className="
                block
                text-[10px]
                font-extrabold
                uppercase
                tracking-[0.08em]
                text-[#f26b21]
                sm:text-[11px]
              "
            >
              APEX DURA
            </span>

            <h3
              className="
                mt-5
                text-[27px]
                font-black
                leading-[1.2]
                tracking-[-0.03em]
                text-[#20242d]
                sm:text-[31px]
                lg:text-[34px]
              "
            >
               Turning Integrated Marketing Into Business Growth.
            </h3>

            <h4
              className="
                mt-3
                text-[25px]
                font-black
                leading-[1.2]
                tracking-[-0.03em]
                text-[#1541e0]
                sm:text-[29px]
                lg:text-[32px]
              "
            >
              Into Business Growth.
            </h4>

            <p
              className="
                mt-5
                max-w-[610px]
                text-[11px]
                leading-[1.9]
                text-[#68717f]
                sm:text-[12px]
                lg:text-[13px]
              "
            >
              Ayatiworks worked with Apex Dura on a connected brand and
              marketing transformation, bringing together positioning,
              go-to-market strategy, digital presence and communication.
            </p>

            {/* TAGS */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-2
              "
            >
              <span
                className="
                  border
                  border-[#dfe4e8]
                  bg-white
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  text-[#59616d]
                  sm:text-[10px]
                "
              >
                Market Strategy
              </span>

              <span
                className="
                  border
                  border-[#dfe4e8]
                  bg-white
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  text-[#59616d]
                  sm:text-[10px]
                "
              >
                Apex Dura
              </span>

              <span
                className="
                  border
                  border-[#dfe4e8]
                  bg-white
                  px-3
                  py-1.5
                  text-[9px]
                  font-medium
                  text-[#59616d]
                  sm:text-[10px]
                "
              >
                Business Growth
              </span>
            </div>
          </div>

          {/* ===================================================
              RIGHT METRICS
          =================================================== */}

          <div
            ref={rightColRef}
            className="
              will-change-transform
              will-change-opacity
              lg:col-span-6
            "
          >
            <div
              className="
                divide-y
                divide-[#e1e6eb]
                border-b
                border-[#e1e6eb]
              "
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="
                    group
                    grid
                    grid-cols-[100px_1fr_auto]
                    items-center
                    gap-4
                    py-5
                    sm:grid-cols-[130px_1fr_auto]
                    sm:py-6
                    lg:grid-cols-[145px_1fr_auto]
                  "
                >
                  {/* NUMBER */}

                  <div>
                    <AnimatedCounter
                      value={metric.value}
                      decimals={metric.decimals ?? 0}
                      suffix={metric.suffix}
                      duration={1.2}
                      className="
                        inline-block
                        text-[31px]
                        font-black
                        leading-none
                        tracking-[-0.04em]
                        text-[#1541e0]
                        transition-transform
                        duration-200
                        group-hover:scale-105
                        sm:text-[36px]
                        lg:text-[40px]
                      "
                    />
                  </div>

                  {/* LABEL */}

                  <span
                    className="
                      text-[10px]
                      leading-[1.5]
                      text-[#68717f]
                      sm:text-[11px]
                      lg:text-[12px]
                    "
                  >
                    {metric.label}
                  </span>

                  {/* ARROW */}

                  <span
                    className="
                      flex
                      items-center
                      justify-center
                      text-[#f26b21]
                    "
                  >
                    <HiArrowUpRight
                      className="
                        h-4
                        w-4
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        sm:h-5
                        sm:w-5
                      "
                    />
                  </span>
                </div>
              ))}
            </div>

            {/* FOOTNOTE */}

            <p
              className="
                mt-4
                max-w-[610px]
                text-[9px]
                leading-[1.55]
                text-[#737b87]
                sm:text-[10px]
              "
            >
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
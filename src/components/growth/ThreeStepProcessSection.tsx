"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* =========================================================
   STEP DATA
========================================================= */

const stepsData = [
  {
    id: "diagnose",
    number: "01",
    label: "DIAGNOSE",
    title: "Discover What’s Holding Growth Back",
    description:
      "Analyse marketing channels, target audience, competitive positioning, sales funnel and conversion performance.",
    focusPrefix: "Focus: ",
    focusText:
      "existing performance, funnel challenges, KPIs and opportunities.",

    /*
      Existing project image reused so you do not get
      an image-not-found error.

      Later, if you export the exact Diagnose illustration
      from Figma, replace this with:
      /diagnose-sq.png
    */
    avatar: "/diagnose.png",
    image: "/diagnose.png",
  },

  {
    id: "activate",
    number: "02",
    label: "ACTIVATE",
    title: "Turn Strategy Into Action",
    description:
      "Prioritise marketing initiatives, connect audience acquisition, messaging, conversion experiences and lead nurturing.",
    focusPrefix: "Focus: ",
    focusText:
      "campaigns, landing pages, messaging and CRM.",

    /*
      Current SCALE image can temporarily represent
      the rocket / activation illustration.
    */
    avatar: "/activate.png",
    image: "/activate.png",
  },

  {
    id: "optimise",
    number: "03",
    label: "OPTIMISE",
    title: "Build on What Works",
    description:
      "Evaluate early signals, refine activities and direct resources toward initiatives showing the strongest business contribution.",
    focusPrefix: "Focus: ",
    focusText:
      "lead quality, efficiency and pipeline contribution.",

    avatar: "/optimize.png",
    image: "/optimize.png",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ThreeStepProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const cardContentRef = useRef<HTMLDivElement>(null);

  const circlesWrapRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     STEP CLICK
  ======================================================= */

  const handleStepChange = (index: number) => {
    if (index === activeStep) return;

    setActiveStep(index);

    if (cardContentRef.current) {
      gsap.fromTo(
        cardContentRef.current,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        }
      );
    }

    if (circlesWrapRef.current) {
      gsap.fromTo(
        circlesWrapRef.current.children,
        {
          opacity: 0.55,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }
  };

  /* =======================================================
     ENTRANCE ANIMATION
  ======================================================= */

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

      /* label */
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

      /* headline */
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current,
          {
            opacity: 0,
            y: 20,
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

      /* right description */
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

      /* detailed card */
      if (cardRef.current) {
        tl.fromTo(
          cardRef.current,
          {
            opacity: 0,
            x: -25,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
          },
          "-=0.25"
        );
      }

      /* circles */
      if (circlesWrapRef.current) {
        tl.fromTo(
          circlesWrapRef.current.children,
          {
            opacity: 0,
            scale: 0.9,
            y: 18,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: "back.out(1.15)",
          },
          "-=0.45"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =======================================================
     CURRENT / OTHER STEPS
  ======================================================= */

  const currentStep = stepsData[activeStep];

  const otherSteps = stepsData
    .map((step, index) => ({
      ...step,
      index,
    }))
    .filter((step) => step.index !== activeStep);

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
        {/* =================================================
            SECTION LABEL
        ================================================= */}

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
            02
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
            90-DAY GROWTH PLAN
          </span>
        </div>

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-11
            grid
            grid-cols-1
            gap-6
            md:grid-cols-12
            lg:mb-14
          "
        >
          {/* LEFT HEADING */}

          <div className="md:col-span-6">
            <h2
              ref={headlineRef}
              className="
                text-[28px]
                font-black
                leading-[1.13]
                tracking-[-0.035em]
                text-[#171c27]
                will-change-transform
                will-change-opacity
                sm:text-[34px]
                lg:text-[40px]
                xl:text-[42px]
              "
            >
              90 Days. Clear Priorities.
              <br />

              <span className="text-[#1541e0]">
                Measurable Progress.
              </span>
            </h2>
          </div>

          {/* RIGHT DESCRIPTION */}

          <div
            className="
              flex
              items-start
              md:col-span-6
              md:justify-end
              md:pt-1
            "
          >
            <p
              ref={descRef}
              className="
                max-w-[560px]
                text-[11px]
                leading-[1.85]
                text-[#677080]
                will-change-transform
                will-change-opacity
                sm:text-[12px]
                lg:text-[13px]
              "
            >
              Business growth requires direction, prioritisation and continuous
              improvement. Our 90-day framework connects marketing activities
              with a structured plan.
            </p>
          </div>
        </div>

        {/* =================================================
            PROCESS CONTENT
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-12
            lg:gap-12
            xl:gap-16
          "
        >
          {/* =================================================
              LEFT ACTIVE CARD
          ================================================= */}

          <div
            ref={cardRef}
            className="
              relative
              overflow-hidden
              rounded-[14px]
              border
              border-[#e4e7eb]
              bg-white
              px-5
              py-6
              shadow-[0_5px_15px_rgba(15,23,42,0.12)]
              will-change-transform
              will-change-opacity
              sm:px-6
              sm:py-7
              lg:col-span-5
              lg:min-h-[255px]
            "
          >
            <div
              ref={cardContentRef}
              className="
                flex
                min-h-[205px]
                flex-col
                justify-center
              "
            >
              {/* STEP LABEL */}

              <div className="mb-5 flex items-center gap-3">
                <div
                  className="
                    relative
                    h-[42px]
                    w-[42px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    border
                    border-[#cbd5e1]
                    bg-[#f5f9ff]
                    shadow-sm
                  "
                >
                  <Image
                    src={currentStep.avatar}
                    alt={currentStep.label}
                    fill
                    sizes="42px"
                    className="object-cover"
                  />
                </div>

                <span
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[0.03em]
                    text-[#1541e0]
                    sm:text-[12px]
                  "
                >
                  {currentStep.label}
                </span>
              </div>

              {/* TITLE */}

              <h3
                className="
                  mb-3
                  text-[18px]
                  font-extrabold
                  leading-[1.25]
                  tracking-[-0.02em]
                  text-[#20242d]
                  sm:text-[20px]
                  lg:text-[21px]
                "
              >
                {currentStep.title}
              </h3>

              {/* DESCRIPTION */}

              <p
                className="
                  mb-5
                  max-w-[540px]
                  text-[11px]
                  leading-[1.8]
                  text-[#747b87]
                  sm:text-[12px]
                "
              >
                {currentStep.description}
              </p>

              {/* FOCUS */}

              <p
                className="
                  text-[10px]
                  leading-[1.7]
                  text-[#677080]
                  sm:text-[11px]
                "
              >
                <span className="font-medium text-[#353b46]">
                  {currentStep.focusPrefix}
                </span>

                {currentStep.focusText}
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT TWO CIRCLES
          ================================================= */}

          <div
            ref={circlesWrapRef}
            className="
              flex
              items-start
              justify-center
              gap-5
              sm:gap-10
              md:gap-12
              lg:col-span-7
              lg:justify-end
              xl:gap-14
            "
          >
            {otherSteps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => handleStepChange(step.index)}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  border-0
                  bg-transparent
                  p-0
                  text-center
                  outline-none
                  will-change-transform
                  will-change-opacity
                "
                aria-label={`View ${step.label} step`}
              >
                {/* CIRCLE */}

                <div
                  className="
                    relative
                    h-[135px]
                    w-[135px]
                    overflow-hidden
                    rounded-full
                    border
                    border-[#d8dadd]
                    bg-[#fbfbfc]
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:border-[#1541e0]/40
                    group-hover:shadow-[0_8px_24px_rgba(21,65,224,0.10)]
                    sm:h-[165px]
                    sm:w-[165px]
                    lg:h-[180px]
                    lg:w-[180px]
                    xl:h-[195px]
                    xl:w-[195px]
                  "
                >
                  <Image
                    src={step.image}
                    alt={`${step.label} growth stage`}
                    fill
                    sizes="
                      (max-width: 640px) 135px,
                      (max-width: 1024px) 165px,
                      195px
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* LABEL */}

                <span
                  className="
                    mt-3
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.02em]
                    text-[#1541e0]
                    transition-transform
                    duration-200
                    group-hover:scale-105
                    sm:text-[12px]
                  "
                >
                  {step.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
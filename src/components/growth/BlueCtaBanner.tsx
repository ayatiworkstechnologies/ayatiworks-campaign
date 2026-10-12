"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HiArrowRight,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { useSmoothScroll } from "../animations/SmoothScrollProvider";

export default function BlueCtaBanner() {
  const { scrollTo } = useSmoothScroll();

  const bannerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaBtnRef = useRef<HTMLDivElement>(null);

  /* =========================================================
     SCROLL ANIMATION
  ========================================================= */

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 82%",
          once: true,
        },

        defaults: {
          ease: "power2.out",
        },
      });

      /* Heading */
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
          }
        );
      }

      /* Description */
      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          {
            opacity: 0,
            y: 12,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.4"
        );
      }

      /* CTA */
      if (ctaBtnRef.current) {
        tl.fromTo(
          ctaBtnRef.current,
          {
            opacity: 0,
            scale: 0.96,
            y: 10,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.1)",
          },
          "-=0.3"
        );
      }
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     CTA SCROLL
  ========================================================= */

  const handleCtaClick = () => {
    scrollTo("#audit-form", {
      offset: -30,
    });
  };

  return (
    <section
      ref={bannerRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#1541e0]
        py-10
        text-white
        sm:py-12
        lg:py-14
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          -top-[120px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#3968ff]/30
          blur-[90px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[150px]
          right-[4%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#0c2eb8]/35
          blur-[100px]
        "
      />

      {/* subtle texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.06]
          [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)]
          [background-size:8px_8px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
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
            items-center
            gap-8
            lg:grid-cols-12
            lg:gap-12
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              lg:col-span-6
            "
          >
            <h2
              ref={headlineRef}
              className="
                max-w-[630px]
                text-[27px]
                font-black
                leading-[1.18]
                tracking-[-0.03em]
                text-white
                will-change-transform
                will-change-opacity
                sm:text-[32px]
                lg:text-[36px]
                xl:text-[38px]
              "
            >
              Your Next Stage of Growth Starts
              <br className="hidden sm:block" />
              With a Clearer Plan.
            </h2>

            <p
              ref={descRef}
              className="
                mt-4
                max-w-[560px]
                text-[11px]
                leading-[1.8]
                text-white/75
                will-change-transform
                will-change-opacity
                sm:text-[12px]
                lg:text-[13px]
              "
            >
              Discover where your marketing strategy can work harder, which
              opportunities deserve attention and how to build a more connected
              approach to business growth.
            </p>
          </div>

          {/* =================================================
              RIGHT CTA
          ================================================= */}

          <div
            ref={ctaBtnRef}
            className="
              flex
              w-full
              flex-col
              items-start
              will-change-transform
              will-change-opacity
              lg:col-span-6
              lg:items-center
            "
          >
            <div className="flex w-full flex-col items-start sm:w-auto">
              {/* CTA BUTTON */}

              <button
                type="button"
                onClick={handleCtaClick}
                className="
                  group
                  inline-flex
                  min-h-[38px]
                  w-full
                  items-center
                  justify-between
                  gap-2
                  bg-white
                  px-3
                  py-1.5
                  text-[#1541e0]
                  shadow-[0_5px_15px_rgba(0,0,0,0.08)]
                  transition-all
                  duration-200
                  hover:bg-[#f7f9ff]
                  hover:shadow-[0_7px_18px_rgba(0,0,0,0.12)]
                  active:scale-[0.99]
                  sm:w-auto
                "
              >
                <span
                  className="
                    text-left
                    text-[10px]
                    font-black
                    uppercase
                    leading-tight
                    tracking-[0.01em]
                    sm:text-[11px]
                    lg:text-[12px]
                  "
                >
                  GET YOUR FREE 90-DAY GROWTH ROADMAP CALL
                </span>

                <span
                  className="
                    flex
                    h-[25px]
                    w-[25px]
                    shrink-0
                    items-center
                    justify-center
                    bg-[#f47721]
                    text-white
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                  "
                >
                  <HiArrowRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>
              </button>

              {/* NOTE */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-1.5
                  text-[10px]
                  text-white/70
                  sm:text-[11px]
                "
              >
                <HiOutlineShieldCheck
                  className="
                    h-3.5
                    w-3.5
                    shrink-0
                    text-white/75
                  "
                />

                <span>
                  A fresh perspective. No obligation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
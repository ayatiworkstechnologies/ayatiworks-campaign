"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* =========================================================
   LEFT ILLUSTRATION
   Marketing funnel + analytics dashboard
========================================================= */

function LeftGrowthIllustration() {
  return (
    <div className="relative h-[220px] w-[310px] sm:h-[250px] sm:w-[350px] lg:h-[285px] lg:w-[390px]">
      {/* Soft background */}
      <div className="absolute left-2 top-5 h-[205px] w-[205px] rounded-full bg-[#eef7ff]" />

      {/* dotted connector */}
      <svg
        className="absolute -left-20 top-[96px] h-[95px] w-[190px]"
        viewBox="0 0 190 95"
        fill="none"
      >
        <path
          d="M0 55C39 55 52 7 101 30C134 45 151 75 188 66"
          stroke="#46b8ff"
          strokeWidth="1.6"
          strokeDasharray="3 4"
        />
      </svg>

      {/* floating user circles */}
      <div className="absolute left-[44px] top-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-[#38a9ef] text-[12px] text-white shadow">
        ●
      </div>

      <div className="absolute left-[12px] top-[35px] flex h-5 w-5 items-center justify-center rounded-full bg-[#7ccdf5] text-[8px] text-white shadow">
        ●
      </div>

      <div className="absolute left-[85px] top-[29px] flex h-6 w-6 items-center justify-center rounded-full bg-[#32b59a] text-[9px] text-white shadow">
        ●
      </div>

      {/* Funnel */}
      <div className="absolute left-[8px] top-[48px]">
        <svg width="95" height="90" viewBox="0 0 95 90" fill="none">
          <path
            d="M7 5H88L76 24H19L7 5Z"
            fill="#67c9f7"
          />
          <path
            d="M20 29H75L65 47H30L20 29Z"
            fill="#44b5d8"
          />
          <path
            d="M31 52H64L56 68H39L31 52Z"
            fill="#46b9a7"
          />
          <path
            d="M40 72H55L51 88H44L40 72Z"
            fill="#2e9fc2"
          />
        </svg>
      </div>

      {/* user list card */}
      <div className="absolute left-[100px] top-[30px] w-[107px] rounded-xl border border-[#e3edf5] bg-white px-3 py-3 shadow-[0_10px_30px_rgba(59,130,246,0.08)]">
        {[1, 2, 3].map((item) => (
          <div key={item} className="mb-2 flex items-center gap-2 last:mb-0">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#e4f4ff]">
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 text-[#37a7e7]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="8" r="3" />
                <path d="M6 19c0-3 2.5-5 6-5s6 2 6 5" />
              </svg>
            </span>

            <span className="h-[4px] flex-1 rounded-full bg-[#dce6ef]" />

            <span className="h-2 w-2 rounded-full bg-[#2fc5a3]" />
          </div>
        ))}
      </div>

      {/* Main Analytics Card */}
      <div className="absolute bottom-[15px] left-[-35px] w-[165px] rounded-lg border border-[#dce8f1] bg-white p-3 shadow-[0_10px_25px_rgba(59,130,246,0.1)]">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[8px] font-bold text-[#334155]">
            Growth Overview
          </span>

          <span className="h-1.5 w-6 rounded-full bg-[#d7f4eb]" />
        </div>

        <svg
          viewBox="0 0 140 55"
          className="h-[55px] w-full"
          fill="none"
        >
          <path
            d="M0 41C13 35 22 38 33 29C46 18 56 31 70 23C83 16 91 19 104 12C116 5 125 10 140 3"
            stroke="#48b7f1"
            strokeWidth="2"
          />

          <path
            d="M0 46C19 44 28 35 41 38C59 42 68 33 82 35C101 37 116 24 140 22"
            stroke="#42c8ac"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* small stats bars */}
      <div className="absolute bottom-[-2px] left-[105px] flex h-[76px] w-[87px] items-end gap-2 rounded-lg border border-[#e2ebf2] bg-white px-3 pb-3 shadow-sm">
        <div className="h-5 w-3 rounded-t bg-[#b6e6ff]" />
        <div className="h-8 w-3 rounded-t bg-[#77ccf5]" />
        <div className="h-12 w-3 rounded-t bg-[#4cb8ed]" />
        <div className="h-9 w-3 rounded-t bg-[#37c0aa]" />
      </div>

      {/* target */}
      <div className="absolute bottom-[31px] left-[188px] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white shadow">
        <svg
          viewBox="0 0 64 64"
          className="h-[52px] w-[52px]"
          fill="none"
        >
          <circle
            cx="32"
            cy="32"
            r="25"
            stroke="#73c7f5"
            strokeWidth="3"
          />
          <circle
            cx="32"
            cy="32"
            r="16"
            stroke="#4faeed"
            strokeWidth="3"
          />
          <circle
            cx="32"
            cy="32"
            r="7"
            fill="#387eea"
          />
        </svg>
      </div>
    </div>
  );
}

/* =========================================================
   RIGHT ILLUSTRATION
   Dashboard + checklist + rising revenue chart
========================================================= */

function RightGrowthIllustration() {
  return (
    <div className="relative h-[220px] w-[310px] sm:h-[250px] sm:w-[350px] lg:h-[285px] lg:w-[390px]">
      {/* Large background */}
      <div className="absolute right-0 top-1 h-[230px] w-[230px] rounded-full bg-[#eef8ff]" />

      {/* Main dashboard */}
      <div className="absolute right-[52px] top-[32px] w-[184px] rounded-xl border border-[#dceaf3] bg-white p-3 shadow-[0_12px_30px_rgba(59,130,246,0.08)]">
        <div className="mb-3 h-2 w-12 rounded-full bg-[#80b9ec]" />

        <div className="grid grid-cols-3 gap-2">
          {[
            "#e4edff",
            "#dce8ff",
            "#d7f7ed",
          ].map((bg, index) => (
            <div
              key={index}
              className="rounded-md bg-[#f8fafc] p-2"
            >
              <div
                className="mb-2 h-2 w-full rounded-full"
                style={{ backgroundColor: bg }}
              />
              <div className="mb-1 h-[4px] w-4/5 rounded-full bg-[#dce3eb]" />
              <div className="h-[4px] w-3/5 rounded-full bg-[#edf1f5]" />
            </div>
          ))}
        </div>
      </div>

      {/* Small chart card */}
      <div className="absolute bottom-[30px] left-[58px] w-[92px] rounded-lg border border-[#e2ebf2] bg-white p-3 shadow">
        <div className="mb-2 h-[5px] w-8 rounded-full bg-[#dee7ef]" />

        <div className="flex h-[58px] items-end gap-2">
          <span className="h-4 w-3 rounded-t bg-[#a9e6d8]" />
          <span className="h-7 w-3 rounded-t bg-[#75d7c3]" />
          <span className="h-10 w-3 rounded-t bg-[#4ec6ae]" />
          <span className="h-12 w-3 rounded-t bg-[#40b4e8]" />
        </div>
      </div>

      {/* Checklist card */}
      <div className="absolute bottom-[11px] right-[77px] w-[105px] rounded-lg border border-[#e2ebf2] bg-white px-3 py-3 shadow">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="mb-2 flex items-center gap-2 last:mb-0"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#d8f6ed] text-[#2cbc9f]">
              ✓
            </span>

            <span className="h-[4px] flex-1 rounded-full bg-[#e4e9ef]" />
          </div>
        ))}
      </div>

      {/* Rising Chart */}
      <svg
        className="absolute bottom-[6px] right-[-18px] h-[116px] w-[160px]"
        viewBox="0 0 160 116"
        fill="none"
      >
        {/* bars */}
        <rect
          x="14"
          y="81"
          width="16"
          height="29"
          rx="2"
          fill="#9bdded"
        />
        <rect
          x="37"
          y="69"
          width="16"
          height="41"
          rx="2"
          fill="#68c8e9"
        />
        <rect
          x="60"
          y="55"
          width="16"
          height="55"
          rx="2"
          fill="#44b5e3"
        />
        <rect
          x="83"
          y="38"
          width="16"
          height="72"
          rx="2"
          fill="#37c0a5"
        />
        <rect
          x="106"
          y="20"
          width="16"
          height="90"
          rx="2"
          fill="#20b395"
        />

        {/* growth line */}
        <path
          d="M5 96C30 86 44 77 59 67C76 55 88 52 104 37C119 24 130 18 150 7"
          stroke="#28bba0"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* arrow */}
        <path
          d="M139 8L151 7L149 19"
          stroke="#28bba0"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* decorative curve */}
      <svg
        className="absolute -bottom-[24px] -right-[35px] h-[90px] w-[260px]"
        viewBox="0 0 260 90"
        fill="none"
      >
        <path
          d="M0 85C62 30 139 101 260 16"
          stroke="#6bd6c0"
          strokeWidth="1.8"
          strokeDasharray="4 5"
        />
      </svg>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function DashboardShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const leftIllustrationRef = useRef<HTMLDivElement>(null);
  const rightIllustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          once: true,
        },
      });

      if (headingRef.current) {
        timeline.fromTo(
          headingRef.current,
          {
            opacity: 0,
            y: 22,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
          }
        );
      }

      if (descriptionRef.current) {
        timeline.fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 15,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      if (
        leftIllustrationRef.current &&
        rightIllustrationRef.current
      ) {
        timeline.fromTo(
          [
            leftIllustrationRef.current,
            rightIllustrationRef.current,
          ],
          {
            opacity: 0,
            y: 20,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.45"
        );
      }

      if (chipsRef.current) {
        timeline.fromTo(
          chipsRef.current.children,
          {
            opacity: 0,
            y: 12,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.08,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        border-b
        border-[#dcebf5]
        bg-white
        pt-7
        sm:pt-9
        lg:pt-4
      "
    >
      {/* =========================================
          SOFT BACKGROUND SHAPES
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[110px]
          bottom-[-120px]
          h-[270px]
          w-[420px]
          rounded-[50%]
          bg-[#eff9ff]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[120px]
          bottom-[-120px]
          h-[280px]
          w-[450px]
          rounded-[50%]
          bg-[#eef8ff]
        "
      />

      {/* =========================================
          DESKTOP / TABLET LAYOUT
      ========================================== */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-[310px]
          w-full
          max-w-[1500px]
          items-end
          justify-between
          px-0
        "
      >
        {/* LEFT ILLUSTRATION */}

        <div
          ref={leftIllustrationRef}
          className="
            hidden
            lg:flex
            w-[31%]
            items-end
            justify-start
            self-end
            will-change-transform
            will-change-opacity
          "
        >
          <LeftGrowthIllustration />
        </div>

        {/* =========================================
            CENTER CONTENT
        ========================================== */}

        <div
          className="
            relative
            z-20
            mx-auto
            flex
            w-full
            max-w-[650px]
            flex-col
            items-center
            px-5
            pb-6
            text-center
            sm:px-8
            lg:w-[40%]
            lg:px-0
            lg:pb-7
          "
        >
          {/* Heading */}

          <h2
            ref={headingRef}
            className="
              text-[26px]
              font-black
              leading-[1.12]
              tracking-[-0.035em]
              text-[#161c28]
              will-change-transform
              will-change-opacity
              sm:text-[31px]
              lg:text-[31px]
              xl:text-[34px]
            "
          >
            Growth Marketing & Revenue
            <br />

            <span className="text-[#1541e0]">
              Agency
            </span>
          </h2>

          {/* Description */}

          <p
            ref={descriptionRef}
            className="
              mt-5
              max-w-[590px]
              text-[11px]
              font-normal
              leading-[1.9]
              text-[#657080]
              will-change-transform
              will-change-opacity
              sm:text-[12px]
              lg:text-[12px]
            "
          >
            Stop managing disconnected marketing activities.
            Start building a smarter, data-driven growth engine
            that connects every customer interaction to your
            business objectives.
          </p>

          {/* =====================================
              MOBILE ILLUSTRATIONS
          ====================================== */}

          <div
            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              overflow-hidden
              lg:hidden
            "
          >
            <div className="scale-[0.70] sm:scale-[0.8]">
              <LeftGrowthIllustration />
            </div>

            <div className="hidden sm:block scale-[0.8]">
              <RightGrowthIllustration />
            </div>
          </div>

          {/* =====================================
              THREE CHIPS
          ====================================== */}

          <div
            ref={chipsRef}
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              sm:gap-3
              lg:mt-7
            "
          >
            {/* Growth Strategy */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-[6px]
                border
                border-[#cad5ff]
                bg-[#dfe5ff]
                px-3
                py-[7px]
                text-[10px]
                font-medium
                text-[#596375]
                shadow-[0_2px_6px_rgba(30,64,175,0.04)]
                sm:text-[11px]
              "
            >
              <svg
                className="h-[17px] w-[17px] shrink-0 text-[#1541e0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 17l5-5 4 3 7-8" />
                <path d="M15 7h4v4" />
                <path d="M3 21V3" />
              </svg>

              <span>Growth Strategy</span>
            </div>

            {/* Funnel Optimisation */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-[6px]
                border
                border-[#cad5ff]
                bg-[#dfe5ff]
                px-3
                py-[7px]
                text-[10px]
                font-medium
                text-[#596375]
                shadow-[0_2px_6px_rgba(30,64,175,0.04)]
                sm:text-[11px]
              "
            >
              <svg
                className="h-[17px] w-[17px] shrink-0 text-[#1541e0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z" />
              </svg>

              <span>Funnel Optimisation</span>
            </div>

            {/* Revenue Focused */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-[6px]
                border
                border-[#cad5ff]
                bg-[#dfe5ff]
                px-3
                py-[7px]
                text-[10px]
                font-medium
                text-[#596375]
                shadow-[0_2px_6px_rgba(30,64,175,0.04)]
                sm:text-[11px]
              "
            >
              <svg
                className="h-[17px] w-[17px] shrink-0 text-[#1541e0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="10" cy="10" r="6" />
                <path d="M14.5 14.5L21 21" />
                <path d="M7 11l2-2 2 1 2-3" />
              </svg>

              <span>
                Revenue-Focused Marketing
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}

        <div
          ref={rightIllustrationRef}
          className="
            hidden
            lg:flex
            w-[31%]
            items-end
            justify-end
            self-end
            will-change-transform
            will-change-opacity
          "
        >
          <RightGrowthIllustration />
        </div>
      </div>

      {/* =========================================
          BOTTOM DECORATIVE CURVES
      ========================================== */}

      <svg
        className="
          pointer-events-none
          absolute
          bottom-[-1px]
          left-0
          h-[75px]
          w-full
        "
        viewBox="0 0 1440 75"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 56C150 19 245 71 391 62"
          stroke="#58b8ff"
          strokeWidth="1.5"
          strokeDasharray="4 5"
          opacity="0.65"
        />

        <path
          d="M1040 73C1150 62 1252 17 1440 26"
          stroke="#63d7c0"
          strokeWidth="2"
          opacity="0.75"
        />
      </svg>
    </section>
  );
}
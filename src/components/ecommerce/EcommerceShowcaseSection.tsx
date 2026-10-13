
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  FiTrendingUp,
  FiCheckCircle,
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
  FiBarChart2,
  FiArrowUpRight,
  FiPackage,
  FiSmartphone,
} from "react-icons/fi";

// ============================================
// SAMPLE DASHBOARD METRICS
// Replace with verified numbers before publishing
// ============================================

const monthlyOrders = 4280;
const averageDailyOrders = Math.round(monthlyOrders / 30);

const metrics = [
  {
    label: "Monthly D2C Revenue",
    value: "₹24,85,920",
    sub: "+38.4% MoM",
    color: "text-slate-900",
  },
  {
    label: "Blended ROAS",
    value: "4.82x",
    sub: "Sample performance",
    color: "text-[#1541e0]",
  },
  {
    label: "Delivered Orders (Monthly)",
    value: monthlyOrders.toLocaleString("en-IN"),
    sub: "98.6% Fulfillment",
    color: "text-slate-900",
  },
  {
    label: "Repeat Purchase Rate",
    value: "32.6%",
    sub: "Sample retention",
    color: "text-slate-900",
  },
];

// ============================================
// SAMPLE REVENUE CHART
// ============================================

const chartData = [35, 47, 41, 60, 55, 68, 64, 81, 76, 92, 86, 100];

function RevenueChart() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs text-slate-500">
            Revenue Performance
          </p>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            ₹24,85,920
          </h3>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">
          <FiArrowUpRight className="w-3.5 h-3.5" />
          <span className="text-xs font-bold">
            38.4%
          </span>
        </div>
      </div>

      <div className="relative h-32 sm:h-44 border-b border-slate-200">
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[1, 2, 3, 4].map((line) => (
            <div
              key={line}
              className="border-t border-dashed border-slate-200"
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-end justify-between gap-1.5 sm:gap-3 px-1">
          {chartData.map((height, index) => (
            <div
              key={index}
              className="group relative flex-1 flex items-end h-full"
            >
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-[#1541e0] to-[#60a5fa] transition-all duration-500 group-hover:from-[#1033bd] group-hover:to-[#1541e0]"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-3 text-[10px] sm:text-xs text-slate-400 font-medium">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Dec</span>
      </div>
    </div>
  );
}

// ============================================
// E-COMMERCE DASHBOARD VISUAL
// All values use Indian currency
// ============================================

function EcommerceDashboardVisual() {
  return (
    <div className="relative w-full min-h-[350px] sm:min-h-[440px] lg:min-h-[510px] bg-gradient-to-br from-[#edf5ff] via-[#e4efff] to-[#d9eafe] overflow-hidden rounded-2xl">

      {/* Decorative background */}
      <div className="absolute -top-16 -right-20 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl pointer-events-none" />

      {/* Top left badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-lg border border-slate-200/70">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] sm:text-xs font-bold text-slate-800">
          Omnichannel Scale Engine
        </span>
      </div>

      {/* Main layout */}
      <div className="relative z-10 flex items-center justify-center min-h-[350px] sm:min-h-[440px] lg:min-h-[510px] px-4 sm:px-10 pt-16 pb-20">

        <div className="w-full max-w-[680px]">

          {/* Laptop screen */}
          <div className="relative bg-[#17233d] rounded-t-2xl border-[5px] sm:border-[9px] border-[#17233d] shadow-[0_25px_55px_rgba(30,64,175,0.18)]">

            <div className="rounded-lg bg-white overflow-hidden">

              {/* Dashboard top navigation */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-[#f8fbff]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#1541e0] text-white flex items-center justify-center">
                    <FiShoppingBag className="w-4 h-4" />
                  </div>

                  <div>
                    <p className="text-[10px] sm:text-xs font-black text-slate-900">
                      E-commerce Growth Dashboard
                    </p>
                    <p className="text-[9px] text-slate-400">
                      Sample analytics overview
                    </p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-slate-500">
                    Overview
                  </span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-3 sm:p-5">

                {/* Small metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">

                  <div className="rounded-xl bg-blue-50 p-2.5 sm:p-3">
                    <p className="text-[9px] sm:text-[10px] text-slate-500">
                      Revenue
                    </p>
                    <p className="text-xs sm:text-base font-black text-[#1541e0]">
                      ₹24.85L
                    </p>
                  </div>

                  <div className="rounded-xl bg-emerald-50 p-2.5 sm:p-3">
                    <p className="text-[9px] sm:text-[10px] text-slate-500">
                      Orders / Month
                    </p>
                    <p className="text-xs sm:text-base font-black text-emerald-700">
                      4,280
                    </p>
                  </div>

                  <div className="rounded-xl bg-orange-50 p-2.5 sm:p-3">
                    <p className="text-[9px] sm:text-[10px] text-slate-500">
                      ROAS
                    </p>
                    <p className="text-xs sm:text-base font-black text-orange-600">
                      4.82x
                    </p>
                  </div>
                </div>

                {/* Revenue chart */}
                <RevenueChart />

                {/* Bottom dashboard summary */}
                <div className="grid grid-cols-2 gap-3 mt-4">

                  <div className="flex items-center gap-2 rounded-xl border border-slate-100 p-2.5">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 text-[#1541e0] flex items-center justify-center shrink-0">
                      <FiPackage className="w-4 h-4" />
                    </span>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Delivered Orders
                      </p>
                      <p className="text-xs sm:text-sm font-black text-slate-900">
                        4,280 / Month
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-100 p-2.5">
                    <span className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <FiTruck className="w-4 h-4" />
                    </span>

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Average Daily Orders
                      </p>
                      <p className="text-xs sm:text-sm font-black text-slate-900">
                        {averageDailyOrders}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Laptop base */}
          <div className="relative h-3 sm:h-5 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-2xl mx-[-8px] sm:mx-[-22px] shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-36 h-1.5 rounded-b-lg bg-slate-500/30" />
          </div>

          {/* Bottom laptop shadow */}
          <div className="h-5 mx-auto w-[85%] bg-blue-800/10 rounded-full blur-xl" />

        </div>
      </div>

      {/* Floating cart icon */}
      <div className="absolute top-[22%] right-[5%] hidden md:flex w-12 h-12 bg-white shadow-xl rounded-2xl items-center justify-center text-[#1541e0] animate-bounce">
        <FiShoppingBag className="w-6 h-6" />
      </div>

      {/* Floating payment icon */}
      <div className="absolute top-[35%] left-[3%] hidden md:flex w-12 h-12 bg-white shadow-xl rounded-2xl items-center justify-center text-emerald-600">
        <FiCreditCard className="w-6 h-6" />
      </div>

      {/* Floating analytics icon */}
      <div className="absolute bottom-[28%] right-[2%] hidden lg:flex w-12 h-12 bg-white shadow-xl rounded-2xl items-center justify-center text-orange-500">
        <FiBarChart2 className="w-6 h-6" />
      </div>

      {/* Floating mobile commerce icon */}
      <div className="absolute bottom-[24%] left-[2%] hidden lg:flex w-12 h-12 bg-white shadow-xl rounded-2xl items-center justify-center text-blue-500">
        <FiSmartphone className="w-6 h-6" />
      </div>

      {/* Daily Orders Badge */}
      <div className="absolute bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#1541e0] text-white flex items-center justify-center">
          <FiTruck className="w-4 h-4" />
        </div>

        <div>
          <span className="text-[10px] text-slate-400 block leading-tight">
            Order Velocity
          </span>
          <span className="text-xs font-black text-slate-900 block">
            {averageDailyOrders} Avg. Daily Orders
          </span>
        </div>
      </div>

    </div>
  );
}

// ============================================
// MAIN SHOWCASE SECTION
// ============================================

export default function EcommerceShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const showcaseWrapRef = useRef<HTMLDivElement>(null);

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
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power3.out",
          }
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.45"
        );
      }

      if (chipsRef.current) {
        tl.fromTo(
          chipsRef.current.children,
          { y: 16, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.55,
            stagger: 0.1,
          },
          "-=0.4"
        );
      }

      if (showcaseWrapRef.current) {
        tl.fromTo(
          showcaseWrapRef.current,
          { y: 35, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white py-14 lg:py-20 border-b border-slate-100"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2
          ref={headingRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]"
        >
          E-commerce / D2C Growth
          <br />
          <span className="text-[#1541e0]">
            Agency.
          </span>
        </h2>

        {/* Description */}
        <p
          ref={descRef}
          className="mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal"
        >
          We build scalable growth engines for modern D2C &amp;
          e-commerce brands — combining performance marketing,
          creative strategy, CRO, and lifecycle retention to turn
          clicks into profitable, repeatable orders.
        </p>

        {/* Feature Pills */}
        <div
          ref={chipsRef}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70">
            <HiOutlineLightningBolt className="w-4 h-4 text-[#1541e0]" />
            Performance Marketing
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70">
            <FiTrendingUp className="w-4 h-4 text-[#1541e0]" />
            Conversion - Funnel - Retention
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#dbe4ff] text-slate-800 text-xs sm:text-[13px] font-semibold border border-blue-200/70">
            <FiCheckCircle className="w-4 h-4 text-[#1541e0]" />
            Google Ads &amp; Meta Specialists
          </div>
        </div>

        {/* Showcase */}
        <div
          ref={showcaseWrapRef}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto relative"
        >
          <div className="relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-md p-2 sm:p-4 border border-slate-200/80 shadow-2xl shadow-blue-500/10">

            {/* Sample label */}
            <div className="flex justify-start px-2 pt-2 pb-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
                Sample dashboard
              </span>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pb-3 px-2 text-left">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-sm"
                >
                  <span className="text-[10px] text-slate-400 block font-medium">
                    {metric.label}
                  </span>

                  <span className={`text-xs sm:text-sm font-extrabold block mt-1 ${metric.color}`}>
                    {metric.value}
                  </span>

                  <span className="text-[9px] font-semibold text-emerald-600 block mt-1">
                    {metric.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Dashboard */}
            <EcommerceDashboardVisual />

          </div>
        </div>

      </div>
    </section>
  );
}

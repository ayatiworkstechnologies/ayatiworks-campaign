
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className = "",
}: AnimatedCounterProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  // Format numbers using Indian numbering system
  // 240375 -> 2,40,375
  // 16666  -> 16,666
  // 123    -> 123
  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-IN", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Reduced motion: display formatted final value
    if (prefersReducedMotion) {
      el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
      return;
    }

    let tween: gsap.core.Tween | null = null;
    const counterObj = { current: 0 };
    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          el.textContent = `${prefix}${formatNumber(0)}${suffix}`;

          tween = gsap.to(counterObj, {
            current: value,
            duration,
            ease: "power2.out",

            // Update number during animation
            onUpdate: () => {
              el.textContent = `${prefix}${formatNumber(
                counterObj.current
              )}${suffix}`;
            },

            // Display exact final formatted number
            onComplete: () => {
              el.textContent = `${prefix}${formatNumber(value)}${suffix}`;
            },
          });

          observer.unobserve(el);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();

      if (tween) {
        tween.kill();
      }
    };
  }, [value, decimals, prefix, suffix, duration]);

  return (
    <span
      ref={containerRef}
      className={`tabular-nums ${className}`}
    >
      {`${prefix}${formatNumber(value)}${suffix}`}
    </span>
  );
}

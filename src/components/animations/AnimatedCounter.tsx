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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
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
          el.textContent = `${prefix}0${suffix}`;

          tween = gsap.to(counterObj, {
            current: value,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              if (el) {
                el.textContent = `${prefix}${counterObj.current.toFixed(decimals)}${suffix}`;
              }
            },
            onComplete: () => {
              if (el) {
                el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
              }
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
    <span ref={containerRef} className={`tabular-nums ${className}`}>
      {`${prefix}${value.toFixed(decimals)}${suffix}`}
    </span>
  );
}

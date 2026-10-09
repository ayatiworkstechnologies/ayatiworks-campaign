"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  ease?: string;
  startTrigger?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.75,
  distance = 24,
  scale = 1,
  ease = "power2.out",
  startTrigger = "top 88%",
}: ScrollRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !elRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const el = elRef.current;

    let x = 0;
    let y = 0;

    if (direction === "up") y = distance;
    else if (direction === "down") y = -distance;
    else if (direction === "left") x = distance;
    else if (direction === "right") x = -distance;

    gsap.set(el, {
      x,
      y,
      scale: scale !== 1 ? scale : 1,
      opacity: 0,
    });

    const anim = gsap.to(el, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start: startTrigger,
        once: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, [direction, delay, duration, distance, scale, ease, startTrigger]);

  return (
    <div ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

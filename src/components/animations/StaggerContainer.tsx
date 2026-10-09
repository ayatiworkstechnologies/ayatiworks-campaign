"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
  yOffset?: number;
  selector?: string;
  delay?: number;
  startTrigger?: string;
}

export default function StaggerContainer({
  children,
  className = "",
  stagger = 0.1,
  duration = 0.75,
  yOffset = 24,
  selector = "> *",
  delay = 0,
  startTrigger = "top 85%",
}: StaggerContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const items = selector === "> *" 
      ? Array.from(container.children) as HTMLElement[]
      : Array.from(container.querySelectorAll<HTMLElement>(selector));

    if (items.length === 0) return;

    gsap.set(items, {
      y: yOffset,
      opacity: 0,
    });

    const anim = gsap.to(items, {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: startTrigger,
        once: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, [stagger, duration, yOffset, selector, delay, startTrigger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

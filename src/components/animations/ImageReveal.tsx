"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  initialScale = 1.08,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !innerRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(innerRef.current, {
      scale: initialScale,
      opacity: 0,
    });

    const anim = gsap.to(innerRef.current, {
      scale: 1,
      opacity: 1,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 86%",
        once: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, [delay, duration, initialScale]);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="w-full h-full will-change-transform will-change-opacity">
        {children}
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type RevealTag = "div" | "h1" | "h2" | "h3" | "h4" | "p" | "span" | "section";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number | string;
  triggerOnScroll?: boolean;
  as?: RevealTag;
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  duration = 0.85,
  yOffset = "105%",
  triggerOnScroll = true,
  as: Component = "div",
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !innerRef.current || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const target = innerRef.current;
    const triggerEl = containerRef.current;

    // Initial state
    gsap.set(target, {
      y: yOffset,
      opacity: 0,
    });

    if (triggerOnScroll) {
      const anim = gsap.to(target, {
        y: "0%",
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top 88%",
          once: true,
        },
      });

      return () => {
        anim.kill();
      };
    } else {
      const anim = gsap.to(target, {
        y: "0%",
        opacity: 1,
        duration,
        delay,
        ease: "power3.out",
      });

      return () => {
        anim.kill();
      };
    }
  }, [delay, duration, yOffset, triggerOnScroll]);

  const Tag = Component;

  return (
    <Tag
      ref={containerRef as unknown as React.Ref<HTMLDivElement>}
      className={`overflow-hidden ${className}`}
    >
      <div ref={innerRef} className="will-change-transform will-change-opacity">
        {children}
      </div>
    </Tag>
  );
}

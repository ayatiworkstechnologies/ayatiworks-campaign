"use client";

import React, { type ReactNode } from "react";
import SmoothScrollProvider from "./animations/SmoothScrollProvider";

type MotionProviderProps = { children: ReactNode };

/**
 * Unified Smooth Scroll & Motion Provider
 * Connects Lenis smooth scrolling with GSAP ticker & ScrollTrigger
 */
export default function MotionProvider({ children }: MotionProviderProps) {
  return <SmoothScrollProvider>{children}</SmoothScrollProvider>;
}

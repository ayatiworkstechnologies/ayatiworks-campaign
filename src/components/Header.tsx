
"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Handle header background on scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    // Logo entrance animation
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion && logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        {
          y: -16,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
        }
      );
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-100/80 py-3.5 border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm py-4 sm:py-5 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">

        {/* Brand Logo with Initial Load Animation */}
        <Link
          ref={logoRef}
          href="/"
          className="flex items-center gap-2 group transition-transform duration-250 hover:scale-[1.02] shrink-0"
        >
          <Image
            src="/ayatiworks_logo.svg"
            alt="Ayatiworks - Performance Marketing Agency"
            width={160}
            height={35}
            className="h-7 sm:h-9 w-auto object-contain"
            priority
          />
        </Link>

      </div>
    </header>
  );
}

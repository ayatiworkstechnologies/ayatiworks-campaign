"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaThreads,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://linkedin.com/company/ayatiworks",
    label: "LinkedIn",
    bgClass: "bg-[#0A66C2] hover:shadow-blue-600/35",
  },
  {
    icon: <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://www.facebook.com/ayatiworkstechnologies",
    label: "Facebook",
    bgClass: "bg-[#1877F2] hover:shadow-blue-500/35",
  },
  {
    icon: <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://instagram.com/ayatiworks/",
    label: "Instagram",
    bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:shadow-pink-500/35",
  },
  {
    icon: <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://youtube.com/@ayatiworks",
    label: "YouTube",
    bgClass: "bg-[#FF0000] hover:shadow-red-500/35",
  },
  {
    icon: <FaXTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://twitter.com/Ayatiworks1",
    label: "X",
    bgClass: "bg-black hover:shadow-slate-900/35",
  },
  {
    icon: <FaThreads className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
    link: "https://www.threads.net/@ayatiworks?hl=en",
    label: "Threads",
    bgClass: "bg-black hover:shadow-slate-900/35",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial load animations: Logo fades in with slight downward movement, social icons appear sequentially
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!prefersReducedMotion) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65 },
        );
      }

      if (socialRef.current) {
        const icons = socialRef.current.children;
        tl.fromTo(
          icons,
          { y: -12, opacity: 0, scale: 0.8 },
          { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.07 },
          "-=0.35",
        );
      }
    }

    return () => window.removeEventListener("scroll", handleScroll);
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

        {/* Social Icons with Sequential Entrance & 1.08 Scale Hover */}
        <div ref={socialRef} className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${item.bgClass} text-white flex items-center justify-center transition-all duration-250 hover:scale-[1.08] hover:-translate-y-0.5 hover:shadow-md active:scale-95`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

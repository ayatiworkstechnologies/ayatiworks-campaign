"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
    icon: <FaLinkedinIn className="w-3.5 h-3.5" />,
    link: "https://linkedin.com/company/ayatiworks",
    label: "LinkedIn",
    bgClass: "bg-[#0A66C2]",
  },
  {
    icon: <FaFacebookF className="w-3.5 h-3.5" />,
    link: "https://www.facebook.com/ayatiworkstechnologies",
    label: "Facebook",
    bgClass: "bg-[#1877F2]",
  },
  {
    icon: <FaInstagram className="w-3.5 h-3.5" />,
    link: "https://instagram.com/ayatiworks/",
    label: "Instagram",
    bgClass: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    icon: <FaYoutube className="w-3.5 h-3.5" />,
    link: "https://youtube.com/@ayatiworks",
    label: "YouTube",
    bgClass: "bg-[#FF0000]",
  },
  {
    icon: <FaXTwitter className="w-3.5 h-3.5" />,
    link: "https://twitter.com/Ayatiworks1",
    label: "X",
    bgClass: "bg-black",
  },
  {
    icon: <FaThreads className="w-3.5 h-3.5" />,
    link: "https://www.threads.net/@ayatiworks?hl=en",
    label: "Threads",
    bgClass: "bg-black",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    let hasAnimated = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          gsap.fromTo(
            el,
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" }
          );
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-white py-8 border-t border-slate-100 transition-colors will-change-transform will-change-opacity"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Image
            src="/ayatiworks_logo.svg"
            alt="Ayatiworks"
            width={160}
            height={35}
            className="h-8 w-auto object-contain sm:h-9 md:h-10"
          />
        </div>

        {/* Center Legal / Copyright Text */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider text-center">
          <a
            href="https://www.ayatiworks.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1541e0] transition-colors"
          >
            PRIVACY POLICY
          </a>
          <span className="text-slate-300">|</span>
          <a
            href="https://www.ayatiworks.com/terms-and-conditions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1541e0] transition-colors"
          >
            TERMS & CONDITIONS
          </a>
          <span className="text-slate-300">|</span>
          <span className="text-slate-400">
            © 2017-2026 ALL RIGHTS RESERVED
          </span>
        </div>

        {/* Right Social Icons with restrained hover micro-interactions */}
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={`w-7 h-7 rounded-full ${item.bgClass} text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 shadow-sm active:scale-95`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

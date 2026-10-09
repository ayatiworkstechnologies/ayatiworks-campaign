"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-100/80 py-3.5 border-b border-slate-100"
          : "bg-white/90 backdrop-blur-sm py-5 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <Image
            src="/ayatiworks_logo.svg"
            alt="Ayatiworks - Performance Marketing Agency"
            width={160}
            height={36}
            className="h-8 sm:h-9 w-auto object-contain"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </a>

        {/* Social Icons with Spring Hover Micro-Interactions */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Facebook */}
          <a
            href="https://facebook.com/ayatiworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-500/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.677.15-.201.3-.777.979-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.175-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.235-.245-.588-.494-.509-.678-.518-.175-.009-.376-.009-.576-.009-.2 0-.526.075-.802.376-.276.3-1.053 1.028-1.053 2.507 0 1.479 1.078 2.908 1.228 3.109.15.2 2.122 3.24 5.141 4.543.718.31 1.279.495 1.716.634.721.229 1.377.197 1.895.12.577-.087 1.78-.727 2.031-1.429.251-.702.251-1.303.175-1.429-.075-.126-.276-.201-.577-.351zM12 21.802A9.775 9.775 0 0 1 7.02 20.45l-.356-.212-3.692.968.986-3.599-.232-.369A9.79 9.79 0 1 1 12 21.802zm0-19.604a9.805 9.805 0 0 0-8.49 14.717l-1.8 6.574 6.726-1.765A9.805 9.805 0 1 0 12 2.198z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/ayatiworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-pink-500/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/ayatiworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-600/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@ayatiworks"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-red-500/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* X / Twitter */}
          <a
            href="https://twitter.com/Ayatiworks1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-900/30 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

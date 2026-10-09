"use client";

import React from "react";

export default function DashboardShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/25 to-white py-12 lg:py-20 border-b border-slate-100">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Floating Dashboard Card with Smooth Float Animation */}
          <div className="lg:col-span-3 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-500/5 text-left transform lg:animate-float-slow hover:!rotate-0 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              {/* Top Stats Row */}
              <div className="grid grid-cols-3 gap-2 pb-3.5 border-b border-slate-100">
                <div className="group cursor-pointer">
                  <span className="text-[10px] text-slate-400 font-medium block">Total Spend</span>
                  <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1541e0] transition-colors">₹174,420</span>
                  <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded inline-block mt-0.5">+28.4%</span>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[10px] text-slate-400 font-medium block">Conversions</span>
                  <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1541e0] transition-colors">1,282</span>
                  <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded inline-block mt-0.5">+18.2%</span>
                </div>
                <div className="group cursor-pointer">
                  <span className="text-[10px] text-slate-400 font-medium block">ROAS</span>
                  <span className="text-xs font-bold text-slate-900 block group-hover:text-[#1541e0] transition-colors">8.6X</span>
                  <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-1 py-0.2 rounded inline-block mt-0.5">+31.0%</span>
                </div>
              </div>

              {/* Mini Chart Header */}
              <div className="flex items-center justify-between pt-3 pb-1">
                <span className="text-[11px] font-semibold text-slate-700">Campaign Performance</span>
                <span className="text-[9px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200 hover:border-slate-300 cursor-pointer transition">
                  Last 30 Days ▾
                </span>
              </div>

              {/* Curvy Wave SVG Chart with Glowing Line Details */}
              <div className="h-20 w-full pt-1.5 relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" fill="none">
                  <defs>
                    <linearGradient id="blueWaveDash" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1541e0" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#1541e0" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="tealWaveDash" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area 1 */}
                  <path
                    d="M0,45 Q25,25 50,38 T100,20 T150,15 T200,5 L200,60 L0,60 Z"
                    fill="url(#blueWaveDash)"
                  />
                  {/* Line 1 */}
                  <path
                    d="M0,45 Q25,25 50,38 T100,20 T150,15 T200,5"
                    stroke="#1541e0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Area 2 */}
                  <path
                    d="M0,52 Q30,42 60,48 T120,32 T160,25 T200,18 L200,60 L0,60 Z"
                    fill="url(#tealWaveDash)"
                  />
                  {/* Line 2 */}
                  <path
                    d="M0,52 Q30,42 60,48 T120,32 T160,25 T200,18"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Animated Data Points */}
                  <circle cx="100" cy="20" r="3" fill="#1541e0" className="animate-ping origin-center" opacity="0.4" />
                  <circle cx="100" cy="20" r="2.5" fill="#1541e0" />
                  <circle cx="200" cy="5" r="3" fill="#1541e0" />
                </svg>
              </div>
            </div>
          </div>

          {/* Center Column: Headline, Subtitle, and 3 Pill Badges */}
          <div className="lg:col-span-6 order-1 lg:order-2 text-center space-y-4 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Performance Marketing That <br />
              <span className="text-[#1541e0]">Pays for Itself.</span>
            </h2>

            <p className="max-w-lg mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Ayatiworks is a leading performance marketing agency that delivers measurable return on ad spend across Google, Meta, programmatic, and leading growth channels.
            </p>

            {/* Three Floating Pill Badges with Hover Elevations */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#eef4ff] text-[#1541e0] text-xs font-semibold border border-blue-200/80 shadow-sm transition-all duration-200 hover:bg-blue-100/90 hover:scale-[1.03] hover:shadow-md cursor-default">
                <svg className="w-3.5 h-3.5 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Data-Driven Campaigns</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#eef4ff] text-[#1541e0] text-xs font-semibold border border-blue-200/80 shadow-sm transition-all duration-200 hover:bg-blue-100/90 hover:scale-[1.03] hover:shadow-md cursor-default">
                <svg className="w-3.5 h-3.5 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Measurable Return On Spend</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#eef4ff] text-[#1541e0] text-xs font-semibold border border-blue-200/80 shadow-sm transition-all duration-200 hover:bg-blue-100/90 hover:scale-[1.03] hover:shadow-md cursor-default">
                <svg className="w-3.5 h-3.5 text-[#1541e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Scalable Multi-Channel Growth</span>
              </div>
            </div>
          </div>

          {/* Right Floating Checklist Card with Reverse Float Animation */}
          <div className="lg:col-span-3 order-3 flex justify-center">
            <div className="w-full max-w-sm bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xl shadow-blue-500/5 text-left transform lg:animate-float-reverse hover:!rotate-0 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">Ad Operations</span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>
              <div className="pt-2.5 space-y-2">
                <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#1541e0] flex items-center justify-center text-xs shadow-xs">🚀</div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-800 block leading-tight">Campaign Setup</span>
                    <span className="text-[9px] text-slate-400 block leading-tight">Full-funnel structure</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs shadow-xs">🎯</div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-800 block leading-tight">Targeting & Audience</span>
                    <span className="text-[9px] text-slate-400 block leading-tight">High-intent segmentation</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs shadow-xs">📊</div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-800 block leading-tight">Tracking & Attribution</span>
                    <span className="text-[9px] text-slate-400 block leading-tight">Server-side CAPI & GTM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center text-xs shadow-xs">💡</div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-800 block leading-tight">Creative Strategy</span>
                    <span className="text-[9px] text-slate-400 block leading-tight">Dynamic A/B variations</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-1 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-600 flex items-center justify-center text-xs shadow-xs">📄</div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-800 block leading-tight">Landing Pages</span>
                    <span className="text-[9px] text-slate-400 block leading-tight">High-converting CRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

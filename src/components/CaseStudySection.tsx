import React from "react";

export default function CaseStudySection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            04 &nbsp;|&nbsp; PERFORMANCE IN PRACTICE
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Real Brands. Real Campaigns. <br className="hidden sm:inline" />
            <span className="text-[#1541e0]">Measurable Results.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed font-normal">
            Performance marketing isn't about vanity metrics—it's about driving tangible business growth. Here's a look at how we helped a premium automotive brand achieve superior efficiency and conversion performance.
          </p>
        </div>

        {/* Volvo Case Study Card */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-[11px] sm:text-xs font-bold text-[#ea580c] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-md border border-orange-100">
                CASE STUDY / AUTOMOTIVE
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Volvo Cars India
              </h3>

              <p className="text-sm sm:text-base font-bold text-[#1541e0]">
                Driving Greater Efficiency Through Performance Marketing!
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                We restructured Google Search and Meta advertising campaigns, optimized audience targeting, and implemented high-converting landing pages to dramatically decrease acquisition costs and increase qualified inquiries.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80 hover:bg-blue-50 hover:text-[#1541e0] transition-colors cursor-default">
                  Google Ads
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80 hover:bg-blue-50 hover:text-[#1541e0] transition-colors cursor-default">
                  Meta Ads
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80 hover:bg-blue-50 hover:text-[#1541e0] transition-colors cursor-default">
                  Audience Segmentation
                </span>
              </div>
            </div>

            {/* Right Metric Blocks Column with Hover Micro-Animations */}
            <div className="lg:col-span-5 space-y-5 border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-10">
              {/* Stat 1 */}
              <div className="group flex items-center justify-between pb-4 border-b border-slate-100 cursor-default">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block">
                    7.9%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold group-hover:text-slate-900 transition-colors">
                    Increase in CTR
                  </span>
                </div>
                <span className="text-[#ea580c] font-black text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </span>
              </div>

              {/* Stat 2 */}
              <div className="group flex items-center justify-between pb-4 border-b border-slate-100 cursor-default">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block">
                    23%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold group-hover:text-slate-900 transition-colors">
                    Drop in Cost Per Lead (CPL)
                  </span>
                </div>
                <span className="text-[#ea580c] font-black text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </span>
              </div>

              {/* Stat 3 */}
              <div className="group flex items-center justify-between cursor-default">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#1541e0] tracking-tight group-hover:scale-105 transition-transform duration-200 inline-block">
                    40%
                  </span>
                  <span className="text-xs sm:text-sm text-slate-600 font-semibold group-hover:text-slate-900 transition-colors">
                    Increase in Qualified Inquiries
                  </span>
                </div>
                <span className="text-[#ea580c] font-black text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                  ↗
                </span>
              </div>
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-8 pt-6 border-t border-slate-100">
            <p className="text-[11px] sm:text-xs text-slate-400 italic">
              * Results achieved over a 90-day period comparing baseline metrics with optimized campaign performance across digital channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

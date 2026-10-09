import React from "react";

export default function CoreChallengeSection() {
  const cards = [
    {
      title: "Rising Advertising Costs",
      description:
        "Ad costs keep climbing every quarter, yet conversion volume remains flat or drops, shrinking your profitability.",
      icon: (
        <svg
          className="w-5 h-5 text-[#1541e0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Leads That Don't Convert",
      description:
        "Your campaigns generate clicks and traffic, but fail to turn into paying customers and qualified business revenue.",
      icon: (
        <svg
          className="w-5 h-5 text-[#1541e0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Unclear Return on Ad Spend",
      description:
        "Attribution is murky. You aren't sure which ads are actually driving profit and which are silently draining your budget.",
      icon: (
        <svg
          className="w-5 h-5 text-[#1541e0]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            01 &nbsp;|&nbsp; THE CORE CHALLENGE
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Ads Are Getting Clicks. But <br className="hidden sm:inline" />
            Are <span className="text-[#1541e0]">They Delivering Results?</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed max-w-4xl font-normal">
            Running paid ads is only half the battle. If your campaigns aren't driving real revenue, you're burning budget without seeing the returns your business deserves. In today's competitive landscape, high ad costs and poor targeting can quickly derail your growth.
          </p>
        </div>

        {/* 3 Stadium-Pill Problem Cards with Interactive Hover Elevation */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-2 group cursor-default"
            >
              {/* Top Stadium Dome in Blue */}
              <div className="bg-[#1541e0] pt-7 pb-6 px-6 flex items-center justify-center rounded-t-3xl transition-colors duration-300 group-hover:bg-[#0f35be]">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-2">
                  {card.icon}
                </div>
              </div>

              {/* Middle Title Container */}
              <div className="bg-white py-5 px-6 text-center flex-1 flex items-center justify-center">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-[#1541e0] transition-colors duration-200">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Stadium Base in Blue */}
              <div className="bg-[#1541e0] py-6 px-6 text-center rounded-b-3xl transition-colors duration-300 group-hover:bg-[#0f35be]">
                <p className="text-xs sm:text-[13px] text-blue-50/95 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Takeaway Text */}
        <div className="mt-12 sm:mt-14 text-center max-w-4xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Ad platforms are built to make you spend more money. Ayatiworks is built to make your ad spend work harder—optimizing each touchpoint to turn traffic into profitable, scalable revenue.
          </p>
        </div>
      </div>
    </section>
  );
}

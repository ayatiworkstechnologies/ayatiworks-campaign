import React from "react";
import Image from "next/image";

export default function PlatformsSection() {
  const platforms = [
    {
      category: "Google Ads",
      title: "Capture Demand When Intent Is Highest",
      description:
        "Reach potential customers actively searching for your products or services through targeted search, display and conversion-focused advertising.",
      image: "/platform-google.png",
      alt: "Google Ads high-intent audiences illustration",
    },
    {
      category: "Meta Ads",
      title: "Turn Audience Interest Into Action",
      description:
        "Build awareness, connect with relevant audiences and drive enquiries or purchases through Facebook and Instagram advertising.",
      image: "/platform-meta.png",
      alt: "Meta Ads interest into action illustration",
    },
    {
      category: "Programmatic Advertising",
      title: "Reach Beyond Traditional Channels",
      description:
        "Use automated media buying, audience targeting and performance insights to connect with potential customers across digital environments.",
      image: "/platform-programmatic.png",
      alt: "Programmatic Advertising connected digital reach illustration",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider text-[#ea580c] uppercase">
            03 &nbsp;|&nbsp; THE RIGHT CHANNEL MIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Reach the Right Audience. <br />
            On <span className="text-[#0040ff]">the Right Platform.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-4xl">
            Different platforms create different opportunities. We bring them together through one performance-focused strategy designed around your business goals.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Exact Visual Mockup Container from Design */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-slate-50 border-b border-slate-100">
                <Image
                  src={platform.image}
                  alt={platform.alt}
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                  priority={index === 0}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category & Arrow */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#0040ff] tracking-tight">
                      {platform.category}
                    </span>
                    <span className="text-sm font-bold text-[#0040ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                      ↗
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
                    {platform.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                    {platform.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

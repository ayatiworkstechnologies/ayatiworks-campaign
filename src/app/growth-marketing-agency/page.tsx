import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/growth/HeroSection";

import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import DashboardShowcaseSection from "@/components/growth/DashboardShowcaseSection";
import CoreChallengeSection from "@/components/growth/CoreChallengeSection";
import ThreeStepProcessSection from "@/components/growth/ThreeStepProcessSection";
import PlatformsSection from "@/components/growth/PlatformsSection";
import AuditForm from "@/components/growth/AuditForm";
import CaseStudySection from "@/components/growth/CaseStudySection";
import BlueCtaBanner from "@/components/growth/BlueCtaBanner";
import FaqSection from "@/components/growth/FaqSection";


export const metadata: Metadata = {
  title: "Growth Marketing Agency | Ayatiworks",
  description:
    "Ayatiworks is a growth marketing agency helping businesses scale through performance marketing, lead generation, conversion optimization, and revenue-driven strategies.",
  alternates: {
    canonical: "/growth-marketing-agency",
  },
};


const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ayatiworks",
  url: "https://www.ayatiworks.com/performance-marketing-agency",
  logo: "https://www.ayatiworks.com/ayatiworks_logo.svg",
  description:   "Ayatiworks is a growth marketing agency specializing in performance marketing, lead generation, paid advertising, conversion optimization, and revenue growth.",
  sameAs: [
    "https://linkedin.com/company/ayatiworks",
    "https://www.facebook.com/ayatiworkstechnologies",
    "https://instagram.com/ayatiworks/",
    "https://youtube.com/@ayatiworks",
    "https://twitter.com/Ayatiworks1",
    "https://www.threads.net/@ayatiworks?hl=en",
  ],
  serviceType: ["Google Ads management", "Meta Ads management", "Programmatic advertising", "Conversion rate optimization"],
};

export default function Home() {
  return (
    <MotionProvider>
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1541e0]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DashboardShowcaseSection/>
        <CoreChallengeSection/>
        <ThreeStepProcessSection/>
        <PlatformsSection/>
        <CaseStudySection/>
        <BlueCtaBanner/>
        <FaqSection/>
      </main>
      <Footer />
    </div>
    </MotionProvider>
  );
}

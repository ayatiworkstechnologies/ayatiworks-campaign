import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DashboardShowcaseSection from "@/components/DashboardShowcaseSection";
import CoreChallengeSection from "@/components/CoreChallengeSection";
import ThreeStepProcessSection from "@/components/ThreeStepProcessSection";
import PlatformsSection from "@/components/PlatformsSection";
import CaseStudySection from "@/components/CaseStudySection";
import BlueCtaBanner from "@/components/BlueCtaBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import AuditForm from "@/components/growth/AuditForm";

export const metadata: Metadata = {
  alternates: { canonical: "/performance-marketing-agency" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ayatiworks",
  url: "https://www.ayatiworks.com/performance-marketing-agency",
  logo: "https://www.ayatiworks.com/ayatiworks_logo.svg",
  description: "Ayatiworks is a performance marketing agency specializing in Google Ads, Meta Ads, programmatic advertising, and conversion optimization.",
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
        <AuditForm/>
        <DashboardShowcaseSection />
        <CoreChallengeSection />
        <ThreeStepProcessSection />
        <PlatformsSection />
        <CaseStudySection />
        <BlueCtaBanner />
        <FaqSection />
      </main>
      <Footer />
    </div>
    </MotionProvider>
  );
}

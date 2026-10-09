import React from "react";
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1541e0]">
      <Header />
      <main className="flex-1">
        <HeroSection />
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
  );
}

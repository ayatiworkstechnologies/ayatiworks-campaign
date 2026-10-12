import React from "react";
import Header from "@/components/Header";
import DynamicHeroSection from "./DynamicHeroSection";
import DynamicShowcaseSection from "./DynamicShowcaseSection";
import DynamicChallengesSection from "./DynamicChallengesSection";
import DynamicProcessSection from "./DynamicProcessSection";
import DynamicPlatformsSection from "./DynamicPlatformsSection";
import DynamicCaseStudySection from "./DynamicCaseStudySection";
import DynamicCtaBanner from "./DynamicCtaBanner";
import DynamicFaqSection from "./DynamicFaqSection";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { CampaignConfig, campaignsData } from "@/data/campaigns";

interface DynamicCampaignLandingProps {
  campaignKey?: "performance" | "ecommerce";
  campaignData?: CampaignConfig;
}

export default function DynamicCampaignLanding({
  campaignKey = "performance",
  campaignData,
}: DynamicCampaignLandingProps) {
  const campaign = campaignData || campaignsData[campaignKey] || campaignsData.performance;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `Ayatiworks - ${campaign.title || campaign.metaTitle || "Performance Marketing Agency"}`,
    url: `https://www.ayatiworks.com${campaign.canonical || campaign.slug}`,
    logo: "https://www.ayatiworks.com/ayatiworks_logo.svg",
    description: campaign.metaDescription,
    sameAs: [
      "https://linkedin.com/company/ayatiworks",
      "https://www.facebook.com/ayatiworkstechnologies",
      "https://instagram.com/ayatiworks/",
      "https://youtube.com/@ayatiworks",
      "https://twitter.com/Ayatiworks1",
      "https://www.threads.net/@ayatiworks?hl=en",
    ],
    serviceType: [
      "Google Ads management",
      "Meta Ads management",
      "Performance marketing",
      "Conversion rate optimization",
      "Omnichannel attribution",
    ],
  };

  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1541e0]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">
          <DynamicHeroSection campaign={campaign} />
          <DynamicShowcaseSection campaign={campaign} />
          <DynamicChallengesSection campaign={campaign} />
          <DynamicProcessSection campaign={campaign} />
          <DynamicPlatformsSection campaign={campaign} />
          <DynamicCaseStudySection campaign={campaign} />
          <DynamicCtaBanner campaign={campaign} />
          <DynamicFaqSection campaign={campaign} />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}

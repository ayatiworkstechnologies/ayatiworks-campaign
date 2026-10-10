import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import EcommerceHeroSection from "@/components/ecommerce/EcommerceHeroSection";
import EcommerceShowcaseSection from "@/components/ecommerce/EcommerceShowcaseSection";
import EcommerceFixSection from "@/components/ecommerce/EcommerceFixSection";
import EcommerceProcessSection from "@/components/ecommerce/EcommerceProcessSection";
import EcommercePlatformsSection from "@/components/ecommerce/EcommercePlatformsSection";
import EcommerceCaseStudySection from "@/components/ecommerce/EcommerceCaseStudySection";
import EcommerceCtaBanner from "@/components/ecommerce/EcommerceCtaBanner";
import EcommerceFaqSection from "@/components/ecommerce/EcommerceFaqSection";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

export const metadata: Metadata = {
  title: "E-commerce & D2C Growth Agency | Scale Revenue, Not Reach | Ayatiworks",
  description:
    "We build scalable growth engines for modern D2C & e-commerce brands - combining performance marketing, creative strategy, CRO, and lifecycle retention.",
  alternates: { canonical: "/ecommerce-growth-agency" },
  openGraph: {
    title: "E-commerce & D2C Growth Agency | Ayatiworks",
    description:
      "Scale your e-commerce brand on revenue, not reach. Specialized in Google Shopping, Meta Ads, Amazon Marketplace, and retention optimization.",
    url: "https://www.ayatiworks.com/ecommerce-growth-agency",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ayatiworks E-commerce & D2C Growth Agency",
  url: "https://www.ayatiworks.com/ecommerce-growth-agency",
  logo: "https://www.ayatiworks.com/ayatiworks_logo.svg",
  description:
    "Ayatiworks is an e-commerce and D2C growth marketing agency specializing in revenue scaling, CAC reduction, marketplace advertising, and customer retention.",
  serviceType: [
    "E-commerce Performance Marketing",
    "D2C Brand Scaling",
    "Google Shopping & PMax Management",
    "Meta Dynamic Product Ads",
    "Amazon Marketplace Advertising",
    "Conversion Rate Optimization (CRO)",
    "Customer Retention & Lifecycle Email Marketing",
  ],
};

export default function EcommerceGrowthAgencyPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1541e0]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">
          <EcommerceHeroSection />
          <EcommerceShowcaseSection />
          <EcommerceFixSection />
          <EcommerceProcessSection />
          <EcommercePlatformsSection />
          <EcommerceCaseStudySection />
          <EcommerceCtaBanner />
          <EcommerceFaqSection />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}

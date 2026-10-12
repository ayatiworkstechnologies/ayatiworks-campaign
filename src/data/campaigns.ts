export interface ChallengeCard {
  title: string;
  description: string;
  iconType?: "cost" | "visibility" | "cart" | "leads" | "roi";
}

export interface ProcessStep {
  number: string;
  stepBadge: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  image: string;
}

export interface PlatformItem {
  category: string;
  title: string;
  description: string;
  type: "google" | "meta" | "amazon" | "programmatic";
  badgeText?: string;
  subBadgeText?: string;
}

export interface CaseStudyStat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CampaignConfig {
  id: string;
  slug: string;
  title?: string;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  
  // Hero Section
  hero: {
    headlinePrimary: string;
    headlineHighlight: string;
    paragraph1: string;
    paragraph2: string;
    ctaButtonText: string;
    formGoalOptions: { value: string; label: string }[];
    formAuditBadgeText?: string;
  };

  // Showcase Section
  showcase: {
    badgeTitle: string;
    badgeHighlight?: string;
    description: string;
    pills: { label: string; icon: "bolt" | "trending" | "check" }[];
    metrics: { label: string; value: string; sub: string }[];
    imageSrc?: string;
    imageAlt?: string;
    floatingBadgeTop?: string;
    floatingBadgeBottom?: { title: string; subtitle: string };
  };

  // What We Fix / Challenges Section
  challenges: {
    tag: string;
    headlinePrimary: string;
    headlineHighlight: string;
    subtitle: string;
    cards: ChallengeCard[];
    calloutText: string;
  };

  // Process / How It Works Section
  process: {
    tag: string;
    headlinePrimary: string;
    headlineHighlight: string;
    subtitle: string;
    steps: ProcessStep[];
  };

  // Platforms & Channels Section
  platforms: {
    tag: string;
    headlinePrimary: string;
    headlineHighlight: string;
    subtitle: string;
    cards: PlatformItem[];
  };

  // Case Study & Impact Section
  caseStudy: {
    tag: string;
    headlinePrimary: string;
    headlineHighlight: string;
    subtitle: string;
    industryBadge: string;
    clientName: string;
    caseTitle: string;
    caseDescription: string;
    tags: string[];
    stats: CaseStudyStat[];
    footnote: string;
  };

  // Blue CTA Banner Section
  ctaBanner: {
    tag: string;
    headlinePrimary: string;
    headlineHighlight: string;
    description: string;
    buttonText: string;
    subtext: string;
  };

  // FAQ Section
  faqs: {
    tag: string;
    sideTitle: string;
    sideDescription: string;
    sideButtonText: string;
    items: FaqItem[];
  };
}

export const campaignsData: Record<string, CampaignConfig> = {
  // =========================================================================
  // CAMPAIGN 1: Performance Marketing Agency
  // =========================================================================
  performance: {
    id: "performance",
    slug: "/",
    canonical: "/performance-marketing-agency",
    metaTitle: "Performance Marketing Agency | Ayatiworks",
    metaDescription:
      "Ayatiworks is a performance marketing agency specializing in Google Ads, Meta Ads, programmatic advertising, and conversion optimization.",

    hero: {
      headlinePrimary: "Performance Marketing That",
      headlineHighlight: "Agency.",
      paragraph1:
        "Stop wasting ad budget on clicks that don't convert. Ayatiworks builds high-converting, ROI-focused performance marketing campaigns engineered to scale.",
      paragraph2:
        "From hyper-targeted ad creative to full-funnel tracking and landing page optimization, we turn every marketing rupee into profitable, predictable growth.",
      ctaButtonText: "SCHEDULE ACCOUNT GROWTH AUDIT",
      formGoalOptions: [
        { value: "lead-generation", label: "Generate qualified leads" },
        { value: "ecommerce-growth", label: "Grow e-commerce sales" },
        { value: "brand-awareness", label: "Build brand awareness" },
        { value: "improve-roas", label: "Improve ROAS" },
      ],
      formAuditBadgeText: "results delivered in 24 hours.",
    },

    showcase: {
      badgeTitle: "Performance Marketing That",
      badgeHighlight: "Pays for Itself.",
      description:
        "Google, Meta and programmatic advertising campaigns optimised to lower acquisition costs, improve return on ad spend and generate qualified leads that contribute to real business revenue.",
      pills: [
        { label: "Data-Driven Campaigns", icon: "bolt" },
        { label: "Measurable Business Outcomes", icon: "trending" },
        { label: "Google Ads Certified Agency", icon: "check" },
      ],
      metrics: [
        { label: "Total Spend", value: "12,430", sub: "+14% MoM" },
        { label: "Conversions", value: "1,284", sub: "+22% High Quality" },
        { label: "Average CPA", value: "$9.68", sub: "-18% Lower Costs" },
        { label: "Pipeline ROAS", value: "4.4x", sub: "Verified Conversion" },
      ],
      floatingBadgeTop: "Certified Google Premier Partner",
      floatingBadgeBottom: { title: "Verified Leads", subtitle: "1,280+ High Intent" },
    },

    challenges: {
      tag: "01 | THE CORE CHALLENGE",
      headlinePrimary: "More Clicks Don't Always",
      headlineHighlight: "Mean More Business.",
      subtitle:
        "Driving traffic is easy. Turning that traffic into qualified leads, reduced acquisition costs and predictable revenue is where most marketing falls short. Here's what we fix.",
      cards: [
        {
          title: "Rising Advertising Costs",
          description:
            "Your budget keeps increasing, but the cost of acquiring customers continues to rise. We restructure targeting, creative hooks, and bidding to lower CPA.",
          iconType: "cost",
        },
        {
          title: "Leads That Don't Convert",
          description:
            "Your campaigns generate enquiries, but too few turn into meaningful sales opportunities. We eliminate unqualified clicks with strict intent targeting.",
          iconType: "leads",
        },
        {
          title: "Unclear Campaign ROI",
          description:
            "You're investing heavily across digital platforms without clear visibility into bottom-line returns. We implement closed-loop attribution so you know what works.",
          iconType: "roi",
        },
      ],
      calloutText:
        "Performance marketing should not be guesswork. We align every rupee spent with measurable conversions, lower acquisition costs, and compounding return on ad spend.",
    },

    process: {
      tag: "02 | OUR PROCESS",
      headlinePrimary: "A Proven Process That",
      headlineHighlight: "Drives Consistent Results.",
      subtitle:
        "We combine audience intelligence, creative testing and data-led optimization across every stage of your advertising funnel.",
      steps: [
        {
          number: "01",
          stepBadge: "STEP ONE",
          label: "AUDIT",
          title: "Uncover the Opportunities You're Missing",
          description:
            "We analyze existing advertising accounts to identify performance gaps, budget inefficiencies and conversion barriers.",
          points: [
            "Campaign structure & ad hierarchy",
            "Audience targeting & negative exclusions",
            "Creatives, copy & fatigue analysis",
            "Tracking, server CAPI & landing pages",
          ],
          image: "/audit-sq.png",
        },
        {
          number: "02",
          stepBadge: "STEP TWO",
          label: "OPTIMISE",
          title: "Make Every Campaign Work Harder",
          description:
            "We improve targeting, ad messaging, bidding strategies and conversion journeys to help reduce wasted spend and strengthen campaign results.",
          points: [
            "CPA reduction & bid strategy calibration",
            "Lead quality grading & intent filtering",
            "Dynamic remarketing & audience expansion",
            "Ad relevance & high Quality Score",
          ],
          image: "/optimise-sq.png",
        },
        {
          number: "03",
          stepBadge: "STEP THREE",
          label: "SCALE",
          title: "Grow What Delivers Results",
          description:
            "We identify the strongest-performing campaigns, audiences and creatives, then allocate budgets strategically to support sustainable growth.",
          points: [
            "Qualified conversions & pipeline velocity",
            "Strategic budget re-allocation",
            "Omnichannel scaling across Google & Meta",
            "Predictable, compounding revenue growth",
          ],
          image: "/scale-sq.png",
        },
      ],
    },

    platforms: {
      tag: "03 | PLATFORMS & CHANNELS",
      headlinePrimary: "The Right Channels for",
      headlineHighlight: "Maximum Campaign Impact.",
      subtitle:
        "We build integrated, multi-platform campaigns tailored to where your target audience spends time and makes buying decisions.",
      cards: [
        {
          category: "Google Ads",
          title: "Capture Demand When Intent Is Highest",
          description:
            "Reach potential customers actively searching for your products or services through targeted search, display, Performance Max and conversion-focused advertising.",
          type: "google",
          badgeText: "High Intent Search",
          subBadgeText: "PMax & YouTube",
        },
        {
          category: "Meta Advertising",
          title: "Engage Audiences Through Targeted Social Campaigns",
          description:
            "Build awareness and generate leads across Facebook and Instagram using high-performing creatives, lookalike audiences and intent-driven retargeting.",
          type: "meta",
          badgeText: "Reels & Stories",
          subBadgeText: "Advantage+ Audience",
        },
        {
          category: "Programmatic Ads",
          title: "Expand Reach with Precision Audience Targeting",
          description:
            "Access premium ad inventory across the web with real-time bidding, behavioural targeting, private marketplaces, and transparent attribution reporting.",
          type: "programmatic",
          badgeText: "Premium Inventory",
          subBadgeText: "Omnichannel DSP",
        },
      ],
    },

    caseStudy: {
      tag: "04 | PERFORMANCE IN PRACTICE",
      headlinePrimary: "Real Brands. Real Campaigns.",
      headlineHighlight: "Measurable Results.",
      subtitle:
        "Performance marketing should be measured by meaningful business results. Explore how Ayatiworks has helped brands strengthen campaign efficiency, visibility and conversion performance.",
      industryBadge: "FEATURED CASE STUDY · AUTOMOTIVE",
      clientName: "Volvo Cars India",
      caseTitle: "Driving Greater Efficiency Through Performance Marketing",
      caseDescription:
        "Ayatiworks combined Google Ads, Meta advertising, audience targeting and data-led optimisation to strengthen Volvo's digital performance and lead-generation efforts.",
      tags: ["Google Ads", "Meta Ads", "Data-led optimisation", "Lead Generation"],
      stats: [
        { value: 65, prefix: "+", suffix: "%", label: "Increase in High-Intent Leads" },
        { value: 28, prefix: "-", suffix: "%", label: "Reduction in Cost Per Lead (CPL)" },
        { value: 4.2, suffix: "x", label: "Return on Ad Spend (ROAS)" },
      ],
      footnote:
        "Campaign performance measured across regional dealer networks over a 6-month period.",
    },

    ctaBanner: {
      tag: "READY TO GROW?",
      headlinePrimary: "Stop Guessing. Start Growing",
      headlineHighlight: "With Proven Performance.",
      description:
        "Request your free 30-minute advertising audit today. We will review your campaigns, uncover budget waste, and show you exactly where to scale.",
      buttonText: "SCHEDULE ACCOUNT GROWTH AUDIT",
      subtext: "No obligations. Just actionable, data-backed insights.",
    },

    faqs: {
      tag: "05 | FREQUENTLY ASKED QUESTIONS",
      sideTitle: "A little clarity before we start.",
      sideDescription:
        "Every brand's goals are unique. We build tailored performance marketing strategies aligned with your specific metrics.",
      sideButtonText: "REQUEST NOW",
      items: [
        {
          question: "What does the free performance marketing audit include?",
          answer:
            "We conduct a thorough review of your ad account architecture, bidding strategy, audience targeting, conversion tracking, and creative performance to identify budget leakages and scaling opportunities.",
        },
        {
          question: "How quickly can we see improvements in campaign performance?",
          answer:
            "Initial optimizations typically yield visible improvements in CPA and CTR within 14 to 21 days, followed by compounding performance gains as machine learning algorithms calibrate.",
        },
        {
          question: "Which platforms do you manage?",
          answer:
            "We specialize in Google Ads (Search, PMax, YouTube, Display), Meta Ads (Facebook & Instagram), Programmatic platforms, and Amazon Advertising.",
        },
        {
          question: "What is your pricing model?",
          answer:
            "We offer transparent retainers with performance incentives aligned directly with your business growth and revenue targets.",
        },
        {
          question: "Do you also create the ad creatives and landing pages?",
          answer:
            "Yes. Our in-house team designs high-converting ad visuals, video creatives, copy, and dedicated landing pages tailored to maximize conversion rates.",
        },
      ],
    },
  },

  // =========================================================================
  // CAMPAIGN 2: E-commerce & D2C Growth Agency
  // =========================================================================
  ecommerce: {
    id: "ecommerce",
    slug: "/ecommerce",
    canonical: "/ecommerce-growth-agency",
    metaTitle: "E-commerce & D2C Growth Agency | Scale Revenue, Not Reach | Ayatiworks",
    metaDescription:
      "We build scalable growth engines for modern D2C & e-commerce brands - combining performance marketing, creative strategy, CRO, and lifecycle retention.",

    hero: {
      headlinePrimary: "We Scale E-commerce Brands on",
      headlineHighlight: "Revenue, Not Reach.",
      paragraph1:
        "At Ayatiworks, we eliminate vanity metrics and concentrate on bottom-line results like CAC, ROAS, and repeat purchase rates to unlock sustainable growth for your e-commerce brand.",
      paragraph2:
        "Full-funnel execution across paid search, paid social, marketplace optimization, conversion rate optimization, and customer retention.",
      ctaButtonText: "GET YOUR FREE E-COMMERCE AUDIT",
      formGoalOptions: [
        { value: "scale-revenue-lower-cac", label: "Scale Revenue & Lower CAC" },
        { value: "improve-blended-roas", label: "Improve Blended ROAS" },
        { value: "conversion-rate-cro", label: "Conversion Rate Optimization (CRO)" },
        { value: "marketplace-growth", label: "Amazon & Marketplace Scaling" },
        { value: "customer-retention", label: "Retention & Repeat Purchase Rate" },
      ],
      formAuditBadgeText: "results delivered in 48 hours.",
    },

    showcase: {
      badgeTitle: "E-commerce / D2C Growth",
      badgeHighlight: "Agency.",
      description:
        "We build scalable growth engines for modern D2C & e-commerce brands - combining performance marketing, creative strategy, CRO, and lifecycle retention to turn clicks into profitable, repeatable orders.",
      pills: [
        { label: "Performance Marketing", icon: "bolt" },
        { label: "Conversion - Funnel - Retention", icon: "trending" },
        { label: "Google Ads & Meta Specialists", icon: "check" },
      ],
      metrics: [
        { label: "Monthly D2C Revenue", value: "₹24,85,920", sub: "+38.4% MoM" },
        { label: "Blended ROAS", value: "4.82x", sub: "High Scalability" },
        { label: "Delivered Orders", value: "4,280 Orders", sub: "98.6% Fulfillment" },
        { label: "Repeat Purchase Rate", value: "32.6%", sub: "High LTV Cohort" },
      ],
      imageSrc: "/ecom-showcase-3d.jpg",
      imageAlt: "E-commerce and D2C Growth Agency Engine - Ayatiworks",
      floatingBadgeTop: "Omnichannel Scale Engine",
      floatingBadgeBottom: { title: "Order Velocity", subtitle: "350+ Daily Orders" },
    },

    challenges: {
      tag: "01 | WHAT WE FIX FOR E-COMMERCE",
      headlinePrimary: "More Traffic Doesn't Always",
      headlineHighlight: "Mean More Sales.",
      subtitle:
        "Traffic without conversion is just vanity spend. Most e-commerce stores fail to convert high-intent shoppers because the ad creative, landing page, and post-click experience don't align. We fix the leaks across your entire customer funnel to make every rupee work harder.",
      cards: [
        {
          title: "Higher Acquisition Costs",
          description:
            "Ad costs keep surging while ROAS drops. We optimize audience targeting, creatives, and bids to drive down customer acquisition costs.",
          iconType: "cost",
        },
        {
          title: "Low Product Visibility",
          description:
            "Shoppers browse but don't buy. We restructure product catalogues, intent-based keywords, and dynamic retargeting to display the right products.",
          iconType: "visibility",
        },
        {
          title: "Checkout Drop-Off",
          description:
            "High cart abandonment kills margins. We streamline conversion funnels, reduce friction points, and re-engage high-intent visitors before they bounce.",
          iconType: "cart",
        },
      ],
      calloutText:
        "From paid search to retention remarketing, Ayatiworks connects every stage of the buyer journey. We combine creative strategy, performance marketing, and conversion design to turn browsing visitors into repeat brand advocates.",
    },

    process: {
      tag: "02 | HOW IT WORKS",
      headlinePrimary: "From First Click to Repeat Purchase.",
      headlineHighlight: "We Optimise Every Step.",
      subtitle:
        "Full-funnel e-commerce strategies crafted to scale brands with predictable, profitable acquisition, higher AOV, and customer retention that lasts.",
      steps: [
        {
          number: "01",
          stepBadge: "STEP ONE",
          label: "ACQUIRE",
          title: "Attract Shoppers Who Are Ready to Buy",
          description:
            "Precision-targeted paid campaigns across Google Shopping, Meta, and Performance Max to acquire high-value customers with maximum ROAS.",
          points: [
            "Lower Customer Acquisition Cost (CAC)",
            "High-intent audience & dynamic catalog targeting",
            "Real-time budget efficiency and bid optimization",
          ],
          image: "/ecom-step-acquire.jpg",
        },
        {
          number: "02",
          stepBadge: "STEP TWO",
          label: "CONVERT",
          title: "Turn Browsers Into High-Value Buyers",
          description:
            "High-converting product landing pages, dynamic catalog optimization, friction-free checkout, and seamless CRO journeys that eliminate drop-offs.",
          points: [
            "Higher Store Conversion Rates",
            "Optimized Average Order Value (AOV)",
            "Zero-friction mobile checkout experience",
          ],
          image: "/ecom-step-convert.jpg",
        },
        {
          number: "03",
          stepBadge: "STEP THREE",
          label: "RETAIN",
          title: "Maximize Lifetime Value & Repeat Purchases",
          description:
            "Automated retention email flows, SMS remarketing, and loyalty triggers that turn one-time shoppers into brand advocates and recurring buyers.",
          points: [
            "Predictable Repeat Purchase Rates",
            "Accelerated Customer Lifetime Value (LTV)",
            "Automated win-back & VIP customer cohorts",
          ],
          image: "/ecom-step-retain.jpg",
        },
      ],
    },

    platforms: {
      tag: "03 | PLATFORMS & CHANNELS",
      headlinePrimary: "Reach the Right Audience.",
      headlineHighlight: "On the Right Platform.",
      subtitle:
        "We build omnichannel growth engines tailored to where your customers discover, evaluate, and purchase products online.",
      cards: [
        {
          category: "Google Ads",
          title: "Every Growth Lever, Working Toward More Sales.",
          description:
            "Scale your revenue with high-intent Search, Google Shopping, Performance Max, and YouTube campaigns designed to capture ready-to-buy shoppers.",
          type: "google",
          badgeText: "Google Shopping",
          subBadgeText: "PMax Catalog",
        },
        {
          category: "Meta Ads",
          title: "Turn Product Discovery into Buying Intent.",
          description:
            "Stop the scroll with high-performing creative formats, dynamic product ads, catalog sales, and lookalike targeting on Instagram & Facebook.",
          type: "meta",
          badgeText: "Dynamic Ads (DPA)",
          subBadgeText: "Advantage+ Catalog",
        },
        {
          category: "Amazon Advertising",
          title: "Reach Customers When They're Ready to Shop.",
          description:
            "Maximize marketplace dominance with Sponsored Products, Sponsored Brands, and Brand Store optimization on Amazon and top platforms.",
          type: "amazon",
          badgeText: "Sponsored Products",
          subBadgeText: "Brand Store CRO",
        },
      ],
    },

    caseStudy: {
      tag: "04 | CLIENT RESULTS & IMPACT",
      headlinePrimary: "Real Brands. Real Campaigns.",
      headlineHighlight: "Measurable Results.",
      subtitle:
        "Explore how we help leading e-commerce brands accelerate revenue, slash acquisition costs, and unlock profitable scale through full-funnel digital execution.",
      industryBadge: "AUTOMOTIVE D2C / MERCHANDISE",
      clientName: "Jeep India",
      caseTitle: "Turning Highest Engagement into Merchandise Sales",
      caseDescription:
        "Jeep India needed an e-commerce strategy to convert passionate automotive enthusiasts into merchandise buyers. We launched full-funnel campaigns leveraging high-intent search and visually compelling dynamic social ads.",
      tags: ["Performance Marketing", "Social Commerce", "Creative", "Conversion Optimization"],
      stats: [
        { value: 240375, prefix: "₹", label: "Conversion Value / Merchandise Sales" },
        { value: 123, label: "Orders Placed" },
        { value: 16666, label: "Link Clicks" },
      ],
      footnote:
        "Results achieved within 45 days of campaign launch. Full case study data and attribution verified in client dashboard.",
    },

    ctaBanner: {
      tag: "READY TO SCALE YOUR STORE?",
      headlinePrimary: "Stop Wasting Budget.",
      headlineHighlight: "Start Unlocking Better Results.",
      description:
        "Book a complimentary 30-minute growth audit to identify where your store is leaking revenue and how to scale profitably.",
      buttonText: "GET YOUR FREE D2C GROWTH AUDIT",
      subtext: "No sales pitches. Just pure data & actionable insights.",
    },

    faqs: {
      tag: "05 | FREQUENTLY ASKED QUESTIONS",
      sideTitle: "A little clarity before we start.",
      sideDescription:
        "Have specific requirements or custom brand targets? Talk with our e-commerce growth leads.",
      sideButtonText: "REQUEST NOW",
      items: [
        {
          question: "What does the free D2C Growth Audit include?",
          answer:
            "We conduct a deep dive into your ad accounts, store conversion funnel, audience targeting, and creative assets to identify immediate leakages and revenue opportunities for scaling your brand.",
        },
        {
          question: "Which e-commerce platforms do you work with?",
          answer:
            "We work seamlessly across Shopify, WooCommerce, Magento, Amazon, Flipkart, and custom headless e-commerce stacks, integrating tracking and marketing APIs.",
        },
        {
          question: "Can you help improve sales without increasing ads budget?",
          answer:
            "Yes. By fixing funnel friction, improving landing page CRO, restructuring ad spend towards high-ROAS segments, and setting up retention email/SMS flows, we frequently scale revenue while keeping current spend constant.",
        },
        {
          question: "How do you measure e-commerce growth?",
          answer:
            "We look at blended ROAS, Marketing Efficiency Ratio (MER), Customer Acquisition Cost (CAC), Average Order Value (AOV), and 60-day Customer Lifetime Value (LTV), backed by server-side tracking (CAPI) and GA4.",
        },
        {
          question: "Do you work on customer retention as well as acquisition?",
          answer:
            "Absolutely. Sustainable e-commerce growth requires both acquisition and retention. We optimize post-purchase flows, win-back campaigns, repeat purchase triggers, and VIP loyalty segments.",
        },
      ],
    },
  },
};

import { NextResponse } from "next/server";
import { detectCampaignName } from "@/lib/campaignDetector";

// Direct Ayatiworks Campaign Form API Endpoint & Authentication Header
const AYATIWORKS_ENDPOINT =
  "https://api.ayatiworks.com/api/v1/public/ayatiwork/campain_form/records";

const AYATIWORKS_API_KEY = "3bc72efc00a99a7ad1d1e31225c6a3f833218dfb34d88cc6ecb4c2b9562ab0fd";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = body.data || body;

    const fullname = data.fullname || data.fullName || "";
    const workemail = data.workemail || data.workEmail || "";
    const phonenumber = data.phonenumber || data.phoneNumber || data.phone || "";
    const websiteurl = data.websiteurl || data.websiteUrl || "";
    const adspend = data.adspend || data.adSpend || data.monthlyMarketingBudget || "";
    const goal = data.goal || data.companyStage || "";
    const agreetoterms =
      data.agreetoterms === "true" ||
      data.agreetoterms === true ||
      data.agreeToTerms === true
        ? "true"
        : "false";

    // Detect campaign name from payload or referer
    const referer = request.headers.get("referer");
    const rawCampaign =
      data.campaign_name ||
      data.campaignName ||
      data.campaign ||
      "";
    const campaign_name = detectCampaignName(rawCampaign, referer);

    if (!fullname || !workemail || !phonenumber || !websiteurl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare payload matching the exact Ayatiworks API specification
    const payload = {
      data: {
        fullname,
        workemail,
        phonenumber,
        websiteurl,
        adspend,
        goal,
        agreetoterms,
        campaign_name,
      },
    };

    const response = await fetch(AYATIWORKS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": AYATIWORKS_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Ayatiworks API Error:", response.status, responseData);
      return NextResponse.json(
        {
          error: "Failed to submit form to Ayatiworks API",
          status: response.status,
          details: responseData,
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      data: responseData,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("Audit form submission exception:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

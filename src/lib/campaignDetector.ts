export const CAMPAIGN_NAMES = {
  PERFORMANCE: "Performance Marketing Agency",
  ECOMMERCE: "E-commerce & D2C Growth Agency",
  GROWTH: "Growth Marketing Agency",
} as const;

/**
 * Automatically detects the appropriate campaign name based on:
 * 1. An explicitly provided campaign name / id / slug (if present)
 * 2. URL search parameters (?campaign= or ?utm_campaign=) in the browser
 * 3. The current pathname / referer URL (e.g. /ecommerce, /growth-marketing-agency, /)
 * Defaults to "Performance Marketing Agency" if not otherwise matched.
 */
export function detectCampaignName(
  explicitCampaign?: string | null,
  pathnameOrUrl?: string | null
): string {
  if (explicitCampaign && explicitCampaign.trim()) {
    const raw = explicitCampaign.trim();
    const lower = raw.toLowerCase();
    if (
      lower.includes("ecommerce") ||
      lower.includes("e-commerce") ||
      lower.includes("d2c")
    ) {
      return CAMPAIGN_NAMES.ECOMMERCE;
    }
    if (lower.includes("growth")) {
      return CAMPAIGN_NAMES.GROWTH;
    }
    if (lower.includes("performance")) {
      return CAMPAIGN_NAMES.PERFORMANCE;
    }
    return raw;
  }

  let path = pathnameOrUrl || "";
  if (!path && typeof window !== "undefined") {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const queryCampaign =
        searchParams.get("campaign") ||
        searchParams.get("utm_campaign") ||
        searchParams.get("campaign_name");
      if (queryCampaign) {
        return detectCampaignName(queryCampaign);
      }
      path = window.location.pathname;
    } catch {
      // browser URL parsing fallback
    }
  }

  const lowerPath = path.toLowerCase();
  if (
    lowerPath.includes("ecommerce") ||
    lowerPath.includes("e-commerce") ||
    lowerPath.includes("d2c")
  ) {
    return CAMPAIGN_NAMES.ECOMMERCE;
  }
  if (lowerPath.includes("growth")) {
    return CAMPAIGN_NAMES.GROWTH;
  }
  return CAMPAIGN_NAMES.PERFORMANCE;
}

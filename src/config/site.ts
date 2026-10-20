export interface SiteConfig {
  name: string;
  description: string;
  canonicalDomain: string;
  publisher: {
    name: string;
    type: "Organization" | "Person";
  };
  navigation: Array<{
    name: string;
    path: string;
  }>;
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  name: "Bangladesh Travel Guide",
  description: "Independent, trustworthy travel planning advice for foreign tourists visiting Bangladesh safely, comfortably, and legally.",
  canonicalDomain: "https://bangladeshtravelguide.com",
  publisher: {
    name: "Bangladesh Travel Guide Editorial",
    type: "Organization"
  },
  navigation: [
    { name: "Plan Your Trip", path: "/plan-your-trip/" },
    { name: "Destinations", path: "/destinations/" },
    { name: "Safety & Security", path: "/bangladesh-travel-safety/" },
    { name: "Health Care", path: "/bangladesh-travel-health/" },
    { name: "About", path: "/about/" }
  ]
  // Social profiles left intentionally unset until official accounts are verified.
};
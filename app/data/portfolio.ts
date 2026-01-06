export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  results: string[];
  image: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "luxury-resort-rebrand",
    title: "Luxury Resort Digital Rebrand",
    client: "Oceanview Resort & Spa",
    category: "Full Digital Marketing",
    description:
      "Complete digital transformation for a 5-star beachfront resort, including website redesign, SEO strategy, and social media overhaul.",
    results: [
      "185% increase in direct bookings",
      "240% growth in organic search traffic",
      "95% improvement in social media engagement",
    ],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
  },
  {
    id: "boutique-hotel-seo",
    title: "Boutique Hotel SEO Success",
    client: "The Heritage Inn",
    category: "SEO & Content Marketing",
    description:
      "Comprehensive SEO campaign and content strategy for a historic boutique hotel in a competitive urban market.",
    results: [
      "320% increase in organic visibility",
      "First page rankings for 45+ keywords",
      "150% boost in website conversions",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    id: "resort-social-campaign",
    title: "Resort Social Media Campaign",
    client: "Mountain Peak Lodge",
    category: "Social Media Marketing",
    description:
      "Year-round social media strategy showcasing seasonal experiences and driving engagement with adventure travelers.",
    results: [
      "400% follower growth across platforms",
      "2.5M+ impressions in 6 months",
      "65% increase in social-driven bookings",
    ],
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
  },
  {
    id: "hotel-website-redesign",
    title: "Hotel Website Redesign",
    client: "Riverside Grand Hotel",
    category: "Web Design & Development",
    description: "Modern, mobile-first website redesign with integrated booking engine and enhanced user experience.",
    results: [
      "210% increase in mobile conversions",
      "45% reduction in bounce rate",
      "180% growth in direct online bookings",
    ],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop",
  },
  {
    id: "email-automation",
    title: "Email Marketing Automation",
    client: "Coastal Suites Collection",
    category: "Email Marketing",
    description: "Automated email journey implementation for a hotel group, from pre-arrival to post-stay engagement.",
    results: ["35% increase in repeat bookings", "28% email open rate (industry avg: 18%)", "8.5% click-through rate"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
  },
  {
    id: "ppc-campaign",
    title: "PPC Campaign Optimization",
    client: "Downtown Business Hotel",
    category: "Pay-Per-Click Advertising",
    description: "Strategic PPC campaign targeting business travelers with optimized ad spend and conversion tracking.",
    results: ["275% ROI on ad spend", "42% reduction in cost per acquisition", "190% increase in qualified leads"],
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
  },
];

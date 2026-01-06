export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    description:
      "Boost your visibility in search results and attract more direct bookings with our specialized hospitality SEO strategies.",
    icon: "Search",
    features: [
      "Local SEO optimization for Company locations",
      "Keyword research for industry",
      "Technical SEO audits and improvements",
      "Content optimization for conversions",
      "Competitor analysis and strategy",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description:
      "Engage guests and build your brand presence across social platforms with compelling content and strategic campaigns.",
    icon: "Share2",
    features: [
      "Platform-specific content strategies",
      "Visual storytelling and photography",
      "Community management and engagement",
      "Influencer partnerships",
      "Social media advertising campaigns",
    ],
  },
  {
    id: "content-marketing",
    title: "Content Marketing",
    description:
      "Tell your Company unique story through high-quality content that inspires Costumers. ",
    icon: "FileText",
    features: [
      "Blog writing and destination guides",
      "Email newsletter campaigns",
      "Video content production",
      "Guest experience storytelling",
      "Content calendar management",
    ],
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    description:
      "Create stunning, conversion-optimized websites that showcase your company and make leads effortless.",
    icon: "Layout",
    features: [
      "Mobile-responsive design",
      "Direct booking engine integration",
      "User experience optimization",
      "High-performance website development",
      "Accessibility compliance",
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    description: "Nurture guest relationships and drive repeat bookings with personalized email campaigns.",
    icon: "Mail",
    features: [
      "Automated guest journey emails",
      "Promotional campaign design",
      "List segmentation and targeting",
      "A/B testing and optimization",
      "Performance analytics and reporting",
    ],
  },
  {
    id: "ppc",
    title: "Pay-Per-Click Advertising",
    description: "Maximize your advertising ROI with targeted PPC campaigns designed for industry.",
    icon: "Target",
    features: [
      "Google Ads campaign management",
      "Meta advertising (Facebook & Instagram)",
      "Retargeting campaigns",
      "Budget optimization",
      "Conversion tracking and reporting",
    ],
  },
];

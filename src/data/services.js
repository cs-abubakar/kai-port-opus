import { Target, TrendingUp, BarChart3, Globe } from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Marketing Strategy",
    shortTitle: "Strategy",
    description: "Comprehensive marketing strategies that align with your business goals and create sustainable competitive advantages.",
    icon: Target,
    color: "bg-blue-500",
    lightColor: "bg-blue-100",
    textColor: "text-blue-500",
    features: [
      "Customer research & personas",
      "Value proposition development",
      "Customer journey mapping",
      "Funnel architecture design",
      "Messaging framework",
      "Competitive analysis"
    ]
  },
  {
    id: 2,
    title: "Performance Marketing",
    shortTitle: "Performance",
    description: "Data-driven paid advertising campaigns that deliver measurable ROI across Meta, Google, and emerging platforms.",
    icon: TrendingUp,
    color: "bg-amber-500",
    lightColor: "bg-amber-100",
    textColor: "text-amber-500",
    features: [
      "Meta Ads management",
      "Google Ads campaigns",
      "Budget allocation strategy",
      "Creative testing frameworks",
      "Audience targeting & segmentation",
      "ROAS optimization"
    ]
  },
  {
    id: 3,
    title: "Analytics & Tracking",
    shortTitle: "Analytics",
    description: "Robust measurement infrastructure that enables data-driven decisions and continuous optimization.",
    icon: BarChart3,
    color: "bg-green-500",
    lightColor: "bg-green-100",
    textColor: "text-green-500",
    features: [
      "Pixel & tracking setup",
      "Event tracking implementation",
      "Dashboard creation",
      "Attribution modeling",
      "Data analysis & insights",
      "Optimization recommendations"
    ]
  },
  {
    id: 4,
    title: "International Growth",
    shortTitle: "Global",
    description: "Strategic expansion into new markets with culturally-adapted campaigns and localized approaches.",
    icon: Globe,
    color: "bg-purple-500",
    lightColor: "bg-purple-100",
    textColor: "text-purple-500",
    features: [
      "Market entry strategy",
      "Cultural adaptation",
      "Multi-market management",
      "Local consumer insights",
      "Cross-border optimization",
      "Global brand consistency"
    ]
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business, goals, audience, and competitive landscape to understand the full picture."
  },
  {
    step: "02",
    title: "Strategy",
    description: "Develop a comprehensive plan with clear objectives, tactics, and measurable KPIs tailored to your needs."
  },
  {
    step: "03",
    title: "Execution",
    description: "Implement campaigns with meticulous attention to detail, creative excellence, and technical precision."
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuously analyze performance, test hypotheses, and refine strategies for maximum ROI."
  }
];

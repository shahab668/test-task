import { Shield, Heart, Clock } from "lucide-react";
export const PROVINCES = [
  { value: "AB", label: "Alberta" },
  { value: "BC", label: "British Columbia" },
  { value: "MB", label: "Manitoba" },
  { value: "NB", label: "New Brunswick" },
  { value: "NL", label: "Newfoundland and Labrador" },
  { value: "NS", label: "Nova Scotia" },
  { value: "NT", label: "Northwest Territories" },
  { value: "NU", label: "Nunavut" },
  { value: "ON", label: "Ontario" },
  { value: "PE", label: "Prince Edward Island" },
  { value: "QC", label: "Quebec" },
  { value: "SK", label: "Saskatchewan" },
  { value: "YT", label: "Yukon" },
] as const;


export const BENEFITS = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    desc: "Plans tailored to protect your family's future, up to $250,000.",
  },
  {
    icon: Heart,
    title: "Peace of Mind",
    desc: "Know your loved ones are financially secure, no matter what.",
  },
  {
    icon: Clock,
    title: "Quick & Easy",
    desc: "Get a personalized quote in under 2 minutes — no obligations.",
  },
];

export const TRUST_ITEMS = [
  "No medical exam required for most plans",
  "Coverage starts as low as $15/month",
  "Trusted by over 50,000 Canadian families",
  "Licensed advisors available 7 days a week",
];
export const SMOKING_STATUS = [
  { value: "No", label: "No" },
  { value: "Yes", label: "Yes" },
] as const;


export const GENDERS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Prefer not to say", label: "Prefer not to say" },
] as const;
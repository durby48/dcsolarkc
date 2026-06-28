export const siteConfig = {
  name: "DC Solar KC",
  legalName: "DC Solar LLC",
  domain: "dcsolarkc.com",
  url: "https://dcsolarkc.com",
  tagline: "Kansas City's Trusted Solar Experts",
  description:
    "DC Solar KC provides residential and commercial solar installation, plus solar panel removal and reinstallation for roofing and insurance claims across the greater Kansas City metro.",
  shortDescription:
    "Residential & commercial solar installation, removals, and reinstalls for the Kansas City metro.",
  email: "devon@dcsolarkc.com",
  phone: "816-274-2415",
  owner: "Devon Durbin",
  serviceArea: "Serving the greater Kansas City metro — Missouri & Kansas",
  baseCity: "Lee's Summit, MO",
  /** "Write a review" link used in customer emails. Override with env REVIEW_URL
   *  (set to your Google "write a review" link for best results). */
  reviewUrl: "https://www.google.com/search?q=DC+Solar+KC+reviews",
  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
  },
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Solar", href: "#why-solar" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
] as const;

// ============================================================================
// JOURNEY ENGINE CONFIGURATION
// Section Registrations and Route Mappings
// ============================================================================

export const JOURNEY_SECTIONS = [
  { id: "hero", label: "START" },
  { id: "marquee", label: "MOMENTUM" },
  { id: "capabilities", label: "CAPABILITIES" },
  { id: "work", label: "SELECTED WORK" },
  { id: "bento", label: "ENGINEERING" },
  { id: "testimonials", label: "TRUST" },
  { id: "manifesto", label: "PHILOSOPHY" },
  { id: "faq", label: "QUESTIONS" },
  { id: "cta", label: "LET'S BUILD" },
  { id: "footer", label: "END" }
];

export const ROUTE_JOURNEY_CONFIGS = {
  "/": JOURNEY_SECTIONS,
  "/services": [
    { id: "services-hero", label: "SERVICES" },
    { id: "services-matrix", label: "CAPABILITIES" },
    { id: "services-cta", label: "LET'S BUILD" },
    { id: "footer", label: "END" }
  ],
  "/work": [
    { id: "work-hero", label: "SELECTED WORK" },
    { id: "work-grid", label: "CASE STUDIES" },
    { id: "work-manifesto", label: "PHILOSOPHY" },
    { id: "work-cta", label: "LET'S BUILD" },
    { id: "footer", label: "END" }
  ],
  "/about": [
    { id: "about-hero", label: "STUDIO" },
    { id: "about-grid", label: "DISCIPLINE" },
    { id: "about-values", label: "VALUES" },
    { id: "about-manifesto", label: "PHILOSOPHY" },
    { id: "about-cta", label: "LET'S BUILD" },
    { id: "footer", label: "END" }
  ],
  "/contact": [
    { id: "contact-hero", label: "INQUIRY" },
    { id: "contact-manifesto", label: "INITIATIVE" },
    { id: "contact-form", label: "START" },
    { id: "footer", label: "END" }
  ]
};

export const COLOR_STOPS = {
  indigo: "#5350d7",
  blue: "#377cd6",
  cyan: "#30a1bf",
  green: "#39cf72"
};

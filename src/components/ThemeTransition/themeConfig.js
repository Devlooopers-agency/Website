export const themeConfig = {
  // Distance in viewport height ratio (0.25 to 0.40) where transition begins
  transitionWindowRatio: 0.32,

  // LERP factor for smooth scroll settling
  lerpFactor: 0.08,

  // Default theme if section theme is unspecified
  fallbackTheme: 'light',

  // Organic curve shape points for SVG mask edge
  edgeCurveHeight: 48,

  // Mobile simplification threshold (px width)
  mobileBreakpoint: 768
};

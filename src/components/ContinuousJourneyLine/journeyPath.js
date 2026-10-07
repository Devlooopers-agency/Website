// ============================================================================
// DYNAMIC JOURNEY PATH GENERATOR
// Calculates smooth, thick, serpentine Bezier curves anchored behind sections
// Weaves dynamically across page cards and sections behind text and content
// ============================================================================

import { JOURNEY_SECTIONS, ROUTE_JOURNEY_CONFIGS } from './journeyConfig';

/**
 * Builds the SVG cubic Bezier path based on real DOM positions of [data-journey-section]
 * @param {string} pathname Current route pathname
 * @returns {Object|null} Path coordinates, SVG path data, and milestone coordinates
 */
export function buildJourneyPath(pathname = '/') {
  const sections = Array.from(document.querySelectorAll('[data-journey-section]'));

  if (sections.length < 2) {
    return null;
  }

  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1200;

  const points = [];
  const sectionRegistry = ROUTE_JOURNEY_CONFIGS[pathname] || JOURNEY_SECTIONS;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    const centerY = Math.max(10, absoluteTop + rect.height * 0.5);

    const isLeft = index % 2 === 0;
    let x;

    if (viewportWidth >= 1200) {
      // Desktop: Wide sweeping serpentine curves
      x = isLeft ? viewportWidth * 0.12 : viewportWidth * 0.88;
    } else if (isTablet) {
      // Tablet: Sweeping side-to-side curves
      x = isLeft ? viewportWidth * 0.10 : viewportWidth * 0.90;
    } else {
      // Mobile: Flowing wave across margins
      x = isLeft ? 28 : viewportWidth - 28;
    }

    const sectionKey = section.getAttribute('data-journey-section') || `section-${index}`;
    const matchedConfig = sectionRegistry.find(c => c.id === sectionKey) || {
      id: sectionKey,
      label: sectionKey.toUpperCase()
    };

    points.push({
      id: sectionKey,
      label: matchedConfig.label,
      align: isLeft ? 'left' : 'right',
      x: Math.round(x * 10) / 10,
      y: Math.round(centerY * 10) / 10,
      element: section
    });
  });

  if (points.length < 2) return null;

  // Build Continuous Ultra-Smooth Curvy Cubic Bezier Path
  let pathData = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1];
    const current = points[i];
    const dy = current.y - previous.y;

    const control1X = Math.round(previous.x * 10) / 10;
    const control1Y = Math.round((previous.y + dy * 0.52) * 10) / 10;
    const control2X = Math.round(current.x * 10) / 10;
    const control2Y = Math.round((current.y - dy * 0.52) * 10) / 10;

    pathData += ` C ${control1X} ${control1Y} ${control2X} ${control2Y} ${current.x} ${current.y}`;
  }

  const documentHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight,
    points[points.length - 1].y + 200
  );

  return {
    pathData,
    points,
    sections,
    viewportWidth,
    documentHeight,
    isMobile
  };
}

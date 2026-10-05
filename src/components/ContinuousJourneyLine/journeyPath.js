// ============================================================================
// DYNAMIC JOURNEY PATH GENERATOR
// Calculates smooth, ultra-curvy serpentine Bezier curves anchored safely in side margins
// Prevents any overlap with central website text and content
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
    let align;

    if (viewportWidth >= 1200) {
      // Desktop: Anchor stations in spacious outer side margins (away from text)
      // Line weaves in sweeping curves across the background
      const margin = Math.max(36, Math.min(72, viewportWidth * 0.042));
      x = isLeft ? margin : viewportWidth - margin;
      align = isLeft ? 'left' : 'right';
    } else if (isTablet) {
      // Tablet: Anchor safely in side margins
      const margin = Math.max(24, Math.min(48, viewportWidth * 0.035));
      x = isLeft ? margin : viewportWidth - margin;
      align = isLeft ? 'left' : 'right';
    } else {
      // Mobile: Pin stations neatly in the left gutter
      x = 20;
      align = 'left';
    }

    const sectionKey = section.getAttribute('data-journey-section') || `section-${index}`;
    const matchedConfig = sectionRegistry.find(c => c.id === sectionKey) || {
      id: sectionKey,
      label: sectionKey.toUpperCase()
    };

    points.push({
      id: sectionKey,
      label: matchedConfig.label,
      align: align,
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

    if (isMobile) {
      // On mobile, create gentle flowing wave in the left margin area
      const midY = (previous.y + current.y) / 2;
      const wobbleX = (i % 2 === 1 ? 36 : 14);
      pathData += ` C ${wobbleX} ${previous.y + dy * 0.35} ${wobbleX} ${current.y - dy * 0.35} ${current.x} ${current.y}`;
    } else {
      // Desktop/Tablet: Wide, luxurious sweeping S-curves across the entire background
      const control1X = Math.round(previous.x * 10) / 10;
      const control1Y = Math.round((previous.y + dy * 0.52) * 10) / 10;
      const control2X = Math.round(current.x * 10) / 10;
      const control2Y = Math.round((current.y - dy * 0.52) * 10) / 10;

      pathData += ` C ${control1X} ${control1Y} ${control2X} ${control2Y} ${current.x} ${current.y}`;
    }
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

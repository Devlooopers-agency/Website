import { useEffect } from 'react';

/**
 * Custom hook to monitor document resize and recompute journey path geometry
 * Uses ResizeObserver with a 150ms debounce
 * @param {Function} onResizeCallback Function to invoke on resize
 * @param {Array} dependencies React dependencies
 */
export function useJourneyResize(onResizeCallback, dependencies = []) {
  useEffect(() => {
    let timeoutId = null;

    const debouncedRebuild = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        onResizeCallback();
      }, 150);
    };

    window.addEventListener('resize', debouncedRebuild, { passive: true });
    window.addEventListener('orientationchange', debouncedRebuild, { passive: true });

    let resizeObserver = null;
    if (typeof ResizeObserver !== 'undefined' && document.documentElement) {
      resizeObserver = new ResizeObserver(() => {
        debouncedRebuild();
      });
      resizeObserver.observe(document.documentElement);
      if (document.body) {
        resizeObserver.observe(document.body);
      }
    }

    // Also listen for font loading complete to recalculate if typography shifts layout
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(debouncedRebuild).catch(() => {});
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedRebuild);
      window.removeEventListener('orientationchange', debouncedRebuild);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, dependencies);
}

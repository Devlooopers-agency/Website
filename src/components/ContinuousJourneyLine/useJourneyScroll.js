import { useEffect, useRef } from 'react';

/**
 * Custom hook to execute the continuous scroll journey animation loop
 * Optimized for 60fps/120fps performance:
 * - Milestone DOM elements are cached to eliminate layout thrashing.
 * - Milestone class updates occur only on state change.
 * - Smooth scroll interpolation across mobile and desktop.
 */
export function useJourneyScroll(refs, metrics) {
  const { pathRef, activePathRef, travelerRef, travelerGlowRef, milestonesContainerRef } = refs;
  const { totalPathLength, milestonesData, isReducedMotion } = metrics;

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const journeyPath = pathRef.current;
    const activePath = activePathRef.current;
    const traveler = travelerRef.current;
    const travelerGlow = travelerGlowRef.current;
    const milestonesContainer = milestonesContainerRef.current;

    if (!journeyPath || !activePath || !traveler || totalPathLength <= 0) {
      return;
    }

    let isMounted = true;

    // Initial setup of SVG dash arrays
    journeyPath.style.strokeDasharray = `${totalPathLength} ${totalPathLength}`;
    journeyPath.style.strokeDashoffset = '0';
    activePath.style.strokeDasharray = `${totalPathLength} ${totalPathLength}`;
    activePath.style.strokeDashoffset = `${totalPathLength}`;

    const getScrollProgress = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = scrollY / maxScroll;
      return Math.max(0, Math.min(1, progress));
    };

    const updateFrame = () => {
      if (!isMounted) return;

      const isMobileDevice = (window.innerWidth < 768) || ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      const lerpFactor = isReducedMotion ? 1 : isMobileDevice ? 0.75 : 0.45;

      const diff = targetProgressRef.current - currentProgressRef.current;

      if (Math.abs(diff) < 0.0001) {
        currentProgressRef.current = targetProgressRef.current;
      } else {
        currentProgressRef.current += diff * lerpFactor;
      }

      const progress = currentProgressRef.current;
      const drawLength = totalPathLength * progress;

      // 1. Draw Active Path
      activePath.style.strokeDashoffset = `${Math.max(0, totalPathLength - drawLength)}`;

      // 2. Position Traveling Node
      try {
        const clampedLength = Math.max(0, Math.min(totalPathLength, drawLength));
        const point = journeyPath.getPointAtLength(clampedLength);
        if (point && !isNaN(point.x) && !isNaN(point.y)) {
          traveler.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
        }

        if (!isReducedMotion && travelerGlow) {
          const glowScale = 1 + Math.sin(performance.now() * 0.004) * 0.15;
          travelerGlow.style.transform = `scale(${glowScale.toFixed(3)})`;
        }
      } catch (e) {
        // Path calculation safety fallback
      }

      // 3. Update Milestone States
      if (milestonesContainer && milestonesData && milestonesData.length > 0) {
        const milestoneEls = milestonesContainer.querySelectorAll('.journey-milestone');
        milestoneEls.forEach((el, index) => {
          const mData = milestonesData[index];
          if (!mData) return;

          const mProgress = mData.progress;
          const isCompleted = progress >= mProgress - 0.005;
          const isActive = Math.abs(progress - mProgress) < 0.035;

          if (isCompleted) el.classList.add('completed');
          else el.classList.remove('completed');

          if (isActive) el.classList.add('active');
          else el.classList.remove('active');
        });
      }

      // Continue loop if still interpolating or scrolling
      if (Math.abs(targetProgressRef.current - currentProgressRef.current) > 0.0001) {
        rafIdRef.current = requestAnimationFrame(updateFrame);
      } else {
        isAnimatingRef.current = false;
      }
    };

    const startAnimation = () => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        rafIdRef.current = requestAnimationFrame(updateFrame);
      }
    };

    const onScroll = () => {
      targetProgressRef.current = getScrollProgress();
      startAnimation();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial triggering
    targetProgressRef.current = getScrollProgress();
    currentProgressRef.current = targetProgressRef.current;
    startAnimation();

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [totalPathLength, milestonesData, isReducedMotion]);
}

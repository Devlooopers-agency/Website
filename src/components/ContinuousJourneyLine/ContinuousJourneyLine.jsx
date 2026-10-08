import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { buildJourneyPath } from './journeyPath';
import { useJourneyResize } from './useJourneyResize';
import { useJourneyScroll } from './useJourneyScroll';
import './ContinuousJourneyLine.css';

export default function ContinuousJourneyLine() {
  const location = useLocation();
  const pathRef = useRef(null);
  const activePathRef = useRef(null);
  const travelerRef = useRef(null);
  const travelerGlowRef = useRef(null);
  const milestonesContainerRef = useRef(null);

  const [pathData, setPathData] = useState('');
  const [viewportWidth, setViewportWidth] = useState(1400);
  const [documentHeight, setDocumentHeight] = useState(2000);
  const [totalPathLength, setTotalPathLength] = useState(0);
  const [milestonesData, setMilestonesData] = useState([]);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check user preference for reduced motion
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(motionQuery.matches);
    const handler = (e) => setIsReducedMotion(e.matches);
    motionQuery.addEventListener('change', handler);
    return () => motionQuery.removeEventListener('change', handler);
  }, []);

  const lastGeometryRef = useRef({ pathData: '', documentHeight: 0, viewportWidth: 0 });
  const pendingRafRef = useRef(null);
  const pendingMilestoneRafRef = useRef(null);

  // Recalculate and generate journey path geometry safely
  const generatePath = useCallback(() => {
    if (pendingRafRef.current) {
      cancelAnimationFrame(pendingRafRef.current);
    }

    pendingRafRef.current = requestAnimationFrame(() => {
      pendingRafRef.current = null;
      const result = buildJourneyPath(location.pathname);
      if (!result || !result.pathData) {
        return;
      }

      // Optimization: avoid re-rendering SVG and recomputing layout if geometry is identical
      if (
        result.pathData === lastGeometryRef.current.pathData &&
        result.documentHeight === lastGeometryRef.current.documentHeight &&
        result.viewportWidth === lastGeometryRef.current.viewportWidth
      ) {
        return;
      }

      lastGeometryRef.current = {
        pathData: result.pathData,
        documentHeight: result.documentHeight,
        viewportWidth: result.viewportWidth
      };

      setPathData(result.pathData);
      setViewportWidth(result.viewportWidth);
      setDocumentHeight(result.documentHeight);

      if (pendingMilestoneRafRef.current) {
        cancelAnimationFrame(pendingMilestoneRafRef.current);
      }

      pendingMilestoneRafRef.current = requestAnimationFrame(() => {
        pendingMilestoneRafRef.current = null;
        if (pathRef.current) {
          try {
            const length = pathRef.current.getTotalLength();
            if (length > 0) {
              setTotalPathLength(length);

              const numPoints = result.points.length;
              const computedMilestones = result.points.map((pt, index) => {
                const progress = numPoints > 1 ? index / (numPoints - 1) : 0;
                const pointOnPath = pathRef.current.getPointAtLength(length * progress) || { x: pt.x, y: pt.y };

                return {
                  id: pt.id,
                  label: pt.label,
                  progress: progress,
                  x: Math.round(pointOnPath.x * 10) / 10,
                  y: Math.round(pointOnPath.y * 10) / 10
                };
              });

              setMilestonesData(computedMilestones);
            }
          } catch (e) {
            setMilestonesData(result.points.map((pt, i) => ({
              id: pt.id,
              label: pt.label,
              progress: result.points.length > 1 ? i / (result.points.length - 1) : 0,
              x: pt.x,
              y: pt.y
            })));
          }
        }
      });
    });
  }, [location.pathname]);

  // Generate on route transition and layout shifts with debounced scheduling
  useEffect(() => {
    generatePath();

    let debounceTimer = null;
    const scheduleDebouncedGenerate = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        generatePath();
      }, 120);
    };

    // Staggered initial checks for late-mounting images/fonts
    const t1 = setTimeout(generatePath, 150);
    const t2 = setTimeout(generatePath, 600);

    // Narrowed MutationObserver: Target <main> or .app-container instead of document.body/#root
    let observer = null;
    const targetNode = document.querySelector('main') || document.querySelector('.app-container') || document.getElementById('root');

    if (targetNode && typeof MutationObserver !== 'undefined') {
      observer = new MutationObserver((mutations) => {
        // Filter: Only schedule recalculation if a journey section was mounted/unmounted
        const hasRelevantSectionChange = mutations.some((m) => {
          if (m.type === 'childList') {
            for (let i = 0; i < m.addedNodes.length; i++) {
              const node = m.addedNodes[i];
              if (node.nodeType === 1) {
                if (node.hasAttribute && node.hasAttribute('data-journey-section')) return true;
                if (node.querySelector && node.querySelector('[data-journey-section]')) return true;
                if (node.tagName === 'SECTION' || node.tagName === 'MAIN') return true;
              }
            }
            for (let i = 0; i < m.removedNodes.length; i++) {
              const node = m.removedNodes[i];
              if (node.nodeType === 1) {
                if (node.hasAttribute && node.hasAttribute('data-journey-section')) return true;
                if (node.querySelector && node.querySelector('[data-journey-section]')) return true;
                if (node.tagName === 'SECTION' || node.tagName === 'MAIN') return true;
              }
            }
          }
          return false;
        });

        if (hasRelevantSectionChange) {
          scheduleDebouncedGenerate();
        }
      });

      observer.observe(targetNode, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      if (debounceTimer) clearTimeout(debounceTimer);
      if (pendingRafRef.current) cancelAnimationFrame(pendingRafRef.current);
      if (pendingMilestoneRafRef.current) cancelAnimationFrame(pendingMilestoneRafRef.current);
      if (observer) observer.disconnect();
    };
  }, [location.pathname, generatePath]);

  // Debounced resize observer
  useJourneyResize(generatePath, [generatePath]);

  // Scroll and traveler animation hook
  useJourneyScroll(
    {
      pathRef,
      activePathRef,
      travelerRef,
      travelerGlowRef,
      milestonesContainerRef
    },
    {
      totalPathLength,
      milestonesData,
      isReducedMotion
    }
  );

  if (!pathData) {
    return null;
  }

  return (
    <div
      className="journey-line-container"
      aria-hidden="true"
      style={{ height: `${documentHeight}px` }}
    >
      <svg
        className="journey-svg"
        preserveAspectRatio="none"
        viewBox={`0 0 ${viewportWidth} ${documentHeight}`}
        style={{ height: `${documentHeight}px`, width: '100%' }}
      >
        <defs>
          <linearGradient
            id="journeyGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#5350d7" />
            <stop offset="35%" stopColor="#377cd6" />
            <stop offset="65%" stopColor="#30a1bf" />
            <stop offset="100%" stopColor="#39cf72" />
          </linearGradient>
        </defs>

        {/* Inactive Base Path */}
        <path
          ref={pathRef}
          className="journey-base-path"
          d={pathData}
        />

        {/* Active Progress Path */}
        <path
          ref={activePathRef}
          className="journey-active-path"
          d={pathData}
          stroke="url(#journeyGradient)"
        />
      </svg>

      {/* Dynamic Milestones Layer */}
      <div ref={milestonesContainerRef} className="journey-milestones">
        {milestonesData.map((milestone) => (
          <div
            key={milestone.id}
            className="journey-milestone"
            data-section={milestone.id}
            style={{
              left: `${milestone.x}px`,
              top: `${milestone.y}px`
            }}
          >
            <span className="milestone-dot"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

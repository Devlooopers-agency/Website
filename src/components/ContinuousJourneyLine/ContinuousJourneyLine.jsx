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

  // Recalculate and generate journey path geometry
  const generatePath = useCallback(() => {
    // Brief RAF to ensure all dynamic page content and images are rendered
    requestAnimationFrame(() => {
      const result = buildJourneyPath(location.pathname);
      if (!result) {
        setPathData('');
        setTotalPathLength(0);
        setMilestonesData([]);
        return;
      }

      setPathData(result.pathData);
      setViewportWidth(result.viewportWidth);
      setDocumentHeight(result.documentHeight);

      // Measure SVG path length accurately after DOM updates
      requestAnimationFrame(() => {
        if (pathRef.current) {
          try {
            const length = pathRef.current.getTotalLength();
            setTotalPathLength(length);

            // Calculate precise milestone coordinates along the actual Bezier curve
            const numPoints = result.points.length;
            const computedMilestones = result.points.map((pt, index) => {
              const progress = numPoints > 1 ? index / (numPoints - 1) : 0;
              const pointOnPath = length > 0
                ? pathRef.current.getPointAtLength(length * progress)
                : { x: pt.x, y: pt.y };

              return {
                id: pt.id,
                label: pt.label,
                progress: progress,
                x: Math.round(pointOnPath.x * 10) / 10,
                y: Math.round(pointOnPath.y * 10) / 10
              };
            });

            setMilestonesData(computedMilestones);
          } catch (e) {
            // Fallback to direct coordinates if SVG math fails
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

  // Re-generate on route transition and layout shifts
  useEffect(() => {
    const timer = setTimeout(() => {
      generatePath();
    }, 100);
    return () => clearTimeout(timer);
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

        {/* Active Progress Path - Solid Crisp Gradient without Shadow */}
        <path
          ref={activePathRef}
          className="journey-active-path"
          d={pathData}
          stroke="url(#journeyGradient)"
        />

        {/* Traveling Node */}
        <g ref={travelerRef} className="journey-traveler">
          <circle
            ref={travelerGlowRef}
            className="traveler-glow"
            cx="0"
            cy="0"
            r="18"
          />
          <circle
            className="traveler-core"
            cx="0"
            cy="0"
            r="9"
          />
        </g>
      </svg>

      {/* Dynamic Milestones Layer */}
      <div ref={milestonesContainerRef} className="journey-milestones">
        {milestonesData.map((milestone) => (
          <div
            key={milestone.id}
            className={`journey-milestone milestone-align-${milestone.align || 'left'}`}
            data-section={milestone.id}
            style={{
              left: `${milestone.x}px`,
              top: `${milestone.y}px`
            }}
          >
            <span className="milestone-dot"></span>
            <span className="milestone-label">{milestone.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

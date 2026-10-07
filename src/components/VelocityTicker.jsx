import React, { useEffect, useRef } from 'react';

export default function VelocityTicker({
  items = [
    'META ADS (FB & INSTAGRAM)',
    'FULL-STACK REACT & NEXT.JS',
    'TECHNICAL SEO & CORE WEB VITALS',
    'HIGH-ROAS CONVERSION FUNNELS',
    '3D WEBGL & SPATIAL EXPERIENCES',
    'AI AUTOMATION & CRM AGENTS',
  ],
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const lastScrollY = useRef(0);
  const velocity = useRef(0);

  useEffect(() => {
    let ticking = false;
    let isInView = true;

    const onScroll = () => {
      if (!isInView) return;
      const currentScrollY = window.scrollY;
      velocity.current = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          velocity.current *= 0.88;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    let x = 0;
    let rafId = 0;
    const step = () => {
      if (isInView && trackRef.current) {
        const track = trackRef.current;
        const v = velocity.current;
        const half = track.scrollWidth / 2 || 1;
        x -= 1.1 + Math.min(Math.abs(v) * 0.28, 12);
        if (-x >= half) x += half;

        const skew = Math.max(-8, Math.min(8, v * -0.22));
        track.style.transform = `translate3d(${x}px, 0, 0) skewX(${skew}deg)`;
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);

    let observer = null;
    if ('IntersectionObserver' in window && containerRef.current) {
      observer = new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;
      }, { threshold: 0.05 });
      observer.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (observer) observer.disconnect();
    };
  }, []);

  const list = [...items, ...items];

  return (
    <div ref={containerRef} className="velocity-ticker-wrap" aria-label="Capabilities Marquee">
      <div ref={trackRef} className="velocity-ticker-track">
        {list.map((item, idx) => (
          <span key={idx} className="ticker-item-group">
            <span className="ticker-text">{item}</span>
            <span className="ticker-spark">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
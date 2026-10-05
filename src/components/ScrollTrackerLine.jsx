import React, { useEffect, useState } from 'react';

export default function ScrollTrackerLine() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-tracker-container" aria-hidden="true">
      {/* Background track line */}
      <div className="scroll-track-bg"></div>
      
      {/* Dynamic scrolling glowing line */}
      <div 
        className="scroll-track-fill" 
        style={{ height: `${(scrollProgress * 100).toFixed(2)}%` }}
      >
        <div className="scroll-pulse-head"></div>
      </div>

      {/* Checkpoint Nodes along the scroll path */}
      <div className="scroll-nodes">
        <span className={`scroll-node n-1 ${scrollProgress >= 0.05 ? 'passed' : ''}`} title="Hero"></span>
        <span className={`scroll-node n-2 ${scrollProgress >= 0.22 ? 'passed' : ''}`} title="Services"></span>
        <span className={`scroll-node n-3 ${scrollProgress >= 0.45 ? 'passed' : ''}`} title="ROAS Engine"></span>
        <span className={`scroll-node n-4 ${scrollProgress >= 0.68 ? 'passed' : ''}`} title="Selected Work"></span>
        <span className={`scroll-node n-5 ${scrollProgress >= 0.88 ? 'passed' : ''}`} title="FAQ & Contact"></span>
      </div>
    </div>
  );
}

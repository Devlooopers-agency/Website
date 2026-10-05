import React, { useRef, useState } from 'react';

export default function InteractiveCard({ children, className = '', style = {} }) {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`interactive-spotlight-card ${className}`}
    >
      {/* Laser Top Sweep on Hover */}
      <div className="card-laser-top">
        <div className="laser-sweep-bar" />
      </div>

      {/* Radial Cursor Spotlight */}
      <div
        className="card-cursor-spotlight"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(360px circle at ${pos.x}px ${pos.y}px, rgba(56, 189, 248, 0.16), rgba(83, 80, 215, 0.08) 40%, transparent 80%)`,
        }}
      />

      <div className="card-content-relative">{children}</div>
    </div>
  );
}
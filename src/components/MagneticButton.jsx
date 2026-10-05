import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MagneticButton({
  children,
  to,
  href,
  className = '',
  onClick,
  target,
  rel,
  ...props
}) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!btnRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (clientX - centerX) * 0.32;
    const distanceY = (clientY - centerY) * 0.32;
    setOffset({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const dynamicStyle = {
    transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    transition: offset.x === 0 ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
  };

  if (to) {
    return (
      <Link
        ref={btnRef}
        to={to}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={dynamicStyle}
        className={`magnetic-interactive-btn ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={dynamicStyle}
        className={`magnetic-interactive-btn ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={dynamicStyle}
      className={`magnetic-interactive-btn ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
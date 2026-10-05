import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useThemeTransition } from './ThemeTransition/useThemeTransition.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentTheme, isTransitioning, targetTheme } = useThemeTransition();

  const activeTheme = isTransitioning ? targetTheme : currentTheme;

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  }, [location.pathname]);

  const toggleMenu = () => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    document.body.classList.toggle('menu-open', nextState);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.body.classList.remove('menu-open');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className={`site-header theme-${activeTheme}`} id="siteHeader" data-theme-navbar={activeTheme}>
      <NavLink
        to="/"
        className="brand"
        id="navBrand"
        aria-label="devlooopers home"
      >
        <img src="/assets/devlooopers-logo-d.png" alt="devlooopers icon" className="brand-logo-icon" />
        <img src="/assets/devlooopers-logo.png" alt="devlooopers" className="brand-logo-text" />
      </NavLink>

      <button
        className={`menu-toggle ${isOpen ? 'open' : ''}`}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <i></i><i></i>
      </button>

      <nav className={`nav ${isOpen ? 'open' : ''}`} aria-label="Primary">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="nav-label">Home</span> <span className="nav-arrow" aria-hidden="true">→</span>
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="nav-label">Services & Ads</span> <span className="nav-arrow" aria-hidden="true">→</span>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="nav-label">Work</span> <span className="nav-arrow" aria-hidden="true">→</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <span className="nav-label">Studio</span> <span className="nav-arrow" aria-hidden="true">→</span>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-cta"
        >
          Get Free Audit <span>↗</span>
        </NavLink>
      </nav>
    </header>
  );
}

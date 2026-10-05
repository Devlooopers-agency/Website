import React, { createContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { themeEngine } from './ThemeTransitionEngine.js';
import { THEMES, DEFAULT_PAGE_THEMES } from './themeTypes.js';
import ThemeTransitionLayer from './ThemeTransitionLayer.jsx';

export const ThemeTransitionContext = createContext(null);

export function ThemeTransitionProvider({ children }) {
  const location = useLocation();
  const [themeState, setThemeState] = useState(themeEngine.state);

  // Determine initial theme for route
  const pageInitialTheme = useMemo(() => {
    return DEFAULT_PAGE_THEMES[location.pathname] || THEMES.LIGHT;
  }, [location.pathname]);

  useEffect(() => {
    // Initialize theme engine for current page
    themeEngine.init(pageInitialTheme);

    const unsubscribe = themeEngine.subscribe((newState) => {
      setThemeState({ ...newState });
    });

    return () => {
      unsubscribe();
    };
  }, [location.pathname, pageInitialTheme]);

  // Re-sync sections after dynamic layout renders
  useEffect(() => {
    const timer = setTimeout(() => {
      themeEngine.refreshSections();
      themeEngine.onScroll();
    }, 150);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const contextValue = useMemo(() => {
    return {
      ...themeState,
      themeEngine,
      setThemeProgress: (prog) => {
        themeEngine.targetProgress = prog;
      }
    };
  }, [themeState]);

  return (
    <ThemeTransitionContext.Provider value={contextValue}>
      {children}
      <ThemeTransitionLayer />
    </ThemeTransitionContext.Provider>
  );
}

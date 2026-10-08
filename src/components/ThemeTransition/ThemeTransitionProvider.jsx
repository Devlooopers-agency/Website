import React, { createContext, useEffect, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { themeEngine } from './ThemeTransitionEngine.js';
import { THEMES, DEFAULT_PAGE_THEMES } from './themeTypes.js';
import ThemeTransitionLayer from './ThemeTransitionLayer.jsx';

export const ThemeTransitionContext = createContext(null);

export function ThemeTransitionProvider({ children }) {
  const location = useLocation();

  // Determine initial theme for route
  const pageInitialTheme = useMemo(() => {
    return DEFAULT_PAGE_THEMES[location.pathname] || THEMES.LIGHT;
  }, [location.pathname]);

  const [themeState, setThemeState] = useState(() => ({
    currentTheme: pageInitialTheme,
    targetTheme: pageInitialTheme,
    isTransitioning: false,
    activeSection: null
  }));

  useEffect(() => {
    // Initialize theme engine for current page
    themeEngine.init(pageInitialTheme);

    const unsubscribe = themeEngine.subscribe((newState) => {
      setThemeState((prevState) => {
        // Prevent re-rendering if discrete state properties have not changed
        if (
          prevState.currentTheme === newState.currentTheme &&
          prevState.isTransitioning === newState.isTransitioning &&
          prevState.targetTheme === newState.targetTheme &&
          prevState.activeSection === newState.activeSection
        ) {
          return prevState;
        }
        return {
          currentTheme: newState.currentTheme,
          targetTheme: newState.targetTheme,
          isTransitioning: newState.isTransitioning,
          activeSection: newState.activeSection
        };
      });
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
  }, [themeState.currentTheme, themeState.targetTheme, themeState.isTransitioning, themeState.activeSection]);

  return (
    <ThemeTransitionContext.Provider value={contextValue}>
      {children}
      <ThemeTransitionLayer />
    </ThemeTransitionContext.Provider>
  );
}

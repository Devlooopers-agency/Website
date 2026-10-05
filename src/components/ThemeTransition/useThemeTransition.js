import { useContext } from 'react';
import { ThemeTransitionContext } from './ThemeTransitionProvider.jsx';

export function useThemeTransition() {
  const context = useContext(ThemeTransitionContext);
  if (!context) {
    throw new Error('useThemeTransition must be used within a ThemeTransitionProvider');
  }
  return context;
}

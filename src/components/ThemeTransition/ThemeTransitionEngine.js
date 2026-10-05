import { THEMES } from './themeTypes.js';
import { themeConfig } from './themeConfig.js';

export class ThemeTransitionEngine {
  constructor() {
    this.listeners = new Set();
    this.state = {
      currentTheme: THEMES.LIGHT,
      targetTheme: THEMES.LIGHT,
      sourceTheme: THEMES.LIGHT,
      transitionProgress: 0,
      activeSection: null,
      previousSection: null,
      nextSection: null,
      isTransitioning: false,
      direction: 'down', // 'down' | 'up'
      wipeY: 0 // percentage or pixels for layer offset
    };

    this.targetProgress = 0;
    this.currentProgress = 0;
    this.rafId = null;
    this.sectionsCache = [];
    this.isListening = false;

    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.tick = this.tick.bind(this);
  }

  subscribe(listener) {
    this.listeners.add(listener);
    // Notify immediately with current state
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  init(initialTheme = THEMES.LIGHT) {
    this.state.currentTheme = initialTheme;
    this.state.targetTheme = initialTheme;
    this.state.sourceTheme = initialTheme;
    this.state.transitionProgress = 0;
    this.currentProgress = 0;
    this.targetProgress = 0;

    this.applyCSSVariables(initialTheme);
    this.refreshSections();

    if (!this.isListening) {
      window.addEventListener('scroll', this.onScroll, { passive: true });
      window.addEventListener('resize', this.onResize, { passive: true });
      this.isListening = true;
    }

    this.onScroll();
  }

  refreshSections() {
    const elements = Array.from(document.querySelectorAll('[data-theme-section]'));
    this.sectionsCache = elements.map((el, index) => {
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const bottom = top + rect.height;
      return {
        el,
        id: el.getAttribute('data-theme-section') || `section-${index}`,
        theme: el.getAttribute('data-theme') || themeConfig.fallbackTheme,
        top,
        bottom,
        height: rect.height,
        index
      };
    });
  }

  onResize() {
    this.refreshSections();
    this.onScroll();
  }

  onScroll() {
    if (!this.sectionsCache.length) return;

    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const triggerOffset = vh * (1 - themeConfig.transitionWindowRatio);

    let activeIdx = 0;

    // Find current active section
    for (let i = 0; i < this.sectionsCache.length; i++) {
      const section = this.sectionsCache[i];
      if (scrollY + vh * 0.4 >= section.top) {
        activeIdx = i;
      }
    }

    const activeSec = this.sectionsCache[activeIdx];
    const nextSec = this.sectionsCache[activeIdx + 1];
    const prevSec = this.sectionsCache[activeIdx - 1];

    let sourceTheme = activeSec ? activeSec.theme : THEMES.LIGHT;
    let targetTheme = sourceTheme;
    let progress = 0;
    let direction = 'down';

    // Check boundary transition to next section
    if (nextSec && nextSec.theme !== sourceTheme) {
      const boundaryTop = nextSec.top;
      const windowHeight = vh * 0.45;
      const dist = scrollY + vh - boundaryTop;

      if (dist > 0 && dist < windowHeight) {
        progress = Math.max(0, Math.min(1, dist / windowHeight));
        targetTheme = nextSec.theme;
        direction = 'down';
      } else if (dist >= windowHeight) {
        sourceTheme = nextSec.theme;
        targetTheme = nextSec.theme;
        progress = 0;
      }
    }

    // Check boundary transition from previous section if scrolling back up
    if (prevSec && prevSec.theme !== sourceTheme && progress === 0) {
      const boundaryBottom = activeSec.top;
      const windowHeight = vh * 0.45;
      const dist = boundaryBottom - scrollY;

      if (dist > 0 && dist < windowHeight) {
        progress = Math.max(0, Math.min(1, 1 - dist / windowHeight));
        sourceTheme = prevSec.theme;
        targetTheme = activeSec.theme;
        direction = 'up';
      }
    }

    this.targetProgress = progress;

    // Update instant properties
    this.state.sourceTheme = sourceTheme;
    this.state.targetTheme = targetTheme;
    this.state.activeSection = activeSec ? activeSec.id : null;
    this.state.previousSection = prevSec ? prevSec.id : null;
    this.state.nextSection = nextSec ? nextSec.id : null;
    this.state.direction = direction;

    if (!this.rafId) {
      this.rafId = requestAnimationFrame(this.tick);
    }
  }

  tick() {
    const diff = this.targetProgress - this.currentProgress;

    if (Math.abs(diff) > 0.001) {
      this.currentProgress += diff * themeConfig.lerpFactor;
      this.rafId = requestAnimationFrame(this.tick);
    } else {
      this.currentProgress = this.targetProgress;
      this.rafId = null;
    }

    this.state.transitionProgress = this.currentProgress;
    this.state.isTransitioning = this.currentProgress > 0.01 && this.currentProgress < 0.99;

    if (this.currentProgress >= 0.95 && this.state.targetTheme !== this.state.currentTheme) {
      this.state.currentTheme = this.state.targetTheme;
      this.applyCSSVariables(this.state.currentTheme);
    } else if (this.currentProgress <= 0.05 && this.state.sourceTheme !== this.state.currentTheme) {
      this.state.currentTheme = this.state.sourceTheme;
      this.applyCSSVariables(this.state.currentTheme);
    }

    // Pass data attribute to root html/body
    const rootEl = document.documentElement;
    if (this.state.isTransitioning) {
      rootEl.setAttribute('data-theme-transitioning', 'true');
    } else {
      rootEl.removeAttribute('data-theme-transitioning');
      rootEl.setAttribute('data-theme', this.state.currentTheme);
    }

    this.notify();
  }

  applyCSSVariables(theme) {
    const rootEl = document.documentElement;
    rootEl.setAttribute('data-theme', theme);
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.isListening) {
      window.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('resize', this.onResize);
      this.isListening = false;
    }
    this.listeners.clear();
  }
}

export const themeEngine = new ThemeTransitionEngine();

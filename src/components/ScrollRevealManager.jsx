import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRevealManager() {
  const location = useLocation();

  useEffect(() => {
    // Select all reveal elements and major text components across the website
    const selector = '.reveal, section h1, section h2, section h3, section .section-kicker, section .eyebrow, section .hero-lead, section .section-copy';
    const elements = Array.from(document.querySelectorAll(selector));

    if (!elements.length) return;

    // Add base reveal class if not present
    elements.forEach((el) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            // Smoothly fade away when out of viewport
            entry.target.classList.remove('active');
          }
        });
      },
      {
        rootMargin: '-30px 0px -30px 0px',
        threshold: 0.12
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  return null;
}

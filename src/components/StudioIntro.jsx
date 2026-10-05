import React, { useEffect, useState, useRef } from 'react';

export default function StudioIntro() {
  const [show, setShow] = useState(true);
  const flyingBrandRef = useRef(null);
  const studioIntroRef = useRef(null);

  useEffect(() => {
    // Only run on fresh session/home visit
    const hasSeenIntro = sessionStorage.getItem('devlooopers_intro_seen');
    if (hasSeenIntro) {
      document.body.classList.add('header-ready', 'title-revealed', 'scene-revealed');
      document.body.classList.remove('intro-running');
      setShow(false);
      return;
    }

    document.body.classList.add('intro-running');
    let introSkipped = false;

    function completeIntroInstantly() {
      if (introSkipped) return;
      introSkipped = true;
      sessionStorage.setItem('devlooopers_intro_seen', 'true');

      document.body.classList.add('header-ready', 'title-revealed', 'scene-revealed');
      document.body.classList.remove('intro-running');

      const studioIntro = studioIntroRef.current;
      const flyingBrand = flyingBrandRef.current;
      if (studioIntro) studioIntro.classList.add('intro-fade-out');
      if (flyingBrand) flyingBrand.style.display = 'none';
      window.dispatchEvent(new Event('resize'));

      setTimeout(() => {
        setShow(false);
      }, 500);
    }

    const t1 = setTimeout(() => {
      if (!introSkipped && flyingBrandRef.current) {
        flyingBrandRef.current.classList.add('is-visible');
      }
    }, 250);

    const t2 = setTimeout(() => {
      if (introSkipped) return;
      const navBrand = document.getElementById('navBrand');
      const flyingBrand = flyingBrandRef.current;
      if (navBrand && flyingBrand) {
        const navRect = navBrand.getBoundingClientRect();
        const flyingRect = flyingBrand.getBoundingClientRect();
        const deltaX = (navRect.left + navRect.width / 2) - (window.innerWidth / 2);
        const deltaY = (navRect.top + navRect.height / 2) - (window.innerHeight / 2);
        const scaleRatio = (navRect.height > 0 && flyingRect.height > 0)
          ? Math.max(0.2, Math.min(0.4, navRect.height / flyingRect.height))
          : 0.28;

        flyingBrand.style.setProperty('--dock-x', `${deltaX}px`);
        flyingBrand.style.setProperty('--dock-y', `${deltaY}px`);
        flyingBrand.style.setProperty('--dock-scale', `${scaleRatio}`);
        flyingBrand.classList.add('is-docked');
      }

      setTimeout(() => {
        if (!introSkipped) {
          document.body.classList.add('header-ready');
          if (studioIntroRef.current) studioIntroRef.current.classList.add('intro-fade-out');
        }
      }, 650);
    }, 1800);

    const t3 = setTimeout(() => {
      if (!introSkipped) document.body.classList.add('title-revealed');
    }, 2700);

    const t4 = setTimeout(() => {
      if (!introSkipped) {
        document.body.classList.add('scene-revealed');
        window.dispatchEvent(new Event('resize'));
      }
    }, 3400);

    const t5 = setTimeout(() => {
      if (!introSkipped) {
        sessionStorage.setItem('devlooopers_intro_seen', 'true');
        document.body.classList.remove('intro-running');
        setShow(false);
      }
    }, 4200);

    const onKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') completeIntroInstantly();
    };
    const onWheel = () => completeIntroInstantly();

    window.addEventListener('keydown', onKeyDown, { once: true });
    window.addEventListener('wheel', onWheel, { once: true, passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', onWheel);
      document.body.classList.remove('intro-running');
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="studioIntro"
      ref={studioIntroRef}
      className="studio-intro"
      aria-hidden="true"
      onClick={() => {
        document.body.classList.add('header-ready', 'title-revealed', 'scene-revealed');
        document.body.classList.remove('intro-running');
        sessionStorage.setItem('devlooopers_intro_seen', 'true');
        setShow(false);
      }}
    >
      <div className="intro-flying-brand" id="introFlyingBrand" ref={flyingBrandRef}>
        <img src="/assets/devlooopers-logo-d.png" alt="devlooopers icon" className="intro-brand-icon" />
        <img src="/assets/devlooopers-logo.png" alt="devlooopers wordmark" className="intro-brand-text" />
      </div>
      <div className="intro-click-hint">Click anywhere to skip ?</div>
    </div>
  );
}

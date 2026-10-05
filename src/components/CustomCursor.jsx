import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function isNavigationalElement(target) {
  if (!target) return false;
  // 1. Direct anchor tags or React Router links
  if (target.closest('a, [to], [href]')) return true;
  // 2. Project case study cards and modal triggers
  if (target.closest('.project-card, .case-study, .work-bento-card, [data-project], [data-cursor-text]')) return true;
  return false;
}

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const iconRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer:fine)').matches;
    const cursor = cursorRef.current;
    if (!isFinePointer || !cursor) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    const icon = iconRef.current;

    let active = true;
    let cursorRafId = null;
    let mouseX = -100, mouseY = -100;
    let cursorX = -100, cursorY = -100;
    let ringX = -100, ringY = -100;
    let currentMagneticEl = null;

    const onPointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.classList.contains('is-active')) {
        cursor.classList.add('is-active');
        cursorX = mouseX;
        cursorY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
      }
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onPointerDown = (e) => {
      if (isNavigationalElement(e.target)) {
        cursor.classList.add('is-clicking');
      }
    };

    const onPointerUp = () => {
      cursor.classList.remove('is-clicking');
    };

    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });

    const onMouseLeave = () => {
      cursor.classList.remove('is-active');
      cursor.classList.remove('is-clicking');
    };
    document.addEventListener('mouseleave', onMouseLeave);

    function updateCursor() {
      if (!active) return;
      cursorX += (mouseX - cursorX) * 0.28;
      cursorY += (mouseY - cursorY) * 0.28;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      if (ring && dot) {
        ring.style.transform = `translate3d(${ringX - cursorX}px, ${ringY - cursorY}px, 0)`;
      }

      if (currentMagneticEl) {
        const rect = currentMagneticEl.getBoundingClientRect();
        const dist = Math.hypot(mouseX - (rect.left + rect.width / 2), mouseY - (rect.top + rect.height / 2));
        if (dist < 80) {
          const pullX = (mouseX - (rect.left + rect.width / 2)) * 0.28;
          const pullY = (mouseY - (rect.top + rect.height / 2)) * 0.28;
          currentMagneticEl.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
        } else {
          currentMagneticEl.style.transform = '';
          currentMagneticEl = null;
        }
      }
      cursorRafId = requestAnimationFrame(updateCursor);
    }
    cursorRafId = requestAnimationFrame(updateCursor);

    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const topBarEl = target.closest('#siteHeader, .site-header');
      if (topBarEl) {
        cursor.className = 'custom-cursor is-active';
        if (label) label.textContent = '';
        if (icon) icon.style.display = 'none';
        return;
      }

      const projectCard = target.closest('.project-card, .case-study, .work-bento-card, [data-project]');
      if (projectCard && !document.body.classList.contains('modal-open')) {
        cursor.className = 'custom-cursor is-active is-project';
        if (label) label.textContent = projectCard.dataset.cursorText || 'EXPLORE CASE';
        if (icon) icon.style.display = 'none';
        return;
      }

      // Restrict hover link animation exclusively to true navigational elements (a, [to], [href])
      const navLink = target.closest('a, [to], [href]');
      if (navLink) {
        const magneticBtn = target.closest('[data-magnetic="true"], .button.primary');
        if (magneticBtn) currentMagneticEl = magneticBtn;

        cursor.className = 'custom-cursor is-active is-link';
        if (label) label.textContent = navLink.dataset.cursor || 'VIEW';
        if (icon) icon.style.display = 'none';
        return;
      }

      // Default cursor state for non-navigational elements
      cursor.className = 'custom-cursor is-active';
      if (label) label.textContent = '';
      if (icon) icon.style.display = 'none';
    };

    document.addEventListener('mouseover', onMouseOver);

    return () => {
      active = false;
      if (cursorRafId) cancelAnimationFrame(cursorRafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onMouseOver);
      if (currentMagneticEl) currentMagneticEl.style.transform = '';
    };
  }, [location.pathname]);

  return (
    <div className="custom-cursor" id="customCursor" ref={cursorRef} aria-hidden="true">
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-ring" ref={ringRef}>
        <span className="cursor-icon" ref={iconRef}></span>
        <span className="cursor-label" ref={labelRef}></span>
      </div>
    </div>
  );
}

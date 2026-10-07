import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

function isNavigationalElement(target) {
  if (!target) return false;
  if (target.closest('a, [to], [href]')) return true;
  if (target.closest('.project-card, .case-study, .work-bento-card, [data-project], [data-cursor-text]')) return true;
  return false;
}

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);
  const iconRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    setIsFinePointer(isFine);
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

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
      startCursorAnimation();
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

    let isAnimating = false;

    function startCursorAnimation() {
      if (!isAnimating && active) {
        isAnimating = true;
        cursorRafId = requestAnimationFrame(updateCursor);
      }
    }

    function updateCursor() {
      if (!active) return;
      
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      const ringDx = mouseX - ringX;
      const ringDy = mouseY - ringY;

      cursorX += dx * 0.28;
      cursorY += dy * 0.28;
      ringX += ringDx * 0.16;
      ringY += ringDy * 0.16;

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

      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05 || Math.abs(ringDx) > 0.05 || Math.abs(ringDy) > 0.05 || currentMagneticEl) {
        cursorRafId = requestAnimationFrame(updateCursor);
      } else {
        isAnimating = false;
      }
    }

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

      const navLink = target.closest('a, [to], [href]');
      if (navLink) {
        const magneticBtn = target.closest('[data-magnetic="true"], .button.primary');
        if (magneticBtn) currentMagneticEl = magneticBtn;

        cursor.className = 'custom-cursor is-active is-link';
        if (label) label.textContent = navLink.dataset.cursor || 'VIEW';
        if (icon) icon.style.display = 'none';
        return;
      }

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
  }, [location.pathname, isFinePointer]);

  // Return null on touch/mobile devices to avoid rendering unused cursor DOM nodes
  if (!isFinePointer) return null;

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

/**
 * DEVLOOOPERS — Unified High-Performance Engine
 * Features:
 * - Dynamic Responsive Lifecycle Manager (Clean unmount/remount on breakpoint switch)
 * - IntersectionObserver GPU & Battery Saver (Auto-pauses WebGL & Canvas loops when off-screen)
 * - Custom Magnetic Cursor (Desktop only, passive listeners)
 * - Studio Intro Sequence with instant skip
 * - Branded Fluid Page Transitions
 * - Interactive Project Showcase Modals & Simulators
 * - Work Gallery HUD & Kinetic Manifesto Scroll
 */

(function () {
  'use strict';

  // ============================================================
  // 1. GLOBAL UTILITIES & CORE NAVIGATION
  // ============================================================

  // Mobile Navigation Overlay
  const menuToggle = document.querySelector('.menu-toggle');
  const primaryNav = document.querySelector('.nav');

  if (menuToggle && primaryNav) {
    function setNavState(isOpen) {
      primaryNav.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', isOpen);

      if (isOpen) {
        const firstLink = primaryNav.querySelector('a');
        if (firstLink) setTimeout(() => firstLink.focus(), 100);
      }
    }

    menuToggle.addEventListener('click', () => {
      setNavState(!primaryNav.classList.contains('open'));
    });

    primaryNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (primaryNav.classList.contains('open')) setNavState(false);
      });
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
        setNavState(false);
        menuToggle.focus();
      }
    });
  }

  // Micro-interactions: Floating Form Labels & Nav Arrows
  function initMicroInteractions() {
    document.querySelectorAll('.nav > a:not(.nav-cta)').forEach(link => {
      if (!link.querySelector('.nav-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'nav-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '↗';
        link.appendChild(arrow);
      }
    });

    document.querySelectorAll('.floating-input').forEach(input => {
      const update = () => {
        input.classList.toggle('has-value', Boolean(input.value && input.value.trim() !== ''));
      };
      input.addEventListener('input', update);
      input.addEventListener('change', update);
      update();
    });
  }
  initMicroInteractions();

  // Contact Form Demo Handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = 'Thank you! Your message has been received. Our team will get back to you shortly.';
        status.style.color = 'var(--green)';
      }
      contactForm.reset();
    });
  }

  // ============================================================
  // 2. BRANDED PAGE TRANSITION SYSTEM
  // ============================================================
  function initBrandedTransitions() {
    let transitionEl = document.getElementById('brandedTransition');
    if (!transitionEl) {
      transitionEl = document.createElement('div');
      transitionEl.id = 'brandedTransition';
      transitionEl.className = 'branded-transition';
      transitionEl.setAttribute('aria-hidden', 'true');
      transitionEl.innerHTML = `
        <div class="transition-gradient-line"></div>
        <div class="transition-white-canvas"></div>
        <div class="transition-gradient-sweep"></div>
        <div class="transition-content">
          <div class="transition-kicker" id="transKicker">01 / SELECTED WORK</div>
          <h2 class="transition-title" id="transTitle">WORK</h2>
          <div class="transition-coords"><span>DESIGN</span> ✦ <span>CODE</span> ✦ <span>CURIOSITY</span></div>
        </div>
      `;
      document.body.appendChild(transitionEl);
    }

    const entryCurtain = document.createElement('div');
    entryCurtain.className = 'page-entry-curtain';
    document.body.appendChild(entryCurtain);
    setTimeout(() => entryCurtain.remove(), 450);

    window.addEventListener('pageshow', () => {
      transitionEl.classList.remove('is-active');
    });

    const kickerEl = document.getElementById('transKicker');
    const titleEl = document.getElementById('transTitle');

    function getDestInfo(href, linkEl) {
      const clean = href.split('#')[0].split('?')[0].toLowerCase();
      if (clean.endsWith('work.html') || clean === 'work.html') return { title: 'WORK', kicker: '01 / SELECTED WORK' };
      if (clean.endsWith('services.html') || clean === 'services.html') return { title: 'SERVICES', kicker: '02 / CAPABILITIES & SYSTEMS' };
      if (clean.endsWith('about.html') || clean === 'about.html') return { title: 'STUDIO', kicker: '03 / MANIFESTO & PHILOSOPHY' };
      if (clean.endsWith('contact.html') || clean === 'contact.html') return { title: 'START A PROJECT', kicker: '04 / INITIATION VECTOR' };
      if (clean.endsWith('index.html') || clean === 'index.html' || clean === '' || clean === './') return { title: 'DEVLOOOPERS', kicker: 'HOME / DIGITAL EXPERIENCES' };
      const txt = (linkEl.textContent || '').replace(/[→↗✕‹›]/g, '').trim().toUpperCase();
      return { title: txt || 'DEVLOOOPERS', kicker: 'EXPLORE / NEXT DESTINATION' };
    }

    let isNavigating = false;
    document.querySelectorAll('a[href]').forEach(link => {
      if (link.closest('.project-card[data-project]')) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
      if (href.startsWith('http') && !href.includes(window.location.host)) return;
      if (link.getAttribute('target') === '_blank') return;

      link.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || isNavigating) return;
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const targetFile = href.split('#')[0].split('/').pop() || 'index.html';
        if (currentFile === targetFile && href.includes('#')) return;

        e.preventDefault();
        isNavigating = true;

        const info = getDestInfo(href, link);
        if (titleEl) titleEl.textContent = info.title;
        if (kickerEl) kickerEl.textContent = info.kicker;

        transitionEl.classList.add('is-active');
        setTimeout(() => {
          window.location.href = href;
        }, 440);
      });
    });
  }
  initBrandedTransitions();

  // ============================================================
  // 3. STUDIO INTRO SEQUENCE (With instant skip)
  // ============================================================
  const studioIntro = document.getElementById('studioIntro');
  const flyingBrand = document.getElementById('introFlyingBrand');
  const navBrand = document.getElementById('navBrand');

  if (studioIntro && flyingBrand) {
    let introSkipped = false;

    function completeIntroInstantly() {
      if (introSkipped) return;
      introSkipped = true;

      document.body.classList.add('header-ready', 'title-revealed', 'scene-revealed');
      document.body.classList.remove('intro-running');

      studioIntro.classList.add('intro-fade-out');
      if (flyingBrand) flyingBrand.style.display = 'none';
      window.dispatchEvent(new Event('resize'));

      setTimeout(() => {
        studioIntro.remove();
        flyingBrand?.remove();
      }, 600);
    }

    studioIntro.addEventListener('click', completeIntroInstantly);
    window.addEventListener('wheel', () => {
      if (document.body.classList.contains('intro-running')) completeIntroInstantly();
    }, { once: true, passive: true });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') completeIntroInstantly();
    }, { once: true });

    setTimeout(() => {
      if (!introSkipped) flyingBrand.classList.add('is-visible');
    }, 250);

    setTimeout(() => {
      if (introSkipped) return;
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
          studioIntro.classList.add('intro-fade-out');
        }
      }, 650);
    }, 1800);

    setTimeout(() => {
      if (!introSkipped) document.body.classList.add('title-revealed');
    }, 2700);

    setTimeout(() => {
      if (!introSkipped) {
        document.body.classList.add('scene-revealed');
        window.dispatchEvent(new Event('resize'));
      }
    }, 3400);

    setTimeout(() => {
      if (!introSkipped) {
        document.body.classList.remove('intro-running');
        studioIntro.remove();
        flyingBrand?.remove();
      }
    }, 4200);
  } else {
    document.body.classList.remove('intro-running');
  }

  // ============================================================
  // 4. SCROLL REVEALS & CARD PHYSICS (With IntersectionObserver)
  // ============================================================
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // Orbit Satellite SVG Animation with IntersectionObserver
  const orbitSvgs = document.querySelectorAll('.orbit-svg');
  if (orbitSvgs.length) {
    let orbitTheta = 0;
    let orbitAnimId = null;
    let isOrbitVisible = true;

    function animateOrbits() {
      if (!isOrbitVisible) return;
      orbitTheta += 0.024;
      orbitSvgs.forEach(svg => {
        const sat1 = svg.querySelector('.sat-1');
        const sat2 = svg.querySelector('.sat-2');
        const conn = svg.querySelector('.orbit-connector');
        if (sat1 && sat2 && conn) {
          const cx = 150, cy = 150, rx = 110, ry = 44;
          const x1 = cx + rx * Math.cos(orbitTheta);
          const y1 = cy + ry * Math.sin(orbitTheta);
          const x2 = cx + rx * Math.cos(orbitTheta + Math.PI);
          const y2 = cy + ry * Math.sin(orbitTheta + Math.PI);

          sat1.setAttribute('cx', x1.toFixed(1));
          sat1.setAttribute('cy', y1.toFixed(1));
          sat2.setAttribute('cx', x2.toFixed(1));
          sat2.setAttribute('cy', y2.toFixed(1));

          conn.setAttribute('x1', x1.toFixed(1));
          conn.setAttribute('y1', y1.toFixed(1));
          conn.setAttribute('x2', x2.toFixed(1));
          conn.setAttribute('y2', y2.toFixed(1));
        }
      });
      orbitAnimId = requestAnimationFrame(animateOrbits);
    }

    if ('IntersectionObserver' in window) {
      const orbitObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          isOrbitVisible = entry.isIntersecting;
          if (isOrbitVisible && !orbitAnimId) {
            orbitAnimId = requestAnimationFrame(animateOrbits);
          } else if (!isOrbitVisible && orbitAnimId) {
            cancelAnimationFrame(orbitAnimId);
            orbitAnimId = null;
          }
        });
      }, { threshold: 0.05 });

      orbitSvgs.forEach(svg => orbitObserver.observe(svg));
    } else {
      orbitAnimId = requestAnimationFrame(animateOrbits);
    }
  }

  // Loop Canvas Wave Physics with IntersectionObserver
  const loopCanvases = document.querySelectorAll('.loop-wave-canvas');
  loopCanvases.forEach(canvas => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let wavePhase = 0;
    let waveAnimId = null;
    let isWaveVisible = true;

    function renderLoopWave() {
      if (!isWaveVisible) return;
      const w = (canvas.width = canvas.clientWidth || 280);
      const h = (canvas.height = canvas.clientHeight || 240);
      ctx.clearRect(0, 0, w, h);
      wavePhase += 0.035;

      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const rOffset = r * 0.7;
        ctx.lineWidth = 1.6 - r * 0.3;
        ctx.strokeStyle = r === 0 ? 'rgba(83, 80, 215, 0.45)' : r === 1 ? 'rgba(48, 161, 191, 0.4)' : 'rgba(57, 207, 114, 0.35)';

        for (let x = 0; x <= w; x += 6) {
          const normX = x / w;
          const env = Math.sin(normX * Math.PI);
          const y = h / 2 + Math.sin(normX * 5 + wavePhase + rOffset) * 26 * env + Math.cos(normX * 9 - wavePhase * 0.7) * 12 * env;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      waveAnimId = requestAnimationFrame(renderLoopWave);
    }

    if ('IntersectionObserver' in window) {
      const waveObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          isWaveVisible = entry.isIntersecting;
          if (isWaveVisible && !waveAnimId) {
            waveAnimId = requestAnimationFrame(renderLoopWave);
          } else if (!isWaveVisible && waveAnimId) {
            cancelAnimationFrame(waveAnimId);
            waveAnimId = null;
          }
        });
      }, { threshold: 0.05 });
      waveObserver.observe(canvas);
    } else {
      waveAnimId = requestAnimationFrame(renderLoopWave);
    }
  });

  // ============================================================
  // 5. PROJECT SHOWCASE MODAL SYSTEM & SIMULATOR
  // ============================================================
  function initProjectModals() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalChip = document.getElementById('modalChip');
    const modalChallenge = document.getElementById('modalChallenge');
    const modalSolution = document.getElementById('modalSolution');
    const modalInteractiveBox = document.getElementById('modalInteractiveBox');
    const modalDeliverables = document.getElementById('modalDeliverables');
    const modalStats = document.getElementById('modalStats');
    const modalTech = document.getElementById('modalTech');
    const modalHeroArt = document.getElementById('modalHeroArt');
    const modalClose = document.getElementById('modalClose');
    const modalBackdrop = document.getElementById('modalBackdrop');

    const projectData = {
      orbit: {
        title: 'Orbit Logistics',
        subtitle: 'Global freight intelligence and real-time fleet coordination platform.',
        chip: 'PRODUCT / 2026',
        challenge: 'Logistics dispatchers juggled dozens of disconnected tools, creating coordination delays and cognitive fatigue during high-volume operations.',
        solution: 'We engineered a unified spatial command center with real-time route optimization, dynamic telemetry heatmaps, and low-latency synchronization.',
        deliverables: ['UX Strategy & Design System', 'WebGL Spatial Telemetry Engine', 'Fullstack Production Architecture'],
        stats: [
          { num: '+140%', lbl: 'Dispatch Speed' },
          { num: '45ms', lbl: 'Sync Latency' },
          { num: '99.98%', lbl: 'Accuracy' }
        ],
        tech: ['Three.js', 'WebGL PBR', 'TypeScript', 'Tailored CSS'],
        artClass: 'art-orbit',
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
              <button class="button primary" id="simPingBtn" style="padding: 9px 16px; font-size: 0.82rem;">⚡ Run Fleet Simulation</button>
              <button class="button" id="simClearBtn" style="padding: 9px 16px; font-size: 0.82rem; background: #fff; border: 1px solid var(--line);">Reset Stream</button>
            </div>
            <div id="simTerminal" style="background: #10131b; color: #39cf72; font-family: monospace; font-size: 0.8rem; padding: 14px; border-radius: 12px; text-align: left; max-height: 110px; overflow-y: auto; line-height: 1.5;">
              [SYS_INIT] 4,820 Cargo Nodes Online · Telemetry latency: 42ms · Routing nominal.
            </div>
          </div>
        `
      },
      nova: {
        title: 'Nova Spaces',
        subtitle: 'Spatial navigation and 3D architectural showroom experience.',
        chip: '3D / WEBGL',
        challenge: 'Architectural presentations relied on flat 2D renders that lacked physical depth and realistic atmospheric daylight response.',
        solution: 'Built an interactive 3D WebGL experience featuring dynamic sun elevation shaders, spatial soundscapes, and smooth camera choreographies.',
        deliverables: ['3D WebGL Shader Pipeline', 'Spatial Camera Choreography', 'Performance-Tuned Geometry Engine'],
        stats: [
          { num: '60fps', lbl: 'Fluid Motion' },
          { num: '4.8x', lbl: 'User Engagement' },
          { num: '<1.2s', lbl: 'Time to First Draw' }
        ],
        tech: ['Three.js', 'Custom GLSL', 'Web Audio API', 'Vite'],
        artClass: 'art-nova',
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
              <button class="button primary" id="simSunBtn" style="padding: 9px 16px; font-size: 0.82rem;">☀️ Daylight Shift</button>
              <button class="button" id="simAngleBtn" style="padding: 9px 16px; font-size: 0.82rem; background: #fff; border: 1px solid var(--line);">Perspective Shift</button>
            </div>
            <div id="simTerminal" style="background: #10131b; color: #377cd6; font-family: monospace; font-size: 0.8rem; padding: 14px; border-radius: 12px; text-align: left; max-height: 110px; overflow-y: auto; line-height: 1.5;">
              [GL_SCENE] 3D Shaders compiled · Sun elevation: 42.5° · Ray bounce count: 2.
            </div>
          </div>
        `
      },
      loop: {
        title: 'Loop Intelligence',
        subtitle: 'Autonomous AI workflow orchestrator and visual system canvas.',
        chip: 'AI / PLATFORM',
        challenge: 'Multi-agent LLM systems were opaque black boxes where team members could neither debug decisions nor guide multi-step flows reliably.',
        solution: 'Engineered an interactive node canvas that renders agent reasoning chains in real time, making execution observable, debuggable, and steerable.',
        deliverables: ['Agent Workflow Canvas', 'Vector Embedding Retrieval', 'Interactive Real-Time Telemetry'],
        stats: [
          { num: '10x', lbl: 'Workflow Leverage' },
          { num: '0.4s', lbl: 'Step Latency' },
          { num: '100%', lbl: 'Deterministic Safety' }
        ],
        tech: ['Agent Tooling', 'Canvas Rendering', 'Vector RAG', 'Node.js'],
        artClass: 'art-loop',
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
              <button class="button primary" id="simAgentBtn" style="padding: 9px 16px; font-size: 0.82rem;">🤖 Execute Agent Step</button>
              <button class="button" id="simResetAgentBtn" style="padding: 9px 16px; font-size: 0.82rem; background: #fff; border: 1px solid var(--line);">Reset Graph</button>
            </div>
            <div id="simTerminal" style="background: #10131b; color: #5350d7; font-family: monospace; font-size: 0.8rem; padding: 14px; border-radius: 12px; text-align: left; max-height: 110px; overflow-y: auto; line-height: 1.5;">
              [LOOP_GRAPH] 6 Agent nodes ready · Memory pool sync: Active · Awaiting task prompt.
            </div>
          </div>
        `
      }
    };

    function openModal(key) {
      const data = projectData[key] || projectData.orbit;
      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalChip) modalChip.textContent = data.chip;
      if (modalChallenge) modalChallenge.textContent = data.challenge;
      if (modalSolution) modalSolution.textContent = data.solution;

      if (modalDeliverables) {
        modalDeliverables.innerHTML = data.deliverables.map(d => `<li>${d}</li>`).join('');
      }

      if (modalStats) {
        modalStats.innerHTML = data.stats.map(s => `<div class="stat-item"><span class="stat-num">${s.num}</span><span class="stat-lbl">${s.lbl}</span></div>`).join('');
      }

      if (modalTech) {
        modalTech.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');
      }

      if (modalInteractiveBox) {
        modalInteractiveBox.innerHTML = data.interactiveDemo;
        bindSimulatorControls(key);
      }

      if (modalHeroArt) {
        modalHeroArt.className = 'modal-hero-art ' + data.artClass;
      }

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    function bindSimulatorControls(key) {
      const term = document.getElementById('simTerminal');
      if (!term) return;

      const pingBtn = document.getElementById('simPingBtn');
      const clearBtn = document.getElementById('simClearBtn');
      if (pingBtn && clearBtn) {
        pingBtn.addEventListener('click', () => {
          const ports = ['Singapore', 'Rotterdam', 'Los Angeles', 'Dubai', 'Hamburg'];
          const p = ports[Math.floor(Math.random() * ports.length)];
          const lat = (Math.random() * 20 + 20).toFixed(1);
          term.innerHTML += `<br>[REROUTE] Optimizing 24 vessels towards Hub ${p}... ✓ Latency ${lat}ms`;
          term.scrollTop = term.scrollHeight;
        });
        clearBtn.addEventListener('click', () => {
          term.innerHTML = '[SYS_INIT] 4,820 Cargo Nodes Online · Telemetry latency: 42ms · Routing nominal.';
        });
      }

      const sunBtn = document.getElementById('simSunBtn');
      if (sunBtn) {
        sunBtn.addEventListener('click', () => {
          const elev = (Math.random() * 60 + 10).toFixed(1);
          term.innerHTML += `<br>[SUN_SHIFT] Solar angle updated: ${elev}° · Ambient temperature shader recalculated.`;
          term.scrollTop = term.scrollHeight;
        });
      }

      const agentBtn = document.getElementById('simAgentBtn');
      if (agentBtn) {
        agentBtn.addEventListener('click', () => {
          const tasks = ['Synthesize user requirement', 'Query knowledge graph', 'Verify constraints', 'Emit output bundle'];
          const t = tasks[Math.floor(Math.random() * tasks.length)];
          term.innerHTML += `<br>[AGENT_EXEC] Step completed: "${t}" (Confidence 99.4%)`;
          term.scrollTop = term.scrollHeight;
        });
      }
    }

    document.querySelectorAll('[data-project], .work-case-trigger').forEach(trigger => {
      trigger.addEventListener('click', e => {
        const key = trigger.dataset.project || trigger.closest('[data-project]')?.dataset.project;
        if (key) {
          e.preventDefault();
          openModal(key);
        }
      });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }
  initProjectModals();

  // ============================================================
  // 6. WORK GALLERY HUD & CAROUSEL (work.html)
  // ============================================================
  function initWorkGallery() {
    const track = document.getElementById('workGalleryTrack');
    const stages = document.querySelectorAll('.work-project-stage');
    if (!track || !stages.length) return;

    const counter = document.getElementById('workHudCounter');
    const hudName = document.getElementById('workHudName');
    const prevBtn = document.getElementById('workPrevBtn');
    const nextBtn = document.getElementById('workNextBtn');
    const progressBar = document.getElementById('workProgressBar');
    const pills = document.querySelectorAll('.work-pill');

    const names = ['ORBIT LOGISTICS', 'NOVA SPACES', 'LOOP INTELLIGENCE'];
    let currentIndex = 0;

    function goToSlide(idx) {
      currentIndex = Math.max(0, Math.min(idx, stages.length - 1));
      stages.forEach((stage, i) => {
        stage.classList.toggle('active', i === currentIndex);
      });

      if (counter) counter.textContent = `0${currentIndex + 1} / 0${stages.length}`;
      if (hudName) hudName.textContent = names[currentIndex] || '';
      if (progressBar) progressBar.style.width = `${((currentIndex + 1) / stages.length) * 100}%`;

      pills.forEach((pill, i) => {
        pill.classList.toggle('active', i === currentIndex);
      });

      const activeStage = stages[currentIndex];
      if (activeStage && window.innerWidth <= 860) {
        activeStage.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    pills.forEach((pill, i) => {
      pill.addEventListener('click', () => goToSlide(i));
    });

    goToSlide(0);
  }
  initWorkGallery();

  // ============================================================
  // 7. KINETIC MANIFESTO TYPOGRAPHY SCROLL
  // ============================================================
  function initKineticTypography() {
    const section = document.getElementById('kineticStatementSection') || document.querySelector('.kinetic-statement-section');
    if (!section) return;

    const meterBar = section.querySelector('.meter-bar, #kineticMeterBar');
    const driftTrack = section.querySelector('.kinetic-drift-track');

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      if (meterBar) meterBar.style.width = `${(progress * 100).toFixed(1)}%`;
      if (driftTrack) driftTrack.style.transform = `translateX(${(-progress * 60).toFixed(1)}px)`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  initKineticTypography();

  // ============================================================
  // 8. DYNAMIC RESPONSIVE LIFECYCLE CONTROLLER
  //    (Cleanly mounts & destroys Desktop vs Mobile engines)
  // ============================================================

  const breakpoint = window.matchMedia('(min-width: 861px)');

  // Engine State Stores for Safe Cleanup
  let desktopEngineInstance = null;
  let mobileEngineInstance = null;

  // Shared High-Fidelity Devlooopers "D" 3D Model Builder
  function buildDevlooopers3DModel(scene, rootGroup, objectGroup) {
    const colIndigo = new THREE.Color(0x5350d7);
    const colBlue = new THREE.Color(0x377cd6);
    const colCyan = new THREE.Color(0x30a1bf);
    const colGreen = new THREE.Color(0x39cf72);

    function applyGradient(geo) {
      const pos = geo.attributes.position;
      const count = pos.count;
      const colors = new Float32Array(count * 3);
      let minY = Infinity, maxY = -Infinity, minX = Infinity, maxX = -Infinity;
      for (let i = 0; i < count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
      const rangeX = (maxX - minX) || 1, rangeY = (maxY - minY) || 1;
      for (let i = 0; i < count; i++) {
        const x = pos.getX(i), y = pos.getY(i);
        const t = THREE.MathUtils.clamp(((x - minX) / rangeX) * 0.5 + ((y - minY) / rangeY) * 0.5, 0, 1);
        const col = new THREE.Color();
        if (t < 0.33) col.lerpColors(colIndigo, colBlue, t / 0.33);
        else if (t < 0.66) col.lerpColors(colBlue, colCyan, (t - 0.33) / 0.33);
        else col.lerpColors(colCyan, colGreen, (t - 0.66) / 0.34);
        colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
      }
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }

    const pbrMat = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.14,
      metalness: 0.88,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      side: THREE.DoubleSide
    });

    // 1. Outer "D" Frame Ribbon
    const outerDPoints = [
      new THREE.Vector3(-1.1, -1.85, 0.0), new THREE.Vector3(-1.1, 0.0, 0.15),
      new THREE.Vector3(-1.1, 1.85, 0.0), new THREE.Vector3(-0.4, 2.15, 0.22),
      new THREE.Vector3(0.85, 1.9, 0.35), new THREE.Vector3(1.75, 1.05, 0.2),
      new THREE.Vector3(1.95, 0.0, 0.0), new THREE.Vector3(1.75, -1.05, -0.2),
      new THREE.Vector3(0.85, -1.9, -0.35), new THREE.Vector3(-0.4, -2.15, -0.22),
      new THREE.Vector3(-1.1, -1.85, 0.0)
    ];
    const outerDGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(outerDPoints, true, 'centripetal'), 160, 0.28, 24, true);
    applyGradient(outerDGeo);
    objectGroup.add(new THREE.Mesh(outerDGeo, pbrMat));

    // 2. Chevron Peak Ribbon
    const chevronPoints = [
      new THREE.Vector3(-1.1, 0.45, 0.0), new THREE.Vector3(-0.2, 0.45, 0.1),
      new THREE.Vector3(0.35, 0.95, 0.22), new THREE.Vector3(0.85, 0.45, 0.15)
    ];
    const chevronGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(chevronPoints, false, 'centripetal'), 60, 0.18, 16, false);
    applyGradient(chevronGeo);
    objectGroup.add(new THREE.Mesh(chevronGeo, pbrMat));

    // 3. Inner Arc Ribbon
    const innerArcPoints = [
      new THREE.Vector3(0.85, 0.45, 0.15), new THREE.Vector3(1.35, 0.0, 0.1),
      new THREE.Vector3(1.2, -0.75, -0.1), new THREE.Vector3(0.65, -1.25, -0.2),
      new THREE.Vector3(-0.15, -0.95, -0.1)
    ];
    const innerArcGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(innerArcPoints, false, 'centripetal'), 80, 0.18, 16, false);
    applyGradient(innerArcGeo);
    objectGroup.add(new THREE.Mesh(innerArcGeo, pbrMat));

    // 4. Circuit Tracks & Node Rings
    const track1Geo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(-1.1, -0.32, 0.0), new THREE.Vector3(0.35, -0.32, 0.1)], false), 20, 0.14, 12, false);
    applyGradient(track1Geo);
    objectGroup.add(new THREE.Mesh(track1Geo, pbrMat));

    const node1Geo = new THREE.TorusGeometry(0.25, 0.08, 12, 24);
    applyGradient(node1Geo);
    const node1Mesh = new THREE.Mesh(node1Geo, pbrMat);
    node1Mesh.position.set(0.35, -0.32, 0.1);
    objectGroup.add(node1Mesh);

    // 5. Satellites
    const satelliteGroup = new THREE.Group();
    objectGroup.add(satelliteGroup);
    const satMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x39cf72, emissiveIntensity: 0.85, roughness: 0.2, metalness: 0.8 });
    const satL = new THREE.Mesh(new THREE.SphereGeometry(0.18, 18, 18), satMat); satL.position.set(-2.5, 0, 0); satelliteGroup.add(satL);
    const satR = new THREE.Mesh(new THREE.SphereGeometry(0.18, 18, 18), satMat); satR.position.set(2.5, 0, 0); satelliteGroup.add(satR);

    // 6. Orbiting Crystal Shards
    const shardGeo = new THREE.OctahedronGeometry(0.16, 0);
    const shardMat = new THREE.MeshStandardMaterial({ color: 0x5350d7, emissive: 0x377cd6, emissiveIntensity: 0.6, roughness: 0.2, metalness: 0.9 });
    const shards = [];
    for (let i = 0; i < 4; i++) {
      const shard = new THREE.Mesh(shardGeo, shardMat);
      const angle = (i / 4) * Math.PI * 2;
      const radius = 2.8 + (i % 2) * 0.4;
      shard.userData = { angle, radius, speed: 0.8 + i * 0.25, yOffset: (i - 1.5) * 0.5 };
      shard.position.set(Math.cos(angle) * radius, shard.userData.yOffset, Math.sin(angle) * radius);
      rootGroup.add(shard);
      shards.push(shard);
    }

    // 7. Orbital Rings
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.015, 12, 120), new THREE.MeshBasicMaterial({ color: 0x5350d7, transparent: true, opacity: 0.35 }));
    ring1.rotation.x = Math.PI * 0.38; ring1.rotation.y = Math.PI * 0.15;
    rootGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.012, 12, 120), new THREE.MeshBasicMaterial({ color: 0x39cf72, transparent: true, opacity: 0.28 }));
    ring2.rotation.x = -Math.PI * 0.32; ring2.rotation.z = Math.PI * 0.25;
    rootGroup.add(ring2);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.95));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.35);
    dirLight.position.set(5, 7, 6);
    scene.add(dirLight);
    const pLight1 = new THREE.PointLight(0x5350d7, 4.2, 16); pLight1.position.set(-4.5, 3.5, 4); scene.add(pLight1);
    const pLight2 = new THREE.PointLight(0x39cf72, 3.8, 16); pLight2.position.set(4.5, -3.5, 4); scene.add(pLight2);

    return { satelliteGroup, shards, ring1, ring2, pbrMat };
  }

  // --- DESKTOP ENGINE ---
  function initDesktopEngine() {
    let active = true;
    let heroRafId = null;
    let cursorRafId = null;
    let heroObserver = null;
    let isHeroInView = true;

    // A) Desktop Custom Magnetic Cursor
    const isFinePointer = window.matchMedia('(pointer:fine)').matches;
    const cursor = document.getElementById('customCursor');

    let onPointerMoveCursor = null;
    let onMouseOverCursor = null;

    if (isFinePointer && cursor) {
      const dot = cursor.querySelector('.cursor-dot');
      const ring = cursor.querySelector('.cursor-ring');
      const label = cursor.querySelector('.cursor-label');
      const icon = cursor.querySelector('.cursor-icon');

      let mouseX = -100, mouseY = -100;
      let cursorX = -100, cursorY = -100;
      let ringX = -100, ringY = -100;
      let currentMagneticEl = null;

      onPointerMoveCursor = e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!cursor.classList.contains('is-active')) {
          cursor.classList.add('is-active');
          cursorX = mouseX; cursorY = mouseY;
          ringX = mouseX; ringY = mouseY;
        }
      };
      window.addEventListener('pointermove', onPointerMoveCursor, { passive: true });

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

      onMouseOverCursor = e => {
        const target = e.target;
        if (!target) return;

        const sceneEl = target.closest('#heroScene, #heroCanvas, .hero-visual');
        if (sceneEl) {
          cursor.className = 'custom-cursor is-active is-3d';
          if (label) label.textContent = 'EXPLORE';
          if (icon) { icon.textContent = '⊕'; icon.style.display = 'block'; }
          return;
        }

        const projectCard = target.closest('.project-card, .case-study');
        if (projectCard && !document.body.classList.contains('modal-open')) {
          cursor.className = 'custom-cursor is-active is-project';
          if (label) label.textContent = projectCard.dataset.cursorText || 'VIEW PROJECT';
          if (icon) icon.style.display = 'none';
          return;
        }

        const magneticBtn = target.closest('[data-magnetic="true"], .button.primary');
        if (magneticBtn) currentMagneticEl = magneticBtn;

        const interactiveEl = target.closest('a, button, .float-card, [data-cursor]');
        if (interactiveEl) {
          cursor.className = 'custom-cursor is-active is-link';
          if (label) label.textContent = interactiveEl.dataset.cursor || (interactiveEl.tagName === 'A' ? 'VIEW' : '');
          if (icon) icon.style.display = 'none';
          return;
        }

        cursor.className = 'custom-cursor is-active';
        if (label) label.textContent = '';
        if (icon) icon.style.display = 'none';
      };
      document.addEventListener('mouseover', onMouseOverCursor, { passive: true });
    }

    // B) Desktop 3D Hero Scene with IntersectionObserver
    const heroScene = document.getElementById('heroScene');
    const heroCanvas = document.getElementById('heroCanvas');

    let onHeroPointerMove = null;
    let onHeroResize = null;
    let renderer = null;

    if (heroScene && heroCanvas && typeof THREE !== 'undefined') {
      try {
        const card1 = heroScene.querySelector('.card-one');
        const card2 = heroScene.querySelector('.card-two');
        const card3 = heroScene.querySelector('.card-three');

        const width = heroScene.clientWidth || 500;
        const height = heroScene.clientHeight || 500;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
        camera.position.set(0, 0, 7.5);

        renderer = new THREE.WebGLRenderer({
          canvas: heroCanvas,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height, false);
        if (renderer.toneMapping !== undefined) {
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1.25;
        }

        const rootGroup = new THREE.Group();
        rootGroup.position.x = 0.35;
        scene.add(rootGroup);

        const objectGroup = new THREE.Group();
        rootGroup.add(objectGroup);

        const modelParts = buildDevlooopers3DModel(scene, rootGroup, objectGroup);

        let mouseX = 0, mouseY = 0;
        onHeroPointerMove = e => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        window.addEventListener('pointermove', onHeroPointerMove, { passive: true });

        const clock = new THREE.Clock();

        function renderDesktop() {
          if (!active) return;
          if (isHeroInView) {
            const elapsedTime = clock.getElapsedTime();
            const delta = clock.getDelta();

            objectGroup.rotation.y = elapsedTime * 0.45 + mouseX * 0.85;
            objectGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 - mouseY * 0.55;
            objectGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

            modelParts.satelliteGroup.rotation.z = Math.sin(elapsedTime * 0.7) * 0.35;
            modelParts.satelliteGroup.rotation.y = elapsedTime * 0.3;

            modelParts.shards.forEach(shard => {
              shard.userData.angle += delta * shard.userData.speed;
              const rad = shard.userData.radius + Math.sin(elapsedTime * 2 + shard.userData.speed) * 0.15;
              shard.position.x = Math.cos(shard.userData.angle) * rad;
              shard.position.z = Math.sin(shard.userData.angle) * rad;
              shard.position.y = shard.userData.yOffset + Math.cos(elapsedTime * 1.8 + shard.userData.speed) * 0.25;
              shard.rotation.x += delta * 2.0; shard.rotation.y += delta * 1.8;
            });

            modelParts.ring1.rotation.z = elapsedTime * 0.15;
            modelParts.ring2.rotation.y = -elapsedTime * 0.12;

            if (card1) card1.style.transform = `translate3d(${mouseX * -18}px, ${mouseY * -14}px, 0)`;
            if (card2) card2.style.transform = `translate3d(${mouseX * 22}px, ${mouseY * 18}px, 0)`;
            if (card3) card3.style.transform = `translate3d(${mouseX * -12}px, ${mouseY * 20}px, 0)`;

            renderer.render(scene, camera);
          }
          heroRafId = requestAnimationFrame(renderDesktop);
        }
        heroRafId = requestAnimationFrame(renderDesktop);

        // IntersectionObserver pause/resume
        if ('IntersectionObserver' in window) {
          heroObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              isHeroInView = entry.isIntersecting;
            });
          }, { threshold: 0.05 });
          heroObserver.observe(heroScene);
        }

        onHeroResize = () => {
          const w = heroScene.clientWidth || 500;
          const h = heroScene.clientHeight || 500;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
        };
        window.addEventListener('resize', onHeroResize);
      } catch (err) {
        console.error('Desktop 3D Hero error:', err);
      }
    }

    return {
      destroy: () => {
        active = false;
        if (heroRafId) cancelAnimationFrame(heroRafId);
        if (cursorRafId) cancelAnimationFrame(cursorRafId);
        if (heroObserver) heroObserver.disconnect();
        if (onPointerMoveCursor) window.removeEventListener('pointermove', onPointerMoveCursor);
        if (onMouseOverCursor) document.removeEventListener('mouseover', onMouseOverCursor);
        if (onHeroPointerMove) window.removeEventListener('pointermove', onHeroPointerMove);
        if (onHeroResize) window.removeEventListener('resize', onHeroResize);
        if (cursor) cursor.classList.remove('is-active', 'is-3d', 'is-project', 'is-link');
        if (renderer) renderer.dispose();
      }
    };
  }

  // --- MOBILE ENGINE ---
  function initMobileEngine() {
    let active = true;
    let heroRafId = null;
    let heroObserver = null;
    let isHeroInView = true;

    // A) Mobile Capability Accordions
    const capCards = document.querySelectorAll('.capability-card-interactive');
    const accordionHandlers = [];

    capCards.forEach(card => {
      const toggleBtn = card.querySelector('.cap-accordion-toggle');
      if (!toggleBtn) return;

      const handler = e => {
        e.preventDefault();
        const isExpanded = card.classList.contains('is-expanded');

        capCards.forEach(other => {
          other.classList.remove('is-expanded');
          const otherBtn = other.querySelector('.cap-accordion-toggle');
          if (otherBtn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const icon = otherBtn.querySelector('.cap-accordion-icon');
            if (icon) icon.textContent = '+';
          }
        });

        if (!isExpanded) {
          card.classList.add('is-expanded');
          toggleBtn.setAttribute('aria-expanded', 'true');
          const icon = toggleBtn.querySelector('.cap-accordion-icon');
          if (icon) icon.textContent = '−';
        }
      };

      toggleBtn.addEventListener('click', handler);
      accordionHandlers.push({ btn: toggleBtn, handler });
    });

    // B) Mobile 3D Hero Scene (Identical Gorgeous Logo + Touch Drag Physics)
    const heroScene = document.getElementById('heroScene');
    const heroCanvas = document.getElementById('heroCanvas');

    let onPointerDown = null;
    let onPointerMove = null;
    let onPointerUp = null;
    let onHeroResize = null;
    let renderer = null;

    if (heroScene && heroCanvas && typeof THREE !== 'undefined') {
      try {
        const width = heroScene.clientWidth || 340;
        const height = heroScene.clientHeight || 280;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
        camera.position.set(0, 0, 7.8);

        renderer = new THREE.WebGLRenderer({
          canvas: heroCanvas,
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(width, height, false);
        if (renderer.toneMapping !== undefined) {
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1.25;
        }

        const rootGroup = new THREE.Group();
        rootGroup.scale.set(0.88, 0.88, 0.88);
        scene.add(rootGroup);

        const objectGroup = new THREE.Group();
        rootGroup.add(objectGroup);

        // Build the EXACT same complete high-fidelity 3D logo model
        const modelParts = buildDevlooopers3DModel(scene, rootGroup, objectGroup);

        let isDragging = false;
        let lastX = 0, lastY = 0;
        let rotY = 0, rotX = 0;
        let velX = 0, velY = 0;

        onPointerDown = e => {
          isDragging = true;
          lastX = e.clientX;
          lastY = e.clientY;
        };
        heroScene.addEventListener('pointerdown', onPointerDown, { passive: true });

        onPointerMove = e => {
          if (!isDragging) return;
          const dx = e.clientX - lastX;
          const dy = e.clientY - lastY;
          velX = dx * 0.008;
          velY = dy * 0.006;
          rotY += velX;
          rotX = Math.max(-0.5, Math.min(0.5, rotX - velY));
          lastX = e.clientX;
          lastY = e.clientY;
        };
        window.addEventListener('pointermove', onPointerMove, { passive: true });

        onPointerUp = () => { isDragging = false; };
        window.addEventListener('pointerup', onPointerUp, { passive: true });
        window.addEventListener('pointercancel', onPointerUp, { passive: true });

        const clock = new THREE.Clock();

        function renderMobile() {
          if (!active) return;
          if (isHeroInView) {
            const elapsedTime = clock.getElapsedTime();
            const delta = clock.getDelta();

            if (!isDragging) {
              rotY += velX; velX *= 0.92; rotY *= 0.98;
              rotX -= velY; velY *= 0.92; rotX *= 0.98;
            }

            objectGroup.rotation.y = elapsedTime * 0.35 + rotY;
            objectGroup.rotation.x = Math.sin(elapsedTime * 0.6) * 0.08 + rotX;

            modelParts.satelliteGroup.rotation.z = Math.sin(elapsedTime * 0.7) * 0.35;
            modelParts.satelliteGroup.rotation.y = elapsedTime * 0.3;

            modelParts.shards.forEach(shard => {
              shard.userData.angle += delta * shard.userData.speed;
              const rad = shard.userData.radius + Math.sin(elapsedTime * 2 + shard.userData.speed) * 0.15;
              shard.position.x = Math.cos(shard.userData.angle) * rad;
              shard.position.z = Math.sin(shard.userData.angle) * rad;
              shard.position.y = shard.userData.yOffset + Math.cos(elapsedTime * 1.8 + shard.userData.speed) * 0.25;
              shard.rotation.x += delta * 2.0; shard.rotation.y += delta * 1.8;
            });

            modelParts.ring1.rotation.z = elapsedTime * 0.15;
            modelParts.ring2.rotation.y = -elapsedTime * 0.12;

            renderer.render(scene, camera);
          }
          heroRafId = requestAnimationFrame(renderMobile);
        }
        heroRafId = requestAnimationFrame(renderMobile);

        if ('IntersectionObserver' in window) {
          heroObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              isHeroInView = entry.isIntersecting;
            });
          }, { threshold: 0.05 });
          heroObserver.observe(heroScene);
        }

        onHeroResize = () => {
          const w = heroScene.clientWidth || 340;
          const h = heroScene.clientHeight || 280;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);
        };
        window.addEventListener('resize', onHeroResize);
      } catch (err) {
        console.error('Mobile 3D Hero error:', err);
      }
    }

    return {
      destroy: () => {
        active = false;
        if (heroRafId) cancelAnimationFrame(heroRafId);
        if (heroObserver) heroObserver.disconnect();
        accordionHandlers.forEach(item => item.btn.removeEventListener('click', item.handler));
        if (onPointerDown && heroScene) heroScene.removeEventListener('pointerdown', onPointerDown);
        if (onPointerMove) window.removeEventListener('pointermove', onPointerMove);
        if (onPointerUp) {
          window.removeEventListener('pointerup', onPointerUp);
          window.removeEventListener('pointercancel', onPointerUp);
        }
        if (onHeroResize) window.removeEventListener('resize', onHeroResize);
        if (renderer) renderer.dispose();
      }
    };
  }

  // --- Dynamic Mode Transition Handler ---
  function handleBreakpoint(e) {
    if (e.matches) {
      if (mobileEngineInstance) {
        mobileEngineInstance.destroy();
        mobileEngineInstance = null;
      }
      if (!desktopEngineInstance) {
        desktopEngineInstance = initDesktopEngine();
      }
    } else {
      if (desktopEngineInstance) {
        desktopEngineInstance.destroy();
        desktopEngineInstance = null;
      }
      if (!mobileEngineInstance) {
        mobileEngineInstance = initMobileEngine();
      }
    }
  }

  breakpoint.addEventListener('change', handleBreakpoint);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => handleBreakpoint(breakpoint));
  } else {
    handleBreakpoint(breakpoint);
  }
})();

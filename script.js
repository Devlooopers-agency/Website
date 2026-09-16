(function () {
  'use strict';

  // --- Mobile Navigation Toggle ---
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    nav.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // --- Contact Form Demo Handler ---
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const status = document.getElementById('formStatus');
      if (status) {
        status.textContent = 'Thanks — this demo form is ready to be connected to your preferred email/API endpoint.';
      }
      form.reset();
    });
  }

  // ============================================================
  // devlooopers Branded Page Transition Engine
  // Sequence:
  // 1. User clicks navigation link
  // 2. Glowing gradient laser line expands
  // 3. Screen becomes pristine white
  // 4. Fluid organic gradient shape sweeps across
  // 5. Destination typography badge punches through
  // 6. Navigation occurs seamlessly
  // ============================================================
  function initBrandedPageTransitions() {
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

    // Smooth entry curtain on initial page load
    const entryCurtain = document.createElement('div');
    entryCurtain.className = 'page-entry-curtain';
    document.body.appendChild(entryCurtain);
    setTimeout(() => {
      entryCurtain.remove();
    }, 500);

    // Reset transition state if navigating via bfcache (Back/Forward)
    window.addEventListener('pageshow', () => {
      transitionEl.classList.remove('is-active');
    });

    const kickerEl = document.getElementById('transKicker');
    const titleEl = document.getElementById('transTitle');

    function getDestinationInfo(href, linkEl) {
      const cleanHref = href.split('#')[0].split('?')[0].toLowerCase();
      const cursorText = linkEl.getAttribute('data-cursor') || linkEl.getAttribute('data-cursor-text') || '';

      if (cleanHref.endsWith('work.html') || cleanHref === 'work.html') {
        return {
          title: 'WORK',
          kicker: '01 / SELECTED WORK'
        };
      }
      if (cleanHref.endsWith('services.html') || cleanHref === 'services.html') {
        return {
          title: 'SERVICES',
          kicker: '02 / CAPABILITIES & SYSTEMS'
        };
      }
      if (cleanHref.endsWith('about.html') || cleanHref === 'about.html') {
        return {
          title: 'STUDIO',
          kicker: '03 / MANIFESTO & PHILOSOPHY'
        };
      }
      if (cleanHref.endsWith('contact.html') || cleanHref === 'contact.html') {
        return {
          title: 'START A PROJECT',
          kicker: '04 / INITIATION VECTOR'
        };
      }
      if (cleanHref.endsWith('index.html') || cleanHref === 'index.html' || cleanHref === './' || cleanHref === '') {
        return {
          title: 'DEVLOOOPERS',
          kicker: 'HOME / DIGITAL EXPERIENCES'
        };
      }

      const text = (linkEl.textContent || '').replace(/[→↗✕‹›]/g, '').trim().toUpperCase();
      return {
        title: cursorText || (text.length > 0 && text.length < 24 ? text : 'DEVLOOOPERS'),
        kicker: 'EXPLORE / NEXT DESTINATION'
      };
    }

    let isNavigating = false;

    document.querySelectorAll('a[href]').forEach(link => {
      if (link.closest('.project-card[data-project]')) return;
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return;
      if (href.startsWith('http') && !href.includes(window.location.host)) return;
      if (link.getAttribute('target') === '_blank') return;

      link.addEventListener('click', e => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (isNavigating) return;

        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const targetFile = href.split('#')[0].split('/').pop() || 'index.html';
        if (currentFile === targetFile && href.includes('#')) return;

        e.preventDefault();
        isNavigating = true;

        const info = getDestinationInfo(href, link);
        if (titleEl) titleEl.textContent = info.title;
        if (kickerEl) kickerEl.textContent = info.kicker;

        // Trigger multi-layer branded choreography
        transitionEl.classList.add('is-active');

        // Execute navigation after choreographed sequence
        setTimeout(() => {
          window.location.href = href;
        }, 460);
      });
    });
  }

  // ============================================================
  // Micro-Interactions: Navbar Arrow Movement & Floating Labels
  // ============================================================
  function initMicroInteractions() {
    // 1. Inject moving nav arrow into all main navigation links
    document.querySelectorAll('.nav > a:not(.nav-cta)').forEach(navLink => {
      if (!navLink.querySelector('.nav-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'nav-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '↗';
        navLink.appendChild(arrow);
      }
    });

    // 2. Floating Form Inputs auto-detection
    document.querySelectorAll('.floating-input').forEach(input => {
      const updateState = () => {
        if (input.value && input.value.trim() !== '') {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
      };
      input.addEventListener('input', updateState);
      input.addEventListener('change', updateState);
      updateState();
    });
  }

  // --- Touch Card Tactile Feedback ---
  document.querySelectorAll('.project-card, .service-panel, .capability-card-interactive').forEach(card => {
    card.addEventListener('pointerdown', () => (card.style.transform = 'scale(.992)'));
    card.addEventListener('pointerup', () => (card.style.transform = ''));
    card.addEventListener('pointercancel', () => (card.style.transform = ''));
  });

  // ============================================================
  // Studio Choreographed 0-5s Intro Sequence
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
      }, 700);
    }

    // Skip on click or scroll
    studioIntro.addEventListener('click', completeIntroInstantly);
    window.addEventListener('wheel', () => {
      if (document.body.classList.contains('intro-running')) completeIntroInstantly();
    }, { once: true, passive: true });
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') completeIntroInstantly();
    }, { once: true });

    // Step 1 (0.3s - 2.0s): Grand Logo Reveal in center
    setTimeout(() => {
      if (introSkipped) return;
      flyingBrand.classList.add('is-visible');
    }, 300);

    // Step 2 (2.0s - 2.8s): Logo flies and scales into navbar
    setTimeout(() => {
      if (introSkipped) return;

      if (navBrand && flyingBrand) {
        const navRect = navBrand.getBoundingClientRect();
        const flyingRect = flyingBrand.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const targetX = navRect.left + navRect.width / 2;
        const targetY = navRect.top + navRect.height / 2;

        const deltaX = targetX - centerX;
        const deltaY = targetY - centerY;
        const scaleRatio = (navRect.height > 0 && flyingRect.height > 0)
          ? Math.max(0.2, Math.min(0.4, navRect.height / flyingRect.height))
          : 0.28;

        flyingBrand.style.setProperty('--dock-x', `${deltaX}px`);
        flyingBrand.style.setProperty('--dock-y', `${deltaY}px`);
        flyingBrand.style.setProperty('--dock-scale', `${scaleRatio}`);
        flyingBrand.classList.add('is-docked');
      }

      // 2.7s: Header ready & intro overlay fades out
      setTimeout(() => {
        if (introSkipped) return;
        document.body.classList.add('header-ready');
        studioIntro.classList.add('intro-fade-out');
      }, 700);
    }, 2000);

    // Step 3 (3.0s - 3.8s): Hero title reveals line by line
    setTimeout(() => {
      if (introSkipped) return;
      document.body.classList.add('title-revealed');
    }, 3000);

    // Step 4 (3.8s - 4.8s): 3D object appears and materializes
    setTimeout(() => {
      if (introSkipped) return;
      document.body.classList.add('scene-revealed');
      window.dispatchEvent(new Event('resize'));
    }, 3800);

    // Final State (4.8s): All elements active
    setTimeout(() => {
      if (introSkipped) return;
      document.body.classList.remove('intro-running');
      studioIntro.remove();
      flyingBrand?.remove();
    }, 4800);
  } else {
    // If not on home page, ensure content is shown immediately
    document.body.classList.remove('intro-running');
  }

  // ============================================================
  // Custom Interactive Magnetic Cursor System (Desktop Only)
  // ============================================================
  const isFinePointer = window.matchMedia('(pointer:fine)').matches;
  const cursor = document.getElementById('customCursor');

  if (isFinePointer && cursor) {
    const dot = cursor.querySelector('.cursor-dot');
    const ring = cursor.querySelector('.cursor-ring');
    const label = cursor.querySelector('.cursor-label');
    const icon = cursor.querySelector('.cursor-icon');

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let ringX = -100;
    let ringY = -100;

    let isHovering = false;
    let currentMagneticEl = null;

    window.addEventListener('pointermove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursor.classList.contains('is-active')) {
        cursor.classList.add('is-active');
        cursorX = mouseX;
        cursorY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
      }
    }, { passive: true });

    window.addEventListener('pointerdown', () => cursor.classList.add('is-active-click'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-active-click'));

    // Cursor Animation Loop
    function updateCursor() {
      // Lerp physics
      cursorX += (mouseX - cursorX) * 0.28;
      cursorY += (mouseY - cursorY) * 0.28;
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      if (ring && dot) {
        ring.style.transform = `translate3d(${ringX - cursorX}px, ${ringY - cursorY}px, 0)`;
      }

      // Magnetic Attraction Effect
      if (currentMagneticEl) {
        const rect = currentMagneticEl.getBoundingClientRect();
        const elCenterX = rect.left + rect.width / 2;
        const elCenterY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - elCenterX, mouseY - elCenterY);

        if (dist < 80) {
          const pullX = (mouseX - elCenterX) * 0.28;
          const pullY = (mouseY - elCenterY) * 0.28;
          currentMagneticEl.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
        } else {
          currentMagneticEl.style.transform = '';
          currentMagneticEl = null;
        }
      }

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Event Delegation for Cursor States
    document.addEventListener('mouseover', e => {
      const target = e.target;
      if (!target) return;

      // Check for 3D Hero Scene
      const sceneEl = target.closest('#heroScene, #heroCanvas, .hero-visual');
      if (sceneEl) {
        cursor.className = 'custom-cursor is-active is-3d';
        if (label) label.textContent = 'EXPLORE';
        if (icon) { icon.textContent = '⊕'; icon.style.display = 'block'; }
        return;
      }

      // Check for Modal Close Button
      const modalCloseBtn = target.closest('#modalClose, .project-modal-close');
      if (modalCloseBtn) {
        cursor.className = 'custom-cursor is-active is-link';
        if (label) label.textContent = 'CLOSE ✕';
        if (icon) icon.style.display = 'none';
        return;
      }

      // Check for Horizontal Work Gallery Viewport
      const galleryViewport = target.closest('#workGalleryViewport, .work-gallery-track');
      if (galleryViewport && !target.closest('button, a, .work-case-trigger, .work-pill, .work-arrow-btn')) {
        cursor.className = 'custom-cursor is-active is-drag';
        if (label) label.textContent = '← DRAG →';
        if (icon) icon.style.display = 'none';
        return;
      }

      // Check for Project Cards
      const projectCard = target.closest('.project-card, .case-study');
      if (projectCard && !document.body.classList.contains('modal-open')) {
        cursor.className = 'custom-cursor is-active is-project';
        if (label) label.textContent = projectCard.dataset.cursorText || 'VIEW PROJECT';
        if (icon) icon.style.display = 'none';
        return;
      }

      // Check for Magnetic Buttons
      const magneticBtn = target.closest('[data-magnetic="true"], .button.primary');
      if (magneticBtn) {
        currentMagneticEl = magneticBtn;
      }

      // Check for Interactive Links, Buttons, and Floats
      const interactiveEl = target.closest('a, button, .float-card, .capability, .service-panel, [data-cursor]');
      if (interactiveEl) {
        cursor.className = 'custom-cursor is-active is-link';
        const customText = interactiveEl.dataset.cursor || (interactiveEl.tagName === 'A' ? 'VIEW' : '');
        if (label) label.textContent = customText;
        if (icon) icon.style.display = 'none';
        return;
      }

      // Default state
      cursor.className = 'custom-cursor is-active';
      if (label) label.textContent = '';
      if (icon) icon.style.display = 'none';
      if (currentMagneticEl) {
        currentMagneticEl.style.transform = '';
        currentMagneticEl = null;
      }
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-active');
      if (currentMagneticEl) {
        currentMagneticEl.style.transform = '';
        currentMagneticEl = null;
      }
    });
  }

  // ============================================================
  // Interactive Three.js 3D Hero Scene Engine (Devlooopers "D" Logo)
  // ============================================================
  function startHeroEngine() {
    const heroSceneContainer = document.getElementById('heroScene');
    const heroCanvas = document.getElementById('heroCanvas');

    if (!heroSceneContainer || !heroCanvas) return;

    if (typeof THREE === 'undefined') {
      setTimeout(startHeroEngine, 50);
      return;
    }

    try {
      initThreeHero(heroSceneContainer, heroCanvas);
    } catch (err) {
      console.error('Three.js hero initialization error:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startHeroEngine);
  } else {
    startHeroEngine();
  }

  function initThreeHero(container, canvas) {
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const isMobileDevice = window.innerWidth <= 768 || ('ontouchstart' in window);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: !isMobileDevice,
      powerPreference: isMobileDevice ? 'default' : 'high-performance',
    });
    renderer.setPixelRatio(isMobileDevice ? 1.0 : Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height, false);
    if (renderer.toneMapping !== undefined) {
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
    }

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Inner Interactive Object Group
    const objectGroup = new THREE.Group();
    rootGroup.add(objectGroup);

    // Vertex Gradient Color Utility (Indigo -> Blue -> Cyan -> Green)
    const colIndigo = new THREE.Color(0x5350d7);
    const colBlue = new THREE.Color(0x377cd6);
    const colCyan = new THREE.Color(0x30a1bf);
    const colGreen = new THREE.Color(0x39cf72);

    function applyGradientVertexColors(geometry) {
      const pos = geometry.attributes.position;
      const count = pos.count;
      const colors = new Float32Array(count * 3);

      let minY = Infinity, maxY = -Infinity;
      let minX = Infinity, maxX = -Infinity;
      for (let i = 0; i < count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
      const rangeX = (maxX - minX) || 1;
      const rangeY = (maxY - minY) || 1;

      for (let i = 0; i < count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const t = THREE.MathUtils.clamp(((x - minX) / rangeX) * 0.5 + ((y - minY) / rangeY) * 0.5, 0, 1);
        const col = new THREE.Color();
        if (t < 0.33) {
          col.lerpColors(colIndigo, colBlue, t / 0.33);
        } else if (t < 0.66) {
          col.lerpColors(colBlue, colCyan, (t - 0.33) / 0.33);
        } else {
          col.lerpColors(colCyan, colGreen, (t - 0.66) / 0.34);
        }
        colors[i * 3] = col.r;
        colors[i * 3 + 1] = col.g;
        colors[i * 3 + 2] = col.b;
      }
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    }

    const pbrMaterial = new THREE.MeshPhysicalMaterial({
      vertexColors: true,
      roughness: 0.14,
      metalness: 0.88,
      clearcoat: isMobileDevice ? 0.5 : 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      side: THREE.DoubleSide,
    });

    const distortableGeometries = [];

    // Modeled 3D Devlooopers "D" Circuit Logo
    // A) Outer "D" Frame Ribbon
    const outerDPoints = [
      new THREE.Vector3(-1.1, -1.85, 0.0),
      new THREE.Vector3(-1.1, 0.0, 0.15),
      new THREE.Vector3(-1.1, 1.85, 0.0),
      new THREE.Vector3(-0.4, 2.15, 0.22),
      new THREE.Vector3(0.85, 1.9, 0.35),
      new THREE.Vector3(1.75, 1.05, 0.2),
      new THREE.Vector3(1.95, 0.0, 0.0),
      new THREE.Vector3(1.75, -1.05, -0.2),
      new THREE.Vector3(0.85, -1.9, -0.35),
      new THREE.Vector3(-0.4, -2.15, -0.22),
      new THREE.Vector3(-1.1, -1.85, 0.0),
    ];
    const outerDCurve = new THREE.CatmullRomCurve3(outerDPoints, true, 'centripetal');
    const outerDGeo = new THREE.TubeGeometry(outerDCurve, isMobileDevice ? 100 : 160, 0.28, isMobileDevice ? 16 : 24, true);
    applyGradientVertexColors(outerDGeo);
    outerDGeo.userData.basePositions = outerDGeo.attributes.position.clone();
    distortableGeometries.push(outerDGeo);
    const outerDMesh = new THREE.Mesh(outerDGeo, pbrMaterial);
    objectGroup.add(outerDMesh);

    // B) Top Inner Chevron Peak Ribbon
    const chevronPoints = [
      new THREE.Vector3(-1.1, 0.45, 0.0),
      new THREE.Vector3(-0.2, 0.45, 0.1),
      new THREE.Vector3(0.35, 0.95, 0.22),
      new THREE.Vector3(0.85, 0.45, 0.15),
    ];
    const chevronCurve = new THREE.CatmullRomCurve3(chevronPoints, false, 'centripetal');
    const chevronGeo = new THREE.TubeGeometry(chevronCurve, isMobileDevice ? 40 : 60, 0.18, 16, false);
    applyGradientVertexColors(chevronGeo);
    chevronGeo.userData.basePositions = chevronGeo.attributes.position.clone();
    distortableGeometries.push(chevronGeo);
    const chevronMesh = new THREE.Mesh(chevronGeo, pbrMaterial);
    objectGroup.add(chevronMesh);

    // C) Inner Concentric Arc Ribbon
    const innerArcPoints = [
      new THREE.Vector3(0.85, 0.45, 0.15),
      new THREE.Vector3(1.35, 0.0, 0.1),
      new THREE.Vector3(1.2, -0.75, -0.1),
      new THREE.Vector3(0.65, -1.25, -0.2),
      new THREE.Vector3(-0.15, -0.95, -0.1),
    ];
    const innerArcCurve = new THREE.CatmullRomCurve3(innerArcPoints, false, 'centripetal');
    const innerArcGeo = new THREE.TubeGeometry(innerArcCurve, isMobileDevice ? 50 : 80, 0.18, 16, false);
    applyGradientVertexColors(innerArcGeo);
    innerArcGeo.userData.basePositions = innerArcGeo.attributes.position.clone();
    distortableGeometries.push(innerArcGeo);
    const innerArcMesh = new THREE.Mesh(innerArcGeo, pbrMaterial);
    objectGroup.add(innerArcMesh);

    // D) Circuit Tracks and Node Rings
    const track1Points = [
      new THREE.Vector3(-1.1, -0.32, 0.0),
      new THREE.Vector3(0.35, -0.32, 0.1),
    ];
    const track1Curve = new THREE.CatmullRomCurve3(track1Points, false);
    const track1Geo = new THREE.TubeGeometry(track1Curve, 20, 0.14, 12, false);
    applyGradientVertexColors(track1Geo);
    const track1Mesh = new THREE.Mesh(track1Geo, pbrMaterial);
    objectGroup.add(track1Mesh);

    const node1Geo = new THREE.TorusGeometry(0.25, 0.08, 12, 24);
    applyGradientVertexColors(node1Geo);
    const node1Mesh = new THREE.Mesh(node1Geo, pbrMaterial);
    node1Mesh.position.set(0.35, -0.32, 0.1);
    objectGroup.add(node1Mesh);

    const track2Points = [
      new THREE.Vector3(-1.1, -0.95, 0.0),
      new THREE.Vector3(-0.15, -0.95, 0.05),
    ];
    const track2Curve = new THREE.CatmullRomCurve3(track2Points, false);
    const track2Geo = new THREE.TubeGeometry(track2Curve, 20, 0.14, 12, false);
    applyGradientVertexColors(track2Geo);
    const track2Mesh = new THREE.Mesh(track2Geo, pbrMaterial);
    objectGroup.add(track2Mesh);

    const node2Geo = new THREE.TorusGeometry(0.25, 0.08, 12, 24);
    applyGradientVertexColors(node2Geo);
    const node2Mesh = new THREE.Mesh(node2Geo, pbrMaterial);
    node2Mesh.position.set(-0.15, -0.95, 0.05);
    objectGroup.add(node2Mesh);

    // E) High-Definition 3D Floating Official Logo Emblem
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('assets/devlooopers-logo-d.png', logoTex => {
      logoTex.generateMipmaps = true;
      logoTex.minFilter = THREE.LinearMipmapLinearFilter;
      const badgeGeo = new THREE.PlaneGeometry(3.6, 4.0);
      const badgeMat = new THREE.MeshPhysicalMaterial({
        map: logoTex,
        transparent: true,
        opacity: 0.95,
        roughness: 0.1,
        metalness: 0.35,
        clearcoat: 1.0,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const badgeMesh = new THREE.Mesh(badgeGeo, badgeMat);
      badgeMesh.position.set(0.38, 0.05, 0.0);
      objectGroup.add(badgeMesh);
    });

    // Floating Satellites
    const satelliteGroup = new THREE.Group();
    objectGroup.add(satelliteGroup);

    const rodGeo = new THREE.CylinderGeometry(0.02, 0.02, 5.0, 16);
    const rodMat = new THREE.MeshBasicMaterial({
      color: 0x377cd6,
      transparent: true,
      opacity: 0.6,
    });
    const rodMesh = new THREE.Mesh(rodGeo, rodMat);
    rodMesh.rotation.z = Math.PI / 2;
    satelliteGroup.add(rodMesh);

    const sphereGeo = new THREE.SphereGeometry(0.18, 18, 18);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0x39cf72,
      emissiveIntensity: 0.85,
      roughness: 0.2,
      metalness: 0.8,
    });

    const satLeft = new THREE.Mesh(sphereGeo, sphereMat);
    satLeft.position.set(-2.5, 0, 0);
    satelliteGroup.add(satLeft);

    const satRight = new THREE.Mesh(sphereGeo, sphereMat);
    satRight.position.set(2.5, 0, 0);
    satelliteGroup.add(satRight);

    // Orbiting Diamond Crystal Shards
    const shardGeo = new THREE.OctahedronGeometry(0.16, 0);
    const shardMat = new THREE.MeshStandardMaterial({
      color: 0x5350d7,
      emissive: 0x377cd6,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.9,
    });

    const shards = [];
    const shardCount = isMobileDevice ? 2 : 4;
    for (let i = 0; i < shardCount; i++) {
      const shard = new THREE.Mesh(shardGeo, shardMat);
      const angle = (i / shardCount) * Math.PI * 2;
      const radius = 2.8 + (i % 2) * 0.4;
      shard.userData = { angle, radius, speed: 0.8 + i * 0.25, yOffset: (i - 1.5) * 0.5 };
      shard.position.set(Math.cos(angle) * radius, shard.userData.yOffset, Math.sin(angle) * radius);
      rootGroup.add(shard);
      shards.push(shard);
    }

    // Glowing Orbital Rings
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x5350d7,
      transparent: true,
      opacity: 0.35,
    });
    const ringGeo1 = new THREE.TorusGeometry(3.0, 0.015, 12, isMobileDevice ? 60 : 120);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI * 0.38;
    ring1.rotation.y = Math.PI * 0.15;
    rootGroup.add(ring1);

    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x39cf72,
      transparent: true,
      opacity: 0.28,
    });
    const ringGeo2 = new THREE.TorusGeometry(3.4, 0.012, 12, isMobileDevice ? 60 : 120);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.32;
    ring2.rotation.z = Math.PI * 0.25;
    rootGroup.add(ring2);

    // Floating Stardust Particles (Lightweight on mobile)
    const particleCount = isMobileDevice ? 140 : 420;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0x5350d7),
      new THREE.Color(0x377cd6),
      new THREE.Color(0x30a1bf),
      new THREE.Color(0x39cf72),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < particleCount; i++) {
      const r = 2.2 + Math.random() * 4.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      particleColors[i * 3] = col.r;
      particleColors[i * 3 + 1] = col.g;
      particleColors[i * 3 + 2] = col.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d');
    const radGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    radGrad.addColorStop(0, 'rgba(255,255,255,1)');
    radGrad.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    radGrad.addColorStop(0.7, 'rgba(255,255,255,0.18)');
    radGrad.addColorStop(1, 'rgba(255,255,255,0)');
    pCtx.fillStyle = radGrad;
    pCtx.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobileDevice ? 0.22 : 0.16,
      map: particleTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    rootGroup.add(particles);

    // Lighting
    const ambLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.35);
    dirLight.position.set(5, 7, 6);
    scene.add(dirLight);

    const indigoPoint = new THREE.PointLight(0x5350d7, 4.2, 16);
    indigoPoint.position.set(-4.5, 3.5, 4);
    scene.add(indigoPoint);

    const greenPoint = new THREE.PointLight(0x39cf72, 3.8, 16);
    greenPoint.position.set(4.5, -3.5, 4);
    scene.add(greenPoint);

    const cyanPoint = new THREE.PointLight(0x30a1bf, 2.8, 12);
    cyanPoint.position.set(0, 4, -4);
    scene.add(cyanPoint);

    // Interaction & Event Handling: Desktop Mouse + Mobile Touch Drag
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    let targetDistortion = 0;
    let currentDistortion = 0;
    const distortionCenter = new THREE.Vector3(0, 0, 0);

    let scrollRotation = 0;
    let currentScrollRot = 0;

    // Mobile Finger Drag Touch State
    let isTouching = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchLastX = 0;
    let touchLastY = 0;
    let dragVelocityX = 0;
    let dragVelocityY = 0;
    let touchRotY = 0;
    let touchRotX = 0;
    let hasInteractedTouch = false;

    const touchHint = document.getElementById('heroTouchHint');

    function onTouchStart(e) {
      if (e.touches.length === 1) {
        isTouching = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchLastX = touchStartX;
        touchLastY = touchStartY;
        dragVelocityX = 0;
        dragVelocityY = 0;

        if (!hasInteractedTouch && touchHint) {
          hasInteractedTouch = true;
          touchHint.classList.add('fade-out');
        }
      }
    }

    function onTouchMove(e) {
      if (!isTouching || e.touches.length !== 1) return;
      const curX = e.touches[0].clientX;
      const curY = e.touches[0].clientY;
      const dx = curX - touchLastX;
      const dy = curY - touchLastY;

      // When dragging horizontally across 3D object, prevent browser page scroll
      if (Math.abs(dx) > Math.abs(dy) * 0.75) {
        if (e.cancelable) e.preventDefault();
      }

      dragVelocityX = dx * 0.020;
      dragVelocityY = dy * 0.014;

      touchRotY += dragVelocityX;
      touchRotX -= dragVelocityY;
      touchRotX = Math.max(-0.55, Math.min(0.55, touchRotX));

      touchLastX = curX;
      touchLastY = curY;
    }

    function onTouchEnd() {
      isTouching = false;
    }

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2(-999, -999);
    const centerPoint = new THREE.Vector3(0, 0, 0);

    const card1 = document.querySelector('.card-one');
    const card2 = document.querySelector('.card-two');
    const card3 = document.querySelector('.card-three');

    function onPointerMove(e) {
      if (e.pointerType === 'touch') return; // Handled by touch events

      const rect = container.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      targetMouseX = (clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (clientY / window.innerHeight - 0.5) * 2;

      const insideCanvasX = ((clientX - rect.left) / rect.width) * 2 - 1;
      const insideCanvasY = -(((clientY - rect.top) / rect.height) * 2 - 1);

      mouseNDC.set(insideCanvasX, insideCanvasY);

      if (
        !isMobileDevice &&
        clientX >= rect.left - 100 &&
        clientX <= rect.right + 100 &&
        clientY >= rect.top - 100 &&
        clientY <= rect.bottom + 100
      ) {
        raycaster.setFromCamera(mouseNDC, camera);

        const ray = raycaster.ray;
        const closestPoint = new THREE.Vector3();
        ray.closestPointToPoint(centerPoint, closestPoint);
        const dist = closestPoint.distanceTo(centerPoint);

        const maxDist = 3.2;
        const proximity = Math.max(0, 1.0 - dist / maxDist);
        targetDistortion = Math.pow(proximity, 1.5) * 1.0;
        distortionCenter.copy(closestPoint);
      } else {
        targetDistortion = 0;
      }
    }

    function onPointerLeave() {
      targetDistortion = 0;
      targetMouseX = 0;
      targetMouseY = 0;
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave, { passive: true });

    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      scrollRotation = scrollY * 0.0035;
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    function handleResize() {
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 500;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      renderer.setSize(w, h, false);
    }

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);
    handleResize();

    // Animation Render Loop
    const clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Desktop lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.06;
      currentMouseY += (targetMouseY - currentMouseY) * 0.06;
      currentDistortion += (targetDistortion - currentDistortion) * 0.08;
      currentScrollRot += (scrollRotation - currentScrollRot) * 0.08;

      // Mobile Touch Inertia Momentum Decay
      if (!isTouching) {
        touchRotY += dragVelocityX;
        dragVelocityX *= 0.92;
        touchRotX += dragVelocityY;
        dragVelocityY *= 0.92;
      }

      if (!isMobileDevice && currentDistortion > 0.002) {
        distortableGeometries.forEach(geo => {
          const posAttr = geo.attributes.position;
          const basePos = geo.userData.basePositions;
          for (let i = 0; i < posAttr.count; i++) {
            const bx = basePos.getX(i);
            const by = basePos.getY(i);
            const bz = basePos.getZ(i);

            const dist = Math.hypot(bx - distortionCenter.x, by - distortionCenter.y, bz - distortionCenter.z);
            const prox = Math.max(0, 1.0 - dist / 3.0);
            const wave = Math.sin(bx * 3.5 + elapsedTime * 3.5) * Math.cos(by * 3.5 + elapsedTime * 2.8) * prox * currentDistortion * 0.38;

            posAttr.setXYZ(i, bx + wave * 0.7, by + wave * 0.7, bz + wave);
          }
          posAttr.needsUpdate = true;
          geo.computeVertexNormals();
        });
      }

      const autoRotY = elapsedTime * 0.45;
      const autoFloat = Math.sin(elapsedTime * 1.2) * 0.12;

      // Integrate Touch Rotation (Mobile) and Pointer Tracking (Desktop)
      objectGroup.rotation.y = autoRotY + currentMouseX * 0.85 + touchRotY + currentScrollRot;
      objectGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 - currentMouseY * 0.55 + touchRotX + currentScrollRot * 0.5;
      objectGroup.position.y = autoFloat;

      satelliteGroup.rotation.z = Math.sin(elapsedTime * 0.7) * 0.35;
      satelliteGroup.rotation.y = elapsedTime * 0.3;

      shards.forEach(shard => {
        shard.userData.angle += delta * shard.userData.speed;
        const rad = shard.userData.radius + Math.sin(elapsedTime * 2 + shard.userData.speed) * 0.15;
        shard.position.x = Math.cos(shard.userData.angle) * rad;
        shard.position.z = Math.sin(shard.userData.angle) * rad;
        shard.position.y = shard.userData.yOffset + Math.cos(elapsedTime * 1.8 + shard.userData.speed) * 0.25;
        shard.rotation.x += delta * 2.0;
        shard.rotation.y += delta * 1.8;
      });

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.y = -elapsedTime * 0.12;

      particles.rotation.y = elapsedTime * 0.05 + currentMouseX * 0.2;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 - currentMouseY * 0.15;

      camera.position.x = currentMouseX * 0.35;
      camera.position.y = -currentMouseY * 0.25;
      camera.lookAt(0, 0, 0);

      if (card1) {
        card1.style.transform = `translate3d(${currentMouseX * -18}px, ${currentMouseY * -14}px, 0)`;
      }
      if (card2) {
        card2.style.transform = `translate3d(${currentMouseX * 22}px, ${currentMouseY * 18}px, 0)`;
      }
      if (card3) {
        card3.style.transform = `translate3d(${currentMouseX * -12}px, ${currentMouseY * 20}px, 0)`;
      }

      renderer.render(scene, camera);
    }

    animate();
  }

  // ============================================================
  // Interactive 3D Perspective Card Physics & Mini-Scenes
  // ============================================================
  function initProjectCardsAndScenes() {
    const cards = document.querySelectorAll('.project-card, .case-study');
    if (!cards.length) return;

    cards.forEach(card => {
      const inner = card.querySelector('.project-card-inner') || card.querySelector('.case-art');
      const glare = card.querySelector('.card-glare');
      const orbitScene = card.querySelector('.scene-orbit');
      const novaScene = card.querySelector('.scene-nova');
      const loopScene = card.querySelector('.scene-loop');

      let isHovered = false;
      let rotX = 0, rotY = 0;
      let targetRotX = 0, targetRotY = 0;
      let animFrameId = null;

      function updateCardPhysics() {
        rotX += (targetRotX - rotX) * 0.15;
        rotY += (targetRotY - rotY) * 0.15;

        if (inner) {
          inner.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`;
        }

        if (isHovered || Math.abs(rotX) > 0.05 || Math.abs(rotY) > 0.05) {
          animFrameId = requestAnimationFrame(updateCardPhysics);
        } else {
          if (inner) inner.style.transform = '';
          animFrameId = null;
        }
      }

      card.addEventListener('pointerenter', () => {
        isHovered = true;
        if (!animFrameId) animFrameId = requestAnimationFrame(updateCardPhysics);
      });

      card.addEventListener('pointermove', e => {
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width;
        const relY = (e.clientY - rect.top) / rect.height;
        const normX = (relX - 0.5) * 2;
        const normY = (relY - 0.5) * 2;

        targetRotX = -normY * 8.5;
        targetRotY = normX * 10.5;

        if (glare) {
          glare.style.setProperty('--glare-x', `${(relX * 100).toFixed(1)}%`);
          glare.style.setProperty('--glare-y', `${(relY * 100).toFixed(1)}%`);
        }

        // Orbit specific reaction
        if (orbitScene) {
          orbitScene.style.setProperty('--orbit-angle', `${(-12 + normX * 22).toFixed(1)}deg`);
          orbitScene.style.setProperty('--core-scale', '1.14');
        }

        // Nova specific reaction
        if (novaScene) {
          novaScene.style.setProperty('--sphere-glare-x', `${(34 + normX * 24).toFixed(1)}%`);
          novaScene.style.setProperty('--sphere-glare-y', `${(28 + normY * 24).toFixed(1)}%`);
          novaScene.style.setProperty('--sphere-scale', '1.06');
        }

        // Loop specific reaction
        if (loopScene) {
          loopScene.style.setProperty('--loop-scale', '1.08');
        }
      });

      card.addEventListener('pointerleave', () => {
        isHovered = false;
        targetRotX = 0;
        targetRotY = 0;

        if (orbitScene) {
          orbitScene.style.setProperty('--orbit-angle', '-12deg');
          orbitScene.style.setProperty('--core-scale', '1');
        }
        if (novaScene) {
          novaScene.style.setProperty('--sphere-glare-x', '34%');
          novaScene.style.setProperty('--sphere-glare-y', '28%');
          novaScene.style.setProperty('--sphere-scale', '1');
        }
        if (loopScene) {
          loopScene.style.setProperty('--loop-scale', '1');
        }
      });
    });

    // Orbit Satellite Continuous Physics Loop
    const orbitSvgs = document.querySelectorAll('.orbit-svg');
    if (orbitSvgs.length) {
      let orbitTheta = 0;
      function animateOrbits() {
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
        requestAnimationFrame(animateOrbits);
      }
      requestAnimationFrame(animateOrbits);
    }

    // Loop Generative Wave Canvas Loop
    const loopCanvases = document.querySelectorAll('.loop-wave-canvas');
    loopCanvases.forEach(canvas => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let wavePhase = 0;
      function renderLoopWave() {
        const w = canvas.width = canvas.clientWidth || 280;
        const h = canvas.height = canvas.clientHeight || 240;
        ctx.clearRect(0, 0, w, h);

        wavePhase += 0.035;

        for (let r = 0; r < 3; r++) {
          ctx.beginPath();
          const rOffset = r * 0.7;
          ctx.lineWidth = 1.6 - r * 0.3;
          ctx.strokeStyle = r === 0 
            ? 'rgba(83, 80, 215, 0.45)' 
            : r === 1 
              ? 'rgba(48, 161, 191, 0.4)' 
              : 'rgba(57, 207, 114, 0.35)';

          for (let x = 0; x <= w; x += 6) {
            const normX = x / w;
            const env = Math.sin(normX * Math.PI);
            const y = h / 2 + Math.sin(normX * 5 + wavePhase + rOffset) * 26 * env + Math.cos(normX * 9 - wavePhase * 0.7) * 12 * env;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        requestAnimationFrame(renderLoopWave);
      }
      requestAnimationFrame(renderLoopWave);
    });
  }

  // ============================================================
  // Fullscreen Project Showcase Transitions & Modal System
  // ============================================================
  function initFullscreenProjectTransitions() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    const sheet = document.getElementById('modalSheet');
    const backdrop = document.getElementById('modalBackdrop');
    const closeBtn = document.getElementById('modalClose');

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

    const projectData = {
      orbit: {
        title: "Orbit Logistics",
        subtitle: "Global freight intelligence and real-time fleet coordination platform.",
        chip: "PRODUCT / 2026",
        challenge: "Logistics dispatchers juggled over 14 disconnected browser windows, leading to severe communication bottlenecks, high latency response times, and cognitive overload during port surges.",
        solution: "We engineered a calm, unified spatial command center with real-time route optimization algorithms, tactile telemetry heatmaps, and zero-latency micro-interactions.",
        deliverables: [
          "End-to-end UX Strategy & Living Design System",
          "WebGL Spatial Telemetry Engine",
          "Fullstack Production Architecture & Telemetry Pipeline"
        ],
        stats: [
          { num: "+140%", lbl: "Dispatch Throughput" },
          { num: "45ms", lbl: "Telemetry Sync" },
          { num: "99.98%", lbl: "Routing Precision" }
        ],
        tech: ["Three.js", "WebGL PBR", "TypeScript", "Tailored CSS", "WebSockets"],
        artClass: "art-orbit",
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
              <button class="button primary" id="simPingBtn" style="padding: 10px 18px; font-size: 0.84rem;">⚡ Simulate Global Re-Route</button>
              <button class="button" id="simClearBtn" style="padding: 10px 18px; font-size: 0.84rem; background: #fff; border: 1px solid var(--line);">Reset Hub Status</button>
            </div>
            <div id="simTerminal" style="background: #10131b; color: #39cf72; font-family: monospace; font-size: 0.82rem; padding: 16px; border-radius: 12px; text-align: left; max-height: 120px; overflow-y: auto;">
              [SYS_INIT] 4,820 Cargo Vessels Online · Network Latency: 42ms · Automated Routing Nominal.
            </div>
          </div>
        `
      },
      nova: {
        title: "Nova Spaces",
        subtitle: "Spatial navigation and 3D architectural showroom experience.",
        chip: "3D / WEBGL",
        challenge: "Traditional high-end real estate and architectural launches relied on static 2D photo galleries that failed to communicate physical depth, sunlight transitions, and atmospheric material tactile presence.",
        solution: "Engineered a spatial WebGL launch experience featuring procedural sun elevation shaders, spatial audio acoustics, and an interactive 3D navigation flow.",
        deliverables: [
          "Interactive 3D Spatial Canvas Architecture",
          "Custom Physically-Based GLSL Shaders",
          "Micro-Animation & Spatial Navigation System"
        ],
        stats: [
          { num: "3.8x", lbl: "Avg Time on Site" },
          { num: "+64%", lbl: "Qualified Inquiries" },
          { num: "<1.2s", lbl: "First 60fps Frame" }
        ],
        tech: ["Three.js", "Custom GLSL", "Web Audio API", "GSAP Physics", "Vite"],
        artClass: "art-nova",
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 14px;">
              <span style="font-size: 0.85rem; font-weight: 600;">Daylight Angle Simulation:</span>
              <input type="range" id="simSunRange" min="0" max="100" value="50" style="accent-color: var(--indigo); cursor: pointer; width: 160px;">
              <span id="simSunValue" style="font-family: monospace; font-weight: 700; color: var(--indigo);">5000K</span>
            </div>
            <div id="simSunPreview" style="height: 70px; border-radius: 12px; background: linear-gradient(90deg, #5350d7, #377cd6, #39cf72); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.05em; transition: filter 0.2s ease;">
              ☀️ Dynamic Spatial Radiance Active
            </div>
          </div>
        `
      },
      loop: {
        title: "Loop Intelligence",
        subtitle: "Autonomous AI orchestration layer and steerable visual workflow system.",
        chip: "AI / PLATFORM",
        challenge: "Generative AI multi-agent pipelines operate as impenetrable black boxes. Enterprise teams struggled to debug edge cases, enforce reliability boundaries, or trust autonomous operations.",
        solution: "Built a tactile visual workspace with real-time execution graphs, live token telemetry, editable intermediate states, and one-click rollback safety triggers.",
        deliverables: [
          "Autonomous Multi-Agent Visual UX System",
          "Real-time Node Telemetry & Streaming Graph",
          "Enterprise Role-Based Safety Architecture"
        ],
        stats: [
          { num: "12M+", lbl: "Daily Executions" },
          { num: "99.99%", lbl: "Chain Reliability" },
          { num: "4.9★", lbl: "Developer NPS" }
        ],
        tech: ["TypeScript", "Canvas2D", "LLM Pipelines", "Node.js", "Tailored CSS"],
        artClass: "art-loop",
        interactiveDemo: `
          <div style="width: 100%; text-align: center;">
            <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 14px; flex-wrap: wrap;">
              <button class="button primary" id="simStepBtn" style="padding: 10px 18px; font-size: 0.84rem;">▶ Execute Autonomous Step</button>
              <button class="button" id="simResetBtn" style="padding: 10px 18px; font-size: 0.84rem; background: #fff; border: 1px solid var(--line);">Reset Graph</button>
            </div>
            <div id="simAgentFlow" style="display: flex; justify-content: center; gap: 8px; flex-wrap: wrap;">
              <span class="step-badge" style="padding: 6px 12px; border-radius: 99px; background: var(--indigo); color: #fff; font-size: 0.78rem; font-weight: 600;">1. Ingest Prompt</span>
              <span class="step-badge" style="padding: 6px 12px; border-radius: 99px; background: #eef2f8; color: #555; font-size: 0.78rem; font-weight: 600;">2. Semantic Retrieval</span>
              <span class="step-badge" style="padding: 6px 12px; border-radius: 99px; background: #eef2f8; color: #555; font-size: 0.78rem; font-weight: 600;">3. Synthesize Output</span>
            </div>
          </div>
        `
      }
    };

    let activeCard = null;

    function openProject(projectId, originatingEl) {
      const data = projectData[projectId];
      if (!data) return;

      activeCard = originatingEl;

      if (modalTitle) modalTitle.textContent = data.title;
      if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
      if (modalChip) modalChip.textContent = data.chip;
      if (modalChallenge) modalChallenge.textContent = data.challenge;
      if (modalSolution) modalSolution.textContent = data.solution;
      if (modalHeroArt) modalHeroArt.className = `modal-hero-art ${data.artClass}`;

      if (modalDeliverables) {
        modalDeliverables.innerHTML = data.deliverables.map(d => `<li>${d}</li>`).join('');
      }

      if (modalStats) {
        modalStats.innerHTML = data.stats.map(s => `
          <div class="stat-item">
            <span class="stat-num">${s.num}</span>
            <span class="stat-lbl">${s.lbl}</span>
          </div>
        `).join('');
      }

      if (modalTech) {
        modalTech.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');
      }

      if (modalInteractiveBox) {
        modalInteractiveBox.innerHTML = data.interactiveDemo;
        setupDemoInteractivity(projectId);
      }

      if (originatingEl && sheet) {
        const rect = originatingEl.getBoundingClientRect();
        sheet.style.transition = 'none';
        sheet.style.transform = `translate(${rect.left}px, ${rect.top}px) scale(${rect.width / window.innerWidth}, ${rect.height / window.innerHeight})`;
        sheet.style.borderRadius = '26px';
        sheet.style.opacity = '0.5';

        requestAnimationFrame(() => {
          sheet.style.transition = 'transform 0.52s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, border-radius 0.4s ease';
          sheet.style.transform = 'translate(0px, 0px) scale(1, 1)';
          sheet.style.borderRadius = '0px';
          sheet.style.opacity = '1';
        });
      }

      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      window.location.hash = projectId;
    }

    function closeProject() {
      if (!modal.classList.contains('is-open')) return;

      if (activeCard && sheet) {
        const rect = activeCard.getBoundingClientRect();
        sheet.style.transition = 'transform 0.42s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease, border-radius 0.35s ease';
        sheet.style.transform = `translate(${rect.left}px, ${rect.top}px) scale(${rect.width / window.innerWidth}, ${rect.height / window.innerHeight})`;
        sheet.style.borderRadius = '26px';
        sheet.style.opacity = '0';
      }

      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');

      setTimeout(() => {
        if (sheet) {
          sheet.style.transform = '';
          sheet.style.borderRadius = '';
          sheet.style.opacity = '';
        }
        if (window.location.hash) {
          history.replaceState(null, null, ' ');
        }
        activeCard = null;
      }, 450);
    }

    function setupDemoInteractivity(projectId) {
      if (projectId === 'orbit') {
        const pingBtn = document.getElementById('simPingBtn');
        const clearBtn = document.getElementById('simClearBtn');
        const term = document.getElementById('simTerminal');
        if (pingBtn && term) {
          pingBtn.addEventListener('click', () => {
            const time = new Date().toLocaleTimeString();
            const nodes = ['Rotterdam Hub [AUTO_ACK]', 'Singapore Terminal [REROUTED +18% SPD]', 'Seattle Gateway [OPTIMAL]'];
            const randNode = nodes[Math.floor(Math.random() * nodes.length)];
            term.innerHTML += `<br><span style="color: #30a1bf;">[${time}]</span> ${randNode}`;
            term.scrollTop = term.scrollHeight;
          });
        }
        if (clearBtn && term) {
          clearBtn.addEventListener('click', () => {
            term.innerHTML = '[SYS_INIT] 4,820 Cargo Vessels Online · Network Latency: 42ms · Automated Routing Nominal.';
          });
        }
      } else if (projectId === 'nova') {
        const range = document.getElementById('simSunRange');
        const val = document.getElementById('simSunValue');
        const prev = document.getElementById('simSunPreview');
        if (range && val && prev) {
          range.addEventListener('input', e => {
            const v = e.target.value;
            const kelvin = 3000 + v * 40;
            val.textContent = `${kelvin}K`;
            prev.style.filter = `brightness(${0.6 + v * 0.008}) hue-rotate(${v * 0.8}deg)`;
          });
        }
      } else if (projectId === 'loop') {
        const stepBtn = document.getElementById('simStepBtn');
        const resetBtn = document.getElementById('simResetBtn');
        const flow = document.getElementById('simAgentFlow');
        if (stepBtn && flow) {
          let step = 1;
          stepBtn.addEventListener('click', () => {
            step = (step % 3) + 1;
            const badges = flow.querySelectorAll('.step-badge');
            badges.forEach((b, idx) => {
              if (idx + 1 === step) {
                b.style.background = 'var(--indigo)';
                b.style.color = '#fff';
              } else {
                b.style.background = '#eef2f8';
                b.style.color = '#555';
              }
            });
          });
          if (resetBtn) {
            resetBtn.addEventListener('click', () => {
              step = 1;
              const badges = flow.querySelectorAll('.step-badge');
              badges.forEach((b, idx) => {
                b.style.background = idx === 0 ? 'var(--indigo)' : '#eef2f8';
                b.style.color = idx === 0 ? '#fff' : '#555';
              });
            });
          }
        }
      }
    }

    // Setup click handlers for case triggers
    document.querySelectorAll('.work-case-trigger, [data-project-modal]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        const projectId = el.getAttribute('data-project') || el.getAttribute('data-project-modal');
        if (projectId) {
          const originCard = el.closest('.work-project-stage, .project-card, .case-study') || el;
          openProject(projectId, originCard);
        }
      });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeProject);
    if (backdrop) backdrop.addEventListener('click', closeProject);

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeProject();
      }
    });

    // Expose openProject globally for gallery triggers
    window.devlooopersOpenProject = openProject;
  }

  // ============================================================
  // Fullscreen Card Expansion Navigation Portal (Home → Work)
  // ============================================================
  function initCardExpansionNavigation() {
    const portal = document.getElementById('navExpansionPortal');
    const portalCard = document.getElementById('portalCard');
    const portalArt = document.getElementById('portalArt');
    const portalChip = document.getElementById('portalChip');
    const portalTitle = document.getElementById('portalTitle');
    const portalSubtitle = document.getElementById('portalSubtitle');

    if (!portal || !portalCard) return;

    const meta = {
      orbit: {
        title: "ORBIT",
        subtitle: "Operations platform",
        chip: "PRODUCT / 2026",
        artClass: "art-orbit"
      },
      nova: {
        title: "NOVA",
        subtitle: "Spatial launch site",
        chip: "3D / WEBGL",
        artClass: "art-nova"
      },
      loop: {
        title: "LOOP",
        subtitle: "AI workflow system",
        chip: "AI / PLATFORM",
        artClass: "art-loop"
      }
    };

    let isNavigating = false;

    document.querySelectorAll('.project-card[data-project]').forEach(card => {
      card.addEventListener('click', e => {
        if (isNavigating) return;
        isNavigating = true;
        e.preventDefault();

        const projectId = card.getAttribute('data-project');
        const data = meta[projectId] || meta.orbit;
        const rect = card.getBoundingClientRect();

        // Position portal card at exact originating rect
        portalCard.style.setProperty('--portal-top', `${rect.top}px`);
        portalCard.style.setProperty('--portal-left', `${rect.left}px`);
        portalCard.style.setProperty('--portal-width', `${rect.width}px`);
        portalCard.style.setProperty('--portal-height', `${rect.height}px`);

        if (portalArt) portalArt.className = `portal-art ${data.artClass}`;
        if (portalChip) portalChip.textContent = data.chip;
        if (portalTitle) portalTitle.textContent = data.title;
        if (portalSubtitle) portalSubtitle.textContent = data.subtitle;

        portal.classList.add('is-expanding');

        // Animate expand to full screen in next frame
        requestAnimationFrame(() => {
          portalCard.classList.add('expanded');
        });

        // Navigate to work.html with active project state
        setTimeout(() => {
          sessionStorage.setItem('expandedProject', projectId);
          window.location.href = `work.html#${projectId}`;
        }, 440);
      });
    });
  }

  // ============================================================
  // Scroll-Locked Interactive 3D Horizontal Work Page Gallery
  // ============================================================
  function initHorizontalWorkGallery() {
    const section = document.getElementById('workGallerySection');
    const viewport = document.getElementById('workGalleryViewport');
    const track = document.getElementById('workGalleryTrack');
    const stages = document.querySelectorAll('.work-project-stage');
    const pills = document.querySelectorAll('.work-pill');
    const hudCounter = document.getElementById('workHudCounter');
    const hudName = document.getElementById('workHudName');
    const progressBar = document.getElementById('workProgressBar');
    const prevBtn = document.getElementById('workPrevBtn');
    const nextBtn = document.getElementById('workNextBtn');

    if (!section || !viewport || !track || !stages.length) return;

    const projectNames = [
      { counter: '01 / 03', name: 'ORBIT LOGISTICS', id: 'orbit' },
      { counter: '02 / 03', name: 'NOVA SPACES', id: 'nova' },
      { counter: '03 / 03', name: 'LOOP INTELLIGENCE', id: 'loop' }
    ];

    let currentIndex = 0;
    const totalSlides = stages.length;
    let isProgrammaticScroll = false;

    function updateHudAndPills(index) {
      currentIndex = Math.max(0, Math.min(totalSlides - 1, index));

      // Update active stage classes
      stages.forEach((stage, i) => {
        stage.classList.toggle('active', i === currentIndex);
      });

      // Update HUD counter and name
      if (hudCounter) hudCounter.textContent = projectNames[currentIndex].counter;
      if (hudName) hudName.textContent = projectNames[currentIndex].name;

      // Update quick pills
      pills.forEach((pill, i) => {
        pill.classList.toggle('active', i === currentIndex);
      });

      // Update hash without jumping page
      history.replaceState(null, null, `#${projectNames[currentIndex].id}`);
    }

    function scrollToProjectIndex(index) {
      const targetIdx = Math.max(0, Math.min(totalSlides - 1, index));
      if (window.innerWidth <= 980) {
        stages[targetIdx]?.scrollIntoView({ behavior: 'smooth' });
        updateHudAndPills(targetIdx);
        return;
      }

      isProgrammaticScroll = true;
      const scrollableDist = section.offsetHeight - window.innerHeight;
      const sectionTop = section.offsetTop;
      const targetScrollY = sectionTop + (targetIdx / (totalSlides - 1)) * scrollableDist;

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });

      setTimeout(() => {
        isProgrammaticScroll = false;
      }, 600);
    }

    // Scroll-Locked Scrubbing Handler
    let scrollTicking = false;
    function handleScrollScrub() {
      if (window.innerWidth <= 980) {
        track.style.transform = '';
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollableDist = section.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));

      // Calculate translation offset with completion buffer before vertical scroll resumes
      const stageWidth = stages[0].offsetWidth;
      const gap = 40;
      const maxOffset = (totalSlides - 1) * (stageWidth + gap);
      const scrubProgress = Math.max(0, Math.min(1, progress / 0.88));
      const targetOffset = -scrubProgress * maxOffset;

      track.style.transform = `translateX(${targetOffset}px)`;

      // Update Progress Bar
      if (progressBar) {
        const barScale = Math.max(0.1, Math.min(1, progress / 0.88));
        progressBar.style.transform = `scaleX(${barScale})`;
      }

      // Calculate active slide based on current scrub progress
      const activeIdx = Math.min(totalSlides - 1, Math.round(scrubProgress * (totalSlides - 1)));
      if (activeIdx !== currentIndex) {
        updateHudAndPills(activeIdx);
      }
    }

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          handleScrollScrub();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });

    // Button Controls
    if (prevBtn) {
      prevBtn.addEventListener('click', () => scrollToProjectIndex(currentIndex - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => scrollToProjectIndex(currentIndex + 1));
    }

    // Quick Pill Selectors
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        const idx = Number(pill.getAttribute('data-index'));
        if (!isNaN(idx)) scrollToProjectIndex(idx);
      });
    });

    // Keyboard Arrow Navigation
    window.addEventListener('keydown', e => {
      if (document.body.classList.contains('modal-open')) return;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 200 && rect.bottom >= 200) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          scrollToProjectIndex(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          scrollToProjectIndex(currentIndex - 1);
        }
      }
    });

    // Native Touch Swipe Gesture Handling on Mobile
    let swipeStartX = 0;
    let swipeStartY = 0;
    let swipeCurrentX = 0;
    let isSwiping = false;

    viewport.addEventListener('touchstart', e => {
      if (window.innerWidth > 980) return;
      if (e.touches.length === 1) {
        swipeStartX = e.touches[0].clientX;
        swipeStartY = e.touches[0].clientY;
        swipeCurrentX = swipeStartX;
        isSwiping = true;
      }
    }, { passive: true });

    viewport.addEventListener('touchmove', e => {
      if (!isSwiping || window.innerWidth > 980 || e.touches.length !== 1) return;
      swipeCurrentX = e.touches[0].clientX;
    }, { passive: true });

    viewport.addEventListener('touchend', e => {
      if (!isSwiping || window.innerWidth > 980) return;
      isSwiping = false;
      const deltaX = swipeCurrentX - swipeStartX;
      const deltaY = (e.changedTouches[0]?.clientY || 0) - swipeStartY;

      // Check for horizontal swipe dominance
      if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0 && currentIndex < totalSlides - 1) {
          scrollToProjectIndex(currentIndex + 1);
        } else if (deltaX > 0 && currentIndex > 0) {
          scrollToProjectIndex(currentIndex - 1);
        }
      }
    }, { passive: true });

    // Handle initial entry from Home expansion or URL hash
    const initialProject = sessionStorage.getItem('expandedProject') || window.location.hash.replace('#', '');
    sessionStorage.removeItem('expandedProject');

    let initialIndex = 0;
    if (initialProject === 'nova') initialIndex = 1;
    else if (initialProject === 'loop') initialIndex = 2;

    if (initialIndex > 0) {
      setTimeout(() => {
        scrollToProjectIndex(initialIndex);
      }, 150);
    } else {
      handleScrollScrub();
    }

    window.addEventListener('resize', () => {
      handleScrollScrub();
    });
  }

  // ============================================================
  // Interactive Expandable Service Cards (services.html)
  // ============================================================
  function initExpandableServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card-interactive');
    if (!serviceCards.length) return;

    serviceCards.forEach(card => {
      const expandBtn = card.querySelector('.service-expand-btn');

      function toggleCard(e) {
        // If clicking a link or inside the action button, allow normal link navigation
        if (e.target.closest('a, .service-drawer-action, .button')) return;

        const isCurrentlyExpanded = card.classList.contains('is-expanded');

        // Accordion behavior: close other cards smoothly
        serviceCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('is-expanded')) {
            otherCard.classList.remove('is-expanded');
            otherCard.setAttribute('data-cursor', 'EXPAND');
            const otherBtn = otherCard.querySelector('.service-expand-btn');
            if (otherBtn) otherBtn.setAttribute('data-cursor', 'EXPAND');
          }
        });

        if (isCurrentlyExpanded) {
          card.classList.remove('is-expanded');
          card.setAttribute('data-cursor', 'EXPAND');
          if (expandBtn) expandBtn.setAttribute('data-cursor', 'EXPAND');
        } else {
          card.classList.add('is-expanded');
          card.setAttribute('data-cursor', 'COLLAPSE');
          if (expandBtn) expandBtn.setAttribute('data-cursor', 'COLLAPSE');
        }

        // Update cursor label dynamically if hovered
        const cursorLabel = document.querySelector('.custom-cursor .cursor-label');
        if (cursorLabel && document.querySelector('.custom-cursor.is-active')) {
          cursorLabel.textContent = card.getAttribute('data-cursor') || 'EXPAND';
        }
      }

      card.addEventListener('click', toggleCard);
      if (expandBtn) {
        expandBtn.addEventListener('click', e => {
          e.stopPropagation();
          toggleCard(e);
        });
      }
    });
  }

  // ============================================================
  // Horizontal Animated Process Timeline Journey (services.html)
  // ============================================================
  function initScrollProcessTimeline() {
    const timelineSection = document.getElementById('processJourneySection');
    if (!timelineSection) return;

    const timelineFill = document.getElementById('processTimelineFill');
    const timelineDot = document.getElementById('processTimelineDot');
    const markerButtons = timelineSection.querySelectorAll('.process-marker-btn');
    const track = document.getElementById('processCarouselTrack');
    const slides = timelineSection.querySelectorAll('.process-step-slide');
    if (!slides.length || !track) return;

    let currentStep = 0;
    let scrollTicking = false;

    function updateActiveStep(stepIndex) {
      if (stepIndex === currentStep && slides[stepIndex].classList.contains('active')) return;
      currentStep = stepIndex;

      markerButtons.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === stepIndex);
      });

      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === stepIndex);
      });
    }

    function handleScrollScrub() {
      if (window.innerWidth <= 980) {
        track.style.transform = '';
        // Mobile Vertical Storytelling: Highlight closest step to center of viewport
        const midY = window.innerHeight * 0.45;
        let closestIdx = 0;
        let closestDist = Infinity;
        slides.forEach((slide, idx) => {
          const sRect = slide.getBoundingClientRect();
          const dist = Math.abs((sRect.top + sRect.height / 2) - midY);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = idx;
          }
        });
        updateActiveStep(closestIdx);
        return;
      }

      const rect = timelineSection.getBoundingClientRect();
      const scrollableDist = timelineSection.offsetHeight - window.innerHeight;
      if (scrollableDist <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));

      // Complete horizontal journey across all 4 steps by progress = 0.88, holding final step before vertical scroll resumes
      const scrubProgress = Math.max(0, Math.min(1, progress / 0.88));
      const slideWidth = slides[0].offsetWidth;
      const gap = 40;
      const maxOffset = (slides.length - 1) * (slideWidth + gap);
      const targetOffset = -scrubProgress * maxOffset;

      track.style.transform = `translateX(${targetOffset.toFixed(1)}px)`;

      // Timeline Fill and Dot Gliding (center of columns 0..3: 12.5% to 87.5%)
      const percentage = 12.5 + (scrubProgress * 75);
      if (timelineFill) timelineFill.style.width = `${percentage.toFixed(2)}%`;
      if (timelineDot) timelineDot.style.left = `${percentage.toFixed(2)}%`;

      // Update Active Slide & Marker
      const activeIdx = Math.min(slides.length - 1, Math.round(scrubProgress * (slides.length - 1)));
      updateActiveStep(activeIdx);
    }

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          handleScrollScrub();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });

    // Marker Click Navigation: Smooth scroll to target position along the timeline track
    markerButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.getAttribute('data-step'), 10);
        if (isNaN(step)) return;

        if (window.innerWidth <= 980) {
          if (slides[step]) {
            slides[step].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }

        const scrollableDist = timelineSection.offsetHeight - window.innerHeight;
        const sectionTop = timelineSection.getBoundingClientRect().top + window.scrollY;
        const targetFraction = (step / (slides.length - 1)) * 0.88;
        const targetScrollY = sectionTop + targetFraction * scrollableDist;

        window.scrollTo({
          top: targetScrollY,
          behavior: 'smooth'
        });
      });
    });

    // Initial positioning
    handleScrollScrub();
    window.addEventListener('resize', handleScrollScrub);
  }

  // ============================================================
  // Interactive Capabilities Grid 3D Tilt & Micro-Scenes (index.html)
  // ============================================================
  function initInteractiveCapabilities() {
    const capabilityCards = document.querySelectorAll('.capability-card-interactive');
    if (!capabilityCards.length) return;

    capabilityCards.forEach(card => {
      let isHovered = false;

      card.addEventListener('pointerenter', () => {
        isHovered = true;
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.35s ease, border-color 0.35s ease';
      });

      card.addEventListener('pointermove', e => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const clientX = e.clientX;
        const clientY = e.clientY;

        const relX = (clientX - rect.left) / rect.width;
        const relY = (clientY - rect.top) / rect.height;

        card.style.setProperty('--cap-glare-x', `${relX * 100}%`);
        card.style.setProperty('--cap-glare-y', `${relY * 100}%`);

        if (window.innerWidth > 980) {
          const tiltX = (relY - 0.5) * -12;
          const tiltY = (relX - 0.5) * 12;
          card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px) scale3d(1.015, 1.015, 1.015)`;
        }
      });

      card.addEventListener('pointerleave', () => {
        isHovered = false;
        card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.35s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
      });
    });
  }

  // ============================================================
  // Kinetic Typographic Scroll Engine (Multi-Page Support)
  // ============================================================
  function initKineticTypography() {
    const sections = document.querySelectorAll('.kinetic-statement-section');
    if (!sections.length) return;

    let scrollTicking = false;

    function updateAllKineticSections() {
      if (window.innerWidth <= 980) {
        sections.forEach(section => {
          const lineCompress = section.querySelector('.kinetic-line-compress, .line-we-build');
          const lineExpand = section.querySelector('.kinetic-line-expand, .line-digital');
          const driftTrack = section.querySelector('.kinetic-drift-track, .experiences-track');
          if (lineCompress) {
            lineCompress.style.letterSpacing = '';
            lineCompress.style.transform = '';
            lineCompress.style.opacity = '';
          }
          if (lineExpand) {
            lineExpand.style.transform = '';
            lineExpand.style.letterSpacing = '';
          }
          if (driftTrack) {
            driftTrack.style.transform = '';
          }
        });
        return;
      }

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const scrollableDist = section.offsetHeight - window.innerHeight;
        if (scrollableDist <= 0) return;

        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / scrollableDist));

        const lineCompress = section.querySelector('.kinetic-line-compress, .line-we-build');
        const lineExpand = section.querySelector('.kinetic-line-expand, .line-digital');
        const driftTrack = section.querySelector('.kinetic-drift-track, .experiences-track');
        const meterBar = section.querySelector('.kinetic-meter-bar, .meter-bar');
        const glow = section.querySelector('.kinetic-glow');

        // 1. Compress Phase (Phase 1: 0.0 -> 0.38, then locked)
        if (lineCompress) {
          const compressProgress = Math.max(0, Math.min(1, progress / 0.38));
          const letterSpacing = 0.06 - (compressProgress * 0.10);
          const scaleX = 1.0 - (compressProgress * 0.16);
          const opacity1 = Math.max(0.60, 1.0 - compressProgress * 0.35);
          lineCompress.style.letterSpacing = `${letterSpacing.toFixed(3)}em`;
          lineCompress.style.transform = `scaleX(${scaleX.toFixed(3)}) scaleY(1.0)`;
          lineCompress.style.opacity = `${opacity1.toFixed(2)}`;
        }

        // 2. Expand Phase (Phase 2: 0.10 -> 0.76, scaled smoothly without overflow)
        if (lineExpand) {
          const expandProgress = Math.max(0, Math.min(1, (progress - 0.10) / 0.66));
          const digitalScale = 0.86 + Math.pow(expandProgress, 1.1) * 0.22;
          const digitalTracking = -0.035 + Math.pow(expandProgress, 1.1) * 0.065;
          lineExpand.style.transform = `scale(${digitalScale.toFixed(3)})`;
          lineExpand.style.letterSpacing = `${digitalTracking.toFixed(3)}em`;
        }

        // 3. Horizontal Drift Phase (Phase 3: 0.24 -> 0.84, completing before vertical scroll resumes)
        if (driftTrack) {
          const moveProgress = Math.max(0, Math.min(1, (progress - 0.24) / 0.60));
          const driftPx = -moveProgress * 340;
          driftTrack.style.transform = `translateX(${driftPx.toFixed(1)}px)`;
        }

        // 4. Ambient Glow & Progress Meter (Reaches 100% by progress = 0.84)
        if (meterBar) {
          const meterProgress = Math.max(0.06, Math.min(1, progress / 0.84));
          meterBar.style.transform = `scaleX(${meterProgress.toFixed(3)})`;
        }
        if (glow) {
          const glowProgress = Math.min(1, progress / 0.84);
          const glowX = (glowProgress - 0.5) * 180;
          const glowY = (glowProgress - 0.5) * 80;
          glow.style.transform = `translate(calc(-50% + ${glowX.toFixed(0)}px), calc(-50% + ${glowY.toFixed(0)}px)) scale(${(1 + glowProgress * 0.25).toFixed(2)})`;
        }
      });
    }

    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
          updateAllKineticSections();
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });

    updateAllKineticSections();
    window.addEventListener('resize', updateAllKineticSections);
  }

  // ============================================================
  // Tactile Micro-Interactions System
  // 1. Navbar Links: Injects kinetic moving arrow element (↗) & hover line
  // 2. Forms: Floating upward label handling with autofill / value sync
  // 3. Tags: Hover gradient border interactions
  // 4. Cards: Subtle 3D lift, deep ambient shadow, and visual scene parallax
  // 5. Logo: Periodic & hover radiant gradient sweep
  // ============================================================
  function initMicroInteractions() {
    // 1. Navbar Links Arrow Injection
    const navLinks = document.querySelectorAll('.nav > a:not(.nav-cta)');
    navLinks.forEach(link => {
      if (!link.querySelector('.nav-arrow')) {
        const arrow = document.createElement('span');
        arrow.className = 'nav-arrow';
        arrow.setAttribute('aria-hidden', 'true');
        arrow.textContent = '↗';
        link.appendChild(arrow);
      }
    });

    // 2. Form Floating Labels state synchronization
    const floatingInputs = document.querySelectorAll('.floating-input');
    floatingInputs.forEach(input => {
      function checkValue() {
        if (input.value && input.value.trim() !== '') {
          input.classList.add('has-value');
        } else {
          input.classList.remove('has-value');
        }
      }
      input.addEventListener('input', checkValue);
      input.addEventListener('change', checkValue);
      input.addEventListener('blur', checkValue);
      checkValue();
    });
  }

  // Initialize interactive engines
  function initAllEngines() {
    initMicroInteractions();
    initBrandedPageTransitions();
    initProjectCardsAndScenes();
    initFullscreenProjectTransitions();
    initCardExpansionNavigation();
    initHorizontalWorkGallery();
    initExpandableServiceCards();
    initScrollProcessTimeline();
    initInteractiveCapabilities();
    initKineticTypography();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllEngines);
  } else {
    initAllEngines();
  }
})();





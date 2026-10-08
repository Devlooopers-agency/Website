import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const [webGLFailed, setWebGLFailed] = useState(false);

  useEffect(() => {
    const heroScene = containerRef.current;
    const heroCanvas = canvasRef.current;
    if (!heroScene || !heroCanvas) return;

    // Detect user preference for reduced motion
    const prefersReducedMotion = typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let active = true;
    let heroRafId = null;
    let heroObserver = null;
    let isHeroInView = true;
    let isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;

    // Shared Model Builder
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

    const isDesktop = window.innerWidth >= 861;
    const isMobileScreen = window.innerWidth < 768;
    const width = heroScene.clientWidth || (isDesktop ? 500 : 340);
    const height = heroScene.clientHeight || (isDesktop ? 500 : 280);

    let scene, camera, renderer, rootGroup, objectGroup, modelParts;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(isDesktop ? 45 : 48, width / height, 0.1, 100);
      camera.position.set(0, 0, isDesktop ? 7.5 : 7.8);

      // Optimization: On mobile (<768px), disable antialias and cap pixelRatio at 1 to dramatically reduce GPU fillrate
      renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        alpha: true,
        antialias: !isMobileScreen,
        powerPreference: 'high-performance'
      });

      renderer.setPixelRatio(isMobileScreen ? 1 : Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(width, height, false);
      if (renderer.toneMapping !== undefined) {
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
      }

      rootGroup = new THREE.Group();
      if (isDesktop) {
        rootGroup.position.x = 0.35;
      } else {
        rootGroup.scale.set(0.88, 0.88, 0.88);
      }
      scene.add(rootGroup);

      objectGroup = new THREE.Group();
      rootGroup.add(objectGroup);

      modelParts = buildDevlooopers3DModel(scene, rootGroup, objectGroup);
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to CSS experience:', e);
      setWebGLFailed(true);
      return;
    }

    let mouseX = 0, mouseY = 0;
    const onHeroPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onHeroPointerMove, { passive: true });

    // Mobile touch drag physics
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let rotY = 0, rotX = 0;
    let velX = 0, velY = 0;

    const onPointerDown = (e) => {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMobilePointerMove = (e) => {
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
    const onPointerUp = () => { isDragging = false; };

    heroScene.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointermove', onMobilePointerMove, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });

    const clock = new THREE.Clock();

    function renderSceneFrame() {
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      if (window.innerWidth >= 861) {
        objectGroup.rotation.y = elapsedTime * 0.45 + mouseX * 0.85;
        objectGroup.rotation.x = Math.sin(elapsedTime * 0.8) * 0.1 - mouseY * 0.55;
        objectGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

        const card1 = card1Ref.current;
        const card2 = card2Ref.current;
        const card3 = card3Ref.current;
        if (card1) card1.style.transform = `translate3d(${mouseX * -18}px, ${mouseY * -14}px, 0)`;
        if (card2) card2.style.transform = `translate3d(${mouseX * 22}px, ${mouseY * 18}px, 0)`;
        if (card3) card3.style.transform = `translate3d(${mouseX * -12}px, ${mouseY * 20}px, 0)`;
      } else {
        if (!isDragging) {
          rotY += velX; velX *= 0.92; rotY *= 0.98;
          rotX -= velY; velY *= 0.92; rotX *= 0.98;
        }
        objectGroup.rotation.y = elapsedTime * 0.35 + rotY;
        objectGroup.rotation.x = Math.sin(elapsedTime * 0.6) * 0.08 + rotX;
      }

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

    function renderLoop() {
      if (!active) return;
      if (isHeroInView && isTabVisible && !prefersReducedMotion) {
        renderSceneFrame();
      }
      heroRafId = requestAnimationFrame(renderLoop);
    }

    if (prefersReducedMotion) {
      renderSceneFrame();
    } else {
      heroRafId = requestAnimationFrame(renderLoop);
    }

    // Visibility change listener to pause GPU draw calls when tab is hidden
    const onVisibilityChange = () => {
      isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    // IntersectionObserver to pause GPU draw calls when offscreen
    if ('IntersectionObserver' in window) {
      heroObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          isHeroInView = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      heroObserver.observe(heroScene);
    }

    const onHeroResize = () => {
      if (!renderer || !camera) return;
      const isDesk = window.innerWidth >= 861;
      const isMob = window.innerWidth < 768;
      const w = heroScene.clientWidth || (isDesk ? 500 : 340);
      const h = heroScene.clientHeight || (isDesk ? 500 : 280);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(isMob ? 1 : Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setSize(w, h, false);
      if (isDesk) {
        rootGroup.position.x = 0.35;
        rootGroup.scale.set(1, 1, 1);
      } else {
        rootGroup.position.x = 0;
        rootGroup.scale.set(0.88, 0.88, 0.88);
      }
      if (prefersReducedMotion) {
        renderSceneFrame();
      }
    };
    window.addEventListener('resize', onHeroResize);

    return () => {
      active = false;
      if (heroRafId) cancelAnimationFrame(heroRafId);
      if (heroObserver) heroObserver.disconnect();
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pointermove', onHeroPointerMove);
      heroScene.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onMobilePointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', onHeroResize);
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div
      className="hero-visual hero-visual-reveal"
      aria-label="Interactive 3D showcase"
    >
      <div className="orbital orbital-1"></div>
      <div className="orbital orbital-2"></div>
      <div className="orbital orbital-3"></div>
      <div className="scene-3d" id="heroScene" ref={containerRef}>
        {!webGLFailed ? (
          <canvas id="heroCanvas" ref={canvasRef} width="500" height="500"></canvas>
        ) : (
          <div className="hero-fallback-visual" aria-label="Devlooopers brand graphic">
            <div className="fallback-glow"></div>
            <div className="fallback-ring fallback-ring-outer"></div>
            <div className="fallback-ring fallback-ring-inner"></div>
            <div className="fallback-badge">DEVLOOOPERS</div>
          </div>
        )}
        <div className="float-card card-one" ref={card1Ref}>
          <span>01</span><b>Shape</b><small>strategy</small>
        </div>
        <div className="float-card card-two" ref={card2Ref}>
          <span>02</span><b>Design</b><small>experience</small>
        </div>
        <div className="float-card card-three" ref={card3Ref}>
          <span>03</span><b>Scale</b><small>technology</small>
        </div>
      </div>
      <div className="hero-touch-hint" id="heroTouchHint">
        <span className="touch-icon">👆</span>
        <span>DRAG ↔ TO ROTATE 3D</span>
      </div>
      <div className="orbit-labels-container">
        <div className="orbit-label label-a">3D / WEBGL</div>
        <div className="orbit-label label-b">UI / UX</div>
        <div className="orbit-label label-c">AI / CODE</div>
      </div>
      <div className="hero-glow"></div>
    </div>
  );
}

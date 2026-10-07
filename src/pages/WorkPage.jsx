import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const allProjects = [
  {
    id: 'orbit',
    title: 'Orbit Logistics',
    category: ['all', 'product-ai', '3d-webgl'],
    chip: 'PRODUCT / 2026',
    kicker: 'OPERATIONS / TELEMETRY COMMAND',
    badgeWord: 'ORBIT',
    desc: 'A calm operations command centre that turns noisy logistics data into decisions teams can act on. Dense information, zero latency, and tactile micro-interactions.',
    tags: ['UX Strategy', 'WebGL Telemetry', 'Frontend Architecture'],
    artType: 'orbit'
  },
  {
    id: 'nova',
    title: 'Nova Spaces',
    category: ['all', '3d-webgl'],
    chip: '3D / WEBGL',
    kicker: '3D / WEBGL SPATIAL SHOWROOM',
    badgeWord: 'NOVA',
    desc: 'An editorial launch experience with a spatial navigation layer. Visitors explore the product through physical depth, daylight simulation, and ambient transitions.',
    tags: ['Creative Dev', 'Three.js', 'Shader Motion'],
    artType: 'nova'
  },
  {
    id: 'loop',
    title: 'Loop Intelligence',
    category: ['all', 'product-ai'],
    chip: 'AI / PLATFORM',
    kicker: 'AI / AUTONOMOUS WORKFLOWS',
    badgeWord: 'LOOP',
    desc: 'A workflow layer that connects company knowledge, conversations, and repeatable actions. The interface makes every automated step visible, debuggable, and steerable.',
    tags: ['AI UX', 'Systems Design', 'Agent Automation'],
    artType: 'loop'
  },
  {
    id: 'aura',
    title: 'Aura Health',
    category: ['all', 'product-ai', 'design-systems'],
    chip: 'SPATIAL / HEALTH',
    kicker: 'BIOMETRIC / METABOLIC TELEMETRY',
    badgeWord: 'AURA',
    desc: 'A spatial metabolic health HUD visualizing real-time cellular telemetry, circadian rhythms, and heart rate variability in responsive 3D viewports.',
    tags: ['Spatial UI', 'Design Systems', 'Web Bluetooth'],
    artType: 'aura'
  },
  {
    id: 'apex',
    title: 'Apex Trading Engine',
    category: ['all', '3d-webgl', 'design-systems'],
    chip: 'FINTECH / WEBGL',
    kicker: 'HIGH-FREQUENCY / MARKET DEPTH',
    badgeWord: 'APEX',
    desc: 'An ultra-low-latency institutional trading terminal with real-time 3D liquidity matrix visualizer, sub-millisecond tick feeds, and tactile execution triggers.',
    tags: ['High-Throughput UI', 'GPU Depth Matrix', 'WebSockets'],
    artType: 'apex'
  },
  {
    id: 'solace',
    title: 'Solace Audio Intelligence',
    category: ['all', 'product-ai', '3d-webgl'],
    chip: 'AI / AUDIO',
    kicker: 'GENERATIVE / ACOUSTIC SOUNDFIELD',
    badgeWord: 'SOLACE',
    desc: 'An expressive 3D soundfield canvas and AI music composition system where frequencies materialize as fluid reactive particles and spatial soundscapes.',
    tags: ['Web Audio API', 'Particle Shaders', 'Music AI'],
    artType: 'solace'
  }
];

export default function WorkPage({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const loopCanvasRef = useRef(null);
  const apexCanvasRef = useRef(null);

  const filteredProjects = allProjects.filter(p => p.category.includes(activeFilter));

  const handleMouseMoveCard = (e, card) => {
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--card-glare-x', `${x}px`);
    card.style.setProperty('--card-glare-y', `${y}px`);
  };

  useEffect(() => {
    // Loop Wave Canvas Physics
    const canvas = loopCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let active = true;
    let wavePhase = 0;
    let waveAnimId = null;

    let w = (canvas.width = canvas.clientWidth || 280);
    let h = (canvas.height = canvas.clientHeight || 200);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.clientWidth || 280;
      h = canvas.height = canvas.clientHeight || 200;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    function renderLoopWave() {
      if (!active) return;
      ctx.clearRect(0, 0, w, h);
      wavePhase += 0.035;

      for (let r = 0; r < 3; r++) {
        ctx.beginPath();
        const rOffset = r * 0.7;
        ctx.lineWidth = 1.6 - r * 0.3;
        ctx.strokeStyle = r === 0 ? 'rgba(83, 80, 215, 0.45)' : r === 1 ? 'rgba(48, 161, 191, 0.4)' : 'rgba(57, 207, 114, 0.35)';

        for (let x = 0; x <= w; x += 8) {
          const normX = x / w;
          const env = Math.sin(normX * Math.PI);
          const y = h / 2 + Math.sin(normX * 5 + wavePhase + rOffset) * 22 * env + Math.cos(normX * 9 - wavePhase * 0.7) * 10 * env;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      waveAnimId = requestAnimationFrame(renderLoopWave);
    }
    waveAnimId = requestAnimationFrame(renderLoopWave);
    return () => {
      active = false;
      window.removeEventListener('resize', handleResize);
      if (waveAnimId) cancelAnimationFrame(waveAnimId);
    };
  }, [activeFilter]);

  useEffect(() => {
    // Apex Chart Depth Wave Canvas
    const canvas = apexCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let active = true;
    let tick = 0;
    let apexAnimId = null;

    let w = (canvas.width = canvas.clientWidth || 280);
    let h = (canvas.height = canvas.clientHeight || 200);

    const handleResize = () => {
      if (!canvas) return;
      w = canvas.width = canvas.clientWidth || 280;
      h = canvas.height = canvas.clientHeight || 200;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    function renderApexWave() {
      if (!active) return;
      ctx.clearRect(0, 0, w, h);
      tick += 0.04;

      // Background glowing grid bars
      for (let i = 0; i < 8; i++) {
        const barH = 30 + Math.sin(tick + i * 0.8) * 20;
        const barX = 20 + i * 32;
        ctx.fillStyle = 'rgba(57, 207, 114, 0.15)';
        ctx.fillRect(barX, h - barH - 20, 18, barH);
      }

      // Dynamic market depth curve
      ctx.beginPath();
      ctx.strokeStyle = '#39cf72';
      ctx.lineWidth = 2;
      for (let x = 0; x <= w; x += 6) {
        const y = h * 0.6 + Math.sin(x * 0.04 + tick) * 18 - (x / w) * 24;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      apexAnimId = requestAnimationFrame(renderApexWave);
    }
    apexAnimId = requestAnimationFrame(renderApexWave);
    return () => {
      active = false;
      window.removeEventListener('resize', handleResize);
      if (apexAnimId) cancelAnimationFrame(apexAnimId);
    };
  }, [activeFilter]);

  return (
    <main>
      <section
        className="page-hero section-dark"
        data-journey-section="work-hero"
        data-theme-section="work-hero"
        data-theme="dark"
      >
        <div className="shell">
          <div className="section-kicker reveal">01 / SELECTED WORK</div>
          <h1 className="display reveal delay-1">
            Case studies in <br />
            <span className="gradient-text">motion & depth.</span>
          </h1>
          <p className="hero-lead narrow reveal delay-2">
            From spatial command dashboards and 3D WebGL showrooms to autonomous AI canvases — explore our production projects.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="work-filter-bar reveal delay-3">
            <button
              className={`work-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              data-cursor="FILTER"
            >
              All <span className="pill-count">06</span>
            </button>
            <button
              className={`work-filter-pill ${activeFilter === 'product-ai' ? 'active' : ''}`}
              onClick={() => setActiveFilter('product-ai')}
              data-cursor="FILTER"
            >
              Product & AI <span className="pill-count">03</span>
            </button>
            <button
              className={`work-filter-pill ${activeFilter === '3d-webgl' ? 'active' : ''}`}
              onClick={() => setActiveFilter('3d-webgl')}
              data-cursor="FILTER"
            >
              3D & WebGL <span className="pill-count">03</span>
            </button>
            <button
              className={`work-filter-pill ${activeFilter === 'design-systems' ? 'active' : ''}`}
              onClick={() => setActiveFilter('design-systems')}
              data-cursor="FILTER"
            >
              Design Systems <span className="pill-count">02</span>
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Interactive Bento Project Grid */}
      <section
        className="section work-bento-section section-dark"
        data-journey-section="work-grid"
        data-theme-section="work-grid"
        data-theme="dark"
      >
        <div className="shell">
          <div className="work-bento-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`work-bento-card reveal ${idx === 0 ? 'card-featured' : ''}`}
              data-project={project.id}
              data-cursor="OPEN"
              data-cursor-text="EXPLORE CASE"
              onMouseMove={(e) => handleMouseMoveCard(e, e.currentTarget)}
              onClick={() => onOpenProject(project.id)}
            >
              <div className="card-glare"></div>

              {/* Project Interactive Visual Stage with Live 3D / Animations */}
              <div className={`work-bento-visual art-${project.artType}`}>
                
                {/* 1. Orbit Visual */}
                {project.artType === 'orbit' && (
                  <div className="scene-orbit" id="workOrbitScene">
                    <div className="orbit-glow"></div>
                    <svg className="orbit-svg" viewBox="0 0 300 300" aria-hidden="true">
                      <ellipse className="orbit-path" cx="150" cy="150" rx="115" ry="46" />
                      <line className="orbit-connector" x1="75" y1="135" x2="225" y2="165" />
                      <circle className="orbit-satellite sat-1" cx="75" cy="135" r="8" />
                      <circle className="orbit-satellite sat-2" cx="225" cy="165" r="8" />
                    </svg>
                    <div className="orbit-core"><div className="orbit-core-pulse"></div></div>
                  </div>
                )}

                {/* 2. Nova Visual */}
                {project.artType === 'nova' && (
                  <div className="scene-nova" id="workNovaScene">
                    <div className="nova-grid"></div>
                    <div className="nova-sphere big"></div>
                    <div className="nova-rings"></div>
                    <div className="nova-coords"><span>LAT: 47.32°</span><span>LNG: -122.18°</span></div>
                  </div>
                )}

                {/* 3. Loop Visual */}
                {project.artType === 'loop' && (
                  <div className="scene-loop" id="workLoopScene">
                    <canvas ref={loopCanvasRef} className="loop-wave-canvas" width="300" height="220"></canvas>
                    <div className="loop-symbol big">8</div>
                    <div className="loop-nodes">
                      <span className="l-node n1"></span><span className="l-node n2"></span><span className="l-node n3"></span>
                    </div>
                  </div>
                )}

                {/* 4. Aura Visual */}
                {project.artType === 'aura' && (
                  <div className="scene-aura">
                    <div className="aura-glow"></div>
                    <div className="aura-pulse-rings">
                      <div className="aura-ring ar-1"></div>
                      <div className="aura-ring ar-2"></div>
                      <div className="aura-ring ar-3"></div>
                    </div>
                    <div className="aura-core-heart">
                      <span className="aura-rate">78 <small>BPM</small></span>
                    </div>
                  </div>
                )}

                {/* 5. Apex Visual */}
                {project.artType === 'apex' && (
                  <div className="scene-apex">
                    <canvas ref={apexCanvasRef} className="apex-wave-canvas" width="300" height="220"></canvas>
                    <div className="apex-badge-order">
                      <span className="dot-green"></span>
                      <span>MATCH: 0.8ms</span>
                    </div>
                  </div>
                )}

                {/* 6. Solace Visual */}
                {project.artType === 'solace' && (
                  <div className="scene-solace">
                    <div className="solace-spiral-rings">
                      <div className="sol-ring sr-1"></div>
                      <div className="sol-ring sr-2"></div>
                      <div className="sol-ring sr-3"></div>
                    </div>
                    <div className="solace-equalizer">
                      <span className="eq-bar eq-1"></span>
                      <span className="eq-bar eq-2"></span>
                      <span className="eq-bar eq-3"></span>
                      <span className="eq-bar eq-4"></span>
                      <span className="eq-bar eq-5"></span>
                    </div>
                    <div className="solace-stem-label">64 STEMS · 3D SOUNDFIELD</div>
                  </div>
                )}

                <span className="work-chip">{project.chip}</span>
                <span className="work-badge-word">{project.badgeWord}</span>
                <div className="project-hover-badge"><span>EXPLORE</span> ?</div>
              </div>

              {/* Project Meta Info */}
              <div className="work-bento-meta">
                <div className="work-meta-kicker">{project.kicker}</div>
                <h2 className="work-meta-title">{project.title}</h2>
                <p className="work-meta-desc">{project.desc}</p>
                <div className="work-meta-bottom">
                  <div className="tag-row">
                    {project.tags.map((tag, i) => (
                      <span key={i}>{tag}</span>
                    ))}
                  </div>
                  <button className="button primary work-case-trigger" data-cursor="OPEN">
                    Explore Case <span>?</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section final-cta-wrapper section-dark"
        data-journey-section="work-cta"
        data-theme-section="work-cta"
        data-theme="dark"
      >
        <div className="shell final-cta">
          <div className="cta-panel reveal">
            <div className="section-kicker">02 / YOUR TURN</div>
            <h2>Let's make your next <span className="gradient-text">case study.</span></h2>
            <Link className="button primary" to="/contact" data-cursor="LET'S TALK" data-magnetic="true">
              Start a conversation <span>?</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


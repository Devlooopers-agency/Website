import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Interactive Widget States
  const [metaBudget, setMetaBudget] = useState(25000);
  const [devStack, setDevStack] = useState('devlooopers'); // 'devlooopers' | 'legacy'
  const [seoTab, setSeoTab] = useState('ecommerce'); // 'ecommerce' | 'saas' | 'local'
  const [creativePreset, setCreativePreset] = useState('particles'); // 'particles' | 'spatial' | 'shaders'
  const [croVisitors, setCroVisitors] = useState(50000);
  const [aiPipelineStep, setAiPipelineStep] = useState(2);

  const kineticSectionRef = useRef(null);
  const meterBarRef = useRef(null);
  const driftTrackRef = useRef(null);
  const canvasRef = useRef(null);

  // Scroll Reveal Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });
      revealElements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealElements.forEach(el => el.classList.add('active'));
    }
  }, [activeFilter]);

  // Kinetic Manifesto Scroll Effect
  useEffect(() => {
    const section = kineticSectionRef.current;
    const meterBar = meterBarRef.current;
    const driftTrack = driftTrackRef.current;
    if (!section) return;

    function onScroll() {
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      if (meterBar) meterBar.style.width = `${(progress * 100).toFixed(1)}%`;
      if (driftTrack) driftTrack.style.transform = `translateX(${(-progress * 60).toFixed(1)}px)`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Realtime Interactive Canvas Visualizer for Creative 3D Tech Card
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = (canvas.width = canvas.offsetWidth || 300);
    let height = (canvas.height = canvas.offsetHeight || 140);

    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      size: Math.random() * 2 + 1,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const themeColor = creativePreset === 'particles' ? '#818cf8' : creativePreset === 'spatial' ? '#38bdf8' : '#c084fc';
      ctx.fillStyle = themeColor;

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse attraction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 80) {
          p.x += (dx / distToMouse) * 0.5;
          p.y += (dy / distToMouse) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const dist = Math.sqrt(pdx * pdx + pdy * pdy);
          if (dist < 65) {
            ctx.strokeStyle = `${themeColor}${Math.floor((1 - dist / 65) * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [creativePreset, activeFilter]);

  return (
    <main className="services-page-main">
      {/* Hero Section (Dark Theme) */}
      <section
        className="section-dark services-hero-wrapper"
        data-journey-section="services-hero"
        data-theme-section="services-hero"
        data-theme="dark"
      >
        <div className="services-hero-ambient-glow"></div>
        <div className="page-hero shell">
          <div className="section-kicker reveal">01 / CAPABILITIES & GROWTH SUITE</div>
          <h1 className="display reveal delay-1">
            Engineered software. <span className="gradient-text">Algorithmic scale.</span>
          </h1>
          <p className="hero-lead narrow reveal delay-2">
            We eliminate the gap between software engineers, designers, and media buyers. One unified partner for your website, Meta Ads, and organic search dominance.
          </p>

          <div className="services-hero-pills reveal delay-3">
            <span className="svc-pill">✦ Meta Ads Scale</span>
            <span className="svc-pill">✦ Next.js & React 19</span>
            <span className="svc-pill">✦ Technical & Programmatic SEO</span>
            <span className="svc-pill">✦ Interactive 3D WebGL</span>
            <span className="svc-pill">✦ CRO & AI Agents</span>
          </div>
        </div>
      </section>

      {/* Interactive Floating Services Grid Section (Dark Theme) */}
      <section
        className="section-dark services-interactive-section"
        data-journey-section="services-matrix"
        data-theme-section="services-matrix"
        data-theme="dark"
      >
        <div className="shell">
          {/* Category Filter Pills */}
          <div className="services-filter-bar reveal">
            <button
              className={`services-filter-pill ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              ✦ All Capabilities
            </button>
            <button
              className={`services-filter-pill ${activeFilter === 'growth' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('growth')}
            >
              📈 Meta Ads & Growth
            </button>
            <button
              className={`services-filter-pill ${activeFilter === 'dev' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('dev')}
            >
              ⚡ Full-Stack Web Dev
            </button>
            <button
              className={`services-filter-pill ${activeFilter === 'seo' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('seo')}
            >
              🎯 SEO & Organic
            </button>
            <button
              className={`services-filter-pill ${activeFilter === 'creative' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('creative')}
            >
              🎨 3D & Creative Tech
            </button>
            <button
              className={`services-filter-pill ${activeFilter === 'cro' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('cro')}
            >
              🔥 CRO & AI Agents
            </button>
          </div>

          {/* Floating Grid */}
          <div className="services-grid-interactive">
            {/* 01 / META ADS & PAID MEDIA */}
            {(activeFilter === 'all' || activeFilter === 'growth') && (
              <article className="service-card-interactive float-delay-0 reveal" data-service="meta-ads">
                <div className="service-card-header">
                  <span className="service-num">01</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">4.8X AVG ROAS</span>
                    <span className="service-tag">SERVER CAPI</span>
                  </div>
                </div>
                <h2 className="service-title">Meta Ads (FB/IG) & Paid Media</h2>
                <p className="service-summary">
                  High-scale performance marketing engineered with mathematical precision, server-side CAPI attribution, and continuous creative testing.
                </p>

                {/* Static Execution Blueprint Showcase */}
                <div className="card-static-widget">
                  <div className="widget-header">
                    <span className="widget-title">⚡ Growth Infrastructure & Execution</span>
                    <span className="widget-status">● Enterprise Ready</span>
                  </div>
                  <div className="static-features-grid">
                    <div className="static-feature-item">
                      <span className="feat-icon">⚡</span>
                      <div className="feat-info">
                        <strong>Server-Side CAPI Tracking</strong>
                        <p>100% data attribution bypassing iOS limits via Meta CAPI server sync.</p>
                      </div>
                    </div>
                    <div className="static-feature-item">
                      <span className="feat-icon">🎯</span>
                      <div className="feat-info">
                        <strong>Creative Velocity Testing</strong>
                        <p>15+ UGC & motion graphic angles produced and tested every month.</p>
                      </div>
                    </div>
                    <div className="static-feature-item">
                      <span className="feat-icon">📊</span>
                      <div className="feat-info">
                        <strong>Algorithmic Audience Scale</strong>
                        <p>Cost cap & bid cap automation to scale budgets predictably while preserving ROAS.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Weekly Live Dashboard</span>
                  <span className="del-pill">15+ UGC & Motion Angles/mo</span>
                  <span className="del-pill">Direct Slack Channel</span>
                </div>
              </article>
            )}

            {/* 02 / FULL-STACK WEB DEVELOPMENT */}
            {(activeFilter === 'all' || activeFilter === 'dev') && (
              <article className="service-card-interactive float-delay-1 reveal" data-service="web-dev">
                <div className="service-card-header">
                  <span className="service-num">02</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">REACT 19 / NEXT.JS</span>
                    <span className="service-tag">&lt;400MS LOAD</span>
                  </div>
                </div>
                <h2 className="service-title">Full-Stack Web & App Development</h2>
                <p className="service-summary">
                  Sub-second, bespoke React and Next.js applications engineered to handle millions of visitors while converting traffic into loyal customers.
                </p>

                {/* Interactive Stack Benchmark Widget */}
                <div className="card-interactive-widget">
                  <div className="widget-header">
                    <span className="widget-title">⚡ Stack Benchmark Comparison</span>
                    <div className="widget-toggle-pills">
                      <button
                        className={`toggle-btn ${devStack === 'devlooopers' ? 'active' : ''}`}
                        onClick={() => setDevStack('devlooopers')}
                      >
                        Devlooopers Stack
                      </button>
                      <button
                        className={`toggle-btn ${devStack === 'legacy' ? 'active' : ''}`}
                        onClick={() => setDevStack('legacy')}
                      >
                        Standard Legacy
                      </button>
                    </div>
                  </div>
                  <div className="widget-body">
                    <div className="benchmark-display">
                      <div className="bench-item">
                        <span className="bench-label">Page Load Time</span>
                        <div className="bench-bar-track">
                          <div
                            className="bench-bar-fill"
                            style={{
                              width: devStack === 'devlooopers' ? '12%' : '88%',
                              background: devStack === 'devlooopers' ? '#34d399' : '#f87171'
                            }}
                          ></div>
                        </div>
                        <span className={`bench-score ${devStack === 'devlooopers' ? 'good' : 'bad'}`}>
                          {devStack === 'devlooopers' ? '0.38s (Instant)' : '4.20s (Slow)'}
                        </span>
                      </div>

                      <div className="bench-item">
                        <span className="bench-label">Lighthouse Score</span>
                        <div className="bench-bar-track">
                          <div
                            className="bench-bar-fill"
                            style={{
                              width: devStack === 'devlooopers' ? '100%' : '42%',
                              background: devStack === 'devlooopers' ? '#38bdf8' : '#fbbf24'
                            }}
                          ></div>
                        </div>
                        <span className={`bench-score ${devStack === 'devlooopers' ? 'good' : 'bad'}`}>
                          {devStack === 'devlooopers' ? '100 / 100 Perfect' : '42 / 100 Poor'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Edge SSR/SSG CDN</span>
                  <span className="del-pill">TypeScript & Tailwind</span>
                  <span className="del-pill">Production GitHub Repo</span>
                </div>
              </article>
            )}

            {/* 03 / SEARCH ENGINE OPTIMIZATION */}
            {(activeFilter === 'all' || activeFilter === 'seo') && (
              <article className="service-card-interactive float-delay-2 reveal" data-service="seo">
                <div className="service-card-header">
                  <span className="service-num">03</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">RANK #1 GOOGLE</span>
                    <span className="service-tag">PROGRAMMATIC SEO</span>
                  </div>
                </div>
                <h2 className="service-title">SEO & Organic Traffic Dominance</h2>
                <p className="service-summary">
                  End-to-end organic acquisition. Deep technical schema audits, programmatic content architecture, and authority backlink building.
                </p>

                {/* Interactive SEO Niche Simulator */}
                <div className="card-interactive-widget">
                  <div className="widget-header">
                    <span className="widget-title">🎯 Targeted Niche Strategy</span>
                    <div className="widget-toggle-pills">
                      <button
                        className={`toggle-btn ${seoTab === 'ecommerce' ? 'active' : ''}`}
                        onClick={() => setSeoTab('ecommerce')}
                      >
                        E-Commerce
                      </button>
                      <button
                        className={`toggle-btn ${seoTab === 'saas' ? 'active' : ''}`}
                        onClick={() => setSeoTab('saas')}
                      >
                        SaaS & B2B
                      </button>
                      <button
                        className={`toggle-btn ${seoTab === 'local' ? 'active' : ''}`}
                        onClick={() => setSeoTab('local')}
                      >
                        High-Ticket
                      </button>
                    </div>
                  </div>
                  <div className="widget-body">
                    <div className="seo-preview-box">
                      {seoTab === 'ecommerce' && (
                        <div className="seo-snippet">
                          <span className="seo-url">https://yourbrand.com › shop › category</span>
                          <span className="seo-title-text">#1 Buy Premium Products Online — Instant Free Shipping</span>
                          <p className="seo-desc-text">★★★★★ 4.9 Rating (1,240 reviews). Verified in stock. Dominating top commercial search queries.</p>
                          <span className="seo-badge">+340% Organic Revenue Lift</span>
                        </div>
                      )}
                      {seoTab === 'saas' && (
                        <div className="seo-snippet">
                          <span className="seo-url">https://yourbrand.com › software › features</span>
                          <span className="seo-title-text">Top #1 Enterprise Platform — Automate Workflows in 2026</span>
                          <p className="seo-desc-text">Programmatic landing page architecture capturing 500+ high-intent buyer keywords.</p>
                          <span className="seo-badge">#1 Google Snippet & JSON-LD</span>
                        </div>
                      )}
                      {seoTab === 'local' && (
                        <div className="seo-snippet">
                          <span className="seo-url">https://yourbrand.com › services › agency</span>
                          <span className="seo-title-text">Best High-Ticket Growth Agency — Guaranteed ROAS & Scale</span>
                          <p className="seo-desc-text">Dominating regional & global map packs with high-authority backlink outreach.</p>
                          <span className="seo-badge">Top 3 Map Pack & Search Rank</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Core Web Vitals Fixes</span>
                  <span className="del-pill">Programmatic Pages</span>
                  <span className="del-pill">Google Search Console Integration</span>
                </div>
              </article>
            )}

            {/* 04 / 3D & CREATIVE TECH */}
            {(activeFilter === 'all' || activeFilter === 'creative') && (
              <article className="service-card-interactive float-delay-3 reveal" data-service="creative">
                <div className="service-card-header">
                  <span className="service-num">04</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">THREE.JS / WEBGL</span>
                    <span className="service-tag">60FPS SPATIAL</span>
                  </div>
                </div>
                <h2 className="service-title">Creative Tech & Interactive 3D WebGL</h2>
                <p className="service-summary">
                  Turn your digital presence into an award-winning visual masterpiece with spatial 3D scenes, tactile physics, and custom GPU shaders.
                </p>

                {/* Interactive Live Canvas Visualizer Widget */}
                <div className="card-interactive-widget">
                  <div className="widget-header">
                    <span className="widget-title">🎨 Realtime Shader & Physics Stage</span>
                    <div className="widget-toggle-pills">
                      <button
                        className={`toggle-btn ${creativePreset === 'particles' ? 'active' : ''}`}
                        onClick={() => setCreativePreset('particles')}
                      >
                        Particles
                      </button>
                      <button
                        className={`toggle-btn ${creativePreset === 'spatial' ? 'active' : ''}`}
                        onClick={() => setCreativePreset('spatial')}
                      >
                        Spatial
                      </button>
                      <button
                        className={`toggle-btn ${creativePreset === 'shaders' ? 'active' : ''}`}
                        onClick={() => setCreativePreset('shaders')}
                      >
                        GPU Shader
                      </button>
                    </div>
                  </div>
                  <div className="widget-body canvas-widget-body">
                    <canvas ref={canvasRef} className="interactive-canvas-preview"></canvas>
                    <div className="canvas-overlay-tag">
                      <span>✦ Interactive GLSL Context (Move Mouse)</span>
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Optimized GLTF/GLB Models</span>
                  <span className="del-pill">Mobile GPU Fallbacks</span>
                  <span className="del-pill">Tactile Sound & Micro-Physics</span>
                </div>
              </article>
            )}

            {/* 05 / CRO & CONVERSION FUNNELS */}
            {(activeFilter === 'all' || activeFilter === 'cro') && (
              <article className="service-card-interactive float-delay-4 reveal" data-service="cro">
                <div className="service-card-header">
                  <span className="service-num">05</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">+140% CONV LIFT</span>
                    <span className="service-tag">A/B SPLIT TESTING</span>
                  </div>
                </div>
                <h2 className="service-title">Conversion Rate Optimization (CRO)</h2>
                <p className="service-summary">
                  Maximize the value of every visitor. We audit friction points across your checkout and deploy high-converting landing page variants.
                </p>

                {/* Static Funnel Optimization Blueprint Showcase */}
                <div className="card-static-widget">
                  <div className="widget-header">
                    <span className="widget-title">🔥 Funnel Optimization & CRO Blueprint</span>
                    <span className="widget-status">● Data-Backed</span>
                  </div>
                  <div className="static-features-grid">
                    <div className="static-feature-item">
                      <span className="feat-icon">🎯</span>
                      <div className="feat-info">
                        <strong>Behavioral Heatmaps & Drop-off Audits</strong>
                        <p>Pinpoint exact drop-off steps and user hesitation zones across customer purchase journeys.</p>
                      </div>
                    </div>
                    <div className="static-feature-item">
                      <span className="feat-icon">⚡</span>
                      <div className="feat-info">
                        <strong>Direct Response Copy & Offer Design</strong>
                        <p>High-converting headline testing, social proof placement, and value proposition alignment.</p>
                      </div>
                    </div>
                    <div className="static-feature-item">
                      <span className="feat-icon">🛒</span>
                      <div className="feat-info">
                        <strong>Checkout Friction Elimination</strong>
                        <p>Streamlined form fields, 1-click upsells, and instant mobile payment acceleration.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Heatmap Diagnostics</span>
                  <span className="del-pill">Direct Response Copywriting</span>
                  <span className="del-pill">Checkout Friction Fixes</span>
                </div>
              </article>
            )}

            {/* 06 / AI AUTOMATION & AGENTS */}
            {(activeFilter === 'all' || activeFilter === 'cro' || activeFilter === 'ai') && (
              <article className="service-card-interactive float-delay-5 reveal" data-service="ai">
                <div className="service-card-header">
                  <span className="service-num">06</span>
                  <div className="service-card-meta">
                    <span className="service-tag highlight">AI AGENTS</span>
                    <span className="service-tag">AUTO LEAD SYNC</span>
                  </div>
                </div>
                <h2 className="service-title">AI Automation & Growth Infrastructure</h2>
                <p className="service-summary">
                  Autonomous agent workflows that qualify incoming leads in under 5 seconds, schedule calls on your calendar 24/7, and sync paid ad data to your CRM.
                </p>

                {/* Interactive AI Agent Pipeline Simulator */}
                <div className="card-interactive-widget">
                  <div className="widget-header">
                    <span className="widget-title">⚡ Autonomous Pipeline Latency</span>
                    <span className="widget-status">● 24/7 Agent Live</span>
                  </div>
                  <div className="widget-body">
                    <div className="ai-pipeline-steps">
                      {[
                        { step: 1, label: "Ad Lead Captured", speed: "Instant" },
                        { step: 2, label: "AI Qualifying Agent", speed: "3.2 sec" },
                        { step: 3, label: "Calendar Booking", speed: "Auto" },
                        { step: 4, label: "CRM & Slack Alert", speed: "< 1 sec" }
                      ].map((s) => (
                        <div
                          key={s.step}
                          className={`ai-step-card ${aiPipelineStep === s.step ? 'active' : ''}`}
                          onClick={() => setAiPipelineStep(s.step)}
                        >
                          <span className="step-number">0{s.step}</span>
                          <span className="step-name">{s.label}</span>
                          <span className="step-speed">{s.speed}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-deliverables-footer">
                  <span className="del-pill">Meta Lead Ad Webhooks</span>
                  <span className="del-pill">WhatsApp / SMS Auto Triggers</span>
                  <span className="del-pill">Zero-Latency Pipeline</span>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Kinetic Manifesto (Dark Section) */}
      <section
        className="kinetic-statement-section"
        id="kineticStatementSection"
        ref={kineticSectionRef}
        data-theme-section="services-manifesto"
        data-theme="dark"
      >
        <div className="kinetic-sticky-stage" id="kineticStickyStage">
          <div className="kinetic-bg-grid"></div>
          <div className="kinetic-glow" id="kineticGlow"></div>

          <div className="kinetic-inner shell">
            <div className="kinetic-meta-top">
              <span className="kinetic-kicker">02 / PHILOSOPHY</span>
              <span className="kinetic-coords">FULL-STACK MEDIA & CODE</span>
            </div>

            <div className="kinetic-type-box" id="kineticTypeBox">
              <div className="kinetic-line kinetic-line-compress" id="kLineWeBuild">
                <span className="k-word word-we">SCALING</span>
                <span className="k-word word-build">BRANDS</span>
              </div>

              <div className="kinetic-line kinetic-line-expand" id="kLineDigital">
                <span className="k-word word-digital gradient-text">AT VELOCITY</span>
              </div>

              <div className="kinetic-line kinetic-line-drift" id="kLineExperiences">
                <div className="experiences-track kinetic-drift-track" id="experiencesTrack" ref={driftTrackRef}>
                  <span className="k-word word-experiences">END TO END</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-sub">DEV x META ADS x SEO</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-repeat">END TO END</span>
                </div>
              </div>
            </div>

            <div className="kinetic-meta-bottom">
              <div className="kinetic-meter">
                <span className="meter-text">SCALE VELOCITY</span>
                <div className="meter-track">
                  <div className="meter-bar" id="kineticMeterBar" ref={meterBarRef}></div>
                </div>
              </div>
              <span className="kinetic-tagline">"Engineering digital growth for ambitious leaders."</span>
            </div>
          </div>
        </div>
      </section>

      {/* Next Move Call to Action (Dark Section) */}
      <section
        className="section-dark final-cta-wrapper"
        data-journey-section="services-cta"
        data-theme-section="services-cta"
        data-theme="dark"
      >
        <div className="shell final-cta">
          <div className="cta-panel reveal">
            <div className="section-kicker">03 / START SCALING</div>
            <h2>Let us engineer your <span className="gradient-text">growth engine.</span></h2>
            <p className="cta-desc">
              Whether you need a custom React platform, a high-converting Meta Ads campaign, or an SEO takeover — we are ready.
            </p>
            <div className="cta-buttons-row">
              <Link className="button primary" to="/contact" data-cursor="START" data-magnetic="true">
                Book a strategy session <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

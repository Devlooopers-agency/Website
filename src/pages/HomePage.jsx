import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero3DScene from '../components/Hero3DScene.jsx';
import CapabilityGrid from '../components/CapabilityGrid.jsx';

// Interactive Upgrades
import Counter from '../components/Counter.jsx';
import InteractiveCard from '../components/InteractiveCard.jsx';
import VelocityTicker from '../components/VelocityTicker.jsx';
import MagneticButton from '../components/MagneticButton.jsx';

export default function HomePage({ onOpenProject }) {
  const loopCanvasRef = useRef(null);
  const kineticSectionRef = useRef(null);
  const meterBarRef = useRef(null);
  const driftTrackRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    // Scroll Reveal Observer for all .reveal elements on page
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      });

      revealElements.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    } else {
      revealElements.forEach(el => el.classList.add('active'));
    }
  }, []);

  useEffect(() => {
    // Loop Wave Canvas Animation
    const canvas = loopCanvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let active = true;
        let wavePhase = 0;
        let waveAnimId = null;

        function renderLoopWave() {
          if (!active) return;
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
        waveAnimId = requestAnimationFrame(renderLoopWave);

        return () => {
          active = false;
          if (waveAnimId) cancelAnimationFrame(waveAnimId);
        };
      }
    }
  }, []);

  useEffect(() => {
    // Kinetic Typography Scroll Tracking
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



  const faqs = [
    {
      q: "How does Devlooopers scale Meta Ads (Facebook & Instagram) profitably?",
      a: "We run a structured 3-phase paid media engine: 1) Conversion API (CAPI) & server-side tracking setup to capture 100% of attribution data, 2) High-velocity creative angle testing across UGC, 3D motion, and direct-response hooks, and 3) Algorithmic scaling with automated bid caps to maintain a high ROAS (typically 4.0x–6.5x)."
    },
    {
      q: "Why do custom React / Next.js websites convert better than standard templates?",
      a: "Site speed directly impacts ad conversion rates and Google rankings. A 1-second delay in page load drops conversions by up to 20%. Our custom React/Next.js architectures load in sub-600ms, achieve 100/100 Core Web Vitals scores, lower your Meta Ads Cost-Per-Click (CPC), and dramatically lift landing page checkout conversions."
    },
    {
      q: "What is your approach to Search Engine Optimization (SEO)?",
      a: "We implement holistic SEO combining technical architecture (Schema markup, SSR/SSG rendering, zero CLS/LCP delays), high-intent commercial keyword mapping, programmatic landing page generation, and authoritative link velocity to secure Page #1 rankings for revenue-driving search queries."
    },
    {
      q: "Can you manage both our website development and ongoing digital marketing?",
      a: "Yes! In fact, that is where our clients see the biggest growth compounding. Because our engineers and media buyers work in the same team, ad campaign insights instantly translate into landing page split tests, new feature rollouts, and conversion optimizations without any agency friction."
    },
    {
      q: "How soon can we start, and what is the typical turnaround?",
      a: "Full-scale custom website builds typically ship in 2 to 4 weeks depending on scope. For Meta Ads and Digital Marketing campaigns, we can launch within 5 business days post our initial tracking audit and creative strategy blueprint."
    }
  ];

  return (
    <main className="homepage-main">
      {/* ============================================================
          SECTION 1: HERO (Clean Studio White with 3D Scene)
          ============================================================ */}
      <section
        className="hero-wrapper section-white-hero"
        data-journey-section="hero"
        data-theme-section="hero"
        data-theme="light"
        id="heroScene"
      >
        <div className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span>DIGITAL STUDIO</span> <i>✦</i> <span>DEV · META ADS · GROWTH MARKETING</span>
            </div>
            
            <h1 className="display hero-display" aria-label="BUILD WEBSITES THAT CONVERT. SCALE META ADS THAT SCALE.">
              <span className="line-mask"><span className="line-item line-1">ENGINEER</span></span>
              <span className="line-mask"><span className="line-item line-2">DIGITAL</span></span>
              <span className="line-mask"><span className="line-item line-3 gradient-text">DOMINANCE.</span></span>
            </h1>

            <p className="hero-lead hero-lead-reveal">
              We design high-converting web applications, technical SEO engines, and high-ROAS Meta (Facebook & Instagram) ad funnels for ambitious brands ready to scale beyond ordinary.
            </p>

            <div className="hero-actions hero-actions-reveal">
              <MagneticButton to="/work" className="button primary" data-cursor="EXPLORE">
                Explore our work <span>→</span>
              </MagneticButton>
              <MagneticButton to="/contact" className="text-link hero-audit-link" data-cursor="AUDIT">
                Claim Free Growth Audit <span>↗</span>
              </MagneticButton>
            </div>

            {/* Live Trust Metrics Bar */}
            <div className="hero-trust-grid">
              <div className="trust-item">
                <span className="trust-num gradient-text">
                  <Counter to={42} prefix="$" suffix="M+" />
                </span>
                <span className="trust-label">Client Revenue Scaled</span>
              </div>
              <div className="trust-item">
                <span className="trust-num">
                  <Counter to={4.8} suffix="x" decimals={1} />
                </span>
                <span className="trust-label">Average Meta Ads ROAS</span>
              </div>
              <div className="trust-item">
                <span className="trust-num">
                  <Counter to={100} suffix="%" />
                </span>
                <span className="trust-label">Core Web Vitals Score</span>
              </div>
              <div className="trust-item">
                <span className="trust-num">
                  <Counter to={150} suffix="+" />
                </span>
                <span className="trust-label">Digital Assets Shipped</span>
              </div>
            </div>
          </div>

          {/* 3D WebGL Hero Visual Scene */}
          <Hero3DScene />
        </div>
      </section>

      {/* ============================================================
          SECTION 2: MARQUEE TICKER (Crisp Light Contrast)
          ============================================================ */}
      <section
        className="marquee-journey-section"
        data-journey-section="marquee"
        data-theme-section="marquee"
        data-theme="light"
      >
        <VelocityTicker />
      </section>

      {/* ============================================================
          SECTION 3: CAPABILITIES MATRIX (Clean Studio Light)
          ============================================================ */}
      <section
        className="section-light section-capabilities"
        data-journey-section="capabilities"
        data-theme-section="capabilities"
        data-theme="light"
      >
        <div className="shell split-section what-we-do-section">
          <div className="section-kicker reveal">01 / UNIFIED GROWTH ENGINE</div>
          <div className="section-body">
            <div className="what-we-do-head">
              <h2 className="section-title reveal">
                Code, Creative & Performance Media in <span className="gradient-text">one tight loop.</span>
              </h2>
              <p className="section-copy reveal delay-1">
                Generic agencies build pretty websites that do not convert, or run paid ads to slow, broken landing pages. Devlooopers combines custom full-stack software development with algorithmic Meta ad buying and technical SEO to create predictable revenue compounders.
              </p>
            </div>
            
            <CapabilityGrid />
          </div>
        </div>
      </section>



      {/* ============================================================
          SECTION 5: SELECTED WORK PREVIEW (Obsidian Dark)
          ============================================================ */}
      <section
        className="section-dark work-preview-section"
        data-journey-section="work"
        data-theme-section="work"
        data-theme="dark"
      >
        <div className="shell work-preview">
          <div className="section-head reveal">
            <div>
              <div className="section-kicker">03 / PROVEN TRACK RECORD</div>
              <h2 className="section-title compact">
                Digital experiences built to <span className="gradient-text">monetize & scale.</span>
              </h2>
            </div>
            <Link className="text-link" to="/work" data-cursor="ALL WORK">
              See all 6 case studies <span>↗</span>
            </Link>
          </div>

          <div className="project-grid">
            {/* Orbit */}
            <div
              className="project-card large reveal"
              data-project="orbit"
              data-cursor="OPEN"
              data-cursor-text="VIEW PROJECT"
              onClick={() => onOpenProject('orbit')}
            >
              <div className="project-card-inner">
                <div className="card-glare"></div>
                <div className="project-art art-orbit">
                  <div className="scene-orbit" id="orbitScene">
                    <div className="orbit-glow"></div>
                    <svg className="orbit-svg" viewBox="0 0 300 300" aria-hidden="true">
                      <ellipse className="orbit-path" cx="150" cy="150" rx="110" ry="44" />
                      <line className="orbit-connector" x1="75" y1="135" x2="225" y2="165" />
                      <circle className="orbit-satellite sat-1" cx="75" cy="135" r="7" />
                      <circle className="orbit-satellite sat-2" cx="225" cy="165" r="7" />
                    </svg>
                    <div className="orbit-core"><div className="orbit-core-pulse"></div></div>
                  </div>
                  <div className="project-chip">META ADS & SCALING / 2026</div>
                  <div className="project-word">ORBIT</div>
                  <div className="project-hover-badge"><span>VIEW</span> ↗</div>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>Orbit Global Logistics</h3>
                    <p>Custom React Portal + 5.2x ROAS Meta Ad Campaign</p>
                  </div>
                  <span className="meta-arrow">↗</span>
                </div>
              </div>
            </div>

            {/* Nova */}
            <div
              className="project-card reveal delay-1"
              data-project="nova"
              data-cursor="OPEN"
              data-cursor-text="VIEW PROJECT"
              onClick={() => onOpenProject('nova')}
            >
              <div className="project-card-inner">
                <div className="card-glare"></div>
                <div className="project-art art-nova">
                  <div className="scene-nova" id="novaScene">
                    <div className="nova-grid"></div>
                    <div className="nova-sphere"></div>
                    <div className="nova-rings"></div>
                    <div className="nova-coords"><span>LAT: 47.32°</span><span>LNG: -122.18°</span></div>
                  </div>
                  <div className="project-chip">3D WEBGL & BRAND</div>
                  <div className="project-word">NOVA</div>
                  <div className="project-hover-badge"><span>VIEW</span> ↗</div>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>Nova Spatial Launch</h3>
                    <p>Interactive 3D Web Experience + Core Web Vitals 100%</p>
                  </div>
                  <span className="meta-arrow">↗</span>
                </div>
              </div>
            </div>

            {/* Loop */}
            <div
              className="project-card reveal delay-2"
              data-project="loop"
              data-cursor="OPEN"
              data-cursor-text="VIEW PROJECT"
              onClick={() => onOpenProject('loop')}
            >
              <div className="project-card-inner">
                <div className="card-glare"></div>
                <div className="project-art art-loop">
                  <div className="scene-loop" id="loopScene">
                    <canvas ref={loopCanvasRef} className="loop-wave-canvas" width="280" height="240"></canvas>
                    <div className="loop-symbol">∞</div>
                    <div className="loop-nodes">
                      <span className="l-node n1"></span><span className="l-node n2"></span><span className="l-node n3"></span>
                    </div>
                  </div>
                  <div className="project-chip">AI & SEO GROWTH ENGINE</div>
                  <div className="project-word">LOOP</div>
                  <div className="project-hover-badge"><span>VIEW</span> ↗</div>
                </div>
                <div className="project-meta">
                  <div>
                    <h3>Loop Intelligence Systems</h3>
                    <p>Programmatic SEO + AI Lead Capture Funnel</p>
                  </div>
                  <span className="meta-arrow">↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: WHY DEVLOOOPERS BENTO (Obsidian Dark)
          ============================================================ */}
      <section
        className="section-dark why-us-section"
        data-journey-section="bento"
        data-theme-section="bento"
        data-theme="dark"
      >
        <div className="shell">
          <div className="section-kicker reveal">04 / THE UNFAIR ADVANTAGE</div>
          <h2 className="section-title reveal">
            Why high-growth brands choose <span className="gradient-text">Devlooopers.</span>
          </h2>
          <p className="section-copy reveal delay-1" style={{ maxWidth: '680px', marginBottom: '40px' }}>
            Traditional agency silos cost you time, ad spend and missed revenue. Here is how our unified growth loop stacks the odds in your favor:
          </p>

          <div className="why-bento-grid">
            <div className="why-bento-card bento-wide reveal">
              <div className="bento-badge">SPEED & TECHNICAL EDGE</div>
              <h3>Sub-600ms Edge Frontends</h3>
              <p>
                Every millisecond matters. Our Next.js and React frontends achieve near-instantaneous page loads, decreasing Meta Ad bounce rates by up to 38% and lowering your overall customer acquisition cost (CAC).
              </p>
              <div className="bento-metric-tag">⚡ 100/100 Core Web Vitals Guaranteed</div>
            </div>

            <div className="why-bento-card reveal delay-1">
              <div className="bento-badge">DATA & ATTRIBUTION</div>
              <h3>Server-Side Meta CAPI</h3>
              <p>
                iOS updates and browser cookie blockers blind standard pixels. We install full server-side Conversion API tracking to ensure Meta's algorithm gets 100% accurate purchase and lead data.
              </p>
              <div className="bento-metric-tag">🎯 +28% More Attributed Conversions</div>
            </div>

            <div className="why-bento-card reveal delay-2">
              <div className="bento-badge">RAPID CREATIVE TESTING</div>
              <h3>High-Velocity Ad Creative Engine</h3>
              <p>
                We do not guess which ad works. We deploy 15+ tailored visual hooks, UGC angles, and interactive motion creatives every month to find winning ad combinations rapidly.
              </p>
              <div className="bento-metric-tag">📈 4.8x Average Return on Ad Spend</div>
            </div>

            <div className="why-bento-card bento-wide reveal delay-3">
              <div className="bento-badge">ORGANIC DOMINANCE</div>
              <h3>Programmatic & Technical SEO</h3>
              <p>
                Dominate high-volume buyer keywords with custom schema structured data, lightning-fast SSR architecture, and search intent clusters designed to outrank legacy competitors permanently.
              </p>
              <div className="bento-metric-tag">🔍 #1 Google Rankings on High-Intent Terms</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: CLIENT TESTIMONIALS (Obsidian Dark)
          ============================================================ */}
      <section
        className="section-dark testimonials-section"
        data-journey-section="testimonials"
        data-theme-section="testimonials"
        data-theme="dark"
      >
        <div className="shell">
          <div className="section-kicker reveal">05 / VERIFIED CLIENT RESULTS</div>
          <h2 className="section-title reveal">
            Real growth numbers from <span className="gradient-text">real founders.</span>
          </h2>

          <div className="testimonials-grid">
            <div className="testimonial-card reveal">
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">
                "Devlooopers revamped our entire e-commerce store in React and took over our Meta Ads. Within 60 days, our monthly revenue scaled from $25k to over $140k with a consistent 5.1x ROAS. Best decision we made."
              </p>
              <div className="test-author">
                <div className="test-avatar">AM</div>
                <div>
                  <strong>Aarav Malhotra</strong>
                  <span>Founder & CEO, Apex Lifestyle D2C</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal delay-1">
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">
                "Finding a team that actually understands both hard technical software architecture AND high-performance paid marketing is almost impossible. Devlooopers delivered both on time and blew our expectations away."
              </p>
              <div className="test-author">
                <div className="test-avatar">SK</div>
                <div>
                  <strong>Sameer Kapoor</strong>
                  <span>Head of Growth, Solace Bio-Tech</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card reveal delay-2">
              <div className="test-stars">★★★★★</div>
              <p className="test-quote">
                "Our organic Google traffic jumped by 420% after they rebuilt our web platform with programmatic SEO. We now generate high-intent enterprise leads every week on autopilot without spending an extra dime on ads."
              </p>
              <div className="test-author">
                <div className="test-avatar">RN</div>
                <div>
                  <strong>Rohan Nair</strong>
                  <span>Co-Founder, Orbit Global Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: KINETIC MANIFESTO (Clean Studio Light)
          ============================================================ */}
      <section
        className="kinetic-statement-section section-light"
        id="kineticStatementSection"
        ref={kineticSectionRef}
        data-journey-section="manifesto"
        data-theme-section="manifesto"
        data-theme="light"
      >
        <div className="kinetic-sticky-stage" id="kineticStickyStage">
          <div className="kinetic-bg-grid"></div>
          <div className="kinetic-glow" id="kineticGlow"></div>
          
          <div className="kinetic-inner shell">
            <div className="kinetic-meta-top">
              <span className="kinetic-kicker">06 / MANIFESTO</span>
              <span className="kinetic-coords">DESIGN x CODE x PERFORMANCE MARKETING</span>
            </div>
            
            <div className="kinetic-type-box" id="kineticTypeBox">
              <div className="kinetic-line kinetic-line-compress" id="kLineWeBuild">
                <span className="k-word word-we">BRINGING</span>
                <span className="k-word word-build">YOUR</span>
              </div>
              
              <div className="kinetic-line kinetic-line-expand" id="kLineDigital">
                <span className="k-word word-digital gradient-text">DIGITAL VISION</span>
              </div>
              
              <div className="kinetic-line kinetic-line-drift" id="kLineExperiences">
                <div className="experiences-track kinetic-drift-track" id="experiencesTrack" ref={driftTrackRef}>
                  <span className="k-word word-experiences">TO LIFE</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-sub">DEV x META ADS x SEO</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-repeat">TO LIFE</span>
                </div>
              </div>
            </div>
            
            <div className="kinetic-meta-bottom">
              <div className="kinetic-meter">
                <span className="meter-text">MANIFESTO CADENCE</span>
                <div className="meter-track">
                  <div className="meter-bar" id="kineticMeterBar" ref={meterBarRef}></div>
                </div>
              </div>
              <span className="kinetic-tagline">"Bringing your digital vision to life."</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: SEO FAQ ACCORDION (Clean Studio White)
          ============================================================ */}
      <section
        className="section-light faq-section"
        data-journey-section="faq"
        data-theme-section="faq"
        data-theme="light"
      >
        <div className="shell">
          <div className="section-kicker reveal">07 / FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="section-title reveal">
            Everything you need to know about <span className="gradient-text">scaling with us.</span>
          </h2>

          <div className="faq-accordion-container">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-interactive-card ${isOpen ? 'is-active' : ''}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question-header">
                    <h3 className="faq-question-title">{faq.q}</h3>
                    <span className={`faq-plus-icon ${isOpen ? 'is-rotated' : ''}`}>+</span>
                  </div>
                  <div className={`faq-grid-expand ${isOpen ? 'is-expanded' : ''}`}>
                    <div className="faq-grid-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: FINAL NEXT MOVE CTA (Obsidian Dark)
          ============================================================ */}
      <section
        className="section-dark final-cta-wrapper"
        data-journey-section="cta"
        data-theme-section="cta"
        data-theme="dark"
      >
        <div className="shell final-cta">
          <div className="cta-panel reveal">
            <div className="section-kicker">08 / NEXT MOVE</div>
            <h2>Ready to scale your <span className="gradient-text">revenue & brand?</span></h2>
            <p className="cta-desc">
              Book a 30-minute growth strategy session. We'll audit your current website speed, SEO rankings, and Meta Ads funnel for free.
            </p>
            <div className="cta-buttons-row">
              <Link className="button primary" to="/contact" data-cursor="SCALE" data-magnetic="true">
                Start a conversation <span>→</span>
              </Link>
              <Link className="button secondary" to="/services" data-cursor="SERVICES">
                View service packages <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

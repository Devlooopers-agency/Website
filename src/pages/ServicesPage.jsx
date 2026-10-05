import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';



export default function ServicesPage() {
  const [expandedServices, setExpandedServices] = useState({
    metaAds: true,
    webDev: false,
    seo: false,
    creative: false,
    cro: false,
    ai: false,
  });

  const kineticSectionRef = useRef(null);
  const meterBarRef = useRef(null);
  const driftTrackRef = useRef(null);

  const toggleService = (key) => {
    setExpandedServices(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    // Scroll reveals
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
  }, []);

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



  return (
    <main className="services-page-main">
      

      {/* Hero Section */}
      <section
        className="section-light services-hero-wrapper"
        data-journey-section="services-hero"
        data-theme-section="services-hero"
        data-theme="light"
      >
        <div className="page-hero shell">
          <div className="section-kicker reveal">01 / CAPABILITIES & GROWTH SUITE</div>
          <h1 className="display reveal delay-1">
            Engineered software. <span className="gradient-text">Algorithmic scale.</span>
          </h1>
          <p className="hero-lead narrow reveal delay-2">
            We eliminate the gap between software engineers, designers, and media buyers. One unified partner for your website, Meta Ads, and organic search dominance.
          </p>
          
          <div className="services-hero-pills reveal delay-3">
            <span className="svc-pill">✦ Meta Ads Management</span>
            <span className="svc-pill">✦ React & Next.js Architecture</span>
            <span className="svc-pill">✦ Technical SEO</span>
            <span className="svc-pill">✦ 3D WebGL</span>
            <span className="svc-pill">✦ CRO & Funnels</span>
          </div>
        </div>
      </section>

      {/* Interactive Services Grid Section */}
      <section
        className="section-light services-interactive-section"
        data-journey-section="services-matrix"
        data-theme-section="services-matrix"
        data-theme="light"
      >
        <div className="shell">
          <div className="services-grid-interactive">
            
            {/* 01 / META ADS & PAID MEDIA */}
            <article className={`service-card-interactive reveal ${expandedServices.metaAds ? 'is-expanded' : ''}`} data-service="meta-ads">
              <div className="service-card-header">
                <span className="service-num">01</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand Meta Ads service"
                  onClick={() => toggleService('metaAds')}
                >
                  <span className="btn-icon-plus">{expandedServices.metaAds ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">4.8X AVG ROAS</span>
                <span className="service-tag">CAPI TRACKING</span>
              </div>
              <h2 className="service-title">Meta Ads (Facebook & Instagram) & Paid Media</h2>
              <p className="service-summary">
                High-scale performance marketing engineered with mathematical precision, server-side attribution, and continuous creative testing.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>What We Execute:</h4>
                    <ul>
                      <li>Full Meta Business Manager & Server-Side CAPI Setup</li>
                      <li>High-Velocity Creative Testing (15+ UGC & Motion Angles/mo)</li>
                      <li>Algorithmic Bid Scaling & Horizontal Audience Expansion</li>
                      <li>Retargeting Funnels & Dynamic Product Ads (DPA)</li>
                      <li>Google Ads / Search PPC & YouTube Complementary Funnels</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Client Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">Weekly Live Performance Dashboard</span>
                      <span className="del-badge">Custom Ad Creative Library</span>
                      <span className="del-badge">A/B Landing Page Sync</span>
                      <span className="del-badge">Direct Slack/WhatsApp Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 02 / FULL-STACK WEB DEVELOPMENT */}
            <article className={`service-card-interactive reveal ${expandedServices.webDev ? 'is-expanded' : ''}`} data-service="web-dev">
              <div className="service-card-header">
                <span className="service-num">02</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand Web Development service"
                  onClick={() => toggleService('webDev')}
                >
                  <span className="btn-icon-plus">{expandedServices.webDev ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">REACT / NEXT.JS</span>
                <span className="service-tag">&lt;600MS LOAD</span>
              </div>
              <h2 className="service-title">Full-Stack Web & App Development</h2>
              <p className="service-summary">
                Sub-second, bespoke web platforms and applications engineered to handle millions of visitors while converting traffic into high-ticket clients.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>Core Tech Stack:</h4>
                    <ul>
                      <li>React 19, Next.js (App Router), TypeScript</li>
                      <li>Edge SSR/SSG for instant worldwide CDN caching</li>
                      <li>Custom Headless CMS & E-commerce Checkout Flow</li>
                      <li>RESTful & GraphQL Scalable APIs</li>
                      <li>100/100 Core Web Vitals Optimization</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">Production-Ready GitHub Repo</span>
                      <span className="del-badge">Automated CI/CD Pipeline</span>
                      <span className="del-badge">Cross-Device Responsive QA</span>
                      <span className="del-badge">Interactive Component Library</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 03 / SEARCH ENGINE OPTIMIZATION */}
            <article className={`service-card-interactive reveal ${expandedServices.seo ? 'is-expanded' : ''}`} data-service="seo">
              <div className="service-card-header">
                <span className="service-num">03</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand SEO service"
                  onClick={() => toggleService('seo')}
                >
                  <span className="btn-icon-plus">{expandedServices.seo ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">RANK #1 GOOGLE</span>
                <span className="service-tag">PROGRAMMATIC SEO</span>
              </div>
              <h2 className="service-title">Search Engine Optimization (SEO) & Organic Growth</h2>
              <p className="service-summary">
                End-to-end organic acquisition strategy. We combine deep technical schema audits, programmatic content architecture, and authority building.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>What We Execute:</h4>
                    <ul>
                      <li>Full Technical SEO Audit & Core Web Vitals Fixes</li>
                      <li>High-Intent Commercial Keyword Mapping</li>
                      <li>JSON-LD Schema Markup & Rich Snippet Dominance</li>
                      <li>Programmatic Landing Page Generation for Niche Scale</li>
                      <li>Authority Backlink Strategy & Competitor Gap Takeover</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">Monthly Keyword Ranking Tracker</span>
                      <span className="del-badge">Content Architecture Blueprint</span>
                      <span className="del-badge">Google Search Console Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 04 / 3D & CREATIVE TECH */}
            <article className={`service-card-interactive reveal ${expandedServices.creative ? 'is-expanded' : ''}`} data-service="creative">
              <div className="service-card-header">
                <span className="service-num">04</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand Creative Technology service"
                  onClick={() => toggleService('creative')}
                >
                  <span className="btn-icon-plus">{expandedServices.creative ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">THREE.JS / WEBGL</span>
                <span className="service-tag">60FPS SPATIAL</span>
              </div>
              <h2 className="service-title">Creative Technology & Interactive 3D WebGL</h2>
              <p className="service-summary">
                Turn your digital presence into an award-winning visual masterpiece with spatial 3D scenes, tactile physics, and custom GPU shaders.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>Capabilities:</h4>
                    <ul>
                      <li>Three.js & WebGL 3D Interactive Environments</li>
                      <li>Interactive 3D Product Showcases & Configurators</li>
                      <li>GLSL Shaders & Particle Simulation Systems</li>
                      <li>Spatial Audio & Smooth Physics Interactions</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">Optimized 3D GLTF/GLB Assets</span>
                      <span className="del-badge">Mobile GPU Fallback System</span>
                      <span className="del-badge">Interactive Showcase Embeds</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 05 / CRO & CONVERSION FUNNELS */}
            <article className={`service-card-interactive reveal ${expandedServices.cro ? 'is-expanded' : ''}`} data-service="cro">
              <div className="service-card-header">
                <span className="service-num">05</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand CRO service"
                  onClick={() => toggleService('cro')}
                >
                  <span className="btn-icon-plus">{expandedServices.cro ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">+140% CONV LIFT</span>
                <span className="service-tag">A/B SPLIT TESTING</span>
              </div>
              <h2 className="service-title">Conversion Rate Optimization (CRO) & Funnel Design</h2>
              <p className="service-summary">
                Maximize the ROI of every visitor. We identify friction points across your funnel and deploy high-converting landing page variants.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>Capabilities:</h4>
                    <ul>
                      <li>Session Recording & Heatmap Behavioral Diagnostics</li>
                      <li>Multi-Variant Direct Response Landing Pages</li>
                      <li>Checkout Page & Form Drop-off Optimization</li>
                      <li>Dynamic Headline & Social Proof Testing</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">A/B Split Test Experiments</span>
                      <span className="del-badge">Conversion Analytics Report</span>
                      <span className="del-badge">High-Converting Copywriting</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* 06 / AI AUTOMATION & AGENTS */}
            <article className={`service-card-interactive reveal ${expandedServices.ai ? 'is-expanded' : ''}`} data-service="ai">
              <div className="service-card-header">
                <span className="service-num">06</span>
                <button
                  className="service-expand-btn"
                  aria-label="Expand AI Automation service"
                  onClick={() => toggleService('ai')}
                >
                  <span className="btn-icon-plus">{expandedServices.ai ? 'âˆ’' : '+'}</span>
                  <span className="btn-icon-arrow">â†’</span>
                </button>
              </div>
              <div className="service-card-meta">
                <span className="service-tag">AI AGENTS</span>
                <span className="service-tag">AUTO LEAD SYNC</span>
              </div>
              <h2 className="service-title">AI Automation & Growth Infrastructure</h2>
              <p className="service-summary">
                Autonomous systems that handle lead qualification, book meetings on your calendar 24/7, and sync paid ad leads directly to your sales pipeline.
              </p>

              <div className="service-expanded-content">
                <div className="service-deep-grid">
                  <div className="deep-col">
                    <h4>Capabilities:</h4>
                    <ul>
                      <li>Instant Meta Lead Ad to CRM & WhatsApp/SMS Instant Triggers</li>
                      <li>AI Chatbot Lead Qualification on Landing Pages</li>
                      <li>Automated Multi-Channel Email & Outreach Sequences</li>
                      <li>Custom Python & LangChain Internal Agent Tools</li>
                    </ul>
                  </div>
                  <div className="deep-col">
                    <h4>Deliverables:</h4>
                    <div className="deliverable-badge-list">
                      <span className="del-badge">Automated Webhooks & Pipelines</span>
                      <span className="del-badge">Zero-Latency Lead Notification System</span>
                      <span className="del-badge">CRM Integration Setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>



      {/* Kinetic Manifesto */}
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

      {/* Next Move Call to Action */}
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


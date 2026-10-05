import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CapabilityGrid() {
  const [expandedId, setExpandedId] = useState(1);

  const toggleAccordion = (id, e) => {
    if (e) e.stopPropagation();
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return;
    const rect = cardEl.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const glare = cardEl.querySelector('.cap-glare');
    if (glare) {
      glare.style.transform = `translate(${x - 120}px, ${y - 120}px)`;
      glare.style.opacity = '1';
    }
  };

  return (
    <div className="capabilities-interactive-grid" id="capabilitiesGrid">

      {/* 01 / Meta Ads & Performance Marketing */}
      <div
        className={`capability-card-interactive ${expandedId === 1 ? 'is-expanded' : ''}`}
        data-capability="meta-ads"
        data-cursor="META ADS"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 1}
          aria-controls="cap-content-1"
          id="cap-header-1"
          onClick={(e) => toggleAccordion(1, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">01</span>
            <h3 className="cap-title">Meta Ads & Performance Marketing</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-blue"></span>
              <span className="cap-badge-text">4.8X AVG ROAS</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 1 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-1" role="region" aria-labelledby="cap-header-1">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-ads-art">
                <div className="cap-ad-card ac-1">
                  <div className="ad-card-top">
                    <span className="ad-tag">INSTAGRAM REEL</span>
                    <span className="ad-roas-badge">5.2x ROAS</span>
                  </div>
                  <div className="ad-card-body">
                    <div className="ad-hook-line">Hook: "Why top brands switched in 2026..."</div>
                    <div className="ad-bars">
                      <div className="ad-bar b1"></div>
                      <div className="ad-bar b2"></div>
                      <div className="ad-bar b3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="cap-desc">
              Data-backed paid acquisition across Meta (Facebook & Instagram) and Google Ads. We engineer high-converting ad angles, algorithmic bidding, server-side Conversion API (CAPI), and relentless creative testing to scale your revenue predictably.
            </p>

            <div className="cap-tags">
              <span>Meta Ads Management</span>
              <span>Conversion API (CAPI)</span>
              <span>UGC & Motion Creatives</span>
              <span>Scale Strategy</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore Meta Ads & Marketing</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 02 / Full-Stack Web & App Development */}
      <div
        className={`capability-card-interactive ${expandedId === 2 ? 'is-expanded' : ''}`}
        data-capability="web-dev"
        data-cursor="WEB DEV"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 2}
          aria-controls="cap-content-2"
          id="cap-header-2"
          onClick={(e) => toggleAccordion(2, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">02</span>
            <h3 className="cap-title">Full-Stack Web & App Development</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-green"></span>
              <span className="cap-badge-text">REACT / NEXT.JS</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 2 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-2" role="region" aria-labelledby="cap-header-2">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-code-art">
                <div className="cap-code-row"><span className="cc-kw">const</span> <span className="cc-var">engine</span> = <span className="cc-fn">createArchitecture</span>();</div>
                <div className="cap-code-row"><span className="cc-kw">await</span> <span className="cc-var">cluster</span>.<span className="cc-fn">deployToEdge</span>();</div>
                <div className="cap-code-row cc-highlight"><span className="cc-ok">✓ 100% Lighthouse Score</span> <span className="cc-cursor"></span></div>
              </div>
            </div>

            <p className="cap-desc">
              Blazing fast, responsive web applications built with modern architectures (React, Next.js, Node.js). We build web platforms that convert visitors into paying clients with sub-second page loads and zero technical debt.
            </p>

            <div className="cap-tags">
              <span>Next.js & React</span>
              <span>E-commerce & Custom CMS</span>
              <span>API Architecture</span>
              <span>PWA & Web Apps</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore Web Engineering</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 03 / SEO & Organic Growth Dominance */}
      <div
        className={`capability-card-interactive ${expandedId === 3 ? 'is-expanded' : ''}`}
        data-capability="seo"
        data-cursor="SEO ENGINE"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 3}
          aria-controls="cap-content-3"
          id="cap-header-3"
          onClick={(e) => toggleAccordion(3, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">03</span>
            <h3 className="cap-title">Search Engine Optimization (SEO)</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-purple"></span>
              <span className="cap-badge-text">PAGE #1 RANKINGS</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 3 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-3" role="region" aria-labelledby="cap-header-3">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-seo-art">
                <div className="seo-rank-card">
                  <div className="seo-rank-top">
                    <span className="seo-badge-google">GOOGLE SEARCH</span>
                    <span className="seo-pos-tag">RANK #1</span>
                  </div>
                  <div className="seo-kw-title">High-Intent Buyer Keywords</div>
                  <div className="seo-traffic-curve">
                    <span className="traffic-bar t1"></span>
                    <span className="traffic-bar t2"></span>
                    <span className="traffic-bar t3"></span>
                    <span className="traffic-bar t4"></span>
                  </div>
                </div>
              </div>
            </div>

            <p className="cap-desc">
              Holistic search dominance. We fuse technical SEO, Core Web Vitals optimization, programmatic SEO landing pages, and authority building so your brand captures high-intent organic search traffic 24/7 without paying per click.
            </p>

            <div className="cap-tags">
              <span>Technical & Schema SEO</span>
              <span>Programmatic Content</span>
              <span>Core Web Vitals</span>
              <span>Keyword Dominance</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore SEO & Organic Growth</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 04 / Creative Technology & 3D WebGL */}
      <div
        className={`capability-card-interactive ${expandedId === 4 ? 'is-expanded' : ''}`}
        data-capability="creative"
        data-cursor="3D & WEBGL"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 4}
          aria-controls="cap-content-4"
          id="cap-header-4"
          onClick={(e) => toggleAccordion(4, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">04</span>
            <h3 className="cap-title">Creative Technology & 3D WebGL</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-blue"></span>
              <span className="cap-badge-text">THREE.JS / 60FPS</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 4 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-4" role="region" aria-labelledby="cap-header-4">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-particles-art">
                <div className="cap-ring cr-1"></div>
                <div className="cap-ring cr-2"></div>
                <div className="cap-ring cr-3"></div>
                <div className="cap-core-sparkle">✦</div>
              </div>
            </div>

            <p className="cap-desc">
              WebGL, Three.js 3D scenes, tactile micro-interactions, and expressive spatial interfaces that turn standard websites into unforgettable, award-winning interactive brand showcases.
            </p>

            <div className="cap-tags">
              <span>WebGL / Three.js</span>
              <span>Interactive 3D Configurator</span>
              <span>60fps Kinetic Motion</span>
              <span>Creative Shaders</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore Creative Technology</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 05 / Conversion Rate Optimization & Funnels */}
      <div
        className={`capability-card-interactive ${expandedId === 5 ? 'is-expanded' : ''}`}
        data-capability="cro"
        data-cursor="CONVERSION"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 5}
          aria-controls="cap-content-5"
          id="cap-header-5"
          onClick={(e) => toggleAccordion(5, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">05</span>
            <h3 className="cap-title">Conversion Rate Optimization (CRO)</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-green"></span>
              <span className="cap-badge-text">+140% CONV LIFT</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 5 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-5" role="region" aria-labelledby="cap-header-5">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-funnel-art">
                <div className="funnel-level fl-1">Landing Page (100%)</div>
                <div className="funnel-level fl-2">Intent Engagement (68%)</div>
                <div className="funnel-level fl-3">Checkout & Lead (24%)</div>
              </div>
            </div>

            <p className="cap-desc">
              We design frictionless user journeys. Using session heatmaps, user behavioral analytics, and multi-variant A/B landing pages, we systematically eliminate conversion bottlenecks to maximize return on ad spend.
            </p>

            <div className="cap-tags">
              <span>Landing Page Funnels</span>
              <span>A/B Testing Matrices</span>
              <span>Checkout Flow Optimization</span>
              <span>Behavioral Analytics</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore CRO & Funnels</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 06 / AI Automation & Growth Loops */}
      <div
        className={`capability-card-interactive ${expandedId === 6 ? 'is-expanded' : ''}`}
        data-capability="ai-growth"
        data-cursor="AI AUTOMATION"
        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
      >
        <div className="cap-glare"></div>
        <button
          className="cap-accordion-toggle"
          aria-expanded={expandedId === 6}
          aria-controls="cap-content-6"
          id="cap-header-6"
          onClick={(e) => toggleAccordion(6, e)}
        >
          <div className="cap-header-info">
            <span className="cap-num">06</span>
            <h3 className="cap-title">AI Automation & Smart Growth Loops</h3>
          </div>
          <div className="cap-header-meta">
            <div className="cap-live-badge">
              <span className="cap-badge-pulse pulse-purple"></span>
              <span className="cap-badge-text">24/7 REVENUE AGENTS</span>
            </div>
            <span className="cap-accordion-icon" aria-hidden="true">{expandedId === 6 ? '−' : '+'}</span>
          </div>
        </button>

        <div className="cap-expandable-content" id="cap-content-6" role="region" aria-labelledby="cap-header-6">
          <div className="cap-content-inner">
            <div className="cap-micro-stage">
              <div className="cap-synapse-art">
                <div className="cap-syn-core"></div>
                <div className="cap-syn-orbit so-1"></div>
                <div className="cap-syn-orbit so-2"></div>
                <div className="cap-syn-node n-1"></div>
                <div className="cap-syn-node n-2"></div>
                <div className="cap-syn-node n-3"></div>
              </div>
            </div>

            <p className="cap-desc">
              Custom AI integrations that automate lead qualification, sync high-ticket leads straight to your CRM in real time, and trigger automated multi-channel follow-ups to close deals while you sleep.
            </p>

            <div className="cap-tags">
              <span>Autonomous Lead Qualifiers</span>
              <span>CRM & Meta Lead Sync</span>
              <span>AI Chat Systems</span>
              <span>Automated Email Loops</span>
            </div>

            <div className="cap-footer">
              <Link to="/services" className="cap-action-link">
                <span className="cap-action-label">Explore AI Growth</span>
                <span className="cap-action-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

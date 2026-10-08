import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mega-site-footer" data-journey-section="footer">
      <div className="shell footer-shell">

        {/* Top Footer Callout Box */}
        <div className="footer-top-cta">
          <div className="footer-cta-left">
            <span className="footer-badge">⚡ GET YOUR FREE AUDIT</span>
            <h3 className="footer-cta-title">Stop leaving revenue on the table.</h3>
            <p className="footer-cta-desc">
              Let us analyze your current website speed, Meta Ad creatives, and SEO rankings. We'll show you exactly where you're losing customers.
            </p>
          </div>
          <div className="footer-cta-right">
            <Link to="/contact" className="button primary footer-btn" data-cursor="CLAIM">
              Claim Free Growth Audit <span>→</span>
            </Link>
          </div>
        </div>

        {/* 4-Column Mega Navigation */}
        <div className="footer-columns-grid">

          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <img
                src="/assets/devlooopers-logo-d.png"
                alt="devlooopers icon"
                className="footer-logo-icon"
                width="26"
                height="26"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (!e.currentTarget.dataset.fallback) {
                    e.currentTarget.dataset.fallback = '1';
                    e.currentTarget.src = './assets/devlooopers-logo-d.png';
                  }
                }}
              />
              <span className="footer-brand-title">devlooopers</span>
            </div>
            <p className="footer-brand-desc">
              The full-stack digital growth agency. We fuse high-performance React web engineering with algorithmic Meta & Google Ads to scale ambitious brands predictably.
            </p>
            <div className="footer-social-links">
              <a href="https://www.instagram.com/devlooopers?stkn=bXhqYW5udnFzcTA1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram ↗</a>
              <a href="https://www.linkedin.com/company/devlooopers/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn ↗</a>
              <a href="https://github.com/Devlooopers-agency/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub ↗</a>
            </div>
          </div>

          {/* Services Column (SEO Keywords) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Growth Services</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">Meta Ads (Facebook & Instagram)</Link></li>
              <li><Link to="/services">Full-Stack Web & Next.js Apps</Link></li>
              <li><Link to="/services">Search Engine Optimization (SEO)</Link></li>
              <li><Link to="/services">High-Converting Landing Pages (CRO)</Link></li>
              <li><Link to="/services">3D WebGL & Interactive Experiences</Link></li>
              <li><Link to="/services">AI Automation & CRM Sync</Link></li>
            </ul>
          </div>

          {/* Platforms & Tech */}
          <div className="footer-col">
            <h4 className="footer-col-title">Technologies</h4>
            <ul className="footer-nav-list">
              <li><span>React & Next.js Framework</span></li>
              <li><span>Meta Business & CAPI Server</span></li>
              <li><span>Three.js & WebGL 3D</span></li>
              <li><span>Google Analytics 4 & Tag Manager</span></li>
              <li><span>Node.js & Edge Compute</span></li>
              <li><span>Python & AI Vector Workflows</span></li>
            </ul>
          </div>

          {/* Navigation & Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio & Contact</h4>
            <ul className="footer-nav-list">
              <li><Link to="/work">Selected Client Work</Link></li>
              <li><Link to="/about">About Studio & Philosophy</Link></li>
              <li><Link to="/services">Capabilities & Pricing</Link></li>
              <li><Link to="/contact">Book 30-Min Strategy Call</Link></li>
              <li><span className="contact-email">Info@devlooopers.in</span></li>
              <li><span className="contact-loc">Mumbai, India • Worldwide Remote</span></li>
            </ul>
          </div>
        </div>

        {/* SEO Keywords Breadcrumb Bar */}
        <div className="footer-seo-bar">
          <span className="seo-bar-label">SPECIALIZATIONS:</span>
          <span className="seo-bar-tags">
            Custom Web Development Agency • High-ROAS Meta Ads Management • Full-Stack React & Next.js Engineers • Technical SEO & Core Web Vitals • 3D WebGL Studios • Digital Growth Marketing
          </span>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>© 2026 devlooopers. All rights reserved.</div>
          <div>Design x Code x Curiosity x Performance Media</div>
          <div className="footer-legal">
            <Link to="/contact">Privacy Policy</Link>
            <span className="legal-dot">•</span>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

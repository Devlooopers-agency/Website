import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const kineticSectionRef = useRef(null);
  const meterBarRef = useRef(null);
  const driftTrackRef = useRef(null);

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
    <main>
      <section
        className="page-hero section-light"
        data-journey-section="about-hero"
        data-theme-section="about-hero"
        data-theme="light"
      >
        <div className="shell">
          <div className="section-kicker reveal">03 / THE STUDIO</div>
          <h1 className="display reveal delay-1">
            Curious by default.<br />
            <span className="gradient-text">Specific by choice.</span>
          </h1>
          <p className="hero-lead narrow reveal delay-2">
            Devlooopers is a multidisciplinary digital studio for ambitious digital work. We combine code, motion, technical SEO, and Meta performance marketing to engineer high-converting digital dominance.
          </p>
        </div>
      </section>

      <section
        className="section studio-grid-wrapper section-light"
        data-journey-section="about-grid"
        data-theme-section="about-grid"
        data-theme="light"
      >
        <div className="shell studio-grid">
          <div className="studio-quote reveal">
            <span className="quote-mark">"</span>
            <p>Technology should not sit behind the experience. It should be part of the experience.</p>
          </div>
          <div className="studio-copy reveal delay-1">
            <p>We work across strategy, brand, interface, frontend engineering, and algorithmic media buying. That range lets us move from a blank page to a revenue-generating machine without losing the thread.</p>
            <p>Our favourite projects are the ones where a team has something real to change: a process to simplify, a new category to define, or a product that deserves a better front door.</p>
          </div>
        </div>
      </section>

      <section
        className="section values-wrapper section-light"
        data-journey-section="about-values"
        data-theme-section="about-values"
        data-theme="light"
      >
        <div className="shell values">
          <div className="section-kicker reveal">04 / VALUES</div>
          <div className="value-list">
            <div className="value reveal" data-cursor="VALUE">
              <span>01</span>
              <h3>Useful first</h3>
              <p>Style earns its place by helping the user move and converting curiosity into revenue.</p>
            </div>
            <div className="value reveal delay-1" data-cursor="VALUE">
              <span>02</span>
              <h3>Play with purpose</h3>
              <p>Interaction is not decoration when it teaches, guides, or rewards engagement.</p>
            </div>
            <div className="value reveal delay-2" data-cursor="VALUE">
              <span>03</span>
              <h3>Make it tangible</h3>
              <p>Prototype the real thing early. Decisions get sharper when the work can be touched and measured.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Manifesto Kinetic Typographic Section */}
      <section
        className="kinetic-statement-section section-dark"
        id="studioKineticSection"
        ref={kineticSectionRef}
        data-journey-section="about-manifesto"
        data-theme-section="about-manifesto"
        data-theme="dark"
      >
        <div className="kinetic-sticky-stage">
          <div className="kinetic-bg-grid"></div>
          <div className="kinetic-glow"></div>
          
          <div className="kinetic-inner shell">
            <div className="kinetic-meta-top">
              <span className="kinetic-kicker">04 / THE FORMULA</span>
              <span className="kinetic-coords">PRECISION x COMPUTATION x SOUL</span>
            </div>
            
            <div className="kinetic-type-box">
              <div className="kinetic-line kinetic-line-compress">
                <span className="k-word">BRINGING</span>
                <span className="k-word">YOUR</span>
              </div>
              
              <div className="kinetic-line kinetic-line-expand">
                <span className="k-word gradient-text">DIGITAL VISION</span>
              </div>
              
              <div className="kinetic-line kinetic-line-drift line-experiences">
                <div className="experiences-track kinetic-drift-track" ref={driftTrackRef}>
                  <span className="k-word">TO LIFE</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-sub">DEVLOOOPERS</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-repeat">TO LIFE</span>
                </div>
              </div>
            </div>
            
            <div className="kinetic-meta-bottom">
              <div className="kinetic-meter">
                <span className="meter-text">STUDIO MANIFESTO</span>
                <div className="meter-track">
                  <div className="meter-bar kinetic-meter-bar" ref={meterBarRef}></div>
                </div>
              </div>
              <span className="kinetic-tagline">"Bringing your digital vision to life."</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section final-cta-wrapper section-dark"
        data-journey-section="about-cta"
        data-theme-section="about-cta"
        data-theme="dark"
      >
        <div className="shell final-cta">
          <div className="cta-panel reveal">
            <div className="section-kicker">05 / CONTACT</div>
            <h2>Good work starts with a <span className="gradient-text">good question.</span></h2>
            <Link className="button primary" to="/contact" data-cursor="LET'S TALK" data-magnetic="true">
              Ask yours <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

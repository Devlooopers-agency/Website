import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Thank you! Your message has been received. Our team will get back to you shortly.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <main>
      <section
        className="page-hero contact-hero section-light"
        data-journey-section="contact-hero"
        data-theme-section="contact-hero"
        data-theme="light"
      >
        <div className="shell">
          <div className="section-kicker reveal">04 / START SOMETHING</div>
          <h1 className="display reveal delay-1">Tell us what you're <span className="gradient-text">building.</span></h1>
          <p className="hero-lead narrow reveal delay-2">A product, a brand, a prototype or a stubborn problem. Give us the rough version.</p>
        </div>
      </section>

      {/* Start Project Kinetic Typographic Section */}
      <section
        className="kinetic-statement-section section-dark"
        id="contactKineticSection"
        data-journey-section="contact-manifesto"
        data-theme-section="contact-manifesto"
        data-theme="dark"
        ref={kineticSectionRef}
      >
        <div className="kinetic-sticky-stage">
          <div className="kinetic-bg-grid"></div>
          <div className="kinetic-glow"></div>
          
          <div className="kinetic-inner shell">
            <div className="kinetic-meta-top">
              <span className="kinetic-kicker">05 / INITIATIVE</span>
              <span className="kinetic-coords">INQUIRY × EXPERIMENT × LAUNCH</span>
            </div>
            
            <div className="kinetic-type-box">
              <div className="kinetic-line kinetic-line-compress">
                <span className="k-word">LET'S</span>
                <span className="k-word">BUILD</span>
              </div>
              
              <div className="kinetic-line kinetic-line-expand">
                <span className="k-word gradient-text">UNEXPECTED</span>
              </div>
              
              <div className="kinetic-line kinetic-line-drift line-experiences">
                <div className="experiences-track kinetic-drift-track" ref={driftTrackRef}>
                  <span className="k-word">TOGETHER</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-sub">START A PROJECT</span>
                  <span className="k-spark">✦</span>
                  <span className="k-word word-repeat">TOGETHER</span>
                </div>
              </div>
            </div>
            
            <div className="kinetic-meta-bottom">
              <div className="kinetic-meter">
                <span className="meter-text">INITIATION VECTOR</span>
                <div className="meter-track">
                  <div className="meter-bar kinetic-meter-bar" ref={meterBarRef}></div>
                </div>
              </div>
              <span className="kinetic-tagline">“Tell us what you're building below.”</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section contact-grid-wrapper section-dark"
        data-journey-section="contact-form"
        data-theme-section="contact-form"
        data-theme="dark"
      >
        <div className="shell contact-grid">
        <form className="contact-form reveal" id="contactForm" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="floating-group">
              <input
                required
                type="text"
                id="fieldName"
                name="name"
                className={`floating-input ${formData.name ? 'has-value' : ''}`}
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="fieldName" className="floating-label">Your Name</label>
            </div>
            <div className="floating-group">
              <input
                required
                type="email"
                id="fieldEmail"
                name="email"
                className={`floating-input ${formData.email ? 'has-value' : ''}`}
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="fieldEmail" className="floating-label">Your Email</label>
            </div>
          </div>
          <div className="floating-group">
            <input
              type="text"
              id="fieldCompany"
              name="company"
              className={`floating-input ${formData.company ? 'has-value' : ''}`}
              placeholder=" "
              value={formData.company}
              onChange={handleChange}
            />
            <label htmlFor="fieldCompany" className="floating-label">Company / Team</label>
          </div>
          <div className="floating-group">
            <textarea
              required
              id="fieldMessage"
              name="message"
              className={`floating-input floating-textarea ${formData.message ? 'has-value' : ''}`}
              rows="6"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label htmlFor="fieldMessage" className="floating-label">What are you building?</label>
          </div>
          <div className="form-foot">
            <button className="button primary" type="submit" data-cursor="SEND" data-magnetic="true">
              Send enquiry <span>?</span>
            </button>
            <small>Demo form — connect this endpoint to your backend or email provider.</small>
          </div>
          {statusMessage && (
            <p className="form-status" id="formStatus" style={{ color: 'var(--green)', marginTop: '12px' }} aria-live="polite">
              {statusMessage}
            </p>
          )}
        </form>

        <aside className="contact-aside reveal delay-1">
          <div className="section-kicker">DIRECT</div>
          <h2>hello@devlooopers.com</h2>
          <p>For partnerships, project briefs and experiments.</p>
          <div className="social-row">
            <a href="#" data-cursor="LINKEDIN">LinkedIn ?</a>
            <a href="#" data-cursor="INSTAGRAM">Instagram ?</a>
            <a href="#" data-cursor="GITHUB">GitHub ?</a>
          </div>
          <div className="aside-note">
            <span>BASED IN</span>
            <strong>India · Working globally</strong>
          </div>
        </aside>
        </div>
      </section>
    </main>
  );
}


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const projectData = {
  orbit: {
    title: 'Orbit Logistics',
    subtitle: 'Global freight intelligence and real-time fleet coordination platform.',
    chip: 'PRODUCT / 2026',
    challenge: 'Logistics dispatchers juggled dozens of disconnected tools, creating coordination delays and cognitive fatigue during high-volume operations.',
    solution: 'We engineered a unified spatial command center with real-time route optimization, dynamic telemetry heatmaps, and low-latency synchronization.',
    deliverables: ['UX Strategy & Design System', 'WebGL Spatial Telemetry Engine', 'Fullstack Production Architecture'],
    stats: [
      { num: '+140%', lbl: 'Dispatch Speed' },
      { num: '45ms', lbl: 'Sync Latency' },
      { num: '99.98%', lbl: 'Accuracy' }
    ],
    tech: ['Three.js', 'WebGL PBR', 'TypeScript', 'Tailored CSS'],
    artClass: 'art-orbit',
    type: 'orbit'
  },
  nova: {
    title: 'Nova Spaces',
    subtitle: 'Spatial navigation and 3D architectural showroom experience.',
    chip: '3D / WEBGL',
    challenge: 'Architectural presentations relied on flat 2D renders that lacked physical depth and realistic atmospheric daylight response.',
    solution: 'Built an interactive 3D WebGL experience featuring dynamic sun elevation shaders, spatial soundscapes, and smooth camera choreographies.',
    deliverables: ['3D WebGL Shader Pipeline', 'Spatial Camera Choreography', 'Performance-Tuned Geometry Engine'],
    stats: [
      { num: '60fps', lbl: 'Fluid Motion' },
      { num: '4.8x', lbl: 'User Engagement' },
      { num: '<1.2s', lbl: 'Time to First Draw' }
    ],
    tech: ['Three.js', 'Custom GLSL', 'Web Audio API', 'Vite'],
    artClass: 'art-nova',
    type: 'nova'
  },
  loop: {
    title: 'Loop Intelligence',
    subtitle: 'Autonomous AI workflow orchestrator and visual system canvas.',
    chip: 'AI / PLATFORM',
    challenge: 'Multi-agent LLM systems were opaque black boxes where team members could neither debug decisions nor guide multi-step flows reliably.',
    solution: 'Engineered an interactive node canvas that renders agent reasoning chains in real time, making execution observable, debuggable, and steerable.',
    deliverables: ['Agent Workflow Canvas', 'Vector Embedding Retrieval', 'Interactive Real-Time Telemetry'],
    stats: [
      { num: '10x', lbl: 'Workflow Leverage' },
      { num: '0.4s', lbl: 'Step Latency' },
      { num: '100%', lbl: 'Deterministic Safety' }
    ],
    tech: ['Agent Tooling', 'Canvas Rendering', 'Vector RAG', 'Node.js'],
    artClass: 'art-loop',
    type: 'loop'
  },
  aura: {
    title: 'Aura Health',
    subtitle: 'Spatial biometric intelligence and real-time metabolic telemetry interface.',
    chip: 'SPATIAL / HEALTH',
    challenge: 'Patients and clinicians struggled with fragmented health metrics presented in lifeless tabular dashboards.',
    solution: 'Designed a spatial metabolic HUD that visualizes cellular telemetry, circadian rhythms, and heart coherence in responsive 3D.',
    deliverables: ['Spatial UI & Design Tokens', '3D Metabolic Viewport', 'Low-Power Edge Bluetooth Sync'],
    stats: [
      { num: '99.4%', lbl: 'Telemetry Accuracy' },
      { num: '3.6x', lbl: 'Patient Compliance' },
      { num: '<50ms', lbl: 'Sensor Refresh' }
    ],
    tech: ['WebGL / Three.js', 'Web Bluetooth', 'Tailored CSS', 'TypeScript'],
    artClass: 'art-aura',
    type: 'aura'
  },
  apex: {
    title: 'Apex Trading Engine',
    subtitle: 'High-frequency institutional execution terminal and market depth visualizer.',
    chip: 'FINTECH / WEBGL',
    challenge: 'Traders lost valuable milliseconds reading complex order books across fragmented desktop monitors.',
    solution: 'Built an ultra-low-latency 3D liquidity matrix with real-time order flow physics and instant hedging triggers.',
    deliverables: ['High-Throughput Order Book UI', 'GPU-Accelerated Depth Visualizer', 'Sub-Millisecond Data Feed'],
    stats: [
      { num: '0.8ms', lbl: 'Tick-to-Trade' },
      { num: '$4.2B+', lbl: 'Daily Volume' },
      { num: '100%', lbl: 'Zero Frame Drops' }
    ],
    tech: ['WebSockets', 'Canvas 2D / WebGL', 'Rust Wasm', 'Tailored CSS'],
    artClass: 'art-apex',
    type: 'apex'
  },
  solace: {
    title: 'Solace Audio',
    subtitle: 'Generative acoustic spatializer and AI music composition system.',
    chip: 'AI / AUDIO',
    challenge: 'Traditional audio workstations are complex and hostile to rapid creative spatial sound design.',
    solution: 'Built an expressive 3D soundfield canvas where frequencies materialize as reactive, fluid particles.',
    deliverables: ['Web Audio Synthesis Engine', 'Particle Frequency Visualizer', 'Interactive Stem Sequencer'],
    stats: [
      { num: '64 Stems', lbl: 'Spatial Audio Channels' },
      { num: '60fps', lbl: 'Fluid Particle Rate' },
      { num: '12ms', lbl: 'Audio Latency' }
    ],
    tech: ['Web Audio API', 'Custom GLSL Shaders', 'Three.js', 'Vite'],
    artClass: 'art-solace',
    type: 'solace'
  }
};

export default function ProjectSimulatorModal({ activeProject, onClose }) {
  const [terminalLogs, setTerminalLogs] = useState([]);
  const project = projectData[activeProject] || (activeProject ? projectData.orbit : null);

  useEffect(() => {
    if (!project) return;
    if (project.type === 'orbit') {
      setTerminalLogs(['[SYS_INIT] 4,820 Cargo Nodes Online · Telemetry latency: 42ms · Routing nominal.']);
    } else if (project.type === 'nova') {
      setTerminalLogs(['[GL_SCENE] 3D Shaders compiled · Sun elevation: 42.5° · Ray bounce count: 2.']);
    } else if (project.type === 'loop') {
      setTerminalLogs(['[LOOP_GRAPH] 6 Agent nodes ready · Memory pool sync: Active · Awaiting task prompt.']);
    } else if (project.type === 'aura') {
      setTerminalLogs(['[BIOMETRICS] Bio-sensor connected · HRV: 78ms (Optimal) · Circadian phase: Active.']);
    } else if (project.type === 'apex') {
      setTerminalLogs(['[ORDER_BOOK] Match engine operational · Depth: $4.2M liquidity spread · Tick latency: 0.8ms.']);
    } else if (project.type === 'solace') {
      setTerminalLogs(['[AUDIO_ENGINE] 64 Spatial audio stems initialized · Buffer size: 256 samples · Reverb decay: 1.8s.']);
    }

    document.body.classList.add('modal-open');

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const handleSimPing = () => {
    const ports = ['Singapore', 'Rotterdam', 'Los Angeles', 'Dubai', 'Hamburg'];
    const p = ports[Math.floor(Math.random() * ports.length)];
    const lat = (Math.random() * 20 + 20).toFixed(1);
    setTerminalLogs(prev => [...prev, `[REROUTE] Optimizing 24 vessels towards Hub ${p}... ? Latency ${lat}ms`]);
  };

  const handleSimSun = () => {
    const elev = (Math.random() * 60 + 10).toFixed(1);
    setTerminalLogs(prev => [...prev, `[SUN_SHIFT] Solar angle updated: ${elev}° · Ambient temperature shader recalculated.`]);
  };

  const handleSimAgent = () => {
    const tasks = ['Synthesize user requirement', 'Query knowledge graph', 'Verify constraints', 'Emit output bundle'];
    const t = tasks[Math.floor(Math.random() * tasks.length)];
    setTerminalLogs(prev => [...prev, `[AGENT_EXEC] Step completed: "${t}" (Confidence 99.4%)`]);
  };

  const handleSimAura = () => {
    const hr = Math.floor(Math.random() * 20 + 65);
    const ox = (Math.random() * 2 + 97).toFixed(1);
    setTerminalLogs(prev => [...prev, `[BIO_SYNC] Heart Rate: ${hr} BPM · SpO2: ${ox}% · Metabolic State: Peak Focus`]);
  };

  const handleSimApex = () => {
    const qty = (Math.random() * 50 + 10).toFixed(2);
    const price = (Math.random() * 500 + 64000).toFixed(2);
    setTerminalLogs(prev => [...prev, `[MATCHED] ${qty} BTC @ $${price} filled across 12 institutional liquidity pools.`]);
  };

  const handleSimSolace = () => {
    const freqs = ['432Hz (Deep Warmth)', '528Hz (Harmonic Solfeggio)', '852Hz (Spatial Clarity)'];
    const f = freqs[Math.floor(Math.random() * freqs.length)];
    setTerminalLogs(prev => [...prev, `[HARMONIC] Synthesizing acoustic stem at ${f} with fluid particle resonance.`]);
  };

  const handleResetLogs = () => {
    if (project.type === 'orbit') setTerminalLogs(['[SYS_INIT] 4,820 Cargo Nodes Online · Telemetry latency: 42ms · Routing nominal.']);
    else if (project.type === 'nova') setTerminalLogs(['[GL_SCENE] 3D Shaders compiled · Sun elevation: 42.5° · Ray bounce count: 2.']);
    else if (project.type === 'loop') setTerminalLogs(['[LOOP_GRAPH] 6 Agent nodes ready · Memory pool sync: Active · Awaiting task prompt.']);
    else if (project.type === 'aura') setTerminalLogs(['[BIOMETRICS] Bio-sensor connected · HRV: 78ms (Optimal) · Circadian phase: Active.']);
    else if (project.type === 'apex') setTerminalLogs(['[ORDER_BOOK] Match engine operational · Depth: $4.2M liquidity spread · Tick latency: 0.8ms.']);
    else setTerminalLogs(['[AUDIO_ENGINE] 64 Spatial audio stems initialized · Buffer size: 256 samples · Reverb decay: 1.8s.']);
  };

  return (
    <div id="projectModal" className="project-modal is-open" aria-hidden="false" role="dialog" aria-modal="true">
      <div className="project-modal-backdrop" id="modalBackdrop" onClick={onClose}></div>
      <div className="project-modal-sheet" id="modalSheet">
        <button className="project-modal-close" id="modalClose" aria-label="Close project showcase" data-cursor="CLOSE" onClick={onClose}>?</button>
        <div className="project-modal-scroll">
          <div className="project-modal-hero" id="modalHero">
            <div className={`modal-hero-art ${project.artClass}`} id="modalHeroArt"></div>
            <div className="modal-hero-overlay">
              <div className="modal-chip" id="modalChip">{project.chip}</div>
              <h1 className="modal-title" id="modalTitle">{project.title}</h1>
              <p className="modal-subtitle" id="modalSubtitle">{project.subtitle}</p>
            </div>
          </div>
          
          <div className="project-modal-body shell">
            <div className="modal-grid">
              <div className="modal-main">
                <div className="modal-section">
                  <span className="section-kicker">CHALLENGE & BRIEF</span>
                  <p id="modalChallenge">{project.challenge}</p>
                </div>
                
                <div className="modal-section">
                  <span className="section-kicker">STUDIO EXECUTION</span>
                  <p id="modalSolution">{project.solution}</p>
                </div>
                
                <div className="modal-section modal-interactive-wrap">
                  <span className="section-kicker">LIVE INTERACTIVE TELEMETRY</span>
                  <div className="modal-interactive-box" id="modalInteractiveBox">
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '14px', flexWrap: 'wrap' }}>
                        {project.type === 'orbit' && (
                          <button className="button primary" onClick={handleSimPing} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ? Run Fleet Simulation
                          </button>
                        )}
                        {project.type === 'nova' && (
                          <button className="button primary" onClick={handleSimSun} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ?? Daylight Shift
                          </button>
                        )}
                        {project.type === 'loop' && (
                          <button className="button primary" onClick={handleSimAgent} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ?? Execute Agent Step
                          </button>
                        )}
                        {project.type === 'aura' && (
                          <button className="button primary" onClick={handleSimAura} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ?? Simulate Biometrics
                          </button>
                        )}
                        {project.type === 'apex' && (
                          <button className="button primary" onClick={handleSimApex} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ? Match Limit Orders
                          </button>
                        )}
                        {project.type === 'solace' && (
                          <button className="button primary" onClick={handleSimSolace} style={{ padding: '9px 16px', fontSize: '0.82rem' }}>
                            ?? Generate Soundfield
                          </button>
                        )}
                        <button className="button" onClick={handleResetLogs} style={{ padding: '9px 16px', fontSize: '0.82rem', background: '#fff', border: '1px solid var(--line)' }}>
                          Reset Stream
                        </button>
                      </div>
                      <div
                        id="simTerminal"
                        style={{
                          background: '#10131b',
                          color: project.type === 'orbit' || project.type === 'aura' ? '#39cf72' : project.type === 'nova' || project.type === 'apex' ? '#377cd6' : '#5350d7',
                          fontFamily: 'monospace',
                          fontSize: '0.8rem',
                          padding: '14px',
                          borderRadius: '12px',
                          textAlign: 'left',
                          maxHeight: '110px',
                          overflowY: 'auto',
                          lineHeight: '1.5'
                        }}
                      >
                        {terminalLogs.map((log, i) => (
                          <div key={i}>{log}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <aside className="modal-sidebar">
                <div className="modal-sidebar-card">
                  <span className="section-kicker">DELIVERABLES</span>
                  <ul className="modal-list" id="modalDeliverables">
                    {project.deliverables.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                
                <div className="modal-sidebar-card">
                  <span className="section-kicker">KEY METRICS</span>
                  <div className="modal-stats" id="modalStats">
                    {project.stats.map((s, i) => (
                      <div className="stat-item" key={i}>
                        <span className="stat-num">{s.num}</span>
                        <span className="stat-lbl">{s.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="modal-sidebar-card">
                  <span className="section-kicker">TECHNOLOGY STACK</span>
                  <div className="tag-row modal-tags" id="modalTech">
                    {project.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                </div>

                <div className="modal-sidebar-actions">
                  <Link to="/contact" className="button primary w-100" data-cursor="START" onClick={onClose}>
                    Start Similar Project ?
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

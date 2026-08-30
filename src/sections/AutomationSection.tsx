import React, { useState, useEffect } from 'react';
import { AUTOMATION_WORKFLOW } from '../data/content';

export const AutomationSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % AUTOMATION_WORKFLOW.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const techStack = [
    'Terraform',
    'Kubernetes',
    'Docker',
    'GitHub Actions',
    'Jenkins',
    'Ansible',
    'Cloud-Native Automation'
  ];

  return (
    <section id="automation" className="section bg-grid-pattern" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">AUTOMATION & DEVOPS</div>
          <h2>Automation that removes complexity.</h2>
          <p style={{ marginTop: '0.75rem' }}>
            We automate repetitive infrastructure, deployment and operational processes so engineering teams can focus on building.
          </p>
        </div>

        {/* Animated Pipeline Workflow Visual */}
        <div className="card-glass reveal-on-scroll" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-mono)', color: '#0f172a' }}>
              // CONTINUOUS DELIVERY PIPELINE
            </h3>
            <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
              Active Flow: Step {activeStep + 1} / {AUTOMATION_WORKFLOW.length}
            </div>
          </div>

          {/* Workflow Nodes Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem',
              alignItems: 'center',
              marginBottom: '2rem'
            }}
          >
            {AUTOMATION_WORKFLOW.map((node, idx) => {
              const isActive = activeStep === idx;
              return (
                <div key={node.id} style={{ position: 'relative' }}>
                  <div
                    onClick={() => setActiveStep(idx)}
                    style={{
                      background: isActive ? 'rgba(2, 132, 199, 0.08)' : '#f8fafc',
                      border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      padding: '1.25rem 0.85rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                      transition: 'all var(--transition-normal)'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: isActive ? 'var(--accent-cyan)' : 'rgba(15, 23, 42, 0.08)',
                        color: isActive ? '#ffffff' : 'var(--text-muted)',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.75rem auto'
                      }}
                    >
                      {idx + 1}
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? 'var(--accent-cyan)' : '#0f172a' }}>
                      {node.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Node Detail Footer */}
          <div
            style={{
              background: '#f8fafc',
              borderRadius: '8px',
              padding: '1.25rem',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                EXECUTING STAGE:
              </span>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                {AUTOMATION_WORKFLOW[activeStep].name} — {AUTOMATION_WORKFLOW[activeStep].detail}
              </div>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                background: 'rgba(79, 70, 229, 0.08)',
                color: 'var(--accent-indigo)',
                border: '1px solid rgba(79, 70, 229, 0.2)',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px'
              }}
            >
              {AUTOMATION_WORKFLOW[activeStep].tech}
            </div>
          </div>
        </div>

        {/* Conceptual Tech Badges */}
        <div className="reveal-on-scroll">
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
            AUTOMATION ECOSYSTEM FRAMEWORKS:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.875rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

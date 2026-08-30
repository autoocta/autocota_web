import React, { useState } from 'react';
import { MIGRATION_STEPS, MIGRATION_SERVICES } from '../data/content';

interface MigrationSectionProps {
  onOpenContact: () => void;
}

export const MigrationSection: React.FC<MigrationSectionProps> = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">MIGRATION & MODERNIZATION</div>
          <h2>Move what's important.<br /><span className="gradient-text">Modernize what's next.</span></h2>
          <p style={{ marginTop: '0.75rem' }}>
            We help enterprise teams transition from complex legacy architectures to flexible, containerized cloud environments with zero risk and maximum uptime.
          </p>
        </div>

        {/* Visual Migration Stepper */}
        <div className="card-glass reveal-on-scroll" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
          <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '1.5rem' }}>
            // END-TO-END MIGRATION METHODOLOGY
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              position: 'relative',
              marginBottom: '2rem'
            }}
          >
            {MIGRATION_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    background: isActive ? 'rgba(2, 132, 199, 0.08)' : '#f8fafc',
                    border: isActive ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '1.25rem 1rem',
                    cursor: 'pointer',
                    transition: 'all var(--transition-normal)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-subtle)',
                      fontWeight: 700,
                      marginBottom: '0.35rem'
                    }}
                  >
                    STEP {step.step}
                  </div>
                  <div
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      color: isActive ? 'var(--accent-cyan)' : '#0f172a'
                    }}
                  >
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Description Card */}
          <div
            style={{
              padding: '1.5rem',
              background: '#f8fafc',
              borderRadius: '10px',
              borderLeft: '4px solid var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.25rem' }}>
                Phase {MIGRATION_STEPS[activeStep].step}: {MIGRATION_STEPS[activeStep].title}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                {MIGRATION_STEPS[activeStep].description}
              </p>
            </div>
            <button onClick={onOpenContact} className="btn btn-outline btn-sm">
              Plan Your Migration
            </button>
          </div>
        </div>

        {/* Services Badges Grid */}
        <div className="reveal-on-scroll">
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
            SPECIALIZED MIGRATION & REFACTORING SERVICES:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
            {MIGRATION_SERVICES.map((service, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.9rem',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ color: 'var(--accent-cyan)' }}>✓</span>
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

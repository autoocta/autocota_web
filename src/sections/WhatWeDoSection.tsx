import React from 'react';
import { CAPABILITY_BLOCKS } from '../data/content';

interface WhatWeDoSectionProps {
  onOpenContact: () => void;
}

export const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="section bg-grid-pattern">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-on-scroll">
          <div className="section-tag">CAPABILITIES</div>
          <h2>Technology, engineered end to end.</h2>
          <p style={{ marginTop: '0.75rem' }}>
            From legacy modernization to intelligent automation, we design and implement technology solutions that are built to scale.
          </p>
        </div>

        {/* 8 Capability Blocks Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {CAPABILITY_BLOCKS.map((block) => (
            <div
              key={block.number}
              className="card-glass reveal-on-scroll"
              onClick={onOpenContact}
              style={{
                padding: '2rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px'
              }}
            >
              <div>
                {/* Top Row: Number & Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)'
                    }}
                  >
                    {block.number}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(0, 242, 254, 0.08)',
                      border: '1px solid rgba(0, 242, 254, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      transition: 'transform var(--transition-normal)'
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                  {block.title}
                </h3>

                {/* Short Description */}
                <p style={{ fontSize: '0.925rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {block.description}
                </p>
              </div>

              {/* Bottom Row: Detail tags & Arrow */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                  {block.details[0]}
                </span>
                <div
                  style={{
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'transform var(--transition-fast)'
                  }}
                >
                  <span>Explore</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

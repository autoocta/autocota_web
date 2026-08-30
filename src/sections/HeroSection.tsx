import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { HeroCanvas } from '../components/HeroCanvas';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      className="section hero-section"
      style={{
        paddingTop: 'clamp(6.5rem, 10vw, 9.5rem)',
        paddingBottom: '4.5rem',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(2, 132, 199, 0.1) 0%, rgba(248, 250, 252, 1) 75%)'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Hero Left Content */}
          <div className="reveal-on-scroll is-visible">
            {/* Status Badge */}
            <div className="section-tag" style={{ marginBottom: '1.25rem' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent-cyan)' }} />
              {HERO_CONTENT.badge}
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.15rem, 5.5vw, 4.25rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                marginBottom: '1.25rem',
                letterSpacing: '-0.03em',
                color: '#0f172a'
              }}
            >
              Engineering the <br />
              <span className="gradient-text">Future of Technology.</span>
            </h1>

            {/* Supporting Headline */}
            <h2
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-main)',
                marginBottom: '1.25rem',
                opacity: 0.95
              }}
            >
              {HERO_CONTENT.subHeadline}
            </h2>

            {/* Hero Paragraph */}
            <p
              style={{
                fontSize: 'clamp(0.975rem, 1.2vw, 1.1rem)',
                color: 'var(--text-muted)',
                marginBottom: '2.25rem',
                maxWidth: '580px',
                lineHeight: 1.68
              }}
            >
              {HERO_CONTENT.paragraph}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenContact} className="btn btn-primary">
                {HERO_CONTENT.primaryCTA}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#services" className="btn btn-secondary">
                {HERO_CONTENT.secondaryCTA}
              </a>
            </div>
          </div>

          {/* Hero Right Canvas Animation */}
          <div className="reveal-on-scroll is-visible" style={{ position: 'relative', width: '100%', minHeight: '320px' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.08), transparent 70%)',
                pointerEvents: 'none'
              }}
            />
            <HeroCanvas />
          </div>
        </div>
      </div>
    </section>
  );
};

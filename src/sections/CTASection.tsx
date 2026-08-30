import React from 'react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="section bg-grid-pattern" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div
          className="reveal-on-scroll"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
            border: '1px solid rgba(2, 132, 199, 0.35)',
            borderRadius: '24px',
            padding: '4.5rem 3rem',
            textAlign: 'center',
            boxShadow: '0 20px 60px -15px rgba(2, 132, 199, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
            <div className="section-tag" style={{ margin: '0 auto 1.5rem auto' }}>
              ENGAGE AUTO OCTA
            </div>

            <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', marginBottom: '1.25rem', lineHeight: '1.15', color: '#0f172a' }}>
              Have a technology <br />
              <span className="gradient-text">challenge?</span>
            </h2>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
              Let's design the right architecture, automate the complexity and build what's next.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={onOpenContact} className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
                Start a Conversation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#services" className="btn btn-secondary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

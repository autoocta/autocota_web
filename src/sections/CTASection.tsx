import React from 'react';
import { COMPANY_ADDRESS } from '../data/content';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="section bg-grid-pattern" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Main CTA Container */}
        <div
          className="reveal-on-scroll"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid rgba(2, 132, 199, 0.25)',
            borderRadius: '24px',
            padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3rem)',
            boxShadow: '0 20px 60px -15px rgba(2, 132, 199, 0.12)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-40%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '700px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(2, 132, 199, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
              <div className="section-tag" style={{ margin: '0 auto 1.25rem auto' }}>
                CONTACT & LOCATION
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', marginBottom: '1.25rem', lineHeight: '1.15', color: '#0f172a' }}>
                Get in Touch with <br />
                <span className="gradient-text">AutoOcta</span>
              </h2>

              <p style={{ fontSize: 'clamp(1rem, 1.3vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Whether you need cloud migration, software development, or AI engineering, our team is ready to assist.
              </p>
            </div>

            {/* Contact Info Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}
            >
              {/* Card 1: Office Address */}
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(2, 132, 199, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(2, 132, 199, 0.1)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    REGISTERED OFFICE
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 800 }}>
                    {COMPANY_ADDRESS.name}
                  </h3>

                  <address style={{ fontStyle: 'normal', fontSize: '1rem', color: '#334155', lineHeight: '1.6' }}>
                    <strong>3rd Floor, Aragini Bhavan, 2/4</strong>,<br />
                    Dr Rajkumar Rd, Udayam Nagar, Rajajinagar,<br />
                    Bengaluru, Karnataka 560021, India
                  </address>
                </div>

                <div
                  style={{
                    marginTop: '1.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(15, 23, 42, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <span>Mon - Fri: 9:00 AM - 6:00 PM IST</span>
                </div>
              </div>

              {/* Card 2: Direct Contact Email & Inquiry */}
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(2, 132, 199, 0.2)',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(2, 132, 199, 0.1)',
                      color: 'var(--accent-cyan)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>

                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                    DIRECT CONTACT
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '0.75rem', fontWeight: 800 }}>
                    Engineering Inquiries
                  </h3>

                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    Reach our principal engineering team directly via email or submit a project specification.
                  </p>

                  <a
                    href="mailto:hello@autoocta.com"
                    style={{
                      fontSize: '1.15rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      textDecoration: 'underline',
                      display: 'inline-block'
                    }}
                  >
                    hello@autoocta.com
                  </a>
                </div>

                <div style={{ marginTop: '1.75rem' }}>
                  <button onClick={onOpenContact} className="btn btn-primary" style={{ width: '100%', padding: '0.9rem 1.5rem', fontSize: '1rem' }}>
                    Send Us a Message
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

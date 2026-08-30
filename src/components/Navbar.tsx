import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#multicloud' },
    { name: 'AI & Automation', href: '#ai-automation' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.35rem 0',
        boxShadow: scrolled ? '0 4px 20px rgba(15, 23, 42, 0.04)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo Mark + Name */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          {/* Octagon Geometric Logo Mark */}
          <div
            style={{
              width: '34px',
              height: '34px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg viewBox="0 0 40 40" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon
                points="12,4 28,4 36,12 36,28 28,36 12,36 4,28 4,12"
                stroke="url(#octaGrad)"
                strokeWidth="2.5"
                fill="rgba(2, 132, 199, 0.08)"
              />
              <circle cx="20" cy="20" r="3" fill="#0284c7" />
              <line x1="20" y1="4" x2="20" y2="12" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
              <line x1="20" y1="28" x2="20" y2="36" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
              <line x1="4" y1="20" x2="12" y2="20" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
              <line x1="28" y1="20" x2="36" y2="20" stroke="#0284c7" strokeWidth="1.5" opacity="0.6" />
              <defs>
                <linearGradient id="octaGrad" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#0f172a',
              fontFamily: 'var(--font-main)'
            }}
          >
            AUTO<span style={{ color: 'var(--accent-cyan)' }}>OCTA</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                fontSize: '0.925rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                transition: 'color var(--transition-fast)'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onOpenContact} className="btn btn-primary btn-sm desktop-only">
            Let's Talk
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-only"
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              fontSize: '1.6rem',
              cursor: 'pointer',
              padding: '0.25rem'
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-main)'
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenContact();
            }}
            className="btn btn-primary"
            style={{ marginTop: '0.5rem' }}
          >
            Let's Talk
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 850px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 851px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
};

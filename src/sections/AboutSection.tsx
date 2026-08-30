import React from 'react';

export const AboutSection: React.FC = () => {
  const pillars = [
    { title: "Engineering Mindset", desc: "Hands-on implementation by seasoned software and cloud architects." },
    { title: "Practical Solutions", desc: "Production-tested software built to deliver measurable operational outcomes." },
    { title: "Cloud-Native Architecture", desc: "Scalable, resilient platforms decoupled from proprietary hardware." },
    { title: "Automation First", desc: "Eliminating manual overhead across deployments, security, and data pipelines." },
    { title: "AI Integration", desc: "Embedding GenAI and RAG intelligent layers securely into enterprise apps." },
    { title: "Long-Term Scalability", desc: "Designing system boundaries that grow seamlessly with organizational expansion." }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          {/* About Text Left */}
          <div className="reveal-on-scroll">
            <div className="section-tag">ABOUT AUTO OCTA</div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: '1.2', marginBottom: '1.5rem', color: '#0f172a' }}>
              We build technology that <br />
              <span className="gradient-text">moves businesses forward.</span>
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#0f172a', lineHeight: '1.7', marginBottom: '1.25rem', fontWeight: 600 }}>
              AutoOcta is a technology engineering company helping organizations modernize infrastructure, migrate workloads, automate operations, build software and adopt AI.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
              We partner directly with enterprise CTOs, engineering VPs, and technical founders to transform fragmented legacy architectures into high-velocity, automated cloud-native platforms.
            </p>
          </div>

          {/* Pillars Cards Grid Right */}
          <div
            className="reveal-on-scroll"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}
                >
                  0{idx + 1} //
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#0f172a', marginBottom: '0.35rem' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

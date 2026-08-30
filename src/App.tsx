import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { SolutionModal } from './components/SolutionModal';

import { HeroSection } from './sections/HeroSection';
import { CapabilityStrip } from './sections/CapabilityStrip';
import { WhatWeDoSection } from './sections/WhatWeDoSection';
import { MultiCloudSection } from './sections/MultiCloudSection';
import { MigrationSection } from './sections/MigrationSection';
import { AutomationSection } from './sections/AutomationSection';
import { AISection } from './sections/AISection';
import { SoftwareSection } from './sections/SoftwareSection';
import { DataSection } from './sections/DataSection';
import { SecuritySection } from './sections/SecuritySection';
import { ProcessSection } from './sections/ProcessSection';
import { WhyUsSection } from './sections/WhyUsSection';
import { EcosystemSection } from './sections/EcosystemSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { AboutSection } from './sections/AboutSection';
import { CTASection } from './sections/CTASection';

import type { SolutionCard } from './types';

export const App: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionCard | null>(null);

  useEffect(() => {
    // Setup IntersectionObserver for smooth scroll reveals
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Sticky Header Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenContact={() => setContactOpen(true)} />

        {/* 2. Capability Ticker Strip */}
        <CapabilityStrip />

        {/* 3. What We Do (8 Capability Blocks) */}
        <WhatWeDoSection onOpenContact={() => setContactOpen(true)} />

        {/* 4. Multi-Cloud Architecture */}
        <MultiCloudSection />

        {/* 5. Migration & Modernization */}
        <MigrationSection onOpenContact={() => setContactOpen(true)} />

        {/* 6. Automation & DevOps */}
        <AutomationSection />

        {/* 7. AI Engineering & GenAI */}
        <AISection onOpenContact={() => setContactOpen(true)} />

        {/* 8. Software Engineering */}
        <SoftwareSection />

        {/* 9. Data Engineering */}
        <DataSection />

        {/* 10. Security & Optimization */}
        <SecuritySection />

        {/* 11. Process / How We Work */}
        <ProcessSection />

        {/* 12. Why Auto Octa */}
        <WhyUsSection />

        {/* 13. Technology Ecosystem */}
        <EcosystemSection />

        {/* 14. Case Studies / Example Solutions */}
        <CaseStudiesSection onSelectSolution={(solution) => setSelectedSolution(solution)} />

        {/* 15. About Auto Octa */}
        <AboutSection />

        {/* 16. Final CTA Banner */}
        <CTASection onOpenContact={() => setContactOpen(true)} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Shared Modals */}
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onContact={() => setContactOpen(true)}
      />
    </div>
  );
};

export default App;

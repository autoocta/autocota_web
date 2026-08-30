export interface CapabilityBlock {
  number: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface CloudFeature {
  title: string;
  description: string;
}

export interface MigrationStep {
  step: string;
  title: string;
  description: string;
}

export interface AutomationStep {
  id: string;
  name: string;
  detail: string;
  tech: string;
}

export interface AICapability {
  title: string;
  description: string;
  tags: string[];
}

export interface SoftwareCategory {
  id: string;
  name: string;
  description: string;
  stack: string[];
}

export interface DataCapability {
  title: string;
  description: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface Differentiator {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface EcosystemCategory {
  category: string;
  items: string[];
}

export interface SolutionCard {
  id: string;
  title: string;
  category: string;
  tag: string;
  problem: string;
  solution: string;
  architecture: string[];
  impact: string;
}

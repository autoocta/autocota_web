import type {
  CapabilityBlock,
  CloudFeature,
  MigrationStep,
  AutomationStep,
  AICapability,
  SoftwareCategory,
  DataCapability,
  SecurityFeature,
  ProcessStep,
  Differentiator,
  EcosystemCategory,
  SolutionCard
} from '../types';

export const HERO_CONTENT = {
  badge: "Cloud • Automation • Software • AI",
  headline: "Engineering the\nFuture of Technology.",
  subHeadline: "Modernize systems. Automate operations. Build intelligent software.",
  paragraph: "AutoOcta helps organizations migrate, modernize and automate their technology landscape — from cloud infrastructure and applications to data platforms and AI-powered solutions.",
  primaryCTA: "Talk to Our Engineers",
  secondaryCTA: "Explore Services"
};

export const CAPABILITY_STRIP = [
  "CLOUD",
  "AI",
  "DEVOPS",
  "DATA",
  "AUTOMATION",
  "SOFTWARE",
  "SECURITY",
  "MIGRATION"
];

export const CAPABILITY_BLOCKS: CapabilityBlock[] = [
  {
    number: "01",
    title: "Cloud Engineering",
    description: "Multi-cloud architecture, cloud-native deployments, and resilient platform foundations engineered for scale.",
    icon: "cloud",
    details: ["AWS / Azure / GCP", "Cloud Native Stack", "Resilience & HA", "Multi-Region Strategy"]
  },
  {
    number: "02",
    title: "Migration & Modernization",
    description: "Seamless workload migration, legacy database refactoring, containerization, and zero-downtime cutovers.",
    icon: "layers",
    details: ["Database Migration", "Re-architecting", "Containerization", "Legacy Modernization"]
  },
  {
    number: "03",
    title: "Software Engineering",
    description: "High-performance enterprise software, robust API design, microservices, and modern cloud-native systems.",
    icon: "code",
    details: ["Microservices", "REST & GraphQL APIs", "Distributed Systems", "Web Applications"]
  },
  {
    number: "04",
    title: "Automation & DevOps",
    description: "Declarative Infrastructure as Code, automated CI/CD pipelines, GitOps, and platform engineering.",
    icon: "cpu",
    details: ["Terraform & IaC", "GitOps & CI/CD", "Kubernetes Orchestration", "Release Automation"]
  },
  {
    number: "05",
    title: "AI Engineering",
    description: "Production GenAI systems, enterprise RAG pipelines, autonomous AI agents, and secure LLM deployments.",
    icon: "sparkles",
    details: ["Generative AI & RAG", "Autonomous Agents", "LLM Fine-tuning", "AI Infrastructure"]
  },
  {
    number: "06",
    title: "Data Engineering",
    description: "Modern data platform engineering, ETL/ELT pipelines, real-time streaming, and analytics infrastructure.",
    icon: "database",
    details: ["Streaming Pipelines", "Data Warehouse & Lake", "ETL/ELT Workflows", "ML Data Readiness"]
  },
  {
    number: "07",
    title: "Infrastructure & Platform Engineering",
    description: "Self-service developer platforms, hybrid/private cloud orchestration, and hardened server environments.",
    icon: "server",
    details: ["Developer Platforms", "Hybrid Cloud", "Bare Metal / Edge", "Cluster Topology"]
  },
  {
    number: "08",
    title: "Security & Optimization",
    description: "DevSecOps, automated compliance checks, continuous vulnerability scanning, and cloud cost optimization.",
    icon: "shield",
    details: ["DevSecOps Integration", "FinOps & Cost Control", "Zero-Trust Architecture", "Compliance Automation"]
  }
];

export const MULTI_CLOUD_FEATURES: CloudFeature[] = [
  { title: "Cloud Migration", description: "Seamless lift-and-shift or deep re-architecting across cloud providers." },
  { title: "Multi-Cloud Architecture", description: "Unified control planes without single-vendor cloud lock-in." },
  { title: "Infrastructure as Code", description: "Declarative, repeatable topology built with Terraform & OpenTofu." },
  { title: "Kubernetes & Containers", description: "Production-grade clusters across EKS, AKS, GKE, and on-premises." },
  { title: "CI/CD & GitOps", description: "Automated pipelines driving fast, verified software delivery." },
  { title: "Cost Optimization", description: "Eliminate idle resources and optimize cloud spend with FinOps." },
  { title: "Observability", description: "End-to-end tracing, centralized logging, and proactive metric alerting." },
  { title: "Security & Compliance", description: "Automated guardrails enforcing security policies across clouds." }
];

export const MIGRATION_STEPS: MigrationStep[] = [
  { step: "01", title: "LEGACY", description: "Audit legacy databases, monoliths, and technical debt bottlenecks." },
  { step: "02", title: "ASSESS", description: "Dependency mapping, cloud readiness matrix, and TCO calculations." },
  { step: "03", title: "MIGRATE", description: "Phased workload transfer with zero data loss or application downtime." },
  { step: "04", title: "MODERNIZE", description: "Refactor to microservices, serverless, and cloud-native databases." },
  { step: "05", title: "AUTOMATE", description: "Implement IaC, continuous deployment, and self-healing systems." },
  { step: "06", title: "OPTIMIZE", description: "Continuous performance tuning, governance, and resource scaling." }
];

export const MIGRATION_SERVICES = [
  "Database Migration",
  "Application Migration",
  "Cloud Migration",
  "Data Migration",
  "Legacy Modernization",
  "Re-platforming",
  "Re-architecting",
  "Containerization"
];

export const AUTOMATION_WORKFLOW: AutomationStep[] = [
  { id: "dev", name: "Developer", detail: "Code commit & push", tech: "Git / IDE" },
  { id: "git", name: "Git", detail: "Version control trigger", tech: "GitHub / GitLab" },
  { id: "cicd", name: "CI/CD", detail: "Build & unit testing", tech: "GitHub Actions / Jenkins" },
  { id: "sec", name: "Security Scan", detail: "SAST & container audit", tech: "Trivy / SonarQube" },
  { id: "iac", name: "Infrastructure", detail: "IaC policy evaluation", tech: "Terraform / Ansible" },
  { id: "deploy", name: "Deployment", detail: "Zero-downtime rollouts", tech: "Kubernetes / Docker" },
  { id: "mon", name: "Monitoring", detail: "Telemetry & health check", tech: "Prometheus / Datadog" }
];

export const AI_STEPS = ["Data", "Models", "RAG", "Agents", "Automation", "Production"];

export const AI_CAPABILITIES: AICapability[] = [
  { title: "Generative AI Engineering", description: "Building custom enterprise GenAI applications tailored to domain workflows.", tags: ["LLM", "Prompting", "Fine-Tuning"] },
  { title: "RAG Systems", description: "Retrieval-Augmented Generation connecting private data securely with AI models.", tags: ["Vector DB", "Embeddings", "Hybrid Search"] },
  { title: "Autonomous AI Agents", description: "Task-driven AI agents capable of multi-step decision making and tools execution.", tags: ["LangChain", "Tool Calling", "Orchestration"] },
  { title: "LLM Integration", description: "Integrating frontier foundation models securely into existing software architecture.", tags: ["API Security", "Rate Limiting", "Fallback"] },
  { title: "AI Automation", description: "Replacing manual administrative and operational tasks with intelligent workflows.", tags: ["Process Mining", "Auto-Remediation", "NLP"] },
  { title: "ML Pipelines & Ops", description: "End-to-end MLOps for training, testing, tracking, and serving models at scale.", tags: ["MLOps", "Model Registry", "Drift Detection"] },
  { title: "AI Enterprise Apps", description: "Production web and internal portals powered by embedded AI intelligence.", tags: ["Enterprise UX", "Role Access", "Audit Logs"] },
  { title: "Model Deployment", description: "Low-latency inference server orchestration on cloud and edge infrastructure.", tags: ["vLLM", "Triton", "Quantization"] },
  { title: "AI Infrastructure", description: "GPU cluster provisioning, model caching, and efficient resource allocation.", tags: ["CUDA", "GPU Scaling", "Cost Optim"] }
];

export const SOFTWARE_CATEGORIES: SoftwareCategory[] = [
  { id: "web", name: "Web Applications", description: "Fast, accessible, dynamic frontend web experiences built for high concurrency.", stack: ["React", "TypeScript", "Vite", "Node.js"] },
  { id: "api", name: "APIs & Gateways", description: "High-throughput RESTful, gRPC, and GraphQL APIs with automated schema validation.", stack: ["Go", "TypeScript", "gRPC", "GraphQL"] },
  { id: "micro", name: "Microservices", description: "Decoupled domain services designed for fault isolation and rapid deployment.", stack: ["Docker", "Kubernetes", "Event Mesh", "NATS"] },
  { id: "ent", name: "Enterprise Applications", description: "Mission-critical business software with strict access controls and compliance.", stack: ["PostgreSQL", "OAuth2/OIDC", "Redis", "Kafka"] },
  { id: "native", name: "Cloud-Native Apps", description: "Stateless applications designed specifically for containerized cloud runtimes.", stack: ["AWS ECS", "Azure Container Apps", "GCP Cloud Run"] },
  { id: "platform", name: "Internal Platforms", description: "Developer portals and operational dashboards that streamline engineering workflows.", stack: ["Internal Tooling", "Backstage", "Metrics Dashboards"] },
  { id: "ai-apps", name: "AI Applications", description: "Next-gen applications featuring natural language interfaces and agentic workflows.", stack: ["Vector Search", "LLM APIs", "Streaming WebSockets"] }
];

export const DATA_PIPELINE_FLOW = ["Sources", "Pipeline", "Data Platform", "AI / Analytics"];

export const DATA_CAPABILITIES: DataCapability[] = [
  { title: "Data Pipelines", description: "Resilient batch and real-time streaming data pipelines engineered with high throughput." },
  { title: "ETL / ELT Architecture", description: "Modern data transform processes optimizing warehouse query latency and compute cost." },
  { title: "Data Migration", description: "Zero-loss migration of legacy relational schemas and unformatted document stores." },
  { title: "Data Platforms", description: "Centralized lakehouse and warehouse platforms powering business intelligence." },
  { title: "Analytics Infrastructure", description: "High-speed analytical processing environments for enterprise reporting." },
  { title: "ML Data Pipelines", description: "Feature store preparation and automated data validation for AI models." },
  { title: "Real-Time Data Processing", description: "Low-latency event-driven architecture using Kafka, Flink, and Redis." }
];

export const SECURITY_FEATURES: SecurityFeature[] = [
  { title: "DevSecOps Integration", description: "Automated SAST/DAST checks baked directly into CI/CD build pipelines." },
  { title: "Vulnerability Scanning", description: "Continuous container, dependency, and infrastructure security audits." },
  { title: "Infrastructure Security", description: "Zero-Trust network segmentation, IAM least privilege, and encrypted secrets management." },
  { title: "Compliance Automation", description: "Continuous enforcement of SOC2, ISO 27001, HIPAA, and GDPR technical controls." }
];

export const OPTIMIZATION_FEATURES: SecurityFeature[] = [
  { title: "Cloud Cost Optimization", description: "FinOps strategies that eliminate unused assets and right-size cloud workloads." },
  { title: "Infrastructure Optimization", description: "Kernel and container configuration tuning for peak compute efficiency." },
  { title: "Performance Optimization", description: "Caching layers, CDN acceleration, and query plan refactoring." },
  { title: "Resource Governance", description: "Policy enforcement to prevent runaway infrastructure spending and sprawl." }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business goals, analyze legacy tech debt, and assess system dependencies.",
    deliverables: ["Architecture Audit", "Risk Matrix", "Cloud Readiness Assessment"]
  },
  {
    number: "02",
    title: "ARCHITECT",
    description: "Design target multi-cloud topology, data flows, security boundaries, and migration roadmap.",
    deliverables: ["Target Blueprints", "IaC Specifications", "Security Baseline"]
  },
  {
    number: "03",
    title: "ENGINEER",
    description: "Build IaC, implement CI/CD pipelines, refactor codebases, and migrate workloads with precision.",
    deliverables: ["Automated Infrastructure", "Containerized Apps", "Data Pipelines"]
  },
  {
    number: "04",
    title: "VALIDATE",
    description: "Rigorously test for security vulnerabilities, load handling, failover resilience, and compliance.",
    deliverables: ["Penetration Test Report", "Performance Benchmarks", "DR Simulation"]
  },
  {
    number: "05",
    title: "OPTIMIZE",
    description: "Continuously monitor cost, operational metrics, security posture, and system performance.",
    deliverables: ["FinOps Reports", "SLO Dashboards", "Ongoing Modernization"]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Engineering First",
    subtitle: "Hands-on implementation",
    description: "We build and implement rather than only recommend. Our engineers write production code, IaC, and deployment scripts."
  },
  {
    number: "02",
    title: "Cloud Agnostic",
    subtitle: "Freedom of choice",
    description: "Design solutions across AWS, Azure, GCP, and hybrid environments without vendor lock-in."
  },
  {
    number: "03",
    title: "Automation by Default",
    subtitle: "Repeatable & self-healing",
    description: "Automate repetitive infrastructure, testing, and operational workflows wherever possible."
  },
  {
    number: "04",
    title: "AI Ready",
    subtitle: "Modern foundation",
    description: "Prepare modern platform and data architectures specifically for intelligent, AI-driven workloads."
  }
];

export const ECOSYSTEM_CATEGORIES: EcosystemCategory[] = [
  { category: "Cloud", items: ["AWS", "Microsoft Azure", "Google Cloud", "Private Cloud", "Hybrid Cloud"] },
  { category: "Infrastructure", items: ["Terraform", "Kubernetes", "Docker", "OpenTofu", "Helm"] },
  { category: "DevOps", items: ["GitHub Actions", "Jenkins", "Ansible", "ArgoCD", "GitLab CI"] },
  { category: "AI & ML", items: ["LLMs", "RAG Systems", "AI Agents", "PyTorch", "vLLM"] },
  { category: "Data", items: ["PostgreSQL", "Snowflake", "Apache Kafka", "ClickHouse", "dbt"] },
  { category: "Security", items: ["DevSecOps", "Vault", "Trivy", "OPA", "Datadog"] }
];

export const SOLUTION_CARDS: SolutionCard[] = [
  {
    id: "card-1",
    title: "Legacy Database → Cloud Platform",
    category: "Example Solutions",
    tag: "Migration + Modernization",
    problem: "Monolithic legacy database causing severe scaling bottlenecks and frequent downtime during peak hours.",
    solution: "Migrated legacy RDBMS to a distributed cloud-native PostgreSQL cluster with zero downtime, containerized API services, and automated failover.",
    architecture: ["AWS Aurora PostgreSQL", "Docker Containers", "Terraform IaC", "Zero-Downtime Data Pipeline"],
    impact: "99.99% availability, 4x faster query speeds, and zero data loss cutover."
  },
  {
    id: "card-2",
    title: "Manual Infrastructure → Automated Platform",
    category: "Example Solutions",
    tag: "Infrastructure as Code + CI/CD",
    problem: "Manual server provisioning taking days and causing environmental drift across staging and production.",
    solution: "Implemented declarative Terraform modules, Kubernetes cluster orchestration, and automated GitHub Actions deployment pipelines.",
    architecture: ["Kubernetes (EKS)", "Terraform Modules", "GitHub Actions", "Prometheus & Grafana"],
    impact: "Deployment time reduced from 3 days to 4 minutes with complete environmental reproducibility."
  },
  {
    id: "card-3",
    title: "Enterprise Knowledge → AI Assistant",
    category: "Example Solutions",
    tag: "RAG + LLM + Enterprise Data",
    problem: "Internal engineering teams struggling to search fragmented documentation, codebases, and compliance rules.",
    solution: "Built a secure RAG pipeline indexing enterprise data repositories into a vector database with natural language query capabilities.",
    architecture: ["Vector Database (Qdrant)", "Custom RAG Pipeline", "LLM API Integration", "OAuth2 Access Control"],
    impact: "70% reduction in internal query response times and 100% data privacy compliance."
  }
];

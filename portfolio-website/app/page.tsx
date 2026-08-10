'use client'

import {
  Activity,
  ArrowUpRight,
  Award,
  Briefcase,
  Cloud,
  Code2,
  Container,
  Database,
  FolderKanban,
  Gauge,
  GitBranch,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

const skillGroups = [
  { title: 'Cloud Platforms', icon: Cloud, items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Cloud Architecture', 'Landing Zones'] },
  { title: 'Containers & Orchestration', icon: Container, items: ['Kubernetes', 'Docker', 'Helm', 'EKS', 'GKE', 'AKS'] },
  { title: 'CI/CD & GitOps', icon: GitBranch, items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Release Automation', 'GitOps'] },
  { title: 'Infrastructure as Code', icon: Server, items: ['Terraform', 'Ansible', 'CloudFormation', 'Packer', 'Terragrunt', 'Configuration Management'] },
  { title: 'SRE & Reliability', icon: Activity, items: ['SLIs / SLOs / SLAs', 'Error Budgets', 'Incident Response', 'Root Cause Analysis', 'Capacity Planning', 'Disaster Recovery'] },
  { title: 'Monitoring & Observability', icon: Activity, items: ['Prometheus', 'Grafana', 'Datadog', 'Loki', 'ELK Stack', 'OpenTelemetry', 'CloudWatch', 'Alerting'] },
  { title: 'Data & Storage', icon: Database, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'S3', 'Backup Strategy'] },
  { title: 'Security & Compliance', icon: ShieldCheck, items: ['IAM', 'Vault', 'DevSecOps', 'Network Security', 'Secrets Management', 'PCI-DSS', 'SOC 2'] },
  { title: 'Operating Systems', icon: Terminal, items: ['Linux', 'Red Hat Enterprise Linux', 'Bash', 'Python', 'Networking', 'System Hardening'] },
]

const experience = [
  {
    role: 'Lead DevOps Engineer',
    period: 'Jan 2024 – Present',
    highlights: [
      'Lead end-to-end DevOps strategy for an InsurTech platform spanning cloud infrastructure, CI/CD, and production support.',
      'Architected serverless AWS workflows with Lambda, Step Functions, and API Gateway to speed delivery and cut operational overhead.',
      'Achieved SOC 2 Type II compliance through IAM/RBAC hardening and continuous audit-readiness.',
      'Reduced cloud spend by ~10% via rightsizing, Reserved Instances, and idle-resource cleanup.',
      'Cut mean time to detect incidents by 40%+ with Prometheus, Grafana, and CloudWatch alerting.',
    ],
  },
  {
    role: 'DevOps / SRE / Cloud Architect',
    period: 'Oct 2018 – Dec 2023',
    highlights: [
      'Designed enterprise AWS infrastructure for FinTech platforms supporting 100k+ concurrent connections.',
      'Built DevOps and SRE practices from scratch while delivering PCI-DSS and SOC 2 compliance.',
      'Ran highly available EKS clusters with HPA and cluster autoscaling; established GitOps with GitHub Actions and Argo CD.',
      'Provisioned infrastructure with Terraform and Terragrunt; automated patching and config with Ansible.',
      'Migrated on-prem workloads to AWS and stood up Prometheus/Grafana observability across services.',
    ],
  },
  {
    role: 'DevSecOps Engineer',
    period: 'Mar 2018 – Sep 2018',
    highlights: [
      'Implemented centralized authentication with FreeIPA / Red Hat IDM integrated into Git and Jenkins.',
      'Delivered CIS benchmark hardening and SIEM coverage on AWS.',
      'Automated provisioning with Terraform and Ansible; managed Docker environments for production and staging.',
    ],
  },
  {
    role: 'Cloud / Linux / DevOps',
    period: '2013 – 2017',
    highlights: [
      'Managed ELK logging, MySQL high availability, and AWS/GCP networking with Ansible-driven automation.',
      'Operated high-traffic digital media platforms with Redis/MySQL clusters and Terraform on AWS/GCP.',
      'Administered Linux servers, LAMP/LNMP stacks, DNS, mail systems, and L2 production support.',
    ],
  },
]

const cloudCerts = [
  'AWS Solutions Architect – Professional',
  'AWS Solutions Architect – Associate',
  'AWS SysOps Administrator – Associate',
  'Certified Kubernetes Administrator',
  'Certified Kubernetes Application Developer',
  'HashiCorp Certified: Terraform Associate',
]
const infraCerts = [
  'HashiCorp Certified: Vault Associate',
  'Docker Certified Associate',
  'Red Hat Certified Engineer',
  'Red Hat Security Specialist',
]

const projects = [
  {
    title: 'Secure infrastructure & compliance',
    icon: ShieldCheck,
    summary: 'Hardened cloud foundations for FinTech and InsurTech workloads with identity guardrails, evidence collection, and continuous compliance visibility.',
    outcomes: ['SOC 2 Type II and PCI-DSS readiness', 'IAM / RBAC enforcement at scale', 'Continuous control monitoring'],
    tags: ['Compliance', 'DevSecOps', 'Security'],
  },
  {
    title: 'Cloud Migration & Modernization',
    icon: Cloud,
    summary: 'Migrated legacy and on-premises workloads onto AWS with automated provisioning, resilient networking, and observable landing zones.',
    outcomes: ['On-prem to AWS migration runbooks', 'Terraform / Terragrunt landing zones', 'HA multi-AZ application hosting'],
    tags: ['Cloud Migration', 'AWS', 'Architecture'],
  },
  {
    title: 'Cloud cost optimization',
    icon: Gauge,
    summary: 'Introduced usage visibility, rightsizing, and Reserved Instance planning without slowing delivery for production platforms.',
    outcomes: ['~10% cloud spend reduction', 'Idle resource elimination', 'Budget and anomaly alerts'],
    tags: ['FinOps', 'AWS', 'Automation'],
  },
  {
    title: 'GitOps and CI/CD Pipeline',
    icon: GitBranch,
    summary: 'Built self-service CI/CD and GitOps paths from commit to Kubernetes with clear promotion and rollback.',
    outcomes: ['GitHub Actions + Argo CD pipelines', 'Faster deployment cycles', 'Improved developer autonomy'],
    tags: ['GitHub Actions', 'GitLab CI', 'Argo CD'],
  },
  {
    title: 'Temporary access management',
    icon: ShieldCheck,
    summary: 'Implemented time-bound access workflows that reduce standing privilege while keeping operational access auditable.',
    outcomes: ['Just-in-time permissions', 'Approval and expiry controls', 'Complete access audit trail'],
    tags: ['IAM', 'Vault', 'Zero Trust'],
  },
  {
    title: 'Microservices platform on Kubernetes',
    icon: Container,
    summary: 'Operated EKS platforms for containerized services with standardized packaging, autoscaling, and release patterns for 100k+ concurrent connections.',
    outcomes: ['HA EKS with HPA / autoscaling', 'Reusable Helm charts', 'Consistent release patterns'],
    tags: ['Kubernetes', 'Helm', 'Microservices'],
  },
  {
    title: 'SRE observability & incident response',
    icon: Activity,
    summary: 'Unified metrics, logs, and alerting across production services with Prometheus, Grafana, CloudWatch, and the ELK stack.',
    outcomes: ['40%+ faster incident detection', 'Service dashboards and SLOs', 'Actionable alerts and runbooks'],
    tags: ['Grafana', 'Prometheus', 'CloudWatch', 'ELK'],
  },
  {
    title: 'Infrastructure automation platform',
    icon: FolderKanban,
    summary: 'Turned approved changes into consistent environments across AWS and Kubernetes with reusable modules and policy-driven delivery.',
    outcomes: ['Reusable Terraform modules', 'Ansible patching automation', 'Policy-driven delivery'],
    tags: ['Terraform', 'Kubernetes', 'GitOps'],
  },
]

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      </div>
      {description && <p className="max-w-md text-sm leading-6 text-muted-foreground">{description}</p>}
    </div>
  )
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary">
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Primary navigation">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-foreground">
          <span className="text-primary">./</span> SP
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden items-center gap-8 font-mono text-xs text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#experience">
              experience
            </a>
            <a className="transition-colors hover:text-primary" href="#skills">
              skills
            </a>
            <a className="transition-colors hover:text-primary" href="#projects">
              projects
            </a>
            <a className="transition-colors hover:text-primary" href="#certifications">
              certifications
            </a>
            <a className="transition-colors hover:text-primary" href="#contact">
              contact
            </a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <section id="top" className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -right-20 top-10 hidden font-mono text-[11px] leading-6 text-foreground/35 lg:block dark:text-primary/45" aria-hidden="true">
          <p>deploy --production</p>
          <p>provision --cloud=multi</p>
          <p>observe --everything</p>
          <p className="text-accent/70 dark:text-accent/50">status: operational_</p>
        </div>
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">
            <span className="h-px w-8 bg-primary" /> cloud infrastructure / engineering
          </p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-foreground md:text-7xl lg:text-8xl">
            Sanjay
            <br />
            <span className="text-primary">Parmar.</span>
          </h1>
          <p className="mt-8 max-w-2xl font-mono text-sm leading-7 text-muted-foreground md:text-base">
            Cloud / DevOps Engineer · SRE
          </p>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-muted-foreground">
            Designing resilient cloud platforms, automating delivery, and making complex infrastructure feel simple.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 text-primary" /> India · open to remote
            </span>
            <span className="text-border">|</span>
            <span>Full-time · contract · consulting</span>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="mailto:sanchetanparmar@yahoo.com"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation{' '}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjayp5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <LinkedInIcon className="size-3.5" /> LinkedIn
            </a>
            <a
              href="https://github.com/sanchetanparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <GitHubIcon className="size-3.5" /> GitHub
            </a>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              View experience <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="mt-20 grid max-w-3xl grid-cols-3 border-y border-border py-5">
          {[
            ['10+', 'years in engineering'],
            ['03', 'cloud ecosystems'],
            ['40%+', 'faster incident detection'],
          ].map(([value, label]) => (
            <div key={label} className="border-r border-border px-4 first:pl-0 last:border-0">
              <p className="font-mono text-xl text-foreground md:text-2xl">{value}</p>
              <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/30" id="about">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-primary">profile</p>
          </div>
          <div>
            <p className="max-w-3xl text-2xl leading-relaxed tracking-tight text-foreground md:text-4xl">
              Cloud / DevOps Engineer and SRE focused on building{' '}
              <span className="text-primary">secure, observable, and scalable</span> platforms across AWS, Google Cloud, and Azure.
            </p>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-muted-foreground">
              From infrastructure as code to container orchestration and automated delivery, I connect engineering rigor with practical
              operations — including PCI-DSS and SOC 2 programs for FinTech and InsurTech platforms. The goal is always the same: systems
              that are easier to ship, understand, and trust.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading
          eyebrow="career"
          title="Professional experience"
          description="Roles spanning cloud architecture, SRE, DevSecOps, and platform engineering across FinTech, InsurTech, and digital media."
        />
        <div className="grid gap-4">
          {experience.map(({ role, period, highlights }) => (
            <article key={`${role}-${period}`} className="rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/50 md:p-8">
              <div className="flex flex-col gap-4 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <Briefcase className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-foreground">{role}</h3>
                  </div>
                </div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground md:pt-1">{period}</p>
              </div>
              <ul className="mt-5 grid gap-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="capabilities"
            title="Technical skills"
            description="A practical toolkit for designing, shipping, and reliably operating cloud-native systems."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article key={title} className="group rounded-lg border border-border bg-background/40 p-5 transition-colors hover:border-primary/50">
                <div className="mb-6 flex items-start justify-between">
                  <Icon className="size-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-sm font-medium text-foreground">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="selected work"
            title="Projects that move systems forward"
            description="Practical initiatives across trust, efficiency, and infrastructure automation — with outcomes pulled from real delivery."
          />
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map(({ title, icon: Icon, summary, outcomes, tags }) => (
              <article
                key={title}
                className="group flex flex-col rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/50"
              >
                <div className="mb-10 flex items-start justify-between">
                  <Icon className="size-6 text-primary" strokeWidth={1.5} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">case study</span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-foreground">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{summary}</p>
                <ul className="mt-6 grid gap-3 border-t border-border pt-5">
                  {outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-center gap-2 text-xs text-foreground">
                      <span className="size-1.5 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <SectionHeading
            eyebrow="credentials"
            title="Certifications"
            description="Validated foundations across cloud architecture, containers, infrastructure, and security."
          />
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <Cloud className="size-4 text-primary" /> cloud & devops
              </h3>
              <div className="grid gap-3">
                {cloudCerts.map((cert) => (
                  <div key={cert} className="flex items-center gap-4 rounded-md border border-border bg-background/40 p-4">
                    <Award className="size-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <ShieldCheck className="size-4 text-accent" /> infrastructure & security
              </h3>
              <div className="grid gap-3">
                {infraCerts.map((cert) => (
                  <div key={cert} className="flex items-center gap-4 rounded-md border border-border bg-background/40 p-4">
                    <Award className="size-5 shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <SectionHeading eyebrow="foundation" title="Education & beyond" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-border bg-card/40 p-6">
            <GraduationCap className="mb-8 size-5 text-primary" />
            <p className="font-mono text-xs text-muted-foreground">postgraduate</p>
            <h3 className="mt-2 text-xl text-foreground">Master of Computer Applications</h3>
            <p className="mt-2 text-sm text-muted-foreground">JNU, Jaipur</p>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-6">
            <Code2 className="mb-8 size-5 text-primary" />
            <p className="font-mono text-xs text-muted-foreground">undergraduate</p>
            <h3 className="mt-2 text-xl text-foreground">Bachelor of Computer Applications</h3>
            <p className="mt-2 text-sm text-muted-foreground">IGNOU</p>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-6">
            <Network className="mb-8 size-5 text-accent" />
            <p className="font-mono text-xs text-muted-foreground">communication</p>
            <h3 className="mt-2 text-xl text-foreground">English · Hindi</h3>
          </div>
          <div className="rounded-lg border border-border bg-card/40 p-6">
            <Terminal className="mb-8 size-5 text-accent" />
            <p className="font-mono text-xs text-muted-foreground">working style</p>
            <h3 className="mt-2 text-xl text-foreground">Curious · analytical · collaborative</h3>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-24">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">connect</p>
            <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
              Let&apos;s build
              <br />
              <span className="text-primary">better systems.</span>
            </h2>
            <p className="mt-4 font-mono text-xs text-muted-foreground">India · open to remote · full-time / contract / consulting</p>
          </div>
          <div className="flex flex-col items-start gap-4 lg:items-end">
            <a
              href="mailto:sanchetanparmar@yahoo.com"
              className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 text-primary" /> sanchetanparmar@yahoo.com
            </a>
            <a
              href="https://www.linkedin.com/in/sanjayp5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <LinkedInIcon className="size-4 text-primary" /> linkedin.com/in/sanjayp5
            </a>
            <a
              href="https://github.com/sanchetanparmar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary"
            >
              <GitHubIcon className="size-4 text-primary" /> github.com/sanchetanparmar
            </a>
            <p className="font-mono text-[10px] text-muted-foreground">© 2026 Sanjay Parmar · engineered for resilience</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

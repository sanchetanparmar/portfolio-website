'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

const toc = [
  { id: 'profile', label: 'Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const experience = [
  {
    title: 'Lead DevOps Engineer',
    period: 'Jan 2024 – Present',
    bullets: [
      'Lead end-to-end DevOps strategy for an InsurTech platform spanning cloud infrastructure, CI/CD, and production support.',
      'Architected serverless AWS workflows with Lambda, Step Functions, and API Gateway to speed delivery and cut operational overhead.',
      'Achieved SOC 2 Type II compliance through IAM/RBAC hardening and continuous audit-readiness.',
      'Reduced cloud spend by ~10% via rightsizing, Reserved Instances, and idle-resource cleanup.',
      'Cut mean time to detect incidents by 40%+ with Prometheus, Grafana, and CloudWatch alerting.',
    ],
  },
  {
    title: 'DevOps / SRE / Cloud Architect',
    period: 'Oct 2018 – Dec 2023',
    bullets: [
      'Designed enterprise AWS infrastructure for FinTech platforms supporting 100k+ concurrent connections.',
      'Built DevOps and SRE practices from scratch while delivering PCI-DSS and SOC 2 compliance.',
      'Ran highly available EKS clusters with HPA and cluster autoscaling; established GitOps with GitHub Actions and Argo CD.',
      'Provisioned infrastructure with Terraform and Terragrunt; automated patching and config with Ansible.',
      'Migrated on-prem workloads to AWS and stood up Prometheus/Grafana observability across services.',
    ],
  },
  {
    title: 'DevSecOps Engineer',
    period: 'Mar 2018 – Sep 2018',
    bullets: [
      'Implemented centralized authentication with FreeIPA / Red Hat IDM integrated into Git and Jenkins.',
      'Delivered CIS benchmark hardening and SIEM coverage on AWS.',
      'Automated provisioning with Terraform and Ansible; managed Docker environments for production and staging.',
    ],
  },
  {
    title: 'Cloud / Linux / DevOps',
    period: '2013 – 2017',
    bullets: [
      'Managed ELK logging, MySQL high availability, and AWS/GCP networking with Ansible-driven automation.',
      'Operated high-traffic digital media platforms with Redis/MySQL clusters and Terraform on AWS/GCP.',
      'Administered Linux servers, LAMP/LNMP stacks, DNS, mail systems, and L2 production support.',
    ],
  },
]

const skillGroups = [
  { title: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Cloud Architecture', 'Landing Zones'] },
  { title: 'Containers & Orchestration', items: ['Kubernetes', 'Docker', 'Helm', 'EKS', 'GKE', 'AKS'] },
  { title: 'CI/CD & GitOps', items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Argo CD', 'Release Automation', 'GitOps'] },
  { title: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'CloudFormation', 'Packer', 'Terragrunt', 'Configuration Management'] },
  { title: 'SRE & Reliability', items: ['SLIs / SLOs / SLAs', 'Error Budgets', 'Incident Response', 'Root Cause Analysis', 'Capacity Planning', 'Disaster Recovery'] },
  { title: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Datadog', 'Loki', 'ELK Stack', 'OpenTelemetry', 'CloudWatch', 'Alerting'] },
  { title: 'Data & Storage', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'S3', 'Backup Strategy'] },
  { title: 'Security & Compliance', items: ['IAM', 'Vault', 'DevSecOps', 'Network Security', 'Secrets Management', 'PCI-DSS', 'SOC 2'] },
  { title: 'Operating Systems', items: ['Linux', 'Red Hat Enterprise Linux', 'Bash', 'Python', 'Networking', 'System Hardening'] },
]

const projects = [
  {
    title: 'Secure infrastructure & compliance',
    summary: 'Hardened cloud foundations for FinTech and InsurTech workloads with identity guardrails, evidence collection, and continuous compliance visibility.',
    outcomes: ['SOC 2 Type II and PCI-DSS readiness', 'IAM / RBAC enforcement at scale', 'Continuous control monitoring'],
    tags: ['Compliance', 'DevSecOps', 'Security'],
  },
  {
    title: 'Cloud Migration & Modernization',
    summary: 'Migrated legacy and on-premises workloads onto AWS with automated provisioning, resilient networking, and observable landing zones.',
    outcomes: ['On-prem to AWS migration runbooks', 'Terraform / Terragrunt landing zones', 'HA multi-AZ application hosting'],
    tags: ['Cloud Migration', 'AWS', 'Architecture'],
  },
  {
    title: 'Cloud cost optimization',
    summary: 'Introduced usage visibility, rightsizing, and Reserved Instance planning without slowing delivery for production platforms.',
    outcomes: ['~10% cloud spend reduction', 'Idle resource elimination', 'Budget and anomaly alerts'],
    tags: ['FinOps', 'AWS', 'Automation'],
  },
  {
    title: 'GitOps and CI/CD Pipeline',
    summary: 'Built self-service CI/CD and GitOps paths from commit to Kubernetes with clear promotion and rollback.',
    outcomes: ['GitHub Actions + Argo CD pipelines', 'Faster deployment cycles', 'Improved developer autonomy'],
    tags: ['GitHub Actions', 'GitLab CI', 'Argo CD'],
  },
  {
    title: 'Temporary access management',
    summary: 'Implemented time-bound access workflows that reduce standing privilege while keeping operational access auditable.',
    outcomes: ['Just-in-time permissions', 'Approval and expiry controls', 'Complete access audit trail'],
    tags: ['IAM', 'Vault', 'Zero Trust'],
  },
  {
    title: 'Microservices platform on Kubernetes',
    summary: 'Operated EKS platforms for containerized services with standardized packaging, autoscaling, and release patterns for 100k+ concurrent connections.',
    outcomes: ['HA EKS with HPA / autoscaling', 'Reusable Helm charts', 'Consistent release patterns'],
    tags: ['Kubernetes', 'Helm', 'Microservices'],
  },
  {
    title: 'SRE observability & incident response',
    summary: 'Unified metrics, logs, and alerting across production services with Prometheus, Grafana, CloudWatch, and the ELK stack.',
    outcomes: ['40%+ faster incident detection', 'Service dashboards and SLOs', 'Actionable alerts and runbooks'],
    tags: ['Grafana', 'Prometheus', 'CloudWatch', 'ELK'],
  },
  {
    title: 'Infrastructure automation platform',
    summary: 'Turned approved changes into consistent environments across AWS and Kubernetes with reusable modules and policy-driven delivery.',
    outcomes: ['Reusable Terraform modules', 'Ansible patching automation', 'Policy-driven delivery'],
    tags: ['Terraform', 'Kubernetes', 'GitOps'],
  },
]

export default function MarkdownPortfolioPage() {
  const [active, setActive] = useState('profile')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const sections = toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4, 0.7] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('sanchetanparmar@yahoo.com')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* ignore */
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(to right, color-mix(in oklab, var(--border) 70%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--border) 70%, transparent) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse at top, black 20%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <a href="/" className="transition-colors hover:text-primary">
              ← site
            </a>
            <span className="text-border">/</span>
            <span className="text-foreground">markdown</span>
          </div>
          <ThemeToggle />
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card/50 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2 rounded-md border border-border bg-background/70 px-3 py-1.5 font-mono text-[11px]">
                <span className="text-accent">●</span>
                <span className="text-foreground">portfolio.md</span>
                <span className="text-muted-foreground">— Sanjay Parmar</span>
              </div>
            </div>
            <p className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              live preview
            </p>
          </div>

          <div className="grid lg:grid-cols-[210px_minmax(0,1fr)]">
            <aside className="hidden border-r border-border bg-background/30 p-5 lg:block">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">outline</p>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block rounded-md px-2.5 py-2 font-mono text-xs transition-colors ${
                      active === item.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted-foreground hover:bg-secondary/70 hover:text-foreground'
                    }`}
                  >
                    <span className="mr-2 text-primary/70">##</span>
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 rounded-lg border border-dashed border-border p-3 font-mono text-[11px] leading-5 text-muted-foreground">
                <p className="text-accent">status: operational_</p>
                <p>mode: markdown</p>
                <p>theme: sync</p>
              </div>
            </aside>

            <article className="md-doc relative px-5 py-8 font-mono text-[14px] leading-7 md:px-10 md:py-12">
              <div className="md-fade-in mb-10">
                <p className="mb-4 font-mono text-xs text-muted-foreground">
                  <Hash level={1} /> Sanjay Parmar
                </p>
                <h1 className="mb-3 text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                  Sanjay <span className="text-primary">Parmar</span>
                  <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-primary align-middle md:h-12" aria-hidden="true" />
                </h1>
                <p className="mb-4 text-base text-primary md:text-lg">Cloud / DevOps Engineer · SRE</p>
                <p className="mb-5 text-sm text-muted-foreground">India · open to remote · full-time / contract / consulting</p>
                <div className="flex flex-wrap gap-2">
                  <ActionLink href="mailto:sanchetanparmar@yahoo.com">email</ActionLink>
                  <ActionLink href="https://www.linkedin.com/in/sanjayp5/" external>
                    linkedin
                  </ActionLink>
                  <ActionLink href="https://github.com/sanchetanparmar" external>
                    github
                  </ActionLink>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {copied ? 'copied ✓' : 'copy email'}
                  </button>
                </div>
              </div>

              <Hr />

              <section id="profile" className="md-fade-in scroll-mt-24">
                <H2>Profile</H2>
                <p className="mb-4 text-muted-foreground">
                  Cloud / DevOps Engineer and SRE focused on building{' '}
                  <InlineStrong>secure, observable, and scalable</InlineStrong> platforms across AWS, Google Cloud, and Azure.
                </p>
                <p className="mb-8 text-muted-foreground">
                  From infrastructure as code to container orchestration and automated delivery, I connect engineering rigor with practical
                  operations — including PCI-DSS and SOC 2 programs for FinTech and InsurTech platforms.
                </p>
                <div className="mb-4 grid gap-3 sm:grid-cols-3">
                  {[
                    ['10+', 'years'],
                    ['03', 'clouds'],
                    ['40%+', 'faster MTTD'],
                  ].map(([value, label], index) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border bg-background/50 p-4 transition-transform hover:-translate-y-0.5"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <p className="text-2xl text-primary">{value}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Hr />

              <section id="experience" className="md-fade-in scroll-mt-24">
                <H2>Experience</H2>
                <div className="space-y-6">
                  {experience.map((role) => (
                    <div key={`${role.title}-${role.period}`} className="group relative border-l-2 border-border pl-5 transition-colors hover:border-primary">
                      <H3>{role.title}</H3>
                      <p className="mb-3 text-xs text-primary">
                        <Code>{role.period}</Code>
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {role.bullets.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="text-accent">-</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <Hr />

              <section id="skills" className="md-fade-in scroll-mt-24">
                <H2>Skills</H2>
                <div className="space-y-6">
                  {skillGroups.map((group) => (
                    <div key={group.title}>
                      <H3>{group.title}</H3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 text-[11px] text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                          >
                            <span className="text-primary/70">`</span>
                            {item}
                            <span className="text-primary/70">`</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Hr />

              <section id="projects" className="md-fade-in scroll-mt-24">
                <H2>Projects</H2>
                <div className="space-y-5">
                  {projects.map((project, index) => (
                    <details
                      key={project.title}
                      className="group rounded-lg border border-border bg-background/40 open:border-primary/40 open:bg-primary/5"
                      open={index === 0}
                    >
                      <summary className="cursor-pointer list-none px-4 py-4 marker:content-none">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <H3>{project.title}</H3>
                            <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
                          </div>
                          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-transform group-open:rotate-90">
                            ▸
                          </span>
                        </div>
                      </summary>
                      <div className="border-t border-border px-4 py-4">
                        <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                          {project.outcomes.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="text-accent">-</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="rounded-md bg-secondary/50 px-2 py-1 text-[11px] text-primary">
                              #{tag.toLowerCase().replace(/\s+/g, '-')}
                            </span>
                          ))}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <Hr />

              <section id="certifications" className="md-fade-in scroll-mt-24">
                <H2>Certifications</H2>
                <div className="grid gap-6 md:grid-cols-2">
                  <CertBlock
                    title="Cloud & DevOps"
                    items={[
                      'AWS Solutions Architect – Professional',
                      'AWS Solutions Architect – Associate',
                      'AWS SysOps Administrator – Associate',
                      'Certified Kubernetes Administrator',
                      'Certified Kubernetes Application Developer',
                      'HashiCorp Certified: Terraform Associate',
                    ]}
                  />
                  <CertBlock
                    title="Infrastructure & Security"
                    items={[
                      'HashiCorp Certified: Vault Associate',
                      'Docker Certified Associate',
                      'Red Hat Certified Engineer',
                      'Red Hat Security Specialist',
                    ]}
                  />
                </div>
              </section>

              <Hr />

              <section id="education" className="md-fade-in scroll-mt-24">
                <H2>Education</H2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <span className="text-accent">-</span> <InlineStrong>Master of Computer Applications</InlineStrong> — JNU, Jaipur
                  </li>
                  <li>
                    <span className="text-accent">-</span> <InlineStrong>Bachelor of Computer Applications</InlineStrong> — IGNOU
                  </li>
                  <li>
                    <span className="text-accent">-</span> <InlineStrong>Languages:</InlineStrong> English · Hindi
                  </li>
                  <li>
                    <span className="text-accent">-</span> <InlineStrong>Working style:</InlineStrong> Curious · analytical · collaborative
                  </li>
                </ul>
              </section>

              <Hr />

              <section id="contact" className="md-fade-in scroll-mt-24">
                <H2>Contact</H2>
                <div className="rounded-lg border border-border bg-background/50 p-5">
                  <p className="mb-4 text-sm text-muted-foreground">Let&apos;s build better systems.</p>
                  <div className="flex flex-wrap gap-2">
                    <ActionLink href="mailto:sanchetanparmar@yahoo.com">sanchetanparmar@yahoo.com</ActionLink>
                    <ActionLink href="https://www.linkedin.com/in/sanjayp5/" external>
                      linkedin.com/in/sanjayp5
                    </ActionLink>
                    <ActionLink href="https://github.com/sanchetanparmar" external>
                      github.com/sanchetanparmar
                    </ActionLink>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .md-fade-in {
          animation: mdRise 0.55s ease both;
        }
        @keyframes mdRise {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .md-doc details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </main>
  )
}

function Hash({ level }: { level: 1 | 2 | 3 }) {
  return <span className="mr-2 text-primary/60">{'#'.repeat(level)}</span>
}

function H2({ children }: { children: string }) {
  return (
    <h2 className="mb-5 text-2xl font-semibold tracking-tight text-foreground">
      <Hash level={2} />
      {children}
    </h2>
  )
}

function H3({ children }: { children: string }) {
  return (
    <h3 className="text-base font-semibold text-foreground">
      <Hash level={3} />
      {children}
    </h3>
  )
}

function Hr() {
  return <hr className="my-10 border-border/80" />
}

function Code({ children }: { children: string }) {
  return <code className="rounded bg-secondary/60 px-1.5 py-0.5 text-[11px] text-primary">{children}</code>
}

function InlineStrong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>
}

function ActionLink({
  href,
  children,
  external = false,
}: {
  href: string
  children: ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
    >
      {children}
    </a>
  )
}

function CertBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-border bg-background/40 p-4">
      <H3>{title}</H3>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-accent">-</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'

const orbitSkills = [
  'AWS',
  'Kubernetes',
  'Terraform',
  'Argo CD',
  'Prometheus',
  'Grafana',
  'Docker',
  'GitOps',
  'Linux',
  'Security',
]

const terminalLines = [
  { cmd: 'terraform apply -auto-approve', ok: 'infrastructure updated' },
  { cmd: 'kubectl rollout status deploy/api', ok: 'deployment successfully rolled out' },
  { cmd: 'helm upgrade platform ./charts', ok: 'release "platform" upgraded' },
  { cmd: 'argocd app sync gitops-prod', ok: 'sync OK · healthy' },
  { cmd: 'promtool check rules alerts.yml', ok: 'SUCCESS: 12 rules found' },
  { cmd: 'yum update -y', ok: 'packages updated' },
  { cmd: 'apt-get update && apt-get upgrade -y', ok: 'system packages current' },
]

export function HeroSkillsAnimation() {
  const [lineIndex, setLineIndex] = useState(0)
  const [phase, setPhase] = useState<'cmd' | 'ok'>('cmd')
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(media.matches)
    const onChange = () => setReduceMotion(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setPhase((current) => {
        if (current === 'cmd') return 'ok'
        setLineIndex((index) => (index + 1) % terminalLines.length)
        return 'cmd'
      })
    }, 1800)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  const active = terminalLines[lineIndex]

  return (
    <div className="relative mx-auto hidden h-[480px] w-full max-w-lg lg:block" aria-hidden="true">
      <div className="absolute right-0 top-0 z-10 w-[min(100%,340px)] overflow-hidden rounded-lg border border-border bg-background/90 p-3 font-mono text-[11px] leading-5 shadow-sm backdrop-blur-sm">
        <p className="mb-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">ops stream</p>
        <p className="whitespace-nowrap">
          <span className="text-primary">$</span> {active.cmd}
          {phase === 'cmd' && !reduceMotion ? <span className="hero-cursor">▌</span> : null}
        </p>
        <p className={`mt-1 whitespace-nowrap text-accent transition-opacity ${phase === 'ok' || reduceMotion ? 'opacity-100' : 'opacity-0'}`}>
          ✓ {active.ok}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[96px]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_68%)]" />

        <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2">
          <div className="hero-pulse absolute inset-0 rounded-full border border-primary/30" />
          <div className="hero-pulse-delay absolute inset-3 rounded-full border border-accent/25" />
          <div className="relative flex h-full items-center justify-center rounded-full border border-primary/40 bg-background/70 font-mono text-[11px] uppercase tracking-[0.18em] text-primary backdrop-blur-sm">
            platform
          </div>
        </div>

        {orbitSkills.map((skill, index) => {
          const angle = (360 / orbitSkills.length) * index - 90
          return (
            <div
              key={skill}
              className="hero-orbit absolute left-1/2 top-1/2 size-0"
              style={{
                ['--orbit-angle' as string]: `${angle}deg`,
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <span className="hero-orbit-item absolute left-0 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 rounded-md border border-border bg-card/80 px-2.5 py-1 font-mono text-[10px] text-muted-foreground shadow-sm backdrop-blur-sm">
                {skill}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

'use client'

import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader({ active }: { active?: 'home' | 'blogs' }) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10" aria-label="Primary navigation">
          <a href="/" className="font-mono text-sm font-semibold tracking-tight text-foreground">
            <span className="text-primary">./</span> SP
          </a>
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden items-center gap-8 font-mono text-xs text-muted-foreground md:flex">
              <a className="transition-colors hover:text-primary" href="/#experience">
                experience
              </a>
              <a className="transition-colors hover:text-primary" href="/#skills">
                skills
              </a>
              <a className="transition-colors hover:text-primary" href="/#projects">
                projects
              </a>
              <a
                className={`transition-colors hover:text-primary ${active === 'blogs' ? 'text-primary' : ''}`}
                href="/blogs"
              >
                blogs
              </a>
              <a className="transition-colors hover:text-primary" href="/#contact">
                contact
              </a>
            </div>
            <a
              href="/blogs"
              className={`font-mono text-xs transition-colors hover:text-primary md:hidden ${active === 'blogs' ? 'text-primary' : 'text-muted-foreground'}`}
            >
              blogs
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>
      {/* Keeps page content from sitting under the fixed nav */}
      <div className="h-14" aria-hidden="true" />
    </>
  )
}

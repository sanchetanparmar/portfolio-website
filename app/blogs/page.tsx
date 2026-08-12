import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { formatBlogDate, getAllBlogs } from '@/lib/blogs'

export const metadata: Metadata = {
  title: 'Blogs — Sanjay Parmar',
  description: 'Notes on cloud, DevOps, SRE, GitOps, and platform engineering.',
}

export default function BlogsPage() {
  const posts = getAllBlogs()

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="blogs" />

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10 lg:pt-16">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">writing</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-6xl">Blogs</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          Short field notes on cloud platforms, reliability, and delivery — updated as I learn and ship.
        </p>

        <div className="mt-12 grid gap-4">
          {posts.length === 0 && (
            <p className="rounded-lg border border-dashed border-border p-6 font-mono text-sm text-muted-foreground">
              No posts yet. Add a markdown file under <code className="text-primary">content/blogs/</code>.
            </p>
          )}

          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group rounded-lg border border-border bg-card/40 p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {formatBlogDate(post.date)}
                  </p>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-foreground group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">{post.summary}</p>
                  {post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary">
                  read <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

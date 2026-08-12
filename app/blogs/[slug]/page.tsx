import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { formatBlogDate, getAllBlogs, getBlogBySlug, getBlogSlugs } from '@/lib/blogs'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} — Sanjay Parmar`,
    description: post.summary,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllBlogs()
  const related = allPosts.filter((item) => item.slug !== post.slug).slice(0, 2)
  const wide = Boolean(post.featuredHtml)

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader active="blogs" />

      <article className={`mx-auto px-6 pb-24 pt-10 lg:px-10 lg:pt-16 ${wide ? 'max-w-5xl' : 'max-w-3xl'}`}>
        <a href="/blogs" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
          ← all blogs
        </a>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {formatBlogDate(post.date)}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{post.summary}</p>

        {post.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
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

        {post.featuredHtml && (
          <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card/30 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">interactive explainer</p>
              <a
                href={post.featuredHtml.replace(/\?embed=1$/, '')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-primary transition-colors hover:underline"
              >
                open fullscreen ↗
              </a>
            </div>
            <iframe
              src={post.featuredHtml}
              title={post.title}
              className="h-[min(72vh,720px)] w-full border-0 bg-[#12141A]"
              loading="lazy"
              allow="autoplay"
            />
          </div>
        )}

        <div
          className="blog-prose mt-12 border-t border-border pt-10"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {related.length > 0 && (
          <div className="mt-16 border-t border-border pt-10">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">more reading</p>
            <div className="grid gap-3">
              {related.map((item) => (
                <a
                  key={item.slug}
                  href={`/blogs/${item.slug}`}
                  className="rounded-lg border border-border bg-card/40 px-4 py-3 transition-colors hover:border-primary/50"
                >
                  <p className="text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">{formatBlogDate(item.date)}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  )
}

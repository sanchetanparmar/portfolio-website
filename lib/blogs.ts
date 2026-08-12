import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export type BlogMeta = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  featuredHtml?: string
}

export type BlogPost = BlogMeta & {
  contentHtml: string
}

function ensureBlogsDir() {
  if (!fs.existsSync(blogsDirectory)) {
    fs.mkdirSync(blogsDirectory, { recursive: true })
  }
}

export function getBlogSlugs(): string[] {
  ensureBlogsDir()
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''))
}

export function getAllBlogs(): BlogMeta[] {
  const posts = getBlogSlugs().map((slug) => {
    const fullPath = path.join(blogsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ''),
      summary: String(data.summary ?? ''),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      featuredHtml: data.featuredHtml ? String(data.featuredHtml) : undefined,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(blogsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const contentHtml = await marked.parse(content)

  return {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? ''),
    summary: String(data.summary ?? ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    featuredHtml: data.featuredHtml ? String(data.featuredHtml) : undefined,
    contentHtml,
  }
}

export function formatBlogDate(date: string) {
  if (!date) return ''
  const parsed = new Date(date)
  if (Number.isNaN(parsed.getTime())) return date
  return parsed.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

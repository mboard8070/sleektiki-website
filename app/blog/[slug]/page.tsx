import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { getAllBlogSlugs, getBlogPost } from "../blogData";

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Blog Post Not Found | sleektiki.ai" };
  }

  const url = `https://sleektiki.ai/blog/${post.slug}`;

  return {
    title: `${post.title} | sleektiki.ai`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.hero, alt: post.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.hero],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Matthew Board",
      url: "https://sleektiki.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "sleektiki.ai",
      url: "https://sleektiki.ai",
    },
    mainEntityOfPage: `https://sleektiki.ai/blog/${post.slug}`,
    image: `https://sleektiki.ai${post.hero}`,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <header className="pt-20">
          <div className="relative h-[34vh] min-h-[260px] w-full overflow-hidden">
            <Image
              src={post.hero}
              alt={post.heroAlt}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/55 to-[#050508]/20" />
          </div>

          <div className="mx-auto max-w-4xl px-6 pt-10 sm:px-8 lg:px-10">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <span aria-hidden="true">Back</span>
              Blog
            </Link>
            <p className="mb-4 text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
              {post.category}
            </p>
            <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mb-5 text-lg leading-8 text-[var(--text-secondary)] sm:text-xl">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
              <time dateTime={post.date}>
                {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>/</span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 sm:p-8 md:p-10">
          <div className="flex flex-wrap gap-2 pb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-2 text-xs text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="space-y-11">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {post.relatedProjects && (
            <aside className="mt-12 rounded-lg border border-[var(--surface-border)] bg-[#050508]/45 p-6 sm:p-8">
              <p className="mb-4 text-xs tracking-[0.24em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                Related Work
              </p>
              <div className="flex flex-wrap gap-3">
                {post.relatedProjects.map((project) => (
                  <Link
                    key={project.href}
                    href={project.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
                  >
                    {project.label}
                    <span aria-hidden="true">Open</span>
                  </Link>
                ))}
              </div>
            </aside>
          )}
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

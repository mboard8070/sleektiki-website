import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts } from "./blogData";

export const metadata: Metadata = {
  title: "Blog | sleektiki.ai",
  description:
    "Notes on creative AI, local-first agent systems, 3D production, architectural visualization, and technical art workflows by Matthew Board.",
  alternates: {
    canonical: "https://sleektiki.ai/blog",
  },
  openGraph: {
    title: "Blog | sleektiki.ai",
    description:
      "Creative AI, technical art, local AI systems, and production workflow notes by Matthew Board.",
    url: "https://sleektiki.ai/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="blog-index-hero">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] mb-4">
            Blog
          </p>
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Field notes on creative AI, 3D production, and local-first tools.
          </h1>
          <p className="max-w-2xl text-lg text-[var(--text-secondary)] leading-8">
            Practical writing from ongoing projects: what worked, what broke,
            and how the production workflow changed.
          </p>
        </div>
      </section>

      <section className="blog-index-list">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/blog/${featured.slug}`}
            className="blog-feature-card group"
          >
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src={featured.hero}
                alt={featured.heroAlt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/70 via-transparent to-transparent" />
            </div>
            <div className="blog-feature-card-copy">
              <p className="blog-feature-meta text-xs tracking-[0.24em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                Featured / {featured.category}
              </p>
              <h2 className="blog-feature-title text-3xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                {featured.title}
              </h2>
              <p className="blog-feature-description text-[var(--text-secondary)] leading-7">
                {featured.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                <time dateTime={featured.date}>
                  {new Date(`${featured.date}T00:00:00`).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>/</span>
                <span>{featured.readingTime}</span>
              </div>
            </div>
          </Link>

          <div className="blog-card-grid">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-tile group"
              >
                <p className="blog-tile-meta text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                  {post.category}
                </p>
                <h2 className="blog-tile-title text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </h2>
                <p className="blog-tile-description text-sm text-[var(--text-secondary)] leading-7">
                  {post.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--surface-border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

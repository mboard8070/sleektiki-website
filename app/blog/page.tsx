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

      <section className="px-6 pt-32 pb-14 sm:px-8 lg:px-10">
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

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-0 overflow-hidden rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] md:grid-cols-[1.1fr_0.9fr]"
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
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <p className="text-xs tracking-[0.24em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] mb-4">
                Featured / {featured.category}
              </p>
              <h2 className="text-3xl font-bold tracking-tight mb-4 transition-colors group-hover:text-[var(--accent)]">
                {featured.title}
              </h2>
              <p className="text-[var(--text-secondary)] leading-7 mb-6">
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

          <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full min-h-[300px] flex-col rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-8 transition-colors hover:border-[var(--accent)]/40 sm:p-10"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] mb-4">
                  {post.category}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight mb-3 transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--text-secondary)] leading-7 mb-5">
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

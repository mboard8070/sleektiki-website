import Link from "next/link";
import { blogPosts } from "../blog/blogData";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="relative px-6 border-t border-[var(--surface-border)]"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="03 / Blog"
          title="Blog"
          subtitle="Notes on local AI systems, technical art, visualization, and production workflows."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]/40"
              >
                <p className="mb-4 text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                  {post.category}
                </p>
                <h3 className="mb-4 text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>
                <p className="mb-6 text-sm leading-7 text-[var(--text-secondary)]">
                  {post.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                  <time dateTime={post.date}>
                    {new Date(`${post.date}T00:00:00`).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric", year: "numeric" }
                    )}
                  </time>
                  <span>/</span>
                  <span>{post.readingTime}</span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.28}>
          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
            >
              Blog
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

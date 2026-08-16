import Link from "next/link";
import { blogPosts } from "../blog/blogData";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="blog-index-list relative border-t border-[var(--surface-border)]"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="03 / Blog"
          title="Blog"
          subtitle="Notes on local AI systems, technical art, visualization, and production workflows."
        />

        <div className="grid auto-rows-fr gap-7 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.08} className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="blog-tile group"
              >
                <p className="blog-tile-meta text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                  {post.category}
                </p>
                <h3 className="blog-tile-title text-2xl font-semibold tracking-tight transition-colors group-hover:text-[var(--accent)]">
                  {post.title}
                </h3>
                <p className="blog-tile-description text-sm leading-7 text-[var(--text-secondary)]">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
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
              className="btn"
            >
              Blog
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

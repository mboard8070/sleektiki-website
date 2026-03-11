import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, getAllSlugs } from "../projectData";
import ProjectContent from "./ProjectContent";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — sleektiki.ai`,
    description: project.description[0],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      {/* Hero image */}
      <div className="relative w-full overflow-hidden" style={{ height: "28vh" }}>
        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ objectPosition: project.heroPosition || "top" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/60 via-transparent to-[#050508]/60" />

        {/* Back link */}
        <div
          className="absolute top-6 left-0 z-10"
          style={{ paddingLeft: "max(1.5rem, 5vw)" }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors bg-[#050508]/60 backdrop-blur-sm rounded-full px-4 py-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Content */}
      <div
        className="max-w-5xl mx-auto"
        style={{
          paddingLeft: "max(1.5rem, 5vw)",
          paddingRight: "max(1.5rem, 5vw)",
          paddingTop: "3rem",
          paddingBottom: "6rem",
        }}
      >
        {/* Title area */}
        <div style={{ marginBottom: "4rem" }}>
          <p
            className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
            style={{ marginBottom: "1.25rem" }}
          >
            {project.subtitle}
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
            style={{ marginBottom: "2rem" }}
          >
            {project.title}
          </h1>

          {/* Tags */}
          <div
            className="flex flex-wrap gap-2"
            style={{ marginBottom: "2.5rem" }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-xs rounded-full border border-[var(--surface-border)] text-[var(--text-secondary)] bg-[var(--surface)] font-[family-name:var(--font-geist-mono)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* External links */}
          {project.links.length > 0 && (
            <div className="flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-lg bg-[var(--accent)] text-[var(--background)] font-semibold hover:opacity-90 transition-opacity"
                >
                  {link.label}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: "5rem" }}>
          {project.description.map((p, i) => (
            <p
              key={i}
              className="text-lg text-[var(--text-secondary)]"
              style={{ lineHeight: 1.8, marginBottom: i < project.description.length - 1 ? "2rem" : 0 }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Client-side animated gallery + YouTube */}
        <ProjectContent project={project} />
      </div>
    </div>
  );
}

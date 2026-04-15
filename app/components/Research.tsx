"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const areas = [
  {
    title: "AI-Augmented Art Pipelines",
    description:
      "Integrating generative AI into traditional 3D workflows, from concept to final asset, without sacrificing artistic intent or quality.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 8.25 4.69c0 .126 0 .252 0 .378" />
        <circle cx="17" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Local-First AI Systems",
    description:
      "Building AI infrastructure that runs on local hardware (DGX Spark, consumer GPUs), keeping data private and latency low.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
      </svg>
    ),
  },
  {
    title: "Creative AI Education",
    description:
      "Designing curriculum that equips artists and developers to work alongside AI tools, understanding both the craft and the technology.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function Research() {
  return (
    <section id="research" className="relative px-6 border-t border-[var(--surface-border)]" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--surface-border)]" />

      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="03 / Research"
          title="How can AI augment, not replace, the creative process?"
        />

        <ScrollReveal delay={0.1}>
          <p
            className="text-lg text-[var(--text-secondary)] max-w-3xl"
            style={{ lineHeight: 1.8, marginBottom: "4rem" }}
          >
            My research sits at the intersection of traditional 3D art pipelines
            and AI-driven content creation. I&apos;m interested in building
            systems where AI acts as a collaborator: accelerating tedious
            tasks, generating variations, and handling technical overhead, while
            the artist retains full creative control. This isn&apos;t about
            replacing artists; it&apos;s about giving them superpowers.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => (
            <ScrollReveal key={area.title} delay={0.15 + i * 0.1}>
              <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] h-full">
                <div className="w-10 h-10 rounded-lg bg-[var(--surface-light)] flex items-center justify-center text-[var(--accent)] mb-4">
                  {area.icon}
                </div>
                <h3
                  className="text-base font-semibold"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {area.title}
                </h3>
                <p
                  className="text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.8 }}
                >
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

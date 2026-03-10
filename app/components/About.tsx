"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const tags = [
  "Creative AI",
  "Game Dev",
  "Tech Art",
  "3D Modeling",
  "Animation",
];

export default function About() {
  return (
    <section id="about" className="relative px-6 border-t border-[var(--surface-border)]" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading label="About" title="About Me" />

        <div className="grid md:grid-cols-3 gap-12">
          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <p
              className="text-lg text-[var(--text-secondary)]"
              style={{ lineHeight: 1.8, marginBottom: "2rem" }}
            >
              Indie game developer, technical artist, and creative AI researcher
              exploring the intersection of artificial intelligence and 3D
              content creation. From shipping games on Steam to building local AI
              systems on NVIDIA hardware, my work bridges traditional modeling
              and animation pipelines with emerging AI-driven workflows.
            </p>
            <p className="text-[var(--text-muted)]" style={{ lineHeight: 1.8 }}>
              These cross-disciplinary experiences inform everything I build
              — preparing the next generation of digital creators to work
              alongside AI tools rather than be displaced by them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                Disciplines
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-full border border-[var(--surface-border)] text-[var(--text-secondary)] bg-[var(--surface)] font-[family-name:var(--font-geist-mono)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[var(--surface-border)] to-transparent" />
    </section>
  );
}

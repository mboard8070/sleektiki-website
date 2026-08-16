"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const tags = [
  "AI Enablement",
  "Product Viz",
  "Unreal",
  "Technical Art",
  "Generative Video",
  "Teaching",
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
              Creative technologist. I build the pipeline, then enable the team
              that has to run it. Fifteen years of 3D, motion, and Unreal,
              plus shipped client work, a Sundance-licensed likeness, and
              production AI systems on NVIDIA DGX Spark.
            </p>
            <p className="text-[var(--text-muted)]" style={{ lineHeight: 1.8 }}>
              Unreal Authorized Instructor. Trained 50+ working professionals,
              including NASA and U.S. Army engineers. Former faculty at Miami
              University and Columbia College Chicago. The point is not more
              tools. It is a workflow a non-specialist can repeat on Monday.
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
                    className="btn-chip"
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

"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const featured = [
  {
    slug: "pixelus",
    title: "Pixelus",
    lane: "Product and motion",
    description:
      "One product photo in. Campaign and social shots out. Cutout, reference-conditioned generation, and a hard rule: do not invent silhouette, materials, logos, or color.",
    image: "/images/projects/pixelus.png",
  },
  {
    slug: "stillion-lora",
    title: "Stillion AI",
    lane: "Identity and installation",
    description:
      "FLUX LoRA trained on Stillion’s work, then a chained image-to-video pipeline with mask-locked composites. Contemporary Arts Center, Cincinnati, 2026.",
    image: "/images/projects/stillion-lora.png",
  },
  {
    slug: "ue5-configurator",
    title: "Unreal configurator",
    lane: "Enablement",
    description:
      "A teaching demo for a trade-show production app: mesh and material states, Common UI, gamepad. The same job as the Streamliner plugins — make Unreal usable.",
    image: "/images/projects/ue5-configurator-card.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="work"
      className="relative border-t border-[var(--surface-border)]"
      style={{ paddingTop: "6rem", paddingBottom: "2rem" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="01 / Work"
          title="Start here"
          subtitle="Three cases that cover the hire: product pictures, generative video with identity lock, and Unreal tools you can teach."
        />

        <div className="grid lg:grid-cols-3 gap-6">
          {featured.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link href={`/projects/${item.slug}`} className="block h-full group">
                <article
                  className="h-full rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] overflow-hidden hover:border-[var(--accent)]/25 transition-colors"
                >
                  <div className="h-52 overflow-hidden bg-[var(--surface-light)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                      {item.lane}
                    </p>
                    <h3
                      className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors"
                      style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[var(--text-secondary)]"
                      style={{ lineHeight: 1.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-[var(--text-muted)]">
          <Link href="/enablement" className="text-[var(--accent)] hover:underline">
            Introduction to AI for Business
          </Link>
          {" — "}
          a workshop for people who have to use these tools at work.
        </p>
      </div>
    </section>
  );
}

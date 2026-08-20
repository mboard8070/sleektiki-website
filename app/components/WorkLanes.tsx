"use client";

import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const lanes = [
  {
    id: "enablement",
    href: "/enablement",
    label: "01",
    title: "AI enablement",
    body: "Workshops and internal curriculum so a marketing, engineering, or production team can run AI and Unreal without a research group. Playbook, critique, artifacts they keep.",
    proof: "Vertex · NASA / Army Unreal · 12 years faculty",
  },
  {
    id: "production",
    href: "#production",
    label: "02",
    title: "Product and motion",
    body: "Approved photography stays the source of truth. Pixelus, Dearfoams, and the Stillion installation are the same job: generate, lock product or identity, composite what the model cannot hold, deliver 16:9 / 9:16 / 4:5.",
    proof: "FLUX · ComfyUI · Kling · Wan · Unreal finish",
  },
  {
    id: "systems",
    href: "#systems",
    label: "03",
    title: "Pipelines and tools",
    body: "Local agents, LoRA trainers, PBR materials, Unreal editor plugins. Built so a technical artist can inspect the Python and a non-technical user can still get a result.",
    proof: "MAUDE · Surfaced · UE5 Streamliners · DGX Spark",
  },
];

export default function WorkLanes() {
  return (
    <section
      id="lanes"
      className="relative border-t border-[var(--surface-border)]"
      style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="How I work"
          title="One practice, three rooms"
          subtitle="Recruiters should not have to guess. Enablement, production pictures, and the tools underneath are the same person — shown in the order a hiring manager can use."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {lanes.map((lane, i) => (
            <ScrollReveal key={lane.id} delay={i * 0.08}>
              <Link
                href={lane.href}
                className="block h-full rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)]/30 transition-colors"
                style={{ padding: "1.75rem" }}
              >
                <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                  {lane.label}
                </p>
                <h3
                  className="text-xl font-semibold"
                  style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}
                >
                  {lane.title}
                </h3>
                <p
                  className="text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7, marginBottom: "1.25rem" }}
                >
                  {lane.body}
                </p>
                <p className="text-[11px] text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                  {lane.proof}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

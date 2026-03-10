"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <ScrollReveal style={{ marginBottom: "5rem", paddingTop: "4rem" }}>
      <p
        className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
        style={{ marginBottom: "1rem" }}
      >
        {label}
      </p>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        style={{ marginBottom: "1.5rem" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[var(--text-secondary)] max-w-2xl text-lg"
          style={{ lineHeight: 1.8 }}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}

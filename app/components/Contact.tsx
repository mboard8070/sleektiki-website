"use client";

import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 border-t border-[var(--surface-border)]" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-[var(--surface-border)]" />

      <div className="max-w-2xl mx-auto">
        <SectionHeading
          label="04 / Contact"
          title="Get in Touch"
          subtitle="Have a project in mind, want to collaborate, or just want to say hello?"
        />

        <ScrollReveal delay={0.1}>
          <p
            className="text-lg text-[var(--text-secondary)] font-[family-name:var(--font-geist-mono)]"
            style={{ lineHeight: 1.8 }}
          >
            Email: matt at sleektiki dot ai
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

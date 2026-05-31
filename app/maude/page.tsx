import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MAUDE | sleektiki.ai",
  description:
    "MAUDE is Matthew Board's local-first AI assistant system for model routing, tools, mobile access, and scheduled agent work.",
};

const facts = [
  ["189", "server tools"],
  ["5", "client surfaces"],
  ["local-first", "gateway design"],
];

const features = [
  "Routes local and cloud models through one private gateway",
  "Connects chat to files, shell, browser automation, GitHub, Google Workspace, media tools, and scheduled missions",
  "Keeps sensitive actions visible with traces, approval points, and human-readable logs",
];

export default function MaudePage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Local-first AI system
            </p>
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              MAUDE
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
              A private AI command layer running on the DGX Spark, built to connect models with real tools while keeping work inspectable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects/maude"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
              >
                Read the case study
              </Link>
              <Link
                href="/#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/40"
              >
                Back to projects
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-[var(--surface-border)] bg-[var(--surface)]">
            <video
              className="aspect-video w-full object-cover"
              src="/videos/maude-feature-video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {facts.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6">
              <strong className="font-[family-name:var(--font-geist-mono)] text-2xl text-[var(--accent)]">{value}</strong>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              What it does
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A practical assistant stack, not a chatbot demo.
            </h2>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 text-[var(--text-secondary)]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

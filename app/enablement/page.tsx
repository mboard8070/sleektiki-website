import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Enablement | sleektiki.ai",
  description:
    "Introduction to AI for people who have not used it at work yet, and The Anatomy of a Harness for turning a model into a repeatable job.",
};

const offerings = [
  {
    href: "/enablement/introduction-to-ai",
    label: "Single-day workshop",
    title: "Introduction to AI",
    body: "For people who have not used AI in a professional capacity yet. How a model produces an answer, how to brief it on a real task, and how to revise what comes back.",
    proof: "One day · five objectives",
  },
  {
    href: "/enablement/anatomy-of-a-harness",
    label: "Lesson",
    title: "The Anatomy of a Harness",
    body: "What a harness is, why chat is not a process, and how to build one. MAUDE is the working example: a model, tools, a loop, a log, and a stop condition.",
    proof: "Definition · parts · build",
  },
];

export default function EnablementIndex() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            Enablement
          </p>
          <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
            Enablement
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
            How to put a model on a live task, and how to wrap it so the
            same job can run more than once.
          </p>
        </div>
      </section>

      <section className="px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] transition-colors hover:border-[var(--accent)]/30"
                style={{ padding: "2rem" }}
              >
                <p className="font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                  {item.label}
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h2>
                <p
                  className="mt-4 flex-1 text-base text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.body}
                </p>
                <p className="mt-8 font-[family-name:var(--font-geist-mono)] text-[11px] text-[var(--text-muted)]">
                  {item.proof}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

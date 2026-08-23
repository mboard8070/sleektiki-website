import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte — sleektiki.ai",
  description:
    "Cyte is an iOS cell game. One thumb. Draw a current. Play is a solo climb. Match is 1v1.",
};

export default function CytePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              &larr; Back to sleektiki.ai
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Cyte</h1>
          <p className="mt-3 text-lg text-[var(--text-secondary)]">
            iOS. One thumb. Draw a current through a broth of cells.
          </p>
          <p className="mt-3 text-sm">
            <Link href="/projects/cyte" className="text-[var(--accent)] hover:underline">
              Case study
            </Link>
            {" · "}
            <Link href="/#craft" className="text-[var(--accent)] hover:underline">
              Work · 3D &amp; games
            </Link>
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <img
            src="/images/projects/cyte.jpg"
            alt="Cyte title screen"
            className="w-full rounded-lg border border-[var(--surface-border)]"
          />
          <p>
            Cyte is a cell game in the Osmos and 1v1 Agar energy family. You
            draw a current. Motes dock. Rivals eat. Phages nick. The climb is
            endless.
          </p>
          <p>
            Play is a solo climb through dusk after dusk. Match is 1v1
            through Apple Game Center. Lab is the power-up board you earn as
            you go.
          </p>
          <p>
            Publisher: Sleek Tiki. Bundle identifier:{" "}
            <code className="text-[var(--text-primary)]">ai.sleektiki.Silt</code>.
          </p>

          <section className="pt-4">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
              Privacy Policy and Terms of Service
            </h2>
            <p className="mb-4">
              Use these URLs in App Store Connect. They are Cyte-specific.
              Do not use the site-wide /privacy and /terms links; those are
              for Maude.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/cyte/privacy"
                className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <p className="text-sm font-[family-name:var(--font-geist-mono)] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Privacy Policy
                </p>
                <p className="mt-2 text-[var(--text-primary)] font-semibold">
                  What Cyte stores and who it talks to
                </p>
                <p className="mt-2 text-sm break-all text-[var(--text-muted)]">
                  https://sleektiki.ai/cyte/privacy
                </p>
              </Link>
              <Link
                href="/cyte/terms"
                className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <p className="text-sm font-[family-name:var(--font-geist-mono)] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Terms of Service
                </p>
                <p className="mt-2 text-[var(--text-primary)] font-semibold">
                  Play, purchases, and Game Center
                </p>
                <p className="mt-2 text-sm break-all text-[var(--text-muted)]">
                  https://sleektiki.ai/cyte/terms
                </p>
              </Link>
            </div>
          </section>

          <p>
            Contact: Matthew Board,{" "}
            <a
              href="mailto:matt@sleektiki.ai"
              className="text-[var(--accent)] hover:underline"
            >
              matt@sleektiki.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

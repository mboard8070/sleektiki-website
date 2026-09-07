import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MAUDE — sleektiki.ai",
  description:
    "MAUDE is a Mac and iPhone studio. Chat, stills, and video, plus calendar, Maps, files, and optional Google Workspace. Make it happen with MAUDE.",
};

export default function MaudePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              &larr; Back to sleektiki.ai
            </Link>
          </p>
          <h1 className="text-4xl font-bold">MAUDE</h1>
          <p className="mt-3 text-lg text-[var(--text-secondary)]">
            Make it happen with MAUDE. A studio for chat, stills, video, and
            tools — on Mac and iPhone.
          </p>
          <p className="mt-3 text-sm">
            <Link
              href="/projects/maude-mac"
              className="text-[var(--accent)] hover:underline"
            >
              Case study
            </Link>
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <img
            src="/images/projects/maude-mac-chat.jpg"
            alt="MAUDE on Mac"
            className="w-full rounded-lg border border-[var(--surface-border)]"
          />
          <p>
            MAUDE is a Mac and iPhone studio from Sleek Tiki. You ask. It does
            the work — chat, stills, video, calendar, Maps, files, and optional
            Google Sign-In for Gmail, Drive, Docs, Sheets, Slides, and Calendar.
            You do not paste an API key. Chat, stills, and video run on Sleek
            Tiki&apos;s studio service. iCloud keeps Mac and iPhone in sync.
          </p>
          <p>
            Free includes 1,000 tokens each month and one complimentary still.
            Video is Pro. Pro is $9.99 a month or $79.99 a year for 1,000,000
            tokens each month. A still uses 40,000 tokens. A 4-second video
            uses 200,000. A $4.99 token top-off adds 250,000 extra tokens.
            Extra stills and video still need Pro.
          </p>
          <p>
            Publisher: Sleek Tiki. Bundle identifier:{" "}
            <code className="text-[var(--text-primary)]">ai.sleektiki.maude</code>.
            Platforms: macOS 14 and later, iOS 17 and later.
          </p>

          <section className="pt-4">
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
              Privacy Policy and Terms of Service
            </h2>
            <p className="mb-4">
              How MAUDE handles data, subscriptions, and Google Sign-In.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/maude/privacy"
                className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <p className="text-sm font-[family-name:var(--font-geist-mono)] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Privacy Policy
                </p>
                <p className="mt-2 text-[var(--text-primary)] font-semibold">
                  What MAUDE stores and who it talks to
                </p>
                <p className="mt-2 text-sm break-all text-[var(--text-muted)]">
                  https://sleektiki.ai/maude/privacy
                </p>
              </Link>
              <Link
                href="/maude/terms"
                className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/40 transition-colors"
              >
                <p className="text-sm font-[family-name:var(--font-geist-mono)] uppercase tracking-[0.16em] text-[var(--accent)]">
                  Terms of Service
                </p>
                <p className="mt-2 text-[var(--text-primary)] font-semibold">
                  Chat, media, subscriptions, Google
                </p>
                <p className="mt-2 text-sm break-all text-[var(--text-muted)]">
                  https://sleektiki.ai/maude/terms
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

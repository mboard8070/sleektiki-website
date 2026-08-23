import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte Privacy Policy — sleektiki.ai",
  description:
    "What Cyte stores on the device, what Apple handles, and how to reach Sleek Tiki.",
};

export default function CytePrivacy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/cyte" className="text-[var(--accent)] hover:underline">
              &larr; Cyte
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Cyte. Last updated: August 23, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Overview</h2>
            <p>
              Cyte is an iOS game published by Sleek Tiki. This page describes
              what the game stores and who it talks to. It is written for App
              Store listings. Contact: Matthew Board,{" "}
              <a href="mailto:matt@sleektiki.ai" className="text-[var(--accent)] hover:underline">
                matt@sleektiki.ai
              </a>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">What Cyte does not do</h2>
            <p>
              Cyte does not ship ads in the current build. Cyte does not
              include an analytics SDK. Cyte does not sell personal data.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">What stays on the device</h2>
            <p>
              Progress is saved locally on the device: current level, lives,
              and Lab ranks. That save is for running the game. It is not
              uploaded to a Sleek Tiki server.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">In-app purchases</h2>
            <p>
              Cyte uses Apple StoreKit for optional in-app purchases: remove
              ads, extra lives, and Lab charges. Apple processes those
              purchases. Sleek Tiki does not receive your card number.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Game Center</h2>
            <p>
              Optional Apple Game Center is used for matchmaking and
              leaderboards. That data is handled by Apple under Apple&apos;s
              Game Center terms. Turning Game Center off in Settings stops
              Match and leaderboard features.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Contact</h2>
            <p>
              Questions about this policy: Matthew Board,{" "}
              <a href="mailto:matt@sleektiki.ai" className="text-[var(--accent)] hover:underline">
                matt@sleektiki.ai
              </a>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Changes</h2>
            <p>This page may change. The date at the top is the latest version.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

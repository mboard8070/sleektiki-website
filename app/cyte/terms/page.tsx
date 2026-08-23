import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte Terms of Service — sleektiki.ai",
  description:
    "Terms for playing Cyte, including in-app purchases and Game Center.",
};

export default function CyteTerms() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/cyte" className="text-[var(--accent)] hover:underline">
              &larr; Cyte
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Cyte. Last updated: August 23, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Acceptance</h2>
            <p>
              By downloading or playing Cyte, you agree to these terms.
              Publisher: Sleek Tiki. Contact: Matthew Board,{" "}
              <a href="mailto:matt@sleektiki.ai" className="text-[var(--accent)] hover:underline">
                matt@sleektiki.ai
              </a>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">The game</h2>
            <p>
              Cyte is an iOS cell game. Play is a solo climb. Match is 1v1
              through Apple Game Center. Lab holds optional power-ups. The
              game is provided as-is. Features can change with updates.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Purchases</h2>
            <p>
              Optional in-app purchases (remove ads, extra lives, Lab charges)
              are sold through Apple. Refunds follow Apple&apos;s App Store
              rules. Sleek Tiki does not process refunds outside Apple.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Game Center</h2>
            <p>
              Match and leaderboards require Apple Game Center. Apple&apos;s
              terms apply to that service.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Your device</h2>
            <p>
              You are responsible for the device you play on and for any Game
              Center account you use.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Limitation</h2>
            <p>
              To the extent allowed by law, Sleek Tiki is not liable for lost
              progress, failed matches, or purchase issues beyond what Apple
              already covers.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Contact</h2>
            <p>
              Matthew Board,{" "}
              <a href="mailto:matt@sleektiki.ai" className="text-[var(--accent)] hover:underline">
                matt@sleektiki.ai
              </a>.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Changes</h2>
            <p>These terms may change. The date at the top is the latest version.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

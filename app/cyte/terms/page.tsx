import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte Terms of Service — sleektiki.ai",
  description:
    "Terms of service for the Cyte iOS game, including play, in-app purchases, and Game Center.",
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
            Cyte iOS game. Last updated: August 23, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Acceptance
            </h2>
            <p>
              By downloading, installing, or playing Cyte, you agree to these
              terms. If you do not agree, do not use the game. Publisher:
              Sleek Tiki, operated by Matthew Board. Contact:{" "}
              <a
                href="mailto:matt@sleektiki.ai"
                className="text-[var(--accent)] hover:underline"
              >
                matt@sleektiki.ai
              </a>
              . These terms apply to Cyte. They do not replace Apple&apos;s
              Licensed Application End User License Agreement, which also
              applies to App Store downloads.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              The game
            </h2>
            <p>
              Cyte is an iOS cell game. Play is a solo climb. Match is 1v1
              through Apple Game Center. Lab holds optional power-ups. Scores
              can show local records and, if Game Center is on, Apple
              leaderboards. Features can change with updates. The game is
              provided for personal, non-commercial play.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              License
            </h2>
            <p>
              Sleek Tiki grants you a personal, non-exclusive, non-transferable
              license to play Cyte on Apple devices you own or control, as
              allowed by the App Store. You do not buy the game&apos;s code,
              art, audio, or trademarks. You may not copy, reverse engineer,
              redistribute, or wrap Cyte as another product except where law
              says you may.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Purchases
            </h2>
            <p>
              Optional in-app purchases (Remove Ads, extra lives, Lab charges)
              are sold through Apple. Prices are shown by Apple at checkout.
              Payment, taxes, and refunds follow Apple&apos;s App Store rules.
              Sleek Tiki does not process cards and does not issue refunds
              outside Apple. Consumable items (lives and Lab charges) are
              added to the device when the purchase succeeds. Restore
              Purchases restores the Remove Ads entitlement on Apple IDs that
              already bought it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Advertising
            </h2>
            <p>
              Solo play may show Google AdMob interstitial ads between dusks
              and on game over. The shop can offer a rewarded ad for an extra
              life or a Lab charge. Match does not show ads. Remove Ads is an
              optional purchase that turns interstitial ads off. Rewarded ads
              stay opt-in. Ads are provided by Google; Sleek Tiki does not
              control every ad that appears.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Game Center
            </h2>
            <p>
              Match and Apple leaderboards require Game Center. You are
              responsible for the Game Center account you use. Apple&apos;s
              terms cover that service. Sleek Tiki is not responsible for
              Apple outages, failed matchmaking, or other players.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Fair play
            </h2>
            <p>
              Do not cheat, automate, or interfere with Match. Do not abuse
              other players. Sleek Tiki may refuse support or future updates
              if these terms are broken. Game Center bans, if any, are
              Apple&apos;s to apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Your device
            </h2>
            <p>
              You are responsible for the device you play on, your Apple ID,
              Screen Time settings, and any Game Center account. Keep iOS and
              the app updated. Lost progress from deleting the app, changing
              devices, or a failed backup is not a refund on its own.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Disclaimer
            </h2>
            <p>
              Cyte is provided as-is, without warranties of any kind, including
              merchantability, fitness for a particular purpose, and
              uninterrupted play, to the extent the law allows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Limitation
            </h2>
            <p>
              To the extent allowed by law, Sleek Tiki is not liable for lost
              progress, failed matches, purchase issues beyond what Apple
              already covers, or indirect damages. Some places do not allow
              these limits, so they may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Privacy
            </h2>
            <p>
              How Cyte handles data is described in the{" "}
              <Link
                href="/cyte/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                Cyte Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Contact
            </h2>
            <p>
              Matthew Board, Sleek Tiki,{" "}
              <a
                href="mailto:matt@sleektiki.ai"
                className="text-[var(--accent)] hover:underline"
              >
                matt@sleektiki.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Changes
            </h2>
            <p>
              These terms may change. The date at the top is the latest
              version. Playing Cyte after an update means you accept the
              updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

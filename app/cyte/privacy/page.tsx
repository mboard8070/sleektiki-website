import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte Privacy Policy — sleektiki.ai",
  description:
    "Privacy policy for the Cyte iOS game: what stays on the device, what Apple handles, and how to reach Sleek Tiki.",
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
            Cyte iOS game. Last updated: August 23, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Who we are
            </h2>
            <p>
              Cyte is an iOS game published by Sleek Tiki, operated by Matthew
              Board. Bundle identifier:{" "}
              <code className="text-[var(--text-primary)]">ai.sleektiki.Silt</code>.
              This policy covers the Cyte app. It does not cover the rest of
              sleektiki.ai (including Maude). Contact:{" "}
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
              Summary
            </h2>
            <p>
              Sleek Tiki does not run a Cyte server. The game does not create
              a Sleek Tiki account. We do not collect your name, email, or
              location. We do not sell personal data. We do not include an
              analytics SDK or an advertising SDK in the current build. The
              only third-party services Cyte talks to are Apple services you
              already use on the device: StoreKit for optional purchases, and
              Game Center if you turn Match or leaderboards on.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data stored on the device
            </h2>
            <p>
              Progress is saved locally with Apple&apos;s standard app storage
              (UserDefaults) so the game can resume. That includes:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Current Play level, lives, and whether a run is active</li>
              <li>Lab ranks and Lab charges</li>
              <li>Local best dusk and lifetime win counts used by Scores</li>
              <li>Whether the Remove Ads purchase is owned</li>
            </ul>
            <p className="mt-3">
              This save data stays on the device. It is not uploaded to a
              Sleek Tiki server. Deleting the app removes it, unless Apple
              backups (for example iCloud device backup) still hold a copy
              under Apple&apos;s backup rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              In-app purchases
            </h2>
            <p>
              Optional purchases go through Apple StoreKit: Remove Ads, extra
              lives, and Lab charges. Apple processes payment. Sleek Tiki does
              not receive your card number, Apple ID password, or billing
              address. Apple may keep purchase records under Apple&apos;s
              privacy policy. Restore Purchases asks Apple whether those items
              are already owned on this Apple ID.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Game Center
            </h2>
            <p>
              Match (1v1) and leaderboards use Apple Game Center when you
              choose those features. Authentication, nicknames, matchmaking,
              and scores are handled by Apple. Sleek Tiki does not host
              matchmaking or leaderboard servers. Turning Game Center off in
              iOS Settings stops Match and leaderboard features. Apple&apos;s
              Game Center privacy rules apply to that data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Advertising and tracking
            </h2>
            <p>
              The current Cyte build does not show ads and does not include a
              third-party ads SDK. It does not use the App Tracking
              Transparency prompt. The shop includes a Remove Ads purchase so
              that if ads are added later, that purchase still applies. If ads
              are added, this policy will be updated before they ship.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Analytics
            </h2>
            <p>
              Cyte does not include an analytics, crash-reporting, or
              telemetry SDK. Sleek Tiki does not receive play sessions,
              device identifiers, or usage logs from the game.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Children
            </h2>
            <p>
              Cyte does not ask for a name, email, or age. It does not
              knowingly collect personal information from children. Match and
              leaderboards, if used, go through Apple Game Center. Parents
              can restrict Game Center and in-app purchases in iOS Screen
              Time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data sharing
            </h2>
            <p>
              Sleek Tiki does not sell, rent, or trade Cyte player data. We
              do not share Cyte save data with advertisers. Apple may process
              StoreKit and Game Center data as the platform provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Your choices
            </h2>
            <p>
              You can play without Game Center. You can decline in-app
              purchases. You can delete the app to clear local Cyte data on
              that device. For Apple ID, purchases, or Game Center account
              questions, use Apple Support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Contact
            </h2>
            <p>
              Questions about this policy: Matthew Board, Sleek Tiki,{" "}
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
              This page may change. The date at the top is the latest version.
              Continued use of Cyte after an update means you accept the
              updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

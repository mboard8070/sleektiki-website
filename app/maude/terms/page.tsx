import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MAUDE Terms of Service — sleektiki.ai",
  description:
    "Terms of service for the MAUDE Mac and iOS app, including chat, generated media, subscriptions, and Google Sign-In.",
};

export default function MaudeTerms() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/maude" className="text-[var(--accent)] hover:underline">
              &larr; MAUDE
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            MAUDE for macOS and iOS. Last updated: September 1, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Acceptance
            </h2>
            <p>
              By downloading, installing, or using MAUDE, you agree to these
              terms. If you do not agree, do not use the app. Publisher: Sleek
              Tiki, operated by Matthew Board. Contact:{" "}
              <a
                href="mailto:matt@sleektiki.ai"
                className="text-[var(--accent)] hover:underline"
              >
                matt@sleektiki.ai
              </a>
              . These terms apply to the MAUDE Mac and iOS app. They do not
              replace Apple&apos;s Licensed Application End User License
              Agreement, which also applies to App Store downloads. Apple&apos;s
              standard EULA is at{" "}
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                className="text-[var(--accent)] hover:underline"
              >
                apple.com/legal/internet-services/itunes/dev/stdeula
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              The app
            </h2>
            <p>
              MAUDE is a studio app for macOS and iOS. It chats, generates
              stills with a monthly cap, and can generate video as a separate
              subscription. Optional Google Sign-In lets it work with Gmail,
              Drive, Docs, Sheets, Slides, and Calendar when you ask. On Mac,
              optional tools can control apps on this machine. Features can
              change with updates. The app is for personal, non-commercial use
              unless Sleek Tiki agrees otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              License
            </h2>
            <p>
              Sleek Tiki grants you a personal, non-exclusive, non-transferable
              license to use MAUDE on Apple devices you own or control, as
              allowed by the App Store. You do not buy the app&apos;s code,
              design, or trademarks. You may not copy, reverse engineer,
              redistribute, or wrap MAUDE as another product except where law
              says you may.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Subscriptions
            </h2>
            <p>
              Chat and Video are optional auto-renewing subscriptions sold
              through Apple. Prices are shown by Apple at checkout. Payment,
              taxes, cancellation, and refunds follow Apple&apos;s App Store
              rules. Sleek Tiki does not process cards and does not issue
              refunds outside Apple. Chat covers chat and stills with a
              monthly usage cap. Video is extra and also has a cap. Neither
              plan is unlimited. Restore Purchases restores entitlements on
              Apple IDs that already bought them. Unused cap does not roll
              over unless Apple or an in-app notice says otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Generated media
            </h2>
            <p>
              You are responsible for the prompts you send and for how you use
              outputs. Do not use MAUDE to create illegal content, including
              sexual content involving minors. MAUDE may refuse a generate
              request. Outputs can be wrong. You are responsible for checking
              them before you rely on them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Google
            </h2>
            <p>
              Google Sign-In is optional. You are responsible for the Google
              account you connect and for the mail, files, and events you ask
              MAUDE to read or change. Google&apos;s terms cover that service.
              Sign out removes MAUDE&apos;s tokens from this device. Revoke
              access in your Google Account to stop future API calls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Your device and keys
            </h2>
            <p>
              You are responsible for the device, your Apple ID, Screen Time
              settings, and any provider key you add in Settings. Keep the
              system and the app updated. Lost chats or files from deleting
              the app, changing devices, or a failed backup are not a refund
              on their own.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Disclaimer
            </h2>
            <p>
              MAUDE is provided as-is, without warranties of any kind,
              including merchantability, fitness for a particular purpose, and
              uninterrupted service, to the extent the law allows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Limitation
            </h2>
            <p>
              To the extent allowed by law, Sleek Tiki is not liable for lost
              chats, failed generations, provider outages, purchase issues
              beyond what Apple already covers, or indirect damages. Some
              places do not allow these limits, so they may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Privacy
            </h2>
            <p>
              How MAUDE handles data is described in the{" "}
              <Link
                href="/maude/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                MAUDE Privacy Policy
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
              version. Using MAUDE after an update means you accept the
              updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

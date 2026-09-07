import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MAUDE Privacy Policy — sleektiki.ai",
  description:
    "Privacy policy for the MAUDE Mac and iOS app: what stays on the device, which providers it talks to, and how to reach Sleek Tiki.",
};

export default function MaudePrivacy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/projects/maude-mac" className="text-[var(--accent)] hover:underline">
              &larr; MAUDE Mac/iOS
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            MAUDE for macOS and iOS. Last updated: September 5, 2026
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Who we are
            </h2>
            <p>
              MAUDE is a Mac and iOS studio app published by Sleek Tiki,
              operated by Matthew Board. Bundle identifier:{" "}
              <code className="text-[var(--text-primary)]">ai.sleektiki.maude</code>.
              This policy covers the MAUDE Mac and iOS app. Contact:{" "}
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
              Sleek Tiki does not create a MAUDE account for you. The app does
              not include an analytics SDK. We do not sell personal data. Chat,
              stills, and video you ask MAUDE to make are sent through Sleek
              Tiki&apos;s studio service to Replicate, using
              Sleek Tiki&apos;s provider account. The app does not ship a
              provider key and does not ask you to paste one. Optional Google Sign-In lets MAUDE use Gmail,
              Drive, Docs, Sheets, Slides, and Calendar when you ask. Google
              tokens stay in the device Keychain on that device (not iCloud
              Keychain). Studio chats and schedules can
              sync across your Apple devices via iCloud Documents when you
              are signed into the same iCloud account. Purchases go through
              Apple StoreKit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data stored on the device
            </h2>
            <p>
              MAUDE stores settings, consent, and similar studio state locally
              with Apple app storage (including UserDefaults) and files on the
              device. Conversation history, scheduled tasks, and heartbeat
              settings are stored in the app container and, when iCloud is
              available, in the MAUDE iCloud Documents container so your Mac
              and iPhone stay in sync even if one app is closed. Google
              Sign-In tokens and related secrets are stored only in the
              device Keychain (this device, not synced). Chat and generate
              requests leave the device through Sleek Tiki&apos;s studio
              service to Replicate, or when iCloud syncs the
              studio file to your other devices.
              Deleting the app removes local data, unless an Apple backup or
              iCloud copy still holds it under Apple&apos;s rules.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Chat, stills, and video
            </h2>
            <p>
              When you send a message or ask MAUDE to generate an image or a
              video, the prompt and any files, photos, or other content you
              attach for that request go to Sleek Tiki&apos;s studio service,
              which calls Replicate on Sleek Tiki&apos;s
              account. The provider key never leaves that server and is not
              in the app. Those providers process the request in order to
              return a reply or a generated file. Sleek Tiki does not use
              that content to train its own models. Provider retention
              follows that provider&apos;s policy. MAUDE refuses some
              generate requests before they are sent, including sexual
              content involving minors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Google Sign-In and Google user data
            </h2>
            <p>
              Google Sign-In is optional. MAUDE does not work with Google until
              you choose Sign in with Google. Access tokens and refresh tokens
              are stored only in the device Keychain. MAUDE requests these
              Google scopes, each only to do work you ask for:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                Sign-In (openid, email, profile) so the app can show which
                Google account is connected.
              </li>
              <li>
                Gmail (read, compose, send) to list, read, and send mail when
                you ask.
              </li>
              <li>
                Google Drive (read and file access) to list, search, read, and
                upload files you ask it to handle.
              </li>
              <li>
                Google Docs, Sheets, and Slides to read and create documents,
                spreadsheets, and presentations when you ask.
              </li>
              <li>
                Google Calendar to list, read, create, and delete events when
                you ask.
              </li>
            </ul>
            <p className="mt-3">
              MAUDE does not request Google Contacts or YouTube. Google user
              data is fetched only in response to a request you make in the
              app. If that request needs an AI model (for example, summarize
              this mail, or draft from this Drive file), the relevant Google
              content is sent through Sleek Tiki&apos;s studio service to
              Replicate so it can complete the request. Sleek Tiki does not sell Google user
              data, does not use it for advertising, and does not use it to
              train Sleek Tiki models. Sign out deletes the Google tokens from
              this device. You can also revoke MAUDE in your Google Account
              permissions.
            </p>
            <p className="mt-3">
              The use of raw or derived user data received from Workspace APIs
              will adhere to the Google User Data Policy, including the Limited
              Use requirements. When you ask MAUDE to run an AI model on Google
              content, that content is sent only to complete that request.
              Sleek Tiki does not transfer Workspace user data to third-party
              AI services for their model training.
            </p>
            <p className="mt-3">
              How we protect Google user data: Google Sign-In tokens and refresh
              tokens are stored only in the device Keychain and are never written
              to Sleek Tiki servers. MAUDE does not keep a copy of your Gmail,
              Drive, Docs, Sheets, Slides, or Calendar content on our systems.
              That content is requested from Google over encrypted HTTPS only
              when you ask for a task, used on the device to complete that task,
              and sent through Sleek Tiki&apos;s studio service to Replicate
              over encrypted HTTPS only when that request needs a model. Access is limited to the signed-in Google
              account on that device. Sign out removes the tokens from the
              Keychain. You can also revoke MAUDE in your Google Account
              permissions.
            </p>
            <p className="mt-3">
              Google&apos;s own rules also apply:{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-[var(--accent)] hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Mac apps
            </h2>
            <p>
              On Mac, optional tools can control apps on this machine (for
              example Notes, Calendar, Mail, and Office apps) using Apple
              Events. That work runs locally. Content you then ask MAUDE to
              process may still go through Sleek Tiki&apos;s studio service to
              Replicate as described above.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Photos and files
            </h2>
            <p>
              If you attach photos, video, or files from the device, those
              items stay local until you send a request that includes them.
              Then they are sent through Sleek Tiki&apos;s studio service to
              Replicate for that request, the same as chat attachments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              In-app purchases
            </h2>
            <p>
              Optional Pro monthly and yearly subscriptions, and a one-time
              Token top-off, are sold through Apple StoreKit. Apple processes
              payment. Sleek Tiki does not receive your card number, Apple ID
              password, or billing address. Apple may keep purchase records
              under Apple&apos;s privacy policy. Restore Purchases asks Apple
              whether Pro is already owned on this Apple ID. It does not
              restore consumed top-off packs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Analytics
            </h2>
            <p>
              MAUDE does not include an analytics, crash-reporting, or
              advertising SDK. Sleek Tiki does not receive a usage feed from
              the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Children
            </h2>
            <p>
              MAUDE is not directed at children. It can generate images and
              video. It does not knowingly collect personal information from
              children. Parents can restrict in-app purchases in Screen Time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data sharing
            </h2>
            <p>
              Sleek Tiki does not sell, rent, or trade MAUDE user data. We
              share data with third parties only as needed to run the request
              you made: Replicate (via Sleek Tiki&apos;s studio service) for
              chat and generation, Google if you signed in and asked for
              Google work, and Apple for purchases.
              Each of those parties has its own privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Your choices
            </h2>
            <p>
              You can use MAUDE without Google Sign-In. You can decline
              subscriptions. You can Sign out of Google. You can delete the
              app to clear local MAUDE data on that device. For Apple ID or
              purchase questions, use Apple Support.
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
              Continued use of MAUDE after an update means you accept the
              updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Maude",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link
              href="/"
              className="text-[var(--accent)] hover:underline"
            >
              &larr; Back to sleektiki.ai
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Last updated: March 5, 2026
          </p>
        </header>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Overview
            </h2>
            <p>
              Maude is a personal, single-user terminal application operated
              solely by its developer. It is not offered as a service to the
              public. This privacy policy describes how Maude handles data
              when connecting to Google Workspace APIs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data Collection
            </h2>
            <p>
              Maude does not collect, store, or transmit any personal data or
              Google user data to third parties. No analytics, tracking,
              cookies, or telemetry of any kind are used.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Google Workspace Data
            </h2>
            <p>
              When the user issues a command that involves a Google service
              (Gmail, Drive, Sheets, Slides, Calendar, Contacts, or YouTube),
              Maude calls the relevant Google API and displays the response in
              the terminal. API responses are used transiently during the
              session and are not persisted to disk or forwarded to any
              external service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Authentication &amp; Credentials
            </h2>
            <p>
              Maude uses Google OAuth 2.0 for authentication. The OAuth
              refresh token is stored locally on the user&apos;s own machine
              in an application-specific configuration directory. Credentials
              are never shared, uploaded, or transmitted to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data Retention
            </h2>
            <p>
              Maude does not retain any Google user data beyond the current
              terminal session. No databases, logs, or caches of Google data
              are maintained.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Data Sharing
            </h2>
            <p>
              No user data is shared with any third party, service, or
              individual under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Changes to This Policy
            </h2>
            <p>
              This policy may be updated from time to time. Any changes will
              be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Contact
            </h2>
            <p>
              For questions about this privacy policy, reach out via{" "}
              <a
                href="https://github.com/mboard8070"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </section>
        </div>

        <footer className="text-center text-sm text-[var(--text-muted)] mt-12 pt-6 border-t border-[var(--surface-border)]">
          <p>&copy; 2025&ndash;{new Date().getFullYear()} Maude.</p>
        </footer>
      </div>
    </div>
  );
}

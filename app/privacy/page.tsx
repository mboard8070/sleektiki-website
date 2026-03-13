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
            Last updated: March 13, 2026
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
              When the user issues a command that involves a Google service,
              Maude calls the relevant Google API and displays the response in
              the terminal. API responses are used transiently during the
              session and are not persisted to disk or forwarded to any
              external service.
            </p>
            <p className="mt-3">
              Maude requests access to the following Google services, each for
              a specific purpose driven by user commands:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>
                <strong>Gmail</strong> &mdash; Read, compose, and send emails
                on the user&apos;s behalf when they issue email-related
                commands.
              </li>
              <li>
                <strong>Google Drive</strong> &mdash; List, search, read, and
                upload files so the user can manage their Drive storage from
                the terminal.
              </li>
              <li>
                <strong>Google Sheets</strong> &mdash; Read and write
                spreadsheet data when the user requests spreadsheet operations.
              </li>
              <li>
                <strong>Google Slides</strong> &mdash; Create and edit
                presentations when the user requests slide-related tasks.
              </li>
              <li>
                <strong>Google Calendar</strong> &mdash; View, create, and
                modify calendar events so the user can manage their schedule.
              </li>
              <li>
                <strong>Google Contacts</strong> &mdash; Look up contact
                information when the user needs to reference or manage their
                contacts.
              </li>
              <li>
                <strong>YouTube</strong> &mdash; Search and retrieve video
                metadata when the user requests YouTube-related queries.
              </li>
            </ul>
            <p className="mt-3">
              In every case, data is fetched only in direct response to an
              explicit user command, displayed in the terminal, and discarded
              at the end of the session. No Google user data is stored,
              cached, or transmitted to any third party.
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

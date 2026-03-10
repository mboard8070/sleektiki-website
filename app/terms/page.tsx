import Link from "next/link";

export const metadata = {
  title: "Terms of Service - Maude",
};

export default function Terms() {
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
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            Last updated: March 5, 2026
          </p>
        </header>

        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Acceptance of Terms
            </h2>
            <p>
              By using Maude, you agree to the terms outlined on this page.
              Maude is a personal, single-user application and is not offered
              as a public service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Description of Service
            </h2>
            <p>
              Maude is a terminal-based AI assistant that integrates with
              Google Workspace APIs (Gmail, Drive, Sheets, Slides, Calendar,
              Contacts, and YouTube) to help its user manage productivity
              tasks through natural-language conversation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Access &amp; Use
            </h2>
            <p>
              Maude is intended for use solely by its developer and is not
              available for public registration, download, or redistribution.
              Access to Google Workspace data through Maude is limited to the
              authenticated Google account owner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Disclaimer of Warranties
            </h2>
            <p>
              Maude is provided &ldquo;as is&rdquo; without warranty of any
              kind, express or implied, including but not limited to the
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Limitation of Liability
            </h2>
            <p>
              In no event shall the developer of Maude be liable for any
              claim, damages, or other liability arising from the use of or
              inability to use the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Changes to These Terms
            </h2>
            <p>
              These terms may be updated from time to time. Any changes will
              be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Contact
            </h2>
            <p>
              For questions about these terms, reach out via{" "}
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

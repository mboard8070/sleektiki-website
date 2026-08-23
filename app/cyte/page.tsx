import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyte — sleektiki.ai",
  description:
    "Cyte is an iOS cell game. One thumb. Draw a current. Play is a solo climb. Match is 1v1.",
};

export default function CytePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <header className="pb-6 mb-8 border-b border-[var(--surface-border)]">
          <p className="text-sm mb-2">
            <Link href="/" className="text-[var(--accent)] hover:underline">
              &larr; Back to sleektiki.ai
            </Link>
          </p>
          <h1 className="text-4xl font-bold">Cyte</h1>
          <p className="mt-3 text-lg text-[var(--text-secondary)]">
            iOS. One thumb. Draw a current through a broth of cells.
          </p>
        </header>
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p>
            Cyte is a cell game in the Osmos and 1v1 Agar energy family. You
            draw a current. Motes dock. Rivals eat. Phages nick. The climb is
            endless.
          </p>
          <p>
            Play is a solo climb through dusk after dusk. Match is 1v1
            through Apple Game Center. Lab is the power-up board you earn as
            you go.
          </p>
          <p>
            Publisher: Sleek Tiki. Bundle identifier: ai.sleektiki.Silt.
          </p>
          <p>
            <Link href="/cyte/privacy" className="text-[var(--accent)] hover:underline">
              Privacy
            </Link>
            {" · "}
            <Link href="/cyte/terms" className="text-[var(--accent)] hover:underline">
              Terms
            </Link>
          </p>
          <p>
            Contact: Matthew Board,{" "}
            <a href="mailto:matt@sleektiki.ai" className="text-[var(--accent)] hover:underline">
              matt@sleektiki.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

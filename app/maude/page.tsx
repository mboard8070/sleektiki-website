import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MAUDE | sleektiki.ai",
  description:
    "MAUDE is Matthew Board's local-first AI assistant system for model routing, tools, mobile access, and scheduled agent work.",
};

const facts = [
  ["189", "server tools"],
  ["5", "client surfaces"],
  ["local-first", "gateway design"],
];

const features = [
  "Routes local and cloud models through one private gateway",
  "Connects chat to files, shell, browser automation, GitHub, Google Workspace, media tools, and scheduled missions",
  "Keeps sensitive actions visible with traces, approval points, and human-readable logs",
];

const serverInstall = `git clone https://github.com/mboard8070/terminal-llm.git
cd terminal-llm
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
playwright install chromium
./setup_local.sh
./maude`;

const clientInstall = `pip install --upgrade "git+https://github.com/mboard8070/terminal-llm.git#subdirectory=maude-client"
maude-client`;

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg border border-[var(--surface-border)] bg-[#050508] p-5 text-sm leading-7 text-[var(--text-primary)]">
      <code>{children}</code>
    </pre>
  );
}

export default function MaudePage() {
  return (
    <main className="relative z-[1] min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] pb-20 pt-64 md:pt-72 lg:pt-72">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Local-first AI system
            </p>
            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl">
              MAUDE
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-8 text-[var(--text-secondary)] sm:text-2xl sm:leading-10">
              A private AI command layer running on the DGX Spark, built to connect models with real tools while keeping work inspectable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#install"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[var(--accent)] px-5 text-sm font-semibold text-[var(--background)] transition-opacity hover:opacity-90"
              >
                Install MAUDE
              </Link>
              <Link
                href="/projects/maude"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)]/40"
              >
                Read the case study
              </Link>
            </div>
          </div>

          <div className="grid gap-5 lg:pt-24">
            <div className="overflow-hidden rounded-lg border border-[var(--surface-border)] bg-[var(--surface)]">
              <video
                className="aspect-video w-full object-cover"
                src="/videos/maude-feature-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-5">
              <h2 className="mb-3 text-lg font-semibold">Install MAUDE</h2>
              <CodeBlock>{serverInstall}</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {facts.map(([value, label]) => (
            <div key={label} className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6">
              <strong className="font-[family-name:var(--font-geist-mono)] text-2xl text-[var(--accent)]">{value}</strong>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="install" className="scroll-mt-40 border-b border-[var(--surface-border)] px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <div>
            <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Install
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Run MAUDE on a Linux workstation with CUDA.
            </h2>
            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              The server install is intended for Ubuntu 22.04+ or a similar Linux machine with an NVIDIA GPU, CUDA drivers, Python 3.12+, Git, cmake, make, g++, tmux, and curl.
            </p>
            <Link href="/projects/maude/setup" className="mt-6 inline-flex text-sm font-semibold text-[var(--accent)] hover:underline">
              Full setup guide
            </Link>
          </div>
          <div className="grid gap-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Server install</h3>
              <CodeBlock>{serverInstall}</CodeBlock>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold">Client CLI</h3>
              <CodeBlock>{clientInstall}</CodeBlock>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                Use the client after your MAUDE gateway is running and reachable, typically over Tailscale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[max(1.5rem,5vw)] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div>
            <p className="mb-5 font-[family-name:var(--font-geist-mono)] text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              What it does
            </p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A practical assistant stack, not a chatbot demo.
            </h2>
          </div>
          <div className="grid gap-4">
            {features.map((feature) => (
              <div key={feature} className="rounded-lg border border-[var(--surface-border)] bg-[var(--surface)] p-6 text-[var(--text-secondary)]">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

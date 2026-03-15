import Link from "next/link";

export const metadata = {
  title: "MAUDE Setup Guide",
  description:
    "Step-by-step guide to installing and configuring MAUDE on an NVIDIA DGX Spark or Linux workstation with CUDA.",
};

export default function SetupGuide() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "4rem 1.5rem" }}>
        <header style={{ paddingBottom: "1.5rem", marginBottom: "2rem", borderBottom: "1px solid var(--surface-border)" }}>
          <p className="text-sm" style={{ marginBottom: "0.5rem" }}>
            <Link href="/projects/maude" className="text-[var(--accent)] hover:underline">
              &larr; Back to MAUDE
            </Link>
          </p>
          <h1 className="text-4xl font-bold" style={{ marginBottom: "0.25rem" }}>
            Setup Guide
          </h1>
          <p className="text-sm text-[var(--text-muted)]">
            Last updated: March 15, 2026
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <p className="text-lg text-[var(--text-secondary)]" style={{ lineHeight: 1.8 }}>
            MAUDE runs on Linux with CUDA. It was built for the NVIDIA DGX Spark
            (Grace Blackwell, 128 GB unified memory) but works on any Linux
            machine with an NVIDIA GPU and enough VRAM to run a local model.
          </p>

          {/* Prerequisites */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 1
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Prerequisites
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>Make sure you have the following installed:</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong className="text-[var(--text-primary)]">Linux</strong> &mdash; Ubuntu 22.04+ or similar</li>
                <li><strong className="text-[var(--text-primary)]">NVIDIA GPU</strong> &mdash; with CUDA drivers installed and <code className="text-[var(--accent)]">nvidia-smi</code> working</li>
                <li><strong className="text-[var(--text-primary)]">Python 3.12+</strong></li>
                <li><strong className="text-[var(--text-primary)]">Git, cmake, make, g++</strong> &mdash; for building llama.cpp</li>
                <li><strong className="text-[var(--text-primary)]">tmux</strong> &mdash; background services run in tmux sessions</li>
                <li><strong className="text-[var(--text-primary)]">curl</strong> &mdash; health checks during startup</li>
              </ul>
            </div>
          </section>

          {/* Clone & Environment */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 2
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Clone &amp; Create Environment
            </h2>
            <Pre>{`git clone https://github.com/mboard8070/terminal-llm.git
cd terminal-llm
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
playwright install chromium`}</Pre>
          </section>

          {/* Build llama.cpp & Download Model */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 3
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Build llama.cpp &amp; Download Model
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                The setup script clones llama.cpp, builds it with CUDA support,
                and downloads the Nemotron 30B model (~38 GB).
              </p>
              <Pre>{`./setup_local.sh`}</Pre>
              <p>
                This will take a while depending on your internet speed and
                whether cmake needs to compile CUDA kernels for your GPU
                architecture.
              </p>
            </div>
          </section>

          {/* Vision Model */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 4 (Optional)
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Vision Model
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                If you want MAUDE to analyze images and screenshots, install
                Ollama and pull the LLaVA vision model:
              </p>
              <Pre>{`curl -fsSL https://ollama.com/install.sh | sh
ollama pull llava:13b`}</Pre>
            </div>
          </section>

          {/* API Keys */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 5
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              API Keys
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                Create a <code className="text-[var(--accent)]">variables.env</code> file
                in the project root. You only need the keys for the providers you
                plan to use:
              </p>
              <Pre>{`# Required for cloud models (at least one)
MISTRAL_API_KEY=your-key-here        # console.mistral.ai
CODESTRAL_API_KEY=your-key-here      # same Mistral console (separate key)

# Optional
CLAUDE_API_KEY=your-key-here         # console.anthropic.com
OPEN_ROUTER_API_KEY=your-key-here    # openrouter.ai/keys`}</Pre>
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--surface-border)",
                  borderRadius: "0.5rem",
                  padding: "1rem 1.25rem",
                }}
              >
                <p className="text-sm">
                  <strong className="text-[var(--accent)]">Tip:</strong> You can
                  also set keys from inside MAUDE with{" "}
                  <code className="text-[var(--accent)]">/keys set mistral YOUR_KEY</code>.
                  Keys are stored in{" "}
                  <code className="text-[var(--accent)]">~/.config/maude/keys.json</code>.
                </p>
              </div>
            </div>
          </section>

          {/* Remote Access */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 6 (Optional)
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Remote Access with Tailscale
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                If you want to access MAUDE from other machines (Mac, PC, phone),
                install Tailscale on both the server and your client devices:
              </p>
              <Pre>{`curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up`}</Pre>
              <p>
                For HTTPS access (required by the mobile app), generate SSL
                certificates and place them at{" "}
                <code className="text-[var(--accent)]">certs/cert.pem</code> and{" "}
                <code className="text-[var(--accent)]">certs/key.pem</code>. The
                gateway auto-enables HTTPS when these files exist.
              </p>
            </div>
          </section>

          {/* Launch */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 7
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Launch
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                The single launcher starts all services and drops you into the
                MAUDE chat:
              </p>
              <Pre>{`./maude`}</Pre>
              <p>This starts:</p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><strong className="text-[var(--text-primary)]">Nemotron</strong> &mdash; local inference on port 30010</li>
                <li><strong className="text-[var(--text-primary)]">Gateway</strong> &mdash; model routing, tool execution, SSE streaming on ports 30000/30080</li>
                <li><strong className="text-[var(--text-primary)]">File Server</strong> &mdash; file transfers on port 30002</li>
                <li><strong className="text-[var(--text-primary)]">PersonaPlex</strong> &mdash; voice server on port 8998</li>
                <li><strong className="text-[var(--text-primary)]">MAUDE Chat</strong> &mdash; the terminal interface (runs in foreground)</li>
              </ul>
              <Pre>{`# Other commands
./maude stop      # Stop all services
./maude status    # Show what's running
./maude -n        # Start services only (no TUI)`}</Pre>
            </div>
          </section>

          {/* Client Install */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 8 (Optional)
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Client Install (Mac / PC / Linux)
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                The lightweight CLI client connects to your MAUDE server over
                Tailscale. Install it with pip:
              </p>
              <Pre>{`pip install maude-client
maude-client --server http://<your-tailscale-ip>:30080`}</Pre>
              <p>
                The client supports all models, tool execution traces,
                conversation history, and cross-machine task dispatch.
              </p>
            </div>
          </section>

          {/* Google Workspace */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Step 9 (Optional)
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Google Workspace
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                To use Gmail, Drive, Sheets, Calendar, Contacts, Slides, and
                YouTube tools, you need a Google Cloud project with OAuth 2.0
                credentials:
              </p>
              <ol style={{ listStyleType: "decimal", paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li>Create a project at <strong className="text-[var(--text-primary)]">console.cloud.google.com</strong></li>
                <li>Enable the Gmail, Drive, Sheets, Calendar, Slides, People, and YouTube APIs</li>
                <li>Create OAuth 2.0 credentials (Desktop application type)</li>
                <li>Download <code className="text-[var(--accent)]">credentials.json</code> to the project root</li>
                <li>On first use, MAUDE will open a browser for the OAuth consent flow</li>
              </ol>
            </div>
          </section>

          {/* Verification */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Verification
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Verify Everything Works
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>Once MAUDE is running, try these commands in the chat:</p>
              <Pre>{`# Check available models
/model switch mistral

# Test tool execution
what files are in my home directory?

# Test web search
search for the latest NVIDIA news

# Check system status
./maude status`}</Pre>
              <p>
                You should see tool call traces ({"\u256D\u2500"} tool_name / {"\u2570\u2500"} result) as
                MAUDE executes commands on your behalf.
              </p>
            </div>
          </section>
        </div>

        <footer className="text-center text-sm text-[var(--text-muted)]" style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid var(--surface-border)" }}>
          <p>&copy; 2025&ndash;{new Date().getFullYear()} MAUDE.</p>
        </footer>
      </div>
    </div>
  );
}

function Pre({ children }: { children: string }) {
  return (
    <pre
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border)",
        borderRadius: "0.5rem",
        padding: "1rem 1.25rem",
        overflowX: "auto",
        fontSize: "0.875rem",
        lineHeight: 1.7,
      }}
      className="font-[family-name:var(--font-geist-mono)] text-[var(--text-primary)]"
    >
      <code>{children}</code>
    </pre>
  );
}

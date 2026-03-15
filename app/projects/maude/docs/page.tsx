import Link from "next/link";

export const metadata = {
  title: "MAUDE Documentation",
  description:
    "Architecture, models, tools, commands, and configuration reference for MAUDE.",
};

export default function Docs() {
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
            Documentation
          </h1>
          <p className="text-sm text-[var(--text-muted)]">
            Last updated: March 15, 2026
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

          {/* Architecture */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Overview
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Architecture
            </h2>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p>
                MAUDE is a multi-model AI operating environment built around a
                central Python gateway. All clients &mdash; the server TUI, Mac/PC CLI,
                mobile app, and Telegram bot &mdash; connect through a single gateway
                that handles model routing, tool execution, and streaming.
              </p>
              <Pre>{`Client (TUI / CLI / Mobile / Telegram)
   │
   ▼
Gateway (port 30000 HTTPS / 30080 HTTP)
   │
   ├── Local models (llama-server, port 30010)
   ├── Cloud models (Mistral API, Anthropic API, OpenRouter)
   ├── Tool execution (100+ tools)
   ├── Browser automation (Playwright)
   ├── Google Workspace (OAuth 2.0)
   └── File server (port 30002)`}</Pre>
              <p>
                The gateway makes non-streaming LLM calls in a loop: send the
                conversation to the model, check for tool calls, execute tools,
                feed results back, repeat. The final text response is streamed to
                the client as SSE with real-time tool trace events.
              </p>
            </div>
          </section>

          {/* Models */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Models
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Available Models
            </h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              <ModelRow name="mistral" model="Mistral Large" provider="Mistral API" note="Default. Best all-round with tools." />
              <ModelRow name="codestral" model="Codestral" provider="Mistral API" note="Optimized for code generation." />
              <ModelRow name="devstral" model="Devstral" provider="Mistral API" note="Frontier code agent (123B, 256K context)." />
              <ModelRow name="claude" model="Claude Opus 4" provider="Anthropic" note="Deep reasoning, long context." />
              <ModelRow name="sonnet" model="Claude Sonnet 4" provider="Anthropic" note="Fast, capable, cost-effective." />
              <ModelRow name="nemotron" model="Nemotron 30B" provider="Local (llama-server)" note="Free. No API key needed." />
              <ModelRow name="nemotron-super" model="Nemotron Super 120B" provider="OpenRouter (free)" note="Cloud inference, no cost." />
            </div>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, marginTop: "1rem" }}>
              <p>
                Switch models in the TUI with{" "}
                <code className="text-[var(--accent)]">/model switch &lt;name&gt;</code>.
                The gateway resolves short names to full model IDs and routes to
                the correct provider.
              </p>
            </div>
          </section>

          {/* Tools */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Tools
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Tool Categories
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.75rem" }}>
              <ToolCard title="File Operations" tools="read, write, edit, search, list, change directory" />
              <ToolCard title="Shell" tools="run_command (git, pip, python, system commands)" />
              <ToolCard title="Web" tools="web_search (DuckDuckGo), web_browse, web_view" />
              <ToolCard title="Vision" tools="view_image (LLaVA analysis of photos, screenshots)" />
              <ToolCard title="Gmail" tools="list, read, send emails" />
              <ToolCard title="Google Drive" tools="list, search, read, upload, create docs/sheets/folders" />
              <ToolCard title="Google Sheets" tools="read, write, append, create" />
              <ToolCard title="Google Calendar" tools="list, create, update, delete events" />
              <ToolCard title="Google Slides" tools="get, create presentations, add slides/text" />
              <ToolCard title="Google Contacts" tools="list, get, create, update, delete, search" />
              <ToolCard title="YouTube" tools="search, get video/channel, playlists, comments" />
              <ToolCard title="GitHub" tools="PRs, issues, repos, branches, commits, CI/CD, releases" />
              <ToolCard title="Browser Automation" tools="open, navigate, click, type, fill forms, screenshot, extract" />
              <ToolCard title="Social Media" tools="post to X, LinkedIn, Facebook, Instagram (browser-based)" />
              <ToolCard title="Image Generation" tools="FLUX with LoRA support via ComfyUI" />
              <ToolCard title="Substack" tools="create/edit drafts, publish, list posts, stats" />
              <ToolCard title="Memory" tools="save, recall, list, forget (persistent across sessions)" />
              <ToolCard title="Collaboration" tools="mesh status, dispatch tasks, project management" />
              <ToolCard title="Scheduling" tools="cron-based task scheduling with natural language" />
              <ToolCard title="System Monitor" tools="CPU, GPU, RAM, disk, processes, sessions, activity" />
              <ToolCard title="Sandbox" tools="Docker container for autonomous builds (exec, read, write)" />
              <ToolCard title="Forge" tools="Autonomous builder: plan, execute, verify, fix loop" />
              <ToolCard title="AI Delegation" tools="ask_frontier (escalate to Claude/Gemini)" />
            </div>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, marginTop: "1rem" }}>
              <p>
                Tools are dynamically filtered per message based on keywords.
                Only relevant tools are sent to the model, reducing token usage
                by 30&ndash;40%.
              </p>
            </div>
          </section>

          {/* Commands */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Reference
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              TUI Commands
            </h2>
            <Pre>{`/model switch <name>   Switch model (mistral, codestral, sonnet, claude, etc.)
/clear                 Clear conversation history
/copy                  Copy last response to clipboard
/keys set <provider> <key>   Set an API key
/keys show             Show configured providers
/help                  Show all commands
/quit                  Exit MAUDE`}</Pre>
          </section>

          {/* Ports */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Reference
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Ports &amp; Services
            </h2>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              <PortRow port="30000" service="Gateway (HTTPS)" note="Remote clients, mobile app" />
              <PortRow port="30080" service="Gateway (HTTP)" note="Local clients, internal API" />
              <PortRow port="30010" service="llama-server" note="Nemotron local inference" />
              <PortRow port="30002" service="File Server" note="File transfers" />
              <PortRow port="8998" service="PersonaPlex" note="Voice server (WebSocket)" />
            </div>
          </section>

          {/* Configuration */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Reference
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Configuration Files
            </h2>
            <Pre>{`variables.env              API keys (MISTRAL, CODESTRAL, CLAUDE, OPEN_ROUTER)
~/.config/maude/keys.json  API keys (managed via /keys command)
credentials.json           Google OAuth 2.0 client credentials
certs/cert.pem             SSL certificate (enables HTTPS on gateway)
certs/key.pem              SSL private key
~/.config/maude/browser_data/  Persistent browser session data
~/.config/maude/memory.db  Persistent memory (SQLite)
data/conversations/        Conversation history (JSON)`}</Pre>
          </section>

          {/* Launcher */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Reference
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Launcher Commands
            </h2>
            <Pre>{`./maude          Start all services + open TUI
./maude -n       Start services in background only
./maude stop     Stop all services
./maude status   Show what's running`}</Pre>
            <div className="text-[var(--text-secondary)]" style={{ lineHeight: 1.8, marginTop: "1rem" }}>
              <p>
                Background services run in named tmux sessions. The TUI runs in
                the foreground so terminal copy/paste works normally. Press{" "}
                <code className="text-[var(--accent)]">Ctrl+C</code> to exit the
                TUI &mdash; services keep running.
              </p>
            </div>
          </section>

          {/* Client Interfaces */}
          <section>
            <p
              className="text-xs tracking-[0.3em] uppercase font-[family-name:var(--font-geist-mono)]"
              style={{ color: "var(--accent)", marginBottom: "0.5rem" }}
            >
              Clients
            </p>
            <h2 className="text-2xl font-semibold" style={{ marginBottom: "1rem" }}>
              Client Interfaces
            </h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {[
                { name: "Server TUI", desc: "Rich Console chat with prompt_toolkit input, tool traces, thinking spinner. Runs on the server via ./maude." },
                { name: "Mac / PC / Linux CLI", desc: "pip install maude-client. Connects over Tailscale. Braille spinner, trace visualization, conversation sync." },
                { name: "iOS & Android App", desc: "React + Capacitor native app. Voice chat, SSH terminal, file manager, browser, Telegram viewer." },
                { name: "Telegram Bot", desc: "Full tool access via Telegram. Photo analysis, tool execution, cross-channel sync." },
                { name: "Web Dashboard", desc: "Command Center with system monitoring, conversation history, and scheduled task management." },
              ].map((c) => (
                <div
                  key={c.name}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--surface-border)",
                    borderRadius: "0.5rem",
                    padding: "1rem 1.25rem",
                  }}
                >
                  <h3 className="font-semibold" style={{ marginBottom: "0.25rem" }}>
                    {c.name}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{c.desc}</p>
                </div>
              ))}
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

function ModelRow({ name, model, provider, note }: { name: string; model: string; provider: string; note: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border)",
        borderRadius: "0.5rem",
        padding: "0.75rem 1.25rem",
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "0.5rem",
        alignItems: "baseline",
      }}
    >
      <code className="text-[var(--accent)] font-[family-name:var(--font-geist-mono)] text-sm">
        {name}
      </code>
      <div>
        <span className="font-semibold text-sm">{model}</span>
        <span className="text-[var(--text-muted)] text-sm"> &mdash; {provider}</span>
        <p className="text-xs text-[var(--text-secondary)]" style={{ marginTop: "0.125rem" }}>{note}</p>
      </div>
    </div>
  );
}

function ToolCard({ title, tools }: { title: string; tools: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border)",
        borderRadius: "0.5rem",
        padding: "0.75rem 1rem",
      }}
    >
      <h3 className="text-sm font-semibold text-[var(--accent)]" style={{ marginBottom: "0.25rem" }}>
        {title}
      </h3>
      <p className="text-xs text-[var(--text-secondary)]">{tools}</p>
    </div>
  );
}

function PortRow({ port, service, note }: { port: string; service: string; note: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--surface-border)",
        borderRadius: "0.5rem",
        padding: "0.75rem 1.25rem",
        display: "grid",
        gridTemplateColumns: "80px 1fr",
        gap: "0.5rem",
        alignItems: "baseline",
      }}
    >
      <code className="text-[var(--accent)] font-[family-name:var(--font-geist-mono)] text-sm">
        {port}
      </code>
      <div>
        <span className="font-semibold text-sm">{service}</span>
        <span className="text-[var(--text-muted)] text-sm"> &mdash; {note}</span>
      </div>
    </div>
  );
}

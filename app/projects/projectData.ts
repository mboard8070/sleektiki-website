export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  hero: string;
  gallery: { src: string; alt: string }[];
  links: { label: string; url: string }[];
  youtubeIds?: string[];
  features?: { title: string; description: string }[];
  trainingPairs?: { sketch: string; generated: string; label: string }[];
  splatEmbeds?: { name: string; marbleUrl: string; thumbnail: string }[];
  panoramas?: { src: string; alt: string }[];
  heroPosition?: string;
  changelog?: { version: string; date: string; notes: string }[];
  caseStudy?: CaseStudySection[];
  architectureDiagram?: string;
}

const projects: ProjectDetail[] = [
  {
    slug: "maude",
  title: "MAUDE",
  subtitle: "Multi-Agent Unified Dispatch Engine",
  heroPosition: "left top",
  description: [
    "MAUDE is a full-stack AI operating environment running on the NVIDIA DGX Spark. It coordinates 10+ specialized models through a unified gateway — routing between local inference (Nemotron), cloud code generation (Codestral, Devstral), vision analysis (LLaVA), and frontier reasoning (Claude, Mistral) based on task requirements.",
    "Over 100 tools span file operations, web browsing, Google Workspace (Gmail, Drive, Sheets, Calendar, Slides, Contacts, YouTube), GitHub (PRs, issues, CI/CD, releases), browser automation, image generation, social media posting, and system monitoring. Tools are dynamically filtered per message to minimize token usage.",
    "The system runs across five client interfaces — a server TUI on the Spark, a pip-installable Mac/PC/Linux CLI, a native iOS & Android app, a Telegram bot, and a web dashboard — all connected over Tailscale VPN through a single gateway that handles SSE streaming, WebSocket terminal/voice proxying, file transfers, and tool execution loops."
  ],
  tags: ["Nemotron", "Codestral", "Claude", "Mistral", "Devstral", "LLaVA", "Whisper", "Tailscale", "Docker", "Python", "React", "Capacitor"],
  hero: "/images/projects/maude.png",
  gallery: [
    { src: "/images/projects/maude.png", alt: "MAUDE Server TUI" },
    { src: "/images/projects/maude-client.png", alt: "MAUDE Client on Mac" }
  ],
  architectureDiagram: "/images/projects/maude-architecture.svg",
  caseStudy: [
    {
      heading: "The Problem",
      body: "Every commercial AI assistant locks you into one model, one provider, and their cloud. If you want Claude's reasoning, Mistral's speed, and a local model for privacy — you need three different apps, three billing accounts, and no shared context between them. For a power user who wants AI integrated into their actual workflow (files, email, calendar, code, devices), the gap between what chatbots offer and what's needed is enormous."
    },
    {
      heading: "Design Challenge",
      body: "How do you build a single AI interface that spans 10+ models, 100+ tools, five client surfaces (desktop TUI, CLI, mobile app, Telegram bot, web dashboard), and multiple physical machines — without the complexity leaking through to the user? The user should say what they want and the system should figure out which model, which tools, and which machine to use."
    },
    {
      heading: "Key Design Decisions",
      body: "The central architectural choice was a unified gateway that absorbs all complexity. Every client connects to one endpoint. The gateway resolves model aliases, translates between API formats (OpenAI vs. Anthropic), executes tools server-side, manages context windows, and streams results back with optional trace visibility. Tool selection is dynamic — keyword filtering on each message activates only relevant tools, keeping token usage 30-40% lower than sending the full 100+ tool catalog. For the mobile app, I designed collapsible tool execution traces: power users can see exactly what the AI is doing (which tools it called, what it found, how long it took), while casual users see only the final response."
    },
    {
      heading: "Outcome",
      body: "MAUDE is my daily-driver AI system, running 24/7 on a DGX Spark with clients on Mac, iPhone, and Windows. It handles email triage, calendar management, code generation, file operations, web research, image generation, social media posting, and cross-machine task dispatch. The autonomous builder (Forge) can scaffold and deploy complete web applications in Docker sandboxes with zero human intervention."
    }
  ],
  features: [
    {
      title: "Multi-Model Gateway",
      description: "A Python gateway on port 30000 routes all traffic — 10+ LLM models (Mistral, Codestral, Devstral, Nemotron, Claude Opus, Claude Sonnet, LLaVA), WebSocket proxying for SSH terminal and voice, file transfers, tool execution loops, and SSE streaming with real-time pipeline traces. Models are resolved via short aliases with per-model context window awareness."
    },
    {
      title: "100+ LLM-Callable Tools",
      description: "File operations, shell execution, web search & browsing, image generation (FLUX + LoRA), vision analysis, browser automation (Playwright), and AI delegation to frontier models. Dynamic keyword-based tool filtering reduces context window usage by 30-40% per request."
    },
    {
      title: "Google Workspace Integration",
      description: "30+ tools for Gmail (read, compose, send), Drive (search, upload, create docs/sheets/folders), Sheets (read, write, append), Calendar (events, search), Slides (create, edit), Contacts (CRUD, search), and YouTube (search, playlists, comments). Full OAuth 2.0 with verified domain"
    },
    {
      title: "GitHub Integration",
      description: "25+ tools for pull requests (create, review, merge, diff, comment), issues (create, close, comment), repositories, branches, commits, CI/CD workflow runs (view, re-run), releases, code search, and notifications."
    },
    {
      title: "Forge \u2014 Autonomous Builder",
      description: "Plan \u2192 Execute \u2192 Verify \u2192 Fix loop with mandatory verification. Builds software autonomously in a Docker sandbox (Ubuntu 24.04, Python 3.12, Node 22, Go 1.22). Automatic model escalation from free local Nemotron to Codestral to Mistral. Budget-capped token tracking with blueprint templates for web apps, APIs, AI tools, and SaaS MVPs."
    },
    {
      title: "Cross-Machine Collaboration",
      description: "Dispatch tasks to remote clients over Tailscale mesh. Presence heartbeats track online devices with activity snapshots. Project management with task assignment, file sharing, and cross-machine shell execution. Target resolution by client ID, hostname, or platform name."
    },
    {
      title: "Voice Mode",
      description: "Speech-to-speech via Nemotron ASR (0.6B) for transcription and Magpie TTS (357M) for synthesis. Opus-encoded audio input over WebSocket (24kHz), PCM float32 output (24kHz). Binary protocol: 0x00 handshake, 0x01 audio-in, 0x02 text, 0x03 audio-out. Continuous listening mode with camera capture during voice calls for image context via LLaVA."
    },
    {
      title: "Persistent Memory",
      description: "SQLite-backed memory with semantic search via nomic-embed-text embeddings. Stores facts, preferences, people, tasks, and conversation context across sessions. Automatic memory injection into prompts based on relevance. Access counting tracks memory importance over time."
    },
    {
      title: "Five Client Interfaces",
      description: "Server TUI (Textual) on the Spark, pip-installable Mac/PC/Linux CLI with braille spinner and trace visualization, native iOS & Android app (React + Capacitor) with voice/terminal/browser/file manager, Telegram bot with full tool access, and a web-based Command Center dashboard."
    },
    {
      title: "Command Center",
      description: "Real-time system monitoring module: CPU, RAM, disk, GPU temperature and utilization, VRAM usage by process, conversation sessions across channels, activity feed, scheduled task status, and mesh node health. Available as both LLM-callable tools and a dedicated mobile app view with auto-refresh."
    },
    {
      title: "Scheduled Tasks & Agents",
      description: "Cron-based task scheduler with natural language parsing, persistent storage, and automatic execution. Specialized subagents (code, research, writer, reasoning, search) can be dispatched in parallel with tool inheritance and result aggregation."
    },
    {
      title: "Security & Sandbox Isolation",
      description: "Docker containerization for autonomous builds with resource limits (8GB RAM, 4 CPUs, 256 PID max). Client allowlist via authorized.json. Tailscale VPN for encrypted mesh networking. Local-first inference keeps data on-device. Optional cloud escalation with explicit delegation."
    },
    {
      title: "Browser Automation",
      description: "Playwright-based headless browser with 9 tools: open, navigate, click, type, fill forms, select dropdowns, screenshot, extract content, and close. Persistent session data with 5-minute inactivity timeout."
    },
    {
      title: "Social Media & Publishing",
      description: "Post to Twitter/X, LinkedIn, and Bluesky with image attachments and platform-specific formatting. Substack integration for draft creation, editing, publishing, and statistics tracking. Rate limit enforcement per platform."
    },
    {
      title: "Image Generation",
      description: "FLUX image generation via ComfyUI with LoRA support (Stillion style, marker-mech style). Configurable prompt, dimensions, seed, and steps. Generated images delivered to the shared folder with markdown preview. Mesh router auto-discovers ComfyUI across the network."
    },
    {
      title: "Best Practice Guides",
      description: "10 markdown reference guides (coding, website design, graphic design, color theory, writing, API design, prompt engineering, image generation, cybersecurity, web UI/UX patterns) automatically injected into the system prompt based on keyword triggers in the user\u2019s message. Max 2 guides per turn to keep context focused. Gives the model domain expertise on demand without permanent context bloat."
    },
    {
      title: "Skills Plugin System",
      description: "Python-based plugin framework with @skill decorator registration. Each skill is exposed as an OpenAI-compatible tool with typed parameters and JSON schema. Built-in skills include weather, calculator, stocks, screenshots, datetime utilities, notes, and system info. User-installable skills via ~/.config/maude/skills/. Enable, disable, and reload at runtime via /skills command."
    }
  ],
  links: [
    { label: "Setup Guide", url: "/projects/maude/setup" },
    { label: "Documentation", url: "/projects/maude/docs" },
    { label: "GitHub", url: "https://github.com/mboard8070/terminal-llm" },
    { label: "Privacy Policy", url: "/privacy" },
    { label: "Terms of Service", url: "/terms" }
  ],
  changelog: [
    { version: "v0.5.0", date: "2026-01-15", notes: "Added support for Nemotron 3 VoiceChat NIM; improved voice latency; added new tools for Google Workspace and GitHub." },
    { version: "v0.4.2", date: "2025-12-01", notes: "Fixed memory leak in persistent memory subsystem; added braille spinner to CLI; improved Tailscale reconnection logic." },
    { version: "v0.4.0", date: "2025-10-20", notes: "Initial public release with core features: multi-model gateway, 100+ tools, voice mode, persistent memory, and five client interfaces." }
  ]
  },
  {
    slug: "maude-mobile",
  title: "MAUDE Mobile",
  subtitle: "Native iOS & Android Companion App",
  description: [
    "A native iOS and Android companion app that connects to MAUDE on the DGX Spark over Tailscale. Provides full voice chat, text conversation, SSH terminal, file management, and a built-in web browser — all routed through a single gateway on port 30000.",
    "Seven modules in one app: AI chat with tool execution, full-duplex voice calls with live waveform visualization using PersonaPlex, SSH terminal via xterm.js over WebSocket PTY, web browser proxied through the Spark, Telegram message viewer, shared file manager with camera upload, and a settings panel with theme switching and model selection.",
    "The retro 80s Amber CRT theme shown here is one of three selectable themes. Built with React, Ionic Capacitor, and Tailwind CSS — a single TypeScript codebase compiled to native iOS and Android apps. Voice uses Opus-encoded audio streaming over WebSocket with scheduled-playback buffering for click-free audio on mobile."
  ],
  tags: ["React", "Capacitor", "Tailwind", "WebSocket", "Opus Codec", "PersonaPlex", "xterm.js"],
  hero: "/images/projects/maude-mobile.png",
  gallery: [
    { src: "/images/projects/maude-mobile.png", alt: "MAUDE Mobile — Home Screen" },
    { src: "/images/projects/maude-mobile-voice.png", alt: "MAUDE Mobile — Voice Chat" },
    { src: "/images/projects/maude-mobile-settings.png", alt: "MAUDE Mobile — Settings" }
  ],
  caseStudy: [
    {
      heading: "The Problem",
      body: "MAUDE runs on a DGX Spark at home, but I need to use it everywhere — from the couch, on a walk, at a coffee shop. SSH into a terminal TUI from a phone is technically possible but terrible UX. And voice interaction, file sharing, and camera integration don't work through a terminal."
    },
    {
      heading: "Design Challenge",
      body: "How do you fit seven distinct capabilities — AI chat, voice calls, SSH terminal, web browser, messaging, file management, and system settings — into a single mobile app without it feeling like a Swiss Army knife that does everything poorly? Each module has fundamentally different interaction patterns: chat is conversational, voice is real-time streaming, terminal is keyboard-intensive, files are spatial."
    },
    {
      heading: "Key Design Decisions",
      body: "Rather than tabs or a hamburger menu hiding modules, I designed a home screen that surfaces the most-used modules prominently with real-time status indicators (gateway connection, active model, unread messages). Each module opens full-screen with its own optimized UI. The critical decision was making tool execution visible but optional in the chat view — a collapsible trace panel shows what MAUDE is doing (reading files, searching the web, calling APIs) so you understand the AI's reasoning without the noise overwhelming the conversation. For voice, I implemented scheduled-playback buffering with Opus encoding to eliminate the audio clicks that plague WebSocket streaming on mobile."
    },
    {
      heading: "Outcome",
      body: "Shipped as a native iOS and Android app from a single TypeScript codebase (React, Ionic Capacitor, Tailwind). Three selectable themes including an 80s Amber CRT mode. Full remote access to every MAUDE capability from a phone over Tailscale VPN."
    }
  ],
  features: [
    {
      title: "Voice Chat",
      description: "Full-duplex voice conversation via PersonaPlex. Opus-encoded audio streams over WebSocket with scheduled-playback buffering for click-free audio on mobile. Supports camera capture during calls — LLaVA analyzes the photo and the voice session reconnects with image context injected into the prompt."
    },
    {
      title: "Gateway Proxy",
      description: "A single Python HTTP server on port 30000 routes all traffic: multi-model LLM requests (Mistral, Codestral, Nemotron, LLaVA), WebSocket proxying for terminal and voice, file upload/download, image analysis via the /api/analyze-image endpoint, and static PWA hosting."
    },
    {
      title: "SSH Terminal",
      description: "Full terminal access via xterm.js running over a WebSocket PTY connection. Run commands, edit files, and manage the DGX Spark directly from the phone."
    },
    {
      title: "File Manager",
      description: "Browse, upload, and download files on the Spark. Camera integration lets you snap a photo and upload it directly. Shared storage accessible from all MAUDE interfaces."
    }
  ],
  links: [],
  changelog: [
    { version: "v1.2.0", date: "2026-01-12", notes: "Added support for Nemotron 3 VoiceChat NIM; improved voice latency; added new model selection UI." },
    { version: "v1.1.0", date: "2025-11-20", notes: "Introduced three selectable themes (Amber CRT, Matrix Green, Classic Black); added background voice service; improved file upload reliability." },
    { version: "v1.0.0", date: "2025-09-15", notes: "Initial release with core modules: AI chat, voice calls, SSH terminal, file manager, web browser proxy, Telegram viewer, and settings." }
  ]
  },
  {
    slug: "tessera",
    title: "Tessera",
    subtitle: "AI-Powered Academic Literature Review",
    description: [
      "Tessera is an AI-powered academic literature review platform that searches five major databases — Semantic Scholar, arXiv, OpenAlex, CrossRef, and PubMed — to find relevant research papers.",
      "It generates structured paper summaries and cross-paper literature syntheses, visualizes citation networks with relationship classification, and extracts findings, methods, gaps, and conclusions into a searchable knowledge base.",
      "Results can be exported as BibTeX, JSON, or a deployable static website. The interactive citation graph lets you explore how papers relate to each other, identifying clusters, influential works, and research gaps.",
    ],
    tags: ["Next.js", "React", "SQLite", "LLM", "Semantic Scholar", "arXiv", "OpenAlex", "PubMed"],
    hero: "/images/projects/tessera.png",
    gallery: [
      { src: "/images/projects/tessera.png", alt: "Tessera — Dashboard" },
      { src: "/images/projects/tessera-paper.png", alt: "Tessera — Paper Detail" },
      { src: "/images/projects/tessera-graph.png", alt: "Tessera — Citation Graph" },
      { src: "/images/projects/tessera-synthesis.png", alt: "Tessera — Literature Synthesis" },
      { src: "/images/projects/tessera-knowledge.png", alt: "Tessera — Knowledge Base" },
      { src: "/images/projects/tessera-collection.png", alt: "Tessera — Collection Detail" },
    ],
    features: [
      {
        title: "Federated Search",
        description: "Search across Semantic Scholar, arXiv, OpenAlex, CrossRef, and PubMed simultaneously. Results are deduplicated and ranked by relevance.",
      },
      {
        title: "AI Summaries & Synthesis",
        description: "Each paper gets a structured AI-generated summary. Collections of papers get cross-paper synthesis identifying themes, agreements, contradictions, and research gaps.",
      },
      {
        title: "Citation Graph",
        description: "Interactive visualization of how papers cite each other. Relationship types are classified (supports, contradicts, extends, etc.) for richer understanding of the research landscape.",
      },
      {
        title: "Knowledge Extraction",
        description: "Automatically extracts findings, methods, gaps, and conclusions from papers into a searchable knowledge base. Export as BibTeX, JSON, or a deployable static website.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mboard8070/tessera" },
    ],
  },
  {
    slug: "article-gen",
    title: "Article-Gen",
    subtitle: "Multi-Modal AI Content Generation",
    description: [
      "A multi-modal AI content generation platform that creates professional articles with AI-generated images and publishes them directly to Substack.",
      "Article-Gen auto-generates articles from trending news topics, creates three contextual images per article via Flux.1-dev, and adds AI image captioning with the LLaVA vision model. A custom prompt mode provides full creative control over article topics and style.",
      "The writing style is fine-tunable via LoRA on Gemma 2 9B, letting you train the model on your own writing samples for a personalized voice. One-click publishing to Substack streamlines the entire workflow from ideation to publication.",
    ],
    tags: ["Gemma 2 9B", "Flux.1-dev", "LLaVA", "Streamlit", "NVIDIA GPU", "LoRA"],
    hero: "/images/projects/article-gen.png",
    gallery: [
      { src: "/images/projects/article-gen.png", alt: "Article-Gen — Auto Mode" },
      { src: "/images/projects/article-gen-custom.png", alt: "Article-Gen — Custom Prompts" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mboard8070/article-gen" },
      { label: "Substack", url: "https://substack.com/@matthewboard" },
    ],
  },
  {
    slug: "pixelus",
    title: "Pixelus",
    subtitle: "AI Product Placement Platform",
    description: [
      "An AI-powered product placement platform that generates photorealistic brand scenes from a single product photo. Upload a product image, select a scene style, and Pixelus composites the product into a professionally lit environment using AI inpainting and depth-aware blending.",
      "Designed for e-commerce, social media, and marketing teams who need studio-quality product shots without the studio. The platform handles background generation, lighting matching, shadow casting, and seamless compositing automatically.",
      "Deployed on Railway with a Next.js frontend. The AI pipeline uses FLUX for scene generation with inpainting for precise product placement and depth estimation for realistic spatial integration.",
    ],
    tags: ["FLUX", "Inpainting", "Depth Estimation", "Next.js", "Railway", "Python"],
    hero: "/images/projects/pixelus.png",
    gallery: [
      { src: "/images/projects/pixelus.png", alt: "Pixelus — Landing" },
      { src: "/images/projects/pixelus-compose.png", alt: "Pixelus — Compose Scene" },
      { src: "/images/projects/pixelus-sneaker.png", alt: "Pixelus — Sneaker Product Shot" },
      { src: "/images/projects/pixelus-watch.png", alt: "Pixelus — Watch Product Shot" },
    ],
    links: [
      { label: "Pixelus.io", url: "https://pixelus.io" },
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body: "E-commerce and CPG marketing teams need studio-quality product photography for every SKU across dozens of scenes — lifestyle, seasonal, social media crops. Traditional photoshoots cost $500–2,000 per setup and take weeks to schedule. Existing AI tools (Photoroom, Pebblely) offer simple background removal and templates, but they can't maintain product fidelity — logos warp, labels blur, proportions shift. Marketers don't trust the output enough to use it in paid campaigns."
      },
      {
        heading: "Design Challenge",
        body: "How do you let a non-technical marketer generate photorealistic product scenes using AI, when the AI itself is unpredictable? Image generation quality varies wildly between runs. Users don't know how to write effective prompts. And the product — the one thing that must be pixel-perfect — is the hardest part for generative models to preserve."
      },
      {
        heading: "Key Design Decisions",
        body: "The core insight was separating what the AI controls from what it doesn't. The product image is never regenerated — it's composited into AI-generated scenes using inpainting and depth-aware blending, so logos and labels stay sharp. To solve the prompt literacy gap, I built a refinement layer using Claude's API: the user describes what they want in plain language, Claude rewrites it into an effective generation prompt, and the user sees both versions. This built trust — users could see exactly how their intent was being interpreted before spending a credit. Quality evaluation is also AI-assisted: Claude scores each output on composition, lighting match, and product integration, surfacing the best results first."
      },
      {
        heading: "Outcome",
        body: "Shipped as a production SaaS at pixelus.io with Stripe billing, user authentication, and a moderation system. The portfolio gallery on this site shows real platform output across automotive, footwear, watches, beverages, and cosmetics. An iOS companion app is in development with platform-specific export presets for Instagram, Amazon, and Shopify."
      }
    ],
  },
  {
    slug: "stillion-lora",
    title: "Stillion AI LoRA Trainer",
    subtitle: "FLUX LoRA Training on DGX Spark",
    description: [
      "A FLUX LoRA training application running on the NVIDIA DGX Spark. Upload a dataset of images, configure training parameters like steps, learning rate, and rank, and fine-tune FLUX image generation models through an intuitive Gradio interface.",
      "Trained models can be exported and used for custom image generation workflows. The trainer supports various dataset formats, automatic captioning, and real-time training progress monitoring with loss curves.",
      "Built for the Stillion & Board collaboration — training custom LoRAs on artistic styles to generate new works that extend the visual language of the source material.",
    ],
    tags: ["FLUX", "LoRA", "DGX Spark", "Gradio", "Python", "CUDA"],
    hero: "/images/projects/stillion-lora.png",
    gallery: [
      { src: "/images/projects/stillion-ui.png", alt: "Stillion AI — Training Interface" },
      { src: "/images/projects/stillion-train.png", alt: "Stillion AI — Training Progress" },
      { src: "/images/projects/stillion-generate.png", alt: "Stillion AI — Generation Interface" },
      { src: "/images/projects/stillion-gen1.jpg", alt: "Stillion AI — Generated Sample 1" },
      { src: "/images/projects/stillion-gen2.jpg", alt: "Stillion AI — Generated Sample 2" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mboard8070/LoRA-trainer" },
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body: "Painter Michael Stillion wanted to extend his visual language into AI-generated media for a gallery installation at the Contemporary Arts Center, Cincinnati. But LoRA training requires ML expertise — dataset curation, hyperparameter tuning, checkpoint evaluation — that a fine artist shouldn't need to learn. Existing training UIs assume technical users and expose every parameter without guidance."
      },
      {
        heading: "Design Challenge",
        body: "How do you translate artistic judgment into model training decisions? A painter knows when a generated image 'feels right' but doesn't know what learning rate or LoRA rank means. The interface needs to let the artist drive the aesthetic while the system handles the ML."
      },
      {
        heading: "Key Design Decisions",
        body: "I designed the workflow around three artist-friendly stages: curate (drag-and-drop image selection with auto-captioning), train (simplified controls with sensible defaults — the artist adjusts a 'style strength' slider instead of LoRA rank), and evaluate (side-by-side comparison of checkpoint outputs against the original paintings). Training progress shows loss curves but also periodic sample generations so the artist can see the model learning their style in real time. The system auto-saves checkpoints at intervals so the artist can pick the version that best captures their intent."
      },
      {
        heading: "Outcome",
        body: "The trained model powered a large-scale video installation at the Contemporary Arts Center, Cincinnati. Stillion was able to generate hundreds of variations extending his painting style into new compositions — poppies, face jugs, and houseflies rendered in his distinctive mark-making — without writing a single line of code or understanding the underlying ML."
      }
    ],
  },
  {
    slug: "machina-prima",
    title: "Machina Prima",
    subtitle: "LoRA-Generated Exhibit Concepts to 3D Gaussian Splats",
    description: [
      "An exhibit concept series generated using a custom marker-mech LoRA trained on 15 hand-drawn mechanical sketches. The model learned the marker rendering style and was prompted to envision spaces for a futuristic art exhibition — from gallery entrances and sculpture halls to immersive projection rooms.",
      "Each of the 11 generated rooms was then converted into a pro-quality 3D Gaussian splat via the World Labs API, auto-cleaned to remove floaters, ghost splats, and blob artifacts. The result is a fully navigable virtual exhibition space.",
      "The project bridges traditional hand-drawing with AI image generation and cutting-edge 3D reconstruction — starting from pen-on-paper sketches, through LoRA fine-tuning, to explorable 360° panoramic environments.",
    ],
    tags: ["FLUX LoRA", "Gaussian Splatting", "World Labs", "Concept Art", "3D", "Hand-Drawn"],
    hero: "/images/projects/machina-prima.png",
    gallery: [
      { src: "/images/projects/machina-01_sculpture_hall_thumb.webp", alt: "Sculpture Hall" },
      { src: "/images/projects/machina-02_suspended_installation_thumb.webp", alt: "Suspended Installation" },
      { src: "/images/projects/machina-03_projection_room_thumb.webp", alt: "Projection Room" },
      { src: "/images/projects/machina-04_rotunda_centerpiece_thumb.webp", alt: "Rotunda Centerpiece" },
      { src: "/images/projects/machina-05_grand_entrance_thumb.webp", alt: "Grand Entrance" },
      { src: "/images/projects/machina-06_west_corridor_thumb.webp", alt: "West Corridor" },
      { src: "/images/projects/machina-07_east_corridor_thumb.webp", alt: "East Corridor" },
      { src: "/images/projects/machina-08_observation_deck_thumb.webp", alt: "Observation Deck" },
      { src: "/images/projects/machina-09_underground_vault_thumb.webp", alt: "Underground Vault" },
      { src: "/images/projects/machina-10_assembly_hall_thumb.webp", alt: "Assembly Hall" },
      { src: "/images/projects/machina-11_archive_room_thumb.webp", alt: "Archive Room" },
    ],
    trainingPairs: [
      { sketch: "/images/projects/machina-sketch1.jpeg", generated: "/images/projects/machina-prima.png", label: "Sculpture Hall" },
      { sketch: "/images/projects/machina-sketch2.jpeg", generated: "/images/projects/machina-installation.png", label: "Suspended Installation" },
      { sketch: "/images/projects/machina-sketch3.jpeg", generated: "/images/projects/machina-projection.png", label: "Projection Room" },
      { sketch: "/images/projects/machina-sketch4.jpeg", generated: "/images/projects/machina-centerpiece.png", label: "Rotunda Centerpiece" },
    ],
    splatEmbeds: [
      { name: "Projection Room", marbleUrl: "/machina-room-viewer.html?room=Projection+Room", thumbnail: "/images/projects/machina-03_projection_room_thumb.webp" },
      { name: "Rotunda Centerpiece", marbleUrl: "/machina-room-viewer.html?room=Rotunda+Centerpiece", thumbnail: "/images/projects/machina-04_rotunda_centerpiece_thumb.webp" },
      { name: "Observation Deck", marbleUrl: "/machina-room-viewer.html?room=Observation+Deck", thumbnail: "/images/projects/machina-08_observation_deck_thumb.webp" },
    ],
    panoramas: [
      { src: "/images/projects/machina-pano-sculpture.png", alt: "Sculpture Hall — Panoramic Render" },
      { src: "/images/projects/machina-pano-entrance.png", alt: "Grand Entrance — Panoramic Render" },
      { src: "/images/projects/machina-pano-projection.png", alt: "Projection Room — Panoramic Render" },
      { src: "/images/projects/machina-pano-rotunda.png", alt: "Rotunda Centerpiece — Panoramic Render" },
      { src: "/images/projects/machina-pano-observation.png", alt: "Observation Deck — Panoramic Render" },
      { src: "/images/projects/machina-pano-vault.png", alt: "Underground Vault — Panoramic Render" },
    ],
    links: [],
  },
  {
    slug: "input-streamliner",
    title: "Input Streamliner",
    subtitle: "UE5 Editor Plugin \u2014 AI-Generated Input Systems",
    description: [
      "An Unreal Engine 5 editor plugin that generates complete multiplatform input configurations from natural language descriptions using a local Ollama LLM. Describe your controls conversationally and get a full input system \u2014 keyboard, mouse, gamepad, and mobile touch \u2014 with one click.",
      "Supports PC, gamepad, Mac, iOS, and Android platforms including mobile touch inputs like virtual joysticks, swipe zones, and gesture detection. Auto-configures dead zones, triggers, and axis modifiers. Generated Input Actions include runtime rebinding with JSON persistence and conflict detection.",
      "The plugin runs entirely local via Ollama \u2014 no API keys or cloud dependency. Pick from any available model, describe the controls you need in plain English, and the plugin generates Input Actions with all bindings and settings automatically configured.",
    ],
    tags: ["UE5", "C++", "Ollama", "Enhanced Input", "Slate UI", "MIT License"],
    hero: "/images/projects/input-streamliner-output.jpg",
    gallery: [
      { src: "/images/projects/input-streamliner-model.jpg", alt: "Input Streamliner \u2014 Model Selection" },
      { src: "/images/projects/input-streamliner-settings.jpg", alt: "Input Streamliner \u2014 Generated Actions & Settings" },
      { src: "/images/projects/input-streamliner-output.jpg", alt: "Input Streamliner \u2014 Generated Output" },
    ],
    features: [
      {
        title: "Natural Language Input",
        description: "Describe your controls in plain English \u2014 \"third-person game with dodge, jump, lock-on, and mobile touch\" \u2014 and the plugin generates all Input Actions with correct value types, bindings, and platform mappings.",
      },
      {
        title: "Multiplatform",
        description: "Generates bindings for keyboard, mouse, gamepad, and mobile touch simultaneously. Mobile support includes virtual joysticks, swipe zones, gesture detection, and tap inputs.",
      },
      {
        title: "Auto-Configured Settings",
        description: "Dead zones, triggers, axis modifiers, and accumulation behaviors are automatically set based on the action type. 2D axes get proper dead zones, bools get correct trigger types.",
      },
      {
        title: "Local LLM via Ollama",
        description: "Runs entirely on your machine with any Ollama model. No API keys, no cloud dependency, no data leaving your workstation.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mboard8070/InputStreamliner" },
    ],
  },
  {
    slug: "datatable-streamliner",
    title: "DataTable Streamliner",
    subtitle: "UE5 Editor Plugin \u2014 AI-Generated DataTables",
    description: [
      "An Unreal Engine 5 editor plugin that generates fully populated DataTable assets from natural language descriptions using a local Ollama LLM. Describe your data \u2014 \"12 fantasy weapons with name, damage, weight, and rarity\" \u2014 and get a complete DataTable with an AI-defined or existing struct schema.",
      "Preview generated rows in a table before committing to an asset. Append to existing DataTables with overwrite or merge options. The plugin discovers all UScriptStruct types in your project, or you can let the AI define the schema from scratch.",
      "Like Input Streamliner, runs entirely local via Ollama with no cloud dependency. Accessible from the Tools menu in the Unreal Editor.",
    ],
    tags: ["UE5", "C++", "Ollama", "DataTables", "Slate UI", "MIT License"],
    hero: "/images/projects/datatable-streamliner-assets.png",
    gallery: [
      { src: "/images/projects/datatable-streamliner-prompt.png", alt: "DataTable Streamliner \u2014 Prompt & Settings" },
      { src: "/images/projects/datatable-streamliner-preview.png", alt: "DataTable Streamliner \u2014 Data Preview" },
      { src: "/images/projects/datatable-streamliner-assets.png", alt: "DataTable Streamliner \u2014 Generated Assets" },
      { src: "/images/projects/datatable-streamliner-struct.png", alt: "DataTable Streamliner \u2014 Struct Selection" },
      { src: "/images/projects/datatable-streamliner-menu.png", alt: "DataTable Streamliner \u2014 Tools Menu" },
      { src: "/images/projects/datatable-streamliner-append.png", alt: "DataTable Streamliner \u2014 Append Mode" },
    ],
    features: [
      {
        title: "Natural Language Data Generation",
        description: "Describe your data requirements conversationally \u2014 item tables, enemy stats, dialogue entries, loot pools \u2014 and the plugin generates fully populated rows with appropriate values.",
      },
      {
        title: "AI-Defined or Existing Structs",
        description: "Let the LLM create a schema from your description, or select any existing UScriptStruct in your project. The plugin discovers all registered struct types automatically.",
      },
      {
        title: "Data Preview",
        description: "Review all generated rows in a table before creating the asset. Verify column types, values, and row count before committing.",
      },
      {
        title: "Append Mode",
        description: "Add rows to existing DataTables with overwrite or merge conflict resolution. Useful for iteratively building large datasets.",
      },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/mboard8070/DataTableStreamliner" },
    ],
  },
  {
    slug: "kamodo-steve",
    title: "Kamodo Steve: Janitor on Fire!",
    subtitle: "Solo-Developed Indie Game on Steam",
    description: [
      "A solo-developed indie game published on Steam, built in Unreal Engine. A janitor discovers the source of the poison hurting his town at a local chemical plant. Inspired by the same true story as the film Dark Waters.",
      "Features co-op multiplayer, custom character animation, hand-modeled environments with foliage systems, a custom fur shader for the bear companion character, and a full boss battle sequence. All art, code, and design by a single developer.",
      "The game world includes tropical island environments, detailed tiki architecture, bioluminescent foliage, and hand-painted texture work across dozens of unique assets.",
    ],
    tags: ["Unreal Engine", "Maya", "Substance", "Co-op", "Steam", "Solo Dev"],
    hero: "/images/projects/kamodo-steve.jpg",
    gallery: [
      { src: "/images/projects/kamodo-steve.jpg", alt: "Steam Header" },
      { src: "/images/projects/kamodo-ss1.jpg", alt: "Gameplay Screenshot" },
      { src: "/images/projects/kamodo-ss3.jpg", alt: "Environment Screenshot" },
      { src: "/images/projects/kamodo-bear.jpg", alt: "Bear Character" },
      { src: "/images/projects/kamodo-island.jpg", alt: "Island Environment" },
      { src: "/images/projects/kamodo-foliage.jpg", alt: "Foliage Detail" },
      { src: "/images/projects/kamodo-tiki.jpg", alt: "Tiki Mascot" },
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/2266180/Kamodo_Steve_Janitor_on_Fire/" },
    ],
    youtubeIds: ["isFH9XxmE2o"],
  },
  {
    slug: "stories-cores",
    title: "Stories from the Cores",
    subtitle: "Educational Game & Museum Installation",
    description: [
      "An educational game where players analyze evidence from beneath the ocean floor to unlock dramatic stories. Join science bot Rovee on expeditions with the International Ocean Discovery Program — drill core samples, compare layers, investigate hypotheses, and piece together the stories hidden in the Earth's geological record.",
      "Published on Steam for Windows, Mac, and Android. Also deployed as a museum kiosk interactive installation. The project features hand-sculpted 3D characters including a Columbian mammoth and mosasaur, custom UI design, and scientifically accurate geological data visualization.",
      "The game was designed to make real ocean science accessible to a general audience, translating complex geological concepts into engaging interactive narratives.",
    ],
    tags: ["Unreal Engine", "ZBrush", "Maya", "Substance", "Steam", "Museum", "Education"],
    hero: "/images/projects/stories-cores.jpg",
    gallery: [
      { src: "/images/projects/stories-cores.jpg", alt: "Attract Screen" },
      { src: "/images/projects/stories-ss1.jpg", alt: "Gameplay — Core Analysis" },
      { src: "/images/projects/stories-ss3.jpg", alt: "Gameplay — Expedition" },
      { src: "/images/projects/stories-mammoth.jpg", alt: "Columbian Mammoth" },
      { src: "/images/projects/stories-mosasaur.jpg", alt: "Mosasaur" },
      { src: "/images/projects/stories-rovee.jpg", alt: "Rovee Character" },
      { src: "/images/projects/stories-kiosk.jpg", alt: "Museum Kiosk" },
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/1594830/Stories_from_the_Cores/" },
    ],
    youtubeIds: ["lwt_ndeOZs4"],
  },
  {
    slug: "necessary-illusions",
    title: "Necessary Illusions",
    subtitle: "SPRING/BREAK Art Show \u2014 Los Angeles, 2022",
    description: [
      "First collaboration between Stillion & Board after six years working together, exhibited at SPRING/BREAK Art Show at Skylight Culver City, Los Angeles in February 2022.",
      "Stillion\u2019s paintings of face jugs, poppies, and houseflies evoke decomposition and the animation of inanimate objects — referencing African American pottery from 19th-century South Carolina. Board\u2019s custom software manipulates and animates the imagery through code and algorithm, creating a living dialogue between traditional painting and generative computation.",
      "Featured in the \u201cHEARSAY:HERESY\u201d themed exhibition alongside 50+ curated shows. The installation bridges physical painting with real-time digital processing, questioning the boundary between the handmade and the algorithmically generated.",
    ],
    tags: ["Painting", "Custom Software", "Interactive", "Installation", "Los Angeles"],
    hero: "/images/projects/necessary-illusions.jpg",
    gallery: [
      { src: "/images/projects/necessary-illusions.jpg", alt: "Necessary Illusions — Installation" },
    ],
    links: [],
  },
  {
    slug: "astronaut",
    title: "Astronaut",
    subtitle: "Character Art \u2014 Realistic Skin & Hair in UE5",
    description: [
      "A character study exploring realistic skin and hair rendering in Unreal Engine 5. Head textures were built layer-by-layer in Substance Painter — from blood through skin layers to a final makeup pass.",
      "Hair was crafted in XGen with guides. Rendering leveraged Metahuman eye shaders and subsurface profiles, with a ZBrush cavity map breaking up surface roughness and doubled-up normals for extra skin detail.",
      "The suit was retopologized in Modo, sculpted in ZBrush, and painted in Substance Painter. The final result demonstrates a complete character art pipeline from high-poly sculpt through real-time rendering.",
    ],
    tags: ["ZBrush", "Substance Painter", "UE5", "XGen", "Modo"],
    hero: "/images/projects/astronaut-helmet34.jpg",
    gallery: [
      { src: "/images/projects/astronaut.jpg", alt: "Full Body with Helmet" },
      { src: "/images/projects/astronaut-face.jpg", alt: "Face Detail" },
      { src: "/images/projects/astronaut-skin.jpg", alt: "Skin Detail" },
      { src: "/images/projects/astronaut-suit.jpg", alt: "Suit Detail" },
      { src: "/images/projects/astronaut-helmet.jpg", alt: "Helmet Glass" },
    ],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/matthewboard" },
    ],
  },
  {
    slug: "iggy-pop",
    title: "Iggy Pop",
    subtitle: "Digital Likeness \u2014 Sundance 2017",
    description: [
      "A digital likeness inspired by seeing Iggy Pop perform live in Chicago in 2010. Began as a personal character study and evolved into a real-time rigged model.",
      "In 2016, AST Studios licensed the character model and textures for the Oneohtrix Point Never & Iggy Pop music video \u201cThe Pure and the Damned\u201d from the motion picture Good Time, which debuted at Sundance 2017.",
      "Recently reworked for UE5 with subsurface shading, strand-based hair in XGen, repainted textures in Substance Painter, and path-traced rendering. The project spans nearly a decade of iteration, from initial ZBrush sculpt through multiple rendering pipelines.",
    ],
    tags: ["ZBrush", "XGen", "Keyshot", "Substance", "UE5", "Sundance"],
    hero: "/images/projects/iggy-pop.jpg",
    gallery: [
      { src: "/images/projects/iggy-pop.jpg", alt: "Portrait" },
      { src: "/images/projects/iggy-zbrush.jpg", alt: "ZBrush Sculpt" },
      { src: "/images/projects/iggy-xgen.jpg", alt: "XGen Hair" },
      { src: "/images/projects/iggy-keyshot.jpg", alt: "Keyshot Render" },
      { src: "/images/projects/iggy-torso.jpg", alt: "Torso Detail" },
    ],
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/matthewboard" },
    ],
  },
];

export function getProject(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export default projects;

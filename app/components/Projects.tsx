"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  category: "creative" | "ai" | "all";
  image: string;
}

const projects: Project[] = [
  {
    title: "MAUDE",
    slug: "maude",
    description:
      "Multi-Agent Unified Dispatch Engine \u2014 a local AI assistant running entirely on the NVIDIA DGX Spark. Coordinates multiple specialized models: Nemotron for reasoning, Codestral for code generation, LLaVA for vision, and Mistral for general tasks. Features voice interaction with Whisper transcription, RAG-powered memory via vector database, autonomous sandboxed code execution, Telegram bot integration, and a client/server architecture over Tailscale VPN. Fully private \u2014 all inference on-device.",
    tags: ["Nemotron", "Codestral", "LLaVA", "Whisper", "Tailscale", "SQLite"],
    category: "ai",
    image: "/images/projects/maude.png",
  },
  {
    title: "MAUDE Mobile",
    slug: "maude-mobile",
    description:
      "A native iOS and Android companion app that connects to MAUDE on the DGX Spark over Tailscale. Seven modules in one app: AI chat with tool execution, full-duplex voice calls with live waveform visualization, SSH terminal via xterm.js over WebSocket PTY, web browser proxied through the Spark, Telegram message viewer, shared file manager with camera upload, and settings with theme switching. Built with React, Ionic Capacitor, and Tailwind CSS \u2014 a single TypeScript codebase compiled to native iOS and Android apps.",
    tags: ["React", "Capacitor", "Tailwind", "WebSocket", "Opus Codec", "PersonaPlex"],
    category: "ai",
    image: "/images/projects/maude-mobile.png",
  },
  {
    title: "Pixelus",
    slug: "pixelus",
    description:
      "An AI-powered product placement platform that generates photorealistic brand scenes from a single product photo. Upload a product image, select a scene style, and Pixelus composites the product into a professionally lit environment using AI inpainting and depth-aware blending. Designed for e-commerce, social media, and marketing teams who need studio-quality product shots without the studio.",
    tags: ["FLUX", "Inpainting", "Depth Estimation", "Next.js", "Railway"],
    category: "ai",
    image: "/images/projects/pixelus.png",
  },
  {
    title: "Pixelus Mobile",
    slug: "pixelus-mobile",
    description:
      "A native iOS app that transforms product photos into lifestyle shots, editorial scenes, and platform-ready content. Upload products, choose from six creative styles, pick platform export presets with native aspect ratios, and generate full campaigns from your phone. Batch processing, on-model shots, photo editing with filters, and brand templates included. Everything runs in the cloud.",
    tags: ["SwiftUI", "iOS", "Cloud API", "Batch Processing", "Photo Editor"],
    category: "ai",
    image: "/images/projects/pixelus_screenshot_1.png",
  },
  {
    title: "Surfaced",
    slug: "surfaced",
    description:
      "A real-time PBR material generation tool that creates production-ready texture maps from text prompts. Generates base color, normal, height, roughness, metallic, emissive, and AO maps in seconds with live Three.js preview. Includes a color-to-metallic derivation engine, layer compositing, and per-channel painting.",
    tags: ["React", "Three.js", "FastAPI", "PBR", "fal.ai", "FLUX"],
    category: "ai",
    image: "/images/projects/surfaced.png",
  },
  {
    title: "Stillion AI LoRA Trainer",
    slug: "stillion-lora",
    description:
      "A FLUX LoRA training application running on the DGX Spark. Upload a dataset of images, configure training parameters like steps, learning rate, and rank, and fine-tune FLUX image generation models through an intuitive Gradio interface. Trained models can be exported and used for custom image generation workflows. Built for the Stillion & Board collaboration.",
    tags: ["FLUX", "LoRA", "DGX Spark", "Gradio", "Python"],
    category: "ai",
    image: "/images/projects/stillion-lora.png",
  },
  {
    title: "Arch-Viz",
    slug: "arch-viz",
    description:
      "AI-generated photorealistic architectural visualizations for real estate marketing, hospitality branding, and large-scale development presentations. Beachfront residences, urban towers, hotel interiors, and desert resorts, all from text prompts.",
    tags: ["Flux 2 Dev", "Architectural Visualization", "Prompt Engineering"],
    category: "creative",
    image: "/images/portfolio/01_beachfront_residential_golden_hour.png",
  },
  {
    title: "Machina Prima",
    slug: "machina-prima",
    description:
      "An exhibit concept series generated using a custom marker-mech LoRA trained on 15 hand-drawn mechanical sketches. The model learned the marker rendering style and was prompted to envision spaces for a futuristic art exhibition \u2014 from gallery entrances and sculpture halls to immersive projection rooms. Each of the 11 rooms was then converted into a pro-quality 3D Gaussian splat via the World Labs API, auto-cleaned to remove floaters and artifacts, and rendered as navigable 360\u00b0 panoramas.",
    tags: ["FLUX LoRA", "Gaussian Splatting", "World Labs", "Concept Art", "3D"],
    category: "ai",
    image: "/images/projects/machina-prima.png",
  },
  {
    title: "Input Streamliner",
    slug: "input-streamliner",
    description:
      "An Unreal Engine 5 editor plugin that generates complete multiplatform input configurations from natural language descriptions using a local Ollama LLM. Describe your controls conversationally and get a full input system \u2014 keyboard, mouse, gamepad, and mobile touch \u2014 with one click. Runs entirely local, no API keys or cloud dependency.",
    tags: ["UE5", "C++", "Ollama", "Enhanced Input", "Slate UI"],
    category: "ai",
    image: "/images/projects/input-streamliner-output.jpg",
  },
  {
    title: "DataTable Streamliner",
    slug: "datatable-streamliner",
    description:
      "An Unreal Engine 5 editor plugin that generates fully populated DataTable assets from natural language descriptions using a local Ollama LLM. Describe your data \u2014 \"12 fantasy weapons with name, damage, weight, and rarity\" \u2014 and get a complete DataTable with an AI-defined or existing struct schema. Preview rows before generating, append to existing tables.",
    tags: ["UE5", "C++", "Ollama", "DataTables", "Slate UI"],
    category: "ai",
    image: "/images/projects/datatable-streamliner-assets.png",
  },
  {
    title: "Kamodo Steve: Janitor on Fire!",
    slug: "kamodo-steve",
    description:
      "A solo-developed indie game published on Steam, built in Unreal Engine. A janitor discovers the source of the poison hurting his town at a local chemical plant. Inspired by the same true story as the film Dark Waters. Features co-op multiplayer, custom character animation, hand-modeled environments with foliage systems, and a full boss battle sequence. All art, code, and design by a single developer.",
    tags: ["Unreal Engine", "Maya", "Substance", "Co-op", "Steam", "Solo Dev"],
    category: "creative",
    image: "/images/projects/kamodo-steve.jpg",
  },
  {
    title: "Stories from the Cores",
    slug: "stories-cores",
    description:
      "An educational game where players analyze evidence from beneath the ocean floor to unlock dramatic stories. Join science bot Rovee on expeditions with the International Ocean Discovery Program \u2014 drill core samples, compare layers, investigate hypotheses, and piece together the stories hidden in the Earth\u2019s geological record. Published on Steam for Windows, Mac, and Android. Also deployed as a museum kiosk interactive installation.",
    tags: ["Unreal Engine", "ZBrush", "Maya", "Substance", "Steam", "Museum"],
    category: "creative",
    image: "/images/projects/stories-cores.jpg",
  },
  {
    title: "Necessary Illusions",
    slug: "necessary-illusions",
    description:
      "First collaboration between Stillion & Board after six years working together, exhibited at SPRING/BREAK Art Show at Skylight Culver City, Los Angeles in February 2022. Stillion\u2019s paintings of face jugs, poppies, and houseflies evoke decomposition and the animation of inanimate objects \u2014 referencing African American pottery from 19th-century South Carolina. Board\u2019s custom software manipulates and animates the imagery through code and algorithm. Featured in the \u201cHEARSAY:HERESY\u201d themed exhibition alongside 50+ curated shows.",
    tags: ["Painting", "Custom Software", "Interactive", "Installation", "LA"],
    category: "creative",
    image: "/images/projects/necessary-illusions.jpg",
  },
  {
    title: "Astronaut",
    slug: "astronaut",
    description:
      "A character study exploring realistic skin and hair rendering in Unreal Engine 5. Head textures were built layer-by-layer in Substance Painter \u2014 from blood through skin layers to a final makeup pass. Hair was crafted in XGen with guides. Rendering leveraged Metahuman eye shaders and subsurface profiles, with a ZBrush cavity map breaking up surface roughness and doubled-up normals for extra skin detail. The suit was retopologized in Modo, sculpted in ZBrush, and painted in Substance Painter.",
    tags: ["ZBrush", "Substance Painter", "UE5", "XGen", "Modo"],
    category: "creative",
    image: "/images/projects/astronaut-helmet34.jpg",
  },
  {
    title: "Iggy Pop",
    slug: "iggy-pop",
    description:
      "A digital likeness inspired by seeing Iggy Pop perform live in Chicago in 2010. Began as a personal character study and evolved into a real-time rigged model. In 2016, AST Studios licensed the character model and textures for the Oneohtrix Point Never & Iggy Pop music video \u201cThe Pure and the Damned\u201d from the motion picture Good Time, which debuted at Sundance 2017. Recently reworked for UE5 with subsurface shading, strand-based hair in XGen, repainted textures in Substance Painter, and path-traced rendering.",
    tags: ["ZBrush", "XGen", "Keyshot", "Substance", "UE5", "Sundance"],
    category: "creative",
    image: "/images/projects/iggy-pop.jpg",
  },
  {
    title: "Tessera",
    slug: "tessera",
    description:
      "An AI-powered academic literature review platform that searches five major databases \u2014 Semantic Scholar, arXiv, OpenAlex, CrossRef, and PubMed. Generates structured paper summaries and cross-paper literature syntheses, visualizes citation networks with relationship classification, and extracts findings, methods, gaps, and conclusions into a searchable knowledge base. Export as BibTeX, JSON, or a deployable static website.",
    tags: ["Next.js", "React", "SQLite", "LLM", "Semantic Scholar", "arXiv"],
    category: "ai",
    image: "/images/projects/tessera.png",
  },
  {
    title: "Article-Gen",
    slug: "article-gen",
    description:
      "A multi-modal AI content generation platform that creates professional articles with AI-generated images and publishes directly to Substack. Auto-generates articles from trending news topics, creates three contextual images per article via Flux.1-dev, adds AI image captioning with LLaVA vision model, and supports custom prompt mode for full creative control. Writing style is fine-tunable via LoRA on Gemma 2 9B.",
    tags: ["Gemma 2 9B", "Flux.1-dev", "LLaVA", "Streamlit", "NVIDIA GPU"],
    category: "ai",
    image: "/images/projects/article-gen.png",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "creative", label: "Creative" },
  { key: "ai", label: "AI & Tools" },
] as const;

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "creative" | "ai">("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative px-6 border-t border-[var(--surface-border)]" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="02 / Projects"
          title="Selected Work"
          subtitle="A selection of games, art, installations, and AI tools."
        />

        {/* Filter tabs */}
        <ScrollReveal delay={0.1} style={{ marginBottom: "4rem" }}>
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-6 py-3 text-xs rounded-full font-[family-name:var(--font-geist-mono)] tracking-wide transition-all duration-200 ${
                  filter === f.key
                    ? "bg-[var(--accent)] text-[var(--background)] shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                    : "bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--surface-border)] hover:border-[var(--accent)]/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <Link href={`/projects/${project.slug}`} className="block h-full">
      <div className="group relative h-full rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] transition-all duration-300 hover:border-[var(--accent)]/20 card-glow gradient-border cursor-pointer" style={{ padding: "1.5rem" }}>
        {/* Thumbnail */}
        <div className="w-full h-44 rounded-lg bg-[var(--surface-light)] overflow-hidden relative" style={{ marginBottom: "1.5rem" }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors duration-200"
          style={{ marginBottom: "0.75rem" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-[var(--text-secondary)]"
          style={{ lineHeight: 1.7, marginBottom: "1.25rem" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto" style={{ paddingTop: "0.25rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-[10px] rounded-md bg-[var(--surface-light)] text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      </Link>
    </ScrollReveal>
  );
}

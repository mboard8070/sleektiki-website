"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

type Lane = "production" | "enablement" | "systems" | "craft";

interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  category: Lane;
  image: string;
}

const projects: Project[] = [
  {
    title: "Pixelus",
    slug: "pixelus",
    description:
      "Product photo to campaign stills. Reference-conditioned generation with product-fidelity gates.",
    tags: ["FLUX", "ComfyUI", "Product"],
    category: "production",
    image: "/images/projects/pixelus.png",
  },
  {
    title: "Pixelus Mobile",
    slug: "pixelus-mobile",
    description:
      "iOS client for the same product pipeline: styles, platform crops, batch campaigns.",
    tags: ["iOS", "SwiftUI", "Product"],
    category: "production",
    image: "/images/projects/pixelus_screenshot_1.png",
  },
  {
    title: "Stillion AI LoRA",
    slug: "stillion-lora",
    description:
      "FLUX LoRA trainer on DGX Spark. Identity lock for the Stillion collaboration and CAC install.",
    tags: ["FLUX", "LoRA", "DGX Spark"],
    category: "production",
    image: "/images/projects/stillion-lora.png",
  },
  {
    title: "Surfaced",
    slug: "surfaced",
    description:
      "Text-to-PBR maps with a live Three.js preview. Materials a lookdev artist can drop in.",
    tags: ["PBR", "Three.js", "FastAPI"],
    category: "production",
    image: "/images/projects/surfaced.png",
  },
  {
    title: "Arch-Viz",
    slug: "arch-viz",
    description:
      "Early architectural visualization from prompts. Useful for pitch decks, not a substitute for a survey.",
    tags: ["Flux", "Arch-viz"],
    category: "production",
    image: "/images/portfolio/01_beachfront_residential_golden_hour.png",
  },
  {
    title: "Machina Prima",
    slug: "machina-prima",
    description:
      "Marker-mech LoRA to exhibit rooms, then Gaussian splats for walkable 360s.",
    tags: ["LoRA", "Splats", "Concept"],
    category: "production",
    image: "/images/projects/machina-prima.png",
  },
  {
    title: "UE5 Configurator",
    slug: "ue5-configurator",
    description:
      "Teaching demo for a trade-show configurator: meshes, materials, Common UI, gamepad.",
    tags: ["UE5", "Common UI", "Teaching"],
    category: "enablement",
    image: "/images/projects/ue5-configurator-card.jpg",
  },
  {
    title: "Input Streamliner",
    slug: "input-streamliner",
    description:
      "Unreal plugin: describe controls in English, get Enhanced Input for keyboard, pad, and touch.",
    tags: ["UE5", "C++", "Ollama"],
    category: "enablement",
    image: "/images/projects/input-streamliner-output.jpg",
  },
  {
    title: "DataTable Streamliner",
    slug: "datatable-streamliner",
    description:
      "Unreal plugin: natural language to populated DataTables. Preview before commit.",
    tags: ["UE5", "C++", "DataTables"],
    category: "enablement",
    image: "/images/projects/datatable-streamliner-assets.png",
  },
  {
    title: "Tessera",
    slug: "tessera",
    description:
      "Literature-review tool across five academic databases. Built for people who are not ML engineers.",
    tags: ["Next.js", "RAG", "Research"],
    category: "enablement",
    image: "/images/projects/tessera.png",
  },
  {
    title: "MAUDE",
    slug: "maude",
    description:
      "Local multi-agent assistant on DGX Spark. One gateway, five clients, on-device inference.",
    tags: ["Nemotron", "Tools", "Tailscale"],
    category: "systems",
    image: "/images/projects/maude.png",
  },
  {
    title: "MAUDE Mobile",
    slug: "maude-mobile",
    description:
      "iOS and Android companion: chat, voice, SSH terminal, files. One TypeScript codebase.",
    tags: ["React", "Capacitor", "Mobile"],
    category: "systems",
    image: "/images/projects/maude-mobile.png",
  },
  {
    title: "Code Assistant LoRA",
    slug: "code-assistant-lora",
    description:
      "Repo-aware Gemma adapters and language-specialist reviewers. Training and eval on Spark.",
    tags: ["LoRA", "Gemma", "SFT"],
    category: "systems",
    image: "/images/projects/code-assistant-lora-card.png",
  },
  {
    title: "Article-Gen",
    slug: "article-gen",
    description:
      "Multimodal article pipeline: Gemma writing, Flux images, Substack publish.",
    tags: ["Gemma", "Flux", "Substack"],
    category: "systems",
    image: "/images/projects/article-gen.png",
  },
  {
    title: "Kamodo Steve",
    slug: "kamodo-steve",
    description:
      "Solo Unreal game on Steam. Art, code, and design by one person.",
    tags: ["Unreal", "Steam", "Maya"],
    category: "craft",
    image: "/images/projects/kamodo-steve.jpg",
  },
  {
    title: "Stories from the Cores",
    slug: "stories-cores",
    description:
      "NSF educational game and museum kiosk. Steam, Windows, Mac, Android.",
    tags: ["Unreal", "NSF", "Museum"],
    category: "craft",
    image: "/images/projects/stories-cores.jpg",
  },
  {
    title: "Necessary Illusions",
    slug: "necessary-illusions",
    description:
      "Stillion & Board at SPRING/BREAK LA. Paintings driven by custom software.",
    tags: ["Installation", "Software", "LA"],
    category: "craft",
    image: "/images/projects/necessary-illusions.jpg",
  },
  {
    title: "Astronaut",
    slug: "astronaut",
    description:
      "UE5 character study: layered skin in Substance, XGen hair, Metahuman eyes.",
    tags: ["ZBrush", "Substance", "UE5"],
    category: "craft",
    image: "/images/projects/astronaut-helmet34.jpg",
  },
  {
    title: "Iggy Pop",
    slug: "iggy-pop",
    description:
      "Licensed likeness. AST used the model in a Sundance 2017 music video.",
    tags: ["ZBrush", "UE5", "Sundance"],
    category: "craft",
    image: "/images/projects/iggy-pop.jpg",
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "production", label: "Production" },
  { key: "enablement", label: "Enablement" },
  { key: "systems", label: "Systems" },
  { key: "craft", label: "3D & games" },
] as const;

const laneIds = new Set<Lane>([
  "production",
  "enablement",
  "systems",
  "craft",
]);

export default function Projects() {
  const [filter, setFilter] = useState<"all" | Lane>("all");

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "") as Lane | "work" | "";
      if (laneIds.has(hash as Lane)) {
        setFilter(hash as Lane);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="relative border-t border-[var(--surface-border)]"
      style={{ paddingTop: "6rem", paddingBottom: "8rem" }}
    >
      <div className="max-w-7xl mx-auto">
        <span id="production" className="block scroll-mt-24" />
        <span id="enablement" className="block scroll-mt-24" />
        <span id="systems" className="block scroll-mt-24" />
        <span id="craft" className="block scroll-mt-24" />
        <SectionHeading
          label="02 / Archive"
          title="The rest of the book"
          subtitle="Production first, then enablement, then the local systems, then shipped 3D and games. Use the filters if you only need one lane."
        />

        <ScrollReveal delay={0.05} style={{ marginBottom: "3rem" }}>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 text-xs rounded-full font-[family-name:var(--font-geist-mono)] tracking-wide transition-all duration-200 ${
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

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.24) }}
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
    <ScrollReveal delay={Math.min(index * 0.04, 0.2)}>
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div
          className="group relative h-full rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] transition-all duration-300 hover:border-[var(--accent)]/20 card-glow gradient-border cursor-pointer"
          style={{ padding: "1.5rem" }}
        >
          <div
            className="w-full h-44 rounded-lg bg-[var(--surface-light)] overflow-hidden relative"
            style={{ marginBottom: "1.25rem" }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3
            className="text-lg font-semibold group-hover:text-[var(--accent)] transition-colors duration-200"
            style={{ marginBottom: "0.5rem" }}
          >
            {project.title}
          </h3>

          <p
            className="text-sm text-[var(--text-secondary)]"
            style={{ lineHeight: 1.65, marginBottom: "1rem" }}
          >
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
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

"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

interface ShowcaseItem {
  src: string;
  videoSrc?: string;
  title: string;
  subtitle: string;
  aspect?: "video" | "square" | "portrait" | "pano";
}

// Row 1: Videos — automotive + astronaut (16:9)
const videoRow: ShowcaseItem[] = [
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
    title: "Bison Stampede",
    subtitle: "Chevrolet Colorado \u2014 Kling v3",
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    videoSrc: "/videos/escalade_red_carpet_kling3.mp4",
    title: "Red Carpet Arrival",
    subtitle: "Cadillac Escalade \u2014 Kling v3",
  },
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    videoSrc: "/videos/blazer_transition_moving_kling3.mp4",
    title: "World Transitions",
    subtitle: "Chevrolet Blazer \u2014 Kling v3",
  },
  {
    src: "/images/portfolio/astronaut_helmet34.jpg",
    videoSrc: "/videos/astronaut_light_sweep.mp4",
    title: "Astronaut Light Sweep",
    subtitle: "Character Art \u2014 UE5 Path Tracing",
  },
];

// Row 2: Cyberpunk city + creative product stills (mixed)
const creativeRow: ShowcaseItem[] = [
  {
    src: "/images/portfolio/corvette_neon_city.png",
    title: "Cyberpunk City",
    subtitle: "Chevrolet Corvette \u2014 Flux 2 Pro",
  },
  {
    src: "/images/portfolio/pixelus_sneaker.png",
    videoSrc: "/videos/pixelus_reveal_sneaker.mp4",
    title: "STRATOS X9",
    subtitle: "Product Placement \u2014 FLUX",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_cologne.png",
    videoSrc: "/videos/pixelus_reveal_cologne.mp4",
    title: "DUSK by Obsidian",
    subtitle: "Product Placement \u2014 FLUX",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_watch.png",
    videoSrc: "/videos/pixelus_reveal_watch.mp4",
    title: "MERIDIAN Chronograph",
    subtitle: "Product Placement \u2014 FLUX",
    aspect: "square",
  },
];

// Row 3: Arch viz panoramas (wide format)
const archvizRow: ShowcaseItem[] = [
  {
    src: "/images/portfolio/archviz_sculpture_hall.png",
    title: "Sculpture Hall",
    subtitle: "Machina Prima \u2014 Gaussian Splat",
    aspect: "pano",
  },
  {
    src: "/images/portfolio/archviz_projection_room.png",
    title: "Projection Room",
    subtitle: "Machina Prima \u2014 Gaussian Splat",
    aspect: "pano",
  },
  {
    src: "/images/portfolio/archviz_observation_deck.png",
    title: "Observation Deck",
    subtitle: "Machina Prima \u2014 Gaussian Splat",
    aspect: "pano",
  },
];

function VideoCard({ item }: { item: ShowcaseItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectClass =
    item.aspect === "portrait"
      ? "aspect-[9/16]"
      : item.aspect === "square"
        ? "aspect-square"
        : item.aspect === "pano"
          ? "aspect-[21/9]"
          : "aspect-video";

  return (
    <div className="group rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300">
      <div className={`relative ${aspectClass} overflow-hidden`}>
        {item.videoSrc ? (
          <video
            ref={videoRef}
            src={item.videoSrc}
            poster={item.src}
            muted
            loop
            playsInline
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div style={{ padding: "1rem" }}>
        <h3
          className="text-sm font-semibold text-[var(--text-primary)]"
          style={{ marginBottom: "0.25rem" }}
        >
          {item.title}
        </h3>
        <p className="text-xs text-[var(--text-muted)]">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section
      id="showcase"
      className="relative border-t border-[var(--surface-border)]"
      style={{ paddingTop: "8rem", paddingBottom: "4rem" }}
    >
      <div
        className="max-w-7xl mx-auto"
        style={{
          paddingLeft: "max(1.5rem, 5vw)",
          paddingRight: "max(1.5rem, 5vw)",
        }}
      >
        <SectionHeading
          label="01 / Showcase"
          title="AI-Generated Media"
          subtitle="Automotive scene generation, product placement, character lighting, and LoRA-driven architectural visualization. Hover to play."
        />

        {/* Montage hero video */}
        <ScrollReveal>
          <div
            className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)]"
            style={{ marginBottom: "2.5rem" }}
          >
            <video
              src="/videos/homepage_montage_web.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Row 1: Videos — 4 col, 16:9 */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "2rem" }}>
            {videoRow.map((item) => (
              <VideoCard key={item.title} item={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* Row 2: Cyberpunk + creative product — 4 col mixed */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ marginBottom: "2rem" }}>
            {creativeRow.map((item) => (
              <VideoCard key={item.title} item={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* Row 3: Arch viz panoramas — 3 col, ultrawide */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {archvizRow.map((item) => (
              <VideoCard key={item.title} item={item} />
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-[var(--background)] font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Full Portfolio
              <span>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

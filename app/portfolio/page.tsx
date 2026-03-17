"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background3DWrapper from "../components/Background3DWrapper";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

interface PortfolioItem {
  src: string;
  videoSrc?: string;
  title: string;
  subject: string;
  scene: string;
  model: string;
  tags: string[];
  category: "automotive" | "product" | "sketches";
  aspect?: "video" | "square";
}

const portfolioItems: PortfolioItem[] = [
  // ═══════════════════════════════════════════
  // AUTOMOTIVE — Video
  // ═══════════════════════════════════════════
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
    title: "Bison Stampede",
    subject: "Chevrolet Colorado",
    scene: "Leading a bison stampede across the Montana prairie",
    model: "Kling v3",
    tags: ["Chevrolet", "Truck", "Video", "Action"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    videoSrc: "/videos/escalade_red_carpet_kling3.mp4",
    title: "Red Carpet Arrival",
    subject: "Cadillac Escalade",
    scene: "VIP arrival with paparazzi flashbulbs",
    model: "Kling v3",
    tags: ["Cadillac", "SUV", "Video", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    videoSrc: "/videos/blazer_transition_moving_kling3.mp4",
    title: "World Transitions",
    subject: "Chevrolet Blazer",
    scene: "Driving through rapidly shifting environments",
    model: "Kling v3",
    tags: ["Chevrolet", "SUV", "Video", "Cinematic"],
    category: "automotive",
  },
  // ═══════════════════════════════════════════
  // AUTOMOTIVE — Stills
  // ═══════════════════════════════════════════
  // Chevrolet Colorado
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    title: "Desert Canyon",
    subject: "Chevrolet Colorado",
    scene: "Golden hour at the canyon edge",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_mountain_night.png",
    title: "Mountain Night",
    subject: "Chevrolet Colorado",
    scene: "Rain-soaked forest road at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_job_site_sunrise.png",
    title: "Job Site Sunrise",
    subject: "Chevrolet Colorado",
    scene: "Mountain construction site at dawn",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Work"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Colorado",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Colorado",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Wireframe"],
    category: "automotive",
  },
  // Chevrolet Corvette
  {
    src: "/images/portfolio/corvette_coastal_sunset.png",
    title: "Coastal Sunset",
    subject: "Chevrolet Corvette",
    scene: "Pacific coast highway overlook",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_neon_city.png",
    title: "Neon City",
    subject: "Chevrolet Corvette",
    scene: "Rain-drenched neon streets at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_racetrack.png",
    title: "Racetrack",
    subject: "Chevrolet Corvette",
    scene: "Mid-corner action with tire smoke",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Action"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Corvette",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Corvette",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Wireframe"],
    category: "automotive",
  },
  // Chevrolet Blazer
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    title: "Mountain Lodge",
    subject: "Chevrolet Blazer",
    scene: "Aspen ski resort in winter",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Winter"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_autumn_road.png",
    title: "Autumn Road",
    subject: "Chevrolet Blazer",
    scene: "Fall foliage canopy drive",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Blazer",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Blazer",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Wireframe"],
    category: "automotive",
  },
  // Cadillac Lyriq
  {
    src: "/images/portfolio/lyriq_rooftop_helipad.png",
    title: "Rooftop Helipad",
    subject: "Cadillac Lyriq",
    scene: "Downtown skyline at blue hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_vineyard_estate.png",
    title: "Vineyard Estate",
    subject: "Cadillac Lyriq",
    scene: "Napa Valley golden hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_art_gallery.png",
    title: "Art Gallery",
    subject: "Cadillac Lyriq",
    scene: "Modern minimalist architecture at dusk",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Urban"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_clay.png",
    title: "Clay Render",
    subject: "Cadillac Lyriq",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Cadillac Lyriq",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Wireframe"],
    category: "automotive",
  },
  // Cadillac Escalade
  {
    src: "/images/portfolio/escalade_snow_resort.png",
    title: "Snow Resort",
    subject: "Cadillac Escalade",
    scene: "Grand ski resort valet in snowfall",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Winter"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    title: "Red Carpet",
    subject: "Cadillac Escalade",
    scene: "VIP arrival, city skyline at night",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_mansion_pool.png",
    title: "Mansion",
    subject: "Cadillac Escalade",
    scene: "Modern estate at sunset",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Luxury"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_clay.png",
    title: "Clay Render",
    subject: "Cadillac Escalade",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "SUV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Cadillac Escalade",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "SUV", "Wireframe"],
    category: "automotive",
  },

  // ═══════════════════════════════════════════
  // PRODUCT — Before & After with Wipe Videos
  // ═══════════════════════════════════════════
  {
    src: "/images/portfolio/pixelus_cologne_ba.png",
    videoSrc: "/videos/pixelus_cologne_wipe.mp4",
    title: "DUSK by Obsidian",
    subject: "Cologne",
    scene: "Driftwood on a sunset beach",
    model: "FLUX + Inpainting",
    tags: ["Fragrance", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_sneaker_ba.png",
    videoSrc: "/videos/pixelus_sneaker_wipe.mp4",
    title: "STRATOS X9",
    subject: "Sneaker",
    scene: "Neon rain-soaked Tokyo street",
    model: "FLUX + Inpainting",
    tags: ["Footwear", "Action", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_watch_ba.png",
    videoSrc: "/videos/pixelus_watch_wipe.mp4",
    title: "MERIDIAN Chronograph",
    subject: "Watch",
    scene: "Dark crystal and obsidian display",
    model: "FLUX + Inpainting",
    tags: ["Accessories", "Luxury", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_handbag_ba.png",
    videoSrc: "/videos/pixelus_handbag_wipe.mp4",
    title: "MAISON ELLE Petit",
    subject: "Handbag",
    scene: "Parisian caf\u00e9 with vintage car",
    model: "FLUX + Inpainting",
    tags: ["Fashion", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_headphones_ba.png",
    videoSrc: "/videos/pixelus_headphones_wipe.mp4",
    title: "AETHER Studio",
    subject: "Headphones",
    scene: "Recording studio mixing console",
    model: "FLUX + Inpainting",
    tags: ["Tech", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_lipstick_ba.png",
    videoSrc: "/videos/pixelus_lipstick_wipe.mp4",
    title: "VELOUR No. 7",
    subject: "Lipstick",
    scene: "Red velvet and rose petals",
    model: "FLUX + Inpainting",
    tags: ["Beauty", "Luxury", "Video"],
    category: "product",
    aspect: "square",
  },

  // ═══════════════════════════════════════════
  // SKETCHES — Hand-drawn & LoRA-generated
  // ═══════════════════════════════════════════
  // Hand-drawn marker sketches
  {
    src: "/images/portfolio/sketch_mech_01.jpeg",
    title: "Mech Studies I",
    subject: "Marker on Paper",
    scene: "Six mechanical walker concepts",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_02.jpeg",
    title: "Mech Studies II",
    subject: "Marker on Paper",
    scene: "Artillery walker and scout variants",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_03.jpeg",
    title: "Mech Studies III",
    subject: "Marker on Paper",
    scene: "Heavy combat walker designs",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_04.jpeg",
    title: "Mech Studies IV",
    subject: "Marker on Paper",
    scene: "Bipedal and quadruped variants",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  // LoRA-generated from marker style
  {
    src: "/images/portfolio/sketch_gen_sculpture_hall.png",
    title: "Sculpture Hall",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_installation.png",
    title: "Suspended Installation",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_projection.png",
    title: "Projection Room",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_centerpiece.png",
    title: "Rotunda Centerpiece",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  // Stillion LoRA-generated paintings
  {
    src: "/images/projects/stillion-gen1.jpg",
    title: "Face Jug & Poppies",
    subject: "Stillion Style LoRA",
    scene: "Generated painting in Stillion\u2019s oil style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Painting", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/projects/stillion-gen2.jpg",
    title: "Abstract Portrait",
    subject: "Stillion Style LoRA",
    scene: "Generated painting in Stillion\u2019s oil style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Painting", "Generated"],
    category: "sketches",
  },
];

const categories = [
  { key: "All", label: "All" },
  { key: "automotive", label: "Automotive" },
  { key: "product", label: "Product" },
  { key: "sketches", label: "Sketches" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  return (
    <>
      <Background3DWrapper />
      <main className="relative z-[1]">
        <Navbar />

        <section
          className="max-w-7xl mx-auto"
          style={{
            paddingLeft: "max(1.5rem, 5vw)",
            paddingRight: "max(1.5rem, 5vw)",
            paddingTop: "8rem",
            paddingBottom: "6rem",
          }}
        >
          <SectionHeading
            label="AI-Generated Portfolio"
            title="Creative Imagery"
            subtitle="Automotive scene generation, AI product placement, and LoRA-trained style transfer. Every image is AI-generated from reference photos and text prompts — no compositing or manual editing."
          />

          {/* Category filter */}
          <ScrollReveal>
            <div
              className="flex flex-wrap gap-2"
              style={{ marginBottom: "3rem" }}
            >
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${
                    filter === c.key
                      ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)]"
                      : "bg-[var(--surface)] border-[var(--surface-border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Image grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.category}-${item.title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.08)",
                  }}
                >
                  <div className={`relative overflow-hidden ${item.aspect === "square" ? "aspect-square" : "aspect-video"}`}>
                    {item.videoSrc ? (
                      <video
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
                        alt={`${item.subject} — ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3
                      className="text-base font-semibold text-[var(--text-primary)]"
                      style={{ marginBottom: "0.35rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[var(--text-secondary)]"
                      style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}
                    >
                      {item.subject} &mdash; {item.scene}
                    </p>
                    <span className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] bg-[var(--background)] px-2 py-1 rounded">
                      {item.model}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Method note */}
          <ScrollReveal>
            <div
              className="border-t border-[var(--surface-border)]"
              style={{ marginTop: "5rem", paddingTop: "3rem" }}
            >
              <h3
                className="text-lg font-semibold text-[var(--text-primary)]"
                style={{ marginBottom: "1.5rem" }}
              >
                Method
              </h3>
              <div
                className="text-[var(--text-secondary)] max-w-3xl"
                style={{ lineHeight: 1.8 }}
              >
                <p style={{ marginBottom: "1.25rem" }}>
                  <span className="text-[var(--text-primary)]">Automotive:</span>{" "}
                  Each image starts with a single reference photograph of the vehicle.
                  The reference is passed to a Flux model via Replicate&apos;s API as an
                  image prompt with configurable conditioning strength (0.4&ndash;0.55),
                  alongside a detailed scene description. Videos are generated with Kling v3 image-to-video.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  <span className="text-[var(--text-primary)]">Product:</span>{" "}
                  Product shots use FLUX scene generation with AI inpainting for precise
                  product placement and depth-aware blending. A single product photo on a white
                  background is composited into a professionally lit environment &mdash;
                  the AI handles lighting, shadows, and spatial integration automatically.
                </p>
                <p>
                  <span className="text-[var(--text-primary)]">Sketches:</span>{" "}
                  Hand-drawn marker sketches were used as training data for custom FLUX LoRAs.
                  The trained models generate new images in the learned style &mdash; from
                  architectural exhibit concepts to oil painting reproductions. No manual editing
                  is applied to the generated outputs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
            style={{ padding: "2rem" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: lightbox.aspect === "square" ? "1/1" : "16/9", maxHeight: "75vh" }}>
                {lightbox.videoSrc ? (
                  <video
                    src={lightbox.videoSrc}
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <Image
                    src={lightbox.src}
                    alt={`${lightbox.subject} — ${lightbox.title}`}
                    fill
                    sizes="100vw"
                    className="object-contain rounded-lg"
                    priority
                  />
                )}
              </div>
              <div
                className="text-center"
                style={{ marginTop: "1.5rem" }}
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {lightbox.subject} &mdash; {lightbox.title}
                </h3>
                <p
                  className="text-sm text-[var(--text-secondary)]"
                  style={{ marginTop: "0.5rem" }}
                >
                  {lightbox.scene} &middot; {lightbox.model}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center justify-center text-lg"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

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
  vehicle: string;
  scene: string;
  model: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  // Video — Chevrolet Colorado
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
    title: "Bison Stampede",
    vehicle: "Chevrolet Colorado",
    scene: "Leading a bison stampede across the Montana prairie",
    model: "Kling v3",
    tags: ["Chevrolet", "Truck", "Video", "Action"],
  },
  // Video — Cadillac Escalade
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    videoSrc: "/videos/escalade_red_carpet_kling3.mp4",
    title: "Red Carpet Arrival",
    vehicle: "Cadillac Escalade",
    scene: "VIP arrival with paparazzi flashbulbs",
    model: "Kling v3",
    tags: ["Cadillac", "SUV", "Video", "Night"],
  },
  // Video — Chevrolet Blazer
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    videoSrc: "/videos/blazer_transition_moving_kling3.mp4",
    title: "World Transitions",
    vehicle: "Chevrolet Blazer",
    scene: "Driving through rapidly shifting environments",
    model: "Kling v3",
    tags: ["Chevrolet", "SUV", "Video", "Cinematic"],
  },
  // Chevrolet Colorado
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    title: "Desert Canyon",
    vehicle: "Chevrolet Colorado",
    scene: "Golden hour at the canyon edge",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Landscape"],
  },
  {
    src: "/images/portfolio/colorado_mountain_night.png",
    title: "Mountain Night",
    vehicle: "Chevrolet Colorado",
    scene: "Rain-soaked forest road at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Night"],
  },
  {
    src: "/images/portfolio/colorado_job_site_sunrise.png",
    title: "Job Site Sunrise",
    vehicle: "Chevrolet Colorado",
    scene: "Mountain construction site at dawn",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Work"],
  },
  // Chevrolet Corvette
  {
    src: "/images/portfolio/corvette_coastal_sunset.png",
    title: "Coastal Sunset",
    vehicle: "Chevrolet Corvette",
    scene: "Pacific coast highway overlook",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Landscape"],
  },
  {
    src: "/images/portfolio/corvette_neon_city.png",
    title: "Neon City",
    vehicle: "Chevrolet Corvette",
    scene: "Rain-drenched neon streets at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Night"],
  },
  {
    src: "/images/portfolio/corvette_racetrack.png",
    title: "Racetrack",
    vehicle: "Chevrolet Corvette",
    scene: "Mid-corner action with tire smoke",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Action"],
  },
  // Chevrolet Blazer
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    title: "Mountain Lodge",
    vehicle: "Chevrolet Blazer",
    scene: "Aspen ski resort in winter",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Winter"],
  },
  {
    src: "/images/portfolio/blazer_autumn_road.png",
    title: "Autumn Road",
    vehicle: "Chevrolet Blazer",
    scene: "Fall foliage canopy drive",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Landscape"],
  },
  // Cadillac Lyriq
  {
    src: "/images/portfolio/lyriq_rooftop_helipad.png",
    title: "Rooftop Helipad",
    vehicle: "Cadillac Lyriq",
    scene: "Downtown skyline at blue hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Night"],
  },
  {
    src: "/images/portfolio/lyriq_vineyard_estate.png",
    title: "Vineyard Estate",
    vehicle: "Cadillac Lyriq",
    scene: "Napa Valley golden hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Landscape"],
  },
  {
    src: "/images/portfolio/lyriq_art_gallery.png",
    title: "Art Gallery",
    vehicle: "Cadillac Lyriq",
    scene: "Modern minimalist architecture at dusk",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Urban"],
  },
  // Cadillac Escalade
  {
    src: "/images/portfolio/escalade_snow_resort.png",
    title: "Snow Resort",
    vehicle: "Cadillac Escalade",
    scene: "Grand ski resort valet in snowfall",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Winter"],
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    title: "Red Carpet",
    vehicle: "Cadillac Escalade",
    scene: "VIP arrival, city skyline at night",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Night"],
  },
  {
    src: "/images/portfolio/escalade_mansion_pool.png",
    title: "Mansion",
    vehicle: "Cadillac Escalade",
    scene: "Modern estate at sunset",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Luxury"],
  },
];

const vehicles = ["All", ...Array.from(new Set(portfolioItems.map((p) => p.vehicle)))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.vehicle === filter);

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
            title="Automotive Imagery"
            subtitle="Reference-conditioned image generation using Black Forest Labs Flux models. Each image is generated from a single vehicle reference photo and a scene prompt — no compositing, no manual editing."
          />

          {/* Vehicle filter */}
          <ScrollReveal>
            <div
              className="flex flex-wrap gap-2"
              style={{ marginBottom: "3rem" }}
            >
              {vehicles.map((v) => (
                <button
                  key={v}
                  onClick={() => setFilter(v)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${
                    filter === v
                      ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)]"
                      : "bg-[var(--surface)] border-[var(--surface-border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {v}
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
              {filtered.map((item) => (
                <motion.div
                  key={item.src}
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
                  <div className="relative aspect-video overflow-hidden">
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
                        alt={`${item.vehicle} — ${item.title}`}
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
                      {item.vehicle} &mdash; {item.scene}
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
                  Each image starts with a single reference photograph of the vehicle.
                  The reference is passed to a Flux model via Replicate&apos;s API as an
                  image prompt with configurable conditioning strength (typically 0.4&ndash;0.55),
                  alongside a detailed scene description.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  The model generates the complete scene &mdash; environment, lighting,
                  reflections, atmosphere &mdash; while preserving the vehicle&apos;s design
                  language from the reference. No compositing, inpainting, or manual
                  post-processing is applied.
                </p>
                <p>
                  Models used: <span className="text-[var(--text-primary)]">Flux 2 Pro</span> and{" "}
                  <span className="text-[var(--text-primary)]">Flux 2 Klein 4B</span> by
                  Black Forest Labs for image generation, and{" "}
                  <span className="text-[var(--text-primary)]">Kling v3</span> by
                  Kuaishou for video generation &mdash; all accessed via Replicate.
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
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
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
                    alt={`${lightbox.vehicle} — ${lightbox.title}`}
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
                  {lightbox.vehicle} &mdash; {lightbox.title}
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

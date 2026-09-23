"use client";

import { Fragment, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import { artProjects, ArtProject, ArtAsset } from "./artData";
import ProjectWorkflow from "./ProjectWorkflow";

const categories = [
  { key: "All", label: "All" },
  { key: "commercial", label: "Commercial" },
  { key: "characters", label: "Characters" },
  { key: "creatures", label: "Creatures" },
  { key: "hardsurface", label: "Hard Surface" },
  { key: "gamedev", label: "Game Dev" },
  { key: "sculpts", label: "Sculpts & Studies" },
];

const categoryLabel = (key: string) =>
  categories.find((c) => c.key === key)?.label ?? key;

function AssetView({ asset, title }: { asset: ArtAsset; title: string }) {
  if (asset.type === "youtube" || asset.type === "sketchfab") {
    return (
      <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={asset.src}
          title={asset.caption || title}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media; gyroscope; accelerometer; xr-spatial-tracking"
          allowFullScreen
        />
      </div>
    );
  }
  if (asset.type === "video") {
    return (
      <video
        src={asset.src}
        poster={asset.poster}
        controls
        preload="metadata"
        muted
        loop
        playsInline
        className="w-full rounded-lg"
      />
    );
  }
  return (
    <Image
      src={asset.src}
      alt={asset.caption || title}
      width={asset.width || 1920}
      height={asset.height || 1080}
      quality={92}
      // lossless assets are debanded masters; re-encoding would restore banding
      unoptimized={asset.lossless}
      sizes="(max-width: 1024px) 100vw, 896px"
      className="w-full h-auto rounded-lg"
    />
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: ArtProject;
  onClose: () => void;
}) {
  const introAsset = project.assets.find((asset) => asset.src === project.introAsset);
  const leadAsset = project.assets.find((asset) => asset.src === project.leadAsset);
  const galleryAssets = project.assets.filter((asset) => asset !== introAsset && asset !== leadAsset);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 backdrop-blur-sm"
    >
      <div
        className="min-h-full flex justify-center"
        style={{ padding: "max(1.5rem, 4vw)" }}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl rounded-2xl border border-[var(--surface-border)] bg-[var(--background)]"
          style={{ padding: "max(1.5rem, 3vw)", marginTop: "2rem", marginBottom: "2rem" }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="sticky top-2 float-right z-10 w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center justify-center text-lg"
          >
            &times;
          </button>

          <p
            className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
            style={{ marginBottom: "0.75rem" }}
          >
            {categoryLabel(project.category)}
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
            style={{ marginBottom: "1.25rem" }}
          >
            {project.title}
          </h2>

          {project.software.length > 0 && (
            <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.5rem" }}>
              {project.software.map((s) => (
                <span
                  key={s}
                  className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--surface-border)] px-2 py-1 rounded"
                >
                  {s}
                </span>
              ))}
            </div>
          )}

          {leadAsset && (
            <figure style={{ marginBottom: "2.5rem" }}>
              <AssetView asset={leadAsset} title={project.title} />
              {leadAsset.caption && (
                <figcaption
                  className="text-sm text-[var(--text-muted)]"
                  style={{ marginTop: "0.6rem", lineHeight: 1.7 }}
                >
                  {leadAsset.caption}
                </figcaption>
              )}
            </figure>
          )}

          {project.description && (
            <div
              className="text-[var(--text-secondary)]"
              style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}
            >
              {project.description.split("\n\n").map((p, i) => (
                <Fragment key={i}>
                  <p className="max-w-3xl" style={{ marginBottom: "1.25rem" }}>
                    {p}
                  </p>
                  {i === 0 && introAsset && (
                    <figure style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                      {introAsset.caption && (
                        <figcaption
                          className="text-sm text-[var(--text-secondary)]"
                          style={{ marginBottom: "0.6rem", lineHeight: 1.7 }}
                        >
                          {introAsset.caption}
                        </figcaption>
                      )}
                      <AssetView asset={introAsset} title={project.title} />
                    </figure>
                  )}
                </Fragment>
              ))}
            </div>
          )}

          {project.workflow && <ProjectWorkflow workflow={project.workflow} />}

          <div className="flex flex-col" style={{ gap: "1.5rem" }}>
            {galleryAssets.map((asset, i) => (
              <figure key={i}>
                <AssetView asset={asset} title={project.title} />
                {asset.caption && (
                  <figcaption
                    className="text-sm text-[var(--text-muted)]"
                    style={{ marginTop: "0.6rem", lineHeight: 1.7 }}
                  >
                    {asset.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ThreeDArt() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<ArtProject | null>(null);

  const filtered =
    filter === "All"
      ? artProjects
      : artProjects.filter((p) => p.category === filter);

  return (
    <>
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
            label="3D Portfolio"
            title="3D Art / Game Development"
            subtitle="Characters, creatures, hard-surface design, and shipped game projects. Workflows span sculpting, modeling, texturing, AI-assisted concept development, and real-time rendering."
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
                  className={`btn-chip ${
                    filter === c.key ? "btn-chip-active" : ""
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActive(project)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300"
                  whileHover={{
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.08)",
                  }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: project.coverPosition || "center" }}
                    />
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full border border-white/20">
                      {project.assets.length}{" "}
                      {project.assets.length === 1 ? "item" : "items"}
                    </div>
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <p
                      className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      {categoryLabel(project.category)}
                    </p>
                    <h3
                      className="text-base font-semibold text-[var(--text-primary)]"
                      style={{ marginBottom: "0.75rem" }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.software.slice(0, 4).map((s) => (
                        <span
                          key={s}
                          className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] bg-[var(--background)] px-2 py-1 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <Footer />
      </main>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

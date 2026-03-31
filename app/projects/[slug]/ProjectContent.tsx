"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { ProjectDetail } from "../projectData";

export default function ProjectContent({
  project,
}: {
  project: ProjectDetail;
}) {
  const [activeSplat, setActiveSplat] = useState<string | null>(null);

  return (
    <>
      {/* Case Study */}
      {project.caseStudy && project.caseStudy.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          {project.caseStudy.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ marginBottom: i < project.caseStudy!.length - 1 ? "3rem" : 0 }}
            >
              <h3
                className="text-sm tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                style={{ marginBottom: "1rem" }}
              >
                {section.heading}
              </h3>
              <p
                className="text-lg text-[var(--text-secondary)]"
                style={{ lineHeight: 1.8 }}
              >
                {section.body}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Architecture Diagram */}
      {project.architectureDiagram && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "6rem" }}
        >
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "2.5rem" }}
          >
            System Architecture
          </h2>
          <div className="rounded-xl border border-[var(--surface-border)] overflow-hidden">
            <img
              src={project.architectureDiagram}
              alt={`${project.title} — System Architecture`}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      )}

      {/* Interactive 3D Splat Viewers — top of page */}
      {project.splatEmbeds && project.splatEmbeds.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "1.5rem" }}
          >
            Interactive 3D Environments
          </h2>
          <p
            className="text-sm text-[var(--text-secondary)]"
            style={{ lineHeight: 1.7, marginBottom: "2.5rem" }}
          >
            Click a room to explore the Gaussian splat in 3D. WASD to move,
            drag to look, scroll to adjust speed.
          </p>

          {/* Room selector */}
          <div
            className="grid grid-cols-3 gap-4"
            style={{ marginBottom: "1.5rem" }}
          >
            {project.splatEmbeds.map((splat, i) => (
              <motion.button
                key={splat.name}
                onClick={() =>
                  setActiveSplat(
                    activeSplat === splat.marbleUrl ? null : splat.marbleUrl
                  )
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group rounded-xl overflow-hidden border transition-all duration-200 text-left ${
                  activeSplat === splat.marbleUrl
                    ? "border-[var(--accent)] shadow-[0_0_20px_rgba(0,212,255,0.25)]"
                    : "border-[var(--surface-border)] hover:border-[var(--accent)]/40"
                }`}
              >
                <div className="relative">
                  <img
                    src={splat.thumbnail}
                    alt={splat.name}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                    <span className="text-xs font-semibold text-white">
                      {splat.name}
                    </span>
                  </div>
                  {activeSplat !== splat.marbleUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[var(--accent)]/80 flex items-center justify-center backdrop-blur-sm">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                          <path d="M21 3v5h-5" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-3 py-2 bg-[var(--surface)]">
                  <p className="text-[10px] text-[var(--accent)] font-[family-name:var(--font-geist-mono)]">
                    {activeSplat === splat.marbleUrl ? "VIEWING" : "LOAD 3D"}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Embedded viewer */}
          {activeSplat && (
            <motion.div
              key={activeSplat}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden border border-[var(--accent)]/30"
              style={{ height: "70vh" }}
            >
              <iframe
                src={activeSplat}
                className="w-full h-full"
                allow="accelerometer; gyroscope"
                title="3D Gaussian Splat Viewer"
              />
            </motion.div>
          )}
        </div>
      )}

      {/* Architecture / Features */}
      {project.features && project.features.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "2.5rem" }}
          >
            Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-xl bg-[var(--surface)] border border-[var(--surface-border)]"
                style={{ padding: "1.5rem" }}
              >
                <h3
                  className="text-sm font-bold text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                  style={{ marginBottom: "0.75rem" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-[var(--text-secondary)]"
                  style={{ lineHeight: 1.8 }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Training Data vs Output */}
      {project.trainingPairs && project.trainingPairs.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "1.5rem" }}
          >
            Training Data vs Output
          </h2>
          <p
            className="text-sm text-[var(--text-secondary)]"
            style={{ lineHeight: 1.7, marginBottom: "2.5rem" }}
          >
            Hand-drawn marker sketches used as LoRA training data (left) and the
            AI-generated exhibit concepts they produced (right).
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {project.trainingPairs.map((pair, i) => (
              <motion.div
                key={pair.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src={pair.sketch}
                      alt={`Training sketch — ${pair.label}`}
                      className="w-full rounded-lg border border-[var(--surface-border)] object-cover aspect-[4/3]"
                    />
                    <p
                      className="text-[10px] text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]"
                      style={{ marginTop: "0.5rem" }}
                    >
                      SKETCH
                    </p>
                  </div>
                  <div>
                    <img
                      src={pair.generated}
                      alt={`Generated — ${pair.label}`}
                      className="w-full rounded-lg border border-[var(--surface-border)] object-cover aspect-[4/3]"
                    />
                    <p
                      className="text-[10px] text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]"
                      style={{ marginTop: "0.5rem" }}
                    >
                      GENERATED — {pair.label.toUpperCase()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "2.5rem" }}
          >
            {project.splatEmbeds ? "Exhibition Rooms" : "Gallery"}
          </h2>
          <div
            className={`grid gap-5 ${
              project.splatEmbeds
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {project.gallery.map((img, i) => (
              <motion.div
                key={`${img.alt}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-lg border border-[var(--surface-border)] object-cover"
                />
                <p
                  className="text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]"
                  style={{ marginTop: "0.75rem" }}
                >
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Panoramic Renders */}
      {project.panoramas && project.panoramas.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "1.5rem" }}
          >
            Panoramic Renders
          </h2>
          <p
            className="text-sm text-[var(--text-secondary)]"
            style={{ lineHeight: 1.7, marginBottom: "2.5rem" }}
          >
            HDR panoramic renders extracted from the Gaussian splats.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {project.panoramas.map((pano, i) => (
              <motion.div
                key={pano.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img
                  src={pano.src}
                  alt={pano.alt}
                  className="w-full rounded-lg border border-[var(--surface-border)] object-cover"
                />
                <p
                  className="text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]"
                  style={{ marginTop: "0.75rem" }}
                >
                  {pano.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* YouTube embeds */}
      {project.youtubeIds && project.youtubeIds.length > 0 && (
        <div style={{ marginBottom: "6rem" }}>
          <h2
            className="text-2xl font-bold"
            style={{ marginBottom: "2.5rem" }}
          >
            Video
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {project.youtubeIds.map((id) => (
              <div
                key={id}
                className="relative w-full rounded-lg overflow-hidden border border-[var(--surface-border)]"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Project Video"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

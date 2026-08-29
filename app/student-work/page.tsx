"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";
import {
  studentProjects,
  StudentWorkProject,
  StudentWorkAsset,
} from "./studentWorkData";

function AssetView({ asset, title }: { asset: StudentWorkAsset; title: string }) {
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
  project: StudentWorkProject;
  onClose: () => void;
}) {
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

          {(project.course || project.year) && (
            <p
              className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
              style={{ marginBottom: "0.75rem" }}
            >
              {[project.course, project.year].filter(Boolean).join("  ·  ")}
            </p>
          )}
          <h2
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]"
            style={{ marginBottom: project.student ? "0.5rem" : "1.25rem" }}
          >
            {project.title}
          </h2>
          {project.student && (
            <p
              className="text-base text-[var(--text-secondary)]"
              style={{ marginBottom: "1.25rem", lineHeight: 1.7 }}
            >
              {project.student}
            </p>
          )}

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

          {project.description && (
            <div
              className="text-[var(--text-secondary)] max-w-3xl"
              style={{ lineHeight: 1.8, marginBottom: "2.5rem" }}
            >
              {project.description.split("\n\n").map((p, i) => (
                <p key={i} style={{ marginBottom: "1.25rem" }}>
                  {p}
                </p>
              ))}
            </div>
          )}

          <div className="flex flex-col" style={{ gap: "1.5rem" }}>
            {project.assets.map((asset, i) => (
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

export default function StudentWork() {
  const courses = Array.from(
    new Set(
      studentProjects
        .map((p) => p.course)
        .filter((c): c is string => Boolean(c))
    )
  );
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<StudentWorkProject | null>(null);

  const filtered =
    filter === "All"
      ? studentProjects
      : studentProjects.filter((p) => p.course === filter);

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
            label="Teaching"
            title="Student Work"
            subtitle="Selected work from students I have taught."
          />

          {studentProjects.length === 0 ? (
            <ScrollReveal>
              <p
                className="text-[var(--text-secondary)] max-w-2xl text-lg"
                style={{ lineHeight: 1.8, marginTop: "-2rem" }}
              >
                This gallery is being assembled. Pieces will appear here as they are selected.
              </p>
            </ScrollReveal>
          ) : (
            <>
              {courses.length > 1 && (
                <ScrollReveal>
                  <div
                    className="flex flex-wrap gap-2"
                    style={{ marginBottom: "3rem" }}
                  >
                    {["All", ...courses].map((c) => (
                      <button
                        key={c}
                        onClick={() => setFilter(c)}
                        className={`btn-chip ${
                          filter === c ? "btn-chip-active" : ""
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </ScrollReveal>
              )}

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
                        {(project.course || project.year) && (
                          <p
                            className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            {[project.course, project.year].filter(Boolean).join("  ·  ")}
                          </p>
                        )}
                        <h3
                          className="text-base font-semibold text-[var(--text-primary)]"
                          style={{ marginBottom: project.student ? "0.5rem" : 0 }}
                        >
                          {project.title}
                        </h3>
                        {project.student && (
                          <p
                            className="text-sm text-[var(--text-secondary)]"
                            style={{ lineHeight: 1.7 }}
                          >
                            {project.student}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </>
          )}
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

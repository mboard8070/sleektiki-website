"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", display: "flex", alignItems: "flex-end" }}
    >
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,8,0.6) 100%)",
        }}
      />

      <div
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050508] to-transparent"
        style={{ height: "12rem", zIndex: 2 }}
      />

      <div
        className="relative w-full"
        style={{
          zIndex: 10,
          paddingBottom: "8vh",
          paddingLeft: "max(1.5rem, 5vw)",
          paddingRight: "max(1.5rem, 5vw)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-8 lg:gap-12">
          <div className="flex-shrink-0 lg:max-w-[42%]">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
              style={{ marginBottom: "1rem" }}
            >
              sleektiki.ai
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ marginBottom: "0.75rem" }}
            >
              Matthew Board
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl text-[var(--text-primary)]"
              style={{ marginBottom: "1rem" }}
            >
              Creative technologist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base text-[var(--text-secondary)] max-w-md"
              style={{ lineHeight: 1.7 }}
            >
              I build AI and Unreal production pipelines, then teach teams how
              to ship with them. Product pictures, motion, and tools that
              non-specialists can actually run.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="h-[2px] w-24 bg-[var(--accent)] origin-left"
              style={{
                marginTop: "2rem",
                boxShadow: "0 0 12px rgba(0, 212, 255, 0.4)",
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap items-center gap-3"
              style={{ marginTop: "2rem" }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] text-[var(--background)] font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                See the work
              </a>
              <Link
                href="/reel"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--surface-border)] text-sm text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors"
              >
                Watch the reel
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="w-full lg:max-w-[55%] flex-shrink"
            style={{ marginBottom: "2rem" }}
          >
            <div
              className="rounded-xl overflow-hidden border border-[var(--surface-border)]/30"
              style={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.06)" }}
            >
              <video
                src="/videos/matthew_board_reel_2026_web.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-video object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSlideshow from "./HeroSlideshow";

function AppleMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-visible"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
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
          paddingTop: "6rem",
          paddingBottom: "8vh",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-8 lg:gap-x-14 lg:gap-y-6">
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
              style={{ marginBottom: "1rem" }}
            >
              sleektiki.ai
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ marginBottom: "0.75rem" }}
            >
              Matthew Board
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-lg sm:text-xl text-[var(--text-primary)]"
              style={{ marginBottom: "0.9rem" }}
            >
              Creative technologist
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.42 }}
            >
              <Link
                href="/cyte"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/55 bg-[var(--accent)]/12 px-4 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 transition-colors"
              >
                <AppleMark />
                Releasing soon for iOS
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="w-full min-w-0 flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            <div
              className="mx-auto lg:mx-0 lg:ml-auto lg:-translate-x-[500px]"
              style={{
                height: "min(70vh, 640px)",
                aspectRatio: "9 / 19.5",
              }}
            >
              <HeroSlideshow />
            </div>
          </motion.div>

          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
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
              transition={{ duration: 1, delay: 0.65, ease: "easeOut" }}
              className="h-[2px] w-24 bg-[var(--accent)] origin-left"
              style={{
                marginTop: "2rem",
                boxShadow: "0 0 12px rgba(0, 212, 255, 0.4)",
              }}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
              style={{ marginTop: "2rem" }}
            >
              <a href="#work" className="btn">
                Let&apos;s dig in!
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

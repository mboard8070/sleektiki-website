"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSlideshow from "./HeroSlideshow";
import AppStoreBadge from "./AppStoreBadge";

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
            >
              Creative technologist
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="w-full min-w-0 flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2"
          >
            <div className="mx-auto lg:mx-0 lg:ml-auto lg:-translate-x-[250px] flex flex-col items-center gap-3">
              <div
                style={{
                  height: "min(70vh, 640px)",
                  aspectRatio: "9 / 19.5",
                }}
              >
                <HeroSlideshow />
              </div>
              <AppStoreBadge />
              <Link
                href="/cyte"
                className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)] hover:underline"
              >
                Cyte
              </Link>
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

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeuralNetwork from "./NeuralNetwork";

const titles = [
  "Technical Artist",
  "Indie Developer",
  "Creative AI Researcher",
  "Educator",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100vh", display: "flex", alignItems: "flex-end" }}
    >
      {/* Animated neural network background */}
      <NeuralNetwork />

      {/* Radial vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(5,5,8,0.6) 100%)",
        }}
      />

      {/* Bottom fade to page background */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050508] to-transparent" style={{ height: "12rem", zIndex: 2 }} />

      {/* Content — two-column: text left, video right */}
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
          {/* Left — text */}
          <div className="flex-shrink-0">
            {/* Logo / brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p
                className="text-sm tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                style={{ marginBottom: "1rem" }}
              >
                sleektiki.ai
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ marginBottom: "1.25rem" }}
            >
              Matthew Board
            </motion.h1>

            {/* Rotating titles */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center"
              style={{ height: "2.5rem" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg text-[var(--text-secondary)] font-[family-name:var(--font-geist-mono)]"
                >
                  {titles[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="h-[2px] w-24 bg-[var(--accent)] origin-left"
              style={{ marginTop: "2rem", boxShadow: "0 0 12px rgba(0, 212, 255, 0.4)" }}
            />

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              style={{ marginTop: "2.5rem" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors font-[family-name:var(--font-geist-mono)]"
              >
                Scroll
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Right — montage video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full lg:max-w-[55%] flex-shrink"
          >
            <div className="rounded-xl overflow-hidden border border-[var(--surface-border)]/30" style={{ boxShadow: "0 0 40px rgba(0, 212, 255, 0.06)" }}>
              <video
                src="/videos/homepage_montage_web.mp4"
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

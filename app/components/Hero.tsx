"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      {/* Banner image */}
      <div className="absolute inset-0">
        <img
          src="/images/sleektiki_banner.jpeg"
          alt="Sleek Tiki"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/50 to-[#050508]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050508]/70 via-transparent to-[#050508]/70" />
        {/* Accent glow from the tiki's eyes */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,212,255,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Content — rule of thirds, lower third of viewport */}
      <div
        className="relative z-10 w-full"
        style={{
          paddingBottom: "8vh",
          paddingLeft: "max(1.5rem, 5vw)",
          paddingRight: "max(1.5rem, 5vw)",
        }}
      >
        <div className="max-w-5xl mx-auto">
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
      </div>

      {/* Bottom fade to page background */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050508] to-transparent"
        style={{ height: "6rem" }}
      />
    </section>
  );
}

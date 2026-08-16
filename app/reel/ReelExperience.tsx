"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import { reelCases, reelClips, stills } from "./reelData";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function HeroPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onTime = () => {
      setProgress(video.currentTime);
      setDuration(video.duration || 0);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("timeupdate", onTime);
    video.addEventListener("loadedmetadata", onTime);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("loadedmetadata", onTime);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setProgress(value);
  };

  return (
    <section className="relative" style={{ minHeight: "100vh" }}>
      <video
        ref={videoRef}
        src="/videos/matthew_board_reel_2026_web.mp4"
        poster="/images/portfolio/reel_poster.jpg"
        muted={muted}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,8,0.35) 0%, rgba(5,5,8,0.15) 40%, rgba(5,5,8,0.92) 100%)",
        }}
      />

      <div
        className="relative z-10 flex flex-col justify-end"
        style={{
          minHeight: "100vh",
          paddingLeft: "max(1.5rem, 5vw)",
          paddingRight: "max(1.5rem, 5vw)",
          paddingBottom: "2.5rem",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xs tracking-[0.35em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
            style={{ marginBottom: "1rem" }}
          >
            Showreel 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight"
            style={{ maxWidth: "16ch", lineHeight: 0.95, marginBottom: "1.25rem" }}
          >
            Motion Graphics + Creative AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl"
            style={{ lineHeight: 1.7, marginBottom: "2rem" }}
          >
            Exhibition animation, product motion, cinematic AI, and the
            systems that make the work. Directed, generated, and cut by
            Matthew Board.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="flex flex-wrap items-center gap-3"
            style={{ marginBottom: "1.75rem" }}
          >
            <button
              onClick={togglePlay}
              className="btn"
            >
              {playing ? "Pause reel" : "Play reel"}
            </button>
            <button
              onClick={() => setMuted((m) => !m)}
              className="btn-secondary"
            >
              {muted ? "Unmute" : "Mute"}
            </button>
            <a
              href="/videos/matthew_board_reel_2026.mp4"
              download
              className="btn-secondary"
            >
              Download MP4
            </a>
            <Link
              href="mailto:matt@sleektiki.ai"
              className="btn-secondary"
            >
              Email Matt
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] w-10">
              {formatTime(progress)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={progress}
              onChange={(e) => seek(Number(e.target.value))}
              aria-label="Reel progress"
              className="flex-1 accent-[var(--accent)] h-1 bg-[var(--surface-border)]"
            />
            <span className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] w-10 text-right">
              {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HoverVideo({
  src,
  poster,
  title,
  aspect = "video",
}: {
  src?: string;
  poster: string;
  title: string;
  aspect?: "video" | "square" | "portrait";
}) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[9/16]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-video";

  return (
    <div className={`relative ${aspectClass} overflow-hidden bg-[var(--surface)]`}>
      {src ? (
        <video
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={(e) => void e.currentTarget.play()}
          onMouseLeave={(e) => {
            e.currentTarget.pause();
            e.currentTarget.currentTime = 0;
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Image
          src={poster}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
    </div>
  );
}

export default function ReelExperience() {
  return (
    <>
      <Navbar />
      <main className="relative z-[1]">
        <HeroPlayer />

        <section
          className="relative border-t border-[var(--surface-border)]"
          style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
        >
          <div
            className="max-w-7xl mx-auto"
            style={{
              paddingLeft: "max(1.5rem, 5vw)",
              paddingRight: "max(1.5rem, 5vw)",
            }}
          >
            <div className="grid md:grid-cols-12 gap-10" style={{ marginBottom: "5rem" }}>
              <ScrollReveal className="md:col-span-7">
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]" style={{ marginBottom: "1rem" }}>
                  Positioning
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ marginBottom: "1.25rem" }}>
                  A motion director who also builds the AI that makes the pictures.
                </h2>
                <p className="text-lg text-[var(--text-secondary)]" style={{ lineHeight: 1.8 }}>
                  Fifteen years of 3D, animation, and university-level motion graphics,
                  plus shipped client work, exhibition pieces, and production AI systems.
                  The reel is the taste. The case studies are the pipeline.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="md:col-span-5">
                <dl className="grid grid-cols-2 gap-6">
                  {[
                    ["15+", "Years in production"],
                    ["200+", "Students taught / year"],
                    ["CAC + Blink", "2026 exhibition"],
                    ["Hasbro · Dearfoams", "Client motion"],
                  ].map(([stat, label]) => (
                    <div key={label}>
                      <dt className="text-2xl font-bold tracking-tight">{stat}</dt>
                      <dd className="text-sm text-[var(--text-muted)]" style={{ marginTop: "0.35rem" }}>
                        {label}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            </div>

            <SectionHeading
              label="01 / Selected"
              title="Case studies"
              subtitle="Six pieces that cover exhibition, advertising, product, character, and systems."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {reelCases.map((item, i) => (
                <ScrollReveal key={item.slug} delay={i * 0.05}>
                  <Link
                    href={item.href}
                    className="group block rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
                  >
                    <HoverVideo
                      src={item.videoSrc}
                      poster={item.poster}
                      title={item.title}
                      aspect={item.aspect === "portrait" ? "video" : item.aspect}
                    />
                    <div style={{ padding: "1.35rem 1.4rem 1.5rem" }}>
                      <p className="text-xs tracking-[0.25em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]" style={{ marginBottom: "0.55rem" }}>
                        {item.index} / {item.chapter}
                      </p>
                      <div className="flex items-baseline justify-between gap-4" style={{ marginBottom: "0.6rem" }}>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]" style={{ lineHeight: 1.7, marginBottom: "0.9rem" }}>
                        {item.summary}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] font-[family-name:var(--font-geist-mono)]">
                        {item.role} · {item.tools.join(" · ")}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-[var(--surface-border)]"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <div
            className="max-w-7xl mx-auto"
            style={{
              paddingLeft: "max(1.5rem, 5vw)",
              paddingRight: "max(1.5rem, 5vw)",
            }}
          >
            <SectionHeading
              label="02 / Motion"
              title="Hover to play"
              subtitle="Individual shots from the reel. Open a card for the full case."
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {reelClips.map((clip, i) => (
                <ScrollReveal key={clip.title} delay={i * 0.04}>
                  <Link
                    href={clip.href || "/portfolio"}
                    className="group block rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-colors"
                  >
                    <HoverVideo
                      src={clip.videoSrc}
                      poster={clip.poster}
                      title={clip.title}
                      aspect={clip.aspect === "portrait" ? "video" : clip.aspect}
                    />
                    <div style={{ padding: "0.9rem 1rem 1.05rem" }}>
                      <h3 className="text-sm font-semibold" style={{ marginBottom: "0.2rem" }}>
                        {clip.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{clip.subtitle}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-[var(--surface-border)]"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <div
            className="max-w-7xl mx-auto"
            style={{
              paddingLeft: "max(1.5rem, 5vw)",
              paddingRight: "max(1.5rem, 5vw)",
            }}
          >
            <SectionHeading
              label="03 / Stills"
              title="Selected frames"
              subtitle="Look development across automotive, product, architecture, and exhibition."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {stills.map((still, i) => (
                <ScrollReveal key={still.src} delay={i * 0.04}>
                  <Link
                    href="/portfolio"
                    className="group block rounded-xl overflow-hidden border border-[var(--surface-border)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={still.src}
                        alt={still.title}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div style={{ padding: "0.85rem 1rem 1rem" }}>
                      <h3 className="text-sm font-semibold">{still.title}</h3>
                      <p className="text-xs text-[var(--text-muted)]">{still.caption}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative border-t border-[var(--surface-border)]"
          style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        >
          <div
            className="max-w-3xl mx-auto text-center"
            style={{
              paddingLeft: "max(1.5rem, 5vw)",
              paddingRight: "max(1.5rem, 5vw)",
            }}
          >
            <ScrollReveal>
              <p className="text-xs tracking-[0.3em] uppercase text-[var(--accent)] font-[family-name:var(--font-geist-mono)]" style={{ marginBottom: "1rem" }}>
                Available
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight" style={{ marginBottom: "1.25rem" }}>
                Hire the person who can direct the spot and build the model.
              </h2>
              <p className="text-lg text-[var(--text-secondary)]" style={{ lineHeight: 1.8, marginBottom: "2rem" }}>
                Open to on-site and hybrid roles anywhere in the United States.
                I will relocate.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="mailto:matt@sleektiki.ai"
                  className="btn"
                >
                  matt@sleektiki.ai
                </a>
                <Link
                  href="/portfolio"
                  className="btn-secondary"
                >
                  Full AI gallery
                </Link>
                <Link
                  href="/3d-art"
                  className="btn-secondary"
                >
                  3D art
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

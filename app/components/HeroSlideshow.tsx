"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const CLIPS = [
  "/videos/artstation/space-explorer-lightpan.mp4",
  "/videos/astronaut_light_sweep.mp4",
  "/videos/pixelus/tide_surf_10s.mp4",
  "/videos/pixelus_sneaker_wipe.mp4",
  "/videos/pixelus/deep_sea_10s.mp4",
  "/videos/pixelus_watch_wipe.mp4",
  "/videos/pixelus/eaglefangs_10s.mp4",
  "/videos/pixelus_cologne_wipe.mp4",
] as const;

const POSTER = "/images/artstation/space-explorer/lightpan_poster.webp";
const FADE_MS = 500;

function clipPath(el: HTMLVideoElement) {
  const src = el.currentSrc || el.src;
  if (!src) return "";
  try {
    return new URL(src, window.location.origin).pathname;
  } catch {
    return src;
  }
}

export default function HeroSlideshow() {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const layerRef = useRef<0 | 1>(0);
  const indexRef = useRef(0);
  const busyRef = useRef(false);
  const [front, setFront] = useState<0 | 1>(0);
  const [reduced, setReduced] = useState(false);

  const layers = [aRef, bRef] as const;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    if (busyRef.current) return;
    const nextIndex = (indexRef.current + 1) % CLIPS.length;
    const nextLayer: 0 | 1 = layerRef.current === 0 ? 1 : 0;
    const incoming = layers[nextLayer].current;
    if (!incoming) return;
    busyRef.current = true;

    const start = () => {
      incoming.currentTime = 0;
      incoming.play().catch(() => {});
      layerRef.current = nextLayer;
      indexRef.current = nextIndex;
      setFront(nextLayer);
      window.setTimeout(() => {
        const outgoing = layers[nextLayer === 0 ? 1 : 0].current;
        outgoing?.pause();
        const lookahead = CLIPS[(nextIndex + 1) % CLIPS.length];
        if (outgoing && clipPath(outgoing) !== lookahead) {
          outgoing.src = lookahead;
          outgoing.load();
        }
        busyRef.current = false;
      }, FADE_MS);
    };

    if (clipPath(incoming) !== CLIPS[nextIndex]) {
      incoming.src = CLIPS[nextIndex];
      incoming.load();
    }

    if (incoming.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      start();
    } else {
      const onReady = () => {
        incoming.removeEventListener("canplay", onReady);
        incoming.removeEventListener("error", onError);
        start();
      };
      const onError = () => {
        incoming.removeEventListener("canplay", onReady);
        incoming.removeEventListener("error", onError);
        busyRef.current = false;
        indexRef.current = nextIndex;
        advance();
      };
      incoming.addEventListener("canplay", onReady);
      incoming.addEventListener("error", onError);
    }
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = aRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, [reduced]);

  useEffect(() => {
    const onVis = () => {
      const el = layers[layerRef.current].current;
      if (!el) return;
      if (document.hidden) el.pause();
      else el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)]"
      style={{
        aspectRatio: "16 / 9",
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.08)",
      }}
      aria-label="Animation clips playing as a continuous showreel"
    >
      {reduced ? (
        <img
          src={POSTER}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <video
            ref={aRef}
            src={CLIPS[0]}
            poster={POSTER}
            autoPlay
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            onEnded={advance}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: front === 0 ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          />
          <video
            ref={bRef}
            src={CLIPS[1]}
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
            onEnded={advance}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: front === 1 ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          />
        </>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 70%, rgba(5,5,8,0.35) 100%)",
        }}
      />
    </div>
  );
}

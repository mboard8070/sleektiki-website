"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide =
  | { kind: "image"; src: string; hold: number }
  | { kind: "video"; src: string };

const SLIDES: Slide[] = [
  { kind: "image", src: "/images/projects/cyte-title.jpg", hold: 2800 },
  { kind: "video", src: "/videos/cyte/play.mp4" },
  { kind: "video", src: "/videos/cyte/spitter.mp4" },
  { kind: "video", src: "/videos/cyte/siphon.mp4" },
  { kind: "video", src: "/videos/cyte/twin.mp4" },
  { kind: "image", src: "/images/projects/cyte-as-05-play.jpg", hold: 2800 },
  { kind: "video", src: "/videos/cyte/match.mp4" },
  { kind: "image", src: "/images/projects/cyte-lab.jpg", hold: 2800 },
];

const FADE_MS = 480;

function Media({
  slide,
  active,
  onEnded,
}: {
  slide: Slide;
  active: boolean;
  onEnded: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active || slide.kind !== "image") return;
    const t = window.setTimeout(onEnded, slide.hold);
    return () => window.clearTimeout(t);
  }, [active, slide, onEnded]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || slide.kind !== "video") return;
    if (active) {
      el.currentTime = 0;
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [active, slide]);

  if (slide.kind === "image") {
    return (
      <img
        src={slide.src}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover ${
          active ? "hero-kenburns" : ""
        }`}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={slide.src}
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      onEnded={onEnded}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

export default function HeroSlideshow() {
  const layerRef = useRef<0 | 1>(0);
  const indexRef = useRef(0);
  const busyRef = useRef(false);
  const [front, setFront] = useState<0 | 1>(0);
  const [slots, setSlots] = useState<[number, number]>([0, 1 % SLIDES.length]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const advance = useCallback(() => {
    if (busyRef.current || reduced) return;
    busyRef.current = true;
    const nextIndex = (indexRef.current + 1) % SLIDES.length;
    const nextLayer: 0 | 1 = layerRef.current === 0 ? 1 : 0;
    setSlots((prev) => {
      const next: [number, number] = [...prev];
      next[nextLayer] = nextIndex;
      return next;
    });
    window.requestAnimationFrame(() => {
      layerRef.current = nextLayer;
      indexRef.current = nextIndex;
      setFront(nextLayer);
      window.setTimeout(() => {
        busyRef.current = false;
      }, FADE_MS);
    });
  }, [reduced]);

  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-[var(--surface-border)] bg-black"
      style={{
        boxShadow: "0 0 40px rgba(0, 212, 255, 0.08)",
      }}
      aria-label="Cyte iOS game screenshots and gameplay"
    >
      {reduced ? (
        <img
          src={SLIDES[0].src}
          alt="Cyte"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              opacity: front === 0 ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          >
            <Media
              key={`a-${slots[0]}-${SLIDES[slots[0]].src}`}
              slide={SLIDES[slots[0]]}
              active={front === 0}
              onEnded={advance}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              opacity: front === 1 ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease`,
            }}
          >
            <Media
              key={`b-${slots[1]}-${SLIDES[slots[1]].src}`}
              slide={SLIDES[slots[1]]}
              active={front === 1}
              onEnded={advance}
            />
          </div>
        </>
      )}
    </div>
  );
}

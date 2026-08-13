export interface ReelCase {
  slug: string;
  index: string;
  chapter: string;
  title: string;
  year: string;
  role: string;
  tools: string[];
  summary: string;
  href: string;
  poster: string;
  videoSrc?: string;
  aspect?: "video" | "square" | "portrait";
}

export interface ReelClip {
  title: string;
  subtitle: string;
  poster: string;
  videoSrc?: string;
  href?: string;
  aspect?: "video" | "square" | "portrait";
}

export const reelCases: ReelCase[] = [
  {
    slug: "dusty",
    index: "01",
    chapter: "Exhibition",
    title: "Dusty",
    year: "2026",
    role: "AI animation · LoRA · collaboration",
    tools: ["Flux 1 LoRA", "Kling 2.0"],
    summary:
      "A decaying still-life animation for the Contemporary Arts Center in Cincinnati and Blink Festival, made with a Flux LoRA trained on Michael Stillion’s paintings and finished in Kling.",
    href: "/portfolio",
    poster: "/images/portfolio/dusty_cover.jpg",
    videoSrc: "/videos/dusty.mp4",
    aspect: "portrait",
  },
  {
    slug: "automotive",
    index: "02",
    chapter: "Cinematic AI",
    title: "Automotive Worlds",
    year: "2026",
    role: "Direction · look development · AI cinematography",
    tools: ["Flux 2 Pro", "Kling v3"],
    summary:
      "Hero stills and motion for Chevrolet and Cadillac: bison stampede, red-carpet arrival, and environment transitions. Generated, directed, and cut as advertising-scale spots.",
    href: "/portfolio",
    poster: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
  },
  {
    slug: "pixelus",
    index: "03",
    chapter: "Product",
    title: "Pixelus",
    year: "2026",
    role: "Product · pipeline · brand systems",
    tools: ["FLUX", "Inpainting", "Next.js"],
    summary:
      "A product-placement system that turns a single pack shot into lifestyle, editorial, and campaign frames. The reel uses the same wipe language as the live tool.",
    href: "/projects/pixelus",
    poster: "/images/portfolio/pixelus_sneaker.png",
    videoSrc: "/videos/pixelus_reveal_sneaker.mp4",
    aspect: "portrait",
  },
  {
    slug: "dearfoams",
    index: "04",
    chapter: "Motion",
    title: "Dearfoams",
    year: "2025",
    role: "Product motion · 3D · edit",
    tools: ["Maya", "Unreal", "After Effects", "Premiere"],
    summary:
      "Client product animation for Marshmellow and EasyMellow. Turntable, lighting, and branded motion built as a commercial deliverable, not a demo.",
    href: "/3d-art",
    poster: "/images/artstation/easymellow/cover.webp",
    videoSrc: "/videos/artstation/dearfoams-product-2.mp4",
  },
  {
    slug: "astronaut",
    index: "05",
    chapter: "Character",
    title: "Astronaut",
    year: "2024",
    role: "Lookdev · lighting · real-time",
    tools: ["ZBrush", "Substance", "UE5", "XGen"],
    summary:
      "A path-traced character study: layered skin, XGen hair, Metahuman eyes, and a light-sweep turn used as a motion graphic closer.",
    href: "/projects/astronaut",
    poster: "/images/portfolio/astronaut_helmet34.jpg",
    videoSrc: "/videos/astronaut_light_sweep.mp4",
  },
  {
    slug: "maude",
    index: "06",
    chapter: "Systems",
    title: "MAUDE",
    year: "2026",
    role: "Design · architecture · product",
    tools: ["Nemotron", "DGX Spark", "Python", "React"],
    summary:
      "A local AI operating environment: one gateway, five clients, 170 tools. The feature cut is the systems half of the same portfolio — motion taste applied to product.",
    href: "/projects/maude",
    poster: "/images/projects/maude.png",
    videoSrc: "/videos/maude-feature-video.mp4",
  },
];

export const reelClips: ReelClip[] = [
  {
    title: "Bison Stampede",
    subtitle: "Chevrolet Colorado · Kling v3",
    poster: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
    href: "/portfolio",
  },
  {
    title: "Red Carpet Arrival",
    subtitle: "Cadillac Escalade · Kling v3",
    poster: "/images/portfolio/escalade_red_carpet.png",
    videoSrc: "/videos/escalade_red_carpet_kling3.mp4",
    href: "/portfolio",
  },
  {
    title: "World Transitions",
    subtitle: "Chevrolet Blazer · Kling v3",
    poster: "/images/portfolio/blazer_mountain_lodge.png",
    videoSrc: "/videos/blazer_transition_moving_kling3.mp4",
    href: "/portfolio",
  },
  {
    title: "Astronaut Light Sweep",
    subtitle: "UE5 path tracing",
    poster: "/images/portfolio/astronaut_helmet34.jpg",
    videoSrc: "/videos/astronaut_light_sweep.mp4",
    href: "/projects/astronaut",
  },
  {
    title: "STRATOS X9",
    subtitle: "Pixelus product placement",
    poster: "/images/portfolio/pixelus_sneaker.png",
    videoSrc: "/videos/pixelus_reveal_sneaker.mp4",
    href: "/projects/pixelus",
    aspect: "portrait",
  },
  {
    title: "DUSK by Obsidian",
    subtitle: "Pixelus product placement",
    poster: "/images/portfolio/pixelus_cologne.png",
    videoSrc: "/videos/pixelus_reveal_cologne.mp4",
    href: "/projects/pixelus",
    aspect: "portrait",
  },
  {
    title: "MERIDIAN Chronograph",
    subtitle: "Pixelus product placement",
    poster: "/images/portfolio/pixelus_watch.png",
    videoSrc: "/videos/pixelus_reveal_watch.mp4",
    href: "/projects/pixelus",
    aspect: "portrait",
  },
  {
    title: "EasyMellow",
    subtitle: "Dearfoams · product motion",
    poster: "/images/artstation/easymellow/cover.webp",
    videoSrc: "/videos/artstation/easymellow-16x9.mp4",
    href: "/3d-art",
  },
];

export const stills = [
  {
    src: "/images/portfolio/corvette_neon_city.png",
    title: "Neon City",
    caption: "Corvette · Flux 2 Pro",
  },
  {
    src: "/images/portfolio/nike/mens1_lifestyle.png",
    title: "Volcanic Edge",
    caption: "Nike · Flux 2 Dev",
  },
  {
    src: "/images/portfolio/01_beachfront_residential_golden_hour.png",
    title: "Beachfront Residence",
    caption: "Arch-viz · Flux 2 Dev",
  },
  {
    src: "/images/portfolio/lyriq_rooftop_helipad.png",
    title: "Rooftop Helipad",
    caption: "Cadillac Lyriq · Flux 2 Pro",
  },
  {
    src: "/images/portfolio/nike/mens5_artistic.png",
    title: "City Lights",
    caption: "Jordan 1 · Flux 2 Dev",
  },
  {
    src: "/images/portfolio/archviz_sculpture_hall.png",
    title: "Sculpture Hall",
    caption: "Machina Prima · Gaussian splat",
  },
];

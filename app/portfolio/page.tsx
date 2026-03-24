"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background3DWrapper from "../components/Background3DWrapper";
import SectionHeading from "../components/SectionHeading";
import ScrollReveal from "../components/ScrollReveal";

interface PortfolioItem {
  src: string;
  videoSrc?: string;
  title: string;
  subject: string;
  scene: string;
  model: string;
  tags: string[];
  category: "automotive" | "product" | "sketches" | "nike";
  aspect?: "video" | "square";
}

const portfolioItems: PortfolioItem[] = [
  // ═══════════════════════════════════════════
  // AUTOMOTIVE — Video
  // ═══════════════════════════════════════════
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    videoSrc: "/videos/colorado_bison_stampede_v3_kling3.mp4",
    title: "Bison Stampede",
    subject: "Chevrolet Colorado",
    scene: "Leading a bison stampede across the Montana prairie",
    model: "Kling v3",
    tags: ["Chevrolet", "Truck", "Video", "Action"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    videoSrc: "/videos/escalade_red_carpet_kling3.mp4",
    title: "Red Carpet Arrival",
    subject: "Cadillac Escalade",
    scene: "VIP arrival with paparazzi flashbulbs",
    model: "Kling v3",
    tags: ["Cadillac", "SUV", "Video", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    videoSrc: "/videos/blazer_transition_moving_kling3.mp4",
    title: "World Transitions",
    subject: "Chevrolet Blazer",
    scene: "Driving through rapidly shifting environments",
    model: "Kling v3",
    tags: ["Chevrolet", "SUV", "Video", "Cinematic"],
    category: "automotive",
  },
  // ═══════════════════════════════════════════
  // AUTOMOTIVE — Stills
  // ═══════════════════════════════════════════
  // Chevrolet Colorado
  {
    src: "/images/portfolio/colorado_desert_canyon.png",
    title: "Desert Canyon",
    subject: "Chevrolet Colorado",
    scene: "Golden hour at the canyon edge",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_mountain_night.png",
    title: "Mountain Night",
    subject: "Chevrolet Colorado",
    scene: "Rain-soaked forest road at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_job_site_sunrise.png",
    title: "Job Site Sunrise",
    subject: "Chevrolet Colorado",
    scene: "Mountain construction site at dawn",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Work"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Colorado",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/colorado_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Colorado",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Truck", "Wireframe"],
    category: "automotive",
  },
  // Chevrolet Corvette
  {
    src: "/images/portfolio/corvette_coastal_sunset.png",
    title: "Coastal Sunset",
    subject: "Chevrolet Corvette",
    scene: "Pacific coast highway overlook",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_neon_city.png",
    title: "Neon City",
    subject: "Chevrolet Corvette",
    scene: "Rain-drenched neon streets at night",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_racetrack.png",
    title: "Racetrack",
    subject: "Chevrolet Corvette",
    scene: "Mid-corner action with tire smoke",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Action"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Corvette",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/corvette_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Corvette",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "Sports Car", "Wireframe"],
    category: "automotive",
  },
  // Chevrolet Blazer
  {
    src: "/images/portfolio/blazer_mountain_lodge.png",
    title: "Mountain Lodge",
    subject: "Chevrolet Blazer",
    scene: "Aspen ski resort in winter",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Winter"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_autumn_road.png",
    title: "Autumn Road",
    subject: "Chevrolet Blazer",
    scene: "Fall foliage canopy drive",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_clay.png",
    title: "Clay Render",
    subject: "Chevrolet Blazer",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/blazer_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Chevrolet Blazer",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Chevrolet", "SUV", "Wireframe"],
    category: "automotive",
  },
  // Cadillac Lyriq
  {
    src: "/images/portfolio/lyriq_rooftop_helipad.png",
    title: "Rooftop Helipad",
    subject: "Cadillac Lyriq",
    scene: "Downtown skyline at blue hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_vineyard_estate.png",
    title: "Vineyard Estate",
    subject: "Cadillac Lyriq",
    scene: "Napa Valley golden hour",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Landscape"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_art_gallery.png",
    title: "Art Gallery",
    subject: "Cadillac Lyriq",
    scene: "Modern minimalist architecture at dusk",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Urban"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_clay.png",
    title: "Clay Render",
    subject: "Cadillac Lyriq",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/lyriq_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Cadillac Lyriq",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "EV", "Wireframe"],
    category: "automotive",
  },
  // Cadillac Escalade
  {
    src: "/images/portfolio/escalade_snow_resort.png",
    title: "Snow Resort",
    subject: "Cadillac Escalade",
    scene: "Grand ski resort valet in snowfall",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Winter"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_red_carpet.png",
    title: "Red Carpet",
    subject: "Cadillac Escalade",
    scene: "VIP arrival, city skyline at night",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Night"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_mansion_pool.png",
    title: "Mansion",
    subject: "Cadillac Escalade",
    scene: "Modern estate at sunset",
    model: "Flux 2 Klein",
    tags: ["Cadillac", "SUV", "Luxury"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_clay.png",
    title: "Clay Render",
    subject: "Cadillac Escalade",
    scene: "Studio clay model, sculptural form study",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "SUV", "Clay"],
    category: "automotive",
  },
  {
    src: "/images/portfolio/escalade_wireframe.png",
    title: "NURBS Wireframe",
    subject: "Cadillac Escalade",
    scene: "Parametric surface wireframe visualization",
    model: "Flux 2 Pro",
    tags: ["Cadillac", "SUV", "Wireframe"],
    category: "automotive",
  },

  // ═══════════════════════════════════════════
  // PRODUCT — Before & After with Wipe Videos
  // ═══════════════════════════════════════════
  {
    src: "/images/portfolio/pixelus_cologne_ba.png",
    videoSrc: "/videos/pixelus_cologne_wipe.mp4",
    title: "DUSK by Obsidian",
    subject: "Cologne",
    scene: "Driftwood on a sunset beach",
    model: "FLUX + Inpainting",
    tags: ["Fragrance", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_watch_ba.png",
    videoSrc: "/videos/pixelus_watch_wipe.mp4",
    title: "MERIDIAN Chronograph",
    subject: "Watch",
    scene: "Dark crystal and obsidian display",
    model: "FLUX + Inpainting",
    tags: ["Accessories", "Luxury", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_headphones_ba.png",
    videoSrc: "/videos/pixelus_headphones_wipe.mp4",
    title: "AETHER Studio",
    subject: "Headphones",
    scene: "Recording studio mixing console",
    model: "FLUX + Inpainting",
    tags: ["Tech", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_lipstick_ba.png",
    videoSrc: "/videos/pixelus_lipstick_wipe.mp4",
    title: "VELOUR No. 7",
    subject: "Lipstick",
    scene: "Red velvet and rose petals",
    model: "FLUX + Inpainting",
    tags: ["Beauty", "Luxury", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_detergent_ba.png",
    videoSrc: "/videos/pixelus_detergent_wipe.mp4",
    title: "SUDSWORTH Ultra",
    subject: "Detergent",
    scene: "Rustic laundry shelf with folded linens",
    model: "FLUX + Inpainting",
    tags: ["Household", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_toothpaste_ba.png",
    videoSrc: "/videos/pixelus_toothpaste_wipe.mp4",
    title: "PEARL Standard",
    subject: "Toothpaste",
    scene: "Marble bathroom counter with mint",
    model: "FLUX + Inpainting",
    tags: ["Personal Care", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_deodorant_ba.png",
    videoSrc: "/videos/pixelus_deodorant_wipe.mp4",
    title: "DRIFT GUARD",
    subject: "Deodorant",
    scene: "Concrete shelf with sea salt and towels",
    model: "FLUX + Inpainting",
    tags: ["Personal Care", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_handsoap_ba.png",
    videoSrc: "/videos/pixelus_handsoap_wipe.mp4",
    title: "HAVEN",
    subject: "Hand Soap",
    scene: "Family handwashing at farmhouse sink",
    model: "FLUX 2 Dev + BRIA",
    tags: ["Personal Care", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_bodywash_ba.png",
    videoSrc: "/videos/pixelus_bodywash_wipe.mp4",
    title: "TORRENT Maui Chill",
    subject: "Body Wash",
    scene: "Hawaiian lava rock with crashing waves",
    model: "FLUX 2 Dev + BRIA",
    tags: ["Personal Care", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },
  {
    src: "/images/portfolio/pixelus_bodywash_lava_ba.png",
    videoSrc: "/videos/pixelus_bodywash_lava_wipe.mp4",
    title: "TORRENT Volcanic Blast",
    subject: "Body Wash",
    scene: "Volcanic eruption with lava and fire",
    model: "FLUX 2 Dev + BRIA",
    tags: ["Personal Care", "Lifestyle", "Video"],
    category: "product",
    aspect: "square",
  },

  // ═══════════════════════════════════════════
  // SKETCHES — Hand-drawn & LoRA-generated
  // ═══════════════════════════════════════════
  // Hand-drawn marker sketches
  {
    src: "/images/portfolio/sketch_mech_01.jpeg",
    title: "Mech Studies I",
    subject: "Marker on Paper",
    scene: "Six mechanical walker concepts",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_02.jpeg",
    title: "Mech Studies II",
    subject: "Marker on Paper",
    scene: "Artillery walker and scout variants",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_03.jpeg",
    title: "Mech Studies III",
    subject: "Marker on Paper",
    scene: "Heavy combat walker designs",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_mech_04.jpeg",
    title: "Mech Studies IV",
    subject: "Marker on Paper",
    scene: "Bipedal and quadruped variants",
    model: "Hand-drawn",
    tags: ["Marker", "Concept Art", "Mechs"],
    category: "sketches",
  },
  // LoRA-generated from marker style
  {
    src: "/images/portfolio/sketch_gen_sculpture_hall.png",
    title: "Sculpture Hall",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_installation.png",
    title: "Suspended Installation",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_projection.png",
    title: "Projection Room",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/portfolio/sketch_gen_centerpiece.png",
    title: "Rotunda Centerpiece",
    subject: "Marker-Mech LoRA",
    scene: "Generated exhibit room from sketch style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Architecture", "Generated"],
    category: "sketches",
  },
  // Stillion LoRA-generated paintings
  {
    src: "/images/projects/stillion-gen1.jpg",
    title: "Face Jug & Poppies",
    subject: "Stillion Style LoRA",
    scene: "Generated painting in Stillion\u2019s oil style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Painting", "Generated"],
    category: "sketches",
  },
  {
    src: "/images/projects/stillion-gen2.jpg",
    title: "Abstract Portrait",
    subject: "Stillion Style LoRA",
    scene: "Generated painting in Stillion\u2019s oil style",
    model: "FLUX LoRA",
    tags: ["LoRA", "Painting", "Generated"],
    category: "sketches",
  },
  // ═══════════════════════════════════════════
  // NIKE — Mens
  // ═══════════════════════════════════════════
  // Mens 1 — White Runner / Red Swoosh
  {
    src: "/images/portfolio/nike/mens1_lifestyle.png",
    title: "Volcanic Edge",
    subject: "Nike Runner — Mens",
    scene: "Pre-dawn at a volcanic crater, molten lava glow below",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Lifestyle", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens1_product_ad_text.png",
    title: "Void Spotlight",
    subject: "Nike Runner — Mens",
    scene: "Floating in black void with single overhead spotlight",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Product Ad", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens1_artistic.png",
    title: "Glass Shatter",
    subject: "Nike Runner — Mens",
    scene: "Exploding into red and white glass shards, freeze-frame",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Artistic", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens1_clay.png",
    title: "Clay Render",
    subject: "Nike Runner — Mens",
    scene: "Matte grey clay sculpture, studio lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Clay", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens1_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Runner — Mens",
    scene: "Cyan wireframe mesh on dark blueprint background",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Wireframe", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens1_on_model.png",
    title: "Trail Runner",
    subject: "Nike Runner — Mens",
    scene: "Mid-stride on a mountain trail at golden hour",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Runner"],
    category: "nike",
    aspect: "square",
  },
  // Mens 2 — White/Blue Runner / Black Swoosh
  {
    src: "/images/portfolio/nike/mens2_lifestyle.png",
    title: "Glacial Peak",
    subject: "Nike Runner — Mens",
    scene: "Balanced on the tip of a glacial iceberg, arctic blue water",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Lifestyle", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens2_product_ad_text.png",
    title: "Black Glass",
    subject: "Nike Runner — Mens",
    scene: "Reflective black glass surface, blue gradient background",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Product Ad", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens2_artistic.png",
    title: "Underwater Cathedral",
    subject: "Nike Runner — Mens",
    scene: "Submerged in crystal-clear tropical water with fish",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Artistic", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens2_clay.png",
    title: "Clay Render",
    subject: "Nike Runner — Mens",
    scene: "Matte white porcelain clay sculpture, museum pedestal",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Clay", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens2_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Runner — Mens",
    scene: "Electric blue wireframe with holographic annotations",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Wireframe", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens2_on_model.png",
    title: "Track Ready",
    subject: "Nike Runner — Mens",
    scene: "Sprinter crouched in starting blocks on the track",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Runner"],
    category: "nike",
    aspect: "square",
  },
  // Mens 3 — Black/Grey Air Max Excee
  {
    src: "/images/portfolio/nike/mens3_lifestyle.png",
    title: "Storm Front",
    subject: "Nike Air Max Excee — Mens",
    scene: "Unfinished skyscraper ledge, thunderstorm approaching",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Lifestyle", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens3_product_ad_text.png",
    title: "Smoke Reveal",
    subject: "Nike Air Max Excee — Mens",
    scene: "Emerging from theatrical smoke, hard spotlight",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Product Ad", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens3_artistic.png",
    title: "Dutch Still Life",
    subject: "Nike Air Max Excee — Mens",
    scene: "Golden Age painting — candle, velvet, chiaroscuro",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Artistic", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens3_clay.png",
    title: "Clay Render",
    subject: "Nike Air Max Excee — Mens",
    scene: "Dark grey clay, dramatic directional lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Clay", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens3_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Air Max Excee — Mens",
    scene: "White wireframe on black, air bubble as mesh void",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Wireframe", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens3_on_model.png",
    title: "Tokyo Nights",
    subject: "Nike Air Max Excee — Mens",
    scene: "Stepping off a curb in Shibuya at night, neon reflections",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  // Mens 4 — Red Leather Court Vision
  {
    src: "/images/portfolio/nike/mens4_lifestyle.png",
    title: "Boxing Ring",
    subject: "Nike Court Vision — Mens",
    scene: "Weathered boxing ring canvas, harsh overhead lights",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Lifestyle", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_product_ad_text.png",
    title: "Crimson Mirror",
    subject: "Nike Court Vision — Mens",
    scene: "Mirrored surface, deep crimson gradient background",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Product Ad", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_artistic.png",
    title: "Field of Roses",
    subject: "Nike Court Vision — Mens",
    scene: "Vast field of red roses, morning dew, golden backlight",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Artistic", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_clay.png",
    title: "Clay Render",
    subject: "Nike Court Vision — Mens",
    scene: "Terracotta clay sculpture, museum gallery lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Clay", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Court Vision — Mens",
    scene: "Red wireframe mesh, leather panels as distinct sections",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Wireframe", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_on_model.png",
    title: "Skatepark Stand",
    subject: "Nike Court Vision — Mens",
    scene: "Standing atop a halfpipe, foot on the skateboard",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens4_ollie.png",
    title: "Ollie",
    subject: "Nike Court Vision — Mens",
    scene: "Mid-ollie at a skatepark, golden hour",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  // Mens 5 — White/Red Jordan 1 Mid
  {
    src: "/images/portfolio/nike/mens5_lifestyle.png",
    title: "Center Court",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "Empty basketball arena, golden light through high windows",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Lifestyle", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens5_product_ad_text.png",
    title: "Red Streak",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "Floating against black, diagonal red light slash",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Product Ad", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens5_artistic.png",
    title: "City Lights Double Exposure",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "Shoe silhouette filled with aerial nighttime cityscape",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Artistic", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens5_clay.png",
    title: "Clay Render",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "Grey clay sculpture, iconic high-top silhouette",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Clay", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens5_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "White-red gradient holographic wireframe projection",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "Wireframe", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/mens5_on_model.png",
    title: "Court Presence",
    subject: "Nike Jordan 1 Mid — Mens",
    scene: "Standing on the basketball court holding the ball",
    model: "Flux 2 Dev",
    tags: ["Nike", "Mens", "On Model", "Jordan"],
    category: "nike",
    aspect: "square",
  },
  // ═══════════════════════════════════════════
  // NIKE — Womens
  // ═══════════════════════════════════════════
  // Womens 1 — Mauve/Plum Air Max Pulse
  {
    src: "/images/portfolio/nike/womens1_lifestyle.png",
    title: "Parisian Chic",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Velvet chaise in a Parisian apartment, golden afternoon light",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Lifestyle", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens1_product_ad_text.png",
    title: "Marble Elegance",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Carrara marble slab, mauve-to-cream gradient",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Product Ad", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens1_artistic.png",
    title: "Lavender Fields",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Endless Provence lavender field at golden hour",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Artistic", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens1_clay.png",
    title: "Clay Render",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Ivory clay sculpture, ceramic art gallery lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Clay", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens1_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Rose gold wireframe mesh, warm metallic lines",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Wireframe", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens1_on_model.png",
    title: "Parisian Stroll",
    subject: "Nike Air Max Pulse — Womens",
    scene: "Walking on sunlit Parisian cobblestones, cafe terrace",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "On Model", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  // Womens 2 — Soft Pink Court Vision
  {
    src: "/images/portfolio/nike/womens2_lifestyle.png",
    title: "Ballet Studio",
    subject: "Nike Court Vision — Womens",
    scene: "Sunlit ballet studio, hardwood floors, morning light",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Lifestyle", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens2_product_ad_text.png",
    title: "Blush Glow",
    subject: "Nike Court Vision — Womens",
    scene: "Frosted glass, blush pink gradient, ethereal lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Product Ad", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens2_artistic.png",
    title: "Frozen in Ice",
    subject: "Nike Court Vision — Womens",
    scene: "Frozen inside crystal-clear ice with frost patterns",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Artistic", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens2_clay.png",
    title: "Clay Render",
    subject: "Nike Court Vision — Womens",
    scene: "Blush-white clay sculpture, soft overhead lighting",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Clay", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens2_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Court Vision — Womens",
    scene: "Soft pink wireframe on black, perforations as circles",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Wireframe", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens2_on_model.png",
    title: "Boardwalk Sunset",
    subject: "Nike Court Vision — Womens",
    scene: "Standing at boardwalk railing, golden sunset, palm shadows",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "On Model", "Court Vision"],
    category: "nike",
    aspect: "square",
  },
  // Womens 3 — White Air Max / Hot Pink Swoosh
  {
    src: "/images/portfolio/nike/womens3_lifestyle.png",
    title: "European Alley",
    subject: "Nike Air Max — Womens",
    scene: "Rain-wet cobblestones at blue hour, cafe light reflections",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Lifestyle", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens3_product_ad_text.png",
    title: "Paint Explosion",
    subject: "Nike Air Max — Womens",
    scene: "Hot pink paint splash frozen mid-air behind the shoe",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Product Ad", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens3_artistic.png",
    title: "Giant Peony",
    subject: "Nike Air Max — Womens",
    scene: "Resting on an enormous pink peony, macro dew drops",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Artistic", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens3_clay.png",
    title: "Clay Render",
    subject: "Nike Air Max — Womens",
    scene: "White porcelain clay, subtle translucency at edges",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Clay", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens3_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Air Max — Womens",
    scene: "Hot magenta wireframe, pulsing intersection nodes",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Wireframe", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens3_on_model.png",
    title: "Gym Floor",
    subject: "Nike Air Max — Womens",
    scene: "Athletic stance on gym floor, kettlebell between feet",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "On Model", "Air Max"],
    category: "nike",
    aspect: "square",
  },
  // Womens 4 — White/Pink Gradient Runner
  {
    src: "/images/portfolio/nike/womens4_lifestyle.png",
    title: "Cliff Sunrise",
    subject: "Nike Runner — Womens",
    scene: "Yoga mat at a sea cliff edge, pink and gold sunrise",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Lifestyle", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens4_product_ad_text.png",
    title: "Acrylic Dawn",
    subject: "Nike Runner — Womens",
    scene: "Clear acrylic block, sunrise gradient background",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Product Ad", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens4_artistic.png",
    title: "Flamingo Flight",
    subject: "Nike Runner — Womens",
    scene: "Dissolving into pink flamingos taking flight at sunset",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Artistic", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens4_clay.png",
    title: "Clay Render",
    subject: "Nike Runner — Womens",
    scene: "Warm white clay, Scandinavian design exhibit aesthetic",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Clay", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens4_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Runner — Womens",
    scene: "Coral-to-white gradient wireframe, measurement annotations",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Wireframe", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens4_on_model.png",
    title: "Trailhead Dawn",
    subject: "Nike Runner — Womens",
    scene: "Standing at coastal trailhead at sunrise, ready to run",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "On Model", "Runner"],
    category: "nike",
    aspect: "square",
  },
  // Womens 5 — White/Purple-Blue Gradient Runner
  {
    src: "/images/portfolio/nike/womens5_lifestyle.png",
    title: "Infinity Pool Dusk",
    subject: "Nike Runner — Womens",
    scene: "Infinity pool edge at purple dusk, mountain silhouettes",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Lifestyle", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens5_product_ad_text.png",
    title: "Aurora",
    subject: "Nike Runner — Womens",
    scene: "Aurora borealis gradient, purple and teal background",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Product Ad", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens5_artistic.png",
    title: "Zero Gravity",
    subject: "Nike Runner — Womens",
    scene: "Floating in a space station, Earth visible through window",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Artistic", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens5_clay.png",
    title: "Clay Render",
    subject: "Nike Runner — Womens",
    scene: "Lavender-grey clay sculpture, contemporary gallery",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Clay", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens5_nurbs.png",
    title: "NURBS Wireframe",
    subject: "Nike Runner — Womens",
    scene: "Purple-to-blue gradient wireframe, holographic projection",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "Wireframe", "Runner"],
    category: "nike",
    aspect: "square",
  },
  {
    src: "/images/portfolio/nike/womens5_on_model.png",
    title: "Mountain Morning",
    subject: "Nike Runner — Womens",
    scene: "Mountain pose on yoga mat at misty dawn",
    model: "Flux 2 Dev",
    tags: ["Nike", "Womens", "On Model", "Runner"],
    category: "nike",
    aspect: "square",
  },
];

const categories = [
  { key: "All", label: "All" },
  { key: "automotive", label: "Automotive" },
  { key: "product", label: "Product" },
  { key: "sketches", label: "Sketches" },
  { key: "nike", label: "Nike" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  return (
    <>
      <Background3DWrapper />
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
            label="AI-Generated Portfolio"
            title="Creative Imagery"
            subtitle="Automotive scene generation, AI product placement, and LoRA-trained style transfer. Every image is AI-generated from reference photos and text prompts — no compositing or manual editing."
          />

          {/* Category filter */}
          <ScrollReveal>
            <div
              className="flex flex-wrap gap-2"
              style={{ marginBottom: "3rem" }}
            >
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 border ${
                    filter === c.key
                      ? "bg-[var(--accent)]/10 border-[var(--accent)] text-[var(--accent)]"
                      : "bg-[var(--surface)] border-[var(--surface-border)] text-[var(--text-secondary)] hover:border-[var(--accent)]/40 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Image grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.category}-${item.title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(item)}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-[var(--surface-border)] bg-[var(--surface)] hover:border-[var(--accent)]/30 transition-all duration-300"
                  style={{
                    boxShadow: "0 0 0 0 transparent",
                  }}
                  whileHover={{
                    boxShadow: "0 0 30px rgba(0, 212, 255, 0.08)",
                  }}
                >
                  <div className={`relative overflow-hidden ${item.aspect === "square" ? "aspect-square" : "aspect-video"}`}>
                    {item.videoSrc ? (
                      <video
                        src={item.videoSrc}
                        poster={item.src}
                        muted
                        loop
                        playsInline
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={`${item.subject} — ${item.title}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <h3
                      className="text-base font-semibold text-[var(--text-primary)]"
                      style={{ marginBottom: "0.35rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-[var(--text-secondary)]"
                      style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}
                    >
                      {item.subject} &mdash; {item.scene}
                    </p>
                    <span className="text-xs font-[family-name:var(--font-geist-mono)] text-[var(--text-muted)] bg-[var(--background)] px-2 py-1 rounded">
                      {item.model}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Method note */}
          <ScrollReveal>
            <div
              className="border-t border-[var(--surface-border)]"
              style={{ marginTop: "5rem", paddingTop: "3rem" }}
            >
              <h3
                className="text-lg font-semibold text-[var(--text-primary)]"
                style={{ marginBottom: "1.5rem" }}
              >
                Method
              </h3>
              <div
                className="text-[var(--text-secondary)] max-w-3xl"
                style={{ lineHeight: 1.8 }}
              >
                <p style={{ marginBottom: "1.25rem" }}>
                  <span className="text-[var(--text-primary)]">Automotive:</span>{" "}
                  Each image starts with a single reference photograph of the vehicle.
                  The reference is passed to a Flux model via Replicate&apos;s API as an
                  image prompt with configurable conditioning strength (0.4&ndash;0.55),
                  alongside a detailed scene description. Videos are generated with Kling v3 image-to-video.
                </p>
                <p style={{ marginBottom: "1.25rem" }}>
                  <span className="text-[var(--text-primary)]">Product:</span>{" "}
                  Product shots use FLUX scene generation with AI inpainting for precise
                  product placement and depth-aware blending. A single product photo on a white
                  background is composited into a professionally lit environment &mdash;
                  the AI handles lighting, shadows, and spatial integration automatically.
                </p>
                <p>
                  <span className="text-[var(--text-primary)]">Sketches:</span>{" "}
                  Hand-drawn marker sketches were used as training data for custom FLUX LoRAs.
                  The trained models generate new images in the learned style &mdash; from
                  architectural exhibit concepts to oil painting reproductions. No manual editing
                  is applied to the generated outputs.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
            style={{ padding: "2rem" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: lightbox.aspect === "square" ? "1/1" : "16/9", maxHeight: "75vh" }}>
                {lightbox.videoSrc ? (
                  <video
                    src={lightbox.videoSrc}
                    autoPlay
                    loop
                    controls
                    playsInline
                    className="w-full h-full object-contain rounded-lg"
                  />
                ) : (
                  <Image
                    src={lightbox.src}
                    alt={`${lightbox.subject} — ${lightbox.title}`}
                    fill
                    sizes="100vw"
                    className="object-contain rounded-lg"
                    priority
                  />
                )}
              </div>
              <div
                className="text-center"
                style={{ marginTop: "1.5rem" }}
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {lightbox.subject} &mdash; {lightbox.title}
                </h3>
                <p
                  className="text-sm text-[var(--text-secondary)]"
                  style={{ marginTop: "0.5rem" }}
                >
                  {lightbox.scene} &middot; {lightbox.model}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors flex items-center justify-center text-lg"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

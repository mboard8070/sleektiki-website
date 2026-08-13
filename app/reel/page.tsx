import type { Metadata } from "next";
import ReelExperience from "./ReelExperience";

export const metadata: Metadata = {
  title: "Motion + AI Reel | Matthew Board",
  description:
    "Professional motion graphics and creative AI showreel — exhibition animation, product motion, cinematic AI, and production systems by Matthew Board.",
  openGraph: {
    title: "Matthew Board — Motion Graphics + Creative AI",
    description:
      "Showreel and selected case studies: Dusty at CAC/Blink, Dearfoams product motion, automotive AI, Pixelus, and MAUDE.",
    url: "https://sleektiki.ai/reel",
    images: [
      {
        url: "https://sleektiki.ai/images/portfolio/reel_poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Matthew Board motion and AI showreel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Board — Motion Graphics + Creative AI",
    description:
      "Showreel and selected case studies in motion graphics and creative AI.",
    images: ["https://sleektiki.ai/images/portfolio/reel_poster.jpg"],
  },
};

export default function ReelPage() {
  return <ReelExperience />;
}

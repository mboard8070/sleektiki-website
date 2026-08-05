import type { Metadata } from "next";

// Portfolio entries change with manual deploys; do not let CDN/HTML
// caches hold a year-old snapshot of the gallery.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "3D Art | SleekTiki",
  description: "3D character, creature, hard-surface, and commercial product work.",
};

export default function ThreeDArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

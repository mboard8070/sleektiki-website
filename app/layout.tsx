import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthew Board | sleektiki.ai",
  description:
    "Technical artist, indie developer, and creative AI researcher exploring the intersection of artificial intelligence and 3D content creation.",
  keywords: [
    "Matthew Board",
    "sleektiki",
    "technical artist",
    "game developer",
    "creative AI",
    "3D artist",
    "NVIDIA",
    "Unreal Engine",
  ],
  openGraph: {
    title: "Matthew Board | sleektiki.ai",
    description:
      "Technical artist, indie developer, and creative AI researcher.",
    url: "https://sleektiki.ai",
    siteName: "sleektiki.ai",
    type: "website",
    images: [
      {
        url: "https://sleektiki.ai/images/sleektiki_banner.jpeg",
        width: 1400,
        height: 350,
        alt: "sleektiki.ai banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthew Board | sleektiki.ai",
    description:
      "Technical artist, indie developer, and creative AI researcher.",
    images: ["https://sleektiki.ai/images/sleektiki_banner.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}

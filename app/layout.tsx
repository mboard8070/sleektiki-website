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
  metadataBase: new URL("https://sleektiki.ai"),
  title: "Matthew Board — Creative Technologist | sleektiki.ai",
  description:
    "Creative technologist. AI enablement, product visualization, Unreal pipelines, and the tools that make them repeatable.",
  keywords: [
    "Matthew Board",
    "sleektiki",
    "creative technologist",
    "AI enablement",
    "technical artist",
    "product visualization",
    "Unreal Engine",
    "NVIDIA",
  ],
  openGraph: {
    title: "Matthew Board — Creative Technologist | sleektiki.ai",
    description:
      "AI enablement, product visualization, and Unreal production pipelines.",
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
    title: "Matthew Board — Creative Technologist | sleektiki.ai",
    description:
      "AI enablement, product visualization, and Unreal production pipelines.",
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

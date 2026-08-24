import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
      {
        source: "/.well-known/apple-app-site-association.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
      {
        source: "/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
    ];
  },
  // Clean URL + trailing-slash fallbacks for the static HLMN brief.
  // The App Router route at app/hillman_dashboard/route.ts is the primary
  // handler; these rewrites cover hosts that prefer public/ assets.
  async rewrites() {
    return [
      {
        source: "/hillman_dashboard/",
        destination: "/hillman_dashboard/index.html",
      },
      {
        source: "/.well-known/apple-app-site-association",
        destination: "/.well-known/apple-app-site-association.json",
      },
    ];
  },
  async redirects() {
    return [
      { source: "/reel", destination: "/", permanent: false },
      { source: "/reel/:path*", destination: "/", permanent: false },
      { source: "/showreel", destination: "/", permanent: false },
      { source: "/showreel/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;

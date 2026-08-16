import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean URL + trailing-slash fallbacks for the static HLMN brief.
  // The App Router route at app/hillman_dashboard/route.ts is the primary
  // handler; these rewrites cover hosts that prefer public/ assets.
  async rewrites() {
    return [
      {
        source: "/hillman_dashboard/",
        destination: "/hillman_dashboard/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/reel",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store, no-cache, must-revalidate, max-age=0",
          },
          { key: "CDN-Cache-Control", value: "no-store" },
          { key: "Cloudflare-CDN-Cache-Control", value: "no-store" },
        ],
      },
    ];
  },
};

export default nextConfig;

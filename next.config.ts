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
};

export default nextConfig;

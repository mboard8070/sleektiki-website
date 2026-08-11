import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve the static HLMN brief at a clean path without /index.html
      {
        source: "/hillman_dashboard",
        destination: "/hillman_dashboard/index.html",
      },
      {
        source: "/hillman_dashboard/",
        destination: "/hillman_dashboard/index.html",
      },
    ];
  },
};

export default nextConfig;

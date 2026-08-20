import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reel", destination: "/", permanent: false },
      { source: "/reel/:path*", destination: "/", permanent: false },
      { source: "/showreel", destination: "/", permanent: false },
      { source: "/showreel/:path*", destination: "/", permanent: false },
      { source: "/hillman_dashboard", destination: "/", permanent: true },
      { source: "/hillman_dashboard/", destination: "/", permanent: true },
      { source: "/hillman_dashboard.html", destination: "/", permanent: true },
      { source: "/hillman_dashboard/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;

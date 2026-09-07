import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // AdMob's app-ads.txt crawler. Google asks for this record explicitly.
      {
        userAgent: "Google-adstxt",
        allow: "/",
      },
      {
        userAgent: "Mediapartners-Google",
        allow: "/",
      },
    ],
    sitemap: "https://sleektiki.ai/sitemap.xml",
  };
}

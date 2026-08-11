import { readFile } from "fs/promises";
import path from "path";

/**
 * Serve the standalone HLMN financial brief HTML at /hillman_dashboard.
 * Static public/ files alone are not always rewritten cleanly for directory
 * indexes on this host, so we stream the file from a route handler.
 */
export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "hillman_dashboard",
    "index.html"
  );
  const html = await readFile(filePath, "utf8");

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "CDN-Cache-Control": "no-store",
    },
  });
}

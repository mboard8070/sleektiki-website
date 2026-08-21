import { readFile } from "fs/promises";
import path from "path";

/**
 * Serve the standalone HLMN financial brief HTML at /hillman_dashboard.
 * Static public/ files alone are not always rewritten cleanly for directory
 * indexes on this host, so we stream the file from a route handler.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
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
        "Cloudflare-CDN-Cache-Control": "no-store",
      },
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load dashboard HTML";
    return new Response(
      `<!DOCTYPE html><html><body><h1>Dashboard unavailable</h1><pre>${message}</pre></body></html>`,
      {
        status: 500,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      }
    );
  }
}

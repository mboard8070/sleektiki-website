import { NextRequest, NextResponse } from "next/server";
import {
  PORTFOLIO_COOKIE,
  isPortfolioAuthConfigured,
  verifyAuthToken,
} from "./lib/portfolio-auth";

// Galleries that the shared password covers when the gate is on. Teaser images
// under /images/* stay public so the homepage and project cards keep rendering.
const GATED_ROOTS = ["/portfolio", "/3d-art"];

// Master switch for the password gate. Off by default — /portfolio and /3d-art
// are public. To put them back behind the password, set the env var
// PORTFOLIO_GATE_ENABLED=true (alongside PORTFOLIO_AUTH_SECRET and
// PORTFOLIO_PASSWORD, which must both still be set) and redeploy. The login
// page, auth route and token helpers are all left intact for that.
const GATE_ENABLED = process.env.PORTFOLIO_GATE_ENABLED === "true";

function isGated(pathname: string): boolean {
  return GATED_ROOTS.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`)
  );
}

function withNoStore(response: NextResponse): NextResponse {
  // Gallery HTML must not stick in CDN/browser caches for a year — portfolio
  // entries change often and stale pages hide new work after deploy.
  response.headers.set(
    "Cache-Control",
    "private, no-store, no-cache, must-revalidate, max-age=0"
  );
  response.headers.set("CDN-Cache-Control", "no-store");
  response.headers.set("Cloudflare-CDN-Cache-Control", "no-store");
  return response;
}

const AASA = JSON.stringify({
  applinks: {
    details: [
      {
        appIDs: ["B4KM44DC6D.ai.sleektiki.Silt"],
        components: [{ "/": "/cyte" }, { "/": "/cyte/*" }],
      },
    ],
  },
  appclips: {
    apps: ["B4KM44DC6D.ai.sleektiki.Silt.Clip"],
  },
});

function aasaResponse(): NextResponse {
  const bytes = new TextEncoder().encode(AASA);
  return new NextResponse(AASA, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": String(bytes.length),
      "Cache-Control": "public, max-age=300, no-transform",
    },
  });
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname === "/.well-known/apple-app-site-association" ||
    pathname === "/apple-app-site-association"
  ) {
    return aasaResponse();
  }

  // Login page must stay reachable without a cookie
  if (pathname === "/portfolio/login" || pathname.startsWith("/portfolio/login/")) {
    // With the gate off there is nothing to unlock — don't show a password form
    // for a gallery anyone can already read.
    if (!GATE_ENABLED) {
      const portfolioUrl = request.nextUrl.clone();
      portfolioUrl.pathname = "/portfolio";
      return withNoStore(NextResponse.redirect(portfolioUrl));
    }
    return withNoStore(NextResponse.next());
  }

  if (!isGated(pathname)) {
    // Homepage HTML was being served with a 1-year Next/Railway cache, so
    // Showcase removals never appeared after deploy. Do not cache `/`.
    if (
      pathname === "/" ||
      pathname === "/student-work" ||
      pathname.startsWith("/student-work/")
    ) {
      return withNoStore(NextResponse.next());
    }
    return NextResponse.next();
  }

  // Gate switched off — galleries are public, but still skip the caches so new
  // work shows up right after deploy.
  if (!GATE_ENABLED) {
    return withNoStore(NextResponse.next());
  }

  // Fail open. Without both secrets no password can ever match, so gating here
  // would make the gallery permanently unreachable instead of merely public.
  if (!isPortfolioAuthConfigured()) {
    return withNoStore(NextResponse.next());
  }

  const token = request.cookies.get(PORTFOLIO_COOKIE)?.value;
  const authed = await verifyAuthToken(token);

  if (authed) {
    return withNoStore(NextResponse.next());
  }

  // Rewrite (not redirect) so the URL stays on the gallery the visitor asked for;
  // unlocking then reloads that same URL.
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/portfolio/login";
  return withNoStore(NextResponse.rewrite(loginUrl));
}

export const config = {
  matcher: [
    "/",
    "/portfolio",
    "/portfolio/:path*",
    "/3d-art",
    "/3d-art/:path*",
    "/student-work",
    "/student-work/:path*",
    "/.well-known/apple-app-site-association",
    "/apple-app-site-association",
  ],
};

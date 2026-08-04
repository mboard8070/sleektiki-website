import { NextRequest, NextResponse } from "next/server";
import {
  PORTFOLIO_COOKIE,
  isPortfolioAuthConfigured,
  verifyAuthToken,
} from "./lib/portfolio-auth";

// Galleries behind the shared password. Teaser images under /images/* stay public
// so the homepage and project cards keep rendering.
const GATED_ROOTS = ["/portfolio", "/3d-art"];

function isGated(pathname: string): boolean {
  return GATED_ROOTS.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`)
  );
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login page must stay reachable without a cookie
  if (pathname === "/portfolio/login" || pathname.startsWith("/portfolio/login/")) {
    return NextResponse.next();
  }

  if (!isGated(pathname)) {
    return NextResponse.next();
  }

  // Fail open. Without both secrets no password can ever match, so gating here
  // would make the gallery permanently unreachable instead of merely public.
  if (!isPortfolioAuthConfigured()) {
    return NextResponse.next();
  }

  const token = request.cookies.get(PORTFOLIO_COOKIE)?.value;
  const authed = await verifyAuthToken(token);

  if (authed) {
    return NextResponse.next();
  }

  // Rewrite (not redirect) so the URL stays on the gallery the visitor asked for;
  // unlocking then reloads that same URL.
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/portfolio/login";
  return NextResponse.rewrite(loginUrl);
}

export const config = {
  matcher: ["/portfolio", "/portfolio/:path*", "/3d-art", "/3d-art/:path*"],
};

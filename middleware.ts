import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_COOKIE, verifyAuthToken } from "./lib/portfolio-auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login page must stay reachable without a cookie
  if (pathname === "/portfolio/login" || pathname.startsWith("/portfolio/login/")) {
    return NextResponse.next();
  }

  // Only gate the portfolio gallery routes (not shared teaser images used on homepage/projects)
  if (pathname !== "/portfolio" && !pathname.startsWith("/portfolio/")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(PORTFOLIO_COOKIE)?.value;
  const authed = await verifyAuthToken(token);

  if (authed) {
    return NextResponse.next();
  }

  // Rewrite to lock screen — URL stays /portfolio
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/portfolio/login";
  return NextResponse.rewrite(loginUrl);
}

export const config = {
  matcher: ["/portfolio", "/portfolio/:path*"],
};

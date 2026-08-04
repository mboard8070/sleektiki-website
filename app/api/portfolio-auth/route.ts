import { NextRequest, NextResponse } from "next/server";
import {
  PORTFOLIO_COOKIE,
  PORTFOLIO_COOKIE_MAX_AGE,
  createAuthToken,
  passwordsMatch,
} from "@/lib/portfolio-auth";

export async function POST(request: NextRequest) {
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const password = body.password ?? "";
  if (!password || !passwordsMatch(password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  let token: string;
  try {
    token = await createAuthToken();
  } catch {
    return NextResponse.json(
      { error: "Auth is not configured on the server" },
      { status: 500 }
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: PORTFOLIO_COOKIE,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: PORTFOLIO_COOKIE_MAX_AGE,
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: PORTFOLIO_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}

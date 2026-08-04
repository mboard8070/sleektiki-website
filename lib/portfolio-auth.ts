export const PORTFOLIO_COOKIE = "sleektiki_portfolio_auth";
export const PORTFOLIO_COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function getSecret(): string {
  const secret = process.env.PORTFOLIO_AUTH_SECRET;
  if (!secret) {
    throw new Error("PORTFOLIO_AUTH_SECRET is not set");
  }
  return secret;
}

export function getPortfolioPassword(): string {
  const password = process.env.PORTFOLIO_PASSWORD;
  if (!password) {
    throw new Error("PORTFOLIO_PASSWORD is not set");
  }
  return password;
}

/**
 * True only when both secrets are present. When they are missing the gate fails
 * open (portfolio stays public) rather than locking everyone out with a password
 * that cannot possibly match — see middleware.ts.
 */
export function isPortfolioAuthConfigured(): boolean {
  return Boolean(process.env.PORTFOLIO_AUTH_SECRET && process.env.PORTFOLIO_PASSWORD);
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return toHex(sig);
}

/** Create a signed auth token bound to the password. */
export async function createAuthToken(): Promise<string> {
  const password = getPortfolioPassword();
  const secret = getSecret();
  const issuedAt = Date.now().toString();
  const payload = `portfolio:${issuedAt}`;
  const sig = await hmacHex(secret, `${payload}:${password}`);
  return `${payload}.${sig}`;
}

/** Verify a signed auth token. */
export async function verifyAuthToken(
  token: string | undefined | null
): Promise<boolean> {
  if (!token) return false;

  try {
    const password = getPortfolioPassword();
    const secret = getSecret();
    const dot = token.lastIndexOf(".");
    if (dot <= 0) return false;

    const payload = token.slice(0, dot);
    const sig = token.slice(dot + 1);
    if (!payload || !sig) return false;

    const expected = await hmacHex(secret, `${payload}:${password}`);
    if (!timingSafeEqualHex(sig, expected)) return false;

    const parts = payload.split(":");
    const issuedAt = Number(parts[1]);
    if (!Number.isFinite(issuedAt)) return false;
    const ageMs = Date.now() - issuedAt;
    if (ageMs < 0 || ageMs > PORTFOLIO_COOKIE_MAX_AGE * 1000) return false;

    return true;
  } catch {
    return false;
  }
}

export function passwordsMatch(input: string): boolean {
  try {
    const expected = getPortfolioPassword();
    if (input.length !== expected.length) return false;
    let mismatch = 0;
    for (let i = 0; i < input.length; i++) {
      mismatch |= input.charCodeAt(i) ^ expected.charCodeAt(i);
    }
    return mismatch === 0;
  } catch {
    return false;
  }
}

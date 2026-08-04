"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PortfolioLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/portfolio-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Incorrect password");
        setLoading(false);
        return;
      }

      // Hard navigation so middleware re-evaluates the cookie
      router.refresh();
      window.location.href = "/portfolio";
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <main className="relative z-[1] min-h-screen">
        <Navbar />

        <section
          className="max-w-lg mx-auto flex flex-col items-center justify-center"
          style={{
            paddingLeft: "max(1.5rem, 5vw)",
            paddingRight: "max(1.5rem, 5vw)",
            paddingTop: "10rem",
            paddingBottom: "6rem",
            minHeight: "70vh",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)]"
            style={{
              padding: "2.5rem 2rem",
              boxShadow: "0 0 60px rgba(0, 212, 255, 0.06)",
            }}
          >
            <div className="flex flex-col items-center text-center" style={{ marginBottom: "2rem" }}>
              <div
                className="w-14 h-14 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 flex items-center justify-center"
                style={{ marginBottom: "1.25rem" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <p
                className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-[family-name:var(--font-geist-mono)]"
                style={{ marginBottom: "0.75rem" }}
              >
                Protected
              </p>
              <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
                Portfolio Access
              </h1>
              <p
                className="text-sm text-[var(--text-secondary)]"
                style={{ marginTop: "0.75rem", lineHeight: 1.6, maxWidth: "28rem" }}
              >
                This gallery is password-protected. Enter the access code to view
                the AI-generated portfolio work.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-left">
                <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access password"
                  className="w-full rounded-lg border border-[var(--surface-border)] bg-[var(--background)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
                  style={{ padding: "0.85rem 1rem" }}
                  required
                  disabled={loading}
                />
              </label>

              {error && (
                <p className="text-sm text-red-400 text-left" role="alert">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading || !password}
                className="w-full rounded-lg bg-[var(--accent)] text-black font-medium transition-opacity disabled:opacity-50 hover:opacity-90"
                style={{ padding: "0.9rem 1rem", marginTop: "0.25rem" }}
              >
                {loading ? "Unlocking…" : "Unlock Portfolio"}
              </button>
            </form>

            <p
              className="text-center text-xs text-[var(--text-muted)]"
              style={{ marginTop: "1.75rem" }}
            >
              Need access?{" "}
              <Link href="/#contact" className="text-[var(--accent)] hover:underline">
                Get in touch
              </Link>
            </p>
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}

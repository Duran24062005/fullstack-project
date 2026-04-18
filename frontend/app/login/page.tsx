"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";

const loginSignals = [
  "Persistent session orchestration",
  "Protected route handoff",
  "Backend-authenticated command entry",
];

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [hasHydrated, isAuthenticated, router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await login(email, password);
      router.replace("/dashboard");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to login");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!hasHydrated) {
    return (
      <div className="stockflow-shell flex items-center justify-center">
        <div className="stockflow-chip">Syncing session...</div>
      </div>
    );
  }

  return (
    <div className="stockflow-shell">
      <div className="stockflow-ambient-orb left-[-3rem] top-16 h-56 w-56 bg-[rgba(255,154,60,0.3)]" />
      <div className="stockflow-ambient-orb bottom-8 right-[-2rem] h-72 w-72 bg-[rgba(36,213,232,0.22)]" />

      <div className="stockflow-container flex min-h-screen flex-col justify-center py-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <section className="stockflow-reveal">
            <Link href="/" className="stockflow-brand">
              <span className="stockflow-brand-mark">
                <span className="material-symbols-outlined">deployed_code</span>
              </span>
              StockFlow
            </Link>

            <div className="mt-10">
              <div className="stockflow-kicker">Command Access Layer</div>
              <h1 className="stockflow-title mt-5 text-5xl sm:text-6xl">
                Terminal Login
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant-stockflow">
                The auth surface now follows the same visual language as the rest of the
                frontend: warmer accents, cleaner hierarchy, and clearer feedback during
                the full login/logout flow.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {loginSignals.map((signal) => (
                <div key={signal} className="stockflow-stat">
                  <p className="flex items-center gap-3 text-sm font-semibold text-on-surface-strong-stockflow">
                    <span className="h-2.5 w-2.5 rounded-full bg-secondary-fixed-stockflow shadow-[0_0_12px_rgba(36,213,232,0.8)]" />
                    {signal}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="stockflow-panel p-6 sm:p-8 lg:p-10 stockflow-reveal">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="stockflow-kicker !text-[0.62rem] before:!w-8">Auth Node</p>
                <h2 className="mt-4 font-headline-stockflow text-3xl font-bold text-on-surface-strong-stockflow">
                  Enter credentials to establish uplink
                </h2>
              </div>
              <div className="stockflow-chip">Live</div>
            </div>

            <form className="mt-8 space-y-5" method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-on-surface-variant-stockflow"
                  htmlFor="email"
                >
                  Operator Email
                </label>
                <input
                  autoComplete="email"
                  className="stockflow-input"
                  id="email"
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="operator@stockflow.com"
                  type="email"
                  value={email}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-on-surface-variant-stockflow"
                  htmlFor="password"
                >
                  Secure Passkey
                </label>
                <input
                  autoComplete="current-password"
                  className="stockflow-input"
                  id="password"
                  name="password"
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••••••"
                  type="password"
                  value={password}
                />
              </div>

              <div className="flex flex-col gap-3 rounded-2xl border border-[rgba(149,169,194,0.12)] bg-[rgba(9,15,24,0.58)] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-secondary-stockflow">
                    Session mode
                  </p>
                  <p className="mt-1 text-sm text-on-surface-variant-stockflow">
                    Persistent session via local secure profile.
                  </p>
                </div>
                <a className="text-sm font-semibold text-primary-stockflow hover:text-secondary-stockflow" href="#">
                  Key recovery
                </a>
              </div>

              {errorMessage ? (
                <p
                  aria-live="polite"
                  className="rounded-2xl border border-red-400/20 bg-red-950/20 px-4 py-3 text-sm text-red-300"
                >
                  {errorMessage}
                </p>
              ) : null}

              <button className="stockflow-btn-primary w-full" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Authenticating..." : "Sign In"}
                <span className="material-symbols-outlined text-base">north_east</span>
              </button>
            </form>

            <div className="stockflow-divider my-8" />

            <footer className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-on-surface-variant-stockflow">
                New operator?
                <Link className="ml-2 font-semibold text-primary-stockflow hover:text-secondary-stockflow" href="/register">
                  Register
                </Link>
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                Auth_v2.142
              </p>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

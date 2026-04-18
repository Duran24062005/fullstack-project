"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/auth-store";

const registrationNotes = [
  "Customer role provisioned by backend policy",
  "Immediate handoff back to login after registration",
  "Error feedback aligned with API contract",
];

export default function RegisterPage() {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await register(username, email, password);
      router.replace("/login");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to register");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="stockflow-shell">
      <div className="stockflow-ambient-orb left-[-4rem] bottom-16 h-72 w-72 bg-[rgba(255,154,60,0.28)]" />
      <div className="stockflow-ambient-orb right-[-4rem] top-10 h-72 w-72 bg-[rgba(36,213,232,0.22)]" />

      <div className="stockflow-container flex min-h-screen flex-col justify-center py-10">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <section className="stockflow-reveal">
            <Link href="/" className="stockflow-brand">
              <span className="stockflow-brand-mark">
                <span className="material-symbols-outlined">deployed_code</span>
              </span>
              StockFlow
            </Link>

            <div className="mt-10">
              <div className="stockflow-kicker">Identity Provisioning</div>
              <h1 className="stockflow-title mt-5 text-5xl sm:text-6xl">
                Establish Account
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-on-surface-variant-stockflow">
                The registration flow now matches the updated frontend direction: stronger
                typographic rhythm, clearer spacing, and a single intentional handoff into
                the authenticated experience.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {registrationNotes.map((note, index) => (
                <div
                  key={note}
                  className="stockflow-stat stockflow-reveal"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <p className="flex items-center gap-3 text-sm font-semibold text-on-surface-strong-stockflow">
                    <span className="material-symbols-outlined text-secondary-stockflow">check_circle</span>
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="stockflow-panel p-6 sm:p-8 lg:p-10 stockflow-reveal">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="stockflow-kicker !text-[0.62rem] before:!w-8">Provisioning Grid</p>
                <h2 className="mt-4 font-headline-stockflow text-3xl font-bold text-on-surface-strong-stockflow">
                  Initialize your credentials for the StockFlow ecosystem.
                </h2>
              </div>
              <div className="stockflow-chip">Secure</div>
            </div>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  className="mb-2 block text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-on-surface-variant-stockflow"
                  htmlFor="name"
                >
                  Operator Name
                </label>
                <input
                  autoComplete="username"
                  className="stockflow-input"
                  id="name"
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="IDENT_ALPHA_9"
                  required
                  type="text"
                  value={username}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-on-surface-variant-stockflow"
                  htmlFor="email"
                >
                  Email Identity
                </label>
                <input
                  autoComplete="email"
                  className="stockflow-input"
                  id="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="operator@nexus.core"
                  required
                  type="email"
                  value={email}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    className="block text-[0.72rem] font-headline-stockflow uppercase tracking-[0.22em] text-on-surface-variant-stockflow"
                    htmlFor="passkey"
                  >
                    Secure Passkey
                  </label>
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-secondary-stockflow">
                    AES-256 encrypted
                  </span>
                </div>
                <div className="rounded-[1.1rem] border border-[rgba(149,169,194,0.15)] bg-[rgba(10,17,26,0.7)] px-4 py-2">
                  <div className="flex items-center gap-3">
                    <input
                      autoComplete="new-password"
                      className="min-w-0 flex-1 border-none bg-transparent py-3 text-on-surface-strong-stockflow outline-none"
                      id="passkey"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="••••••••••••"
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                    />
                    <button
                      className="text-sm font-semibold text-primary-stockflow hover:text-secondary-stockflow"
                      onClick={() => setShowPassword((current) => !current)}
                      type="button"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
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
                {isSubmitting ? "Creating Account..." : "Establish Account"}
                <span className="material-symbols-outlined text-base">north_east</span>
              </button>
            </form>

            <div className="stockflow-divider my-8" />

            <div className="grid gap-4 sm:grid-cols-2">
              <button className="stockflow-btn-secondary !justify-start !rounded-2xl !border-[rgba(149,169,194,0.14)] !px-5 !py-4">
                <span className="material-symbols-outlined">account_balance_wallet</span>
                Web3 Wallet
              </button>
              <button className="stockflow-btn-secondary !justify-start !rounded-2xl !border-[rgba(149,169,194,0.14)] !px-5 !py-4">
                <span className="material-symbols-outlined">terminal</span>
                Nexus SSO
              </button>
            </div>

            <footer className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-on-surface-variant-stockflow">
                Existing operative?
                <Link className="ml-2 font-semibold text-primary-stockflow hover:text-secondary-stockflow" href="/login">
                  Recall Session
                </Link>
              </p>
              <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                Quantum Sec / Instant Sync / Neural Link
              </p>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}

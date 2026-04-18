"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LogoutButton from "@/components/auth/logout-button";
import ProtectedRoute from "@/components/auth/protected-route";

const activity = [
  { label: "Inventory adjustment", detail: "Servo batch +24 units rebalanced across Warehouse 4." },
  { label: "External hardware acquisition", detail: "Neural Core Gen-X purchase remains pending escrow release." },
  { label: "Unauthorized access blocked", detail: "Node 192.168.X.77 rejected before operator validation." },
];

export default function ProfilePage() {
  const [timeLeft, setTimeLeft] = useState(53923);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => (previous > 0 ? previous - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <ProtectedRoute>
      <div className="stockflow-shell">
        <div className="stockflow-container pb-16">
          <header className="stockflow-topbar">
            <Link href="/" className="stockflow-brand">
              <span className="stockflow-brand-mark">
                <span className="material-symbols-outlined">deployed_code</span>
              </span>
              StockFlow
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-on-surface-variant-stockflow">
              <Link href="/dashboard" className="hover:text-on-surface-strong-stockflow">
                Command
              </Link>
              <Link href="/wishlist" className="hover:text-on-surface-strong-stockflow">
                Reserved
              </Link>
              <Link href="/cart" className="hover:text-on-surface-strong-stockflow">
                Queue
              </Link>
              <Link href="/profile" className="text-on-surface-strong-stockflow">
                Profile
              </Link>
            </nav>

            <LogoutButton className="stockflow-btn-secondary" />
          </header>

          <main className="grid gap-6 pt-6 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="stockflow-panel p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="stockflow-kicker">Operator Identity</div>
                  <h1 className="stockflow-title mt-5 text-5xl sm:text-6xl">Jaxen Vance</h1>
                  <p className="mt-4 text-lg text-on-surface-variant-stockflow">
                    System Operator / Admin / Neo-Tokyo Sector 7
                  </p>
                </div>
                <div className="stockflow-panel-soft px-5 py-4 text-right">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                    Auth Token Exp
                  </p>
                  <p className="mt-3 font-headline-stockflow text-3xl font-bold text-secondary-stockflow">
                    {formatTime(timeLeft)}
                  </p>
                  <button
                    className="mt-4 stockflow-btn-secondary !px-4 !py-3 !text-[0.68rem]"
                    onClick={() => setTimeLeft(54000)}
                    type="button"
                  >
                    Refresh Terminal
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="stockflow-stat">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                    Email Address
                  </p>
                  <p className="mt-3 font-headline-stockflow text-xl font-bold text-on-surface-strong-stockflow">
                    vance.j@stockflow.synth
                  </p>
                </div>
                <div className="stockflow-stat">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                    Access Level
                  </p>
                  <p className="mt-3 font-headline-stockflow text-xl font-bold text-primary-stockflow">
                    Tier Alpha
                  </p>
                </div>
                <div className="stockflow-stat">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                    Neural Sync ID
                  </p>
                  <p className="mt-3 font-headline-stockflow text-xl font-bold text-secondary-stockflow">
                    SF-992-X-ADMIN
                  </p>
                </div>
                <div className="stockflow-stat">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                    Operations Efficiency
                  </p>
                  <p className="mt-3 font-headline-stockflow text-xl font-bold text-tertiary-stockflow">
                    98.4%
                  </p>
                </div>
              </div>

              <div className="stockflow-divider my-8" />

              <div className="grid gap-4">
                {activity.map((item) => (
                  <div key={item.label} className="stockflow-panel-soft p-5">
                    <p className="font-headline-stockflow text-lg font-bold text-on-surface-strong-stockflow">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-on-surface-variant-stockflow">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6">
              <div className="stockflow-panel p-6 sm:p-8">
                <div className="stockflow-kicker">Shielding</div>
                <h2 className="mt-4 font-headline-stockflow text-3xl font-bold text-on-surface-strong-stockflow">
                  Security and access posture
                </h2>
                <div className="mt-8 grid gap-4">
                  <div className="stockflow-panel-soft p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                      Biometric ID
                    </p>
                    <p className="mt-3 font-headline-stockflow text-2xl font-bold text-secondary-stockflow">
                      Enabled
                    </p>
                  </div>
                  <div className="stockflow-panel-soft p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                      Encryption Key
                    </p>
                    <p className="mt-3 font-headline-stockflow text-2xl font-bold text-primary-stockflow">
                      Rotating
                    </p>
                  </div>
                  <div className="stockflow-panel-soft p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                      Access Watch
                    </p>
                    <p className="mt-3 font-headline-stockflow text-2xl font-bold text-tertiary-stockflow">
                      Strict
                    </p>
                  </div>
                </div>
              </div>

              <div className="stockflow-panel p-6 sm:p-8">
                <div className="stockflow-kicker">Action Rail</div>
                <div className="mt-6 grid gap-3">
                  <button className="stockflow-btn-primary justify-between">
                    Update Security
                    <span className="material-symbols-outlined text-base">lock</span>
                  </button>
                  <button className="stockflow-btn-secondary justify-between">
                    Enable 2FA
                    <span className="material-symbols-outlined text-base">verified_user</span>
                  </button>
                  <Link href="/dashboard" className="stockflow-btn-secondary justify-between">
                    Return to Command
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

"use client";

import Link from "next/link";
import LogoutButton from "@/components/auth/logout-button";
import ProtectedRoute from "@/components/auth/protected-route";

const dashboardMetrics = [
  { label: "Fulfillment cadence", value: "94.6%", accent: "text-secondary-stockflow" },
  { label: "Urgent queues", value: "12", accent: "text-primary-stockflow" },
  { label: "Fleet visibility", value: "128 nodes", accent: "text-tertiary-stockflow" },
];

const operationsFeed = [
  { time: "14:02", title: "Batch authorization successful", detail: "Shipment #892-X cleared for dispatch." },
  { time: "12:55", title: "Inventory re-sync complete", detail: "Warehouse 4 drone scan normalized shelf counts." },
  { time: "11:18", title: "External intrusion blocked", detail: "Untrusted terminal rejected before credential exchange." },
];

const featuredHardware = [
  { name: "AX-9 Processor", status: "In Stock", price: "2,450 CR" },
  { name: "Omni-Link Hub", status: "Low Stock", price: "850 CR" },
  { name: "Viper-7 Scout", status: "Ready", price: "12,400 CR" },
];

export default function DashboardPage() {
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
              <Link href="/dashboard" className="text-on-surface-strong-stockflow">
                Command
              </Link>
              <Link href="/wishlist" className="hover:text-on-surface-strong-stockflow">
                Reserved
              </Link>
              <Link href="/cart" className="hover:text-on-surface-strong-stockflow">
                Queue
              </Link>
              <Link href="/profile" className="hover:text-on-surface-strong-stockflow">
                Profile
              </Link>
            </nav>

            <LogoutButton className="stockflow-btn-secondary" />
          </header>

          <main className="grid gap-6 pt-6 lg:grid-cols-[0.95fr_1.35fr]">
            <section className="stockflow-panel p-6 sm:p-8">
              <div className="stockflow-kicker">Operations Spine</div>
              <h1 className="stockflow-title mt-5 text-5xl sm:text-6xl">Command Center</h1>
              <p className="mt-6 text-lg leading-8 text-on-surface-variant-stockflow">
                The dashboard now follows the updated frontend direction: stronger framing,
                warmer primary accents, and cards that actually read like one operating system.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {dashboardMetrics.map((metric) => (
                  <div key={metric.label} className="stockflow-stat">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-on-surface-variant-stockflow">
                      {metric.label}
                    </p>
                    <p className={`mt-3 font-headline-stockflow text-3xl font-bold ${metric.accent}`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="stockflow-divider my-8" />

              <div className="grid gap-4">
                {operationsFeed.map((item) => (
                  <div key={item.time} className="stockflow-panel-soft p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-headline-stockflow text-lg font-bold text-on-surface-strong-stockflow">
                          {item.title}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-on-surface-variant-stockflow">
                          {item.detail}
                        </p>
                      </div>
                      <span className="stockflow-chip !px-3 !py-2 !text-[0.62rem]">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6">
              <div className="stockflow-panel p-6 sm:p-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <div className="stockflow-kicker">Hardware Pulse</div>
                    <h2 className="mt-4 font-headline-stockflow text-3xl font-bold text-on-surface-strong-stockflow">
                      Live marketplace deck
                    </h2>
                  </div>
                  <Link href="/product/test-drone" className="stockflow-btn-primary">
                    Open Product Detail
                    <span className="material-symbols-outlined text-base">north_east</span>
                  </Link>
                </div>

                <div className="mt-8 grid gap-4 lg:grid-cols-3">
                  {featuredHardware.map((item) => (
                    <article key={item.name} className="stockflow-panel-soft p-5">
                      <div className="stockflow-chip !mb-5 !text-[0.62rem]">{item.status}</div>
                      <h3 className="font-headline-stockflow text-2xl font-bold text-on-surface-strong-stockflow">
                        {item.name}
                      </h3>
                      <p className="mt-5 font-headline-stockflow text-xl font-bold text-primary-stockflow">
                        {item.price}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                <div className="stockflow-panel p-6 sm:p-8">
                  <div className="stockflow-kicker">Control Notes</div>
                  <h3 className="mt-4 font-headline-stockflow text-2xl font-bold text-on-surface-strong-stockflow">
                    Design refactor outcomes
                  </h3>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-on-surface-variant-stockflow">
                    <li>One consistent dashboard/auth/public design language.</li>
                    <li>Mobile-first stacking without losing emphasis hierarchy.</li>
                    <li>Clearer primary CTA placement for high-frequency operator actions.</li>
                  </ul>
                </div>

                <div className="stockflow-panel p-6 sm:p-8">
                  <div className="stockflow-kicker">Quick Links</div>
                  <div className="mt-6 grid gap-3">
                    <Link href="/wishlist" className="stockflow-btn-secondary !justify-between">
                      Reserved Components
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                    <Link href="/cart" className="stockflow-btn-secondary !justify-between">
                      Acquisition Queue
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                    <Link href="/profile" className="stockflow-btn-secondary !justify-between">
                      Operator Identity
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

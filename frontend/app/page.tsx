import Link from "next/link";

const launchRows = [
  { label: "Fulfillment mesh", value: "19 regions synced" },
  { label: "Live inventory", value: "128,442 units indexed" },
  { label: "Operator trust", value: "99.982% validated" },
];

const pillars = [
  {
    title: "Robotics",
    body: "Autonomous platforms, hardened drone kits, and motion systems prepared for industrial fleets.",
    glyph: "precision_manufacturing",
  },
  {
    title: "Electronics",
    body: "Control boards, sensor arrays, and resilient power modules for hostile operating conditions.",
    glyph: "memory",
  },
  {
    title: "Field Engineering",
    body: "Deployable tooling, reinforced frames, and recovery equipment for fast-response teams.",
    glyph: "construction",
  },
];

export default function HomePage() {
  return (
    <div className="stockflow-shell">
      <div className="stockflow-ambient-orb top-[-8rem] left-[-4rem] h-64 w-64 bg-[rgba(255,154,60,0.35)]" />
      <div className="stockflow-ambient-orb right-[-3rem] top-24 h-72 w-72 bg-[rgba(36,213,232,0.24)]" />

      <div className="stockflow-container pb-20">
        <header className="stockflow-topbar">
          <Link href="/" className="stockflow-brand">
            <span className="stockflow-brand-mark">
              <span className="material-symbols-outlined">deployed_code</span>
            </span>
            StockFlow
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-on-surface-variant-stockflow">
            <Link href="/" className="text-on-surface-strong-stockflow">
              Electronics
            </Link>
            <Link href="/dashboard" className="hover:text-on-surface-strong-stockflow">
              Operations
            </Link>
            <Link href="/wishlist" className="hover:text-on-surface-strong-stockflow">
              Reserved
            </Link>
            <Link href="/cart" className="hover:text-on-surface-strong-stockflow">
              Queue
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/login" className="stockflow-btn-secondary px-5 py-3">
              Login
            </Link>
            <Link href="/register" className="stockflow-btn-primary px-5 py-3">
              Register
            </Link>
          </div>
        </header>

        <main className="relative z-10">
          <section className="grid gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-18">
            <div className="stockflow-reveal">
              <div className="stockflow-kicker mb-5">Synthetic Commerce Grid</div>
              <h1 className="stockflow-title text-6xl sm:text-7xl lg:text-[7.5rem]">
                Innovation.
                <br />
                <span className="text-primary-stockflow">Technology.</span>
                <br />
                Future.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-on-surface-variant-stockflow sm:text-xl">
                StockFlow is now a command-led procurement cockpit: warmer contrast,
                clearer hierarchy, stronger motion cues, and a product surface designed
                to feel like an intentional operations system instead of a collection of pages.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/dashboard" className="stockflow-btn-primary">
                  Explore Products
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link href="/product/test-drone" className="stockflow-btn-secondary">
                  View Hardware
                  <span className="material-symbols-outlined text-base">north_east</span>
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {launchRows.map((item) => (
                  <div key={item.label} className="stockflow-stat">
                    <p className="text-[0.68rem] uppercase tracking-[0.26em] text-on-surface-variant-stockflow">
                      {item.label}
                    </p>
                    <p className="mt-3 font-headline-stockflow text-lg font-bold text-on-surface-strong-stockflow">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="stockflow-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(36,213,232,0.18),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,154,60,0.18),transparent_34%)]" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="stockflow-kicker !gap-3 !text-[0.63rem] !tracking-[0.22em] before:!w-8">
                      Control Tower
                    </p>
                    <h2 className="mt-4 font-headline-stockflow text-3xl font-bold text-on-surface-strong-stockflow">
                      Dispatch-grade storefront
                    </h2>
                  </div>
                  <div className="stockflow-chip">
                    <span className="h-2 w-2 rounded-full bg-secondary-fixed-stockflow shadow-[0_0_12px_rgba(36,213,232,0.8)]" />
                    Nominal
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="stockflow-panel-soft p-5">
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                      Active workflow
                    </p>
                    <p className="mt-3 font-headline-stockflow text-2xl font-bold text-on-surface-strong-stockflow">
                      Procurement and auth now share one visual system
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="stockflow-panel-soft p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                        Route clarity
                      </p>
                      <p className="mt-3 text-sm leading-7 text-on-surface-variant-stockflow">
                        Auth, dashboard, and storefront screens now read as one product instead of separate experiments.
                      </p>
                    </div>
                    <div className="stockflow-panel-soft p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                        Mobile stance
                      </p>
                      <p className="mt-3 text-sm leading-7 text-on-surface-variant-stockflow">
                        Layouts collapse into stacked command cards without losing hierarchy or tone.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="stockflow-divider my-8" />

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                      Design signal
                    </p>
                    <p className="mt-2 font-headline-stockflow text-xl font-bold text-primary-stockflow">
                      Brass + cyan
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                      Motion model
                    </p>
                    <p className="mt-2 font-headline-stockflow text-xl font-bold text-secondary-stockflow">
                      Drift + rise
                    </p>
                  </div>
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant-stockflow">
                      Typography
                    </p>
                    <p className="mt-2 font-headline-stockflow text-xl font-bold text-tertiary-stockflow">
                      Grotesk-led
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="stockflow-panel p-7 stockflow-reveal"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="stockflow-brand-mark !h-12 !w-12 !rounded-2xl">
                    <span className="material-symbols-outlined">{pillar.glyph}</span>
                  </span>
                  <span className="stockflow-chip !px-3 !py-2 !text-[0.62rem]">Sector 0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-headline-stockflow text-2xl font-bold text-on-surface-strong-stockflow">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant-stockflow">
                  {pillar.body}
                </p>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

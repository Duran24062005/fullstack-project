"use client";

import React from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="bg-surface-stockflow text-on-surface-stockflow font-body-stockflow min-h-screen">
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-full flex flex-col py-8 bg-zinc-900 w-64 z-40">
        <div className="px-6">
          <h1 className="text-xl font-black text-blue-200 mb-8 font-headline-stockflow">StockFlow</h1>
          <div className="mb-10 flex items-center gap-4 px-2">
            <img 
              alt="User profile" 
              className="w-10 h-10 rounded-full border border-primary-stockflow/20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi8tMYCUpEM9kSvY7tEWg2zDeSBz7jYCoiWuMlh27D84H_d_EhdC4pqCwCuNV8DKwyReoV4O2E3e7p3M1s_lnuxAuT5MADoPwPz9RfplLvVhml2La5nFWzwUI45dwQxqGplcHg4EK0Od0fTSnNXJLUOwui3J7s0hlrzeMAtakk8wQvwwtCOJympr6-RrtW8oMMSbhvAHy9-1bcbxvzlJW-_z5_f9YzAmVGL-8NPRTsSuJ4ccaQvnG2BisMctZSxP6scDoiAcoSEQ" 
            />
            <div>
              <p className="text-on-surface-stockflow font-bold">System Operator</p>
              <p className="text-[10px] uppercase tracking-widest text-blue-400">Tech Tier: Alpha</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          {/* Active Home Tab */}
          <Link className="flex items-center gap-3 bg-blue-500/10 text-blue-200 border-r-4 border-blue-400 px-4 py-3 ml-2 rounded-l-lg transition-all duration-200" href="/dashboard">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span>Home</span>
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="/wishlist">
            <span className="material-symbols-outlined text-[20px]">favorite</span>
            <span>Wishlist</span>
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="/cart">
            <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
            <span>Cart</span>
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="/profile">
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
            <span>Profile</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow font-headline-stockflow font-bold py-3 rounded-md transition-transform active:scale-95 text-xs tracking-wider uppercase mb-8">
            Access Terminal
          </button>
          <div className="space-y-1 border-t border-zinc-800/50 pt-4">
            <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-2 py-2 transition-all" href="#">
              <span className="material-symbols-outlined text-[18px]">settings</span>
              <span>Settings</span>
            </Link>
            <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-2 py-2 transition-all" href="/login">
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span>Log Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 min-h-screen bg-surface-dim-stockflow p-8">
        {/* TopAppBar Contextual */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-headline-stockflow font-bold tracking-tight text-on-surface-stockflow">Command Center</h2>
            <p className="text-on-surface-variant-stockflow text-sm mt-1">Operational status: <span className="text-secondary-fixed-dim-stockflow">Nominal</span></p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-outline-stockflow">search</span>
              </div>
              <input 
                className="bg-surface-container-highest-stockflow border-none rounded-md pl-12 pr-4 py-3 w-80 text-sm focus:ring-2 focus:ring-primary-stockflow/20 transition-all placeholder:text-outline-stockflow/50" 
                placeholder="Query hardware databases..." 
                type="text"
              />
            </div>
            <Link href="/wishlist" className="bg-surface-container-stockflow p-3 rounded-md hover:bg-surface-container-high-stockflow transition-colors text-on-surface-variant-stockflow">
              <span className="material-symbols-outlined">favorite</span>
            </Link>
            <Link href="/cart" className="bg-surface-container-stockflow p-3 rounded-md hover:bg-surface-container-high-stockflow transition-colors text-on-surface-variant-stockflow relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1 -right-1 bg-secondary-container-stockflow text-on-secondary-container-stockflow text-[10px] font-bold px-1.5 rounded-full">2</span>
            </Link>
            <button className="bg-surface-container-stockflow p-3 rounded-md hover:bg-surface-container-high-stockflow transition-colors text-on-surface-variant-stockflow">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column: Highlights & Product Grid */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Stock Alerts HUD */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low-stockflow p-6 rounded-xl border-l-4 border-secondary-fixed-dim-stockflow relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-secondary-fixed-dim-stockflow bg-secondary-fixed-dim-stockflow/10 p-2 rounded-lg">warning</span>
                    <span className="text-[10px] font-headline-stockflow uppercase tracking-widest text-outline-stockflow">Priority Alert</span>
                  </div>
                  <h3 className="font-headline-stockflow text-lg font-bold">Neural Link Modules</h3>
                  <p className="text-on-surface-variant-stockflow text-sm mt-1">Critical depletion detected in Sector 7. Stock: 14 units.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">memory</span>
                </div>
              </div>
              <div className="bg-surface-container-low-stockflow p-6 rounded-xl border-l-4 border-tertiary-stockflow relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-tertiary-stockflow bg-tertiary-stockflow/10 p-2 rounded-lg">rocket_launch</span>
                    <span className="text-[10px] font-headline-stockflow uppercase tracking-widest text-outline-stockflow">Supply Chain</span>
                  </div>
                  <h3 className="font-headline-stockflow text-lg font-bold">Titan Core Delivery</h3>
                  <p className="text-on-surface-variant-stockflow text-sm mt-1">Incoming hardware fleet arriving in 04:12:45.</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-8xl">local_shipping</span>
                </div>
              </div>
            </section>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Product Card 1 */}
              <div className="bg-surface-container-stockflow rounded-lg overflow-hidden border border-outline-variant-stockflow/15 hover:border-outline-variant-stockflow/40 transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Robotic components" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPnSdGuMKIyBQUNdItpVVHLlwMK8FaGzFV24dJnKTba1NB0ZSMaAH2tr9OKRpPK28oNNXLg3bYhHwhk8QcKvuO5bB4uy7f4nRwVyz0Zg3F5cPZWUwKxFIZgi0E6SB6iCzkYtcqWH3ybzBMBGM1hhjKrA698W5KfynQR2NZlJfF7mMiaEeuc8K4saKdDctDpyHuf7xlw-UqbuDGm3r8KFI-iMjAe04jNqNzk13Jmqvnpnyqdy19Plfg7Di8-FSh92fsYMFBryK_uQ" />
                  <div className="absolute top-4 left-4 bg-surface-container-highest-stockflow/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase text-secondary-fixed-dim-stockflow border border-secondary-fixed-dim-stockflow/20">
                    Tech Tier 4
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline-stockflow font-bold text-lg">AX-9 Processor</h4>
                    <span className="text-secondary-fixed-dim-stockflow text-xs font-bold">IN STOCK</span>
                  </div>
                  <p className="text-on-surface-variant-stockflow text-xs mb-4">Next-gen quantum processing unit for synthetic consciousness integration.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant-stockflow/10">
                    <span className="font-headline-stockflow font-bold text-primary-stockflow">4,290.00 SC</span>
                    <Link href="/product/ax-9-processor" className="text-on-surface-stockflow hover:text-primary-stockflow transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Add more cards as needed... */}
              {/* Product Card 2 */}
              <div className="bg-surface-container-stockflow rounded-lg overflow-hidden border border-outline-variant-stockflow/15 hover:border-outline-variant-stockflow/40 transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Circuit board" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFQ3FQT6YsC0dhdhVc9T1pkxKFasVcXnRsKO-anr9ZK6BxjVHwvO_ks9lrzCArSPXpBrjSRSWa2xuo6yvvvdbNupEA2kxYtn_bwuefiYvfxfS6lDfhJhJi9kCzW1K4WEMBFfwulQ7CRQY8LDFYDKU1qgnbtWvhWVzIfCQ4ituXiw6it4xKEU4TPYD-uvi7OfTMcGqAA_HpSM2x08RH-zsWw0jBqHFQoMAUPpNUdOIWwDlbObMWmvJlJUxC5O8MX5TEaiPFUbGvHA" />
                  <div className="absolute top-4 left-4 bg-surface-container-highest-stockflow/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase text-tertiary-stockflow border border-tertiary-stockflow/20">
                    Tech Tier 2
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline-stockflow font-bold text-lg">Omni-Link Hub</h4>
                    <span className="text-red-400 text-xs font-bold">LOW STOCK</span>
                  </div>
                  <p className="text-on-surface-variant-stockflow text-xs mb-4">Centralized interface hub for multi-drone synchronization protocols.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant-stockflow/10">
                    <span className="font-headline-stockflow font-bold text-primary-stockflow">850.00 SC</span>
                    <Link href="/product/omni-link-hub" className="text-on-surface-stockflow hover:text-primary-stockflow transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Product Card 3 */}
              <div className="bg-surface-container-stockflow rounded-lg overflow-hidden border border-outline-variant-stockflow/15 hover:border-outline-variant-stockflow/40 transition-all group">
                <div className="h-48 overflow-hidden relative">
                  <img alt="Robotic drone" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eu4d83OuXMg2So-lX-NCOYpydFTezJ8joV1A-QAzB2cjENqkb21jvmRNaVneM_5iWIJL2VSMnMOTDyldNVbR2QS1-8n0nHatAh3Q7l37z2-On6_4ZWSc9l6WRv7YzN8Hnxg7gL19f3i6YPNE80Klee0DK29rgBhLyAe5OHkR-IYTKX8tnzaQvyWQ8-mUy48agQSbcWsrX_QfrLEkekdjZzbExMsGCp0CnnaCva8fJF0b-Yy1_YsI-2TqCw7K1bPdxtmREM8vjQ" />
                  <div className="absolute top-4 left-4 bg-surface-container-highest-stockflow/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-widest uppercase text-primary-stockflow border border-primary-stockflow/20">
                    Tech Tier 5
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-headline-stockflow font-bold text-lg">Viper-7 Scout</h4>
                    <span className="text-secondary-fixed-dim-stockflow text-xs font-bold">IN STOCK</span>
                  </div>
                  <p className="text-on-surface-variant-stockflow text-xs mb-4">Autonomous reconnaissance drone with thermal imaging and stealth skin.</p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant-stockflow/10">
                    <span className="font-headline-stockflow font-bold text-primary-stockflow">12,400.00 SC</span>
                    <Link href="/product/viper-7-scout" className="text-on-surface-stockflow hover:text-primary-stockflow transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: System Logs & Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Activity Summary HUD */}
            <section className="bg-surface-container-high-stockflow rounded-xl p-6 shadow-[0_0_40px_rgba(173,198,255,0.1)]">
              <h3 className="font-headline-stockflow font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary-fixed-dim-stockflow rounded-full"></span>
                Neural Activity Log
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-[10px] font-headline-stockflow text-outline-stockflow pt-1 shrink-0">14:02</div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-on-surface-stockflow">Batch Authorization Successful</p>
                    <p className="text-xs text-on-surface-variant-stockflow">Operator Gamma verified shipment #892-X</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[10px] font-headline-stockflow text-outline-stockflow pt-1 shrink-0">12:55</div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-on-surface-stockflow">Inventory Re-Sync</p>
                    <p className="text-xs text-on-surface-variant-stockflow">Automated drones completed scan of Warehouse 4</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-[10px] font-headline-stockflow text-outline-stockflow pt-1 shrink-0">11:18</div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-red-400">Security Protocol Breach</p>
                    <p className="text-xs text-on-surface-variant-stockflow text-red-400/70">Unauthorized login attempt from External Terminal 09</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 border border-outline-variant-stockflow/20 py-3 text-[10px] font-headline-stockflow uppercase tracking-widest text-outline-stockflow hover:text-primary-stockflow hover:border-primary-stockflow/40 transition-all">
                View Full Terminal History
              </button>
            </section>

            {/* Inventory Stats */}
            <section className="bg-surface-container-stockflow p-6 rounded-xl space-y-8">
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-headline-stockflow uppercase tracking-widest text-outline-stockflow">Storage Capacity</span>
                  <span className="text-lg font-headline-stockflow font-bold">84%</span>
                </div>
                <div className="h-1 bg-surface-container-highest-stockflow rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-fixed-dim-stockflow w-[84%] shadow-[0_0_8px_#00dbe7]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] font-headline-stockflow uppercase tracking-widest text-outline-stockflow">Thermal Efficiency</span>
                  <span className="text-lg font-headline-stockflow font-bold">96.2%</span>
                </div>
                <div className="h-1 bg-surface-container-highest-stockflow rounded-full overflow-hidden">
                  <div className="h-full bg-primary-stockflow w-[96.2%] shadow-[0_0_8px_#adc6ff]"></div>
                </div>
              </div>
            </section>

            {/* System Status Banner */}
            <div className="bg-gradient-to-r from-zinc-900 to-black p-6 rounded-xl border border-blue-400/10 flex items-center gap-6">
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 border-2 border-primary-stockflow/20 rounded-full animate-pulse"></div>
                <span className="material-symbols-outlined text-primary-stockflow text-3xl">hub</span>
              </div>
              <div>
                <p className="text-on-surface-stockflow font-headline-stockflow font-bold">Neural Core Status</p>
                <p className="text-[10px] text-primary-stockflow tracking-widest uppercase mt-1">Direct Link Established</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Shell */}
      <footer className="ml-64 bg-zinc-950 border-t border-zinc-800/30 px-12 py-16 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col gap-4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold text-blue-200 font-headline-stockflow">StockFlow</h3>
          <p className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600">
            © 2142 StockFlow Synthetic Frontier. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Terms of Service</Link>
          <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">API Documentation</Link>
          <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Hardware Support</Link>
          <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Neural Link Status</Link>
        </div>
      </footer>
    </div>
  );
}

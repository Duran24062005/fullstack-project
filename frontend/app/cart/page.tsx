"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function CartPage() {
  const [items, setItems] = useState([
    { id: 'SENT-0092', name: 'TX-9 Sentinel Drone', price: 12450.00, desc: 'Autonomous surveillance unit with integrated LIDAR and thermal shielding.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9UlYpIPvbqM_00AE3qa8yzs6N_y887Z_dEWpwLRnpRsr7KQZ-pXSriixzr04Skw40RuQQAK-iD7Derd0uQ1awh_d9HXiNg7E-7fXHXZHSjsrPETKeAFntTmsaMI6gxgMGQRJu7h0HgoESu2jTIUmm2klvnh5jC54gfqCLkaHUrft2JI6vwbEKR4byQ69TfqzSxd1A2z6h6HgEhn18Dv32cqDXXfUEvpRlVfGthfNAWgJNFHY9lVMWlpH9hG1-uj94gVp6Zv6Xww', protocol: 'V-8 Protocol' },
    { id: 'FLUX-881', name: 'Flux Core Engine', price: 85200.00, desc: 'Sub-atomic propulsion system. Stabilized plasma containment.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ubzUvbG2r0L2EzZeV4i9XKrI5rvMCgA5q8pGKAOBvpRgmyM-GdrE8OqozSVTRa4ypXQ-HU-XCN6gXvkHUtWMQmGfHz8_iEEiYMz7k4zGbG-p3c6velRPtdSVK6oTXAQYEDsQW6WgUWqR04TNOV05we7DHp0J39nGU3LTvFH-__sbh_sx4H_JO5UMhpVhTnBME5fvw8CTwP1m2pc68XkvOPcXaRLFHMqjPCNyZgNKhxtnb3lMJ6LT0BMHvLfyD-QmNPdd6ueDXA', protocol: 'HYPER-DRIVE' }
  ]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const grossAssets = items.reduce((acc, item) => acc + item.price, 0);
  const techSurcharge = items.length > 0 ? 1420.00 : 0;
  const total = grossAssets + techSurcharge;
  return (
    <div className="bg-background-stockflow text-on-background-stockflow font-body-stockflow min-h-screen">
      <style jsx>{`
        .glass-panel {
          background: rgba(32, 31, 31, 0.6);
          backdrop-filter: blur(20px);
        }
        .glow-hover:hover {
          box-shadow: 0 0 20px rgba(173, 198, 255, 0.15);
        }
      `}</style>

      {/* TopNavBar */}
      <nav className="bg-[#131313] flex justify-between items-center px-8 w-full sticky top-0 z-50 h-16 shadow-[0_0_20px_rgba(173,198,255,0.1)]">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-stockflow font-headline-stockflow">StockFlow</Link>
          <div className="hidden md:flex gap-6 font-headline-stockflow tracking-tight">
            <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="/dashboard">Dashboard</Link>
            <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="#">Inventory</Link>
            <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="#">Engineering</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-stockflow text-sm">search</span>
            <input 
              className="bg-surface-container-highest-stockflow border-none rounded-lg pl-10 pr-4 py-2 text-xs font-label-stockflow tracking-widest focus:ring-1 focus:ring-primary-stockflow w-64" 
              placeholder="SEARCH ASSETS..." 
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link href="/cart" className="text-primary-stockflow border-b-2 border-primary-stockflow active:scale-95 transition-transform p-1 relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="absolute -top-1 -right-1 bg-secondary-container-stockflow text-on-secondary-container-stockflow text-[10px] font-bold px-1.5 rounded-full">2</span>
            </Link>
            <Link href="/wishlist" className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300 active:scale-95 transition-transform">
              <span className="material-symbols-outlined">favorite</span>
            </Link>
            <Link href="/profile" className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300 active:scale-95 transition-transform">
              <span className="material-symbols-outlined">account_circle</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-[1440px] mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Section: Cart Items */}
        <div className="lg:col-span-8 space-y-8">
          <header>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-secondary-container-stockflow rounded-full shadow-[0_0_8px_#00f1fe]"></span>
              <span className="text-xs font-label-stockflow uppercase tracking-[0.3em] text-secondary-stockflow">Secure Terminal Alpha-7</span>
            </div>
            <h1 className="font-headline-stockflow text-5xl font-bold tracking-tighter text-on-background-stockflow">Your Acquisition Queue</h1>
          </header>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item.id} className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-xl glass-panel border border-outline-variant-stockflow/10 glow-hover transition-all">
                <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden bg-surface-container-low-stockflow flex-shrink-0">
                  <img alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={item.img} />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h2 className="font-headline-stockflow text-2xl font-bold text-primary-stockflow">{item.name}</h2>
                      <span className="font-headline-stockflow text-xl text-on-surface-stockflow">{item.price.toLocaleString()}.00 CR</span>
                    </div>
                    <p className="text-on-surface-variant-stockflow text-sm mt-2 leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                    <div className="flex gap-4 mt-4">
                      <span className="bg-surface-variant-stockflow px-3 py-1 rounded-full text-[10px] font-label-stockflow uppercase tracking-widest text-secondary-fixed-dim-stockflow">{item.protocol}</span>
                      <span className="bg-surface-variant-stockflow px-3 py-1 rounded-full text-[10px] font-label-stockflow uppercase tracking-widest text-on-surface-variant-stockflow">ID: {item.id}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center bg-surface-container-lowest-stockflow rounded-md p-1 border border-outline-variant-stockflow/20">
                      <button className="w-8 h-8 flex items-center justify-center text-outline-stockflow hover:text-primary-stockflow transition-colors">
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-12 text-center font-headline-stockflow font-bold text-on-surface-stockflow">01</span>
                      <button className="w-8 h-8 flex items-center justify-center text-outline-stockflow hover:text-primary-stockflow transition-colors">
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="flex items-center gap-2 text-red-400 text-xs font-label-stockflow uppercase tracking-widest hover:bg-red-400/10 px-3 py-2 rounded-md transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      Purge
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-center py-20 bg-surface-container-low-stockflow rounded-xl border border-dashed border-outline-variant-stockflow/30">
                <p className="text-on-surface-variant-stockflow font-headline-stockflow italic">Acquisition queue is currently empty.</p>
                <Link href="/dashboard" className="mt-4 inline-block text-primary-stockflow text-xs font-bold uppercase tracking-widest border-b border-primary-stockflow pb-1">Return to Catalog</Link>
              </div>
            )}
          </div>

          {/* Encryption Banner */}
          <div className="relative bg-surface-container-high-stockflow rounded-xl p-8 border-l-4 border-primary-stockflow overflow-hidden mt-8">
            <div className="absolute right-0 top-0 opacity-10">
              <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
            </div>
            <h3 className="font-headline-stockflow text-lg font-bold mb-2 uppercase tracking-wider">Encryption Protocol: ACTIVE</h3>
            <p className="text-on-surface-variant-stockflow text-xs font-label-stockflow tracking-wide max-w-md">
              All transactions are routed through StockFlow's proprietary blockchain mesh. Mech-ID verification 8829 is currently overseeing this terminal.
            </p>
          </div>
        </div>

        {/* Right Section: Technical Breakdown */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="glass-panel p-8 rounded-xl border border-outline-variant-stockflow/10 shadow-2xl">
              <h3 className="font-headline-stockflow text-xl font-bold mb-8 border-b border-outline-variant-stockflow/20 pb-4 text-on-surface-stockflow">Transaction Summary</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center group">
                  <span className="text-xs font-label-stockflow uppercase tracking-widest text-on-surface-variant-stockflow">Gross Assets</span>
                  <span className="font-headline-stockflow text-on-surface-stockflow">{grossAssets.toLocaleString()}.00 CR</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-label-stockflow uppercase tracking-widest text-on-surface-variant-stockflow">Tech Surcharge</span>
                    <span className="material-symbols-outlined text-[14px] text-outline-stockflow cursor-help">info</span>
                  </div>
                  <span className="font-headline-stockflow text-on-surface-stockflow">{techSurcharge.toLocaleString()}.00 CR</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-label-stockflow uppercase tracking-widest text-on-surface-variant-stockflow">Quantum Freight</span>
                  <span className="font-headline-stockflow text-secondary-fixed-dim-stockflow">COMPLIMENTARY</span>
                </div>
                <div className="pt-4 border-t border-outline-variant-stockflow/20 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-label-stockflow uppercase tracking-[0.2em] text-secondary-stockflow">Final Requisition</span>
                    <div className="text-3xl font-headline-stockflow font-bold text-primary-stockflow">{total.toLocaleString()}.00</div>
                  </div>
                  <span className="text-sm font-headline-stockflow font-bold mb-1 text-primary-stockflow">CR</span>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow font-headline-stockflow font-bold py-4 rounded-lg uppercase tracking-[0.15em] text-sm active:scale-95 transition-transform shadow-[0_4px_20px_rgba(173,198,255,0.3)]">
                  Initialize Transaction
                </button>
                <button className="w-full border border-outline-variant-stockflow/30 text-on-surface-variant-stockflow font-label-stockflow font-bold py-3 rounded-lg uppercase tracking-[0.1em] text-xs hover:bg-surface-variant-stockflow transition-colors">
                  Save for Future Operations
                </button>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant-stockflow/10">
                <div className="flex items-center gap-4 text-outline-stockflow mb-4">
                  <span className="material-symbols-outlined text-lg">shield_lock</span>
                  <span className="text-[10px] font-label-stockflow uppercase tracking-widest">End-to-End Synapse Protection</span>
                </div>
                <div className="flex items-center gap-4 text-outline-stockflow">
                  <span className="material-symbols-outlined text-lg">rocket_launch</span>
                  <span className="text-[10px] font-label-stockflow uppercase tracking-widest">Instant Teleport Dispatch Available</span>
                </div>
              </div>
            </div>

            {/* Engineering Credits Widget */}
            <div className="bg-surface-container-low-stockflow p-6 rounded-xl border-t border-secondary-stockflow/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-label-stockflow uppercase tracking-widest text-on-surface-variant-stockflow">Member Balance</span>
                <span className="material-symbols-outlined text-sm text-secondary-stockflow">account_balance_wallet</span>
              </div>
              <div className="text-xl font-headline-stockflow font-bold text-on-surface-stockflow mb-2">142,800.00 CR</div>
              <div className="w-full bg-surface-container-highest-stockflow h-1 rounded-full overflow-hidden">
                <div className="bg-secondary-container-stockflow h-full w-[69%] shadow-[0_0_8px_#00f1fe]"></div>
              </div>
              <p className="text-[9px] mt-2 text-outline-stockflow font-label-stockflow uppercase tracking-tighter">Capacity after acquisition: 30.6%</p>
            </div>
            </div>
          </div>
        </main>

      <footer className="mt-20 border-t border-outline-variant-stockflow/10 py-12 px-8 bg-surface-container-low-stockflow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-headline-stockflow font-bold text-xl text-primary-stockflow tracking-tighter">StockFlow System</span>
            <span className="text-[10px] font-label-stockflow text-outline-stockflow uppercase tracking-[0.4em] mt-2">Iterative Asset Management v4.0.2</span>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-on-surface-stockflow uppercase tracking-widest mb-2">Protocols</span>
              <Link className="text-[10px] text-outline-stockflow hover:text-primary-stockflow transition-colors uppercase tracking-widest" href="#">Privacy Matrix</Link>
              <Link className="text-[10px] text-outline-stockflow hover:text-primary-stockflow transition-colors uppercase tracking-widest" href="#">End-User Core</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-on-surface-stockflow uppercase tracking-widest mb-2">Network</span>
              <Link className="text-[10px] text-outline-stockflow hover:text-primary-stockflow transition-colors uppercase tracking-widest" href="#">Deep Space Nodes</Link>
              <Link className="text-[10px] text-outline-stockflow hover:text-primary-stockflow transition-colors uppercase tracking-widest" href="#">System Status</Link>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-label-stockflow text-outline-stockflow leading-loose tracking-[0.1em]">
              © 2077 STOCKFLOW INDUSTRIES.<br/>ALL ASSETS TRACKED VIA QUANTUM TAGGING.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

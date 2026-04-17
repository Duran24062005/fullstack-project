"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [timeLeft, setTimeLeft] = useState(53923); // 14:58:43 in seconds roughly

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  return (
    <div className="bg-surface-dim-stockflow text-on-surface-stockflow font-body-stockflow selection:bg-primary-stockflow/30 min-h-screen">
      {/* HUD Grid Background can be added via CSS if needed, but we'll use a local style for now or just the surface-dim */}
      <style jsx>{`
        .hud-grid {
          background-image: radial-gradient(circle, rgba(173, 198, 255, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* TopNavBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-zinc-950/60 backdrop-blur-xl z-50 shadow-[0_0_40px_rgba(173,198,255,0.1)]">
        <div className="text-2xl font-bold tracking-tighter text-blue-200 font-headline-stockflow">StockFlow</div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="/">Electronics</Link>
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="/">Robotics</Link>
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="/">Engineering</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <Link href="/register" className="bg-white/5 px-4 py-2 text-blue-200 transition-all duration-300 hover:bg-white/10 scale-95 active:scale-90 font-headline-stockflow tracking-tight">Register</Link>
          <Link href="/login" className="bg-primary-stockflow px-6 py-2 text-on-primary-stockflow font-bold transition-all duration-300 scale-95 active:scale-90 font-headline-stockflow tracking-tight">Login</Link>
        </div>
      </header>

      {/* SideNavBar (Hidden on Mobile) */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900 hidden md:flex flex-col py-8 z-40">
        <div className="px-8 mb-12">
          <div className="text-xl font-black text-blue-200 font-headline-stockflow">StockFlow</div>
        </div>
        <nav className="flex-1 space-y-2">
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="/dashboard">
            <span className="material-symbols-outlined">grid_view</span> Home
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">precision_manufacturing</span> Products
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">category</span> Categories
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">inventory_2</span> Inventory
          </Link>
          <Link className="flex items-center gap-3 bg-blue-500/10 text-blue-200 border-r-4 border-blue-400 px-4 py-3 ml-2 rounded-l-lg text-sm tracking-wide" href="/profile">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span> Profile
          </Link>
        </nav>
        <div className="px-4 mt-auto space-y-2">
          <div className="bg-zinc-800/50 p-4 rounded-lg border border-outline-variant-stockflow/10 mb-4">
            <div className="text-xs text-outline-stockflow mb-1 uppercase tracking-widest font-headline-stockflow">Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary-fixed-dim-stockflow"></div>
              <span className="text-xs text-secondary-fixed-stockflow font-headline-stockflow uppercase tracking-widest">System Active</span>
            </div>
          </div>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="#">
            <span className="material-symbols-outlined">settings</span> Settings
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all text-sm tracking-wide" href="/login">
            <span className="material-symbols-outlined">logout</span> Log Out
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-20 px-6 md:px-12 hud-grid min-h-screen">
        {/* Header Section: Asymmetric HUD Aesthetic */}
        <section className="mb-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
          <div className="flex gap-8 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary-stockflow to-secondary-stockflow rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                alt="Operator Avatar" 
                className="relative w-32 h-32 rounded-full object-cover border-4 border-surface-container-highest-stockflow" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBu-vuBGHVsGNHXxIUxLrMQ7yOj-5BVgi6zA4mkuGk-5qpL4L0MGr__cAoSTrcRzhMUonCX4zc2P2UCBODW9llGcRx9E2mLJZxYjVXOhrmZeqzoolzPD1vwzfUccWGYnFQ2bD-1zvyWokqKL9wgEIktRPsEJBm78IMe4_61UPL7supnEYNsv9bTf8b5WhmAUJTt94GQFKQbmQWWY3zvMuOrljrQ83IITW3tHiz4zFeTJlogZKAVEOhPXYoCavEIi_hr3tvZP_I_Xg" 
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-secondary-fixed-dim-stockflow rounded-full border-4 border-surface-dim-stockflow"></div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs text-primary-stockflow font-headline-stockflow uppercase tracking-[0.3em]">Operator Identity</span>
                <div className="h-[1px] w-12 bg-primary-stockflow/30"></div>
              </div>
              <h1 className="text-5xl font-bold font-headline-stockflow tracking-tighter text-on-surface-stockflow mb-2">Jaxen Vance</h1>
              <p className="text-on-surface-variant-stockflow font-headline-stockflow tracking-widest uppercase text-sm">System Operator - <span className="text-secondary-fixed-stockflow font-bold">Admin</span></p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <div className="text-[10px] text-outline-stockflow font-headline-stockflow tracking-[0.4em] uppercase">Auth Token Exp</div>
            <div className="text-2xl font-headline-stockflow text-secondary-fixed-stockflow tracking-tight">{formatTime(timeLeft)}</div>
            <button 
              onClick={() => setTimeLeft(54000)}
              className="bg-primary-stockflow/10 border border-primary-stockflow/20 px-4 py-1 text-xs text-primary-stockflow font-headline-stockflow uppercase tracking-widest hover:bg-primary-stockflow/20 transition-all"
            >
              Refresh Terminal
            </button>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Personal Information Panel */}
          <div className="md:col-span-4 bg-surface-container-stockflow/60 backdrop-blur-md p-8 rounded-lg border-l-2 border-primary-stockflow/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-on-surface-stockflow">
              <span className="material-symbols-outlined text-8xl">account_box</span>
            </div>
            <h3 className="font-headline-stockflow text-xs font-bold text-outline-stockflow uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary-stockflow rounded-full"></span>
              Personal Data
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Email Address</label>
                <div className="text-on-surface-stockflow font-medium">vance.j@stockflow.synth</div>
              </div>
              <div>
                <label className="block text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Access Level</label>
                <div className="text-on-surface-stockflow font-medium">Tier Alpha (Unlimited)</div>
              </div>
              <div>
                <label className="block text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Assigned Hub</label>
                <div className="text-on-surface-stockflow font-medium">Neo-Tokyo Sector 7</div>
              </div>
              <div>
                <label className="block text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Neural Sync ID</label>
                <div className="text-secondary-fixed-dim-stockflow font-mono text-sm uppercase tracking-tighter">SF-992-X-ADMIN</div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-outline-variant-stockflow/10">
              <button className="w-full py-3 bg-surface-container-highest-stockflow text-on-surface-variant-stockflow font-headline-stockflow text-xs uppercase tracking-widest hover:text-primary-stockflow transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">edit</span>
                Modify Credentials
              </button>
            </div>
          </div>

          {/* Activity History Panel (Center) */}
          <div className="md:col-span-8 space-y-6">
            {/* Data Visualization Strip */}
            <div className="bg-surface-container-stockflow/40 p-6 rounded-lg flex items-center justify-between">
              <div>
                <div className="text-[10px] text-outline-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Operations Efficiency</div>
                <div className="text-3xl font-headline-stockflow text-on-surface-stockflow tracking-tighter font-bold">98.4<span className="text-primary-container-stockflow text-lg">%</span></div>
              </div>
              <div className="flex gap-1 items-end h-12">
                <div className="w-1 bg-primary-stockflow/20 h-4"></div>
                <div className="w-1 bg-primary-stockflow/40 h-8"></div>
                <div className="w-1 bg-primary-stockflow/30 h-6"></div>
                <div className="w-1 bg-primary-stockflow/60 h-10"></div>
                <div className="w-1 bg-primary-stockflow h-12"></div>
                <div className="w-1 bg-primary-stockflow/80 h-9"></div>
                <div className="w-1 bg-primary-stockflow/40 h-5"></div>
              </div>
              <div className="text-right">
                <div className="text-[10px] text-outline-stockflow font-headline-stockflow uppercase tracking-widest mb-1">Total Logs</div>
                <div className="text-xl font-headline-stockflow text-on-surface-stockflow tracking-tighter">12,482</div>
              </div>
            </div>
            {/* Activity Log */}
            <div className="bg-surface-container-stockflow/60 backdrop-blur-md p-8 rounded-lg border-t-2 border-secondary-fixed-dim-stockflow/20">
              <h3 className="font-headline-stockflow text-xs font-bold text-outline-stockflow uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-secondary-fixed-dim-stockflow rounded-full"></span>
                Recent Operations Log
              </h3>
              <div className="space-y-4">
                {/* Activity Item 1 */}
                <div className="group flex items-center gap-4 p-4 hover:bg-white/5 transition-all rounded">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center text-primary-stockflow">
                    <span className="material-symbols-outlined">inventory_2</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-on-surface-stockflow">Bulk Inventory Adjustment</div>
                    <div className="text-xs text-outline-stockflow">Modified 'H-Type Servo Motors' (+24 units)</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase">14:20 PM</div>
                    <div className="text-[10px] text-secondary-fixed-dim-stockflow font-headline-stockflow uppercase">Complete</div>
                  </div>
                </div>
                {/* Activity Item 2 */}
                <div className="group flex items-center gap-4 p-4 hover:bg-white/5 transition-all rounded">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center text-secondary-fixed-dim-stockflow">
                    <span className="material-symbols-outlined">shopping_cart</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-on-surface-stockflow">External Hardware Acquisition</div>
                    <div className="text-xs text-outline-stockflow">Purchased 2x 'Neural Core Gen-X' from Global Supply</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase">11:05 AM</div>
                    <div className="text-[10px] text-secondary-fixed-dim-stockflow font-headline-stockflow uppercase">Pending</div>
                  </div>
                </div>
                {/* Activity Item 3 */}
                <div className="group flex items-center gap-4 p-4 hover:bg-white/5 transition-all rounded">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center text-red-400">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-on-surface-stockflow">Unauthorized Access Attempt Blocked</div>
                    <div className="text-xs text-outline-stockflow">IP Trace: 192.168.X.77 - Node Rejected</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-outline-variant-stockflow font-headline-stockflow uppercase">08:12 AM</div>
                    <div className="text-[10px] text-red-400 font-headline-stockflow uppercase">Blocked</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings Section (Full Width HUD Panel) */}
          <div className="md:col-span-12 bg-surface-container-low-stockflow/80 backdrop-blur-xl p-10 rounded-lg border border-outline-variant-stockflow/5">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
              <div>
                <h3 className="font-headline-stockflow text-lg font-bold text-on-surface-stockflow mb-1">Security & Shielding</h3>
                <p className="text-sm text-outline-stockflow">Manage your terminal access protocols and biometric encryption.</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-secondary-fixed-dim-stockflow/10 border border-secondary-fixed-dim-stockflow/30 text-secondary-fixed-dim-stockflow font-headline-stockflow text-xs uppercase tracking-widest hover:bg-secondary-fixed-dim-stockflow/20 transition-all">Enable 2FA</button>
                <button className="px-6 py-2 bg-primary-stockflow text-on-primary-stockflow font-headline-stockflow text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all">Update Security</button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-surface-container-highest-stockflow/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary-stockflow">fingerprint</span>
                  <span className="text-xs font-headline-stockflow font-bold uppercase tracking-widest text-on-surface-stockflow">Biometric ID</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline-stockflow">Active Status</span>
                  <span className="text-[10px] bg-secondary-fixed-dim-stockflow/20 text-secondary-fixed-dim-stockflow px-2 py-1 rounded-full uppercase font-bold">Enabled</span>
                </div>
              </div>
              <div className="p-6 bg-surface-container-highest-stockflow/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary-stockflow">password</span>
                  <span className="text-xs font-headline-stockflow font-bold uppercase tracking-widest text-on-surface-stockflow">Encryption Key</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline-stockflow">Last Changed</span>
                  <span className="text-[10px] text-on-surface-variant-stockflow uppercase font-bold">14 Days Ago</span>
                </div>
              </div>
              <div className="p-6 bg-surface-container-highest-stockflow/30 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-red-400">sensors</span>
                  <span className="text-xs font-headline-stockflow font-bold uppercase tracking-widest text-on-surface-stockflow">Hardware Lock</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline-stockflow">MAC Restricted</span>
                  <span className="text-[10px] bg-red-400/20 text-red-400 px-2 py-1 rounded-full uppercase font-bold">Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center bg-zinc-950 border-t border-zinc-800/30">
        <div className="text-lg font-bold text-blue-200 font-headline-stockflow mb-8 md:mb-0">StockFlow</div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          <Link className="text-zinc-600 hover:text-blue-400 transition-colors font-headline-stockflow uppercase text-[10px] tracking-widest" href="#">Terms of Service</Link>
          <Link className="text-zinc-600 hover:text-blue-400 transition-colors font-headline-stockflow uppercase text-[10px] tracking-widest" href="#">API Documentation</Link>
          <Link className="text-zinc-600 hover:text-blue-400 transition-colors font-headline-stockflow uppercase text-[10px] tracking-widest" href="#">Hardware Support</Link>
          <Link className="text-zinc-600 hover:text-blue-400 transition-colors font-headline-stockflow uppercase text-[10px] tracking-widest" href="#">Neural Link Status</Link>
        </div>
        <div className="text-zinc-600 font-headline-stockflow uppercase text-[10px] tracking-widest text-center md:text-right">
          © 2142 StockFlow Synthetic Frontier. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-surface-dim text-on-surface font-body-stockflow selection:bg-primary-stockflow/30 min-h-screen">
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-zinc-950/60 backdrop-blur-xl z-50 shadow-[0_0_40px_rgba(173,198,255,0.1)]">
        <div className="text-2xl font-bold tracking-tighter text-blue-200 font-headline-stockflow">StockFlow</div>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-blue-300 font-bold border-b-2 border-blue-400 pb-1 font-headline-stockflow tracking-tight" href="/">Electronics</Link>
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="/">Robotics</Link>
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="/">Engineering</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-zinc-400 hover:text-zinc-100 transition-colors text-sm font-medium">Login</Link>
          <Link href="/register" className="bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow px-6 py-2 rounded-md font-bold transition-transform active:scale-95 shadow-[0_0_20px_rgba(173,198,255,0.3)] text-center">Register</Link>
        </div>
      </nav>

      <main className="relative pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row items-center px-8 md:px-20 hero-gradient-stockflow">
          <div className="w-full md:w-1/2 flex flex-col gap-6 z-10 py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container-stockflow/10 border border-secondary-container-stockflow/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-secondary-fixed-stockflow shadow-[0_0_8px_#00dbe7]"></span>
              <span className="text-[10px] font-headline-stockflow uppercase tracking-[0.2em] text-secondary-fixed-stockflow">System Online</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-headline-stockflow font-bold leading-[0.9] tracking-tighter text-on-surface">
              Innovation.<br />
              <span className="text-primary-stockflow text-glow-stockflow">Technology.</span><br />
              Future.
            </h1>
            <p className="text-on-surface-variant-stockflow max-w-md text-lg leading-relaxed">
              The next evolution in hardware acquisition. Secure the components for your synthetic frontier through our hyper-accelerated procurement interface.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/dashboard" className="bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow px-8 py-4 rounded-md font-bold text-lg flex items-center gap-3 transition-transform hover:scale-[1.02] active:scale-95 group">
                Explore Products
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
              <button className="border border-outline-variant-stockflow/30 text-on-surface px-8 py-4 rounded-md font-bold text-lg hover:bg-white/5 transition-all">
                Technical Specs
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(173,198,255,0.15),transparent_70%)]"></div>
            <div className="relative w-full h-full glass-panel-stockflow rounded-full aspect-square border border-white/5 max-w-[600px] flex items-center justify-center overflow-hidden">
              <img 
                alt="Futuristic Robot Hologram" 
                className="w-full h-full object-cover mix-blend-screen opacity-80 scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWg5mSqr6f86aRmAfU-jyVkqd5Ry5yxu1E7cTPmMytz84QpftH7RZt5-MiSx86NjEPx0KB1hXEpLH4cfrdy4z4KiT7JbN9vGhpSxGwplhtO0ld2zYfTNZMURmh2pZ8GBVlpBfEuq8DY1SPZGxwrIsKP6BPW22UrPd3BRU19NEYuKqIV1-xk24IeDT3TEBEf6YITAQD35Pp2CHeL_omsFVqjz569inKqJOdhB00Oq5VrjU8qIzeq44RgTdmFUPN_hfXUsOMklANzA" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
            </div>
            <div className="absolute top-1/4 right-0 glass-panel-stockflow p-4 border border-outline-variant-stockflow/20 rounded-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary-stockflow text-sm">memory</span>
                <span className="text-[10px] uppercase tracking-widest text-secondary-stockflow font-headline-stockflow">Neural Core</span>
              </div>
              <div className="text-xs text-on-surface-variant-stockflow">Optimal synchronization achieved at 99.8% stability.</div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-8 md:px-20 py-24 bg-surface-container-low-stockflow">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-headline-stockflow font-bold mb-4">Core Clusters</h2>
              <p className="text-on-surface-variant-stockflow max-w-sm">Specialized technology sectors curated for high-performance engineering.</p>
            </div>
            <div className="h-[1px] flex-grow mx-8 bg-outline-variant-stockflow/20 mb-4 hidden md:block"></div>
            <a className="font-headline-stockflow uppercase text-xs tracking-[0.3em] text-secondary-fixed-stockflow hover:text-secondary-stockflow transition-colors pb-1 border-b border-secondary-fixed-stockflow/30" href="#">View All Categories</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl bg-surface-container-stockflow border border-outline-variant-stockflow/10 hover:border-primary-stockflow/30 transition-all duration-500 neon-border-hover-stockflow p-8 h-[400px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-primary-stockflow/10 flex items-center justify-center border border-primary-stockflow/20">
                  <span className="material-symbols-outlined text-primary-stockflow text-3xl">precision_manufacturing</span>
                </div>
                <span className="text-[10px] font-headline-stockflow text-outline uppercase tracking-widest">Sector 01</span>
              </div>
              <div>
                <h3 className="text-2xl font-headline-stockflow font-bold mb-2 group-hover:text-primary-stockflow transition-colors">Robotics</h3>
                <p className="text-on-surface-variant-stockflow text-sm mb-6">Advanced actuators, sensory arrays, and autonomous processing units.</p>
                <div className="w-full h-32 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    alt="Robotics" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUoGbRLcp02ClUJ2Mv90C-JLUWLuVN9IdDYFEnnVuqCZj1bEotY4lRRQiUDX8_-aar9vAeT_E2V2GZNd2CKEHFS6wKyr6ZmBBsCab4gD_ID-ZQPwmmMRN1WSvDMiRxAayDYXn8mQiFgNevwW7x_3SVF0puCnPg5kIajqKwc1-TEIGjOST_uwnQRKWuI_3Y1jWg74nJv4oQs-0GdJF9Vk6mCXlkXtICcbRnedpndvj4WX-pItcUa-1FIRR0XoUDxoquoUN-smp4Tg"
                  />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-surface-container-stockflow border border-outline-variant-stockflow/10 hover:border-primary-stockflow/30 transition-all duration-500 neon-border-hover-stockflow p-8 h-[400px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-secondary-container-stockflow/10 flex items-center justify-center border border-secondary-container-stockflow/20">
                  <span className="material-symbols-outlined text-secondary-fixed-stockflow text-3xl">bolt</span>
                </div>
                <span className="text-[10px] font-headline-stockflow text-outline uppercase tracking-widest">Sector 02</span>
              </div>
              <div>
                <h3 className="text-2xl font-headline-stockflow font-bold mb-2 group-hover:text-secondary-fixed-stockflow transition-colors">Electronics</h3>
                <p className="text-on-surface-variant-stockflow text-sm mb-6">High-frequency microchips, quantum-ready capacitors, and circuit arrays.</p>
                <div className="w-full h-32 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    alt="Electronics" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7sPDtCtBvequmg-Fv0xTbfecvXZaDldsZZdejmAvr46j_75QbkoQa64tFkWIvYPQ2a3q53FGnuV6qgoMWV8bmjWTvSdDCX93ibBri6rys_LIePThnFfFmeQe4zPIjdhrZoV4OhCVJS7zMxltZGPES1qPx61hqKgKhoGhvymUL6IV2JQlaa_4Bcx4fL_ABl8TYfOIZAWLWq8LrCUNuiSmNDKK2yNk3_lVYN-ylOfiYKIShp4lx_fLE6LiiF3_5nvk94oaOG-Ju8Q"
                  />
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-surface-container-stockflow border border-outline-variant-stockflow/10 hover:border-primary-stockflow/30 transition-all duration-500 neon-border-hover-stockflow p-8 h-[400px] flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-tertiary-container/10 flex items-center justify-center border border-tertiary-container/20">
                  <span className="material-symbols-outlined text-tertiary-stockflow text-3xl">architecture</span>
                </div>
                <span className="text-[10px] font-headline-stockflow text-outline uppercase tracking-widest">Sector 03</span>
              </div>
              <div>
                <h3 className="text-2xl font-headline-stockflow font-bold mb-2 group-hover:text-tertiary-stockflow transition-colors">Engineering</h3>
                <p className="text-on-surface-variant-stockflow text-sm mb-6">Precision tooling, structural composites, and aerospace-grade alloys.</p>
                <div className="w-full h-32 rounded-lg overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    alt="Engineering" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW9n6gMkQoBMVmq5X1LOL0mM8hUjQNUYs52K-soqfw728KrKoNiY2y0c03kuy6w5Nr01HqKWTmFhHTzEvj-XDoMVtasKXOSmaoAx4mTqxF3b0hz8YTMEaubToGgH4ispMRp4c5QA4RDC_SHE5PNRdRKf-0repWFpEHpG8F7vSNCY70jTFZoeseNYzYza7p67-fwsuyDLW0AvQAayZR8rFPpxyt-msCpdwoVvH3jPPCANCLzALTRpZH9WU894S6qr_giWJE7ABEsw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 border-t border-outline-variant-stockflow/10 bg-surface-dim overflow-hidden">
          <div className="px-8 mb-12">
            <span className="text-[10px] font-headline-stockflow uppercase tracking-[0.4em] text-outline block text-center mb-4">Integrated Partners</span>
            <div className="flex justify-center">
              <div className="h-px w-20 bg-primary-stockflow/40"></div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 px-8 opacity-40 grayscale hover:opacity-80 transition-all duration-1000">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              <span className="text-2xl font-headline-stockflow font-bold tracking-tighter">AERO-X</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">fluorescent</span>
              <span className="text-2xl font-headline-stockflow font-bold tracking-tighter">NEON.DYNAMICS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">hive</span>
              <span className="text-2xl font-headline-stockflow font-bold tracking-tighter">SWARM.OS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl">cyclone</span>
              <span className="text-2xl font-headline-stockflow font-bold tracking-tighter">VORTEX_SYS</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center bg-zinc-950 border-t border-zinc-800/30">
        <div className="flex flex-col gap-4 mb-8 md:mb-0">
          <div className="text-lg font-bold text-blue-200 font-headline-stockflow">StockFlow</div>
          <p className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600">
            © 2142 StockFlow Synthetic Frontier. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Terms of Service</a>
          <a className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">API Documentation</a>
          <a className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Hardware Support</a>
          <a className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Neural Link Status</a>
        </div>
      </footer>
    </div>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="bg-surface-dim-stockflow text-on-surface-stockflow font-body-stockflow min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Background Layering */}
      <div className="fixed inset-0 tech-grid-stockflow pointer-events-none opacity-40"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-stockflow/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary-container-stockflow/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <main className="relative z-10 w-full max-w-[1200px] px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        {/* Brand Identity Section (Asymmetric Side) */}
        <div className="hidden md:flex flex-col max-w-md">
          <h1 className="font-headline-stockflow text-[4rem] font-bold text-primary-stockflow leading-tight tracking-tighter mb-4">
            StockFlow
          </h1>
          <p className="text-on-surface-variant-stockflow text-lg leading-relaxed mb-8">
            Access the synthetic frontier. Manage robotics inventory, engineering components, and high-tech supply chains from a single high-fidelity terminal.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center text-secondary-stockflow border border-outline-variant-stockflow/20">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <div>
                <div className="font-headline-stockflow text-sm font-bold uppercase tracking-widest text-primary-stockflow">Precision Control</div>
                <p className="text-xs text-on-surface-variant-stockflow">Real-time hardware tracking system</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center text-secondary-stockflow border border-outline-variant-stockflow/20">
                <span className="material-symbols-outlined">encrypted</span>
              </div>
              <div>
                <div className="font-headline-stockflow text-sm font-bold uppercase tracking-widest text-primary-stockflow">Neural Protocol</div>
                <p className="text-xs text-on-surface-variant-stockflow">End-to-end encrypted logistics data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphic Login Card */}
        <div className="w-full max-w-md glass-panel-stockflow p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl relative">
          {/* HUD decorative element */}
          <div className="absolute top-0 right-0 p-4 opacity-30">
            <div className="text-[10px] font-headline-stockflow tracking-[0.2em] text-primary-stockflow uppercase">Auth_v2.142</div>
          </div>
          <header className="mb-10 text-center md:text-left">
            <div className="md:hidden font-headline-stockflow text-2xl font-black text-primary-stockflow mb-6 tracking-tighter">StockFlow</div>
            <h2 className="font-headline-stockflow text-3xl font-bold tracking-tight text-on-surface-stockflow">Terminal Login</h2>
            <p className="text-on-surface-variant-stockflow text-sm mt-2">Enter credentials to establish uplink</p>
          </header>
          <form action="#" className="space-y-6" method="POST">
            {/* Username/Email Field */}
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant-stockflow mb-2 ml-1" htmlFor="identifier">Operator Identifier</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-highest-stockflow border-none rounded-md px-4 py-3.5 text-on-surface-stockflow placeholder:text-outline-stockflow/50 focus:ring-0 focus:outline-none transition-all duration-300" 
                  id="identifier" 
                  name="identifier" 
                  placeholder="user_alpha_09" 
                  type="text"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-stockflow group-focus-within:w-full transition-all duration-500"></div>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-stockflow/30 text-xl">account_circle</span>
              </div>
            </div>
            {/* Password Field */}
            <div className="group">
              <label className="block text-[10px] uppercase tracking-widest text-on-surface-variant-stockflow mb-2 ml-1" htmlFor="password">Secure Passkey</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-highest-stockflow border-none rounded-md px-4 py-3.5 text-on-surface-stockflow placeholder:text-outline-stockflow/50 focus:ring-0 focus:outline-none transition-all duration-300" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••••••" 
                  type="password"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-stockflow group-focus-within:w-full transition-all duration-500"></div>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline-stockflow/30 text-xl">lock</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs pt-2">
              <label className="flex items-center gap-2 cursor-pointer group text-on-surface-variant-stockflow">
                <input className="w-4 h-4 rounded bg-surface-container-stockflow border-outline-variant-stockflow/30 text-primary-stockflow focus:ring-0" type="checkbox" />
                <span className="group-hover:text-on-surface-stockflow transition-colors">Persistent session</span>
              </label>
              <a className="text-primary-stockflow hover:text-secondary-fixed-stockflow transition-colors" href="#">Key recovery</a>
            </div>
            {/* Primary CTA */}
            <Link href="/dashboard" className="w-full mt-4 bg-gradient-to-r from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow py-4 rounded-md font-headline-stockflow font-bold uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary-stockflow/10 flex justify-center items-center">
              Sign In
            </Link>
          </form>
          <footer className="mt-12 text-center">
            <p className="text-on-surface-variant-stockflow text-xs">
              New operator? 
              <Link className="font-headline-stockflow font-bold text-primary-stockflow hover:text-secondary-fixed-stockflow ml-1 inline-flex items-center gap-1 group" href="/register">
                Register
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </p>
          </footer>
          {/* Tech detail bars */}
          <div className="flex justify-between mt-8 opacity-20 pointer-events-none">
            <div className="flex gap-1">
              <div className="w-8 h-1 bg-primary-stockflow"></div>
              <div className="w-2 h-1 bg-primary-stockflow"></div>
              <div className="w-1 h-1 bg-primary-stockflow"></div>
            </div>
            <div className="w-12 h-1 bg-outline-variant-stockflow"></div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <footer className="fixed bottom-0 w-full px-12 py-6 flex flex-col md:flex-row justify-between items-center text-on-surface-variant-stockflow font-headline-stockflow text-[10px] tracking-widest uppercase opacity-40">
        <div>© 2142 StockFlow Synthetic Frontier</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a className="hover:text-primary-stockflow transition-colors" href="#">Hardware Support</a>
          <a className="hover:text-primary-stockflow transition-colors" href="#">Neural Link Status</a>
          <a className="hover:text-primary-stockflow transition-colors" href="#">API Documentation</a>
        </div>
      </footer>

      {/* HUD Elements (Decorative) */}
      <div className="fixed top-8 right-12 hidden lg:flex items-center gap-6 opacity-40">
        <div className="text-right">
          <div className="text-[10px] font-headline-stockflow text-primary-stockflow tracking-widest uppercase">Network Status</div>
          <div className="text-[12px] font-headline-stockflow text-on-surface-stockflow">NOMINAL / 0.12ms</div>
        </div>
        <div className="h-8 w-px bg-outline-variant-stockflow"></div>
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim-stockflow animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

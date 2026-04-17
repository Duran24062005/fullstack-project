"use client";

import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="bg-surface-dim-stockflow font-body-stockflow text-on-surface-stockflow min-h-screen flex flex-col items-center justify-center p-6 selection:bg-primary-stockflow/30 bg-mesh-stockflow">

      {/* Header / Brand Section */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-on-primary-container-stockflow text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>deployed_code</span>
          </div>
          <span className="font-headline-stockflow text-2xl font-bold tracking-tighter text-primary-stockflow">StockFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-on-surface-variant-stockflow text-sm uppercase tracking-widest">Protocol v4.0.1</span>
          <div className="h-4 w-px bg-outline-variant-stockflow/30"></div>
          <a className="text-primary-stockflow text-sm uppercase tracking-widest hover:text-secondary-stockflow transition-colors" href="#">System Status: Online</a>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-lg relative">
        {/* Background Decorative Element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-stockflow/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-container-stockflow/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Registration Container */}
        <div className="glass-panel-stockflow p-10 md:p-12 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.4)] relative z-10 border border-white/10">
          <div className="mb-10">
            <h1 className="font-headline-stockflow text-4xl font-bold tracking-tighter text-on-surface-stockflow mb-2">Establish Account</h1>
            <p className="text-on-surface-variant-stockflow">Initialize your credentials for the StockFlow ecosystem.</p>
          </div>
          
          <form className="space-y-6">
            {/* Operator Name */}
            <div className="space-y-2 group">
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant-stockflow group-focus-within:text-primary-stockflow transition-colors" htmlFor="name">Operator Name</label>
              <div className="relative flex items-center bg-surface-container-highest-stockflow rounded-lg px-4 py-1 transition-all focus-within:ring-1 focus-within:ring-primary-stockflow/50">
                <span className="material-symbols-outlined text-outline-stockflow text-lg mr-3">badge</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-on-surface-stockflow placeholder:text-outline-stockflow/50 py-3" 
                  id="name" 
                  placeholder="IDENT_ALPHA_9" 
                  type="text"
                />
              </div>
            </div>
            
            {/* Email Identity */}
            <div className="space-y-2 group">
              <label className="block text-xs uppercase tracking-widest text-on-surface-variant-stockflow group-focus-within:text-primary-stockflow transition-colors" htmlFor="email">Email Identity</label>
              <div className="relative flex items-center bg-surface-container-highest-stockflow rounded-lg px-4 py-1 transition-all focus-within:ring-1 focus-within:ring-primary-stockflow/50">
                <span className="material-symbols-outlined text-outline-stockflow text-lg mr-3">alternate_email</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-on-surface-stockflow placeholder:text-outline-stockflow/50 py-3" 
                  id="email" 
                  placeholder="operator@nexus.core" 
                  type="email"
                />
              </div>
            </div>
            
            {/* Secure Passkey */}
            <div className="space-y-2 group">
              <div className="flex justify-between items-center">
                <label className="block text-xs uppercase tracking-widest text-on-surface-variant-stockflow group-focus-within:text-primary-stockflow transition-colors" htmlFor="passkey">Secure Passkey</label>
                <span className="text-[10px] text-outline-stockflow/60 uppercase tracking-tighter">AES-256 Encrypted</span>
              </div>
              <div className="relative flex items-center bg-surface-container-highest-stockflow rounded-lg px-4 py-1 transition-all focus-within:ring-1 focus-within:ring-primary-stockflow/50">
                <span className="material-symbols-outlined text-outline-stockflow text-lg mr-3">lock</span>
                <input 
                  className="w-full bg-transparent border-none focus:ring-0 text-on-surface-stockflow placeholder:text-outline-stockflow/50 py-3" 
                  id="passkey" 
                  placeholder="••••••••••••" 
                  type="password"
                />
                <button className="material-symbols-outlined text-outline-stockflow hover:text-primary-stockflow transition-colors" type="button">visibility</button>
              </div>
            </div>
            
            {/* Action Button */}
            <div className="pt-4">
              <Link href="/dashboard" className="w-full bg-gradient-to-r from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow font-headline-stockflow font-bold uppercase tracking-widest py-4 rounded-lg shadow-lg shadow-primary-stockflow/20 hover:shadow-primary-stockflow/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span>Establish Account</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </form>
          
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 w-full text-outline-stockflow/30">
              <div className="h-px w-full bg-outline-variant-stockflow/30"></div>
              <span className="text-[10px] uppercase tracking-widest whitespace-nowrap">External Auth</span>
              <div className="h-px w-full bg-outline-variant-stockflow/30"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-stockflow hover:bg-surface-container-high-stockflow border border-outline-variant-stockflow/10 rounded-lg transition-all text-sm">
                <span className="material-symbols-outlined text-primary-stockflow text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance_wallet</span>
                <span>Web3 Wallet</span>
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-stockflow hover:bg-surface-container-high-stockflow border border-outline-variant-stockflow/10 rounded-lg transition-all text-sm">
                <span className="material-symbols-outlined text-primary-stockflow text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <span>Nexus SSO</span>
              </button>
            </div>
            <p className="text-on-surface-variant-stockflow text-sm">
              Existing operative? 
              <Link className="text-primary-stockflow font-medium hover:underline decoration-secondary-stockflow underline-offset-4 transition-all ml-1" href="/login">Recall Session</Link>
            </p>
          </div>
        </div>
        
        {/* Decorative Info HUD */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-surface-container-low-stockflow p-3 rounded-lg flex flex-col items-center justify-center text-center gap-1 border-b-2 border-primary-stockflow/20">
            <span className="material-symbols-outlined text-primary-stockflow text-sm">shield</span>
            <span className="text-[10px] uppercase tracking-widest text-outline-stockflow">Quantum Sec</span>
          </div>
          <div className="bg-surface-container-low-stockflow p-3 rounded-lg flex flex-col items-center justify-center text-center gap-1 border-b-2 border-secondary-container-stockflow/20">
            <span className="material-symbols-outlined text-secondary-container-stockflow text-sm">bolt</span>
            <span className="text-[10px] uppercase tracking-widest text-outline-stockflow">Instant Sync</span>
          </div>
          <div className="bg-surface-container-low-stockflow p-3 rounded-lg flex flex-col items-center justify-center text-center gap-1 border-b-2 border-tertiary-stockflow/20">
            <span className="material-symbols-outlined text-tertiary-stockflow text-sm">lan</span>
            <span className="text-[10px] uppercase tracking-widest text-outline-stockflow">Neural Link</span>
          </div>
        </div>
      </main>

      {/* Footer Security Notice */}
      <footer className="fixed bottom-0 w-full p-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-outline-stockflow/50">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a className="hover:text-primary-stockflow transition-colors" href="#">Privacy Protocol</a>
          <a className="hover:text-primary-stockflow transition-colors" href="#">Service Terms</a>
          <a className="hover:text-primary-stockflow transition-colors" href="#">Security Audit</a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-secondary-fixed-dim-stockflow rounded-full shadow-[0_0_8px_#00dbe7]"></div>
          <span>Encrypted Node: Stockholm_Center_01</span>
        </div>
      </footer>

      {/* Decorative Corner Elements */}
      <div className="fixed top-0 right-0 p-8 opacity-20 pointer-events-none hidden lg:block">
        <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H99V100" stroke="#adc6ff" strokeWidth="2"></path>
          <rect fill="#adc6ff" height="2" width="2" x="94" y="5"></rect>
          <rect fill="#adc6ff" height="2" width="2" x="94" y="12"></rect>
          <rect fill="#adc6ff" height="2" width="2" x="94" y="19"></rect>
        </svg>
      </div>
      <div className="fixed bottom-0 left-0 p-8 opacity-20 pointer-events-none hidden lg:block">
        <svg fill="none" height="100" viewBox="0 0 100 100" width="100" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 99H1V0" stroke="#adc6ff" strokeWidth="2"></path>
          <rect fill="#adc6ff" height="2" width="2" x="4" y="93"></rect>
          <rect fill="#adc6ff" height="2" width="2" x="11" y="93"></rect>
          <rect fill="#adc6ff" height="2" width="2" x="18" y="93"></rect>
        </svg>
      </div>
    </div>
  );
}

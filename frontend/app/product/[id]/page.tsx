"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [mainImage, setMainImage] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuDLZ5K4vHaYT3fhEUpDX5mSQrFChJZTpPxvtqgtoQ0KjqQ5FHGQ1Um_XyrACGH9wBKL5deRbYShz8IW6PsG2XTBN_h-KD9CryO_Bt5FWC6QIpv6rlTDpgrCPWmsjRsq3Yl8C_jVspSTR35UwW-I45cpFJ3ohHmXcxFiaPMPgvzGWkTkNTgf8RA7OUw9ehXKPMQtaf2SgnJO2Ey16wX4m4doDnTGQyOlnYyjUvwkmGe4Jy8-fjkwLx9yLZT7vdLqSwKg-S9Qr1zEPw");
  
  const thumbnails = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDLZ5K4vHaYT3fhEUpDX5mSQrFChJZTpPxvtqgtoQ0KjqQ5FHGQ1Um_XyrACGH9wBKL5deRbYShz8IW6PsG2XTBN_h-KD9CryO_Bt5FWC6QIpv6rlTDpgrCPWmsjRsq3Yl8C_jVspSTR35UwW-I45cpFJ3ohHmXcxFiaPMPgvzGWkTkNTgf8RA7OUw9ehXKPMQtaf2SgnJO2Ey16wX4m4doDnTGQyOlnYyjUvwkmGe4Jy8-fjkwLx9yLZT7vdLqSwKg-S9Qr1zEPw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCp2ARGmsJnESxoRdeQuFZ4epXVF-Af8mTEaKTYz7H2eVUYZ2bCnuMCtui6VUU8QJ9v4Z1nRUbmNwTBHq2cVPgxA4fXjEMlf77tjr3ZmJUWFgE8nd4iA8mdkL_bOvrkHPB8TUbIE4UCnRJIRvy9RlZjeI6nMfvO25upPqJmOp7aHaDyO-YbEn2C9NLJSc9LZ1OdqdgA7lVCz3GnWZoptfQZuFUy4FbP_KF0u-G8IO6ux9ephyQjElkXU-uo_MZQpwdWJBplYzDzew",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAI7cHaRVfGNoqtDBuJLHCzJMACkO7aBBOO0eRlbZ2EL4a3ZsO9gyF1rRv9-e_VrYbC1QRRi1O4BJI1qf83BKJ6edshPazPX3aIo4_4SQUQh91QK7gy1cXUFpxfNnqIgr8aPpOviMqwIZfi_zcsE7eBddKujxVqKoIC8t_o6JzM51_z6h0-z8yz6EdwAnj0xVRfastVX72gpmqrdnCN118h9v_5dC4q5m-9SlxEU4kpQc_mYEYSwKkmAMY3b9OBgxl7y-yk-NvMvQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBt59bRZXOn3zPwsPgWIqmJlCJLqcv0Ypp9Wb67jrKucxVDrCls0fVWaOqXsHLsFd4aUTRLdT0-ULRfvjYd6OWJKnrxMPKqzNMmpvTjX9BXlDg1Cr2KAe_vygB2Out7izkmu_qaQTcc-PFJ7cBYndW30T-Mqe2qUN5dc1QOO_8Ld6LQ5-NsTdgQIkpmfajzcezbCW23H5hLwohdByewZZU2xF1nM-vWsl7ONjLRTTrjnkxeyu8uGeFjZ36hyzNKT_zRO4ky-mCbow"
  ];

  const productName = "TX-9 Sentinel Drone";

  return (
    <div className="bg-surface-dim-stockflow text-on-surface-stockflow font-body-stockflow selection:bg-primary-stockflow/30 min-h-screen">
      <style jsx>{`
        .glass-panel {
          background: rgba(32, 31, 31, 0.6);
          backdrop-filter: blur(20px);
        }
        .gradient-text {
          background: linear-gradient(135deg, #adc6ff 0%, #4b8eff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .primary-gradient {
          background: linear-gradient(135deg, #adc6ff 0%, #4b8eff 100%);
        }
      `}</style>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 h-20 bg-zinc-950/60 backdrop-blur-xl z-50 shadow-[0_0_40px_rgba(173,198,255,0.1)]">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-blue-200 font-headline-stockflow">StockFlow</Link>
        <div className="hidden md:flex items-center gap-8">
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="#">Electronics</Link>
          <Link className="text-blue-300 font-bold border-b-2 border-blue-400 pb-1 font-headline-stockflow tracking-tight" href="#">Robotics</Link>
          <Link className="text-zinc-400 hover:text-zinc-100 transition-colors font-headline-stockflow tracking-tight" href="#">Engineering</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="px-6 py-2 rounded-lg text-blue-200 border border-blue-200/20 hover:bg-white/5 transition-all duration-300 active:scale-95">Login</Link>
          <Link href="/register" className="px-6 py-2 rounded-lg primary-gradient text-on-primary-stockflow font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-primary-stockflow/20">Register</Link>
        </div>
      </nav>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-8 bg-zinc-900 w-64 z-40 border-r border-outline-variant-stockflow/10">
        <div className="px-6 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <img 
              className="w-10 h-10 rounded-full border-2 border-primary-stockflow/30" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ncxFnVv2-aUKx2Ci3rUEpBgnoJ8vLNuLVytXXKrpt85MbCKHBbGAyQpniFz2y8nXC77xvse9cfYdXTdf5DqxQd3jlz1ctT40aa7GSTtVVA91ldwHSCKfuYxiGRBy8eb_VQcekm1bdr-dT-lFkcq3Pm4tFx_eHJIWsljx8BsDkNs03nuWVEa_R-C1ld77eLlmMdovv_TqJ3zwPIQwE40Zfq340lFrOGuR0xjwMbLCDm3QaM88VggzUxJkgK-yCak9xBKo1rD2eQ" 
            />
            <div>
              <p className="text-sm font-bold text-blue-200 font-headline-stockflow">System Operator</p>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Tech Tier: Alpha</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="/dashboard">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-sm tracking-wide">Home</span>
          </Link>
          <Link className="flex items-center gap-3 bg-blue-500/10 text-blue-200 border-r-4 border-blue-400 px-4 py-3 ml-2 rounded-l-lg transition-all" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
            <span className="text-sm tracking-wide">Products</span>
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="#">
            <span className="material-symbols-outlined">category</span>
            <span className="text-sm tracking-wide">Categories</span>
          </Link>
          <Link className="flex items-center gap-3 text-zinc-500 hover:text-zinc-200 px-6 py-3 transition-all hover:bg-zinc-800/50" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            <span className="text-sm tracking-wide">Inventory</span>
          </Link>
        </nav>
        <div className="px-6 mt-auto space-y-4">
          <button className="w-full py-3 rounded-lg bg-zinc-800 text-blue-400 text-xs font-bold uppercase tracking-widest hover:bg-zinc-700 transition-colors">Access Terminal</button>
          <div className="pt-4 border-t border-zinc-800/50 space-y-2">
            <Link className="flex items-center gap-3 text-zinc-600 hover:text-blue-400 transition-colors text-xs" href="#">
              <span className="material-symbols-outlined text-sm">settings</span> Settings
            </Link>
            <Link className="flex items-center gap-3 text-zinc-600 hover:text-red-400 transition-colors text-xs" href="/login">
              <span className="material-symbols-outlined text-sm">logout</span> Log Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64 pt-20">
        <section className="max-w-7xl mx-auto px-8 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-[10px] font-label-stockflow uppercase tracking-widest text-outline-stockflow">
            <Link href="#" className="hover:text-primary-stockflow transition-colors cursor-pointer">Catalog</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <Link href="#" className="hover:text-primary-stockflow transition-colors cursor-pointer">Robotics</Link>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary-fixed-stockflow">{productName}</span>
          </div>

          {/* Product Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
            {/* Large Image Section */}
            <div className="lg:col-span-7 relative group">
              <div className="absolute -inset-4 bg-primary-stockflow/5 rounded-3xl blur-3xl group-hover:bg-primary-stockflow/10 transition-all duration-700"></div>
              <div className="relative rounded-2xl overflow-hidden bg-surface-container-stockflow border border-outline-variant-stockflow/10 shadow-2xl">
                <img 
                  className="w-full h-[600px] object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" 
                  src={mainImage} 
                  alt="Sentinel Drone"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <div className="px-3 py-1 glass-panel rounded-full border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary-fixed-stockflow shadow-[0_0_8px_#00f1fe]"></div>
                    <span className="text-[10px] font-label-stockflow tracking-tighter text-secondary-stockflow">ACTIVE SCANNING</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {thumbnails.slice(1).map((src, index) => (
                  <div 
                    key={index}
                    onClick={() => setMainImage(src)}
                    className={`w-24 h-24 rounded-lg overflow-hidden border ${mainImage === src ? 'border-primary-stockflow border-2' : 'border-outline-variant-stockflow/20'} hover:border-primary-stockflow/50 transition-all bg-surface-container-highest-stockflow cursor-pointer`}
                  >
                    <img className={`w-full h-full object-cover ${mainImage === src ? 'opacity-100' : 'opacity-40 hover:opacity-100'} transition-opacity`} src={src} alt={`Thumbnail ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-2">
                <span className="text-secondary-stockflow font-headline-stockflow text-xs tracking-[0.3em] uppercase">Tactical Class Unit</span>
              </div>
              <h1 className="text-6xl font-headline-stockflow font-bold tracking-tighter mb-4 leading-tight">
                TX-9 <span className="gradient-text">Sentinel</span> Drone
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-headline-stockflow font-light text-on-surface-stockflow">$12,499.00</span>
                <div className="px-3 py-1 bg-secondary-stockflow/10 rounded-full border border-secondary-stockflow/20">
                  <span className="text-[10px] font-bold text-secondary-fixed-stockflow uppercase">In Stock</span>
                </div>
              </div>
              <p className="text-on-surface-variant-stockflow leading-relaxed mb-10 font-light">
                The TX-9 Sentinel represents the peak of autonomous aerial surveillance. Engineered with carbon-poly shells and the latest Neural-X processing core, it provides unparalleled reliability in high-interference environments.
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 gap-1 mb-10">
                <div className="p-6 bg-surface-container-low-stockflow rounded-t-xl flex justify-between items-center border-b border-outline-variant-stockflow/5">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-stockflow">battery_charging_full</span>
                    <span className="text-sm font-label-stockflow text-on-surface-variant-stockflow">Battery Performance</span>
                  </div>
                  <span className="text-sm font-headline-stockflow font-bold text-primary-stockflow">48h Continuous</span>
                </div>
                <div className="p-6 bg-surface-container-low-stockflow flex justify-between items-center border-b border-outline-variant-stockflow/5">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-stockflow">distance</span>
                    <span className="text-sm font-label-stockflow text-on-surface-variant-stockflow">Operation Range</span>
                  </div>
                  <span className="text-sm font-headline-stockflow font-bold text-primary-stockflow">250km / 155mi</span>
                </div>
                <div className="p-6 bg-surface-container-low-stockflow rounded-b-xl flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-primary-stockflow">psychology</span>
                    <span className="text-sm font-label-stockflow text-on-surface-variant-stockflow">AI Processing Core</span>
                  </div>
                  <span className="text-sm font-headline-stockflow font-bold text-primary-stockflow">Neural-X 4.0</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-4">
                <Link href="/cart" className="w-full py-5 rounded-lg primary-gradient text-on-primary-stockflow font-headline-stockflow font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(75,142,255,0.4)] transition-all active:scale-95 flex justify-center items-center">
                  Initialize Purchase
                </Link>
                <button className="w-full py-4 rounded-lg border border-outline-variant-stockflow/30 text-on-surface-stockflow font-headline-stockflow uppercase text-xs tracking-widest hover:bg-white/5 transition-all">
                  Download Schematics (PDF)
                </button>
              </div>
              <div className="mt-8 flex items-center justify-between text-[10px] text-outline-variant-stockflow font-label-stockflow uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">shield</span>
                  Encrypted Transaction
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">local_shipping</span>
                  Expedited Deployment
                </div>
              </div>
            </div>
          </div>

          {/* Related High-Tech Components Section */}
          <div className="mt-24">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-headline-stockflow font-bold tracking-tight mb-2">Compatible <span className="text-primary-stockflow">Upgrades</span></h2>
                <div className="w-20 h-1 bg-primary-container-stockflow"></div>
              </div>
              <Link className="text-xs font-headline-stockflow uppercase tracking-widest text-primary-stockflow hover:text-secondary-stockflow transition-colors flex items-center gap-2" href="#">
                View System Catalog <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Upgrade Card 1 */}
              <div className="group bg-surface-container-stockflow p-6 rounded-xl border border-outline-variant-stockflow/10 hover:border-primary-stockflow/40 transition-all duration-500">
                <div className="h-40 mb-6 overflow-hidden rounded-lg bg-surface-container-highest-stockflow">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--nMrO0netYxjCyFpqYZOiaPgTOQjQIeDCjStmMEtH0begPJosOBIYyp_rog12bIUBdWz0Mcp1Kl2x_Bcf4WUM9aUEcKPQxJ8sGVbjMJvaxrHgDpJ56iB7dj4Ae9TB6Bt7AE1NWd0fsNvOzmsNiiZdVXLMYCiVMMEsHlZ2dqLssWEZiuffWVI1njzarVjC7e85DLo4Zxyr7Z6xfNw1SvFGQGyTNoZngvBoCPXNDfIdlEw7KOH3KTNRwIdefN7mbWSnAQbwKUYbg" />
                </div>
                <p className="text-[10px] font-label-stockflow text-secondary-stockflow tracking-widest uppercase mb-2">Internal Hardware</p>
                <h3 className="text-lg font-headline-stockflow font-bold mb-4">Flux Core Engine</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary-stockflow font-headline-stockflow">$2,199</span>
                  <button className="w-10 h-10 rounded-full border border-outline-variant-stockflow/30 flex items-center justify-center hover:bg-primary-stockflow hover:text-on-primary-stockflow hover:border-transparent transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              {/* Upgrade Card 2 */}
              <div className="group bg-surface-container-stockflow p-6 rounded-xl border border-outline-variant-stockflow/10 hover:border-primary-stockflow/40 transition-all duration-500">
                <div className="h-40 mb-6 overflow-hidden rounded-lg bg-surface-container-highest-stockflow">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjAZPnlhgyDHOw6DRcR_wjUtNi9sdD7lIX-gSjq4x4DflIb60vpIh8IpHCZwLmiYOjP2Z9W01NUBco8DoZyv8MgppY2ghtJfjagkiPu_h46xhmum3h2fKCp3Z19f34qR8iqDLoWKdPFhsPysW397xX2P1521GhiayBrplZKQtwds532xbOFkt84swev1pZ_9o859mPpqmAm0IPCHxuZue51hx-_ss7MTt9l2vHd6P8rLwFyCiG3YQfhpLBeeuAMssyPTVku4bmIA" />
                </div>
                <p className="text-[10px] font-label-stockflow text-secondary-stockflow tracking-widest uppercase mb-2">Software Package</p>
                <h3 className="text-lg font-headline-stockflow font-bold mb-4">Neural-Net OS v5</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary-stockflow font-headline-stockflow">$849</span>
                  <button className="w-10 h-10 rounded-full border border-outline-variant-stockflow/30 flex items-center justify-center hover:bg-primary-stockflow hover:text-on-primary-stockflow hover:border-transparent transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              {/* Upgrade Card 3 */}
              <div className="group bg-surface-container-stockflow p-6 rounded-xl border border-outline-variant-stockflow/10 hover:border-primary-stockflow/40 transition-all duration-500">
                <div className="h-40 mb-6 overflow-hidden rounded-lg bg-surface-container-highest-stockflow">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLj9MXsCkK4AXFGshFinQaH6BTXOuBopnCk8pRhB6V1Vyf-qt-tSR3NVYZM14KfOdJWXpRBKQ8ZdXEXrhxssIwlD5HBmnukuU0FVHW4S2vcHG6MQxTH0OERwC39i16IPoQqX_q9azgCJMI9aEWKm-WzyAUsGrjsW36NgMkJGy3WmEMV8OOAIDDWJ51_ZvLoOuwiegqrnEyFwWg9mFqs62xqX0EfKTRTET3EIfTKtCKXmvuezPcfDuf-lX4VUKbyrBKpgv5rUKyjw" />
                </div>
                <p className="text-[10px] font-label-stockflow text-secondary-stockflow tracking-widest uppercase mb-2">Communication</p>
                <h3 className="text-lg font-headline-stockflow font-bold mb-4">Satellite Link Kit</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary-stockflow font-headline-stockflow">$3,450</span>
                  <button className="w-10 h-10 rounded-full border border-outline-variant-stockflow/30 flex items-center justify-center hover:bg-primary-stockflow hover:text-on-primary-stockflow hover:border-transparent transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
              {/* Upgrade Card 4 */}
              <div className="group bg-surface-container-stockflow p-6 rounded-xl border border-outline-variant-stockflow/10 hover:border-primary-stockflow/40 transition-all duration-500">
                <div className="h-40 mb-6 overflow-hidden rounded-lg bg-surface-container-highest-stockflow">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCilC2r_HKu7yOq0mA2naeb-0e4-RZdwbynlMw_ChbIpot7bQNbZacMqC3fKOFL1yY3ZdjqT-WxJPLrcjpS663LG1stTljrWVUZhcLvX8lOh0mIX92385irAeEQVXMOgXXYz3dTBNfHh6ySYOXh-Ow7I-8hUXcNOCreH5zjz9--jsYrmQ4qvZpYdcvATjEI5CWVnO7Jh8LjKDD4OsJB6z7b6Gk7EdfJU8sQCoEI9au-Fn0tsJ_oVlHZoIZUN4LCQQAquqQ9XVdnEw" />
                </div>
                <p className="text-[10px] font-label-stockflow text-secondary-stockflow tracking-widest uppercase mb-2">Chassis</p>
                <h3 className="text-lg font-headline-stockflow font-bold mb-4">Carbon Prop Kit</h3>
                <div className="flex justify-between items-center">
                  <span className="text-primary-stockflow font-headline-stockflow">$520</span>
                  <button className="w-10 h-10 rounded-full border border-outline-variant-stockflow/30 flex items-center justify-center hover:bg-primary-stockflow hover:text-on-primary-stockflow hover:border-transparent transition-all">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full px-12 py-16 flex flex-col md:flex-row justify-between items-center bg-zinc-950 border-t border-zinc-800/30">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-blue-200 font-headline-stockflow mb-4">StockFlow</div>
            <p className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600">© 2142 StockFlow Synthetic Frontier. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Terms of Service</Link>
            <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">API Documentation</Link>
            <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Hardware Support</Link>
            <Link className="font-headline-stockflow uppercase text-[10px] tracking-widest text-zinc-600 hover:text-blue-400 transition-colors" href="#">Neural Link Status</Link>
          </div>
        </footer>
      </main>

      {/* Contextual FAB */}
      <Link href="/cart" className="fixed bottom-8 right-8 w-16 h-16 rounded-full primary-gradient shadow-2xl flex items-center justify-center group z-50">
        <span className="material-symbols-outlined text-on-primary-stockflow text-3xl group-hover:rotate-90 transition-transform duration-500">add_shopping_cart</span>
      </Link>
    </div>
  );
}

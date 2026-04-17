"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function WishlistPage() {
  const [items, setItems] = useState([
    { id: '992-PX-ALPHA', name: 'Neural Core V2.4', price: 12400, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3n2Z46BOVzacQGkjANbmmPZzkUiS_OmsmxK6qxnGk1D54PiEgPcuWl0kCe_WSe3_AfGErIUfosN791SAA8jM6yfsdGo7RuD8oqsHegHEdNKZPCNqwPf9UkTeiiMhg_elN6reDKsxYm0YpUzZMTYxwCTcBQ2cQ7nROiJ5PhgFEFnaEdDLmE7LHMTiuendZZpoucaSk1buMk75BnZGizodyZbZJ03EPsYMO5yWjIZa3mvexBSjxift1i3udz58yD69JhNgh3Zkmww', status: 'In Stock', statusColor: 'secondary' },
    { id: 'ACT-88-OMNI', name: 'Kinetic Actuator', price: 4850, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXOE7sEBh_o7gPvkiHSpaje3RCHkHu3N3jPsYgucXWfZERiwqiWpn-dp--KWg8CNEncUTY09sYug8xWWPyG8rWyhUplOm_flsaJlXt9TjyKn9DKzw1A0yMPsRkA948HM4oApLfT_a2SNvNy8t-3VP2DVjmd4VtgNbxPLHfhUYjvMEVa0fbEEewuVJtb9jw1zcqlIOF6VKBGyD13M0ntgk8rb0Dsw86yXuw6vKM8s2iO5jqZYoQJFlzCWsah2g56uDEPfiM65GuZg', status: 'Limited Supply', statusColor: 'tertiary' },
    { id: 'SEC-NODE-001', name: 'Quantum Firewall', price: 8200, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEwanlI7V2znfB76_BucX6iiKspe7z7xU9RoKkUlnljbFZoU3lgfzl7B8aHlHvb4BGIqyejsjfz9NE4t-dKkeANHRqr5PesDhTK_qrbsRciXt0zZtIfDZcJsN0eq-Sa0h3_joc5SuuqGBGTn7l2fPdg6l7R9f2PvwFoQMeqIra71H_C3TdGoWH2KtK59A6SpilRDFTYfdHmnARSS1BQu032ASNTRHFjdLJQU24WRN_L76F2RGBFcF8WOek7h2jpeaY_kR6xnw6jw', status: 'In Stock', statusColor: 'secondary' },
    { id: 'OPT-LDR-50', name: 'Lidar Array X', price: 2100, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMfTZ16jAU585gW2aJaYrOYtoJhq8x1_JW-7hgd2dlGGFmKGhU3RjN-vUjSEo86kMxFvcoD_e7qg0yzF4CAQl4HjkU1zyfl1rM3zXGKo6I7mKXobRqLtumR4ZbOLCzwrNrsiXp3c3Pp17t0ri7vn1m3-ZJFwR-ncTZIqcKWVjxfTIUW9nmH_Wwgchltnr04wcmbfRnAWVqjLxvEWYfbeSnvXnWUA7CY4RTUd9dJj7eCbcrvqrgkx4lO3NumQt6ItPWKS5SBz4ylw', status: 'Out of Stock', statusColor: 'outline' }
  ]);

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const totalValue = items.reduce((acc, item) => acc + (item.status !== 'Out of Stock' ? item.price : 0), 0);
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
      <header className="bg-[#131313] text-primary-stockflow font-headline-stockflow tracking-tight flex justify-between items-center px-8 w-full h-16 sticky top-0 z-50 shadow-[0_0_20px_rgba(173,198,255,0.1)]">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary-stockflow">StockFlow</Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="/dashboard">Dashboard</Link>
          <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="#">Inventory</Link>
          <Link className="text-[#e5e2e1] hover:text-secondary-container-stockflow transition-colors duration-300" href="#">Engineering</Link>
          <Link className="text-primary-stockflow border-b-2 border-primary-stockflow" href="/wishlist">Reserved</Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link href="/cart">
            <span className="material-symbols-outlined text-[#e5e2e1] hover:text-secondary-container-stockflow cursor-pointer transition-transform active:scale-95">shopping_cart</span>
          </Link>
          <Link href="/wishlist">
            <span className="material-symbols-outlined text-primary-stockflow cursor-pointer transition-transform active:scale-95" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </Link>
          <Link href="/profile">
            <span className="material-symbols-outlined text-[#e5e2e1] hover:text-secondary-container-stockflow cursor-pointer transition-transform active:scale-95">account_circle</span>
          </Link>
        </div>
      </header>

      <div className="flex">
        {/* SideNavBar */}
        <aside className="hidden lg:flex fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 flex-col py-6 bg-[#201f1f] border-r-0 z-40">
          <div className="px-6 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest-stockflow flex items-center justify-center border border-outline-variant-stockflow/20">
                <span className="material-symbols-outlined text-primary-stockflow">precision_manufacturing</span>
              </div>
              <div>
                <p className="font-headline-stockflow font-bold text-sm text-on-surface-stockflow">Lead Engineer</p>
                <p className="text-[10px] text-on-surface-variant-stockflow uppercase tracking-widest">Mech-ID: 8829</p>
              </div>
            </div>
            <button className="w-full py-2 bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow font-headline-stockflow font-bold rounded-lg text-sm active:scale-[0.98] transition-all">
              New Request
            </button>
          </div>
          <nav className="flex-1 font-body-stockflow uppercase tracking-widest text-xs">
            <div className="space-y-1">
              <Link className="flex items-center py-3 text-[#c1c6d7] pl-5 hover:bg-[#353534] hover:text-primary-stockflow transition-all" href="/dashboard">
                <span className="material-symbols-outlined mr-3">grid_view</span>
                Dashboard
              </Link>
              <Link className="flex items-center py-3 text-[#c1c6d7] pl-5 hover:bg-[#353534] hover:text-primary-stockflow transition-all" href="#">
                <span className="material-symbols-outlined mr-3">precision_manufacturing</span>
                Inventory
              </Link>
              <Link className="flex items-center py-3 text-[#c1c6d7] pl-5 hover:bg-[#353534] hover:text-primary-stockflow transition-all" href="#">
                <span className="material-symbols-outlined mr-3">package_2</span>
                Orders
              </Link>
              <Link className="flex items-center py-3 text-[#c1c6d7] pl-5 hover:bg-[#353534] hover:text-primary-stockflow transition-all" href="#">
                <span className="material-symbols-outlined mr-3">biotech</span>
                Engineering
              </Link>
              <Link className="flex items-center py-3 text-[#c1c6d7] pl-5 hover:bg-[#353534] hover:text-primary-stockflow transition-all" href="#">
                <span className="material-symbols-outlined mr-3">query_stats</span>
                Analytics
              </Link>
            </div>
          </nav>
          <div className="px-6 pt-6 border-t border-outline-variant-stockflow/10 font-body-stockflow uppercase tracking-widest text-xs">
            <Link className="flex items-center py-2 text-[#c1c6d7] hover:text-primary-stockflow transition-all mb-2" href="#">
              <span className="material-symbols-outlined mr-3">settings</span>
              Settings
            </Link>
            <Link className="flex items-center py-2 text-[#c1c6d7] hover:text-primary-stockflow transition-all" href="#">
              <span className="material-symbols-outlined mr-3">help_center</span>
              Support
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-64 p-8">
          <header className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-secondary-stockflow text-xs font-label-stockflow tracking-[0.3em] uppercase mb-2">Archive v.04</p>
                <h1 className="text-5xl font-headline-stockflow font-bold tracking-tighter text-on-surface-stockflow">Reserved Components</h1>
              </div>
              <div className="flex items-center space-x-4 bg-surface-container-low-stockflow p-2 rounded-xl">
                <button className="px-4 py-2 bg-surface-container-highest-stockflow text-primary-stockflow text-xs font-bold rounded-lg border border-outline-variant-stockflow/20 uppercase tracking-widest">All Units</button>
                <button className="px-4 py-2 text-on-surface-variant-stockflow text-xs font-bold rounded-lg uppercase tracking-widest hover:text-on-surface-stockflow transition-colors">Critical</button>
                <button className="px-4 py-2 text-on-surface-variant-stockflow text-xs font-bold rounded-lg uppercase tracking-widest hover:text-on-surface-stockflow transition-colors">Legacy</button>
              </div>
            </div>
          </header>

          {/* Wishlist Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {items.map((item) => (
              <div key={item.id} className="group relative bg-surface-container-stockflow border border-outline-variant-stockflow/10 rounded-xl overflow-hidden hover:border-primary-stockflow/40 transition-all duration-500 glow-hover">
                <div className="aspect-[16/10] overflow-hidden bg-surface-container-low-stockflow relative">
                  <img alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src={item.img} />
                  <div className={`absolute top-4 left-4 bg-${item.statusColor}-container-stockflow/20 backdrop-blur-md px-3 py-1 rounded-full border border-${item.statusColor}-container-stockflow/30`}>
                    <span className={`text-[10px] font-bold text-${item.statusColor === 'outline' ? 'on-surface-variant' : item.statusColor}-stockflow tracking-widest uppercase`}>{item.status}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-headline-stockflow font-bold text-on-surface-stockflow">{item.name}</h3>
                      <p className="text-xs text-on-surface-variant-stockflow font-label-stockflow mt-1">S/N: {item.id}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xl font-headline-stockflow font-bold ${item.status === 'Out of Stock' ? 'text-on-surface-variant-stockflow/40' : 'text-primary-stockflow'}`}>${item.price.toLocaleString()}</p>
                      <p className="text-[10px] text-on-surface-variant-stockflow uppercase">{item.status === 'Out of Stock' ? 'Waitlisted' : 'Excl. Tax'}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant-stockflow/10">
                    {item.status !== 'Out of Stock' ? (
                      <Link href="/cart" className="flex items-center justify-center space-x-2 py-3 bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow text-on-primary-stockflow font-headline-stockflow font-bold rounded-lg text-sm active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        <span>Move to Cart</span>
                      </Link>
                    ) : (
                      <button className="flex items-center justify-center space-x-2 py-3 bg-surface-container-highest-stockflow text-on-surface-variant-stockflow/30 font-headline-stockflow font-bold rounded-lg text-sm cursor-not-allowed" disabled>
                        <span className="material-symbols-outlined text-sm">shopping_cart</span>
                        <span>Notify Me</span>
                      </button>
                    )}
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="flex items-center justify-center space-x-2 py-3 bg-surface-container-highest-stockflow text-on-surface-variant-stockflow hover:text-red-400 hover:bg-red-400/10 font-headline-stockflow font-bold rounded-lg text-sm transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* Reservation Analytics Card */}
            <div className="md:col-span-2 bg-surface-container-low-stockflow border border-outline-variant-stockflow/10 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 mt-8">
              <div className="flex-1">
                <h2 className="text-3xl font-headline-stockflow font-bold text-on-surface-stockflow mb-4">Reservation Analytics</h2>
                <p className="text-on-surface-variant-stockflow text-sm mb-6 leading-relaxed">
                  Your currently reserved components total a projected hardware value of <span className="text-primary-stockflow font-bold">${totalValue.toLocaleString()}.00</span>. Lead times for "Limited Supply" items are currently fluctuating between 14-21 business days.
                </p>
                <div className="flex gap-4">
                  <div className="bg-surface-container-stockflow px-4 py-3 rounded-lg border border-outline-variant-stockflow/10">
                    <p className="text-[10px] text-on-surface-variant-stockflow uppercase tracking-widest mb-1">Items</p>
                    <p className="text-2xl font-headline-stockflow font-bold text-secondary-stockflow">{items.filter(i => i.status !== 'Out of Stock').length.toString().padStart(2, '0')}</p>
                  </div>
                  <div className="bg-surface-container-stockflow px-4 py-3 rounded-lg border border-outline-variant-stockflow/10">
                    <p className="text-[10px] text-on-surface-variant-stockflow uppercase tracking-widest mb-1">Risk Score</p>
                    <p className="text-2xl font-headline-stockflow font-bold text-primary-stockflow">Low</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-surface-container-stockflow rounded-full border-4 border-outline-variant-stockflow/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary-stockflow/20 border-dashed animate-[spin_20s_linear_infinite]"></div>
                <div className="text-center">
                  <span className="material-symbols-outlined text-5xl text-secondary-container-stockflow mb-2">monitoring</span>
                  <p className="text-[10px] text-on-surface-variant-stockflow uppercase tracking-widest">Active Scan</p>
                </div>
              </div>
            </div>

        </main>
      </div>

      {/* BottomNavBar for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full glass-panel border-t border-outline-variant-stockflow/10 px-6 py-4 flex justify-between items-center z-50">
        <Link className="flex flex-col items-center text-[#c1c6d7]" href="/dashboard">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-[10px] mt-1 font-headline-stockflow uppercase">Main</span>
        </Link>
        <Link className="flex flex-col items-center text-primary-stockflow border-t-2 border-primary-stockflow pt-1" href="/wishlist">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          <span className="text-[10px] mt-1 font-headline-stockflow uppercase">Saved</span>
        </Link>
        <div className="relative -top-8">
          <button className="w-14 h-14 bg-gradient-to-br from-primary-stockflow to-primary-container-stockflow rounded-full shadow-lg shadow-primary-stockflow/20 flex items-center justify-center text-on-primary-stockflow">
            <span className="material-symbols-outlined text-3xl">add</span>
          </button>
        </div>
        <Link className="flex flex-col items-center text-[#c1c6d7]" href="#">
          <span className="material-symbols-outlined">precision_manufacturing</span>
          <span className="text-[10px] mt-1 font-headline-stockflow uppercase">Specs</span>
        </Link>
        <Link className="flex flex-col items-center text-[#c1c6d7]" href="/profile">
          <span className="material-symbols-outlined">account_circle</span>
          <span className="text-[10px] mt-1 font-headline-stockflow uppercase">ID</span>
        </Link>
      </nav>
    </div>
  );
}

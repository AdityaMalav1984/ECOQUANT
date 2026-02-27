import React, { useState } from 'react';
import Home from './components/Home';
import Business from './components/Business';
import Customer from './components/Customer';
import Admin from './components/Admin';
import { GlobalProvider } from './GlobalContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <GlobalProvider>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 py-4 bg-eq-bg/85 backdrop-blur-xl border-b border-eq-border">
          <div className="font-display font-bold text-[1.4rem] text-eq-text tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-eq-data rounded-lg flex items-center justify-center text-base">📈</div>
            ECOQUANT
          </div>
          <div className="flex gap-1 bg-eq-card rounded-xl p-1 border border-eq-border shadow-sm">
            {['home', 'business', 'customer', 'admin'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg font-sans text-[0.85rem] font-semibold transition-all duration-200 capitalize cursor-pointer ${
                  activeTab === tab
                    ? 'bg-eq-accent text-eq-bg'
                    : 'text-eq-sec hover:text-eq-text hover:bg-eq-border'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <main className="pt-[100px] pb-[60px] px-10 max-w-[1100px] mx-auto">
          {activeTab === 'home' && <Home onNavigate={setActiveTab} />}
          {activeTab === 'business' && <Business />}
          {activeTab === 'customer' && <Customer />}
          {activeTab === 'admin' && <Admin />}
        </main>
      </div>
    </GlobalProvider>
  );
}

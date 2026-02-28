import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Business from './components/Business';
import Customer from './components/Customer';
import Admin from './components/Admin';
import { GlobalProvider } from './GlobalContext';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const tabs = ['home', 'business', 'customer', 'admin'];

  return (
    <GlobalProvider>
      <div className="relative z-10">
        <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-eq-bg/85 backdrop-blur-xl border-b border-eq-border">
          <div className="font-display font-bold text-[1.2rem] md:text-[1.4rem] text-eq-text tracking-tight flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-eq-data rounded-lg flex items-center justify-center text-base">📈</div>
            <span className="hidden sm:inline">ECOQUANT</span>
            <span className="sm:hidden">EQ</span>
          </div>
          
          {isMobile ? (
            <div className="relative">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="px-3 py-2 rounded-lg bg-eq-card border border-eq-border text-eq-text font-semibold text-sm"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
              
              {mobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-eq-card border border-eq-border rounded-xl shadow-lg overflow-hidden">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabClick(tab)}
                      className={`w-full px-4 py-3 text-left text-sm font-semibold capitalize transition-colors ${
                        activeTab === tab
                          ? 'bg-eq-accent text-eq-bg'
                          : 'text-eq-sec hover:text-eq-text hover:bg-eq-border'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-1 bg-eq-card rounded-xl p-1 border border-eq-border shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-5 py-2 rounded-lg font-sans text-[0.8rem] md:text-[0.85rem] font-semibold transition-all duration-200 capitalize cursor-pointer ${
                    activeTab === tab
                      ? 'bg-eq-accent text-eq-bg'
                      : 'text-eq-sec hover:text-eq-text hover:bg-eq-border'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}
        </nav>

        <main className="pt-[80px] md:pt-[100px] pb-[60px] px-4 md:px-10 max-w-[1100px] mx-auto">
          {activeTab === 'home' && <Home onNavigate={setActiveTab} />}
          {activeTab === 'business' && <Business />}
          {activeTab === 'customer' && <Customer />}
          {activeTab === 'admin' && <Admin />}
        </main>
      </div>
    </GlobalProvider>
  );
}

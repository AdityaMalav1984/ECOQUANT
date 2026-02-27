import React from 'react';

export default function MerchantDashboard() {
  return (
    <div className="flex flex-col min-h-full bg-background-dark text-text-main pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6 sticky top-0 z-20 bg-background-dark/90 backdrop-blur-md">
        <button className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-text-main hover:bg-surface-highlight transition-colors">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Merchant Dashboard</h2>
        <button className="w-10 h-10 flex items-center justify-center text-text-main hover:bg-secondary-dark rounded-full transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>

      {/* Top Section: Score & Tier */}
      <div className="px-4 py-6 flex flex-col items-center justify-center relative">
        <div className="relative w-64 h-64">
          <svg className="block mx-auto max-w-full max-h-[250px] text-primary" viewBox="0 0 36 36">
            <path className="fill-none stroke-accent-dark stroke-[2.5]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
            <path className="fill-none stroke-[2.5] stroke-current stroke-linecap-round" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-6xl font-extrabold tracking-tighter">8.2</span>
            <span className="text-sm font-medium text-text-muted mt-1">Green Score</span>
            <div className="mt-3 px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/30 text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>trophy</span>
              Gold Status
            </div>
          </div>
        </div>

        <div className="w-full mt-8 grid grid-cols-2 gap-3">
          <div className="bg-secondary-dark rounded-2xl p-4 flex flex-col items-center text-center border border-accent-dark hover:border-primary/30 transition-colors">
            <span className="text-xs text-text-muted mb-1">Rank in City</span>
            <span className="text-2xl font-bold text-white">#14</span>
            <span className="text-[10px] text-primary flex items-center mt-1 font-medium">
              <span className="material-symbols-outlined text-xs mr-0.5">trending_up</span> Top 5%
            </span>
          </div>
          <div className="bg-secondary-dark rounded-2xl p-4 flex flex-col items-center text-center border border-accent-dark hover:border-primary/30 transition-colors">
            <span className="text-xs text-text-muted mb-1">Total Impact</span>
            <span className="text-2xl font-bold text-white">12.4t</span>
            <span className="text-[10px] text-text-muted mt-1 font-medium">CO2 Saved</span>
          </div>
        </div>
      </div>

      {/* Middle Section: Metrics Update */}
      <div className="px-4 py-2">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold">Sustainability Metrics</h3>
          <button className="text-primary text-sm font-semibold hover:underline">Update Data</button>
        </div>
        <div className="bg-secondary-dark rounded-2xl p-5 border border-accent-dark shadow-lg relative overflow-hidden group hover:border-primary/30 transition-colors">
          <div className="absolute -right-4 -top-4 p-4 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
          </div>
          <div className="grid grid-cols-2 gap-6 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
                <span className="material-symbols-outlined text-base">water_drop</span>
                Water Usage
              </div>
              <p className="text-3xl font-bold text-white">-12%</p>
              <p className="text-xs text-text-muted">vs last month</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-text-muted text-sm font-medium">
                <span className="material-symbols-outlined text-base">recycling</span>
                Waste Sorted
              </div>
              <p className="text-3xl font-bold text-white">85%</p>
              <p className="text-xs text-text-muted">Compliance rate</p>
            </div>
            <div className="col-span-2 pt-4 border-t border-accent-dark mt-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Energy Efficiency</p>
                  <p className="text-xs text-text-muted mt-0.5">Solar transition on track</p>
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-lg text-sm font-bold">
                  Good
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Customer Redemptions */}
      <div className="px-4 py-4 mt-2 pb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Recent Redemptions</h3>
          <button className="text-sm text-text-muted hover:text-white hover:underline">View All</button>
        </div>
        <div className="flex flex-col gap-3">
          <RedemptionItem 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCvaM5gP7IeawysBQVbrV4JTEEH87r1lBty0cvjFIEITtUfp3w9HOj8weGCEzUGJp6vXqu0IUOhjYwGDbaQA33dwieVoFMnIq9TcMalXZM-7Mo6dvk1xte51LEHcWUip5Ze4KXEjhSIfMz9YqP2flbhIFLhHqsqMdZRxYTGIUekBsCdETv6aCYRTy1qY3cRRXyg18KzTQvBoAY5xjnmH-bUBEdVLqEiOaggNpVKebYmQZhKQliusORuktKfvenYZyotTAbVS5zaJP0"
            name="Marcus J."
            time="Redeemed 2 mins ago"
            points="-450 pts"
            item="Reusable Cup Disc."
          />
          <RedemptionItem 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBkXfl1jn7Ez2OsXbJDaWAUqnNc8KA9B3M9I1tP7_zTWJxOvAWukaj_aH2kffHJsOLN8wGftTI8K1EkC-_KOwRifbCRdSyfJKztkcD_fqRueyBNtG0ykkSnS2anDQfUT14EVVmxz8qfbpHmlZgRq7Vsyb9XFbI0h8dgysGlF-jD6HLtLOTAVwKMRJi4x_M8CcDs-gEgYDwh15r8irXTGTupQCwcywoatINcjDD_tomy3yw7dYDfeqsOFGuGZLxVEo4lTgYfSnXTUyY"
            name="Sarah Chen"
            time="Redeemed 15 mins ago"
            points="-120 pts"
            item="Bulk Buy"
          />
          <RedemptionItem 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAno1RP_8LAIpSnO6sEXpv4Llwotnx8vWbGvC9aJOZ5VNq029HLTqd_tRiWoIVQmIX6M_zdy80JWqZw89P967f48VIO6iwqLgGIXWm-ePmgPcZrudYbAZx53Ae99zFxS6imSX_mqfJ9JudJdGot7QDXzkzrBFpWPnZBjVXam9gHGueGEJR4MqK86nZQtloZZSqquliDezCfNcRHkcbKJDky0ptvJIbZdUY3Z0Wa6aTERQ0y7rEjb3zpMDDp0PeH4hpFgb2MkAdpWOo"
            name="David O."
            time="Redeemed 1 hr ago"
            points="-800 pts"
            item="Eco-Product"
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-accent-dark px-6 py-4 flex justify-between items-center z-40">
        <NavItem icon="home" label="Home" />
        <NavItem icon="qr_code_scanner" label="Scan" />
        <NavItem icon="monitoring" label="Dashboard" active />
        <NavItem icon="person" label="Profile" />
      </div>
    </div>
  );
}

function RedemptionItem({ img, name, time, points, item }: any) {
  return (
    <div className="flex items-center p-3 rounded-2xl bg-secondary-dark border border-transparent hover:border-accent-dark transition-colors">
      <div className="h-12 w-12 rounded-full bg-slate-700 overflow-hidden flex-shrink-0">
        <img src={img} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-bold text-white">{name}</p>
        <p className="text-xs text-text-muted mt-0.5">{time}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-bold text-primary">{points}</p>
        <p className="text-xs text-text-muted mt-0.5">{item}</p>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }: any) {
  return (
    <button className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-text-muted hover:text-white transition-colors'}`}>
      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

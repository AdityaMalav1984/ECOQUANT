import React from 'react';

export default function CustomerDashboard() {
  return (
    <div className="flex flex-col min-h-full bg-background-dark text-text-main pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-secondary-dark overflow-hidden border border-accent-dark">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-sm text-text-muted">Welcome back,</p>
            <h2 className="text-xl font-bold">Alex Johnson</h2>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-secondary-dark flex items-center justify-center text-text-main relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-primary rounded-full border-2 border-secondary-dark"></span>
        </button>
      </div>

      {/* Points Card */}
      <div className="mx-4 mt-2 p-6 rounded-3xl bg-secondary-dark border border-accent-dark flex flex-col items-center relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <p className="text-text-muted text-sm font-medium z-10">Total Green Points</p>
        <div className="flex items-center gap-2 mt-1 z-10">
          <h1 className="text-6xl font-extrabold tracking-tight">1,250</h1>
          <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
        </div>
        <div className="mt-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center gap-1 z-10">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          +12% this week
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3 mx-4 mt-6">
        <button className="bg-primary text-background-dark rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-[0_0_20px_rgba(19,236,91,0.2)] hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-3xl">qr_code_scanner</span>
          <span className="text-sm font-bold">Scan QR</span>
        </button>
        <button className="bg-secondary-dark border border-accent-dark text-text-main rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-highlight transition-colors">
          <span className="material-symbols-outlined text-3xl text-text-muted">storefront</span>
          <span className="text-sm font-medium">Eco-Shops</span>
        </button>
        <button className="bg-secondary-dark border border-accent-dark text-text-main rounded-2xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-surface-highlight transition-colors">
          <span className="material-symbols-outlined text-3xl text-text-muted">redeem</span>
          <span className="text-sm font-medium">Redeem</span>
        </button>
      </div>

      {/* Recent Activity */}
      <div className="mx-4 mt-8 flex-1">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Recent Activity</h3>
          <button className="text-primary text-sm font-medium hover:underline">View All</button>
        </div>
        
        <div className="flex flex-col gap-3 pb-6">
          <ActivityItem 
            icon="local_cafe" 
            iconColor="text-orange-400" 
            iconBg="bg-orange-400/10"
            title="Organic Cafe" 
            time="Today, 09:41 AM" 
            points="+15 pts" 
          />
          <ActivityItem 
            icon="light_mode" 
            iconColor="text-yellow-400" 
            iconBg="bg-yellow-400/10"
            title="Solar Shop" 
            time="Yesterday, 4:20 PM" 
            points="+40 pts" 
          />
          <ActivityItem 
            icon="recycling" 
            iconColor="text-blue-400" 
            iconBg="bg-blue-400/10"
            title="City Recycling" 
            time="Oct 24, 11:00 AM" 
            points="+100 pts" 
          />
          <ActivityItem 
            icon="directions_subway" 
            iconColor="text-purple-400" 
            iconBg="bg-purple-400/10"
            title="Metro Pass" 
            time="Oct 22, 08:15 AM" 
            points="+25 pts" 
          />
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-accent-dark px-6 py-4 flex justify-between items-center z-40">
        <NavItem icon="home" label="Home" active />
        <NavItem icon="map" label="Map" />
        <NavItem icon="account_balance_wallet" label="Wallet" />
        <NavItem icon="person" label="Profile" />
      </div>
    </div>
  );
}

function ActivityItem({ icon, iconColor, iconBg, title, time, points }: any) {
  return (
    <div className="flex items-center p-4 rounded-2xl bg-secondary-dark border border-accent-dark hover:bg-surface-highlight transition-colors">
      <div className={`w-12 h-12 rounded-full ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}>
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
      </div>
      <div className="ml-4 flex-1">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-xs text-text-muted mt-0.5">{time}</p>
      </div>
      <div className="text-primary font-bold text-lg">
        {points}
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

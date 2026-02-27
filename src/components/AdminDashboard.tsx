import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-full bg-background-dark text-text-main pb-24">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-background-dark/90 px-4 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button className="flex w-10 h-10 items-center justify-center rounded-full bg-surface-dark text-primary hover:bg-surface-highlight transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h1 className="text-xl font-bold tracking-tight text-white">Admin Control</h1>
        </div>
        <button className="relative flex w-10 h-10 items-center justify-center rounded-full bg-surface-dark text-white hover:bg-surface-highlight transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-background-dark"></span>
        </button>
      </header>

      <main className="flex flex-col gap-6 p-4">
        {/* KPIs */}
        <section className="grid grid-cols-1 gap-4">
          <KpiCard 
            icon="eco" 
            title="CO2 Saved" 
            value="1,245" 
            unit="tons" 
            trend="+12.5%" 
            trendDesc="vs last month" 
            color="bg-primary/5" 
            hoverColor="group-hover:bg-primary/10" 
          />
          <KpiCard 
            icon="storefront" 
            title="Active Businesses" 
            value="342" 
            unit="" 
            trend="+5.2%" 
            trendDesc="new onboarded" 
            color="bg-blue-500/5" 
            hoverColor="group-hover:bg-blue-500/10" 
          />
          <KpiCard 
            icon="toll" 
            title="Points Circulating" 
            value="8.5M" 
            unit="" 
            trend="+8.1%" 
            trendDesc="redeemed" 
            color="bg-yellow-500/5" 
            hoverColor="group-hover:bg-yellow-500/10" 
          />
        </section>

        {/* Pending Approvals */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-bold text-white">Pending Approvals</h2>
            <button className="text-sm font-medium text-primary hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-3">
            <ApprovalItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAfjcvUYw94v3Shuws1Ph75oO7M-JZrmfMBrY52QUJHP13LgbueBwOSTSBT9XlAt31fR4fzFLBRsivgxefa-Dfsl17efRH2MOFBTMflyScvNlqKSXdSMQCqDHjHwlpYwNcARJAd4LJ-83pRuMR1SqqMCNA1_FhZZAkuawyF6dYUbGv9gB9xwNIMxOpGZsmFvkcPlhiQ934WLw8hwAmdbJJCjovyX2VKSPifE7L7m_g3jsrAO7JCzZvzA9MFMHVb9TE5K8PyYjEoYbo"
              name="Eco Cafe Downtown"
              desc="Sustainable Food • Submitted 2h ago"
            />
            <ApprovalItem 
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5O3De1JVDBWB7Dy08Ioz76M4ntCX-bEbAzMtrZ5eLB-x97BTwW_mR3CH6H-0SkxUaiTmEK34luumOKKpQZtgDtLRiFCEorKF4so9dQF3Il19Rkd5g4tixI5fH1eHpMVB0J9EfU7isaRzBIE4-mc6FRo2EAHOQyJz5qzeR2k8Gp0TNEnpcI0jwJC_fWeCo5YiiVb44PURObfwE3LCNFc0-IBYsKXrw7F8wmIx77H6TAyBvigL77CJxTBI3DNfxMxqbXCqXrW7UgY"
              name="Green Grocers Co."
              desc="Retail • Submitted 5h ago"
            />
            <ApprovalItem 
              img=""
              name="Solar Solutions Ltd"
              desc="Energy • Submitted 8h ago"
              fallbackIcon="image_not_supported"
            />
          </div>
        </section>

        {/* Fraud Alerts */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              Fraud Alerts
            </h2>
          </div>
          <div className="rounded-2xl border border-orange-500/20 bg-surface-dark/50 p-1">
            <div className="flex flex-col divide-y divide-white/5">
              <FraudAlert 
                title="Suspicious Point Spike"
                time="10m ago"
                desc={<>User <span className="text-white font-medium">@alex_green</span> gained 5,000 points in 2 mins from "Vintage Thrift". Flagged for manual review.</>}
              />
              <FraudAlert 
                title="Duplicate Receipts"
                time="45m ago"
                desc={<>Multiple users uploaded the same receipt ID #99283 from "Bio Market".</>}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-accent-dark px-6 py-4 flex justify-between items-center z-40">
        <NavItem icon="dashboard" label="Overview" active />
        <NavItem icon="storefront" label="Businesses" />
        <NavItem icon="group" label="Users" />
        <NavItem icon="settings" label="Settings" />
      </div>
    </div>
  );
}

function KpiCard({ icon, title, value, unit, trend, trendDesc, color, hoverColor }: any) {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-surface-dark p-5 shadow-lg border border-white/5 group hover:border-primary/30 transition-all`}>
      <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-2xl transition-all ${color} ${hoverColor}`}></div>
      <div className="relative z-10 flex flex-col gap-1">
        <div className="mb-2 flex items-center gap-2 text-text-sub">
          <span className="material-symbols-outlined text-lg">{icon}</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <p className="text-3xl font-bold text-white">
          {value} {unit && <span className="text-lg font-medium text-text-sub">{unit}</span>}
        </p>
        <div className="flex items-center gap-1 text-sm font-medium text-primary mt-1">
          <span className="material-symbols-outlined text-sm">trending_up</span>
          <span>{trend}</span>
          <span className="text-xs text-text-sub font-normal ml-1">{trendDesc}</span>
        </div>
      </div>
    </div>
  );
}

function ApprovalItem({ img, name, desc, fallbackIcon }: any) {
  return (
    <div className="group relative flex items-center gap-4 rounded-xl bg-surface-dark p-4 shadow-sm border border-white/5 hover:bg-surface-highlight/50 transition-colors">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-surface-highlight flex items-center justify-center text-text-sub">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="material-symbols-outlined">{fallbackIcon}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="font-bold text-white">{name}</h3>
        <p className="text-xs text-text-sub mt-0.5 line-clamp-1">{desc}</p>
      </div>
      <div className="flex gap-2">
        <button className="flex w-10 h-10 items-center justify-center rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
        <button className="flex w-10 h-10 items-center justify-center rounded-xl bg-primary text-background-dark hover:bg-primary/90 transition-colors shadow-[0_0_10px_rgba(19,236,91,0.3)]">
          <span className="material-symbols-outlined text-[20px]">check</span>
        </button>
      </div>
    </div>
  );
}

function FraudAlert({ title, time, desc }: any) {
  return (
    <div className="flex items-start gap-3 p-4 hover:bg-surface-dark transition-colors first:rounded-t-xl last:rounded-b-xl">
      <div className="mt-1.5 flex w-2 h-2 shrink-0 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]"></div>
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-white">{title}</p>
          <span className="text-xs text-text-sub">{time}</span>
        </div>
        <p className="text-sm text-text-sub leading-relaxed">{desc}</p>
        <div className="pt-2 flex gap-4">
          <button className="text-xs font-bold text-orange-400 hover:text-orange-300 uppercase tracking-wide">Investigate</button>
          <button className="text-xs font-bold text-text-sub hover:text-white uppercase tracking-wide">Dismiss</button>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active }: any) {
  return (
    <button className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-text-sub hover:text-white transition-colors'}`}>
      <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}>{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

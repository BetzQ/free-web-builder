import { useStudioStore } from '@/store/useStudioStore';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function PreviewCanvas() {
  const store = useStudioStore();
  const previewTheme = store.previewTheme ?? 'light';
  const previewDevice = store.previewDevice ?? 'desktop';
  const particles = store.particles ?? {};
  const primaryColor = (store as any).primaryColor ?? '#0ea5e9';
  const nav = particles.navbar ?? {};
  const hero = particles.hero ?? {};
  const card = particles.card ?? {};
  const btn = particles.button ?? {};

  const previewStyle = { '--primary': primaryColor, '--accent': '#f97316' } as React.CSSProperties;

  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-bold">Live Interactive Preview</h3>
        <button onClick={() => store.setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')} className="btn btn-outline text-xs">{previewTheme === 'light' ? '🌙 Dark' : '☀️ Light'}</button>
      </div>
      <div className="flex gap-2 mb-4">
        {[
          { key: 'desktop', icon: Monitor, label: 'Desktop' },
          { key: 'tablet', icon: Tablet, label: 'Tablet' },
          { key: 'mobile', icon: Smartphone, label: 'Mobile' },
        ].map((d) => (
          <button key={d.key} onClick={() => store.setPreviewDevice(d.key as any)} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${previewDevice === d.key ? 'bg-primary text-primary-foreground border-primary' : 'bg-card hover:bg-accent border-border'}`}>
            <d.icon size={14} /> {d.label}
          </button>
        ))}
      </div>
      <div className={`mx-auto rounded-xl border shadow-inner overflow-hidden transition-all duration-300 ${previewDevice === 'mobile' ? 'w-72' : previewDevice === 'tablet' ? 'w-[500px]' : 'w-full'}`}>
        <div className={`${previewTheme === 'dark' ? 'dark bg-[#171717] text-white' : 'bg-white text-black'}`} style={previewStyle}>
          <nav style={{ backdropFilter: nav.glassmorphism ? 'blur(12px)' : 'none', backgroundColor: nav.glassmorphism ? 'rgba(255,255,255,0.7)' : '#fff', borderRadius: `${(nav.borderRadius?.tl ?? 12)}px`, border: `1px solid ${nav.borderColor ?? '#e5e7eb'}` }} className="flex items-center gap-4 px-4 h-14">
            <span className="font-heading font-bold text-lg" style={{ color: primaryColor ?? '#0ea5e9' }}>FWB</span>
          </nav>
          <div className="h-40 flex items-center justify-center p-6 text-center" style={{ background: `linear-gradient(135deg, ${primaryColor ?? '#0ea5e9'}, #f97316)`, borderBottomLeftRadius: `${hero.borderRadius?.bl ?? 16}px`, borderBottomRightRadius: `${hero.borderRadius?.br ?? 16}px` }}>
            <h1 className="font-heading text-3xl font-extrabold text-white drop-shadow-lg">Free Web Builder</h1>
          </div>
          <div className="p-4 space-y-3">
            <div className="rounded-xl border p-4 shadow-sm" style={{ borderRadius: `${card.borderRadius?.tl ?? 16}px`, backgroundColor: card.colors?.[0] ?? '#f8fafc', boxShadow: (card.shadowLevel ?? 1) > 2 ? `0 4px 6px rgba(0,0,0,0.05)` : 'none' }}>
              <h3 className="font-heading text-lg font-bold">{card.typography?.headingFont || 'Inter'}</h3>
              <p className="text-sm text-muted-foreground">{card.typography?.bodyFont || 'Inter'} — Preview</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-md" style={{ backgroundColor: primaryColor ?? '#0ea5e9', borderRadius: `${btn.borderRadius?.tl ?? 9999}px` }}>Start</button>
              <button className="rounded-lg px-4 py-2 text-sm font-medium border">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
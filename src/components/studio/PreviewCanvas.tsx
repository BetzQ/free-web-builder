import { useStudioStore } from '@/store/useStudioStore';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function PreviewCanvas() {
  const { previewTheme, previewDevice, setPreviewTheme, setPreviewDevice, particles } = useStudioStore();
  const nav = particles.navbar || {};
  const hero = particles.hero || {};
  const card = particles.card || {};
  const btn = particles.button || {};

  const style = {
    '--primary': primaryColor || '#0ea5e9',
    '--nav-radius': `${nav.borderRadius?.tl || 12}px`,
    '--nav-glass': nav.glassmorphism ? 'blur(12px)' : 'none',
    '--hero-bg': hero.backgroundType === 'mesh' ? `linear-gradient(135deg, ${hero.colors?.join(', ') || '#667eea, #764ba2'})` : hero.backgroundType === 'linear' ? `linear-gradient(to right, ${hero.colors?.[0] || '#0ea5e9'}, ${hero.colors?.[1] || '#f97316'})` : `solid`,
  } as React.CSSProperties;

  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-bold">Live Interactive Preview</h3>
        <div className="flex gap-2">
          <button onClick={() => setPreviewTheme(previewTheme === 'light' ? 'dark' : 'light')} className="btn btn-outline text-xs">{previewTheme === 'light' ? '🌙 Dark' : '☀️ Light'}</button>
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        {[
          { key: 'desktop', icon: Monitor, label: 'Desktop' },
          { key: 'tablet', icon: Tablet, label: 'Tablet' },
          { key: 'mobile', icon: Smartphone, label: 'Mobile' },
        ].map((d) => (
          <button key={d.key} onClick={() => setPreviewDevice(d.key as any)} className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${previewDevice === d.key ? 'bg-primary text-primary-foreground border-primary' : 'bg-card hover:bg-accent border-border'}`}>
            <d.icon size={14} /> {d.label}
          </button>
        ))}
      </div>
      <div className={`mx-auto rounded-xl border shadow-inner overflow-hidden transition-all duration-300 ${previewDevice === 'mobile' ? 'w-72' : previewDevice === 'tablet' ? 'w-[500px]' : 'w-full'}`}>
        <div className={`${previewTheme === 'dark' ? 'dark bg-[#171717] text-white' : 'bg-white text-black'}`} style={style}>
          {/* Mockup Navbar */}
          <nav style={{ backdropFilter: nav.glassmorphism ? 'blur(12px)' : 'none', backgroundColor: nav.glassmorphism ? 'rgba(255,255,255,0.7)' : '#ffffff', borderRadius: `${nav.borderRadius?.tl || 12}px`, border: `1px solid ${nav.borderColor || '#e5e7eb'}` }} className="flex items-center gap-4 px-4 h-14">
            <span className="font-heading font-bold text-lg" style={{ color: nav.colors?.[0] || '#0ea5e9' }}>FWB</span>
            <span className="text-xs">{nav.typography?.headingFont || 'Inter'}</span>
          </nav>
          {/* Mockup Hero */}
          <div className="h-40 flex items-center justify-center p-6 text-center" style={{ background: style['--hero-bg'], borderBottomLeftRadius: `${hero.borderRadius?.bl}px`, borderBottomRightRadius: `${hero.borderRadius?.br}px` }}>
            <h1 className="font-heading text-3xl font-extrabold text-white drop-shadow-lg">Free Web Builder</h1>
          </div>
          {/* Mockup Card + Button */}
          <div className="p-4 space-y-3">
            <div className="rounded-xl border p-4 shadow-sm" style={{ borderRadius: `${card.borderRadius?.tl || 16}px`, backgroundColor: card.colors?.[0] || '#f8fafc', boxShadow: card.shadowLevel ? `0 4px 6px rgba(0,0,0,0.05)` : 'none' }}>
              <h3 className="font-heading text-lg font-bold">{card.typography?.headingFont || 'Inter'}</h3>
              <p className="text-sm text-muted-foreground">{card.typography?.bodyFont || 'Inter'} — Card Preview</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-lg" style={{ backgroundColor: btn.colors?.[0] || '#0ea5e9', borderRadius: `${btn.borderRadius?.tl || 9999}px` }}>Start</button>
              <button className="rounded-lg px-4 py-2 text-sm font-medium border">Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

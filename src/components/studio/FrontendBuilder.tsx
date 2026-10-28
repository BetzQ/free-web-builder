import { useStudioStore } from '@/store/useStudioStore';
import { useState } from 'react';
import { Layers, Palette, Type, Settings2, MousePointer } from 'lucide-react';

export default function FrontendBuilder() {
  const { particles, updateParticleStyle, primaryColor, setPrimaryColor } = useStudioStore();
  const [activeParticle, setActiveParticle] = useState('navbar');
  const p = particles[activeParticle] || particles.navbar;

  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10 space-y-5">
      <div className="flex items-center gap-2"><Layers size={20} className="text-primary" /><h3 className="font-heading text-xl font-bold">Frontend Builder — Micro-Particle Engine</h3></div>
      
      {/* Partikel Tabs */}
      <div className="flex flex-wrap gap-2">
        {Object.keys(particles).map((name) => (
          <button key={name} onClick={() => setActiveParticle(name)} className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${activeParticle === name ? 'bg-primary text-white border-primary' : 'bg-card hover:bg-acust dark:border-white/10'}`}>{name}</button>
        ))}
      </div>

      {/* Shape & Geometry */}
      <div className="rounded-xl bg-muted/50 dark:bg-white/5 p-4">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Settings2 size={16}/> Shape & Geometry (Per-Sudut)</h4>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {[
            { k: 'tl', label: 'Atas-Kiri' }, { k: 'tr', label: 'Atas-Kanan' },
            { k: 'br', label: 'Bawah-Kanan' }, { k: 'bl', label: 'Bawah-Kiri' },
          ].map(c => (
            <div key={c.k} className="rounded-lg border bg-card p-2 text-center dark:border-white/10">
              <div className="text-[10px] font-bold text-muted-foreground mb-1">{c.label}</div>
              <input type="range" min={0} max={9999} step={1} value={p.borderRadius[c.k as 'tl']} onChange={e => updateParticleStyle(activeParticle, { borderRadius: { ...p.borderRadius, [c.k]: Number(e.target.value) } })} className="w-full h-1 accent-primary" />
              <div className="text-xs font-mono">{p.borderRadius[c.k as 'tl']}px</div>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <label className="text-xs font-semibold">Border Width: <span className="font-mono">{p.borderWidth}px</span></label>
          <input type="range" min={0} max={8} value={p.borderWidth} onChange={e => updateParticleStyle(activeParticle, { borderWidth: Number(e.target.value) })} className="w-full accent-primary" />
        </div>
        <div className="flex gap-2 mt-2">
          <label className="text-xs font-semibold">Border Color:</label>
          <input type="color" value={p.borderColor} onChange={e => updateParticleStyle(activeParticle, { borderColor: e.target.value })} className="h-6 w-6 rounded border-0 p-0" />
        </div>
        <div className="flex gap-3 mt-2">
          <button onClick={() => updateParticleStyle(activeParticle, { glassmorphism: !p.glassmorphism })} className={`rounded-lg px-2 py-1 text-xs font-medium border ${p.glassmorphism ? 'bg-cyan-500 text-white' : 'bg-card'}`}>{p.glassmorphism ? 'Glass ON' : 'Glass OFF'}</button>
          <button onClick={() => updateParticleStyle(activeParticle, { shadowLevel: Math.min(p.shadowLevel + 1, 5) })} className="rounded-lg px-2 py-1 text-xs font-medium border bg-card">Shadow +</button>
        </div>
      </div>

      {/* Complex Color Engine */}
      <div className="rounded-xl bg-gradient-to-br from-primary/10 to-amber-400/10 p-4 dark:from-primary/5 dark:to-amber-400/5">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Palette size={16}/> Complex Color Engine</h4>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="text-xs font-semibold">Warna Utama</label>
            <div className="flex gap-2 mt-1">
              <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="h-8 w-8 rounded-lg border-0 p-0" />
              <input value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="input text-xs font-mono flex-1" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold">Background Type</label>
            <select value={p.backgroundType} onChange={e => updateParticleStyle(activeParticle, { backgroundType: e.target.value as any })} className="input text-xs mt-1">
              <option>solid</option><option>linear</option><option>radial</option><option>mesh</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Mesh 4 Sudut</label>
            <input type="text" value={p.colors.join(', ')} onChange={e => updateParticleStyle(activeParticle, { colors: e.target.value.split(',').map(s => s.trim()) })} className="input text-xs font-mono mt-1" placeholder="#0ea5e9, #f97316, #c084fc, #f0f0f0" />
          </div>
        </div>
      </div>

      {/* Typography Engine */}
      <div className="rounded-xl border bg-card p-4 dark:border-white/10">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Type size={16}/> 3-Tier Typography</h4>
        <div className="grid sm:grid-cols-3 gap-2 mb-2">
          <div>
            <label className="text-xs font-semibold">Heading</label>
            <select value={p.typography.headingFont} onChange={e => updateParticleStyle(activeParticle, { typography: { ...p.typography, headingFont: e.target.value } })} className="input text-xs mt-1"><option>Inter</option><option>Space Grotesk</option><option>Orbitron</option></select>
          </div>
          <div>
            <label className="text-xs font-semibold">Body</label>
            <select value={p.typography.bodyFont} onChange={e => updateParticleStyle(activeParticle, { typography: { ...p.typography, bodyFont: e.target.value } })} className="input text-xs mt-1"><option>Inter</option><option>DM Sans</option><option>Plus Jakarta Sans</option></select>
          </div>
          <div>
            <label className="text-xs font-semibold">Monospace</label>
            <select value={p.typography.monoFont} onChange={e => updateParticleStyle(activeParticle, { typography: { ...p.typography, monoFont: e.target.value } })} className="input text-xs mt-1"><option>JetBrains Mono</option><option>IBM Plex Mono</option></select>
          </div>
        </div>
        <div className="rounded-lg bg-muted p-3 text-xs font-mono dark:bg-white/5">
          Mode Copy: <strong>{p.typography.headingFont}</strong> + <strong>{p.typography.bodyFont}</strong> — {p.backgroundType} — Radius {p.borderRadius.tl}px
        </div>
      </div>

      {/* Partikel List */}
      <div className="flex flex-wrap gap-1">
        {Object.entries(particles).map(([k, v]) => (
          <button key={k} onClick={() => setActiveParticle(k)} className={`rounded-full px-2 py-0.5 text-[10px] font-medium border ${activeParticle === k ? 'bg-primary text-white border-primary' : 'bg-card hover:bg-accent border-border'} dark:border-white/10`}>{k}</button>
        ))}
      </div>
    </div>
  );
}
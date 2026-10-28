import { useState } from 'react';

export default function FrontendBuilder() {
  const [color, setColor] = useState('#0ea5e9');
  const [radius, setRadius] = useState('12px');
  
  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4">Frontend Builder</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Warna Utama</label>
          <div className="flex gap-2 mt-1">
            <input type="color" value={color} onChange={e => setColor(e.target.value)} className="h-10 w-10 rounded-lg border-0 p-0 cursor-pointer" />
            <input value={color} onChange={e => setColor(e.target.value)} className="input flex-1 text-sm" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Radius Sudut</label>
          <select value={radius} onChange={e => setRadius(e.target.value)} className="input text-sm mt-1">
            <option>0px (Sharp)</option><option>8px (Rounded)</option><option>12px (Smooth)</option><option>16px (Rounded-2xl)</option><option>24px (Rounded-3xl)</option><option>9999px (Pill)</option>
          </select>
        </div>
      </div>
      <div className="rounded-xl border bg-gradient-to-br from-primary/10 to-secondary/10 p-4 text-sm text-muted-foreground">
        <strong>Preset Terpilih:</strong> Stripe Fintech — Warna {color}, Radius {radius}, Shadow Hard, Glassmorphism Off.
      </div>
    </div>
  );
}
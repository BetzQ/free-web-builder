import { useStudioStore } from '@/store/useStudioStore';

export default function FrontendBuilder() {
  const { primaryColor, setPrimaryColor } = useStudioStore();
  const [radius, setRadius] = useState('12px');

  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4">Frontend Builder</h3>
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Warna Utama (Primary)</label>
          <div className="flex gap-2 mt-1">
            <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="h-10 w-10 rounded-lg border-0 p-0 cursor-pointer" aria-label="Pilih warna utama" />
            <input value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="input flex-1 text-sm font-mono" aria-label="Kode warna hex" />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Radius Sudut</label>
          <select value={radius} onChange={e => setRadius(e.target.value)} className="input text-sm mt-1">
            <option value="0px">0px (Sharp)</option>
            <option value="8px">8px (Rounded)</option>
            <option value="12px">12px (Smooth)</option>
            <option value="16px">16px (Rounded-2xl)</option>
            <option value="24px">24px (Rounded-3xl)</option>
            <option value="9999px">9999px (Pill)</option>
          </select>
        </div>
      </div>
      <div className="rounded-xl border p-4 text-sm dark:border-white/10" style={{ background: `linear-gradient(135deg, ${primaryColor}20, #f9731620)` }}>
        <strong>Warna Aktif:</strong> <span className="font-mono font-bold" style={{ color: primaryColor }}>{primaryColor}</span> · <strong>Preset:</strong> Stripe Fintech · <strong>Radius:</strong> {radius}
      </div>
    </div>
  );
}

import { useState } from 'react';
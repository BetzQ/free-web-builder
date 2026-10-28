import { useState } from 'react';
import { useStudioStore } from '@/store/useStudioStore';
import { Layers, Palette, Type, Settings2 } from 'lucide-react';

export default function FrontendBuilder() {
  const { primaryColor, setPrimaryColor } = useStudioStore();
  const [radiusMode, setRadiusMode] = useState('rounded');
  const [radiusCustom, setRadiusCustom] = useState({ tl: 8, tr: 8, br: 8, bl: 8 });
  const [glass, setGlass] = useState(true);
  const [shadowLayer, setShadowLayer] = useState(3);
  const [gradientType, setGradientType] = useState('linear');
  const [fontHeading, setFontHeading] = useState('Inter');
  const [fontBody, setFontBody] = useState('Inter');
  const [fontMono, setFontMono] = useState('JetBrains Mono');
  const [copyMode, setCopyMode] = useState('default');
  const [projectName, setProjectName] = useState('[Nama Web]');
  const [projectFocus, setProjectFocus] = useState('[Fokus Produk]');

  const applyRadius = (mode: string) => {
    if (mode === 'sharp') setRadiusCustom({ tl: 0, tr: 0, br: 0, bl: 0 });
    else if (mode === 'pill') setRadiusCustom({ tl: 9999, tr: 9999, br: 9999, bl: 9999 });
    else if (mode === 'rounded') setRadiusCustom({ tl: 16, tr: 16, br: 16, bl: 16 });
    else if (mode === 'asymmetric') setRadiusCustom({ tl: 4, tr: 16, br: 4, bl: 16 });
    else setRadiusCustom({ tl: 8, tr: 8, br: 8, bl: 8 });
    setRadiusMode(mode);
  };

  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10 space-y-6">
      <div className="flex items-center gap-2"><Layers size={20} className="text-primary" /><h3 className="font-heading text-xl font-bold">Frontend Builder — Partikel Mikro</h3></div>

      {/* Particles Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-medium">
        {['Background','Navbar','Hero','Card','Button','Input','Table','Modal','Badge','Scrollbar'].map(p => (
          <button key={p} className="rounded-lg border px-2 py-1.5 text-muted-foreground hover:text-foreground hover:border-primary transition-colors dark:border-white/10 bg-muted dark:bg-white/5">{p}</button>
        ))}
      </div>

      {/* Shape & Geometry */}
      <div className="rounded-xl bg-muted/50 dark:bg-white/5 p-4">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Settings2 size={16}/> Shape & Geometry</h4>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Border Radius Mode</label>
            <div className="flex flex-wrap gap-1 mt-1">
              {['sharp','rounded','pill','asymmetric'].map(m => (
                <button key={m} onClick={() => applyRadius(m)} className={`rounded-md px-2 py-0.5 text-xs border ${radiusMode===m?'bg-primary text-white border-primary':'bg-card hover:bg-accent border-border'}`}>{m}</button>
              ))}
            </div>
            <div className="flex gap-2 mt-2 text-xs font-mono text-muted-foreground">
              <span>TL:{radiusCustom.tl}px</span><span>TR:{radiusCustom.tr}px</span><span>BR:{radiusCustom.br}px</span><span>BL:{radiusCustom.bl}px</span>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Border Style & Glass</label>
            <div className="flex gap-2 mt-1">
              <button onClick={() => setGlass(!glass)} className={`rounded-lg px-2 py-1 text-xs border ${glass?'bg-primary text-white':'bg-card'}`}>{glass?'Glass ON':'Glass OFF'}</button>
              <button className="rounded-lg px-2 py-1 text-xs border bg-card">Solid</button>
              <button className="rounded-lg px-2 py-1 text-xs border bg-card">Dashed</button>
              <button className="rounded-lg px-2 py-1 text-xs border bg-card">Neon</button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="text-xs font-semibold text-muted-foreground">Shadow Layer ({shadowLayer})</label>
          <input type="range" min={1} max={5} value={shadowLayer} onChange={e => setShadowLayer(Number(e.target.value))} className="w-full accent-primary" />
        </div>
      </div>

      {/* Complex Color Engine */}
      <div className="rounded-xl bg-gradient-to-br from-primary/10 to-saweria-400/10 p-4 dark:from-primary/5 dark:to-saweria-400/5">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Palette size={16}/> Complex Color Engine</h4>
        <div className="grid sm:grid-cols-3 gap-3">
          <div>
            <label className="text-xs font-semibold">Warna Utama (Primary)</label>
            <div className="flex gap-2 mt-1">
              <input type="color" value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="h-8 w-8 rounded-lg border-0 p-0 cursor-pointer" />
              <input value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} className="input text-xs font-mono flex-1" />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold">Gradien Tipe</label>
            <select value={gradientType} onChange={e => setGradientType(e.target.value)} className="input text-xs mt-1">
              <option>linear</option><option>radial</option><option>conic</option><option>mesh 4 sudut</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold">Warna Hover / Active</label>
            <div className="flex gap-2 mt-1">
              <span className="inline-block h-6 w-6 rounded-full bg-amber-300 border border-amber-500" title="Hover" />
              <span className="inline-block h-6 w-6 rounded-full bg-emerald-300 border border-emerald-500" title="Active" />
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-lg p-3 text-xs font-mono bg-black/5 dark:bg-white/5" style={{ color: primaryColor }}>
          --primary: {primaryColor}; --accent: #f97316; --radius: {radiusCustom.tl}px;
        </div>
      </div>

      {/* Typography Engine */}
      <div className="rounded-xl border bg-card p-4 dark:border-white/10">
        <h4 className="font-bold text-sm mb-3 flex items-center gap-2"><Type size={16}/> 3-Tier Typography & Copywriting</h4>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Heading Font</label>
            <select value={fontHeading} onChange={e => setFontHeading(e.target.value)} className="input text-xs mt-1">
              <option>Inter</option><option>Space Grotesk</option><option>Playfair Display</option><option>Orbitron</option><option>IBM Plex Sans</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Body Font</label>
            <select value={fontBody} onChange={e => setFontBody(e.target.value)} className="input text-xs mt-1">
              <option>Inter</option><option>Plus Jakarta Sans</option><option>DM Sans</option><option>Chakra Petch</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Monospace Font</label>
            <select value={fontMono} onChange={e => setFontMono(e.target.value)} className="input text-xs mt-1">
              <option>JetBrains Mono</option><option>IBM Plex Mono</option>
            </select>
          </div>
        </div>
        <div className="rounded-lg bg-muted p-3 text-sm space-y-2 dark:bg-white/5">
          <div>
            <span className="font-bold text-xs uppercase">Mode Tulisan:</span>
            <div className="flex gap-2 mt-1">
              {['default','semi','full'].map(m => (
                <button key={m} onClick={() => setCopyMode(m)} className={`rounded-md px-2 py-0.5 text-xs font-medium border ${copyMode===m?'bg-primary text-white':'bg-card hover:bg-accent'}`}>{m}</button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Selain Text (Full Custom)</label>
            <input value={projectName} onChange={e => setProjectName(e.target.value)} className="input text-xs w-full mt-1" placeholder="[Nama Web]" />
            <input value={projectFocus} onChange={e => setProjectFocus(e.target.value)} className="input text-xs w-full mt-1" placeholder="[Fokus Produk]" />
          </div>
          <div className="font-mono text-xs text-muted-foreground border-t pt-2 dark:border-white/10">
            {copyMode === 'default' ? 'Desain profesional sesuai kategori.' : copyMode === 'semi' ? `[${projectName}] fokus [${projectFocus}].` : `Selamat datang di ${projectName} — ${projectFocus}.`}
          </div>
        </div>
      </div>
    </div>
  );
}

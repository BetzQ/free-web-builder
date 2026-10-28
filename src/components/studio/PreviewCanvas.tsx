import { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { useStudioStore } from '@/store/useStudioStore';

export default function PreviewCanvas() {
  const { previewTheme, previewDevice, setPreviewTheme, setPreviewDevice } = useStudioStore();
  const [primaryColor] = useState('#0ea5e9');
  
  const previewStyle = { '--primary': primaryColor, '--accent': '#f97316' } as React.CSSProperties;
  
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
        <div className={`${previewTheme === 'dark' ? 'dark bg-[#171717] text-white' : 'bg-white text-black'}`} style={previewStyle}>
          <div className="h-40 bg-gradient-to-r from-primary to-saweria-500 flex items-center justify-center">
            <h1 className="font-heading text-2xl font-extrabold text-white">Free Web Builder</h1>
          </div>
          <div className="p-4 space-y-2">
            <div className="h-3 w-3/4 rounded bg-muted" />
            <div className="h-3 w-1/2 rounded bg-muted" />
            <div className="flex gap-2 mt-3">
              <div className="h-8 w-20 rounded-lg bg-primary text-white text-xs flex items-center justify-center font-medium">Start</div>
              <div className="h-8 w-20 rounded-lg border text-xs flex items-center justify-center">Demo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
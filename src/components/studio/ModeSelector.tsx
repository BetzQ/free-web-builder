import { useStudioStore } from '@/store/useStudioStore';

export default function ModeSelector() {
  const { customizationMode, setCustomizationMode } = useStudioStore();
  
  const modes = [
    { key: 'default', label: 'Default', desc: '1 Klik Jadi' },
    { key: 'semi', label: 'Semi Custom', desc: 'Preset + Ubah Cepat' },
    { key: 'full', label: 'Full Custom', desc: 'God Mode Per-Partikel' },
  ] as const;
  
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {modes.map((m) => (
        <button 
          key={m.key}
          onClick={() => setCustomizationMode(m.key)}
          className={`rounded-xl border px-4 py-3 text-sm font-medium transition-all ${customizationMode === m.key ? 'bg-primary text-primary-foreground border-primary shadow-glow' : 'bg-card text-muted-foreground hover:bg-accent hover:text-foreground border-border'}`}
          aria-pressed={customizationMode === m.key}
        >
          <div className="font-heading font-bold">{m.label}</div>
          <div className="text-xs opacity-80">{m.desc}</div>
        </button>
      ))}
    </div>
  );
}
import { useState } from 'react';
import { Download, Coffee, Check } from 'lucide-react';
import { buildZip } from '@/engines/zipBundler';
import { useStudioStore } from '@/store/useStudioStore';

export default function ExportModal() {
  const { openQRModal } = useStudioStore();
  const [done, setDone] = useState(false);
  
  const handleDownload = async () => {
    setDone(true);
    await buildZip({ projectName: 'free-web-builder', includeFrontend: true, includeBackend: true, includeDatabase: true, includeAIBlueprint: true, includeEnterprise: true });
  };
  
  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4">Ekspor Project</h3>
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        <button onClick={handleDownload} className="btn btn-primary text-sm flex items-center gap-2 justify-center"><Download size={16} /> Download .zip Lengkap</button>
        <button className="btn btn-secondary text-sm">Paket Korporasi</button>
        <button className="btn btn-outline text-sm">File Satuan (.sql / .tsx)</button>
      </div>
      
      {done && (
        <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-700 p-4 mb-4 text-center animate-in">
          <Check size={24} className="mx-auto mb-2 text-emerald-600" />
          <div className="font-bold">Download Berhasil!</div>
          <div className="text-sm text-muted-foreground">File .zip sudah di komputermu.</div>
        </div>
      )}
      
      <div className="rounded-xl border bg-gradient-to-r from-saweria-50 to-amber-50 dark:from-saweria-900/20 dark:to-amber-900/20 p-4 flex items-center gap-3 dark:border-saweria-700">
        <div className="h-10 w-10 rounded-lg bg-saweria-500 text-white flex items-center justify-center shrink-0 shadow-glow-saweria"><Coffee size={20} /></div>
        <div>
          <div className="font-bold text-sm">Terima Kasih Atas Dukungan!</div>
          <p className="text-xs text-muted-foreground">Produk ini dibuat oleh pengembang Indonesia untuk dunia. Setiap dukungan melalui Saweria membantu kami terus berinovasi.</p>
        </div>
        <button onClick={openQRModal} className="btn-saweria text-xs whitespace-nowrap">QR Saweria</button>
      </div>
    </div>
  );
}
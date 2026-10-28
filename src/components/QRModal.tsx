import { useStudioStore } from '@/store/useStudioStore';
import { X, Coffee, Heart, ExternalLink } from 'lucide-react';

export default function QRModal() {
  const { isQRModalOpen, closeQRModal } = useStudioStore();
  
  if (!isQRModalOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in"
      onClick={closeQRModal}
      aria-modal="true"
      role="dialog"
      aria-label="Modal Apresiasi Saweria"
    >
      <div 
        className="relative max-w-md w-full rounded-2xl border bg-card shadow-2xl p-8 text-center animate-scale-in dark:border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={closeQRModal}
          className="absolute top-3 right-3 rounded-full p-1.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          aria-label="Tutup modal"
        >
          <X size={20} />
        </button>
        
        <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-br from-saweria-400 to-saweria-600 text-white flex items-center justify-center shadow-glow-saweria">
          <Coffee size={24} />
        </div>
        
        <h3 className="font-heading text-xl font-bold mb-2">Dukung Karya Lokal</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
          Produk ini dibuat dengan cinta oleh pengembang Indonesia. Setiap sumbangan kecil melalui Saweria atau QRIS akan membantu kami terus berinovasi dan menjaga proyek ini tetap terbuka untuk semua.
        </p>
        
        <div className="rounded-xl overflow-hidden border bg-white dark:bg-black/50 mb-6 shadow-inner">
          <img 
            src="/qr-saweria/qr-saweria.png" 
            alt="QR Code Saweria untuk dukungan lokal"
            className="w-48 h-48 mx-auto object-contain p-2"
            loading="eager"
          />
        </div>
        
        <a 
          href="#" 
          className="btn-saweria w-full justify-center mb-3 text-sm font-semibold"
          onClick={closeQRModal}
        >
          <Coffee size={16} className="mr-2" /> Buka Saweria
        </a>
        
        <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground underline underline-offset-2 transition-colors flex items-center gap-1">GitHub Sponsors <ExternalLink size={10} /></a>
          <span>·</span>
          <a href="#" className="hover:text-foreground underline underline-offset-2 transition-colors">Ko-fi</a>
        </div>
        
        <p className="mt-6 text-xs text-muted-foreground italic flex items-center justify-center gap-1">
          <Heart size={12} fill="currentColor" className="text-saweria-500" /> Terima kasih atas dukungan Anda — ini adalah karya anak bangsa.
        </p>
      </div>
    </div>
  );
}
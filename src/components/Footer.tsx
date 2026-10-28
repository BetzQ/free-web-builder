import { useStudioStore } from '@/store/useStudioStore';
import { Coffee, Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  const { openQRModal } = useStudioStore();
  
  return (
    <footer className="w-full border-t bg-gradient-to-b from-muted/30 to-background dark:from-black/30 dark:to-background">
      {/* Manifesto Card */}
      <div className="container-main py-12 lg:py-16">
        <div className="max-w-3xl mx-auto rounded-2xl border bg-card/60 backdrop-blur-sm p-8 lg:p-10 shadow-sm dark:border-white/10 dark:bg-black/20">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Karya Anak Bangsa</span> — Untuk Dunia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-base lg:text-lg">
            Free Web Builder lahir dari kecintaan pengembang Indonesia terhadap teknologi terbuka. Kami percaya bahwa alat yang kuat harus selalu gratis, transparan, dan dapat diakses oleh siapa saja — dari pelajar di desa hingga pengembang di kota besar. Setiap baris kode adalah bentuk kebanggaan kami.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            <a href="#" className="btn btn-secondary text-sm">GitHub</a>
            <a href="#" className="btn btn-primary text-sm">Tutorial Deploy</a>
            <button onClick={openQRModal} className="btn-saweria text-sm flex items-center gap-2">
              <Coffee size={16} /> Dukung Saweria
            </button>
          </div>
          <p className="text-xs text-muted-foreground italic">
            "Tidak ada yang lebih kuat dari kode yang dibagikan dengan tulus."
          </p>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t dark:border-white/10">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4 py-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} Free Web Builder</span>
            <span className="flex items-center gap-1 text-saweria-500 font-medium">
              <Heart size={14} fill="currentColor" /> Dibuat dengan cinta oleh pengembang Indonesia
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Dokumentasi</a>
            <a href="#" className="hover:text-foreground transition-colors">Lisensi MIT</a>
            <a href="#" className="hover:text-foreground transition-colors">Komunitas</a>
            <a href="#" className="hover:text-foreground transition-colors flex items-center gap-1">GitHub <ExternalLink size={12} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { ArrowRight, Code2, Database, ShieldCheck, Zap } from 'lucide-react';
import { useStudioStore } from '@/store/useStudioStore';

export default function Hero() {
  const { openQRModal } = useStudioStore();
  
  return (
    <section className="relative overflow-hidden section">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-saweria-400/10 blur-3xl" />
      
      <div className="container-main relative">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium bg-card/60 backdrop-blur-sm mb-6 shadow-sm dark:border-white/10">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>v1.0.0 — Open Source & Gratis Selamanya</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Bangun Web Impian Anda <br />
            <span className="gradient-text">Tanpa Batas</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl">
            <strong>Frontend</strong> · <strong>Backend</strong> · <strong>Database SQL</strong> · <strong>Deploy</strong> — 
            Semua dalam satu studio. Tidak perlu server, tidak perlu biaya, hanya kreativitas Anda.
          </p>
          
          <p className="text-sm text-muted-foreground mb-8">
            Dibuat dengan cinta oleh pengembang Indonesia untuk dunia. Open Source, 100% Statis, Siap Deploy ke Vercel.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a href="#studio" className="btn btn-primary text-base shadow-glow px-6 py-3">
              Mulai Membangun <ArrowRight size={18} />
            </a>
            <button onClick={openQRModal} className="btn-saweria text-base px-6 py-3 shadow-glow-saweria">
              Dukung Karya Lokal <ArrowRight size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {[
              { icon: Code2, label: 'Frontend Builder', desc: 'Visual & Kode' },
              { icon: ShieldCheck, label: 'Backend Security', desc: 'JWT, OAuth, RBAC' },
              { icon: Database, label: 'Database SQL', desc: '1 File .sql Siap Pakai' },
              { icon: Zap, label: 'Deploy Gratis', desc: 'Vercel / Netlify' },
            ].map((feat) => (
              <div key={feat.label} className="rounded-xl border bg-card/60 backdrop-blur-sm p-4 text-center hover:shadow-lg transition-all hover:-translate-y-0.5 dark:border-white/10">
                <feat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="font-semibold text-sm">{feat.label}</div>
                <div className="text-xs text-muted-foreground">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
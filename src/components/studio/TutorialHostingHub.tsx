import { BookOpen, Copy } from 'lucide-react';
import tutorials from '@/data/hosting-tutorials.json';

export default function TutorialHostingHub() {
  // Tutorials loaded from data
  
  return (
    <div className="rounded-2xl border bg-card p-6 dark:border-white/10">
      <h3 className="font-heading text-xl font-bold mb-4 flex items-center gap-2"><BookOpen size={22} /> Tutorial Hosting & Deploy</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-xl bg-muted p-4 dark:bg-white/5">
          <h4 className="font-bold mb-2 text-sm">Frontend</h4>
          {tutorials.frontend.map(t => (
            <a key={t.title} href={t.link} target="_blank" rel="noopener noreferrer" className="block text-xs font-medium text-primary hover:underline mb-1">{t.title} {t.badge}</a>
          ))}
        </div>
        <div className="rounded-xl bg-muted p-4 dark:bg-white/5">
          <h4 className="font-bold mb-2 text-sm">Backend</h4>
          {tutorials.backend.map(t => (
            <a key={t.title} href={t.link} target="_blank" rel="noopener noreferrer" className="block text-xs font-medium text-primary hover:underline mb-1">{t.title} {t.badge}</a>
          ))}
        </div>
        <div className="rounded-xl bg-muted p-4 dark:bg-white/5">
          <h4 className="font-bold mb-2 text-sm">Database</h4>
          {tutorials.database.map(t => (
            <a key={t.title} href={t.link} target="_blank" rel="noopener noreferrer" className="block text-xs font-medium text-primary hover:underline mb-1">{t.title} {t.badge}</a>
          ))}
        </div>
      </div>
      <div className="mt-4 rounded-lg border bg-card p-3 text-xs font-mono text-muted-foreground flex items-center gap-2">
        <Copy size={12} /> Perintah salin tersedia di setiap tutorial — tidak perlu menonton video.
      </div>
    </div>
  );
}
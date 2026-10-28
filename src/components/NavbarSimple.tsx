import { useState } from 'react';
import { Coffee, Globe, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

export default function NavbarSimple() {
  const [lang, setLang] = useState('id');
  const [theme, setTheme] = useState('light');
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const texts: any = {
    id: { home: 'Beranda', studio: 'Studio', tech: 'Tech Radar', tut: 'Tutorial', support: 'Dukung Karya Lokal' },
    en: { home: 'Home', studio: 'Studio', tech: 'Tech Radar', tut: 'Tutorials', support: 'Support Local' },
  };
  const t = texts[lang] || texts.id;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xl dark:bg-black/40 dark:border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold text-foreground">Free Web Builder</a>
        <div className="hidden md:flex items-center gap-1">
          <a href="#" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">{t.home}</a>
          <a href="#studio" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">{t.studio}</a>
          <a href="#tech-radar" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">{t.tech}</a>
          <a href="#tutorials" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">{t.tut}</a>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <button onClick={() => setTheme(theme==='light'?'dark':'light')} className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-white/10" aria-label="Theme">{theme==='light'?<Moon size={18}/>:<Sun size={18}/>}</button>
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-sm hover:bg-gray-100">{lang.toUpperCase()} <ChevronDown size={14}/></button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white dark:bg-neutral-900 border rounded-xl shadow-xl p-1 w-48 z-50">
                {['id','en'].map(l => <button key={l} onClick={() => {setLang(l); setLangOpen(false);}} className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg">{l.toUpperCase()}</button>)}
              </div>
            )}
          </div>
          <button onClick={() => alert('Saweria QR: https://qr-saweria/qr-saweria.png')} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-amber-500 hover:bg-amber-600 shadow-md">☕ {t.support}</button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">{open?<X/>:<Menu/>}</button>
      </div>
    </nav>
  );
}
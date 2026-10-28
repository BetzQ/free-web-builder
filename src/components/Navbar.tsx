import { useState } from 'react';
import { useStudioStore } from '@/store/useStudioStore';
import { LANGUAGES } from '@/types';
import { useTranslation } from '@/i18n';
import { Coffee, Globe, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { locale, theme, setLocale, setTheme, openQRModal, isNavMenuOpen, toggleNavMenu, closeNavMenu } = useStudioStore();
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  
  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b glass bg-white/70 backdrop-blur-xl dark:bg-black/40 dark:border-white/10">
      <div className="container-main flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-foreground hover:opacity-90 transition-opacity" aria-label="Free Web Builder Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-saweria-500 text-white shadow-glow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
          </span>
          <span>Free Web Builder</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: 'Beranda', href: '#' },
            { label: 'Studio', href: '#studio' },
            { label: 'Tech Radar', href: '#tech-radar' },
            { label: 'Tutorial', href: '#tutorials' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              {item.label}
            </a>
          ))}
        </div>
        
        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Theme Toggle */}
          <button 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors" 
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          {/* Language Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-expanded={langOpen}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{currentLang.flag}</span>
              <span className="hidden sm:inline">{currentLang.nativeName}</span>
              <ChevronDown size={14} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border bg-card shadow-xl dark:border-white/10 overflow-hidden animate-in">
                <div className="p-1.5">
                  {LANGUAGES.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => { setLocale(l.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors ${l.code === locale ? 'bg-primary/10 text-primary font-medium' : 'hover:bg-accent text-muted-foreground hover:text-foreground'}`}
                      aria-label={`${l.name}`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <div className="text-left leading-tight">
                        <div className="font-medium">{l.name}</div>
                        <div className="text-xs text-muted-foreground">{l.nativeName}</div>
                      </div>
                      {l.rtl && <span className="ml-auto text-[10px] text-muted-foreground">RTL</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Saweria Button */}
          <button 
            onClick={openQRModal}
            className="btn-saweria flex items-center gap-2 text-sm shadow-glow-saweria"
            aria-label="Dukung karya lokal"
          >
            <Coffee size={16} />
            <span>Dukung Karya Lokal</span>
          </button>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          onClick={toggleNavMenu}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isNavMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isNavMenuOpen && (
        <div className="md:hidden border-t glass bg-white/90 dark:bg-black/60 animate-slide-down">
          <div className="container-main py-4 flex flex-col gap-2">
            {[
              { label: 'Beranda', href: '#' },
              { label: 'Studio', href: '#studio' },
              { label: 'Tech Radar', href: '#tech-radar' },
              { label: 'Tutorial', href: '#tutorials' },
            ].map((item) => (
              <a key={item.href} href={item.href} onClick={closeNavMenu} className="rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t dark:border-white/10">
              <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="flex-1 rounded-lg px-3 py-2 text-sm font-medium bg-accent hover:bg-accent/80 transition-colors">
                {theme === 'light' ? '🌙 Gelap' : '☀️ Terang'}
              </button>
              <button onClick={openQRModal} className="flex-1 rounded-lg px-3 py-2 text-sm font-medium btn-saweria text-center">
                <Coffee size={14} className="inline mr-1" /> Dukung Karya
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
import { Suspense } from 'react';
import NavbarSimple from '@/components/NavbarSimple';
import Footer from '@/components/Footer';
import QRModal from '@/components/QRModal';
import Hero from '@/components/Hero';
import ModeSelector from '@/components/studio/ModeSelector';
import FrontendBuilder from '@/components/studio/FrontendBuilder';
import BackendBuilder from '@/components/studio/BackendBuilder';
import DatabaseBuilder from '@/components/studio/DatabaseBuilder';
import PreviewCanvas from '@/components/studio/PreviewCanvas';
import TutorialHostingHub from '@/components/studio/TutorialHostingHub';
import ExportModal from '@/components/studio/ExportModal';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <NavbarSimple />
      <main className="flex-1">
        <Suspense fallback={<div className="flex items-center justify-center h-screen text-muted-foreground">Memuat Free Web Builder...</div>}>
          <Hero />
        
        <section id="studio" className="section bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container-main text-center max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-4">Studio Pembangun Web</h2>
            <p className="text-muted-foreground mb-8">3 Mode Kustomisasi — Default (Santai) · Semi Custom (Terpadu) · Full Custom (God Mode)</p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              {[
                { title: 'Mode Default', desc: 'Pilih preset (Stripe, Linear, Cyberpunk, UMKM, Corporate, Glassmorphism, Brutalist). 1 klik jadi.' },
                { title: 'Semi Custom', desc: 'Pilih preset, lalu ubah warna utama, lengkungan, dan isi formulir kalimat rumpang secara cepat.' },
                { title: 'Full Custom', desc: 'Kustomisasi per-partikel: Background, Navbar, Hero, Card, Button, Input, Tabel, Modal, Badge, Scrollbar.' },
              ].map((mode) => (
                <div key={mode.title} className="rounded-2xl border bg-card p-6 shadow-sm dark:border-white/10 hover:shadow-lg transition-all hover:-translate-y-1">
                  <h3 className="font-heading text-xl font-bold mb-2">{mode.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="studio" className="section bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container-main">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading text-3xl lg:text-5xl font-bold tracking-tight mb-2 text-center">Studio Pembangun Web</h2>
              <p className="text-muted-foreground text-center mb-6">3 Mode Kustomisasi — Default / Semi / Full Imajinasi</p>
              <ModeSelector />
              <div className="grid lg:grid-cols-2 gap-6">
                <FrontendBuilder />
                <BackendBuilder />
              </div>
              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                <DatabaseBuilder />
                <PreviewCanvas />
              </div>
              <div className="mt-6 grid lg:grid-cols-2 gap-6">
                <TutorialHostingHub />
                <ExportModal />
              </div>
            </div>
          </div>
        </section>
        
        <section id="tech-radar" className="section">
          <div className="container-main max-w-4xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight mb-3 text-center">Tech Radar</h2>
            <p className="text-muted-foreground text-center mb-8">Framework & Tools Terbaru — Selalu Terupdate</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[ 'React / Next.js / Vite', 'Vue 3 / Nuxt / SvelteKit', 'Node.js / FastAPI / Go / Rust / PHP / Java / C#' ].map((t) => (
                <div key={t} className="rounded-xl border bg-card p-4 font-mono text-sm font-medium dark:border-white/10">{t}</div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="tutorials" className="section bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="container-main max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight mb-4">Tutorial Deploy Anti-Ribet</h2>
            <p className="text-muted-foreground mb-6">Gratis: Vercel, Netlify, Cloudflare Pages, GitHub Pages · Berbayar: cPanel, VPS, AWS</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Vercel 🏷️ 100% GRATIS ⏱️ 2 Menit', 'Netlify 🏷️ GRATIS ⏱️ 2 Menit', 'Cloudflare 🏷️ GRATIS ⏱️ 2 Menit', 'GitHub Pages 🏷️ GRATIS ⏱️ 3 Menit', 'cPanel 🏷️ BERBAYAR ⏱️ 10 Menit'].map((t) => (
                <span key={t} className="rounded-full border bg-card px-4 py-2 text-sm font-medium dark:border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </section>
        </Suspense>
      </main>
      <Footer />
      <QRModal />
    </div>
  );
}
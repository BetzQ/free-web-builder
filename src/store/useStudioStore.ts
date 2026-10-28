import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Locale, Theme, CustomizationMode } from '@/types';

export interface ParticleConfig {
  borderRadius: { tl: number; tr: number; br: number; bl: number };
  borderWidth: number;
  borderColor: string;
  backgroundType: 'solid' | 'linear' | 'radial' | 'mesh';
  colors: string[];
  shadowLevel: number;
  glassmorphism: boolean;
  typography: { headingFont: string; bodyFont: string; monoFont: string };
}

export interface StudioState {
  locale: Locale;
  theme: Theme;
  previewTheme: Theme;
  customizationMode: CustomizationMode;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  isQRModalOpen: boolean;
  isNavMenuOpen: boolean;
  primaryColor: string;
  particles: Record<string, ParticleConfig>;
  setLocale: (l: Locale) => void;
  setTheme: (t: Theme) => void;
  setPreviewTheme: (t: Theme) => void;
  setCustomizationMode: (m: CustomizationMode) => void;
  setPreviewDevice: (d: 'desktop' | 'tablet' | 'mobile') => void;
  setPrimaryColor: (c: string) => void;
  updateParticleStyle: (name: string, props: Partial<ParticleConfig>) => void;
  openQRModal: () => void;
  closeQRModal: () => void;
  toggleNavMenu: () => void;
  closeNavMenu: () => void;
}

const defaultParticles: Record<string, ParticleConfig> = {
  navbar: { borderRadius: { tl: 12, tr: 12, br: 12, bl: 12 }, borderWidth: 1, borderColor: '#e5e7eb', backgroundType: 'solid', colors: ['#ffffff'], shadowLevel: 2, glassmorphism: false, typography: { headingFont: 'Space Grotesk', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  hero: { borderRadius: { tl: 16, tr: 16, br: 16, bl: 16 }, borderWidth: 0, borderColor: '#0ea5e9', backgroundType: 'linear', colors: ['#0ea5e9', '#f97316'], shadowLevel: 3, glassmorphism: true, typography: { headingFont: 'Inter', bodyFont: 'Plus Jakarta Sans', monoFont: 'JetBrains Mono' } },
  card: { borderRadius: { tl: 16, tr: 16, br: 16, bl: 16 }, borderWidth: 1, borderColor: '#e5e7eb', backgroundType: 'solid', colors: ['#f8fafc'], shadowLevel: 1, glassmorphism: false, typography: { headingFont: 'Inter', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  button: { borderRadius: { tl: 9999, tr: 9999, br: 9999, bl: 9999 }, borderWidth: 1, borderColor: '#0ea5e9', backgroundType: 'solid', colors: ['#0ea5e9'], shadowLevel: 2, glassmorphism: false, typography: { headingFont: 'Inter', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  input: { borderRadius: { tl: 8, tr: 8, br: 8, bl: 8 }, borderWidth: 1, borderColor: '#d1d5db', backgroundType: 'solid', colors: ['#ffffff'], shadowLevel: 0, glassmorphism: false, typography: { headingFont: 'Inter', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  table: { borderRadius: { tl: 8, tr: 8, br: 8, bl: 8 }, borderWidth: 1, borderColor: '#e5e7eb', backgroundType: 'solid', colors: ['#f8fafc'], shadowLevel: 1, glassmorphism: false, typography: { headingFont: 'Inter', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  modal: { borderRadius: { tl: 24, tr: 24, br: 24, bl: 24 }, borderWidth: 1, borderColor: '#ffffff20', backgroundType: 'glass', colors: ['rgba(255,255,255,0.8)'], shadowLevel: 4, glassmorphism: true, typography: { headingFont: 'Space Grotesk', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
  badge: { borderRadius: { tl: 9999, tr: 9999, br: 9999, bl: 9999 }, borderWidth: 0, borderColor: '#0ea5e9', backgroundType: 'solid', colors: ['#0ea5e9'], shadowLevel: 0, glassmorphism: false, typography: { headingFont: 'Inter', bodyFont: 'Inter', monoFont: 'JetBrains Mono' } },
};

export const useStudioStore = create<StudioState>()(
  persist(
    (set) => ({
      locale: 'id',
      theme: 'light',
      previewTheme: 'light',
      customizationMode: 'default',
      previewDevice: 'desktop',
      primaryColor: '#0ea5e9',
      particles: defaultParticles,
      isQRModalOpen: false,
      isNavMenuOpen: false,
      setLocale: (l) => set({ locale: l }),
      setTheme: (t) => set({ theme: t }),
      setPreviewTheme: (t) => set({ previewTheme: t }),
      setCustomizationMode: (m) => set({ customizationMode: m }),
      setPreviewDevice: (d) => set({ previewDevice: d }),
      setPrimaryColor: (c) => set({ primaryColor: c }),
      updateParticleStyle: (name, props) => set((s) => ({ particles: { ...s.particles, [name]: { ...s.particles[name], ...props } } })),
      openQRModal: () => set({ isQRModalOpen: true }),
      closeQRModal: () => set({ isQRModalOpen: false }),
      toggleNavMenu: () => set((s) => ({ isNavMenuOpen: !s.isNavMenuOpen })),
      closeNavMenu: () => set({ isNavMenuOpen: false }),
    }),
    {
      name: 'free-web-builder-v3',
      partialize: (state) => ({
        locale: state.locale,
        theme: state.theme,
        customizationMode: state.customizationMode,
        primaryColor: state.primaryColor,
        previewDevice: state.previewDevice,
        particles: state.particles,
      }),
    }
  )
);

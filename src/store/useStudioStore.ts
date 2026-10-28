import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Locale, Theme, CustomizationMode } from '@/types';

export interface StudioState {
  locale: Locale;
  theme: Theme;
  previewTheme: Theme;
  customizationMode: CustomizationMode;
  previewDevice: 'desktop' | 'tablet' | 'mobile';
  isQRModalOpen: boolean;
  isNavMenuOpen: boolean;
  
  primaryColor: string;
  
  // Actions
  setLocale: (l: Locale) => void;
  setTheme: (t: Theme) => void;
  setPreviewTheme: (t: Theme) => void;
  setCustomizationMode: (m: CustomizationMode) => void;
  setPreviewDevice: (d: 'desktop' | 'tablet' | 'mobile') => void;
  setPrimaryColor: (c: string) => void;
  openQRModal: () => void;
  closeQRModal: () => void;
  toggleNavMenu: () => void;
  closeNavMenu: () => void;
}

export const useStudioStore = create<StudioState>()(
  persist(
    (set) => ({
      locale: 'id',
      theme: 'light',
      previewTheme: 'light',
      customizationMode: 'default',
      previewDevice: 'desktop',
      primaryColor: '#0ea5e9',
      isQRModalOpen: false,
      isNavMenuOpen: false,
      
      setLocale: (l) => set({ locale: l }),
      setTheme: (t) => set({ theme: t }),
      setPreviewTheme: (t) => set({ previewTheme: t }),
      setCustomizationMode: (m) => set({ customizationMode: m }),
      setPreviewDevice: (d) => set({ previewDevice: d }),
      setPrimaryColor: (c) => set({ primaryColor: c }),
      openQRModal: () => set({ isQRModalOpen: true }),
      closeQRModal: () => set({ isQRModalOpen: false }),
      toggleNavMenu: () => set((s) => ({ isNavMenuOpen: !s.isNavMenuOpen })),
      closeNavMenu: () => set({ isNavMenuOpen: false }),
    }),
    {
      name: 'free-web-builder-storage',
      partialize: (state) => ({
        locale: state.locale,
        theme: state.theme,
        customizationMode: state.customizationMode,
      }),
    }
  )
);
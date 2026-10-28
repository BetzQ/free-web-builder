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
  
  // Actions
  setLocale: (l: Locale) => void;
  setTheme: (t: Theme) => void;
  setPreviewTheme: (t: Theme) => void;
  setCustomizationMode: (m: CustomizationMode) => void;
  setPreviewDevice: (d: 'desktop' | 'tablet' | 'mobile') => void;
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
      isQRModalOpen: false,
      isNavMenuOpen: false,
      
      setLocale: (l) => set({ locale: l }),
      setTheme: (t) => set({ theme: t }),
      setPreviewTheme: (t) => set({ previewTheme: t }),
      setCustomizationMode: (m) => set({ customizationMode: m }),
      setPreviewDevice: (d) => set({ previewDevice: d }),
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
export type Locale = 'id' | 'en' | 'zh-CN' | 'ru' | 'ja' | 'ko' | 'es' | 'ar' | 'de' | 'fr' | 'pt' | 'hi';

export type Theme = 'light' | 'dark';

export type CustomizationMode = 'default' | 'semi' | 'full';

export interface LanguageOption {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'zh-CN', name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
];

export interface TranslationKeys {
  // Common
  appName: string;
  tagline: string;
  loading: string;
  save: string;
  cancel: string;
  confirm: string;
  delete: string;
  edit: string;
  copy: string;
  copied: string;
  download: string;
  preview: string;
  settings: string;
  language: string;
  theme: string;
  lightMode: string;
  darkMode: string;
  toggleTheme: string;
  toggleLanguage: string;
  
  // Navbar
  home: string;
  studio: string;
  techRadar: string;
  tutorials: string;
  support: string;
  supportLocal: string;
  buyCoffee: string;
  qrCodeAlt: string;
  
  // Hero/Landing
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startBuilding: string;
  viewDemo: string;
  githubRepo: string;
  
  // Studio
  studioTitle: string;
  studioSubtitle: string;
  frontendTab: string;
  backendTab: string;
  databaseTab: string;
  exportTab: string;
  modeDefault: string;
  modeSemi: string;
  modeFull: string;
  modeDefaultDesc: string;
  modeSemiDesc: string;
  modeFullDesc: string;
  livePreview: string;
  previewDesktop: string;
  previewTablet: string;
  previewMobile: string;
  resetAll: string;
  undo: string;
  redo: string;
  
  // Frontend Builder
  particles: string;
  background: string;
  navbar: string;
  hero: string;
  cards: string;
  buttons: string;
  inputs: string;
  tables: string;
  modals: string;
  badges: string;
  scrollbar: string;
  shapeGeometry: string;
  borderRadius: string;
  borderStyle: string;
  glassmorphism: string;
  noiseTexture: string;
  shadows: string;
  colorEngine: string;
  colorPresets: string;
  customGradient: string;
  splitColors: string;
  meshGradient: string;
  hoverColors: string;
  focusColors: string;
  typography: string;
  fontPairs: string;
  fontSizes: string;
  letterSpacing: string;
  copywriting: string;
  defaultCopy: string;
  semiCustomCopy: string;
  fullCustomCopy: string;
  projectName: string;
  projectFocus: string;
  
  // Backend Builder
  architecture: string;
  auth: string;
  authorization: string;
  rateLimiting: string;
  security: string;
  cors: string;
  csrf: string;
  csp: string;
  encryption: string;
  auditLog: string;
  webhooks: string;
  healthChecks: string;
  apiDocs: string;
  docker: string;
  
  // Database Builder
  templates: string;
  customTables: string;
  columns: string;
  dataTypes: string;
  relationships: string;
  indexes: string;
  triggers: string;
  rls: string;
  seedData: string;
  sqlDialect: string;
  postgresql: string;
  mysql: string;
  sqlite: string;
  sqlserver: string;
  supabase: string;
  prisma: string;
  drizzle: string;
  dbml: string;
  
  // Export
  downloadZip: string;
  downloadCorporate: string;
  downloadSingle: string;
  generating: string;
  readyToDownload: string;
  projectStructure: string;
  frontendFolder: string;
  backendFolder: string;
  databaseFolder: string;
  aiBlueprintFolder: string;
  enterpriseWidgetFolder: string;
  deployGuide: string;
  readme: string;
  
  // Saweria/Monetization
  supportTitle: string;
  supportMessage: string;
  supportMessageLong: string;
  saweria: string;
  githubSponsors: string;
  kofi: string;
  qrCodeTitle: string;
  qrCodeDescription: string;
  thankYou: string;
  thankYouMessage: string;
  close: string;
  
  // Footer
  footerTagline: string;
  madeWithLove: string;
  openSource: string;
  documentation: string;
  community: string;
  license: string;
  privacy: string;
  
  // Tutorials
  tutorialsTitle: string;
  tutorialsSubtitle: string;
  frontendDeploy: string;
  backendDeploy: string;
  databaseDeploy: string;
  free: string;
  freemium: string;
  paid: string;
  estimatedTime: string;
  steps: string;
  copyCommand: string;
  commandCopied: string;
  
  // Tech Radar
  techRadarTitle: string;
  techRadarSubtitle: string;
  addTool: string;
  frontendTools: string;
  backendTools: string;
  databaseTools: string;
  aiTools: string;
  
  // Notifications
  successDownload: string;
  successCopy: string;
  errorOccurred: string;
  featureComingSoon: string;
}

export type Translations = Record<Locale, TranslationKeys>;
export interface TokenConfig {
  primary: string;
  secondary: string;
  accent: string;
  bgType: string;
  borderRadius: string;
  shadowStyle: string;
  glassmorphism: boolean;
}

export function generateCSSVariables(config: TokenConfig): string {
  return `
:root {
  --primary: ${config.primary};
  --secondary: ${config.secondary};
  --accent: ${config.accent};
  --radius: ${config.borderRadius === 'sharp' ? '0px' : config.borderRadius === 'rounded-lg' ? '8px' : config.borderRadius === 'rounded-2xl' ? '16px' : config.borderRadius === 'rounded-3xl' ? '24px' : '12px'};
  --shadow-style: ${config.shadowStyle};
  --glass: ${config.glassmorphism ? 'blur(12px) saturate(140%)' : 'none'};
  --bg-mode: ${config.bgType};
}
.dark { --bg-mode: ${config.bgType}-dark; }
`;
}

export function generateTailwindConfig(config: TokenConfig): string {
  return JSON.stringify({
    theme: { extend: { colors: { primary: config.primary, secondary: config.secondary, accent: config.accent } } },
    darkMode: 'class',
  }, null, 2);
}
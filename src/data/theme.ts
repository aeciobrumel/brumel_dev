export type Palette = {
  primary: string; // RGB tokens em formato "r g b"
  secondary: string;
  accent: string;
  tertiary: string;
};

// Altere aqui para personalizar o tema (formato "r g b").
export const palette: Palette = {
  primary: '22 63 120', // azul escuro principal
  secondary: '18 48 96', // navy profundo
  accent: '46 105 190', // azul destaque
  tertiary: '147 181 230' // azul claro suave
};

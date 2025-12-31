export type Palette = {
  primary: string; // RGB tokens em formato "r g b"
  secondary: string;
  accent: string;
  tertiary: string;
};

// Altere aqui para personalizar o tema (formato "r g b").
export const palette: Palette = {
  primary: '139 92 246', // roxo principal
  secondary: '124 58 237', // roxo profundo
  accent: '167 139 250', // roxo claro
  tertiary: '196 181 253' // lilás suave
};

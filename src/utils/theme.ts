import { Palette } from '../data/theme';

export function applyPalette(palette: Palette) {
  const root = document.documentElement;
  root.style.setProperty('--color-primary', palette.primary);
  root.style.setProperty('--color-secondary', palette.secondary);
  root.style.setProperty('--color-accent', palette.accent);
  root.style.setProperty('--color-tertiary', palette.tertiary);
}

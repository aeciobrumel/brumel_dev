export const PALETTES = [
  { id: "azul", label: "Azul" },
  { id: "esmeralda", label: "Esmeralda" },
  { id: "ambar", label: "Âmbar" },
] as const;

export type PaletteId = (typeof PALETTES)[number]["id"];

export const PALETTE_IDS = PALETTES.map((palette) => palette.id) as PaletteId[];

export const DEFAULT_PALETTE: PaletteId = "azul";

export function isPaletteId(value: unknown): value is PaletteId {
  return typeof value === "string" && PALETTE_IDS.includes(value as PaletteId);
}

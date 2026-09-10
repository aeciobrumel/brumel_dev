"use client";

import { PaletteIcon } from "@/components/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PALETTES, type PaletteId } from "@/consts/palettes";
import { usePaletteStore } from "@/stores/palette";

export function PaletteSelect() {
  const palette = usePaletteStore((state) => state.palette);
  const setPalette = usePaletteStore((state) => state.setPalette);

  return (
    <Select
      onValueChange={(value) => setPalette(value as PaletteId)}
      value={palette}
    >
      <SelectTrigger
        aria-label="Trocar paleta de cores"
        className="h-8 w-[7.5rem] gap-1.5"
        size="sm"
      >
        <PaletteIcon className="size-4 text-accent" />
        <SelectValue placeholder="Paleta" />
      </SelectTrigger>
      <SelectContent align="end">
        {PALETTES.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

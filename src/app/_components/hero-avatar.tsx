"use client";

import { useEffect, useMemo, useState } from "react";
import { resolveTheme, useThemeStore } from "@/stores/theme";

type HeroAvatarProps = {
  src: string;
  srcDark?: string;
  alt: string;
  name: string;
};

export function HeroAvatar({ src, srcDark, alt, name }: HeroAvatarProps) {
  const theme = useThemeStore((state) => state.theme);
  const [mounted, setMounted] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolved = mounted ? resolveTheme(theme) : "dark";
  const currentSrc = resolved === "dark" ? (srcDark ?? src) : src;

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset on src change
  useEffect(() => setErrored(false), [currentSrc]);

  const initials = useMemo(
    () =>
      name
        .split(" ")
        .filter(Boolean)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
    [name]
  );

  const shell =
    "size-32 rounded-2xl border border-outline/10 object-cover object-top shadow-2xl ring-8 ring-accent/35 sm:size-40 md:size-52";

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-accent/25 font-semibold text-foreground ${shell}`}
      >
        {initials || "AB"}
      </div>
    );
  }

  return (
    // biome-ignore lint/performance/noImgElement: static export, next/image unoptimized
    <img
      alt={alt}
      className={shell}
      loading="lazy"
      onError={() => setErrored(true)}
      src={currentSrc}
    />
  );
}

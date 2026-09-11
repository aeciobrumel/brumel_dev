"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

interface PartnerAvatarProps {
  alt?: string;
  className?: string;
  name: string;
  src?: string;
}

export function PartnerAvatar({
  src,
  alt,
  name,
  className,
}: PartnerAvatarProps) {
  const [errored, setErrored] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: reset on src change
  useEffect(() => setErrored(false), [src]);

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

  const shell = "size-16 rounded-xl border border-outline/10 object-cover";

  if (!src || errored) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-accent/25 font-semibold text-foreground",
          shell,
          className
        )}
      >
        {initials || "?"}
      </div>
    );
  }

  return (
    // biome-ignore lint/performance/noImgElement: static export, next/image unoptimized
    <img
      alt={alt ?? name}
      className={cn(shell, className)}
      loading="lazy"
      onError={() => setErrored(true)}
      src={src}
    />
  );
}

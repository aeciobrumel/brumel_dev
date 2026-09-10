import type { Metadata } from "next";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/consts/seo";

type GenerateSeoInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function generateSEO({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
}: GenerateSeoInput = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
  const canonical = new URL(path, SITE_URL).toString();

  return {
    title: resolvedTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE,
      url: canonical,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

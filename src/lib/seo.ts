import type { Metadata } from "next";
import {
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/consts/seo";

interface GenerateSeoInput {
  description?: string;
  path?: string;
  title?: string;
}

export function generateSEO({
  title,
  description = SITE_DESCRIPTION,
  path = "/",
}: GenerateSeoInput = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${SITE_NAME}` : SITE_TITLE;
  const canonical = new URL(path, SITE_URL).toString();

  return {
    alternates: { canonical },
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      description,
      images: [{ alt: SITE_NAME, height: 630, url: OG_IMAGE, width: 1200 }],
      locale: SITE_LOCALE,
      siteName: SITE_NAME,
      title: resolvedTitle,
      type: "website",
      url: canonical,
    },
    title: resolvedTitle,
    twitter: {
      card: "summary_large_image",
      description,
      images: [OG_IMAGE],
      title: resolvedTitle,
    },
  };
}

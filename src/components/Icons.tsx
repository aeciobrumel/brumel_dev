import type { SVGProps } from 'react';
import { TechIconName, HighlightIcon } from '../types/portfolio';

type IconProps = SVGProps<SVGSVGElement>;

export const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.34-3.35-1.34-.45-1.14-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .08 1.53 1.06 1.53 1.06.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 .1-2.72 0 0 .84-.27 2.75 1.05a9.58 9.58 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.19.72.07 1.62.04 2.72 0 3.85-2.34 4.7-4.58 4.95.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47v-11h3.4v1.5h.05c.47-.9 1.6-1.85 3.3-1.85 3.52 0 4.17 2.32 4.17 5.34v6.01ZM5.34 7.94a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.57 20.45h3.55v-11H3.57v11Z" />
  </svg>
);

export const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.2" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <rect x="4" y="5" width="16" height="14" rx="2" ry="2" />
    <path d="m4 7 8 5 8-5" />
  </svg>
);

export const ExternalIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
    <path d="M14 4h6v6M10 14 20 4" />
    <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
  </svg>
);

export const SunIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

export const MoonIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
  </svg>
);

export const ArrowIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const LocationIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M21 10.5c0 5.25-9 11.5-9 11.5s-9-6.25-9-11.5a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10.5" r="2.5" />
  </svg>
);

export const SparkleIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="M12 3v4m0 10v4m8-8h-4M8 12H4m10.5-5.5L12 9l-2.5-2.5M14.5 19.5 12 17l-2.5 2.5" />
  </svg>
);

export const TerminalIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true" {...props}>
    <path d="m6 7 4 5-4 5M13 17h5" />
    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
  </svg>
);

export function TechIcon({ name, className }: { name?: TechIconName; className?: string }) {
  if (!name) return null;

  const common = {
    className: className ?? 'h-4 w-4'
  };

  switch (name) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.4" {...common}>
          <circle cx="12" cy="12" r="1.4" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" className={common.className} fill="currentColor" opacity="0.18" />
          <text x="7" y="16" fontSize="8" fontWeight="600" fill="currentColor">TS</text>
        </svg>
      );
    case 'laravel':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="M4 7.5 10 4l6 3.5v6L10 17 4 13.5z" />
          <path d="m10 17 6-3.5M10 10.5l6-3.5" />
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <rect x="3" y="7" width="18" height="10" rx="2" opacity="0.2" />
          <path d="M9.5 14.5V9.5H8M8 9.5H6v5h2a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 8 9.5Zm6.5 5v-5h-1.5M15 9.5h-2v5h2a1.5 1.5 0 0 0 1.5-1.5V11A1.5 1.5 0 0 0 15 9.5Zm4-3-1.2 6.5a2 2 0 0 1-2 1.6H15" />
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <rect x="5" y="10" width="3" height="3" rx="0.5" />
          <rect x="9" y="10" width="3" height="3" rx="0.5" />
          <rect x="13" y="10" width="3" height="3" rx="0.5" />
          <rect x="9" y="6" width="3" height="3" rx="0.5" />
          <path d="M4 14.5c.6 3 3 4.5 7.5 4.5 4.5 0 7-1.5 8-4.5.5-1.5-.3-2.5-1.5-2.5h-1" />
        </svg>
      );
    case 'docker-compose':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="M6 7.5h4v3H6zM6 13.5h4v3H6zM12.5 7.5H18l-2.5 3.5L18 14h-5.5z" />
          <path d="M6 7.5v9c0 1.1.9 2 2 2h8.5" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="M4 13c1.5-3 3.5-3 5-1.5 1 .9 2 1.5 3.5 0C13 9 11 7 8.5 8.5M12 15.5c1.5-3 3.5-3 5-1.5 1 .9 2 1.5 3.5 0C21 11.5 19 9.5 16.5 11" />
        </svg>
      );
    case 'vite':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="m4 5 8-2 8 2-8 16-8-16Z" />
          <path d="M12 6v6l3-2" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 7.5h4a2 2 0 0 1 0 4H9zM9 11.5h4.5a2 2 0 0 1 0 4H9z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...common}>
          <path d="m3.5 12 8.5-8.5 8.5 8.5-8.5 8.5z" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="M12 10.5V7M12 13.5V17" />
        </svg>
      );
    case 'api':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...common}>
          <rect x="3" y="6" width="18" height="12" rx="3" />
          <path d="M7 10v4M11 10h2v4h-2zM17 14v-4l-2 3.8" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" {...common}>
          <rect x="5" y="5" width="14" height="14" rx="3" />
          <path d="M9 9h6v6H9z" />
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      );
    case 'linux':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="M12 4c-1.5 0-2.5 1-2.5 2.5v2c-1 .5-1.5 1.5-1.5 2.5 0 2 1 5 4 5s4-3 4-5c0-1-.5-2-1.5-2.5v-2C14.5 5 13.5 4 12 4Z" />
          <circle cx="10.5" cy="8" r=".4" fill="currentColor" />
          <circle cx="13.5" cy="8" r=".4" fill="currentColor" />
          <path d="M10 11c.3.3.8.5 2 .5s1.7-.2 2-.5" />
          <path d="M9 15.5c-1 .5-1.5 1.5-1.5 2.5M15 15.5c1 .5 1.5 1.5 1.5 2.5" />
        </svg>
      );
    case 'windows':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" {...common}>
          <path d="M4 5.5 11 4v7H4zm0 6.5h7v7l-7-1.5zm8-8 8-1.2V11h-8zm8 8h-8v7.7l8-1.2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function HighlightIconSymbol({ name, className }: { name: HighlightIcon; className?: string }) {
  switch (name) {
    case 'architecture':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
          <path d="M4 17h16M4 13l8-6 8 6" />
          <path d="M8 17V9.5l4-3 4 3V17" />
        </svg>
      );
    case 'responsive':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
          <rect x="3" y="5" width="14" height="12" rx="2" />
          <rect x="10" y="15" width="11" height="4" rx="1.5" />
          <path d="M7 9h6M7 12h3" />
        </svg>
      );
    case 'delivery':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={className}>
          <path d="M4 7h11l5 5v5H4z" />
          <path d="M14 7v5h6" />
          <circle cx="8" cy="17" r="1.5" />
          <circle cx="16" cy="17" r="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

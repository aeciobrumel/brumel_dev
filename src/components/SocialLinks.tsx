import { SocialLinks as SocialLinksType } from '../types/portfolio';
import { cn } from '../utils/cn';
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from './Icons';

interface SocialLinksProps {
  links: SocialLinksType;
  className?: string;
  variant?: 'solid' | 'ghost';
}

export function SocialLinks({ links, className, variant = 'ghost' }: SocialLinksProps) {
  const base = cn(
    'inline-flex items-center gap-2 rounded-xl border border-outline/60 px-3 py-2 text-sm font-semibold transition hover:border-accent hover:text-accent dark:border-outline'
  );

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      <a
        href={links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className={cn(base, variant === 'solid' && 'bg-white/70 dark:bg-white/5')}
      >
        <GitHubIcon className="h-4 w-4" /> GitHub
      </a>
      <a
        href={links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={cn(base, variant === 'solid' && 'bg-white/70 dark:bg-white/5')}
      >
        <LinkedInIcon className="h-4 w-4" /> LinkedIn
      </a>
      <a
        href={links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={cn(base, variant === 'solid' && 'bg-white/70 dark:bg-white/5')}
      >
        <InstagramIcon className="h-4 w-4" /> Instagram
      </a>
      <a
        href={`mailto:${links.email}`}
        aria-label="Email"
        className={cn(base, variant === 'solid' && 'bg-white/70 dark:bg-white/5')}
      >
        <MailIcon className="h-4 w-4" /> Email
      </a>
    </div>
  );
}

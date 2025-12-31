export type Theme = 'light' | 'dark';

export type TechIconName =
  | 'react'
  | 'typescript'
  | 'laravel'
  | 'php'
  | 'tailwind'
  | 'vite'
  | 'docker'
  | 'docker-compose'
  | 'bootstrap'
  | 'git'
  | 'api'
  | 'ai'
  | 'linux'
  | 'windows';

export type Technology = {
  name: string;
  icon?: TechIconName;
  level?: string;
};

export type TechnologyCategory = {
  title: string;
  items: Technology[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  image?: string;
  links: {
    github: string;
    demo?: string;
  };
};

export type HighlightIcon = 'architecture' | 'responsive' | 'delivery';

export type Highlight = {
  title: string;
  description: string;
  icon: HighlightIcon;
};

export type ImpactLink = {
  label: string;
  href: string;
};

export type ImpactItem = {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  links?: ImpactLink[];
};

export type ImpactSectionContent = {
  kicker: string;
  title: string;
  description: string;
  items: ImpactItem[];
};

export type TimelineItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
};

export type SocialLinks = {
  github: string;
  linkedin: string;
  instagram: string;
  email: string;
};

export type Profile = {
  name: string;
  username: string;
  role: string;
  location: string;
  headline: string;
  availability?: string;
  avatarUrl: string;
  avatarAlt?: string;
  summary: string[];
  approach?: string[];
  links: SocialLinks;
};

export type PortfolioData = {
  profile: Profile;
  snippet: string[];
  technologies: TechnologyCategory[];
  projects: Project[];
  impact: ImpactSectionContent;
  highlights: Highlight[];
  timeline: TimelineItem[];
};

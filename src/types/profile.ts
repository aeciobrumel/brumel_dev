export interface SocialLinks {
  email: string;
  github: string;
  instagram: string;
  linkedin: string;
}

export interface Profile {
  approach?: string[];
  availability?: string;
  avatarAlt?: string;
  avatarUrl: string;
  avatarUrlDark?: string;
  headline: string;
  links: SocialLinks;
  location: string;
  name: string;
  role: string;
  summary: string[];
  username: string;
}

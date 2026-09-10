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
  avatarUrlDark?: string;
  avatarAlt?: string;
  summary: string[];
  approach?: string[];
  links: SocialLinks;
};

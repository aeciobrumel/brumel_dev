export interface PartnerLinks {
  github?: string;
  linkedin?: string;
  website?: string;
}

export interface Partner {
  avatarAlt?: string;
  avatarUrl?: string;
  links?: PartnerLinks;
  name: string;
  role: string;
}

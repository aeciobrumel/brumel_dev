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

export type ImpactContent = {
  kicker: string;
  title: string;
  description: string;
  items: ImpactItem[];
};

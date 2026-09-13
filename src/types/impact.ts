export interface ImpactLink {
  href: string;
  label: string;
}

export interface ImpactItem {
  description: string;
  highlights: string[];
  links?: ImpactLink[];
  subtitle?: string;
  title: string;
}

export interface ImpactContent {
  description: string;
  items: ImpactItem[];
  kicker: string;
  title: string;
}

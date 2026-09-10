export type ProjectLinks = {
  github: string;
  demo?: string;
  chrome?: string;
  firefox?: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  highlights: string[];
  image?: string;
  links: ProjectLinks;
};

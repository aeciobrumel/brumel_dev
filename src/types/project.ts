export interface ProjectLinks {
  chrome?: string;
  demo?: string;
  firefox?: string;
  github?: string;
}

export interface Project {
  description: string;
  highlights: string[];
  image?: string;
  links: ProjectLinks;
  stack: string[];
  title: string;
}

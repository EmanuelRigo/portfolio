export interface Project {
  title: string;
  description: string;
  short: string;
  modal: string;
  testUsers?: string;
  features?: string[];
  image: string;
  techStack: string[];
  liveLinks: {
    label: string;
    url: string;
  }[];
  repoLink: string;
}

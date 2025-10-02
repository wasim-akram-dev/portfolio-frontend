export interface IBlog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  published: boolean;
  coverUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  id: number;
  title: string;
  slug: string;
  description: string;
  features: string[];
  thumbnail?: string;
  liveUrl?: string;
  repoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

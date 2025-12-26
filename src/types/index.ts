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

export enum ProjectCategory {
  FULLSTACK = "FULLSTACK",
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
}

export interface IProject {
  // Basic Info
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;

  // Project Content
  features: string[];
  challenges?: string | null;
  futurePlans?: string | null;

  // Classification
  category: ProjectCategory;
  technologies: string[];

  // Links
  liveUrl?: string | null;
  frontendRepoUrl?: string | null;
  backendRepoUrl?: string | null;
  repositoryUrl?: string | null;

  // Media
  thumbnailUrl: string;
  coverImageUrl?: string | null;
  videoUrl?: string | null;
  imageAltText: string;

  // Meta
  createdAt: string; // ISO date string from API
  updatedAt: string; // ISO date string from API
}

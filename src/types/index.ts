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

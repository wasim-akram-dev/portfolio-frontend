import { IProject } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API!;

export const getAllProjects = async (): Promise<IProject[]> => {
  const res = await fetch(`${BASE_URL}/projects`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data = await res.json();
  return data.projects;
};

export const getProjectBySlug = async (
  slug: string
): Promise<IProject | null> => {
  const res = await fetch(`${BASE_URL}/projects/${slug}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) return null;

  const data = await res.json();
  return data.project ?? null;
};

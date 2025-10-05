export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`);
  return await res.json();
};

export const getProjectBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`
  );
  return await res.json();
};

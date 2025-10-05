export const getAllProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    cache: "no-store",
  });
  return await res.json();
};

export const getProjectBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`,
    {
      cache: "no-store",
    }
  );
  return await res.json();
};

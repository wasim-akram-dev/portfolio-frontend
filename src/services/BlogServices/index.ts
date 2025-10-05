export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    cache: "no-store",
  });
  return await res.json();
};

export const getBlogBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${slug}`, {
    cache: "no-store",
  });
  return await res.json();
};

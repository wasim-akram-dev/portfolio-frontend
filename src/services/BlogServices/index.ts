export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
    next: {
      revalidate: 10,
    },
  });
  return await res.json();
};

export const getBlogBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${slug}`);
  return await res.json();
};

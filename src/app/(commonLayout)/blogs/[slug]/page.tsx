import BlogDetailsCard from "@/components/BlogDetailsCard";

export const getBlogBySlug = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs/${slug}`, {
    next: {
      revalidate: 10,
    },
  });
  return await res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const { blog } = await getBlogBySlug(slug);

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const { blog } = await getBlogBySlug(slug);
  //   console.log("from single blog page", blog);

  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;

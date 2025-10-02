import ProjectDetailsCard from "@/components/ProjectDetailsCard";

export const getProjectBySlug = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`
  );
  return await res.json();
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const { project } = await getProjectBySlug(slug);

  return {
    title: project?.title,
    description: project?.description,
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const { project } = await getProjectBySlug(slug);
  // console.log("from single project page", project);

  return (
    <div className="container mx-auto py-20 px-4 md:px-6">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;

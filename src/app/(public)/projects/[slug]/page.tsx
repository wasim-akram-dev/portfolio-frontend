import ProjectDetails from "@/components/projects/ProjectDetails";
import { getProjectBySlug } from "@/lib/projects";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  if (!project) notFound();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <ProjectDetails project={project} />
      </div>
    </section>
  );
}
// https://i.ibb.co.com/HpBNHTvC/locana.png
// https://i.ibb.co.com/JL4QrLy/runner-courier.png
// https://i.ibb.co.com/wF3MngqP/i-library.png

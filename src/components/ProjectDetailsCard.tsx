import { IProject } from "@/types";
import Image from "next/image";

export default async function ProjectDetailsCard({
  project,
}: {
  project: IProject;
}) {
  if (!project) {
    return (
      <div className="py-20 text-center text-gray-500">Project not found.</div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-30">
      <h1 className="text-5xl font-bold mb-6">{project?.title}</h1>

      {project.thumbnailUrl && (
        <div className="relative h-80 w-full overflow-hidden">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="rounded-lg object-cover shadow-md"
          />
        </div>
      )}

      <article className="prose prose-lg max-w-none">
        <p>{project.description}</p>
      </article>
      <p>liveUrl: {project.liveUrl}</p>
      {/* <p>repoUrl: {project.repoUrl}</p> */}
      <p>features: {project.features}</p>
      <p>slug: {project.slug}</p>
      {/* <p>createdAt: {project.createdAt}</p> */}
      {/* <p>updatedAt: {project.updatedAt}</p> */}
    </main>
  );
}

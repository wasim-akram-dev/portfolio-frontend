import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ project }: { project: IProject }) {
  return (
    <article className="max-w-4xl mx-auto space-y-10">
      {/* Title */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-muted-foreground text-lg">
          {project.shortDescription}
        </p>
      </header>

      {/* Cover Image */}
      {project.coverImageUrl || project.thumbnailUrl ? (
        <div className="relative h-[420px] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            src={project.coverImageUrl ?? project.thumbnailUrl}
            alt={project.imageAltText}
            fill
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Content */}
      <section className="prose prose-neutral max-w-none">
        <p>{project.description}</p>
      </section>

      {/* Features */}
      {project.features?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Technologies */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="flex flex-wrap gap-4">
        {project.liveUrl && (
          <Button asChild>
            <Link href={project.liveUrl} target="_blank">
              Live Site
            </Link>
          </Button>
        )}

        {project.frontendRepoUrl && (
          <Button variant="outline" asChild>
            <Link href={project.frontendRepoUrl} target="_blank">
              Frontend Code
            </Link>
          </Button>
        )}

        {project.backendRepoUrl && (
          <Button variant="outline" asChild>
            <Link href={project.backendRepoUrl} target="_blank">
              Backend Code
            </Link>
          </Button>
        )}
      </section>
    </article>
  );
}

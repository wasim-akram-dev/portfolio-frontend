import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IProject } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: IProject }) {
  return (
    <Card className="group overflow-hidden transition hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnailUrl}
          alt={project.imageAltText}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-4 pt-5">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="justify-end">
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  );
}

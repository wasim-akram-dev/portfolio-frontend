import ProjectActionsButton from "@/components/modules/ProjectManagement/ProjectActionsButton";
import ProjectModalButton from "@/components/modules/ProjectManagement/ProjectModalButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAllProjects } from "@/services/ProjectServices";
import { IProject } from "@/types";

import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Manage Projects - Wasim Akram",
  description:
    "Read my latest projects about web development, linux, and more.",
};

export default async function ManageProjectsPage() {
  const data = await getAllProjects();
  const projects = await data.projects;
  console.log(projects);
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="md:mb-16 mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Manage Your Projects
          </h2>
          <ProjectModalButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: IProject) => (
            <Card key={project.slug} className="z-10 flex flex-col h-full pt-0">
              {project.thumbnailUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="space-y-2 pt-4 flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  {project.description.substring(0, 100)}
                </CardDescription>
                <div className="flex gap-2 mt-2">
                  <ProjectActionsButton id={project.id} project={project} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

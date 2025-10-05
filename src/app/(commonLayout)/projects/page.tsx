import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { IProject } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects - Wasim Akram",
  description:
    "Explore my recent work, personal projects, and collaborations. A showcase of creativity and technical expertise.",
};

export default async function Projects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();
  const projects = await data.projects;

  return (
    <section id="projects" className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="md:mb-16 mb-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl  mb-4">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A showcase of my recent works, personal projects, and
            collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: IProject) => (
            <Card key={project.slug} className="z-10 flex flex-col h-full pt-0">
              {project.thumbnail && (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="space-y-2 pt-4 flex-1">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="items-end flex w-full justify-end">
                <Button variant={"outline"} asChild>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary font-medium"
                  >
                    Read Full Project →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

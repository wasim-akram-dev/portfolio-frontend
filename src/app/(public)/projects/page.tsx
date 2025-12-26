import ProjectCard from "@/components/projects/ProjectCard";
import { getAllProjects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects – Wasim Akram",
  description:
    "A curated showcase of my full-stack, frontend, and backend projects.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  // console.log("projects", projects);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Selected works demonstrating my skills in design, development, and
            problem-solving.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Wasim Akram",
  description:
    "Explore my recent work, personal projects, and collaborations. A showcase of creativity and technical expertise.",
};

export default function Projects() {
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

        <h3>Projects Components goes here!</h3>
      </div>
    </section>
  );
}

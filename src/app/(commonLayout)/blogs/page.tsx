import mongoDbImage from "@/assets/mongodb.png";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const allBlogs = [
  {
    id: 3,
    title: "A Beginner's Handbook to MongoDB Aggregation Pipeline",
    description:
      "Understand the MongoDB aggregation pipeline with this comprehensive guide.",
    slug: "a-beginners-handbook-to-mongodb-aggregation-pipeline",
    image: mongoDbImage,
    fullBlog: "mongodbPipeline.blog.md",
    publishDate: "2025-10-01",
  },
];

export const metadata: Metadata = {
  title: "Blogs - Wasim Akram",
  description:
    "Read my latest blog posts about web development, linux, and more.",
};

export default function Blogs() {
  return (
    <section id="blogs" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="md:mb-16 mb-5 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            My Blogs
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Read my latest blog posts about web development, linux, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog) => (
            <Card key={blog.slug} className="z-10 flex flex-col h-full pt-0">
              {blog.image && (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="space-y-2 pt-4 flex-1">
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardContent>
              <CardFooter className="items-end flex w-full justify-end">
                <Button variant={"outline"} asChild>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="text-primary font-medium"
                  >
                    Read Full Blog →
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

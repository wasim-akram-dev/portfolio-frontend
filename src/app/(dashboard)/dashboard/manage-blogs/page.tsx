import ActionsButton from "@/components/modules/BlogManagement/ActionsButton";
import ModalButton from "@/components/modules/BlogManagement/ModalButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogs } from "@/services/BlogServices";
import { IBlog } from "@/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Manage Blogs - Wasim Akram",
  description:
    "Read my latest blog posts about web development, linux, and more.",
};

export default async function ManageBlogsPage() {
  const data = await getAllBlogs();
  const blogs = await data.blogs;
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="md:mb-16 mb-5 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Manage Your Blogs
          </h2>
          <ModalButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: IBlog) => (
            <Card key={blog.slug} className="z-10 flex flex-col h-full pt-0">
              {blog.coverUrl && (
                <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={blog.coverUrl}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="space-y-2 pt-4 flex-1">
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>
                  {blog.content.substring(0, 100)}
                </CardDescription>
                <div className="flex gap-2 mt-2">
                  <ActionsButton id={blog.id} blog={blog} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

import { BlogFormValues } from "@/lib/validations/blog";
import { IBlog } from "@/types";
import { BlogFormModal } from "./BlogFormModal";

const ActionsButton = ({ id, blog }: { id: number; blog: IBlog }) => {
  // { blog }: { blog: BlogFormValues & { id: number } }
  const blogId = String(id);

  const handleDelete = async (blogId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
      {
        method: "DELETE",
      }
    );
    const result = await res.json();

    if (result?.deletedBlog?.id) {
      toast.success("Blog Deleted Successfully");
    }
  };

  const [open, setOpen] = useState(false);

  const handleSave = async (data: BlogFormValues) => {
    console.log("Blog Submitted:", data);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blogs/${blogId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();
    console.log(result);
    // if (result?.updatedBlog?.id) {
    //   toast.success("Blog Updated Successfully");
    // }
  };

  return (
    <>
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        Edit
      </Button>
      {/* <BlogFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSave}
      /> */}
      <BlogFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSave}
        defaultValues={{
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt,
          content: blog.content,
          published: blog.published,
          coverUrl: blog.coverUrl,
        }}
      />

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="sm" variant="destructive">
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              blogs and remove your data from the servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(blogId)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ActionsButton;

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

import { ProjectFormValues } from "@/lib/validations/project";
import { IProject } from "@/types";
import { ProjectFormModal } from "./ProjectFormModal";

const ProjectActionsButton = ({
  id,
  project,
}: {
  id: number;
  project: IProject;
}) => {
  const projectId = String(id);

  const handleDelete = async (projectId: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const result = await res.json();

    if (result?.deletedProject?.id) {
      toast.success("Project Deleted Successfully");
    }
  };

  const [open, setOpen] = useState(false);

  const handleSave = async (data: ProjectFormValues) => {
    console.log("Project Submitted:", data);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      }
    );

    const result = await res.json();
    console.log(result);
    if (result?.updatedProject?.id) {
      toast.success("Project Updated Successfully");
    }
  };

  return (
    <>
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        Edit
      </Button>

      <ProjectFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSave}
        defaultValues={{
          title: project.title,
          slug: project.slug,
          description: project.description,
          features: project.features,
          thumbnail: project.thumbnail,
          liveUrl: project.liveUrl,
          repoUrl: project.repoUrl,
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
              project and remove your data from the servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete(projectId)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProjectActionsButton;

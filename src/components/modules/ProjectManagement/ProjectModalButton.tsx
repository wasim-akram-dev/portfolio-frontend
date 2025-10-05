"use client";
import { Button } from "@/components/ui/button";
import { ProjectFormValues } from "@/lib/validations/project";
import { useState } from "react";
import toast from "react-hot-toast";
import { ProjectFormModal } from "./ProjectFormModal";

const ProjectModalButton = () => {
  const [open, setOpen] = useState(false);

  const handleSave = async (data: ProjectFormValues) => {
    console.log("Project Submitted:", data);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    const result = await res.json();
    console.log(result);
    if (result?.project?.id) {
      toast.success("Project Created Successfully");
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>+ New Project</Button>
      <ProjectFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSave}
      />
    </>
  );
};

export default ProjectModalButton;

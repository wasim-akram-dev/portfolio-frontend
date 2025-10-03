"use client";
import { Button } from "@/components/ui/button";
import { BlogFormValues } from "@/lib/validations/blog";
import { useState } from "react";
import toast from "react-hot-toast";
import { BlogFormModal } from "./BlogFormModal";

const ModalButton = () => {
  const [open, setOpen] = useState(false);

  const handleSave = async (data: BlogFormValues) => {
    // console.log("Blog Submitted:", data);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);
    if (result?.blog?.id) {
      toast.success("Blog Created Successfully");
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>+ New Blog</Button>
      <BlogFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSave}
      />
    </>
  );
};

export default ModalButton;

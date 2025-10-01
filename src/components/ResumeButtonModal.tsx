"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResumeButtonModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="hidden md:block">
      <Button
        onClick={() => setIsModalOpen(true)}
        className="text-md bg-amber-600 h-12 text-xl w-fit hover:bg-amber-700 flex items-center group cursor-pointer"
      >
        <Download className="transition-transform duration-300 group-hover:scale-125" />
        Resume
      </Button>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className=" xl:min-w-5xl: lg:min-w-4xl bg-white/50 opacity-100">
          <DialogHeader>
            <DialogTitle>Resume Preview</DialogTitle>
          </DialogHeader>
          <div>
            <iframe
              className="h-[600px]"
              src="https://drive.google.com/file/d/1HQgLsMl6ZfkG2bp7dqF5qX6lzG4M3LPN/preview"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <DialogFooter>
            <Link
              href="https://drive.google.com/file/d/1HQgLsMl6ZfkG2bp7dqF5qX6lzG4M3LPN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

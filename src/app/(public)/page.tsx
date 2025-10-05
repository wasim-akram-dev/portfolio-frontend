import profileImage from "@/assets/profile_square.png";
import ResumeButtonModal from "@/components/ResumeButtonModal";
import TextAnimate from "@/components/TextAnimate";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wasim Akram - MERN Stack Developer",
  description: "Welcome to the portfolio of Wasim Akram.",
  keywords: [
    "Wasim Akram",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Web Developer",
  ],
};

export default function Home() {
  return (
    <div className="container gap-5 pt-20 flex flex-col-reverse md:flex-row md:h-screen pb-5 m items-center md:justify-between">
      <div className="md:w-1/2 flex flex-col lg:gap-7 gap-4 md:gap-5">
        <h2 className="lg:text-5xl text-xl font-medium text-slate-600 dark:text-slate-400">
          Hi, I am
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl  font-bold text-slate-900 dark:text-white">
          Wasim Akram
        </h1>
        <div className="">
          <div className="text-2xl font-medium text-amber-600 dark:text-amber-400">
            <TextAnimate />
          </div>
        </div>

        <div className="flex gap-4 pt-4 ">
          <ResumeButtonModal />
          <Link
            href={
              "https://drive.google.com/file/d/1HQgLsMl6ZfkG2bp7dqF5qX6lzG4M3LPN/view?usp=drive_link"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden"
          >
            <Button className="text-md bg-amber-600 h-12 text-xl w-fit hover:bg-amber-700 flex items-center group cursor-pointer">
              <Download className="transition-transform duration-300 group-hover:scale-125" />
              Resume
            </Button>
          </Link>
          <div className="text-md group h-12 text-xl border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950 border flex items-center justify-center rounded-md cursor-pointer px-3">
            <Link href="/contact" className="flex gap-1 items-center">
              Contact Me{" "}
              <ArrowRight className="group-hover:ml-2 transition-all duration-300 h-6 w-6 text-xl" />
            </Link>
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <Link
            className="text-md group h-12 w-12 rounded-full border flex items-center justify-center border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950"
            href="https://github.com/wasim-akram-dev"
            target="_blank"
          >
            <Github className="h-7 w-7 " />
          </Link>
          <Link
            className="text-md group h-12 w-12 rounded-full border flex items-center justify-center border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950"
            href="https://www.linkedin.com/in/wasim-akram-mern"
            target="_blank"
          >
            <Linkedin className="h-7 w-7 " />
          </Link>
          <Link
            className="text-md group h-12 w-12 rounded-full border flex items-center justify-center border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950"
            href="mailto:wasimakram.codes@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="h-7 w-7" />
          </Link>
        </div>
      </div>
      <div className="md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 transition-colors duration-500 bg-green-50 dark:bg-blue-100 md:w-80 md:h-80 lg:h-96 lg:w-96 xl:h-[500px] xl:w-[500px] rounded-full overflow-hidden border-4 border-amber-600 dark:border-amber-500">
          <Image
            src={profileImage}
            alt="Wasim Akram - Profile Picture"
            fill
            className="object-cover z-10"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

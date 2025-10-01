import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Me - Wasim Akram",
  description:
    "Learn more about Wasim Akram, a passionate MERN Stack Developer.",
};

const AboutSectionInspired: React.FC = () => {
  return (
    <div className="py-20 md:py-28 ">
      <AboutMeSection />
      <SkillsSection />
    </div>
  );
};

export default AboutSectionInspired;

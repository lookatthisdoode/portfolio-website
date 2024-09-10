import { palanquin, robotoMono } from "@/app/ui/fonts";
import ProjectsSlider from "@/components/projects-slider";
import React from "react";

export default function ProjectsPage() {
  return (
    <div
    id="projects"
      className={`pt-24 md:pt-0 flex flex-col h-[100vh] bg-backgroundLight items-center justify-center snap-center overflow-clip`}
    >
      <div
        className={`md:h-[60vh] pt-10 md:pt-0 w-full px-3 md:px-0 md:w-3/5 z-20 text-text `}
      >
        <h1
          className={`md:text-7xl text-backgroundDark text-3xl py-2 ${palanquin.className}`}
        >
          Projects
        </h1>
        <h2
          className={`${robotoMono.className} text-sm text-gray-600 md:pl-3 md:text-2xl`}
        >
          I would like to display
        </h2>
        <ProjectsSlider />
      </div>
    </div>
  );
}

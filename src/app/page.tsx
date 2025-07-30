"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projectData.json";
import oldProjectData from "@/data/oldProjectData.json";
import { Project } from "@/types/project";

const Page = () => {
  const [useOldProjects, setUseOldProjects] = useState(false);

  const projects: Project[] = Object.values(
    useOldProjects ? oldProjectData : projectData
  );

  return (
    <div className="flex flex-col gap-4 h-full ">
      <div className="flex justify-end px-6 z-50 absolute -bottom-3 right-0">
        <button
          onClick={() => setUseOldProjects(!useOldProjects)}
          className="px-2 py-1 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-all text-sm"
        >
          {useOldProjects ? "Proyectos nuevos" : "Proyectos antiguos"}
        </button>
      </div>

      <div className="grid md:grid-cols-[repeat(2,1fr)] auto-rows-[214px] gap-6 justify-items-stretch md:px-6 text-black animate-fadeIn flex-grow">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Page;

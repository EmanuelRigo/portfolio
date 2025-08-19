"use client";

import { useTranslation } from "react-i18next";
import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projectData_en.json";
import oldProjectData from "@/data/oldProjectData_en.json";
import { Project } from "@/types/project";

const Page = () => {
  const { t, i18n } = useTranslation();

  const projects: Project[] = Object.values(projectData);
  const oldProjects: Project[] = Object.values(oldProjectData);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="flex flex-col gap-8 h-full lg:px-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("recentProjects")}
        </h2>
        <div className="grid md:grid-cols-[repeat(2,1fr)] auto-rows-[214px] gap-6 justify-items-stretch text-black animate-fadeIn">
          {projects.map((project, index) => (
            <ProjectCard key={`new-${index}`} {...project} />
          ))}
        </div>
      </div>

      <hr className="border-gray-600" />

      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("oldProjects")}
        </h2>
        <div className="grid md:grid-cols-[repeat(2,1fr)] auto-rows-[214px] gap-6 justify-items-stretch text-black animate-fadeIn">
          {oldProjects.map((project, index) => (
            <ProjectCard key={`old-${index}`} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

import ProjectCard from "@/components/ProjectCard";
import projectDataEn from "@/data/projectData_en.json";
import oldProjectDataEn from "@/data/oldProjectData_en.json";
import projectDataEs from "@/data/projectData.json";
import oldProjectDataEs from "@/data/oldProjectData.json";
import { Project } from "@/types/project";

import { getTranslations, getLocale } from "next-intl/server";

export const metadata = {
  title: "Emanuel R. | Proyectos",
  description: "Página de para que puedas ver mis proyectos.",
};

const Page = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Projects");

  const projects: Project[] =
    locale === "en"
      ? Object.values(projectDataEn)
      : Object.values(projectDataEs);

  const oldProjects: Project[] =
    locale === "en"
      ? Object.values(oldProjectDataEn)
      : Object.values(oldProjectDataEs);

  return (
    <div className="flex flex-col gap-8 h-full lg:px-6">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">
          {t("Recent Projects")}
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
          {t("Old Projects")}
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

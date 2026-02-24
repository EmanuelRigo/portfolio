"use client";

import { useTranslations } from "next-intl"; // Importamos el hook
import { JSX } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJs,
  FaLinux,
  FaLanguage,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiDbeaver,
  SiPostman,
  SiDocker,
} from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ],
  tools: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Responsive", icon: <TbWorldWww className="text-blue-300" /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "DBeaver", icon: <SiDbeaver /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
    { name: "English B1", icon: <FaLanguage className="text-green-400" /> },
  ],
};

const SkillColumn = ({
  title,
  items,
}: {
  title: string;
  items: Array<{ name: string; icon: JSX.Element }>;
}) => (
  <div className="p-4 h-full flex flex-col">
    <h2 className="text-xl font-semibold mb-3 border-b border-neutral-600 pb-1">
      {title}
    </h2>
    <ul className="grid gap-3 text-sm">
      {items.map(({ name, icon }) => (
        <li key={name} className="flex items-center gap-3 text-neutral-300">
          <span className="text-lg">{icon}</span>
          {name}
        </li>
      ))}
    </ul>
  </div>
);

export default function ResumePage() {
  // Usamos el namespace "Resume" de tus archivos JSON
  const t = useTranslations("Resume");

  return (
    <section className="overflow-hidden h-full  text-neutral-100 px-4 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 h-full">
        {/* SECCIÓN EXPERIENCIA */}
        <aside className="relative bg-neutral-800/50 rounded-md p-4 h-full">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-l-md"></div>
          <div className="pl-2">
            <h2 className="text-xl font-semibold mb-3 border-b border-neutral-600 pb-1">
              {t("title")}
            </h2>
            <h3 className="text-lg font-semibold mb-2 text-neutral-100">
              {t("jobTitle")}
            </h3>
            <div className="text-sm text-neutral-200 leading-relaxed space-y-3">
              <p>{t("bullet1")}</p>
              <p>{t("bullet2")}</p>
              <p>{t("bullet3")}</p>
            </div>
          </div>
        </aside>

        {/* CONTENEDOR DE SKILLS */}
        <main className="bg-neutral-800/50 rounded-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Columna Tools */}
            <div className="relative">
              <SkillColumn title="Tools" items={skills.tools} />
              <div className="hidden md:block absolute right-0 top-1/8 bottom-1/8 w-[1px] bg-neutral-600"></div>
            </div>

            {/* Columna Backend */}
            <div className="relative">
              <SkillColumn title="Backend" items={skills.backend} />
              <div className="hidden md:block absolute right-0 top-1/8 bottom-1/8 w-[1px] bg-neutral-600"></div>
            </div>

            {/* Columna Frontend */}
            <div className="relative">
              <SkillColumn title="Frontend" items={skills.frontend} />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

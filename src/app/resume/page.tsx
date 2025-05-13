"use client";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaDatabase,
  FaJs,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiTypescript,
  SiDbeaver,
} from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const skills = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ],
  others: [
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Database", icon: <FaDatabase className="text-amber-400" /> },
    {
      name: "Responsive Design",
      icon: <TbWorldWww className="text-blue-300" />,
    },
    { name: "Linux", icon: <FaLinux className="text-black" /> },
    { name: "DBeaver", icon: <SiDbeaver className="text-orange-900" /> },
  ],
};

const ResumePage = () => {
  return (
    <section className="px-6 text-neutral-100 h-full bg-neutral-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-neutral-800 rounded-xl p-6 h-full">
            <h2 className="text-xl font-semibold mb-4 capitalize border-b border-neutral-600 pb-2">
              {category}
            </h2>
            <ul className="space-y-3">
              {items.map(({ name, icon }) => (
                <li key={name} className="flex items-center gap-3">
                  <span>{icon}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResumePage;

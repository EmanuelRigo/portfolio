"use client";

import { useAppContext } from "@/app/[locale]/context/AppContext";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { DiGit, DiMysql, DiPostgresql } from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";

const iconLinks = [
  {
    icon: <FaReact className="text-3xl" />,
    label: "ReactJS",
    color: "text-cyan-400",
    colorHover: "hover:text-cyan-400",
  },
  {
    icon: <FaHtml5 className="text-3xl" />,
    label: "HTML",
    color: "text-orange-500",
    colorHover: "hover:text-orange-500",
  },
  {
    icon: <FaCss3Alt className="text-3xl" />,
    label: "CSS",
    color: "text-blue-500",
    colorHover: "hover:text-blue-500",
  },
  {
    icon: <FaJs className="text-3xl" />,
    label: "JavaScript",
    color: "text-yellow-400",
    colorHover: "hover:text-yellow-400",
  },
  {
    icon: <SiTypescript className="text-3xl" />,
    label: "TypeScript",
    color: "text-blue-600",
    colorHover: "hover:text-blue-600",
  },
  {
    icon: <FaNodeJs className="text-3xl" />,
    label: "NodeJS",
    color: "text-green-500",
    colorHover: "hover:text-green-500",
  },
  {
    icon: <DiGit className="text-3xl" />,
    label: "Git",
    color: "text-orange-600",
    colorHover: "hover:text-orange-600",
  },
  {
    icon: <FaGithub className="text-3xl" />,
    label: "GitHub",
    color: "text-gray-200",
    colorHover: "hover:text-gray-200",
  },
  {
    icon: <DiMysql className="text-3xl" />,
    label: "MySQL",
    color: "text-blue-600",
    colorHover: "hover:text-blue-600",
  },
  {
    icon: <DiPostgresql className="text-3xl" />,
    label: "PostgreSQL",
    color: "text-blue-400",
    colorHover: "hover:text-blue-400",
  },
  {
    icon: <SiTailwindcss className="text-3xl" />,
    label: "Tailwind",
    color: "text-cyan-300",
    colorHover: "hover:text-cyan-300",
  },
  {
    icon: <FaBootstrap className="text-3xl" />,
    label: "Bootstrap",
    color: "text-purple-500",
    colorHover: "hover:text-purple-500",
  },
  {
    icon: <SiNextdotjs className="text-3xl" />,
    label: "NextJS",
    color: "text-white",
    colorHover: "hover:text-white",
  },
  {
    icon: <SiMongodb className="text-3xl" />,
    label: "MongoDB",
    color: "text-green-400",
    colorHover: "hover:text-green-400",
  },
];

const Sidebar = () => {
  const { setHoveredIcon, hoveredIcons } = useAppContext();

  return (
    <div className="w-10 md:w-20 h-full bg-neutral-800/50 text-neutral-700 flex flex-col items-center rounded-md overflow-hidden py-4">
      <div className="relative w-full h-full overflow-hidden mask-y-from-70%">
        <div className="scrolling-icons absolute top-0 left-0 w-full flex flex-col">
          {[...iconLinks, ...iconLinks].map((item, idx) => (
            <button
              key={idx}
              aria-label={item.label}
              className={`${item.colorHover} ${
                hoveredIcons.includes(item.label)
                  ? item.color
                  : "text-neutral-700"
              } py-1 md:py-3 px-3 md:px-4 transition-colors duration-700 flex justify-center`}
              onMouseEnter={() => setHoveredIcon(item.label)}
              type="button"
            >
              {item.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// components/Sidebar.tsx
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
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-20 h-full bg-neutral-800 text-neutral-700 flex flex-col items-center py-4 rounded-lg">
      {/* Iconos */}
      <nav className="flex flex-col items-center space-y-6">
        <Link
          href="#"
          aria-label="ReactJS"
          className="hover:text-cyan-400 transition-colors duration-200"
        >
          <FaReact className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="HTML"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          <FaHtml5 className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="CSS"
          className="hover:text-blue-500 transition-colors duration-200"
        >
          <FaCss3Alt className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="JavaScript"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaJs className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="TypeScript"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          <SiTypescript className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="NodeJS"
          className="hover:text-green-500 transition-colors duration-200"
        >
          <FaNodeJs className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="Git"
          className="hover:text-orange-600 transition-colors duration-200"
        >
          <DiGit className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="GitHub"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          <FaGithub className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="MySQL"
          className="hover:text-blue-600 transition-colors duration-200"
        >
          <DiMysql className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="PostgreSQL"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <DiPostgresql className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="TailwindCSS"
          className="hover:text-cyan-300 transition-colors duration-200"
        >
          <SiTailwindcss className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="Bootstrap"
          className="hover:text-purple-500 transition-colors duration-200"
        >
          <FaBootstrap className="text-5xl" />
        </Link>
        <Link
          href="#"
          aria-label="NextJS"
          className="hover:text-white transition-colors duration-200"
        >
          <SiNextdotjs className="text-5xl" />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;

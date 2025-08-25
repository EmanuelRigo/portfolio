"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInfoCircle,
  FaServer,
} from "react-icons/fa";
import { useAppContext } from "@/app/[locale]/context/AppContext";
import InfoModal from "./InfoModal";
import { Project } from "@/types/project"; // Importa la interfaz Project

const ProjectCard: React.FC<Project> = (project) => {
  const techStackRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { setHoveredIcons } = useAppContext();

  const handleMouseEnter = () => {
    if (project.techStack) {
      setHoveredIcons(project.techStack);
    }

    if (techStackRef.current) {
      techStackRef.current.scrollTo({
        top: techStackRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIcons([]);

    if (techStackRef.current) {
      techStackRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        className="bg-neutral-800 text-white rounded-md overflow-hidden shadow-md transition-all duration-30 ease-in-out border-2 border-neutral-800 hover:border-yellow-400 active:border-yellow-400 flex  max-w-xl w-full h-auto md:h-full  p-3 gap-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {project.image && (
          <div className="relative w-32  md:w-48  flex-shrink-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover rounded-xs"
              sizes="300px"
            />
          </div>
        )}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex flex-col overflow-hidden flex-1">
            <h3 className="text-lg font-semibold mb-1 flex-shrink-0">
              {project.title}
            </h3>
            <p className="text-sm text-neutral-300 mb-2 flex-shrink-0 hidden md:block">
              {project.description}
            </p>

            {project.techStack && (
              <div
                ref={techStackRef}
                className="flex flex-wrap gap-2 overflow-y-auto max-h-[64px] pr-1  scroll-smooth scrollbar-hide"
              >
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-neutral-700 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-2 flex-shrink-0 text-sm bg-neutral-900 p-2 rounded-md">
            {project.liveLinks?.[0]?.url && (
              <a
                href={project.liveLinks[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 flex items-center space-x-1"
              >
                <FaExternalLinkAlt />
                <span>Live</span>
              </a>
            )}
            {project.liveLinks?.[1]?.url && (
              <a
                href={project.liveLinks[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 flex items-center space-x-1"
              >
                <FaServer />
                <span className="hidden md:block">System</span>
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center space-x-1"
              >
                <FaGithub />
                <span className="text-sm hidden md:block">Code</span>
              </a>
            )}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hover:text-yellow-400 flex items-center space-x-1"
            >
              <FaInfoCircle />
              <span className="text-sm hidden md:block">Info</span>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InfoModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default ProjectCard;

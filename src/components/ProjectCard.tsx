"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useAppContext } from "@/app/context/AppContext";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack?: string[];
  liveLink?: string;
  repoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  repoLink,
}) => {
  const techStackRef = useRef<HTMLDivElement>(null);

  const { setHoveredIcons, hoveredIcons } = useAppContext();

  const handleMouseEnter = () => {
    if (techStack) {
      setHoveredIcons(techStack);

      console.log("🚀 ~ handleMouseEnter ~ techStack:", techStack);
      console.log("hovered icnos", hoveredIcons);
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
    <div
      className="bg-neutral-800 text-white rounded-lg overflow-hidden shadow-md transition-all duration-30 ease-in-out border-2 border-neutral-800 hover:border-yellow-400 active:border-yellow-400 flex max-w-xl w-full h-48 p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {image && (
        <div className="relative w-48 h-full flex-shrink-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-md"
            sizes="192px"
          />
        </div>
      )}
      <div className="ps-4 py-1 flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col overflow-hidden flex-1">
          <h3 className="text-lg font-semibold mb-1 flex-shrink-0">{title}</h3>
          <p className="text-sm text-neutral-300 mb-2  flex-shrink-0">
            {description}
          </p>

          {techStack && (
            <div
              ref={techStackRef}
              className="flex flex-wrap gap-2 overflow-y-auto max-h-[64px] pr-1  scroll-smooth scrollbar-hide"
            >
              {techStack.map((tech, index) => (
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

        <div className="flex items-center space-x-4 mt-2 flex-shrink-0">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 flex items-center space-x-1"
            >
              <FaExternalLinkAlt />
              <span className="text-sm">Live</span>
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 flex items-center space-x-1"
            >
              <FaGithub />
              <span className="text-sm">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

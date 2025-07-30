"use client";

import React from "react";
import {
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { DiGit, DiMysql, DiPostgresql } from "react-icons/di";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import Image from "next/image";
import { Project } from "@/types/project";

// Mapeo de tecnologías a íconos + color (basado en Sidebar)
const techIcons: Record<string, React.ReactNode> = {
  ReactJS: <FaReact className="text-cyan-400 text-3xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-3xl" />,
  CSS: <FaCss3Alt className="text-blue-500 text-3xl" />,
  JavaScript: <FaJs className="text-yellow-400 text-3xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-3xl" />,
  NodeJS: <FaNodeJs className="text-green-500 text-3xl" />,
  Git: <DiGit className="text-orange-600 text-3xl" />,
  GitHub: <FaGithub className="text-gray-200 text-3xl" />,
  MySQL: <DiMysql className="text-blue-600 text-3xl" />,
  PostgreSQL: <DiPostgresql className="text-blue-400 text-3xl" />,
  Tailwind: <SiTailwindcss className="text-cyan-300 text-3xl" />,
  Bootstrap: <FaBootstrap className="text-purple-500 text-3xl" />,
  NextJS: <SiNextdotjs className="text-white text-3xl" />,
  MongoDB: <SiMongodb className="text-green-400 text-3xl" />,
};

interface InfoModalProps {
  project: Project;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 transition-opacity duration-300 opacity-0 animate-fade-in z-50 flex justify-center items-center p-4">
      {" "}
      <div className="bg-neutral-800 text-white rounded-lg shadow-lg p-6 lg:max-w-[1200px] w-full relative animate-fade-in lg:h-[600px] overflow-y-auto flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <FaTimes size={20} />
        </button>

        <div
          className="flex flex-col md:flex-row gap-6
         grow-1"
        >
          {/* Imagen */}
          {project.image && (
            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          {/* Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-1 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-neutral-300 whitespace-pre-wrap ">
                  {project.modal}
                </p>
              </div>
              <div>
                {project.features && project.features.length > 0 && (
                  <div className="w-full bg-neutral-900 p-4 rounded-md">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                      Características destacadas:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {project.features.map((feature, index) => {
                        const [title, ...rest] = feature.split(":");
                        const description = rest.join(":").trim();

                        return (
                          <li key={index} className="text-xs text-neutral-300">
                            <strong className="text-white">{title}:</strong>{" "}
                            {description}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <div className="bg-neutral-900 p-4 rounded-md text-xs mt-4">
                {project.testUsers}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-4">
              {project.liveLinks && project.liveLinks.length > 0 && (
                <a
                  href={project.liveLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 flex items-center space-x-1"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
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
                  <span className="text-sm">Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="w-full mt-6 flex flex-wrap gap-6 bg-neutral-900 p-4 pb-3 rounded-md">
            {project.techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center text-xs"
              >
                {techIcons[tech] || (
                  <div className="w-10 h-10 bg-neutral-600 rounded-full mb-1" />
                )}
                <span className="text-neutral-300 mt-2">{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoModal;


"use client";
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

 const SkillColumn = ({ title, items }) => (
   <div className="bg-neutral-800 rounded-md p-4 h-full flex flex-col ">
     <h3 className="text-lg font-semibold mb-3 border-b border-neutral-600 pb-1">
       {title}
     </h3>
     <ul className="grid gap-3 text-sm ">
       {items.map(({ name, icon }) => (
         <li key={name} className="flex items-center gap-3">
           <span className="text-lg">{icon}</span>
           {name}
         </li>
       ))}
     </ul>
   </div>
 );



export default function ResumePage() {
  return (
    <section className=" overflow-hidden h-full bg-neutral-900 text-neutral-100">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4 h-full p-4">

        {/* RESUMEN */}
        <aside className="bg-neutral-800 rounded-md p-4 h-full border-l-4 border-yellow-400">
          <h2 className="text-xl font-semibold mb-3 border-b border-neutral-600 pb-1">
            Resumen
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Desarrollador Frontend con experiencia en React, Next.js y TypeScript,
            enfocado en interfaces modernas, accesibles y escalables.
          </p>
        </aside>

        {/* SKILLS */}
        {/* <main className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full bg-neutral-800 rounded-md  ">
          <SkillColumn  title="Tools" items={skills.tools} />
          <SkillColumn  title="Backend" items={skills.backend} />
          <SkillColumn  title="Frontend" items={skills.frontend} />
        </main> */}
         <main className="bg-neutral-800 rounded-md p-1">
  <div
    className="
      grid grid-cols-1 md:grid-cols-3
      md:divide-x md:divide-neutral-700
      bg-neutral-800
       h-full
    "
  >
    <SkillColumn title="Tools" items={skills.tools} />
    <SkillColumn title="Backend" items={skills.backend} />
    <SkillColumn title="Frontend" items={skills.frontend} />
  </div>
</main>
        {/* SKILLS */}



      </div>
    </section>
  );
}

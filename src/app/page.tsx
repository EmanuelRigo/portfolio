import ProjectCard from "@/components/ProjectCard";
import projectData from "@/data/projectData.json";
import { Project } from "@/types/project"; // si usás archivo aparte

export const metadata = {
  title: "Emanuel R.",
  description: "Página de contacto para que puedas comunicarte conmigo.",
  keywords: [
    "Emanuel Rigo",
    "portafolio",
    "desarrollador web",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "MongoDB",
    "Node.js",
  ],
  openGraph: {
    title: "Emanuel R. | Desarrollador Web",
    description:
      "Portafolio personal de Emanuel Rigo, desarrollador web fullstack.",
    url: "https://portfolio-dusky-rho-64.vercel.app/m",
    siteName: "Emanuel R. Portfolio",
    images: [
      {
        url: "https://portfolio-dusky-rho-64.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Emanuel R.",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

const Page = () => {
  const projects: Project[] = Object.values(projectData);

  return (
    <div className="grid md:grid-cols-[repeat(2,1fr)] grid-rows-[repeat(3,1fr)] gap-6 justify-items-stretch md:px-6 text-black animate-fadeIn">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Page;

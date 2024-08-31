import { Row, Col } from "react-bootstrap";
import { AiFillHtml5 /*  AiFillGithub  */ } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbApi } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import { FaBootstrap } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  return (
    <Col id="projects" xs={12} className="bgd-transparent px-4">
      <Row className="custom-border p-0 py-4  ">
        <Col lg={6} className="px-md-3 order-md-2 p-0">
          <h3 className="text-dark display-6">Mini Projects & Practices</h3>
          <ProjectCard
            image={"cafe 00.png"}
            name={"Cafe"}
            description={"Website for an oriental cafeteria in Buenos Aires."}
            linkGithub={"https://github.com/EmanuelRigo/cafe"}
            linkHosting={"https://cafe-one-beige.vercel.app/"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
            ]}
          ></ProjectCard>
          <ProjectCard
            image={"travel_simulator.png"}
            name={"Travel Simulator"}
            description={
              "A web platform simulating flights, integrating real-time weather data via JavaScript and a weather API."
            }
            linkGithub={"https://github.com/EmanuelRigo/Preentrega-Coderhouse"}
            linkHosting={"https://preentrega-coderhouse.vercel.app/"}
            icons={[
              <BiLogoJavascript className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <FaBootstrap className="project__icon" />,
              <TbApi className="project__icon"></TbApi>,
            ]}
          ></ProjectCard>
          <ProjectCard
            image={"NextCRUD.png"}
            name={"NextJS TS CRUD ToDoList"}
            description={
              "Build a ToDo List app in Next.js: create, read, update, and delete tasks with a user-friendly interface."
            }
            linkGithub={
              "https://github.com/EmanuelRigo/ToDoList-NextJS-prisma-TS"
            }
            linkHosting={"https://to-do-list-next-js-prisma-ts.vercel.app/"}
            icons={[
              <BiLogoJavascript className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoReact className="project__icon" />,
              <SiNextdotjs className="project__icon" />,
              <BiLogoTypescript className="project__icon" />,
              <BiLogoTailwindCss className="project__icon" />,
            ]}
          ></ProjectCard>{" "}
          <ProjectCard
            image={"teslo-shop 00.png"}
            name={"Teslo shop"}
            description={
              "E-commerce nextjs. replica of the tesla store. Practice with Fernando Herrera"
            }
            linkGithub={
              "https://github.com/EmanuelRigo/Practica-NextJS-teslo-shop.git"
            }
            linkHosting={"https://practica-next-js-teslo-shop.vercel.app/"}
            icons={[
              <BiLogoJavascript className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoReact className="project__icon" />,
              <SiNextdotjs className="project__icon" />,
              <BiLogoTypescript className="project__icon" />,
              <BiLogoTailwindCss className="project__icon" />,
            ]}
          ></ProjectCard>
        </Col>
        <Col lg={6} className="px-md-3 order-md-1 p-0">
          <h3 className="text-dark display-6">Projects</h3>
          <ProjectCard
            image={"../images/e-techstore 00.png .png"}
            name={"E-TechStore"}
            description={
              "E-commerce React: Technology and gaming merged to offer a dynamic shopping experience"
            }
            linkGithub="https://github.com/EmanuelRigo/e-techstore"
            linkHosting={"https://e-techstore.vercel.app/"}
            icons={[
              <BiLogoReact className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
              <FaBootstrap className="project__icon" />,
            ]}
          />
          <ProjectCard
            image="../images/lab 04.png"
            name="Lab"
            description="Website and system for a clinical laboratory
            user: maira.lab / password: 8787"
            linkGithub="https://github.com/EmanuelRigo/lab"
            linkHosting={"https://lab-paroti.netlify.app/"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <FaBootstrap className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
            ]}
          />
          <ProjectCard
            image={"../images/masterquiz 00.png"}
            name={"MasterQuiz"}
            description={"Trivia application with various categories."}
            linkGithub="https://github.com/EmanuelRigo/masterquiz"
            linkHosting={"https://masterquiz.vercel.app/"}
            icons={[
              <BiLogoReact className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
              <FaBootstrap className="project__icon" />,
            ]}
          />
          <ProjectCard
            image={"../images/videoteca 03.png"}
            name={"Videoteca"}
            description={
              "The first application I made. Website with movies info. user: maira@hotmail.com / password: 8787"
            }
            linkGithub="https://github.com/EmanuelRigo/videoteca"
            linkHosting={"https://videoteca-dun.vercel.app/"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
            ]}
          />
          <ProjectCard
            image={"../images/SQL coder.png"}
            name={"First personal SQL project"}
            description={
              "SQL project for managing a lab, with functions and procedures for tests and results."
            }
            linkGithub="https://github.com/EmanuelRigo/entrega-final-sql-coderhouse"
            linkHosting={
              "https://github.com/EmanuelRigo/entrega-final-sql-coderhouse"
            }
            icons={[<GrMysql className="project__icon" />]}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default ProjectContainer;

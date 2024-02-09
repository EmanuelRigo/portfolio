import { Row, Col } from "react-bootstrap";
import { AiFillHtml5 /*  AiFillGithub  */ } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbApi } from "react-icons/tb";

import { FaBootstrap } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

function ProjectContainer() {
  return (
    <Col id="projects" xs={12} className="bgd-transparent px-4">
      <Row className="custom-border p-0 py-4  ">
        <Col lg={6} className="px-md-3 order-md-2 p-0">
          <h3 className="text-dark display-6">Mini Projects</h3>
          <ProjectCard
            image={"cafe 00.png"}
            name={"Cafe"}
            description={"Website for an oriental cafeteria in Buenos Aires."}
            linkGithub={"https://github.com/EmanuelRigo/cafe"}
            linkHosting={"https://www.youtube.com"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <FaBootstrap className="project__icon" />,
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
            description="Website and system for a clinical laboratory"
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
            image={"../images/videoteca 03.png"}
            name={"Videoteca"}
            description={"Website with movies info"}
            linkGithub="https://github.com/EmanuelRigo/videoteca"
            linkHosting={"https://e-techstore.vercel.app/"}
            icons={[
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <TbApi className="project__icon" />,
            ]}
          />
          <ProjectCard
            image={"../images/playask 00.png"}
            name={"PlayAsk"}
            description={"Trivia application with various categories."}
            linkGithub="https://github.com/EmanuelRigo/playask"
            linkHosting={"https://e-techstore.vercel.app/"}
            icons={[
              <BiLogoReact className="project__icon" />,
              <AiFillHtml5 className="project__icon" />,
              <BiLogoCss3 className="project__icon" />,
              <BiLogoJavascript className="project__icon" />,
              <BiLogoFirebase className="project__icon" />,
              <BiLogoTailwindCss className="project__icon" />,
            ]}
          />
        </Col>
      </Row>
    </Col>
  );
}

export default ProjectContainer;

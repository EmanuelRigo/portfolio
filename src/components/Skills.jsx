import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoFirebase,
} from "react-icons/bi";

import { FaBootstrap, FaSass } from "react-icons/fa";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Skills() {
  const [nombreLenguaje, setNombreLenguaje] = useState();

  const handleChangeName = (e) => {
    const nombre = e.currentTarget.getAttribute("data-nombre");
    setNombreLenguaje(nombre);
  };

  return (
    <div className="skills my-5">
      <h2 className="display-6 text-dark">Trabajo con {nombreLenguaje} </h2>

      <Row className="justify-content-center mb-5">
        <Col xs={"auto"} className="d-flex p-0">
          <AiFillHtml5
            data-nombre="Html"
            onMouseEnter={handleChangeName}
            className="icono html"
          />

          <BiLogoCss3
            data-nombre="Css"
            onMouseEnter={handleChangeName}
            className="icono css"
          />
          <BiLogoJavascript
            data-nombre="JavaScript"
            onMouseEnter={handleChangeName}
            className="icono js"
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoReact
            className="icono react"
            data-nombre="ReactJs"
            onMouseEnter={handleChangeName}
          />
          <BiLogoNodejs
            className="icono nodejs"
            data-nombre="NodeJs"
            onMouseEnter={handleChangeName}
          />
          <FaBootstrap
            className="icono bootstrap"
            data-nombre="Bootstrap"
            onMouseEnter={handleChangeName}
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoTailwindCss
            className="icono tailwind"
            data-nombre="Tailwind"
            onMouseEnter={handleChangeName}
          />
          <AiFillGithub
            className="icono github"
            data-nombre="Github"
            onMouseEnter={handleChangeName}
          />

          <BiLogoGit
            className="icono git"
            data-nombre="Git"
            onMouseEnter={handleChangeName}
          />
        </Col>
        <Col xs={"auto"} className="d-flex p-0">
          <BiLogoFirebase
            className="icono firebase"
            data-nombre="Firebase"
            onMouseEnter={handleChangeName}
          />

          <FaSass
            className="icono sass"
            data-nombre="Sass"
            onMouseEnter={handleChangeName}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Skills;

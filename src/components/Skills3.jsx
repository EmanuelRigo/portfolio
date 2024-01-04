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
import { Row, Col, Badge } from "react-bootstrap";

function Skills() {
  const [nombreLenguaje, setNombreLenguaje] = useState();

  const handleChangeName = (e) => {
    const nombre = e.currentTarget.getAttribute("data-nombre");
    setNombreLenguaje(nombre);
  };

  return (
    <Row className="">
      <Col lg={7} className="px-0">
        <h2 className="display-6 text-center text-md-start text-dark">
          Trabajo con
          <Badge pill bg="warning">
            <span className="text-dark">{nombreLenguaje}</span>{" "}
          </Badge>
        </h2>
        <Row className="justify-content-center justify-content-md-start mb-5">
          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>
              <AiFillHtml5
                data-nombre="Html"
                onMouseEnter={handleChangeName}
                className="icono html"
              />
            </div>
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoCss3
                data-nombre="Css"
                onMouseEnter={handleChangeName}
                className="icono css"
              />
            </div>

            <div className="contenedor">
              <div className="circulo"></div>
              <BiLogoJavascript
                data-nombre="JavaScript"
                onMouseEnter={handleChangeName}
                className="icono js"
              />
            </div>
          </Col>

          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoReact
                className="icono react"
                data-nombre="ReactJs"
                onMouseEnter={handleChangeName}
              />
            </div>
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoNodejs
                className="icono nodejs"
                data-nombre="NodeJs"
                onMouseEnter={handleChangeName}
              />
            </div>
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <FaBootstrap
                className="icono bootstrap"
                data-nombre="Bootstrap"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>
          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoTailwindCss
                className="icono tailwind"
                data-nombre="Tailwind"
                onMouseEnter={handleChangeName}
              />
            </div>
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <AiFillGithub
                className="icono github"
                data-nombre="Github"
                onMouseEnter={handleChangeName}
              />
            </div>

            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoGit
                className="icono git"
                data-nombre="Git"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>
          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <BiLogoFirebase
                className="icono firebase"
                data-nombre="Firebase"
                onMouseEnter={handleChangeName}
              />
            </div>

            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <FaSass
                className="icono sass"
                data-nombre="Sass"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg={5}>
        {" "}
        <Row>
          <Col xs={6}>
            <p className="display-6">1.5+ years</p>
          </Col>
          <Col xs={6}>
            <p className="display-6">07 Projects</p>
          </Col>
          <hr />
          <hr />
        </Row>
      </Col>
    </Row>
  );
}

export default Skills;

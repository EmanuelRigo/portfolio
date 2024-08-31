import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoGit,
  BiLogoFirebase,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiSqllite } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

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
      <Col lg={7} className="px-0 d-flex flex-column justify-content-end">
        <h3 className="display-6 text-center text-md-start text-dark">
          I work with
          <Badge pill bg="warning">
            <span className="text-dark">{nombreLenguaje}</span>{" "}
          </Badge>
        </h3>
        <Row className="justify-content-center justify-content-md-start mb-5 mb-md-2">
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
              <FaSass
                className="icono sass"
                data-nombre="Sass"
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
              <BiLogoTailwindCss
                className="icono tailwind"
                data-nombre="Tailwind"
                onMouseEnter={handleChangeName}
              />
            </div>{" "}
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <SiNextdotjs
                className="icono github"
                data-nombre="NextJs"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>{" "}
          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>{" "}
              <GrMysql
                className="icono firebase"
                data-nombre="MySQL"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>
        </Row>
      </Col>
      <Col
        lg={5}
        className="px-0 d-flex flex-column justify-content-end mb-5 mb-md-2"
      >
        <Row>
          {/*           <Col xs={6}>
            <p className="display-6">1.5+ years</p>
          </Col>
          <Col xs={6}>
            <p className="display-6">05 Projects</p>
          </Col>
          <hr />
          <hr /> */}
          <Col>
            <p className="display-6">
              currently studying back-end in coderhouse
            </p>
          </Col>
          <hr />
          <hr />
        </Row>

        <Row className="justify-content-center justify-content-md-start">
          <Col xs={"auto"} className="d-flex align-items-center p-0 mx-md-2">
            <h3 className="display-6 text-center text-md-start text-dark">
              Adding up
            </h3>
          </Col>
          <Col xs={"auto"} className="d-flex p-0">
            <div className="contenedor">
              <div className="circulo"></div>
              <BiLogoTypescript
                className="icono firebase"
                data-nombre="TypeScript"
                onMouseEnter={handleChangeName}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Skills;

import { Container, Row, Col, Image } from "react-bootstrap";
import Skills from "./Skills3";

function Header() {
  return (
    <header className="container-fluid p-4 px-md-5 d-flex flex-column justify-content-center">
      <Row className="mb-5 my-md-auto">
        <Col
          lg={7}
          className=" mb-5 mb-md-0 flex-column justify-content-center"
        >
          <p className="fs-4 lineas mb-5">front-end dev</p>
          <h2 className="header__title mb-5">
            Hi, I'm Emanuel Rigo, front-end dev
            <span className="text-warning">.</span>
          </h2>
          <p className="fs-4 mb-5">
            Hello, I'm a front-end dev striving for intuitive interfaces.
            Currently, enhancing backend skills.
          </p>
          <button className="header__btn">
            <Image fluid src="../svg/brush.png" alt="" />
            <p className="text-warning">let's talk!</p>
          </button>
        </Col>
        <Col
          lg={5}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            style={{ height: "16rem", width: "16rem" }}
            className="bg-warning"
          ></div>
        </Col>
      </Row>
      <Skills></Skills>
    </header>
  );
}

export default Header;

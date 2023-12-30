import { Container, Row, Col, Image } from "react-bootstrap";
import Skills from "./Skills2";

function Header() {
  return (
    <Container className="vh-100 p-4 d-flex flex-column justify-content-center">
      <Row className="mb-5">
        <Col lg={7} className="d-flex flex-column justify-content-center">
          <p className="fs-4 lineas mb-5">front-end dev</p>
          <h2 className="header__title mb-5">
            Hi, I'm Emanuel Rigo, front-end dev
            <span className="text-warning">.</span>
          </h2>
          <p className="fs-4 mb-3">
            Hello, I'm a front-end dev striving for intuitive interfaces.
            Currently, enhancing backend skills.
          </p>
          <button>let's talk!</button>
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
    </Container>
  );
}

export default Header;

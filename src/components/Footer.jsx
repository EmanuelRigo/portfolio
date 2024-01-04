import React from "react";
import "../footer.css";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="container">
      <Row>
        <Col className="mx-auto">
          <h4 className="text-center">¡Para conocerme mas!</h4>{" "}
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto d-flex justify-content-evenly" xs={4}>
          <a
            href="https://www.facebook.com/emanuel.rigo?locale=es_LA"
            target="_blank"
          >
            <TiSocialFacebook />
          </a>
          <a href="https://www.linkedin.com/in/emanuelrigo/" target="_blank">
            <TiSocialLinkedin />
          </a>
          <a
            href="https://www.instagram.com/emanuel059103/?igsh=YTQwZjQ0NmI0OA%3D%3D"
            target="_blank"
          >
            <TiSocialInstagram />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

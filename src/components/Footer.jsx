import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="mt-5 mb-3">
      <Row>
        <Col className="mx-auto">
          <h3 className="text-center m-4 display-6">Get to know me!</h3>{" "}
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto d-flex justify-content-evenly" xs={4}>
          <a
            className="footer__a"
            href="https://www.facebook.com/emanuel.rigo?locale=es_LA"
            target="_blank"
          >
            <div className="outline"></div>
            <TiSocialFacebook />
          </a>
          <a
            className="footer__a"
            href="https://www.linkedin.com/in/emanuelrigo/"
            target="_blank"
          >
            <div className="outline"></div>
            <TiSocialLinkedin />
          </a>
          <a
            className="footer__a"
            href="https://www.instagram.com/emanuel059103/?igsh=YTQwZjQ0NmI0OA%3D%3D"
            target="_blank"
          >
            <div className="outline"></div>
            <TiSocialInstagram />
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

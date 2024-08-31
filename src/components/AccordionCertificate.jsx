import { Accordion, Image, Col } from "react-bootstrap";
import { PiCertificateLight } from "react-icons/pi";

function AccordionCertificate() {
  return (
    <Accordion className="px-0 overflow-hidden bgd-transparent mb-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <PiCertificateLight className="certificate__icon me-2" />
          Javascript certificate by Coderhouse
        </Accordion.Header>
        <Accordion.Body>
          <Col md={8} className="mx-auto">
            <Image
              rounded
              fluid
              src="../images/certficado JavaScript.png"
            ></Image>
          </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <PiCertificateLight className="certificate__icon me-2" />
          ReactJs certificate by Coderhouse
        </Accordion.Header>
        <Accordion.Body>
          <Col md={8} className="mx-auto">
            <Image
              rounded
              fluid
              src="../images/6400e53c5da0b8000e3d3cf9.png"
            ></Image>
          </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <PiCertificateLight className="certificate__icon me-2" />
          SQL certificate by Coderhouse
        </Accordion.Header>
        <Accordion.Body>
          <Col md={8} className="mx-auto">
            <Image
              rounded
              fluid
              src="../images/66d1dc8a97c1b739a017b773.png"
            ></Image>
          </Col>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionCertificate;

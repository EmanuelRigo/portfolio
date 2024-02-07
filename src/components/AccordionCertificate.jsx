import { Accordion, Image, Col } from "react-bootstrap";

function AccordionCertificate() {
  return (
    <Accordion className="px-0 overflow-hidden bgd-transparent mb-4">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          Javascript certificate by Coderhouse
        </Accordion.Header>
        <Accordion.Body>
          <Col md={8} className="mx-auto">
            <Image
              rounded
              fluid
              src="../images/637b89664af3dc000ec07938.png"
            ></Image>
          </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>ReactJs certificate by Coderhouse</Accordion.Header>
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
    </Accordion>
  );
}

export default AccordionCertificate;

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  return (
    <>
      <Form className="Row justify-content-center p-4 mx-3 mt-5 bgd-transparent">
        <h3 id="contacto" className="text-dark display-6">
          Contacto
        </h3>
        <hr></hr>
        <hr></hr>
        <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-dark">Nombre y Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="
john doe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-dark">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-dark">Example textarea</Form.Label>
          <Form.Control style={{ resize: "none" }} as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </>
  );
}

export default Contact;

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Image } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Form
        id="contact"
        action="https://formsubmit.co/70ce9dbd3ca2531867135cc4f5555cd2"
        method="POST"
        className="Row justify-content-center p-4 mx-3 mt-5 bgd-transparent form__contact"
      >
        <h3 id="contacto" className="text-dark display-6">
          contact me
        </h3>
        <hr></hr>
        <hr></hr>
        <Form.Group className="mt-4 mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-dark">Name and surname</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="
john doe"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-dark">Your email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label className="text-dark">Message</Form.Label>
          <Form.Control
            name="subject"
            style={{ resize: "none" }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <button type="submit" className="header__btn form__btn float-right">
          <Image fluid src="../svg/brush2.png" alt="" />
          <p className="text-warning">send Message</p>
        </button>
        <input
          type="hidden"
          name="_next"
          value="https://portfolio-nine-nu-91.vercel.app/"
        />
        <input type="hidden" name="_captcha" value="false" />
      </Form>
    </>
  );
}

export default Contact;

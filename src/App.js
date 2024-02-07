import { Container } from "react-bootstrap";
import Aside from "./components/Aside";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Wabe from "./components/Wave";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Aside></Aside>
        <Section></Section>
        <Contact></Contact>
        <Footer></Footer>
      </Container>

      <Wabe />
     
    </>
  );
}

export default App;

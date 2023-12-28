import { Container } from 'react-bootstrap'
import Aside from './components/Aside'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Section from './components/Section';

function App() {
  return (
   <Container>
    <Aside></Aside>
    <Section></Section>
   </Container>
  )
}

export default App
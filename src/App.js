import { Container } from 'react-bootstrap'
import Aside from './components/Aside'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Section from './components/Section';
import Header from './components/Header';
import Wabe from './components/Wave';

function App() {
  return (<>
  <Header/>
   <Container>
    <Aside></Aside>
    <Section></Section>
   </Container>
   <Wabe/></>
   
  )
}

export default App
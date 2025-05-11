import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Button variant="secondary">İlk button</Button></Col>
          <Col><Button>Bootstrap Button</Button></Col>
          <Col><Button variant="danger">3.button</Button></Col>
        </Row>
      </Container>
      <label>SELAM</label>
    </div>
  );
}

export default App;

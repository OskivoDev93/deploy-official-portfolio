import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Analytical } from './analytical/main';
import { Creativity } from './creative/main';
import { Spring } from 'react-spring/renderprops';
import './App.css'





function Brain() {
  return (
    <div className= "app d-block mx-auto text-center">
    <h1 className="heading" style={{color: '#FFF', backgroundColor: '#334d7a7d'}}>Welcome to my Brain</h1>
    <Spring from={{opacity: 0}} to={{opacity: 1}}>
    {props => (
        <div style={props}>
    <Container fluid="md" >
    <Row>
      <Col>
    <Analytical  className="d-flex justify-content-center" />
      </Col>
      <Col>
    <Creativity className="d-flex justify-content-center"/>
      </Col>
    </Row>
    </Container>
        </div>
    )}
    </Spring>
    </div>
  );
}

export default Brain;
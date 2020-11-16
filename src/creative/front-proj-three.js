import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

const FrontEndProjThree= () => {
    return <div>
    <Spring from={{opacity: 0}} to={{opacity: 1}} leave={{opacity: 0}}>
      {props=> (
        <div style={props}>
        <Card style={{ width: '16rem', margin: 'auto', height: '16rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: 'translateY(24px) translateX(160px)' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:'fantasy'}}>Dummy Portfolio website</Card.Title>
    <Card.Text>
      This project serves to test the skills that I had learned. This website is built based on purely HTML, CSS and Javascript.
    </Card.Text>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <a href="https://github.com/OskivoDev93/oskivodev93.github.io-Oskivo93.github.io-commercial">
    <Button variant="primary">Github Repo</Button>
    </a>
    <a href="https://oskivodev93.github.io/oskivodev93.github.io-Oskivo93.github.io-commercial/">
    <Button variant="secondary">Live website</Button>
    </a>
    </div>
  </Card.Body>
</Card>
        </div>
      )}
    </Spring>
    </div>
}

export default FrontEndProjThree;
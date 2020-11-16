import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

const FrontEndProjOne = () => {
    return <div>
    <Spring from={{opacity: 0}} to={{opacity: 1}} leave={{opacity: 0}}>
      {props=> (
        <div style={props}>
        <Card style={{ width: '16rem', margin: 'auto', height: '15rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: ' translateY(-30px) translateX(80px)' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:'fantasy'}}>Bootstrap landing page</Card.Title>
    <Card.Text>
      My very first project using bootstrap. It contains a subscription to mailChimp.
    </Card.Text>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <a href="https://github.com/OskivoDev93/OskivoDev93.github.io">
    <Button variant="primary">Github Repo</Button>
    </a>
    <a href="https://oskivodev93.github.io/">
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


export default FrontEndProjOne
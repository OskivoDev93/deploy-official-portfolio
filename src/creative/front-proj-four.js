import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

const FrontEndProjFour= () => {
    return <div>
    <Spring from={{opacity: 0}} to={{opacity: 1}} leave={{opacity: 0}}>
      {props=> (
        <div style={props}>
        <Card style={{ width: '16rem', margin: 'auto', height: '16rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: ' translateY(-770px) translateX(250px)' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:'fantasy'}}>Robofriends App</Card.Title>
    <Card.Text>
      This project serves to test the skills that I had learned in React. the robots were fetched from Robofriends API.
    </Card.Text>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <a href="https://github.com/OskivoDev93/robofriends-deploy">
    <Button variant="primary">Github Repo</Button>
    </a>
    <a href="https://oskivodev93.github.io/robofriends-deploy/">
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

export default FrontEndProjFour;
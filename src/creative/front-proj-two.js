import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

const FrontEndProjTwo= () => {
    return <div>
    <Spring from={{opacity: 0}} to={{opacity: 1}} leave={{opacity: 0}}>
      {props=> (
        <div style={props}>
        <Card style={{ width: '16rem', margin: 'auto', height: '15rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: 'translateY(-10px) translateX(95px)' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:'fantasy'}}>Weather App</Card.Title>
    <Card.Text>
      My first vanilla javascript project. Uses a free weather API to get the current weather from the user's location.
    </Card.Text>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <a href="https://github.com/OskivoDev93/OskivoDev93.github.io-WeatherApp.github.io">
    <Button variant="primary">Github Repo</Button>
    </a>
    <a href="https://oskivodev93.github.io/OskivoDev93.github.io-WeatherApp.github.io/">
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

export default FrontEndProjTwo;
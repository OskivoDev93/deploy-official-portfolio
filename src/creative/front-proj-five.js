import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops';

const FrontEndProjFive= () => {
    return <div>
    <Spring from={{opacity: 0}} to={{opacity: 1}} leave={{opacity: 0}}>
      {props=> (
        <div style={props}>
        <Card style={{ width: '16rem', margin: 'auto', height: '16rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: ' translateY(-950px) translateX(530px)' }}>
  <Card.Body>
    <Card.Title style={{fontFamily:'fantasy'}}>Pokemon Showdown</Card.Title>
    <Card.Text>
      I made this project to learn graphQL and Apollo. 
    </Card.Text>
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
    <a href="https://github.com/OskivoDev93/poke-graphql">
    <Button variant="primary">Github Repo</Button>
    </a>
    <a href="https://oskivodev93.github.io/poke-graphql/">
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

export default FrontEndProjFive;
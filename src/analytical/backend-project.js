import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'

const BackEndProjOne = () => {
    return <div>
        <Card style={{ width: '16rem', margin: 'auto', height: '15rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: 'cadetblue', transform: 'translateY(50px) translateX(-90px)' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>BackEnd - 1</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
}

export default BackEndProjOne
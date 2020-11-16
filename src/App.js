import 'bootstrap/dist/css/bootstrap.min.css';
import Brain from './brain';
import './App.css'
import Nav from './Nav';
import ContactInfo from './contact-info';
import { BrowserRouter as Router,Route, Switch, Link, Redirect } from 'react-router-dom'




function App() {
  return (
    <Router>
    <div className= "app d-block mx-auto text-center">
    <Nav />
    <Route path="/brain" component={Brain} />
    <Route path="/contact-info" component={ContactInfo} />
    </div>
    </Router>
  );
}

export default App;

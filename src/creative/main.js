import React from 'react';
import '../App.css'
import CreativeBrain from './creativity-brain.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Project from './project';


export class Creativity extends React.Component{
    state = {
        visible: true,
    }

    render() {
        return(
                    <div>
                    {this.state.visible? null: <Project/>}
                       <img className="img-creative" width={200} height={300} onClick={()=>this.setState({visible: !this.state.visible})} src={CreativeBrain} />
                    </div>

        )
    }
    
}
import React from 'react';
import '../App.css'
import analyticalBrain from './analytical-brain.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import BackEndProjOne from './backend-project';
import Project from './project';




export class Analytical extends React.Component{
    state ={
        visible: true,
    }

    render() {
        return(
            <div>   
            {this.state.visible ? null : <Project/>}
                        
                      <img className="img-analytical" width={200} height={300} onClick={()=> this.setState({visible: !this.state.visible})} src={analyticalBrain}/>
            </div>
                   
        )
    }
}


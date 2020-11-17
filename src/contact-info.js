import React from 'react';
import './App.css';
import { Card } from 'react-bootstrap'
import {FaGithub, FaGitlab, FaLinkedin, FaRegBell} from 'react-icons/fa'
import {SiItchDotIo} from 'react-icons/si'
import { Spring } from 'react-spring/renderprops';

function ContactInfo() {
    return (
        <div>
        <Spring from={{opacity: 0}} to={{opacity: 1}}>
            {props=> (
                <div style={props}>
               <Card style={{ width: '50rem', margin: 'auto', height: '20rem', border: 'rgba(0, 123, 255, 0.5)', backgroundColor: '#4ba867', transform: 'translateY(300px)' }}>
                    <Card.Body>
                        <Card.Title className="info">Contact Information</Card.Title>
                        <Card.Text>
                        <div className="info" style={{display:'inline'}}>
                             <h3>    
                             Name: Mujadid Fadhlullah Hussain
                             </h3>
                             <h3>
                             job title: Back-end developer(current)
                             </h3>
                             <h3>
                                 A self-taught developer aspiring to becoming a full-stack developer. 
                             </h3>
                        </div>
                             <p style={{color:'rgba(300,200,100, 0.5)'}} className="skillz">HTML|CSS|JAVASCRIPT|BOOTSTRAP|REACT|NODE|NEST|MYSQL</p>
                        </Card.Text>
                <div className="social-links">
                <a href="https://github.com/OskivoDev93"> <FaGithub style={{height:"50", width:"50" }}/> </a>
                <a href="https://gitlab.com/Mujadid_93"><FaGitlab style={{height:"50", width:"50"}}/> </a>
                <a href="https://www.linkedin.com/in/mujadid-fadhlullah-hussain-254b99152/"><FaLinkedin style={{height:"50", width:"50"}}/> </a>
                <a href="https://oskivodev93.itch.io/"><SiItchDotIo style={{height:"50", width:"50"}}/></a>
                </div>
                    </Card.Body>
                </Card>
                </div>
            )}
        </Spring>
        </div>
    )
}

export default ContactInfo; 
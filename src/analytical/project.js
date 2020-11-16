import BackEndProjOne from './backend-project';
import '../App.css'


function Project() {
    return (
        <div>
            <h1 className="back-project" style={{color: 'rgba(50, 100, 100, 0.5)', fontFamily: 'fantasy', transform: 'translate(150px, 300px) rotate(-45deg)'}}>Analytical</h1>
            <h1 className="to-be-added" style={{color: 'rgba(300, 100, 100, 0.5)', fontFamily: 'fantasy', transform: 'translate(90px, 40px)'}}>To be Added</h1>
            <BackEndProjOne />
        </div>
    )
}


export default Project;
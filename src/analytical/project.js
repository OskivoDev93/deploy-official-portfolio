import BackEndProjOne from './backend-project';
import '../App.css'


function Project() {
    return (
        <div>
            <h1 className="back-project" style={{color: 'rgba(50, 100, 100, 0.5)', fontFamily: 'fantasy', transform: 'translate(150px, 300px) rotate(-45deg)'}}>Analytical</h1>
            <BackEndProjOne />
        </div>
    )
}

export default Project;
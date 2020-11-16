import '../App.css'
import FrontEndProjOne from './front-proj-one';
import FrontEndProjThree from './front-proj-three';
import FrontEndProjTwo from './front-proj-two';

function Project() {
    return (
        <div>
            <h1 className='front-project' style={{transform:'translate(-100px, 280px) rotate(45deg)', fontFamily: "fantasy",}}>
                Creativity
            </h1>
            <FrontEndProjOne />
            <FrontEndProjTwo />
            <FrontEndProjThree />
        </div>
    )
}

export default Project;
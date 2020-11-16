import '../App.css'
import FrontEndProjFive from './front-proj-five';
import FrontEndProjFour from './front-proj-four';
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
            <FrontEndProjFour />
            <FrontEndProjFive />
        </div>
    )
}


export default Project;
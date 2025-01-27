import imagePlaceholder from '../assets/imagePlaceholder.png';
import { useState } from 'react';
import Project1 from './Projects/Project1.tsx';
import Project2 from './Projects/Project2.tsx';
import Project3 from './Projects/Project3.tsx';
import Project4 from './Projects/Project4.tsx';
import Project1C from './Projects/Project1C.tsx';
import arcing from '../assets/Arcing.jpg'
import SPOTspark1 from '../assets/SPOTspark1.jpg'
import PSU2 from '../assets/PSU2.png';
import PCBsoldered from '../assets/PCBsoldered.png'


function ProjectsList() {

    const [selectedProject, setSelectedProject] = useState('nothing');
    
    function renderProject() {
        switch(selectedProject) {
            case 'Flyback':
                return <Project1 /> 
            case 'SecuritySystem':
                return <Project2 />
            case 'SpotWelder':
                return <Project3 />
            case 'PowerSupply':
                return <Project4 />
            case 'Project1C':
                return <Project1C />
        }
    }




    //Handles the visibility of the list
    const [listVisibility, setListVisibility] = useState(true);



    const projectSelection = (projectName: string) => {        
        setListVisibility(false);

        setSelectedProject(projectName);
        renderProject();

    };


    //Handle teh visibility of each project in the projects page list



    return(
        <>
            

            { listVisibility && (

                <div>
                
                    <h1>My Projects</h1>
                    <div className="total-projects-container">
                        <h2 className="project-type-header">Electrical Engineering</h2>

                            <div className="list-group">
                                <div className="project-holder" onClick = { () => projectSelection('Flyback') }>
                                    <img src={arcing} className="project-profile"></img>
                                    <text className="list-group-item"> MOSFET Flyback Driver</text>
                                </div>
                                
                            </div>
                            <div className="list-group">
                                <div className="project-holder" onClick = { () => projectSelection('SecuritySystem') }>
                                    <img src={PCBsoldered} className="project-profile"></img>
                                    <text className="list-group-item">Security System Project</text>
                                </div>
                            </div>
                            <div className="list-group">
                                <div className="project-holder" onClick = { () => projectSelection('SpotWelder') }>
                                    <img src={SPOTspark1} className="project-profile"></img>
                                    <text className="list-group-item">Spot Welder Project</text>
                                </div>
                            </div>
                            <div className="list-group">
                                <div className="project-holder" onClick = { () => projectSelection('PowerSupply') }>
                                    <img src={PSU2} className="project-profile"></img>
                                    <text className="list-group-item">Homemade 500W DC Lab Bench Power Supply</text>
                                </div>
                            </div>


                        <h2 className="project-type-header">Computer Science</h2>
                        <div className="list-group">
                                <div className="project-holder" onClick = {  () => projectSelection('Project1C')  }>
                                    <img src={imagePlaceholder} className="project-profile"></img>
                                    <text className="list-group-item">My project</text>
                                </div>

                        </div>


                        <h2 className="project-type-header">Music</h2>
                        <div className="list-group">
                            <text style={{ display:'flex', justifyContent: 'center', color: 'white'}}>Coming soon. . .</text>
                        </div>


                    </div>


                </div>    
            )}

        {renderProject()}
        </>
        
    )

}

export default ProjectsList;

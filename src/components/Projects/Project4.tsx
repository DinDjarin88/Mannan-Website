
import PSU2 from '../../assets/PSU2.png'
import PSUangled from '../../assets/PSUangled.png'
import PSUgreenwire from '../../assets/PSUgreenwire.png'
import PSUopen1 from '../../assets/PSUopen1.png'
import PSUopen2 from '../../assets/PSUopen2.png'
import PSUspecs from '../../assets/PSUspecs.png'
import PSUwires from '../../assets/PSUwires.png'









function Project4() { 
    

    return ( 
        <> 
            <h1>Spot Welder Project</h1>
            <hr className="project-line"></hr>

            <div className="description-box">
                <div className="process-header-contain">
                    
                    <img src={PSUangled} className="project-description-image"></img>

                    <div className="description-text">
                        <h2 className="description-header">Project Description:</h2>
                        <text className="project-description">Within this project, I repurposed a 500W Computer Power Supply Unit (PSU) from an old computer from a street cleanup to be my lab-bench DC power supply. This power supply came with in-built short circuit protection, hence creating me a high power lab-bench DC power supply which can produce a range of voltages from -12V to 12V.</text>    
                    </div>
   
                </div>


                
                <div className="project-process-container">
                    <h2 className="process-header">Process:</h2>

                    
                    <div className="process-list-holder">
                        <ol className="process">
                            
                            <p className="additional-process-text">After removing the PSU from the computer, the 4 screws holding it together were removed and the large rectifying capcaitors on the board were discharged using a screwdriver.</p>
                            <li className="process-element">All the wires of the PSU were stripped and separated, after which all the colours indicating power rails, Orange (+3.3V), Red (+5V), Yellow (+12V), Blue (-12V) and Black (Ground), were grouped and soldered together, with the the ground being soldered in two separate groups each with half of the total number of ground wires.</li>
                            <li className="process-element">After this, the PSU case was drilled to make space for the banana plugs and power switch</li>
                            <img className="info-images" src={PSUangled}></img> 
                            <img className="info-images" src={PSU2}></img> 
                            <li className="process-element"> After screwing the banana plugs in and fastening the switch, Ring terminals were soldered to the wires and heat-shrink insulation was added. This enabled them to be safely screwed onto their respective banana connectors and become operational</li>
                            <img className="info-images" src={PSUwires}></img> 
                            <li className="process-element">Finally, the green power-on wire was soldered to the switch such that when the switch is toggled on, it is shorted to ground and the power supply is turned on</li>
                            <img className="info-images" src={PSUgreenwire}></img> 
                            <img className="info-images" src={PSUopen2}></img> 
                            <text className="end-text">The power deliver label shows that the +12V rail can work at 25amps, +5V and 50A, +3.3V at 30A, and -12V at 0.8A. Thus showing that it truly is a high-power DC power supply.</text>
                            <img className="info-images" src={PSUspecs}></img> 
                            <img className="info-images" src={PSUopen1}></img> 
                        </ol>         
                        


    
                    </div>
                    
                </div>

            </div>

        </>
    )
}

export default Project4;
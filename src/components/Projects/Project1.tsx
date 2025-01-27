import arcing from '../../assets/Arcing.jpg'
import flybacknTransistor from '../../assets/FlybacknTransistor.jpg'
import diagram from '../../assets/Flyback Driver Circuit Diagram.png'
import CRT from '../../assets/Broken CRT.jpg'
import transformer1 from '../../assets/transformer1.jpg'
import transformer2 from '../../assets/transformer2.jpg'


function Project1() { 
    

    return ( 
        <> 
            <h1>MOSFET Flyback Driver</h1>
            <hr className="project-line"></hr>

            <div className="description-box">
                <div className="process-header-contain">
                    
                    <img src={arcing} className="project-description-image"></img>

                    <div className="description-text">
                        <h2 className="description-header">Project Description:</h2>
                        <text className="project-description">Within this project, I researched and learnt how to build a single MOSFET Flyback driver circuit, to drive a flyback transformer from an old CRT monitor. I did not have the more commonly used IRFZ44N Power MOSFET and hence supplemented it with the FQP30N06L N-Channel power MOSFET, (which I had on hand) , by checking their respective datasheets and ensuring that the specifications were similar.
                            This driver circuit uses minimal other components, including a 150 Ohm resistor, the flyback transformer itself, and wire to wind the primary of the transformer with a center tap at halfway.</text>    
                    </div>
   
                </div>


                
                <div className="project-process-container">
                    <h2 className="process-header">Process:</h2>

                    
                    <div className="process-list-holder">
                        <ol className="process">
                            
                            <p className="additional-process-text"> After removing the Flyback transformer from the CRT monitor, I wired the circuit as I drew up in the diagram below on the left.</p>
                            <img className="info-images" src={diagram} ></img> 
                             <img className="info-images" src={CRT} ></img> 

                            <li className="process-element"> When power is first turned on, the 5V at the center tap of the transformer triggers a small current to flow through the upper half of the primary winding and the 150 Ohm resistor to the gate of the MOSFET</li>
                            <img className="process-image" src={flybacknTransistor}></img> 
                            <li className="process-element">As the gate voltage rises above the threshold voltage of the MOSFET, the mosfet begins to conduct, allowing current to flow between the drain and the source.</li>
                            <li className="process-element">As the current increases between the drain and source, a magnetic field is induced in the transformer core. This causes the induced voltage at the part of the primary coil connected to the gate of the MOSFET to collapse</li>
                            <li className="process-element">This causes the MOSFET to switch off, and the current across the drain and source of the MOSFET (and hence, part of the primary coil) to rapidly drop.</li>
                            <li className="process-element">The rapid drop of the current then causes the magnetic field in the core of the transformer to rapidly collapse, thus inducing a voltage in the secondary coil (which is stepped up due to the high ratio of turns between the primary and seconday coils of the transformer). Finally, the process repeats itself and the circuit oscillates as the current begins flowing to the gate of the MOSFET again after it had stop conducting. </li>
                            <text>This process produces arcs which jump at a gap of approximately 12mm, indicating an estimated 12kV induced</text>
                            <img className="process-image" src={transformer1}></img> 
                            <img className="process-image" src={transformer2}></img> 
                        </ol>                            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project1;
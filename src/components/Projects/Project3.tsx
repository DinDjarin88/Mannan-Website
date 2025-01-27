
import SPOTmelt from '../../assets/SPOTmelt.png'

import SPOTrelay from '../../assets/SPOTrelay.png'
import SPOTsecondary from '../../assets/SPOTsecondary.png'
import SPOTsecondary2 from '../../assets/SPOTsecondary2.png'
import SPOTspark1 from '../../assets/SPOTspark1.jpg'
import SPOTspark2 from '../../assets/SPOTspark2.jpg'
import SPOTvoltage from '../../assets/SPOTvoltage.png'
import SPOTschematic from '../../assets/SPOTschematic.png'





function Project3() { 
    

    return ( 
        <> 
            <h1>Spot Welder Project</h1>
            <hr className="project-line"></hr>

            <div className="description-box">
                <div className="process-header-contain">
                    
                    <img src={SPOTspark1} className="project-description-image"></img>

                    <div className="description-text">
                        <h2 className="description-header">Project Description:</h2>
                        <text className="project-description">Within this project, a custom spot welder was designed and constructed, incorporating numerous safety features and repurposed components. The project involved designing a schematic with safety considerations, including a cooling fan, circuit breaker, and kill switch. A repurposed microwave transformer and car jump-starter cable were utilized to create a high-current, low-voltage output. The spot welder's arm was crafted using custom-designed and machined wood and copper pieces. This project provided valuable hands-on experience in electrical design, safety engineering, and metalworking/machining. The functional device demonstrated its capability by successfully welding metal pieces and even melting steel nails, showcasing the practical application of electrical and mechanical principles.</text>    
                    </div>
   
                </div>


                
                <div className="project-process-container">
                    <h2 className="process-header">Process:</h2>

                    
                    <div className="process-list-holder">
                        <ol className="process">
                            
                            <p className="additional-process-text">After cutting the secondary off of the extracted Microwave Oven Transformer (MOT) the research for safety features began</p>
                            <img className="info-images" src={SPOTsecondary}></img> 

                            <li className="process-element">The spot welder project was initiated as one of the most recent and ongoing projects, with plans to complete it by December of that year.</li>
                            <li className="process-element">Initially, a schematic of the spot welder was designed and created, taking into consideration numerous safety features to ensure the safe operation of the device. The design incorporated safety features such as a cooling fan, a 10 amp circuit breaker built into the device, and a kill switch for the primary of the transformer.</li>
                            <img className="info-images" src={SPOTschematic}></img> 
                            <li className="process-element">A secondary isolated 12V circuit was implemented to safely turn the transformer on and off using a Solid-State Relay controlled by a microswitch.</li>
                            <img className="info-images" src={SPOTrelay}></img> 
                            <img className="info-images" src={SPOTsecondary}></img> 
                            <li className="process-element">The secondary 12V circuit was designed to remain always on, regardless of the kill switch and temperature fuse of the transformer, ensuring continuous operation of the cooling fan to vent away heat.</li>
                            <li className="process-element">To build the device, a broken car jump-starter cable and a microwave oven transformer were repurposed. The secondary winding of the transformer was cut and replaced with one turn of the cable, resulting in a low voltage of 2V AC (as shown below) and high current output with a maximum theoretical 1200A on the output.</li>
                            <img className="info-images" src={SPOTvoltage}></img> 
                            <img className="info-images" src={SPOTsecondary2}></img> 
                            <li className="process-element">Pieces of wood and copper were designed and machined for use in the arm of the spot welder. Although not all parts of the device had been fully machined, it was made functional and capable of welding pieces of metal together. The spot welder demonstrated its power by reaching temperatures high enough to melt steel nails.</li>
                            <img className="info-images" src={SPOTmelt}></img> 
                            <text className="end-text">This device is fully powered by a battery back made from a 3D printed case and repurposed 18650 cells removed from an old laptop battery.  Over the years I have collected many of these cells for various uses in projects by taking apart many laptops. </text>
                            <img className="info-images" src={SPOTspark2}></img> 
                            <img className="info-images" src={SPOTspark1}></img> 
                        </ol>         
                        


    
                    </div>

                    
                </div>
                
                






            </div>






        </>
    )
}

export default Project3;
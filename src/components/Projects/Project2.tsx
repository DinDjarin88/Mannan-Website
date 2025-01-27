
import datasheet from '../../assets/LS7222Datasheet.jpg'

import PCBchloride1 from '../../assets/PCBchloride1.png'
import PCBchloride2 from '../../assets/PCBchloride2.png'
import PCBdesigning from '../../assets/PCBdesigning.png'
import PCBdrilling from '../../assets/PCBdrilling.png'
import PCBinked from '../../assets/PCBinked.png'
import PCBironing from '../../assets/PCBironing.png'
import PCBsoldered from '../../assets/PCBsoldered.png'
import PCBperf1 from '../../assets/PCBperf1.png'
import PCBperf2 from '../../assets/PCBperf2.png'
import PCBbreadboard from '../../assets/PCBbreadboard.png'
import PCBvideo from '../../assets/PCBvideo.mp4'


import ReactPlayer from 'react-player';





function Project2() { 
    

    return ( 
        <> 
            <h1>LS7222 IC Security System</h1>
            <hr className="project-line"></hr>

            <div className="description-box">
                <div className="process-header-contain">
                    
                    <img src={PCBsoldered} className="project-description-image"></img>

                    <div className="description-text">
                        <h2 className="description-header">Project Description:</h2>
                        <text className="project-description">Within this project, I designed and fabricated my own PCB for a fully functional Security system. I based this PCB LS72222 IC from an old security system found during a street cleanup. This project enabled me to learn a lot about the PCB design process and chemistry, since I used EasyEDA's online PCB designer, and my own chemicals to produce a single layer PCB. </text>    
                    </div>
   
                </div>


                
                <div className="project-process-container">
                    <h2 className="process-header">Process:</h2>

                    
                    <div className="process-list-holder">
                        <ol className="process">
                            
                            <p className="additional-process-text">After removing the IC from the old broken board, I looked through the datasheet available online and learnt the functionality of the chip and all its pins.</p>
                            <img className="info-images" src={datasheet}></img> 
                            <li className="process-element">With this knowledge, I conducted calculations to find the values of the components needed to create a functional security system.</li>
                            <img className="info-images" src={PCBbreadboard}></img> 
                            <li className="process-element">Initially, the prototype was created on a breadboard, after which I shifted it to a perfboard where it could be seen to be fully functional.</li>
                            <img className="info-images" src={PCBperf1}></img> 
                            <img className="info-images" src={PCBperf2}></img> 
                            <li className="process-element">After using this protoype, I created a PCB design using EasyEDA’s online PCB designer. </li>
                            <img className="info-images" src={PCBdesigning}></img> 
                            <li className="process-element">To create the single layer PCB, I first Printed out the design using a laser printer, after which I used a clothing iron to transfer the ink onto a copper-clad board.</li>
                            <img className="info-images" src={PCBironing}></img> 
                            <img className="info-images" src={PCBinked}></img> 
                            <li className="process-element">I then etched the copper using a Ferric chloride etching solution, removing all the excess copper</li>
                            <img className="info-images" src={PCBchloride1}></img> 
                            <img className="info-images" src={PCBchloride2}></img> 
                            <li className="process-element">Finally, I used a 0.8mm micro drill bit to manually drill out the hole for the through-hole components, and soldered all the components in. </li>
                            <img className="info-images" src={PCBdrilling}></img> 
                            <text className="end-text">This device is fully powered by a battery back made from a 3D printed case and repurposed 18650 cells removed from an old laptop battery.  Over the years I have collected many of these cells for various uses in projects by taking apart many laptops. </text>
                            <img className="info-images" src={PCBsoldered}></img> 
                        </ol>         
                        
                        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            <ReactPlayer
                            url={PCBvideo}
                            playing={true}
                            muted={false}
                            width="500px"
                            height="100%"
                            />
                        </div>

                        
                                           
                    </div>

                    
                </div>
                
                






            </div>






        </>
    )
}

export default Project2;
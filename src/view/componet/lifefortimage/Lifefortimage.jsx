import React from 'react';
import childrenimage from '../../../assets/image/childrenImage.jpg';
import '../../../style/lifefortImage/Lifefortimage.css';
import doctorimage from '../../../assets/image/doctorImage.jpg';
import location from '../../../assets/image/location.jpg';
import childrenward from '../../../assets/image/children-ward.jpg'
import newbornunit from '../../../assets/image/newborn-unit.jpg'
import reception from '../../../assets/image/reception.jpg'
import privateward from '../../../assets/image/private-ward.jpg'
import operatingtheatre from '../../../assets/image/operating-theatre.jpg'
import inhouselab from '../../../assets/image/inhouse-lab.jpg'
import consultingroom from '../../../assets/image/consulting-room.jpg'



const Imageword = () =>{
    return(

        <div className='image'>
            <div className='unique-care'>
                <img src={childrenimage} style={{borderRadius: '5px'}} alt="children-image" className='children-image' />

                <div className='unique-writeup'>
                    <h2 >Unique care for every  child</h2>
                    <p>
                        LifeFort Hospital blends cutting-edge medical expertise with compassion.<br/>
                        Your child's well-being is our priority. Choose LifeFort for a healthier, happier future.
                    </p>
                </div>
            </div>

            

            <div className='doctor-patient'>
                <div className='doctor-patientWriteUp'>
                    <h2>Child-care That's All Smiles.</h2>
                    <p>
                        At LIFEFORT CHILDREN'S MEDICAL CENTRE (LCMC),<br/>
                        we have a team of professionally qualified and licensed, <br/>dedicated and cheerful staff 
                        comprising of paediatricians, nurses, <br/>laboratory scientists and other support staff to promptly<br/>
                        attend to every child's health needs.
                    </p>
                </div>
                <img src={doctorimage} style={{borderRadius: '5px'}}  alt="doctor-image" className='doctor-image'/> 
                
                <div className='doctor-patientWriteUp-mobileview'>
                    <h2>Child-care That's All Smiles.</h2>
                    <p>
                        At LIFEFORT CHILDREN'S MEDICAL CENTRE (LCMC),
                        we have a team of professionally qualified and licensed, dedicated and cheerful staff 
                        comprising of paediatricians, nurses, laboratory scientists and other support staff to promptly
                        attend to every child's health needs.
                    </p>
                </div>
            </div>

            <div className='location'>

                <img src= {location} style={{borderRadius: '5px'}} alt="location-image" className='location-image' />

                <div className='location-writeUp'>
                    <h2>Location</h2>
                    <p>
                        LIFEFORT CHILDREN'S MEDICAL CENTRE <br/> is nestled in a serene Surulere neighborhood, offering a tranquil<br/>
                        setting for child health services. Easy road access and ample parking enhance<br/> convenience for outpatient and inpatient care.
                    </p>
                </div>
        
            </div>

           <div className='facilities'>
                <div className='facilities-writeUp'>
                    <h2>Our Facilities</h2>
                    <p>
                     At Lifefort, we take pride in providing state-of-the-art facilities dedicated to the well-being and care 
                     of your child. Our modern and child-friendly environment is designed to ensure comfort and ease during their
                      medical journey.

                    </p>
                </div>
                
                
                <img src={reception}  alt="reception"  className='reception'/>
                <img src={consultingroom} alt="conslting-room" className='conslting-room' />
                <img src={childrenward}  alt="children-ward" className='children-ward' />
                <img src={newbornunit}  alt="newborn-unit" className='newborn-unit' />
                <img src={privateward} alt="privateward" className='privateward' />                    
                <img src={inhouselab} alt="inhouse-lab" className='inhouse-lab' />
                <img src={operatingtheatre} alt="operating-theatre" className='operating-theatre' />
                <img src={childrenward}  alt="children-ward" className='children-ward2' />            
            
                


            </div>


        </div>


    );

}
export default Imageword
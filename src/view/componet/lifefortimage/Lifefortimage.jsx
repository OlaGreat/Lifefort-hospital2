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

        <div>
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
                <div>
                    <h3>our Facilities</h3>
                </div>
                
                <img src={reception} style={{width: '400px', height: '300px', borderRadius: '10px'}} alt="reception"  className='reception'/>
                <img src={consultingroom} style={{width: '400px', height: '300px', borderRadius: '10px'}} alt="conslting-room" className='conslting-room' />
                <img src={childrenward} style={{width: '400px', height: '300px', borderRadius: '10px'}} alt="children-ward" className='children-ward' />
                <img src={newbornunit}  style={{width: '400px', height: '300px', borderRadius: '10px'}}alt="newborn-unit" className='newborn-unit' />
                <img src={privateward} style={{width: '400px', height: '300px', borderRadius: '10px'}}alt="privateward" className='privateward' />
                <img src={inhouselab} style={{width: '400px', height: '300px', borderRadius: '10px'}}alt="inhouse-lab" className='inhouse-lab' />
                <img src={operatingtheatre} style={{width: '400px', height: '300px', borderRadius: '10px'}}alt="operating-theatre" className='operating-theatre' />
                <img src={childrenward} style={{width: '400px', height: '300px', borderRadius: '10px'}} alt="children-ward" className='children-ward' />            
            </div>


        </div>


    );

}
export default Imageword
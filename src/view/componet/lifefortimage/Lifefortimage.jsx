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
                <img src={childrenimage} alt="children-image" className='children-image' />
                
                <div className='unique-writeup'>
                <h2 id=''>Unique care for every  child</h2>
                <p id='0-1'>LifeFort Hospital blends cutting-edge medical expertise with compassion.<br/>
                            Your child's well-being is our priority. Choose LifeFort for a healthier, happier future.
                </p>
                </div>
            </div>

            

            <div className='doctor-patient'>
                <img src={doctorimage} alt="doctor-image" className='doctor-image'/>
                <h2>CHILDCARE THAT'S ALL SMILES.</h2>
                <p>At LIFEFORT CHILDREN'S MEDICAL CENTRE (LCMC),<br/>
                    we have a team of professionally qualified and licensed, <br/>dedicated and cheerful staff 
                    comprising of paediatricians, nurses, <br/>laboratory scientists and other support staff to promptly<br/>
                     attend to every child's health needs.
                </p>
        
            </div>

            <div className='location'>

            <img src= {location} alt="location-image" className='location-image' />
            <h2>LOCATION</h2>
            <p>
            LIFEFORT CHILDREN'S MEDICAL CENTRE <br/> is nestled in a serene Surulere neighborhood, offering a tranquil<br/>
             setting for child health services. Easy road access and ample parking enhance<br/> convenience for outpatient and inpatient care.
            </p>
        
            </div>

            <div className='facilities'>
                
                <img src={reception} alt="reception"  className='reception'/>
                <img src={consultingroom} alt="conslting-room" className='conslting-room' />
                <img src={childrenward} alt="children-ward" className='children-ward' />
                <img src={newbornunit} alt="newborn-unit" className='newborn-unit' />
                <img src={privateward} alt="privateward" className='privateward' />
                <img src={inhouselab} alt="inhouse-lab" className='inhouse-lab' />
                <img src={operatingtheatre} alt="operating-theatre" className='operating-theatre' />

            </div>


        </div>


    );

}
export default Imageword
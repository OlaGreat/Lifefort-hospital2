import React from 'react';
import '../../../style/footer/Fotter.css';
import location from '../../../assets/image/icons/location-icon.svg'


const Footer = () => {
    const handleCall =()=>{
        window.location.href = 'tel:+2348037175616'
    }
    const handleEmail = () => {
        window.location.href = 'mailto:info@lifefortchildrenshospital.com'
        

    }
    return(
        <div className='fotter'>
            
            <div className='fotterWriteUp'>
                <h1>Little hearts, big care,<br/> welcome to our childcare family</h1>
            </div>

            <div className='communication-button'>
                <button onClick={handleCall} className='phone-number' >call +234-803-717-5616</button>

                <button onClick={handleEmail} className='email-address'>Email info@lifefortchildrenshospital.com</button>
            </div>

            <div className='address'>
                <img src={location} alt="" />
                <p>
                Lifefort Children's Centre <br />
                70 Agege Motor Road, <br />
                by Bishop St, Junction 101283,<br />
                Lagos, Nigeria.
                </p>

               

                <div>
                    <p className='policy'>
                     ©2017 LIFEFORT CHILDREN'S MEDICAL CENTRE.<br />
                     Terms of Use | Privacy Policy
                     </p>
                </div>

            </div>

                <div >
                    <h2  style={{color: '#f0f0f0', }}>Vision</h2>
                    <p className='vision'>To ensure that our children live life at its fullest by providing excellent <br />
                        comprehensive child health promotive services in a child friendly environment.
                    </p>
                </div>

            <div className='belowFotter'>
                <div className='lifefort'>
                <h2 style={{color: '#070707', backgroundColor: '#ffffff'}}>LIFEFORT</h2>
                <h2> PEDIATRIC CARE</h2>


                </div>

            </div>

            

            
        </div>
    )
}

export default Footer;
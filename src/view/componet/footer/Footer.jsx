import React from 'react';
import '../../../style/footer/Fotter.css';
import location from '../../../assets/image/icons/location-icon.svg'


const Footer = () => {
    const handleCall =()=>{
        window.location.href = 'tel:+2348037175616'
    }
    const handleEmail = () => {
        

    }
    return(
        <div className='fotter'>
            
            <div className='fotterWriteUp'>
                <h1 style={{color: '#f0f0f0'}}>Little hearts, big care,<br/> welcome to our childcare family</h1>
            </div>

            <div className='communication-button'>
                <button onClick={handleCall} style={{color: '#f7f4f4', backgroundColor: '#2775ad', marginLeft: '200px', borderRadius: '6px',
                     height: '50px', font: 'trade-gothic-next', fontSiz: '13px', fontWeight: '700'}}>call +234-803-717-5616
                </button>
                <button onClick={handleEmail} style={{color: '#f7f4f4', backgroundColor: '#2775ad', marginLeft: '100px', borderRadius: '6px',
                    height: '50px', font: 'trade-gothic-next', fontSiz: '13px', fontWeight: '700'}}
                    >Email info@lifefortchildrenshospital.com
                </button>
            </div>

            <div className='address'>
                <img src={location} style={{height: '18px' }} alt="" />
                <p>
                Lifefort Children's Centre <br />
                70 Agege Motor Road, <br />
                by Bishop St, Junction 101283,<br />
                Lagos, Nigeria.
                </p>

                <div>
                    <p style={{marginLeft: '700px' }}>
                     ©2017 LIFEFORT CHILDREN'S MEDICAL CENTRE.<br />
                     Terms of Use | Privacy Policy
                     </p>
                </div>

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
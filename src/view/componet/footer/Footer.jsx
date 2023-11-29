import React from 'react';
import '../../../style/footer/Fotter.css';


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
                <button onClick={handleCall}>call +234-803-717-5616</button>
                <button onClick={handleEmail} style={{color: '#f7f4f4', backgroundColor: '#1bbc9b', marginLeft: '200px', borderRadius: '6px',
                 height: '50px', font: 'trade-gothic-next', fontSiz: '13px', fontWeight: '700'}}
                >Email info@lifefortchildrenshospital.com</button>

            </div>

            

            
        </div>
    )
}

export default Footer;
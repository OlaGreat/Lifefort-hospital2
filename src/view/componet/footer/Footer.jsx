import React from 'react';


const Footer = () => {
    const handleCall =()=>{
        window.location.href = 'tel:+2348037175616'

    }
    const handleEmail = () => {

    }
    return(
        <div>
            <h1 style={{color: '#f0f0f0'}}>Little hearts, big care,<br/> welcome to our childcare family</h1>
            <button onClick={handleCall}>call +234-803-717-5616</button>
            <button onClick={handleEmail}>Email info@lifefortchildrenshospital.com</button>

            
        </div>
    )
}

export default Footer;
import React from "react";
import '../../../style/header/Header.css'
import lifefortlogo from '../../../assets/image/lifefort logo.jpg'
import mobile from '../../../assets/image/icons/mobile.svg'
import Email from '../../../assets/image/icons/email.svg'


const Header = () =>{
    const handleMobile = () =>{
        window.location.href = 'tel:+2348037175616'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:info@lifefortchildrenshospital.com'
    }

    return(
        <div className="header">
            <div>
                <img src ={lifefortlogo} alt="lifefortlogo" className='lifeforthospital' />  
            </div>

            <div className="contact-us">

                <div className="phone">
                    <p onClick={handleMobile} style={{paddingRight: '14px'}}>+234-803-717-5616</p>
                    <img src={mobile} alt="" onClick={handleMobile} />
                </div>

                <div className="email">
                    <p onClick={handleEmail} style={{marginTop: '1px'}} >Email Us</p>
                    <img src={Email}  style={{height: '20px', paddingLeft: '13px'}} alt="" onClick={handleEmail}/>        
                </div>


            </div>

            

            

            

        </div>

    )
}
export default Header;

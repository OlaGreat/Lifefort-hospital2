import React, { useState } from "react";
import '../../../style/header/Header.css'
import lifefortlogo from '../../../assets/image/lifefort logo.jpg'
import mobile from '../../../assets/image/icons/mobile.svg'
import Email from '../../../assets/image/icons/email.svg'
import { Link } from "react-router-dom";





const Header = () =>{
    const handleMobile = () =>{
        window.location.href = 'tel:+2348037175616'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:info@lifefortchildrenshospital.com'
    }
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
      };

   

    return(
        <div className="header">

            <div>
        
                <a href="#landing-page"> 
                    <img src ={lifefortlogo} alt="lifefortlogo" href="#landing-page" className='lifeforthospital' /> 
                </a>
            </div>


            <input
                type="checkbox"
                className="hamburger-checkbox"
                id="hamburger-checkbox"
                checked={open}
                onChange={() => setOpen(!open)}
            />
            <label htmlFor="hamburger-checkbox" className={`hamburger-label ${open ? 'is-active' : ''}`}>
                <div className="bar"></div>
            </label>
            
            <ul id="H-list">
                <li><a href="" onClick={handleClose}>Home</a></li>
                <li><a href="#about" onClick={handleClose}>About Lifefort</a></li>
                <li><a href="#services" onClick={handleClose}>Services</a></li>
                <li><Link onClick={handleEmail}>Meet the Medical Director</Link></li>
                <li><Link onClick={handleMobile}>Contact us</Link></li>
            </ul>

            

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

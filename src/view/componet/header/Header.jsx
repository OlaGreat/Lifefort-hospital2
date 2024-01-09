import React, { useState } from "react";
import '../../../style/header/Header.css'
import lifefortlogo from '../../../assets/image/lifefort logo.jpg'
import mobile from '../../../assets/image/icons/mobile.svg'
import Email from '../../../assets/image/icons/email.svg'
import landinPage from '../landingPage/LandingPage.jsx';
import about from '../Aboutlifefort/Aboutlifefort.jsx';
import contact from '../footer/Footer.jsx'



const Header = () =>{
    const handleMobile = () =>{
        window.location.href = 'tel:+2348037175616'
    }

    const handleEmail = () => {
        window.location.href = 'mailto:info@lifefortchildrenshospital.com'
    }
    const [open, setOpen] = useState(false)

   

    return(
        <div className="header">

            <div>
                <img src ={lifefortlogo} alt="lifefortlogo" className='lifeforthospital' />  
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
                <li><a href="">Home</a></li>
                <li><a href="">About Lifefort</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Meet the Medical Director</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
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

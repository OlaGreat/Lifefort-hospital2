import React from 'react'
import facebookimage from '../../../assets/image/facebook.jpg'
import instagramimage from '../../../assets/image/instagram.png'
import ximage from '../../../assets/image/xtwitter.png'
import Navbarcss from '../../../style/navbar/Navbar.css';
import landinPage from '../landingPage/LandingPage.jsx';
import about from '../Aboutlifefort/Aboutlifefort.jsx';
import contact from '../footer/Footer.jsx'
import { Link } from 'react-router-dom';

const navbar = () => {

  const handleEmail = () => {
    window.location.href = 'mailto:info@lifefortchildrenshospital.com'
  }

  const handleMobile = () => {
    window.location.href = 'tel:+2348037175616'

  }
  return (
    <div className='description'>
        


        <ul id='list'>
          <li><a href="">Home</a></li>
          <li><Link to="/aboutlifefort">About Lifefort</Link></li>
          <li><Link to="/ourservices">Services</Link></li>
          <li><Link onClick={handleEmail}>Meet the Medical Director</Link></li>
          <li><Link onClick={handleMobile}>Contact us</Link></li>
        </ul>

        <div>
            <img src={facebookimage} alt="facebook-icon" className='facebook-icon'/>
            <img src={instagramimage} alt="instagram icon" className='instagram-icon'/>   
            <img src={ximage} alt="x icon" className='x-icon' />
        </div>
        

    </div>
  )
}

export default navbar;

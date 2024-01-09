import React from 'react'
import facebookimage from '../../../assets/image/facebook.jpg'
import instagramimage from '../../../assets/image/instagram.png'
import ximage from '../../../assets/image/xtwitter.png'
import Navbarcss from '../../../style/navbar/Navbar.css';
import landinPage from '../landingPage/LandingPage.jsx';
import about from '../Aboutlifefort/Aboutlifefort.jsx';
import contact from '../footer/Footer.jsx'

const navbar = () => {
  return (
    <div className='description'>
        


        <ul id='list'>
            <li><a href="">Home</a></li>
            <li><a href="">About Lifefort</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Meet the medical Director</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
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

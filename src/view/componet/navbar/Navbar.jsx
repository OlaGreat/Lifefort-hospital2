import React from 'react'
import facebookimage from '../../../assets/image/facebook.jpg'
import instagramimage from '../../../assets/image/instagram.png'
import ximage from '../../../assets/image/xtwitter.png'
import Navbarcss from '../../../style/navbar/Navbar.css';

const navbar = () => {
  return (
    <div className='description'>
        


        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Lifefort</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">Meet the medical Director</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
            <li><img src={facebookimage} alt="facebook-icon" className='facebook-icon'/></li>
            <li><img src={instagramimage} alt="instagram icon" className='instagram-icon'/></li>    
            <li><img src={ximage} alt="x icon" className='x-icon' /></li>

        </ul>
        

    </div>
  )
}

export default navbar;

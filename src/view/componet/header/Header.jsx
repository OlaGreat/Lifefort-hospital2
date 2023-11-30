import React from "react";
import '../../../style/header/Header.css'
import lifefortlogo from '../../../assets/image/lifefort logo.jpg'
import mobile from '../../../assets/image/icons/mobile.svg'
import Email from '../../../assets/image/icons/email.svg'

const Header = () =>{

    return(
        <div>
            <div>
                <img src={lifefortlogo} alt="lifefortlogo" className='lifeforthospital' />  
            </div>
            <img src={Email} style={{height: '20px' }} alt="" /> 

            <img src={mobile} alt="" />

            <div>
                     
            </div>
        </div>

    )
}
export default Header;

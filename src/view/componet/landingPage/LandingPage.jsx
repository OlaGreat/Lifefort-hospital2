import React from 'react'

import Navbar from '../navbar/Navbar';
import Aboutlifefort from '../Aboutlifefort/Aboutlifefort';
import '../../../style/landingpage/Landingpage.css';
import lifefortlogo from '../../../assets/image/lifefort logo.jpg'
import Imageword from '../lifefortimage/Lifefortimage';


const LandingPage = () => {
  return (
  <div>
    <div>
      <img src={lifefortlogo} alt="lifefortlogo" className='lifeforthospital' />
    </div>
    <Navbar/>
    <Aboutlifefort/>
    <Imageword/>

  </div>
  
  )
}
export default LandingPage;

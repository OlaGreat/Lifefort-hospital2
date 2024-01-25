import React from 'react'

import Navbar from '../navbar/Navbar';
import Aboutlifefort from '../Aboutlifefort/Aboutlifefort';
import '../../../style/landingpage/Landingpage.css';
import Imageword from '../lifefortimage/Lifefortimage.jsx';
import Ourservice from '../ourservice/Ourservice.jsx';
import Map from '../map/Map.jsx';
import Footer from '../footer/Footer.jsx';

import Header from '../header/Header.jsx';


const LandingPage = () => {
  return (
  <div id='landing-page'>
    <Header/>
    <div className='below-header'>
    <Navbar/>
    <Aboutlifefort/>
    <Imageword/>
    <Ourservice/>
    <Map/>
    <Footer/>
    </div>

  </div>
  )
}

export default LandingPage;

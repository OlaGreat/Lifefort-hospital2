import React from 'react'

import Navbar from '../navbar/Navbar';
import Aboutlifefort from '../Aboutlifefort/Aboutlifefort';
import '../../../style/landingpage/Landingpage.css';
import Imageword from '../lifefortimage/Lifefortimage.jsx';
import Ourservice from '../ourservice/Ourservice.jsx';
import Map from '../map/Map.jsx';
import Fotter from '../footer/Footer.jsx';

import Header from '../header/Header.jsx';


const LandingPage = () => {
  return (
  <div>
    <Header/>
    <Navbar/>
    <Aboutlifefort/>
    <Imageword/>
    <Ourservice/>
    <Map/>
    <Fotter/>

  </div>
  )
}

export default LandingPage;
